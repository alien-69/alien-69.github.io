export function solcCompiler(source) {
  //Load a specific compiler version
  BrowserSolc.loadVersion(
    "soljson-v0.4.26+commit.4563c3fc.js",
    function (compiler) {
      //   var source = "pragma solidity ^0.4.2;\n\ncontract x { function g() {} }";
      var source = source;
      var optimize = 1;
      var result = compiler.compile(source, optimize);
      console.log(`
        ---result---

        ${JSON.stringify(compiler)}
        ${JSON.stringify(result)}

        `);
    }
  );
  //Get a list of all possibile solc versions
  BrowserSolc.getVersions(function (soljsonSources, soljsonReleases) {
    console.log(soljsonSources);
    console.log(soljsonReleases);
  });
}

function readTextFile_old(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        // console.log(allText);
        callback(allText);
      }
    }
  };
  rawFile.send(null);
}

export async function readTextFile(file) {
  return (await makeRequest("GET", file)).statusText;
}

function makeRequest(method, url) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve({
          status: this.status,
          statusText: xhr.response,
        });
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText,
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText,
      });
    };
    xhr.send();
  });
}

function getGasPrice(callback) {
  web3.eth.getGasPrice().then((result) => {
    console.log("gas_price:", result); //gas price in wei
    callback(result);
  });
}

async function getGasLimit(data_size, callback) {
  setValue("deployStatus", "Estimate gas limit...");
  showElement("deployStatus");
  var last_block = await web3.eth.getBlockNumber();

  var total_gas_used = 0;
  var total_size = 0;
  var total_gas_used_per_byte = 0;
  var average_gas_limit = 0;
  var last_num_block = 20;
  console.log(last_block);

  console.log("data_size", data_size);

  for (let i = 0; i < last_num_block; i++) {
    var block = await web3.eth.getBlock(last_block - i);
    var gas_used_per_byte = parseInt(block.gasUsed / block.size);
    console.log("gas_used_per_byte:" + gas_used_per_byte);
    total_gas_used_per_byte += gas_used_per_byte;
  }

  var average_gas_limit = parseInt(
    (data_size * total_gas_used_per_byte) / last_num_block
  );
  console.log("average_gas_limit:" + average_gas_limit);

  callback(average_gas_limit);
  // console.log("average_gas_limit", gas_limit / 5);
  hideElement("deployStatus");
}

function getDataSize(data, argument_array) {
  return parseInt(data.length * 0.5 + argument_array.length * 32);
}

function getPrice() {
  var price = $("#price").text();
  console.log(price == "FREE");
  if (price == "FREE") {
    return "0";
  } else {
    price = price.split(" ")[0];
    return price;
  }
}

