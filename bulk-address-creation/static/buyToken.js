document.addEventListener("DOMContentLoaded", (event) => {
  token_address = "0x56fb94eda9bf5e32520e636d270F52bf2bf1F1bE";
  contractSMM = new web3.eth.Contract(abiSMM, token_address);
  function buyToken(tokenPrice) {
    web3 = new Web3(ethereum);
    const price = tokenPrice; //bnb
    const transactionParameters = {
      to: token_address, // Required except during contract publications.
      from: ethereum.selectedAddress, // must match user's active address.0
      value: web3.utils.toWei(price, "ether"), // Only required to send ether to the recipient from the initiating external account.
    };

    web3.eth.sendTransaction(transactionParameters).then(console.log);
  }

  setTimeout(function () {
    callGetPrice0().then(function (result) {
      price0 = result;
    });
  }, 1000);
  setTimeout(function () {
    callGetPrice1().then(function (result) {
      price1 = result;
    });
  }, 1000);

  buyAmount = document.querySelector(".buyAmount");
  btnBuyToken = document.querySelector(".buyToken");

  btnBuyToken.addEventListener("click", () => {
    buyToken(buyAmount.value);
  });

  buyAmount.addEventListener("input", () => {
    if (buyAmount.value != "") {
      if (!ethereum) {
        price0 = 1;
        price1 = 5000000;
      }
      if (price0 > price1) {
        tokenAmount.innerHTML = buyAmount.value * (price0 / price1);
      } else {
        tokenAmount.innerHTML = buyAmount.value * (price1 / price0);
      }
    } else {
      tokenAmount.innerHTML = "";
    }

    $(".showTokenAmount").show();
  });

  tokenAddress = document.querySelector(".tokenAddress");
  tokenAddress.innerHTML = token_address;

  tokenAmount = document.querySelector(".tokenAmount");

  async function callGetPrice0() {
    const price0 = await contractSMM.methods
      .getPrice0()
      .call({ from: ethereum.selectedAddress });
    return price0;
  }

  async function callGetPrice1() {
    const price1 = await contractSMM.methods
      .getPrice1()
      .call({ from: ethereum.selectedAddress });
    return price1;
  }

  function copyToCliBoard(copyButtonId, value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    $("#" + copyButtonId).attr("data-bs-original-title", "Copied!");
    $("#" + copyButtonId).attr("title", "Copied!");
    $("#" + copyButtonId).tooltip("show");

    setTimeout(() => {
      $("#" + copyButtonId).tooltip("hide");
      $("#" + copyButtonId).attr("title", "Copy to clipboard");
      $("#" + copyButtonId).attr("data-bs-original-title", "");
    }, 500);
  }

  $("#copy-token-address").click(() => {
    copyToCliBoard("copy-token-address", tokenAddress.innerHTML);
  });
});
