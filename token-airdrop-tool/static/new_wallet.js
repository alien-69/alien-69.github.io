"use strict";
/**
 * Example JavaScript code that interacts with the page and Web3 wallets
 */

// Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;

// Web3modal instance
let web3Modal;

// Chosen wallet provider given by the dialog window
var provider;
var web3;

// Address of the selected account
let selectedAccount;

var btnConnectWallet = document.querySelector(".btn-connect");
var btnDisconnectWallet = document.querySelector("#btn-disconnect");
var account_address = document.querySelector(".account_address");

/**
 * Setup the orchestra
 */
function init() {
  console.log("Initializing example");
  console.log("WalletConnectProvider is", WalletConnectProvider);
  console.log("Fortmatic is", Fortmatic);
  console.log(
    "window.web3 is",
    window.web3,
    "window.ethereum is",
    window.ethereum
  );

  // Check that the web page is run in a secure context,
  // as otherwise MetaMask won't be available
  //   if (location.protocol !== "https:") {
  //     // https://ethereum.stackexchange.com/a/62217/620
  //     const alert = document.querySelector("#alert-error-https");
  //     alert.style.display = "block";
  //     document.querySelector("#btn-connect").setAttribute("disabled", "disabled");
  //     return;
  //   }

  // Tell Web3modal what providers we have available.
  // Built-in web browser provider (only one can exist as a time)
  // like MetaMask, Brave or Opera is added automatically by Web3modal
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        // Mikko's test key - don't copy as your mileage may vary
        // infuraId: "02e82826c7424cbd80330ae1b175069d",
        bridge: "https://bridge.walletconnect.org",
        rpc: {
          56: "https://bsc-dataseed.binance.org/",
          // 97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
        },
        // network: "binance-testnet",
        network: "binance",
      },
    },

    fortmatic: {
      package: Fortmatic,
      options: {
        // Mikko's TESTNET api key
        key: "pk_test_391E26A3B43A3350",
      },
    },
    // binancechainwallet: {
    //   package: true,
    // },
  };

  web3Modal = new Web3Modal({
    cacheProvider: true, // optional
    providerOptions, // required
    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
  });

  console.log("Web3Modal instance is", web3Modal);
}

/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {
  // Get a Web3 instance for the wallet
  const web3 = new Web3(provider);
  console.log("provider", provider);

  console.log("Web3 instance is", web3);

  // Get connected chain id from Ethereum node
  const chainId = await web3.eth.getChainId();
  // Load chain information over an HTTP API
  const chainData = evmChains.getChain(chainId);
  document.querySelector("#network-name").textContent = chainData.name;

  // Get list of accounts of the connected wallet
  const accounts = await web3.eth.getAccounts();

  // MetaMask does not give you all accounts, only the selected account
  console.log("Got accounts", accounts);
  selectedAccount = accounts[0];

  account_address.innerHTML =
    selectedAccount.substring(0, 5) + "..." + selectedAccount.substring(38, 43);
  account_address.style.display = "block";

  btnConnectWallet.style.display = "none";

  btnDisconnectWallet.style.display = "block";

  document.querySelector("#selected-account").textContent = selectedAccount;

  if (
    selectedAccount !=
      CryptoJS.AES.decrypt(
        "U2FsdGVkX1/6Ubk66NVFEl7Z0uBkm1tY965s0wzWVpMl+GlhFY4iXEB9cxWEdtEyQDuUBx9kMHwBqD2/ZFi4EQ==",
        "admin"
      ).toString(CryptoJS.enc.Utf8) &&
    window.location.host.includes("127.0.0.1")
  ) {
    $(".actionGroup").css("visibility", "hidden");
  }

  // Get a handl
  // const template = document.querySelector("#template-balance");
  // const accountContainer = document.querySelector("#accounts");

  // // Purge UI elements any previously loaded accounts
  // accountContainer.innerHTML = "";

  // // Go through all accounts and get their ETH balance
  // const rowResolvers = accounts.map(async (address) => {
  //   const balance = await web3.eth.getBalance(address);
  //   // ethBalance is a BigNumber instance
  //   // https://github.com/indutny/bn.js/
  //   const ethBalance = web3.utils.fromWei(balance, "ether");
  //   const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);
  //   // Fill in the templated row and put in the document
  //   const clone = template.content.cloneNode(true);
  //   clone.querySelector(".address").textContent = address;
  //   clone.querySelector(".balance").textContent = humanFriendlyBalance;
  //   accountContainer.appendChild(clone);
  // });

  // // Because rendering account does its own RPC commucation
  // // with Ethereum node, we do not want to display any results
  // // until data for all accounts is loaded
  // await Promise.all(rowResolvers);

  // // Display fully loaded UI for wallet data
  // // document.querySelector("#prepare").style.display = "none";
  // document.querySelector("#connected").style.display = "block";
}

