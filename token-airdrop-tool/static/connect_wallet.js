document.addEventListener("DOMContentLoaded", (event) => {
  account_address = document.querySelector(".account_address");
  btnConnectWallet = document.querySelector(".btn-connect");

  async function getAccount() {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    console.log("address: ", account);
    account_address.innerHTML =
      account.substring(0, 5) + "..." + account.substring(38, 43);
    btnConnectWallet.style.display = "none";

    Cookies.set("account", account);

    ref_link = document.querySelector(".ref_link");

    if (Cookies.get("account")) {
      ref_link.innerHTML =
        window.location.hostname + "?id=" + Cookies.get("account");
    } else {
      ref_link.innerHTML =
        window.location.hostname + "?id=" + "change_to_your_eth_address";
    }
  }

  // btnConnectWallet.addEventListener("click", () => {
  //   connectWallet();
  //   if (getNetwork() == 0) {
  //     console.log("BSC");
  //     switchNetwork();
  //     connectWallet();
  //     updateContracts();
  //   }
  //   if (getNetwork() == 1) {
  //     console.log("BSC - Testnet");
  //     switchNetworkTestnet();
  //     connectWallet();
  //     updateContracts();
  //   }
  // });

  // function connectWallet() {
  //   if (window.ethereum) {
  //     getAccount();
  //   } else {
  //     alert("Please install MetaMask wallet :)");
  //   }
  // }

  async function switchNetwork() {
    await web3.currentProvider.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: "0x38",
          chainName: "Binance Smart Chain Mainnet",
          nativeCurrency: {
            name: "BNB",
            symbol: "bnb",
            decimals: 18,
          },
          rpcUrls: ["https://bsc-dataseed.binance.org/"],
          blockExplorerUrls: ["https://bscscan.com"],
        },
      ],
    });
    $(".testnetAlert").css("display", "none");
  }

  async function switchNetworkTestnet() {
    await web3.currentProvider.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: "0x61",
          chainName: "Smart Chain - Testnet",
          nativeCurrency: {
            name: "BNB",
            symbol: "bnb",
            decimals: 18,
          },
          rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
          blockExplorerUrls: ["https://testnet.bscscan.com"],
        },
      ],
    });
    $(".testnetAlert").css("display", "block");
  }

  $(".network").on("change", function () {
    if (typeof provider !== undefined) {
      if (this.value == 0) {
        console.log("BSC");
        switchNetwork();
        connectWallet();
        updateContracts();
      }
      if (this.value == 1) {
        console.log("BSC - Testnet");
        switchNetworkTestnet();
        connectWallet();
        updateContracts();
      }
    }
  });

  function getNetwork() {
    return $(".network option:selected")[0].value;
  }
  function updateContracts() {
    if (getNetwork() == 0) {
    }
    if (getNetwork() == 1) {
    }
  }

  function checkLogin() {
    web3.eth.getAccounts(function (err, accounts) {
      if (err != null) console.error("An error occurred: " + err);
      else if (accounts.length == 0)
        console.log("User is not logged in to MetaMask");
      else {
        console.log("User is logged in to MetaMask");
        getAccount();
      }
    });
  }
});
