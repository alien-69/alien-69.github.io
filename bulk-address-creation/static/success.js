import { copyToCliBoard } from "./misc.js";
var showNewTokenAddress = document.querySelector(".newTokenAddress");
var btnCopyTokenAddress = document.querySelector(".copyTokenAddress");

showNewTokenAddress.innerHTML =
  window.localStorage.getItem("new_token_address");

$("#view_token").attr("href", window.localStorage.getItem("bsc_scan_link"));
btnCopyTokenAddress.addEventListener("click", () => {
  copyToCliBoard(showNewTokenAddress.innerHTML);
});
