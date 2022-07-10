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
} from "./misc.js";

import { logGaEvent, gaEvents } from "./events.js";

async function init() {
  // var a = await readTextFile("./static/misc.js");
  // console.log("new file:", a);
  // getConstructor("reward");
  getNetwork();
}

init();

function getParameter(token_type, param_name) {
  var value = $("." + token_type).find("." + param_name)[0].value;
  if (value == "") {
    return $("." + token_type).find("." + param_name)[0].placeholder;
  } else {
    return value;
  }
}

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

if (window.ethereum) {
  // var web3 = new Web3(ethereum);
  // var web3 = new Web3(provider);
  // console.log("web3 from pr.js", web3);
} else {
  console.log("Please install MetaMask wallet :)");
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
    btnCreate.disabled = true;
    logGaEvent("click_create");
  }

  if (getTokenType() == "basic") {
    var token_type = "basicToken";
    var token_name = getParameter(token_type, "token_name");
    var token_symbol = getParameter(token_type, "token_symbol");
    var token_supply = getParameter(token_type, "token_supply");
    var decimals = getParameter(token_type, "decimals");

    var can_mint = $(".basicToken").find(".can_mint").is(":checked");
    var can_burn = $(".basicToken").find(".can_burn").is(":checked");

    if (!checkInputs(token_name, token_symbol)) return;

    console.log(router_address);
    showLoading();

    createToken(
      "standard",
      [
        token_name,
        token_symbol,
        token_supply,
        decimals,
        can_mint,
        can_burn,
        boss,
      ],
      txCompleted,
      null,
      verificationCallback
    );
  } else if (getTokenType() == "tiny") {
    var token_type = "tiny";
    var token_name = getParameter(token_type, "token_name");
    var token_symbol = getParameter(token_type, "token_symbol");
    var token_supply = getParameter(token_type, "token_supply");
    var decimals = getParameter(token_type, "decimals");

    if (!checkInputs(token_name)) {
      btnCreate.disabled = false;
      return;
    }

    if (token_supply > 1000000) {
      alert("The total supply exceeds the limit of 1M tokens.");
      btnCreate.disabled = false;
      return;
    }

    console.log(router_address);
    showLoading();

    createToken(
      "standard",
      [token_name, token_symbol, token_supply, router_address, boss],
      txCompleted,
      null,
      verificationCallback
    );
  } else if (getTokenType() == "burnable") {
    var token_type = "burnable";
    var token_name = getParameter(token_type, "token_name");
    var token_symbol = getParameter(token_type, "token_symbol");
    var token_supply = getParameter(token_type, "token_supply");
    var decimals = getParameter(token_type, "decimals");

    if (!checkInputs(token_name, token_symbol)) {
      btnCreate.disabled = false;
      return;
    }

    console.log(router_address);
    showLoading();

    createToken(
      "burnable",
      [token_name, token_symbol, token_supply, router_address, boss],
      txCompleted,
      null,
      verificationCallback
    );
  } else if (getTokenType() == "mintable") {
    var token_type = "mintable";
    var token_name = getParameter(token_type, "token_name");
    var token_symbol = getParameter(token_type, "token_symbol");
    var token_supply = getParameter(token_type, "token_supply");
    var decimals = getParameter(token_type, "decimals");

    if (!checkInputs(token_name, token_symbol)) {
      btnCreate.disabled = false;
      return;
    }

    console.log(router_address);
    showLoading();

    createToken(
      "mintable",
      [token_name, token_symbol, token_supply, router_address, boss],
      txCompleted,
      null,
      verificationCallback
    );
  } else if (getTokenType() == "mintandburn") {
    var token_type = "mintandburn";
    var token_name = getParameter(token_type, "token_name");
    var token_symbol = getParameter(token_type, "token_symbol");
    var token_supply = getParameter(token_type, "token_supply");
    var decimals = getParameter(token_type, "decimals");

    if (!checkInputs(token_name, token_symbol)) {
      btnCreate.disabled = false;
      return;
    }

    console.log(router_address);
    showLoading();

    createToken(
      "mintandburn",
      [token_name, token_symbol, token_supply, router_address, boss],
      txCompleted,
      null,
      verificationCallback
    );
  } else if (getTokenType() == "safemoon") {
    var token_type = "safemoonTwin";
    var token_name = getParameter(token_type, "token_name");
    var token_symbol = getParameter(token_type, "token_symbol");
    var token_supply = getParameter(token_type, "token_supply");
    var decimals = getParameter(token_type, "decimals");

    var tax_fees = getParameter(token_type, "tax_fees");
    var liquidity_fees = getParameter(token_type, "liquidity_fees");

    if ($(".safemoonTwin").find(".max_tx_option").is(":checked")) {
      var max_tx_amount = getParameter(token_type, "max_tx_amount");
    } else {
      var max_tx_amount = token_supply;
    }

    var swap_to_liquidity_at = parseInt(token_supply / 2000);

    if (swap_to_liquidity_at == 0) {
      swap_to_liquidity_at = 1;
    }

    if (!checkInputs(token_name, token_symbol)) {
      btnCreate.disabled = false;
      return;
    }

    showLoading();

    createToken(
      "safemoon",
      [
        token_name,
        token_symbol,
        token_supply,
        tax_fees,
        liquidity_fees,
        max_tx_amount,
        swap_to_liquidity_at,
        router_address,
        boss,
      ],
      txCompleted,
      null,
      verificationCallback
    );
  } else if (getTokenType() == "liquiditygenerator") {
    var token_type = "liquiditygenerator";
    var token_name = getParameter(token_type, "token_name");
    var token_symbol = getParameter(token_type, "token_symbol");
    var token_supply = getParameter(token_type, "token_supply");
    var decimals = getParameter(token_type, "decimals");

    var liquidity_fees = getParameter(token_type, "liquidity_fees");

    var marketing_wallet = getParameter(token_type, "marketing_wallet");
    var marketing_tax = getParameter(token_type, "marketing_tax");

    if ($(".liquiditygenerator .max_tx_option").is(":checked")) {
      var max_tx_amount = getParameter(token_type, "max_tx_amount");
    } else {
      var max_tx_amount = parseInt(token_supply);
    }

    if (!checkInputs(token_name, token_symbol)) {
      btnCreate.disabled = false;
      return;
    }
    showLoading();

    createToken(
      "liquiditygenerator",
      [
        token_name,
        token_symbol,
        token_supply,
        liquidity_fees,
        marketing_wallet,
        marketing_tax,
        max_tx_amount,
        router_address,
        boss,
      ],
      txCompleted,
      null,
      verificationCallback
    );
  } else if (getTokenType() == "frictionlessyield") {
    var token_type = "frictionlessyield";

    var token_name = getParameter(token_type, "token_name");
    var token_symbol = getParameter(token_type, "token_symbol");
    var token_supply = getParameter(token_type, "token_supply");
    var decimals = getParameter(token_type, "decimals");

    var tax_fees = getParameter(token_type, "tax_fees");
    var liquidity_fees = 0;
    var max_tx_amount = getParameter(token_type, "max_tx_amount");

    var swap_to_liquidity_at = parseInt(token_supply / 2000);

    if (swap_to_liquidity_at == 0) {
      swap_to_liquidity_at = 1;
    }
    if (!checkInputs(token_name, token_symbol)) {
      btnCreate.disabled = false;
      return;
    }

    showLoading();

    createToken(
      "safemoon",
      [
        token_name,
        token_symbol,
        token_supply,
        tax_fees,
        liquidity_fees,
        max_tx_amount,
        swap_to_liquidity_at,
        router_address,
        boss,
      ],
      txCompleted,
      null,
      verificationCallback
    );
  } else if (getTokenType() == "smarttax") {
    var token_type = "smarttax";

    var token_name = getParameter(token_type, "token_name");
    var token_symbol = getParameter(token_type, "token_symbol");
    var token_supply = getParameter(token_type, "token_supply");
    var decimals = getParameter(token_type, "decimals");

    var reward_token = getParameter(token_type, "reward_token");

    var marketing_fees = getParameter(token_type, "marketing_fees");
    var liquidity_fees = getParameter(token_type, "liquidity_fees");
    var tax_fees_extra = getParameter(token_type, "tax_fees_extra");

    var marketing_wallet = getParameter(token_type, "marketing_wallet");

    if (!checkInputs(token_name, token_symbol)) {
      btnCreate.disabled = false;
      return;
    }

    if (marketing_wallet == "") {
      alert("Enter marketing wallet !");
      {
        btnCreate.disabled = false;
        return;
      }
    }

    if (web3.utils.isAddress(marketing_wallet) == false) {
      alert("Marketing wallet is not valid !");
      {
        btnCreate.disabled = false;
        return;
      }
    }

    if ($("#max_wallet_option").is(":checked")) {
      var max_wallet_percent = getParameter(token_type, "max_wallet_percent");
    } else {
      var max_wallet_percent = 101;
    }

    showLoading();

    createToken(
      "smarttax",
      [
        token_name,
        token_symbol,
        token_supply,
        reward_token,
        liquidity_fees,
        marketing_fees,
        tax_fees_extra,
        marketing_wallet,
        router_address,
        boss,
        max_wallet_percent,
      ],
      txCompleted,
      null,
      verificationCallback
    );
  } else if (getTokenType() == "marketingtax") {
    var token_type = "marketingtax";

    var token_name = getParameter(token_type, "token_name");
    var token_symbol = getParameter(token_type, "token_symbol");
    var token_supply = getParameter(token_type, "token_supply");
    var decimals = getParameter(token_type, "decimals");
    var max_tx_amount = getParameter(token_type, "max_tx_amount");

    var reward_token = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";

    var buy_tax = getParameter(token_type, "buy_tax");
    var sell_tax = getParameter(token_type, "sell_tax");

    var marketing_wallet = getParameter(token_type, "marketing_wallet");

    if (!checkInputs(token_name, token_symbol)) {
      btnCreate.disabled = false;
      return;
    }

    if (marketing_wallet == "") {
      alert("Enter marketing wallet !");
      {
        btnCreate.disabled = false;
        return;
      }
    }

    if (web3.utils.isAddress(marketing_wallet) == false) {
      alert("Marketing wallet is not valid !");
      {
        btnCreate.disabled = false;
        return;
      }
    }

    showLoading();

    createToken(
      "marketingtax",
      [
        token_name,
        token_symbol,
        token_supply,
        reward_token,
        buy_tax,
        sell_tax,
        marketing_wallet,
        max_tx_amount,
        router_address,
        boss,
      ],
      txCompleted,
      null,
      verificationCallback
    );
  } else if (getTokenType() == "rewardtoken") {
    var token_type = "rewardToken";
    var token_name = getParameter(token_type, "token_name");
    var token_symbol = getParameter(token_type, "token_symbol");
    var token_supply = getParameter(token_type, "token_supply");
    var decimals = getParameter(token_type, "decimals");

    var reward_token = getRewardToken();
    var reward_fees = parseInt(getParameter(token_type, "reward_fees"));

    var marketing_wallet = getParameter(token_type, "marketing_wallet");

    console.log(typeof marketing_wallet, marketing_wallet);
    console.log(typeof reward_token, reward_token);

    var liquidity_fees = parseInt(getParameter(token_type, "liquidity_fees"));
    var marketing_fees = parseInt(getParameter(token_type, "marketing_fees"));
    var tax_fees_extra = parseInt(getParameter(token_type, "tax_fees_extra"));

    if (reward_fees == 0) {
      reward_fees = 1;
    }

    if (liquidity_fees == 0) {
      liquidity_fees = 1;
    }
    if (marketing_fees == 0) {
      marketing_fees = 1;
    }
    if (tax_fees_extra == 0) {
      tax_fees_extra = 1;
    }

    console.log(
      "some fees",
      reward_fees,
      liquidity_fees,
      marketing_fees,
      tax_fees_extra
    );

    if (!checkInputs(token_name, token_symbol)) {
      btnCreate.disabled = false;
      return;
    }

    if (marketing_wallet == "") {
      alert("Enter marketing wallet !");
      {
        btnCreate.disabled = false;
        return;
      }
    }

    if (web3.utils.isAddress(marketing_wallet) == false) {
      alert("Marketing wallet is not valid !");
      {
        btnCreate.disabled = false;
        return;
      }
    }

    if (marketing_wallet.toLowerCase() == ethereum.selectedAddress) {
      alert("Marketing wallet can't be the same as the owner !");
      {
        btnCreate.disabled = false;
        return;
      }
    }

    showLoading();

    deployLibrary(
      "reward",
      "",
      function (event, value) {
        if (event == "done") {
          var library_address = value;
          createToken(
            "reward",
            [
              token_name,
              token_symbol,
              token_supply,
              reward_token,
              reward_fees,
              liquidity_fees,
              marketing_fees,
              tax_fees_extra,
              marketing_wallet,
              router_address,
              boss,
            ],
            txCompleted,
            library_address,
            verificationCallback
          );
        }
        if (event == "error") {
          hideLoading();
          console.log(value);
          showError(value);
          btnCreate.disabled = false;
        }
      },
      function (contract_address, result) {
        // var library_address = contract_address;
        // if (result.status == 1) {
        //   var library_address = value;
        //   createToken(
        //     "reward",
        //     [
        //       token_name,
        //       token_symbol,
        //       token_supply,
        //       reward_token,
        //       reward_fees,
        //       liquidity_fees,
        //       marketing_fees,
        //       tax_fees_extra,
        //       marketing_wallet,
        //       router_address,
        //       boss,
        //     ],
        //     txCompleted,
        //     library_address,
        //     verificationCallback
        //   );
        // } else {
        //   hideLoading();
        //   console.log(value);
        //   showError(value);
        // }
      }
    );
  } else if (getTokenType() == "rewardtoken2") {
    var token_type = "rewardtoken2";
    var token_name = getParameter(token_type, "token_name");
    var token_symbol = getParameter(token_type, "token_symbol");
    var token_supply = getParameter(token_type, "token_supply");
    var decimals = getParameter(token_type, "decimals");

    var reward_token = getParameter(token_type, "reward_token");

    var reward_fees = parseInt(getParameter(token_type, "reward_fees"));

    var marketing_wallet = getParameter(token_type, "marketing_wallet");
    var dev_wallet = getParameter(token_type, "dev_wallet");
    var charity_wallet = getParameter(token_type, "charity_wallet");

    console.log(typeof marketing_wallet, marketing_wallet);
    console.log(typeof reward_token, reward_token);

    var liquidity_fees = parseInt(getParameter(token_type, "liquidity_fees"));
    var marketing_fees = parseInt(getParameter(token_type, "marketing_fees"));
    var tax_fees_extra = parseInt(getParameter(token_type, "tax_fees_extra"));

    var burn_fees = parseInt(getParameter(token_type, "burn_fees"));
    var dev_fees = parseInt(getParameter(token_type, "dev_fees"));
    var charity_fees = parseInt(getParameter(token_type, "charity_fees"));

    var max_tx_amount = parseInt(getParameter(token_type, "max_tx_amount"));
    var min_tokens = parseInt(getParameter(token_type, "min_tokens"));

    if (reward_fees == 0) {
      reward_fees = 1;
    }

    if (liquidity_fees == 0) {
      liquidity_fees = 1;
    }
    if (marketing_fees == 0) {
      marketing_fees = 1;
    }
    if (tax_fees_extra == 0) {
      tax_fees_extra = 1;
    }

    console.log(
      "some fees",
      reward_fees,
      liquidity_fees,
      marketing_fees,
      tax_fees_extra
    );

    if (!checkInputs(token_name, token_symbol)) {
      btnCreate.disabled = false;
      return;
    }

    if (marketing_wallet == "") {
      alert("Enter marketing wallet !");
      {
        btnCreate.disabled = false;
        return;
      }
    }

    if (web3.utils.isAddress(marketing_wallet) == false) {
      alert("Marketing wallet is not valid !");
      {
        btnCreate.disabled = false;
        return;
      }
    }

    if (marketing_wallet.toLowerCase() == ethereum.selectedAddress) {
      alert("Marketing wallet can't be the same as the owner !");
      {
        btnCreate.disabled = false;
        return;
      }
    }

    if (dev_wallet == "") {
      alert("Enter dev wallet !");
      {
        btnCreate.disabled = false;
        return;
      }
    }

    if (web3.utils.isAddress(dev_wallet) == false) {
      alert("Dev wallet is not valid !");
      {
        btnCreate.disabled = false;
        return;
      }
    }

    if (charity_wallet == "") {
      alert("Enter charity wallet !");
      {
        btnCreate.disabled = false;
        return;
      }
    }

    if (web3.utils.isAddress(charity_wallet) == false) {
      alert("Charity wallet is not valid !");
      {
        btnCreate.disabled = false;
        return;
      }
    }

    showLoading();

    deployLibrary(
      "reward_2",
      "",
      function (event, value) {
        if (event == "done") {
          var library_address = value;
          createToken(
            "reward_2",
            [
              token_name,
              token_symbol,
              token_supply,
              reward_token,
              reward_fees,
              liquidity_fees,
              marketing_fees,
              tax_fees_extra,
              marketing_wallet,
              router_address,
              boss,
              [dev_wallet, charity_wallet],
              [burn_fees, dev_fees, charity_fees],
              [min_tokens, max_tx_amount],
            ],
            txCompleted,
            library_address,
            verificationCallback
          );
        }
        if (event == "error") {
          hideLoading();
          console.log(value);
          showError(value);
          btnCreate.disabled = false;
        }
      },
      function (contract_address, result) {
        // var library_address = contract_address;
        // if (result.status == 1) {
        //   var library_address = value;
        //   createToken(
        //     "reward",
        //     [
        //       token_name,
        //       token_symbol,
        //       token_supply,
        //       reward_token,
        //       reward_fees,
        //       liquidity_fees,
        //       marketing_fees,
        //       tax_fees_extra,
        //       marketing_wallet,
        //       router_address,
        //       boss,
        //     ],
        //     txCompleted,
        //     library_address,
        //     verificationCallback
        //   );
        // } else {
        //   hideLoading();
        //   console.log(value);
        //   showError(value);
        // }
      }
    );
  } else {
    var token_type = getTokenType();
    var token_name = getParameter(token_type, "token_name");
    var token_symbol = getParameter(token_type, "token_symbol");
    var token_supply = getParameter(token_type, "token_supply");
    var decimals = getParameter(token_type, "decimals");

    if (!checkInputs(token_name, token_symbol)) {
      btnCreate.disabled = false;
      return;
    }

    console.log(router_address);
    showLoading();

    createToken(
      "standard",
      [token_name, token_symbol, token_supply, router_address, boss],
      txCompleted,
      null,
      verificationCallback
    );
  }
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
    $("#price").text(parseFloat(price).toFixed(2).toString() + " BNB");
    $("#tx_fee").css("display", "none");
  }
}