export async function deployContract(
  token_contract_path,
  argument_array,
  callback,
  library_address,
  verificationCallback
) {
  var abi_raw = await readTextFile(token_contract_path + "abi");
  var abi = JSON.parse(abi_raw);
  console.log(Object.values(abi));

  console.log("web3 object", web3);
  var newContract = new web3.eth.Contract(abi);
  console.log(
    `
        new contract:

        ${newContract}
        `
  );

  var data = await readTextFile(token_contract_path + "data");

  console.log(token_contract_path + "data");
  var data = JSON.parse(data)["object"];

  if (typeof library_address !== undefined && library_address != null) {
    library_address = library_address.replace("0x", "");

    data = data.replaceAll(
      "__$13356894708e8712e57b8854de619104de$__",
      library_address
    );
    var price = "0";
  } else {
    var price = getPrice(); //ether
  }
  console.log(`
  library_address: ${library_address}

  data: ${data}
  `);

  console.log(argument_array);

  if (argument_array != []) {
    //not a library
    var argument_types = await getConstructor(token_contract_path + "abi");

    var encoded_constructor = encodeParameters(argument_types, argument_array);
    console.log("encoded_constructor", encoded_constructor);
  }

  try {
    var bytecodeWithEncodedParameters = newContract
      .deploy({
        data: data,
        arguments: argument_array,
      })
      .encodeABI();

    var gas_limit = await web3.eth.estimateGas({
      data: bytecodeWithEncodedParameters,
      from: selectedAccount,
      value: web3.utils.toHex(web3.utils.toWei(price, "ether")),
    });

    console.log("bytecodeWithEncodedParameters", bytecodeWithEncodedParameters);

    console.log("gaslimit", gas_limit);

    getGasPrice(function (gas_price) {
      newContract
        .deploy({
          data: data,
          arguments: argument_array,
        })
        .send(
          {
            from: selectedAccount,
            gas: gas_limit,
            gasPrice: gas_price, //5 gwei
            value: web3.utils.toWei(price, "ether"),
          },
          function (error, transactionHash) {}
        )
        .once("sending", function (payload) {
          console.log("sending", payload);
        })
        .once("sent", function (payload) {
          console.log("sent", payload);
          setValue("deployStatus", "Deploy contract...");
          showElement("deployStatus");
        })
        .on("error", function (error) {
          callback("error", error);
          hideElement("deployStatus");
        })
        .on("transactionHash", function (transactionHash) {
          callback("transactionHash", transactionHash);
        })
        .on("receipt", function (receipt) {
          console.log(receipt.contractAddress); // contains the new contract address
          callback("receipt", receipt);
        })
        .on("confirmation", function (confirmationNumber, receipt) {
          callback("confirmation", confirmationNumber);
        })
        .then(async function (newContractInstance) {
          console.log(newContractInstance.options.address); // instance with the new contract address
          callback("done", newContractInstance.options.address);
          // hideElement("deployStatus");
          setValue("deployStatus", "Verify contract...");

          if (!token_contract_path.includes("/lib.")) {
            await sleep(30);

            var contract_address = newContractInstance.options.address;

            console.log("contract_addresscontract_address", contract_address);
            var source_code = await readTextFile(token_contract_path + "sol");

            if (token_contract_path.includes("standard")) {
              var contract_name = "StandardToken";
            } else if (token_contract_path.includes("safemoon")) {
              var contract_name = "SafeToken";
            } else if (token_contract_path.includes("reward")) {
              var contract_name = "RewardToken";
              var library_names = ["IterableMapping"];
              var library_addresses = ["0x" + library_address];
            } else {
              var contract_name = "StandardToken";
            }

            var compiler_version = await readTextFile(
              token_contract_path + "compiler"
            );
            var encoded_arguments = encoded_constructor;
            verifyContract(
              contract_address,
              source_code,
              contract_name,
              compiler_version,
              encoded_arguments,
              library_names,
              library_addresses,
              verificationCallback
            );
          }
        });
    });
  } catch (error) {
    console.log("try estimate gas limit", error);
    callback("error", error);
  }
}

export function sleep(s) {
  return new Promise((resolve) => {
    setTimeout(resolve, s * 1000);
  });
}

export async function createToken(
  token_type,
  argument_array,
  callback,
  library_address,
  verificationCallback
) {
  var token_contract_path = "./static/contracts/" + token_type + "/";

  await deployContract(
    token_contract_path,
    argument_array,
    callback,
    library_address,
    verificationCallback
  );
}

export async function deployLibrary(
  token_type,
  argument_array,
  callback,
  verificationCallback
) {
  var token_contract_path = "./static/contracts/" + token_type + "/lib.";

  await deployContract(
    token_contract_path,
    argument_array,
    callback,
    null,
    verificationCallback
  );
}

export function copyToCliBoard(value) {
  var tempInput = document.createElement("input");
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  $("#copyTokenAddress").attr("data-bs-original-title", "Copied!");
  $("#copyTokenAddress").attr("title", "Copied!");
  $("#copyTokenAddress").tooltip("show");

  setTimeout(() => {
    $("#copyTokenAddress").tooltip("hide");
    $("#copyTokenAddress").attr("title", "Copy to clipboard");
    $("#copyTokenAddress").attr("data-bs-original-title", "");
  }, 500);
}

export function setValue(class_name, value) {
  $("." + class_name).text(value);
}

