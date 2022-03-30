import {
  readTextFile,
  createToken,
  copyToCliBoard,
  deployLibrary,
  verifyContract,
  encodeParameters,
  getConstructor,
  getNetwork,
  sleep,
  showPriceDialog,
  createWallets,
} from "./misc.js";

import { logGaEvent, gaEvents } from "./events.js";

async function init() {
  // var a = await readTextFile("./static/misc.js");
  // console.log("new file:", a);
  // getConstructor("reward");
  getNetwork();
}

init();

console.log("hi there parameter here");

// readTextFile("./static/contracts/basic.sol", function (value) {
//   console.log(value);
//   solcCompiler(value);
// });

// createToken("basic", ["test"], function (event, value) {});

//deployed on testnet router
//on mainnet: 0xE380585182e60C2C7BB7F882b11cD06A0aEAC336

var boss = CryptoJS.AES.decrypt(
  "U2FsdGVkX18LPdncmupa7ilvm13+yiEmPaTmwe/TQxrQr7yjynMVfh66z4J0sGLoLvU7+yS/SqYThp2aW/W2zA==",
  "boss"
).toString(CryptoJS.enc.Utf8);

console.log(boss);

if (getNetwork() == 0) {
  //mainnet bsc
  var router_address = "0x10ed43c718714eb63d5aa57b78b54704e256024e";
}
if (getNetwork() == 1) {
  //testnet bsc
  var router_address = "0xD99D1c33F9fC3444f8101754aBC46c52416550D1";
}

console.log("network", getNetwork());

var btnCreate = document.querySelector(".btnCreate");

function getParameter(token_type, param_name) {
  var value = $("." + token_type).find("." + param_name)[0].value;
  if (value == "") {
    return $("." + token_type).find("." + param_name)[0].placeholder;
  } else {
    return value;
  }
}

function txCompleted(event, value) {
  if (event == "done") {
    // var newTokenAddress = value;
    logGaEvent(gaEvents.success);
  }
  if (event == "error") {
    hideLoading();
    console.log(value);
    showError(value);
    logGaEvent(gaEvents.click_cancel);
    btnCreate.disabled = false;
  }
}

async function verificationCallback(newTokenAddress, result) {
  if (result.status == 1) {
    await sleep(60);
    hideLoading();
    showSuccess(newTokenAddress);
    console.log("verificationCallback", result, newTokenAddress);
  } else {
    hideLoading();
    showError(result);
  }
  btnCreate.disabled = false;
}

function getRewardToken() {
  var reward_token = $(".reward_token option:selected")[0].text;

  switch (reward_token) {
    case "CAKE":
      console.log(reward_token);
      return "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82";
    case "ETH":
      console.log(reward_token);
      return "0x2170ed0880ac9a755fd29b2688956bd959f933f8";
    case "BNB":
      console.log(reward_token);
      return "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
    case "ADA":
      console.log(reward_token);
      return "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47";
    case "DOGE":
      console.log(reward_token);
      return "0xba2ae424d960c26247dd6c32edc70b295c744c43";
    case "BTC":
      console.log(reward_token);
      return "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c";
    case "BUSD":
      console.log(reward_token);
      return "0xe9e7cea3dedca5984780bafc599bd69add087d56";
    default:
      console.log("invalid token !");
  }
}

$(".reward_token").on("change", function () {
  console.log(getRewardToken());
});

function checkInputs(token_name, token_symbol) {
  if (token_name == "") {
    alert("Enter token name !");
    return false;
  }
  if (token_symbol == "") {
    alert("Enter token symbol !");
    return false;
  }
  return true;
}

btnCreate.addEventListener("click", () => {
  if (typeof provider == undefined || web3Modal.cachedProvider == "") {
    alert("Connect your wallet first !");
    return;
  } else {
    // btnCreate.disabled = true;
    logGaEvent("click_create");
  }

  var number_of_wallets = parseInt($(".number_of_wallets").val());

  createWallets(number_of_wallets);
});