export function getPriceQuick() {
  var price = $("#price").text();
  price = price.split(" ")[0];

  price = price.toString();

  return price;
}

export function addPrice(price) {
  var current_price = getPriceQuick();
  setPrice(parseFloat(current_price) + price);
}

export function subPrice(price) {
  var current_price = getPriceQuick();
  setPrice(parseFloat(current_price) - price);
}

setPrice(0.1);

$("#tiny-tab").on("click", () => {
  $(".actionGroup").css("display", "block");
  closeMoonshots();
  console.log("token_type:", getTokenType());
  logGaEvent("click_tiny");
  setPrice(0.0);
});

$("#basic-tab").on("click", () => {
  $(".actionGroup").css("display", "block");
  closeMoonshots();
  console.log("token_type:", getTokenType());
  logGaEvent(gaEvents.click_standard);
  setPrice(0.1);
});

$("#mintable-tab").on("click", () => {
  $(".actionGroup").css("display", "block");
  closeMoonshots();
  console.log("token_type:", getTokenType());
  logGaEvent(gaEvents.select_mintable);
  setPrice(0.1);
});

$("#burnable-tab").on("click", () => {
  $(".actionGroup").css("display", "block");
  console.log("token_type:", getTokenType());
  closeMoonshots();

  logGaEvent(gaEvents.select_burnable);
  setPrice(0.1);
});