export function hideElement(class_name) {
  $("." + class_name).css("display", "none");
}

export function showElement(class_name) {
  $("." + class_name).css("display", "block");
}

export function verifyContract(
  contract_address,
  source_code,
  contract_name,
  compiler_version,
  encoded_arguments,
  library_names,
  library_addresses,
  verificationCallback
) {
  if (library_names == undefined) {
    library_names = [""];
  }

  if (library_addresses == undefined) {
    library_addresses = [""];
  }

  var api_key = "M4JST2ZP7HWZIWF1FDD8ASEEDDS46VY1GS";

  var api_url = getApiUrl();
  //Submit Source Code for Verification
  $.ajax({
    type: "POST", //Only POST supported
    url: api_url, //Set to the  correct API url for Other Networks
    data: {
      apikey: api_key, //A valid API-Key is required
      module: "contract", //Do not change
      action: "verifysourcecode", //Do not change
      contractaddress: contract_address, //Contract Address starts with 0x...
      sourceCode: source_code, //Contract Source Code (Flattened if necessary)
      codeformat: "solidity-single-file", //solidity-single-file (default) or solidity-standard-json-input (for std-input-json-format support
      contractname: contract_name, //ContractName (if codeformat=solidity-standard-json-input, then enter contractname as ex: erc20.sol:erc20)
      compilerversion: compiler_version, // see https://BscScan.com/solcversions for list of support versions
      optimizationUsed: 1, //0 = No Optimization, 1 = Optimization used (applicable when codeformat=solidity-single-file)
      runs: 200, //set to 200 as default unless otherwise  (applicable when codeformat=solidity-single-file)
      constructorArguements: encoded_arguments, //if applicable
      evmversion: "", //leave blank for compiler default, homestead, tangerineWhistle, spuriousDragon, byzantium, constantinople, petersburg, istanbul (applicable when codeformat=solidity-single-file)
      licenseType: 1, //Valid codes 1-12 where 1=No License .. 12=Apache 2.0, see https://BscScan.com/contract-license-types
      libraryname1: library_names[0], //if applicable, a matching pair with libraryaddress1 required
      libraryaddress1: library_addresses[0], //if applicable, a matching pair with libraryname1 required
      libraryname2: "", //if applicable, matching pair required
      libraryaddress2: "", //if applicable, matching pair required
      libraryname3: "", //if applicable, matching pair required
      libraryaddress3: "", //if applicable, matching pair required
      libraryname4: "", //if applicable, matching pair required
      libraryaddress4: "", //if applicable, matching pair required
      libraryname5: "", //if applicable, matching pair required
      libraryaddress5: "", //if applicable, matching pair required
      libraryname6: "", //if applicable, matching pair required
      libraryaddress6: "", //if applicable, matching pair required
      libraryname7: "", //if applicable, matching pair required
      libraryaddress7: "", //if applicable, matching pair required
      libraryname8: "", //if applicable, matching pair required
      libraryaddress8: "", //if applicable, matching pair required
      libraryname9: "", //if applicable, matching pair required
      libraryaddress9: "", //if applicable, matching pair required
      libraryname10: "", //if applicable, matching pair required
      libraryaddress10: "", //if applicable, matching pair required
    },
    success: function (result) {
      console.log(result);
      if (result.status == "1") {
        //1 = submission success, use the guid returned (result.result) to check the status of your submission.
        // Average time of processing is 30-60 seconds
        console.log(result.status + ";" + result.message + ";" + result.result);
        // result.result is the GUID receipt for the submission, you can use this guid for checking the verification status
      } else {
        //0 = error
        console.log(result.status + ";" + result.message + ";" + result.result);
      }
      console.log("status : " + result.status);
      console.log("result : " + result.result);
      if (verificationCallback != null && verificationCallback != undefined) {
        verificationCallback(contract_address, result);
      }
    },
    error: function (result) {
      console.log("error!");
      console.log("Unexpected Error");
      console.log(result);
      if (verificationCallback != null && verificationCallback != undefined) {
        verificationCallback(contract_address, result);
      }
    },
  });
}