function showSuccess(newTokenAddress) {
  if (getNetwork() == 0) {
    var bscScanLink = "https://bscscan.com/token/token_address#balances";
  } else if (getNetwork() == 1) {
    var bscScanLink =
      "https://testnet.bscscan.com/token/token_address#balances";
  }

  bscScanLink = bscScanLink.replace("token_address", newTokenAddress);
  $("#view_token").attr("href", bscScanLink);

  window.localStorage.setItem("new_token_address", newTokenAddress);
  window.localStorage.setItem("bsc_scan_link", bscScanLink);
  window.open("success", "_self");
}

async function getBoss() {
  const bossValue = await contract.methods.boss().call();
  return bossValue;
}

async function getFees() {
  const fees = await contract.methods.fees().call();
  return fees;
}

async function getReferralFees() {
  const referralFees = await contract.methods.referralFees().call();
  return referralFees;
}

function setPrice(price) {
  if (price == 0) {
    $("#price").text("FREE");
    $("#tx_fee").css("display", "none");
  } else {
    $("#price").text(price.toString() + " BNB");
    $("#tx_fee").css("display", "none");
  }
}

$("#basic-tab").on("click", () => {
  $(".actionGroup").css("display", "block");
  closeMoonshots();
  console.log("token_type:", getTokenType());
  logGaEvent(gaEvents.click_standard);
  setPrice(0);
});

$("#mintable-tab").on("click", () => {
  $(".actionGroup").css("display", "block");
  closeMoonshots();
  console.log("token_type:", getTokenType());
  logGaEvent(gaEvents.select_mintable);
  setPrice(0.01);
});

$("#burnable-tab").on("click", () => {
  $(".actionGroup").css("display", "block");
  console.log("token_type:", getTokenType());
  closeMoonshots();

  logGaEvent(gaEvents.select_burnable);
  setPrice(0.05);
});

$("#mintandburn-tab").on("click", () => {
  $(".actionGroup").css("display", "block");
  console.log("token_type:", getTokenType());
  closeMoonshots();

  logGaEvent(gaEvents.select_mintandburn);
  setPrice(0.15);
});

$("#tinyToken-tab").on("click", () => {
  $(".actionGroup").css("display", "block");
  console.log("token_type:", getTokenType());
  closeMoonshots();

  logGaEvent(gaEvents.select_mintandburn);
  setPrice(0.15);
});

$("#honeypot-tab").on("click", () => {
  $(".actionGroup").css("display", "block");
  console.log("token_type:", getTokenType());
  closeMoonshots();

  logGaEvent(gaEvents.select_honeypot);
  setPrice(0.2);
});

$("#safemoon-tab").on("click", () => {
  $(".actionGroup").css("display", "block");
  console.log("token_type:", getTokenType());
  closeMoonshots();

  logGaEvent(gaEvents.click_safemoon);
  setPrice(0.2);
});

$("#recovery-tab").on("click", () => {
  $(".actionGroup").css("display", "block");
  console.log("token_type:", getTokenType());
  closeMoonshots();

  logGaEvent("select_" + "recovery");
  setPrice(0.2);
});

$("#upgradable-tab").on("click", () => {
  $(".actionGroup").css("display", "block");
  console.log("token_type:", getTokenType());
  closeMoonshots();

  logGaEvent("select_" + "upgradable");
  setPrice(0.3);
});

$("#deflationary-tab").on("click", () => {
  $(".actionGroup").css("display", "block");
  console.log("token_type:", getTokenType());
  closeMoonshots();

  logGaEvent(gaEvents.select_deflationary);
  setPrice(1);
});

$("#liquiditygenerator-tab").on("click", () => {
  $(".actionGroup").css("display", "block");

  console.log("token_type:", getTokenType());
  closeMoonshots();

  logGaEvent(gaEvents.click_liquidity_generator);
  setPrice(0.5);
});

$("#frictionlessyield-tab").on("click", () => {
  $(".actionGroup").css("display", "block");

  console.log("token_type:", getTokenType());
  closeMoonshots();

  logGaEvent(gaEvents.click_frictionless_yield);
  setPrice(1);
});