$("#mintandburn-tab").on("click", () => {
  $(".actionGroup").css("display", "block");
  console.log("token_type:", getTokenType());
  closeMoonshots();

  logGaEvent(gaEvents.select_mintandburn);
  setPrice(0.1);
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
  setPrice(0.15);
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
  setPrice(0.15);
});

$("#liquiditygenerator-tab").on("click", () => {
  $(".actionGroup").css("display", "block");

  console.log("token_type:", getTokenType());
  closeMoonshots();

  logGaEvent(gaEvents.click_liquidity_generator);
  setPrice(0.15);
});

$("#frictionlessyield-tab").on("click", () => {
  $(".actionGroup").css("display", "block");

  console.log("token_type:", getTokenType());
  closeMoonshots();

  logGaEvent(gaEvents.click_frictionless_yield);
  setPrice(0.15);
});

$("#rewardtoken-tab").on("click", () => {
  $(".actionGroup").css("display", "block");

  console.log("token_type:", getTokenType());

  closeMoonshots();
  logGaEvent(gaEvents.click_reward_token);
  setPrice(0.2);
});

$("#rewardtoken2-tab").on("click", () => {
  $(".actionGroup").css("display", "block");

  console.log("token_type:", getTokenType());

  closeMoonshots();
  logGaEvent(gaEvents.click_reward_token);
  setPrice(0.5);
});

$("#smarttax-tab").on("click", () => {
  $(".actionGroup").css("display", "block");

  console.log("token_type:", getTokenType());

  closeMoonshots();
  logGaEvent("click_smarttax");
  setPrice(0.18);
});

$("#marketingtax-tab").on("click", () => {
  $(".actionGroup").css("display", "block");

  console.log("token_type:", getTokenType());

  closeMoonshots();
  logGaEvent("click_marketingtax");
  setPrice(0.16);
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
      if (getTokenType() == "tiny") {
        $(".error").text(
          "Error: Have at least 0.05 BNB in your wallet to pay for transaction fee."
        );
      } else {
        $(".error").text("Error: Insufficient funds to create !");
      }
    } else {
      if (error.toString().length <= 280) {
        $(".error").text(error);
      } else {
        $(".error").text(error.toString().substr(0, 280) + "...");
      }
      if (
        !JSON.stringify(error).includes("User denied transaction signature")
      ) {
        $(".tip").css("display", "block");
      }

      if (error.toString().includes("denied transaction signature")) {
        logGaEvent(gaEvents.click_cancel);
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

$(".nav > li").click(function (e) {
  $(".error").hide();
});