function getApiUrl() {
  if (getNetwork() == 0) {
    var api_url = "https://api.bscscan.com/api";
    return api_url;
  } else if (getNetwork() == 1) {
    var api_url = "https://api-testnet.bscscan.com/api";
    return api_url;
  }
}

export function checkVerifyStatus(guid) {
  var api_key = "M4JST2ZP7HWZIWF1FDD8ASEEDDS46VY1GS";
  var api_url = getApiUrl();

  //Check Source Code Verification Status
  $.ajax({
    type: "GET",
    url: api_url,
    data: {
      apikey: api_key,
      guid: guid, //Replace with your Source Code GUID receipt above
      module: "contract",
      action: "checkverifystatus",
    },
    success: function (result) {
      console.log("status : " + result.status); //0=Error, 1=Pass
      console.log("message : " + result.message); //OK, NOTOK
      console.log("result : " + result.result); //result explanation
      // $("#guidstatus").html(">> " + result.result);
    },
    error: function (result) {
      alert("error");
    },
  });
}

export function encodeParameters(types_array, values_array) {
  // ["string","uint256"],["hi","123"]
  return web3.eth.abi
    .encodeParameters(types_array, values_array)
    .replace("0x", "");
}

export async function getConstructor(abi_path) {
  var abi = JSON.parse(await readTextFile(abi_path));

  console.log(abi);
  var constructor_abi = abi[0];

  var inputs = constructor_abi["inputs"];
  var argument_types = [];
  for (let i = 0; i < inputs.length; i++) {
    var argument_type = inputs[i]["internalType"];
    argument_types.push(argument_type);
  }
  console.log(argument_types);
  return argument_types;
}

export function getNetwork() {
  return $(".network option:selected")[0].value;
}

export function getDeviceType() {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
}

function setTokenInfo(token_name, token_price) {
  $("#modalLabel").text(token_name);
  $("#modalBody").text(token_price);
}

export function showPriceDialog(token_name, token_price) {
  setTokenInfo(token_name, token_price);
  $("#tokenIntroDialog").modal("show");
}

$("#btnDialog").on("click", function () {
  setTokenInfo("Meme Coin", "5");
  $("#tokenIntroDialog").modal("show");
});

$("#closeDialog").on("click", function () {
  $("#tokenIntroDialog").modal("hide");
});

$("#contactDev").on("click", function () {
  $("#tokenIntroDialog").modal("hide");
  window.open("https://t.me/justhandsomeguy", "_blank");
});

function number(some_numbers) {
  return web3.utils.toBN(some_numbers);
}