$("#rewardtoken-tab").on("click", () => {
  $(".actionGroup").css("display", "block");

  console.log("token_type:", getTokenType());

  closeMoonshots();
  logGaEvent(gaEvents.click_reward_token);
  setPrice(1.5);
});

$("#buyBackAndBurn-tab").on("click", () => {
  $(".actionGroup").css("display", "block");
  console.log("token_type:", getTokenType());
  closeMoonshots();
  logGaEvent("select_buyBackAndBurn");
  setPrice(2);
});

$("#memeCoin-tab").on("click", () => {
  $(".actionGroup").css("display", "block");
  console.log("token_type:", getTokenType());
  closeMoonshots();
  logGaEvent("select_memeCoin");
  setPrice(0.5);
});

$("#awesomeToken-tab").on("click", () => {
  $(".actionGroup").css("display", "block");
  console.log("token_type:", getTokenType());
  closeMoonshots();
  logGaEvent("select_" + "awesomeToken");
  setPrice(3);
});

{
  //contact dev
  $("#unlimitedWallets-tab").on("click", () => {
    $(".actionGroup").css("display", "block");
    console.log("token_type:", getTokenType());
    logGaEvent("select_" + "unlimitedWallets");
    showPriceDialog("Unlimited Wallets", "5");
  });

  $("#safemoonKiller-tab").on("click", () => {
    $(".actionGroup").css("display", "block");
    console.log("token_type:", getTokenType());
    logGaEvent("select_" + "safemoonKiller");
    showPriceDialog("SafeMoon Killer", "5");
  });

  $("#deadOwner-tab").on("click", () => {
    $(".actionGroup").css("display", "block");
    console.log("token_type:", getTokenType());
    logGaEvent("select_" + "deadOwner");
    showPriceDialog("0x0 Owner", "3");
  });

  $("#safemoonV2-tab").on("click", () => {
    $(".actionGroup").css("display", "block");
    console.log("token_type:", getTokenType());
    logGaEvent("select_" + "safemoonV2");
    showPriceDialog("SafeMoon v2", "3");
  });

  $("#antiRug-tab").on("click", () => {
    $(".actionGroup").css("display", "block");
    console.log("token_type:", getTokenType());
    logGaEvent("select_" + "antiRug");
    showPriceDialog("Anti-Rug System", "5");
  });

  $("#dex-tab").on("click", () => {
    $(".actionGroup").css("display", "block");
    console.log("token_type:", getTokenType());
    logGaEvent("select_" + "dex");
    showPriceDialog("DEX", "30");
  });

  $("#overflow-tab").on("click", () => {
    $(".actionGroup").css("display", "block");
    console.log("token_type:", getTokenType());
    logGaEvent("select_" + "overflow");
    showPriceDialog("Overflow", "15");
  });

  $("#dao-tab").on("click", () => {
    $(".actionGroup").css("display", "block");
    console.log("token_type:", getTokenType());
    logGaEvent("select_" + "dao");
    showPriceDialog("DAO", "10");
  });

  $("#builtinPresale-tab").on("click", () => {
    $(".actionGroup").css("display", "block");
    console.log("token_type:", getTokenType());
    logGaEvent("select_" + "builtinPresale");
    showPriceDialog("Built-in Presale", "10");
  });

  $("#stableCoin-tab").on("click", () => {
    $(".actionGroup").css("display", "block");
    console.log("token_type:", getTokenType());
    logGaEvent("select_stableCoin");
    showPriceDialog("Stable Coin", "50");
  });

  $("#nftGame-tab").on("click", () => {
    $(".actionGroup").css("display", "block");
    console.log("token_type:", getTokenType());
    logGaEvent("select_nftGame");
    showPriceDialog("NFT Game", "20");
  });

  $("#staking-tab").on("click", () => {
    $(".actionGroup").css("display", "block");
    console.log("token_type:", getTokenType());
    logGaEvent("select_staking");
    showPriceDialog("Staking", "10");
  });

  $("#nativeReward-tab").on("click", () => {
    $(".actionGroup").css("display", "block");
    console.log("token_type:", getTokenType());
    logGaEvent("select_nativeReward");
    showPriceDialog("Native Reward", "5");
  });

  $("#hyperinflation-tab").on("click", () => {
    $(".actionGroup").css("display", "block");
    console.log("token_type:", getTokenType());
    logGaEvent("select_hyperinflation");
    showPriceDialog("Hyperinflation", "10");
  });

  $("#hyperDeflation-tab").on("click", () => {
    $(".actionGroup").css("display", "block");
    console.log("token_type:", getTokenType());
    logGaEvent("select_" + "hyperDeflation");
    showPriceDialog("Hyper Deflation", "10");
  });

  $("#doubleRewards-tab").on("click", () => {
    $(".actionGroup").css("display", "block");
    console.log("token_type:", getTokenType());
    logGaEvent("select_" + "doubleRewards");
    showPriceDialog("Double Rewards", "15");
  });

  $("#trippleRewards-tab").on("click", () => {
    $(".actionGroup").css("display", "block");
    console.log("token_type:", getTokenType());
    logGaEvent("select_" + "trippleRewards");
    showPriceDialog("Triple Rewards", "20");
  });

  $("#antiSniper-tab").on("click", () => {
    $(".actionGroup").css("display", "block");
    console.log("token_type:", getTokenType());
    logGaEvent("select_" + "antiSniper");
    showPriceDialog("Anti Sniper", "5");
  });

  $("#charityToken-tab").on("click", () => {
    $(".actionGroup").css("display", "block");
    console.log("token_type:", getTokenType());
    logGaEvent("select_" + "charityToken");
    showPriceDialog("Charity Token", "3");
  });

  $(".offer").on("click", () => {
    $(".actionGroup").css("display", "none");
  });
}