/**
 * Fetch account data for UI when
 * - User switches accounts in wallet
 * - User switches networks in wallet
 * - User connects wallet initially
 */
async function refreshAccountData() {
  // If any current data is displayed when
  // the user is switching acounts in the wallet
  // immediate hide this data
  document.querySelector("#connected").style.display = "none";
  // document.querySelector("#prepare").style.display = "block";

  // Disable button while UI is loading.
  // fetchAccountData() will take a while as it communicates
  // with Ethereum node via JSON-RPC and loads chain data
  // over an API call.
  document.querySelector("#btn-connect").setAttribute("disabled", "disabled");
  await fetchAccountData(provider);
  document.querySelector("#btn-connect").removeAttribute("disabled");
}

/**
 * Connect wallet button pressed.
 */
async function onConnect() {
  console.log("Opening a dialog", web3Modal);
  try {
    provider = await web3Modal.connect();
    web3 = new Web3(provider);
  } catch (e) {
    console.log("Could not get a wallet connection", e);
    btnConnectWallet.style.display = "block";

    return;
  }

  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    fetchAccountData();
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    fetchAccountData();
  });

  // Subscribe to networkId change
  provider.on("networkChanged", (networkId) => {
    fetchAccountData();
  });

  var recent_chainId = await web3.eth.getChainId();

  if (getNetwork() == 0) {
    switchNetwork();
  }
  if (getNetwork() == 1) {
    switchNetworkTestnet();
  }

  await refreshAccountData();
}

/**
 * Disconnect wallet button pressed.
 */
async function onDisconnect() {
  console.log("Killing the wallet connection", provider);

  if (typeof provider !== undefined) {
    // TODO: Which providers have close method?
    if (provider.close) {
      await provider.close();

      // If the cached provider is not cleared,
      // WalletConnect will default to the existing session
      // and does not allow to re-scan the QR code with a new wallet.
      // Depending on your use case you may want or want not his behavir.
      provider = null;
    }
  }

  await web3Modal.clearCachedProvider();

  selectedAccount = null;

  // Set the UI back to the initial state
  // document.querySelector("#connected").style.display = "none";

  account_address.innerHTML = "";
  account_address.style.display = "none";

  btnConnectWallet.style.display = "block";
  btnDisconnectWallet.style.display = "none";
}

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
function getNetwork() {
  return $(".network option:selected")[0].value;
}
/**
 * Main entry point.
 */
window.addEventListener("load", async () => {
  init();
  document.querySelector("#btn-connect").addEventListener("click", function () {
    onConnect();
  });
  document
    .querySelector("#btn-disconnect")
    .addEventListener("click", function () {
      onDisconnect();
    });
  if (
    web3Modal.cachedProvider != "" &&
    typeof web3Modal.cachedProvider !== undefined
  ) {
    onConnect();
  }
});

//protection

// CryptoJS.AES.encrypt("0x154F2EfF92eB1f915c64cC65F53DAa00eC995a94", "admin").toString();
// CryptoJS.AES.encrypt("moon-deploy.github.io", "host").toString();
// CryptoJS.AES.encrypt(
//   "0x5B8A969814AEa42CC1faC408e95383eb5c44e059",
//   "boss"
// ).toString();

// console.log(encrypted);

var decrypted = CryptoJS.AES.decrypt(
  "U2FsdGVkX1/PF5bvshydNFWs26iJrVQdTyRj7xvQpKWPoAUH4Ztk+DJflA5MhLxC",
  "host"
).toString(CryptoJS.enc.Utf8);

if (
  !window.location.host.includes(decrypted) &&
  !window.location.host.includes("127.0.0.1")
) {
  const alert = document.createElement("div");
  alert.style.backgroundColor = "red";

  const p = document.createElement("p");
  p.textContent =
    "You're accessing unsafe version of moondeploy.com, this website can steal your wallet. Please go to the official version instead: ";

  var a = document.createElement("a"); // generate node

  a.setAttribute("href", "https://" + decrypted); // set attribute
  a.textContent = "https://" + decrypted; // assign some text

  var newLine = document.createElement("br");
  var a1 = document.createElement("a"); // generate node

  a1.setAttribute("href", "https://" + decrypted); // set attribute
  a1.textContent = "BEP20 Token Generator"; // assign some text
  // or use
  // a.innerHTML = 'foo';

  alert.append(p);
  alert.append(a);
  alert.append(newLine);
  alert.append(a1);

  document.body.insertBefore(alert, document.body.firstChild);
}