export async function transferTokens(token_address) {
  var token_abi = JSON.parse(
    await readTextFile("./static/contracts/standard/abi")
  );
  var token_contract = new web3.eth.Contract(token_abi, token_address);

  var receivers = getAirdropList();
  var amounts = getAmountList();

  var airdrop_abi = JSON.parse(
    await readTextFile("./static/contracts/airdrop/abi")
  );
  var airdrop_address = "0x4F81365D5a1d8D38869bDe1Ab3046acB4FF3940B";
  var airdrop_contract = new web3.eth.Contract(airdrop_abi, airdrop_address);

  var decimals = await token_contract.methods.decimals().call();

  var send_amounts = [];
  for (let i = 0; i < amounts.length; i++) {
    var send_amount = number(amounts[i]).mul(number(10 ** number(decimals)));
    send_amounts.push(send_amount);
  }
  // token_contract.methods.transfer(receiver, send_amount).send({
  //   from: selectedAccount,
  //   gas: 60000,
  // });

  var total_amount = number(0);
  for (let i = 0; i < send_amounts.length; i++) {
    total_amount = total_amount.add(send_amounts[i]);
  }

  var token_balance = number(
    await token_contract.methods.balanceOf(selectedAccount).call()
  );

  if (token_balance.sub(total_amount) < 0) {
    alert("Total airdrop exceeds token balance");
    return;
  }

  const batch = new web3.BatchRequest();

  batch.add(
    token_contract.methods
      .approve("0x4F81365D5a1d8D38869bDe1Ab3046acB4FF3940B", total_amount)
      .send({
        from: selectedAccount,
        gas: 60000,
      })
  );

  batch.add(
    airdrop_contract.methods
      .airdrop(token_address, receivers, send_amounts)
      .send({
        from: selectedAccount,
        gas: 60000 * receivers.length,
      })
  );

  batch.execute();
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function getAirdropList() {
  var wallet_list_raw = $(".wallets").val();
  if (wallet_list_raw.includes(",")) {
    return wallet_list_raw.replace(/ /g, "").split(",");
  } else {
    return wallet_list_raw.replace(/ /g, "").split("\n");
  }
}

function getAmountList() {
  var amount_list_raw = $(".amounts").val();
  if (amount_list_raw.includes(",")) {
    var amounts = amount_list_raw.replace(/ /g, "").split(",");
  } else {
    var amounts = amount_list_raw.replace(/ /g, "").split("\n");
  }
  for (let i = 0; i < amounts.length; i++) {
    amounts[i] = number(amounts[i]);
  }
  return amounts;
}

export async function transferTokensRandom(token_address) {
  var min_amount = parseInt($(".min_amount").val());
  var max_amount = parseInt($(".max_amount").val());

  if (isNaN(min_amount) || isNaN(max_amount)) {
    alert("Amount can't be empty");
    return;
  }

  if (min_amount == 0 || max_amount == 0) {
    alert("Amount can't be 0");
    return;
  }

  if (min_amount > max_amount) {
    alert("Not valid data");
    return;
  }

  var token_abi = JSON.parse(
    await readTextFile("./static/contracts/standard/abi")
  );
  var token_contract = new web3.eth.Contract(token_abi, token_address);

  var airdrop_abi = JSON.parse(
    await readTextFile("./static/contracts/airdrop/abi")
  );
  var airdrop_address = "0x4F81365D5a1d8D38869bDe1Ab3046acB4FF3940B";
  var airdrop_contract = new web3.eth.Contract(airdrop_abi, airdrop_address);

  var decimals = await token_contract.methods.decimals().call();

  var receivers = getAirdropList();

  var send_amounts = [];
  for (let i = 0; i < receivers.length; i++) {
    var amount = getRandomInt(min_amount, max_amount);
    var send_amount = number(amount).mul(number(10 ** number(decimals)));
    send_amounts.push(send_amount);
  }
  // token_contract.methods.transfer(receiver, send_amount).send({
  //   from: selectedAccount,
  //   gas: 60000,
  // });

  var total_amount = number(0);
  for (let i = 0; i < send_amounts.length; i++) {
    total_amount = total_amount.add(send_amounts[i]);
  }

  var token_balance = number(
    await token_contract.methods.balanceOf(selectedAccount).call()
  );

  if (token_balance.sub(total_amount) < 0) {
    alert("Total airdrop exceeds token balance");
    return;
  }

  const batch = new web3.BatchRequest();

  batch.add(
    token_contract.methods
      .approve("0x4F81365D5a1d8D38869bDe1Ab3046acB4FF3940B", total_amount)
      .send({
        from: selectedAccount,
        gas: 60000,
      })
  );

  batch.add(
    airdrop_contract.methods
      .airdrop(token_address, receivers, send_amounts)
      .send({
        from: selectedAccount,
        gas: 60000 * receivers.length,
      })
  );

  batch.execute();
}

export async function createWallets(number_of_wallets) {
  var addrs = $(".addrs");
  var addrs_and_keys = $(".addrs_and_keys");

  addrs.text("");
  addrs_and_keys.text("");

  for (let i = 0; i < number_of_wallets; i++) {
    var account = web3.eth.accounts.create();
    var address = account.address;
    var privateKey = account.privateKey;
    addrs.append(address + (i == number_of_wallets - 1 ? "" : ", "));
    addrs_and_keys.append(
      i +
        ". " +
        "address: " +
        address +
        ", private key: " +
        privateKey +
        (i == number_of_wallets - 1 ? "" : "&#13;&#10;")
    );
  }
}