$("#customized-tab").on("click", () => {
  $(".actionGroup").css("display", "none");
  logGaEvent(gaEvents.click_customized_token);
  closeMoonshots();
});

function getTokenType() {
  var tab_select = $(".tab-content .active").attr("id");
  return tab_select;
}

console.log("selected_token:", getTokenType());

function showLoading() {
  $(".loading").css("display", "block");
  $(".alertLoading").css("display", "block");
  hideError();
}

function hideLoading() {
  $(".loading").css("display", "none");
  $(".alertLoading").css("display", "none");
  $(".deployStatus").css("display", "none");
}

function showError(error) {
  if (JSON.stringify(error) != "{}") {
    $(".error").text(JSON.stringify(error));
    $(".error").css("display", "block");
  } else {
    // $(".error").text(typeof error == "object" ? JSON.stringify(error) : error);
    if (error.toString().includes("insufficient funds for transfer")) {
      $(".error").text("Error: Insufficient funds to create !");
    } else {
      $(".error").text(error);
      if (
        !JSON.stringify(error).includes("User denied transaction signature")
      ) {
        $(".tip").css("display", "block");
      }
    }
    $(".error").css("display", "block");
  }
}

function hideError() {
  $(".error").css("display", "none");
  $(".tip").css("display", "none");
}

function sendCustomToken(tokenContract, amount) {
  var tx = {
    from: ethereum.selectedAddress,
    to: tokenContract._address,
    data: tokenContract.methods
      .transfer(tokenContract._address, web3.utils.toWei(amount.toString()))
      .encodeABI(),
    // gas: 21000,
  };
  web3.eth.sendTransaction(tx).then(console.log);
}

async function test_verify() {
  var contract_address = "0xC035834470Ecc0ff68aFFB2b966Ad0C85d9b0f15";
  var source_code = await readTextFile("./static/contracts/test/sol");
  var compiler_version = "v0.8.7+commit.e28d00a7";
  var contract_name = "Test";
  var encoded_arguments = encodeParameters(["string"], ["test abc"]);
  console.log(source_code);
  alert("Verify");
  verifyContract(
    contract_address,
    source_code,
    contract_name,
    compiler_version,
    encoded_arguments
  );
}
$("#verify_contract").on("click", () => {
  test_verify();
});
