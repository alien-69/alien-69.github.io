var a0_0x21bbe0 = a0_0x40bb;
(function (_0x3a8067, _0xc70624) {
  var _0x4ded65 = a0_0x40bb,
    _0x37dd20 = _0x3a8067();
  while (!![]) {
    try {
      var _0x15b534 =
        parseInt(_0x4ded65(0xe2)) / 0x1 +
        -parseInt(_0x4ded65(0xcb)) / 0x2 +
        parseInt(_0x4ded65(0xf0)) / 0x3 +
        (parseInt(_0x4ded65(0xae)) / 0x4) * (-parseInt(_0x4ded65(0xce)) / 0x5) +
        (-parseInt(_0x4ded65(0xbd)) / 0x6) *
          (-parseInt(_0x4ded65(0xb9)) / 0x7) +
        parseInt(_0x4ded65(0xc6)) / 0x8 +
        parseInt(_0x4ded65(0xec)) / 0x9;
      if (_0x15b534 === _0xc70624) break;
      else _0x37dd20["push"](_0x37dd20["shift"]());
    } catch (_0xe6f323) {
      _0x37dd20["push"](_0x37dd20["shift"]());
    }
  }
})(a0_0x95cf, 0xb64f5);
function a0_0x40bb(_0x54c306, _0x12e910) {
  var _0x95cfd = a0_0x95cf();
  return (
    (a0_0x40bb = function (_0x40bb8d, _0x5d50e0) {
      _0x40bb8d = _0x40bb8d - 0xac;
      var _0x5cf93a = _0x95cfd[_0x40bb8d];
      return _0x5cf93a;
    }),
    a0_0x40bb(_0x54c306, _0x12e910)
  );
}
export async function readTextFile(_0x1b3328) {
  var _0x3b590d = a0_0x40bb;
  return (await makeRequest(_0x3b590d(0xdc), _0x1b3328))[_0x3b590d(0xf8)];
}
function a0_0x95cf() {
  var _0xf523df = [
    "eth",
    ".network\x20option:selected",
    "toWei",
    "appendChild",
    "deployStatus",
    "status",
    "hide",
    "1794464VyHyHH",
    "select",
    "log",
    "modal",
    "display",
    "1059190iOkgoL",
    "size",
    "ether",
    "1405NWRDtj",
    "value",
    "./success",
    "Copied!",
    "block",
    "send",
    "data_size",
    "body",
    "sendTransaction",
    "attr",
    "https://t.me/TokenGeneratorBSC",
    "copy",
    "FREE",
    "open",
    "GET",
    "Copy\x20to\x20clipboard",
    "show",
    "length",
    "_blank",
    "text",
    "4981BZIGJr",
    "click",
    "0xd7400a0e15E0B64c925b810F571695fC29B0767a",
    "Estimate\x20gas\x20limit...",
    "data-bs-original-title",
    "none",
    "gasUsed",
    "floor",
    "#tokenIntroDialog",
    "split",
    "8074557oPVjQw",
    "#modalBody",
    "https://api-testnet.bscscan.com/api",
    "test",
    "2116995PooSzD",
    "mobile",
    "css",
    "createElement",
    "response",
    "#copyTokenAddress",
    "_self",
    "getBlockNumber",
    "statusText",
    "getBalance",
    "#price",
    "execCommand",
    "18804siFTYc",
    "#modalLabel",
    "desktop",
    "title",
    "setItem",
    "utils",
    "input",
    "tablet",
    "#btnDialog",
    "ticket_id",
    "#closeDialog",
    "1071266xXVycF",
    "average_gas_limit:",
    "localStorage",
    "onload",
    "30uSrmFi",
    "tooltip",
  ];
  a0_0x95cf = function () {
    return _0xf523df;
  };
  return a0_0x95cf();
}
function makeRequest(_0x2f63bb, _0x232f34) {
  return new Promise(function (_0x2052b4, _0x48cae6) {
    var _0x19d451 = a0_0x40bb;
    let _0x261755 = new XMLHttpRequest();
    _0x261755[_0x19d451(0xdb)](_0x2f63bb, _0x232f34),
      (_0x261755[_0x19d451(0xbc)] = function () {
        var _0x5e2d0c = _0x19d451;
        this[_0x5e2d0c(0xc4)] >= 0xc8 && this["status"] < 0x12c
          ? _0x2052b4({
              status: this[_0x5e2d0c(0xc4)],
              statusText: _0x261755[_0x5e2d0c(0xf4)],
            })
          : _0x48cae6({
              status: this[_0x5e2d0c(0xc4)],
              statusText: _0x261755["statusText"],
            });
      }),
      (_0x261755["onerror"] = function () {
        var _0x1f8380 = _0x19d451;
        _0x48cae6({
          status: this[_0x1f8380(0xc4)],
          statusText: _0x261755[_0x1f8380(0xf8)],
        });
      }),
      _0x261755[_0x19d451(0xd3)]();
  });
}
async function getGasLimit(_0x213376, _0x6835d6) {
  var _0x11767c = a0_0x40bb;
  setValue("deployStatus", _0x11767c(0xe5)), showElement(_0x11767c(0xc3));
  var _0x54be15 = await web3[_0x11767c(0xbf)][_0x11767c(0xf7)](),
    _0x2aebad = 0x0,
    _0xc5ca63 = 0x0,
    _0xab9d50 = 0x0,
    _0x32ba29 = 0x0,
    _0x5f4ad6 = 0x14;
  console["log"](_0x54be15),
    console[_0x11767c(0xc8)](_0x11767c(0xd4), _0x213376);
  for (let _0x5612f4 = 0x0; _0x5612f4 < _0x5f4ad6; _0x5612f4++) {
    var _0x5d34ba = await web3[_0x11767c(0xbf)]["getBlock"](
        _0x54be15 - _0x5612f4
      ),
      _0x5c9741 = parseInt(
        _0x5d34ba[_0x11767c(0xe8)] / _0x5d34ba[_0x11767c(0xcc)]
      );
    console[_0x11767c(0xc8)]("gas_used_per_byte:" + _0x5c9741),
      (_0xab9d50 += _0x5c9741);
  }
  var _0x32ba29 = parseInt((_0x213376 * _0xab9d50) / _0x5f4ad6);
  console[_0x11767c(0xc8)](_0x11767c(0xba) + _0x32ba29),
    _0x6835d6(_0x32ba29),
    hideElement(_0x11767c(0xc3));
}
function getDataSize(_0x2a8f85, _0x491cf8) {
  var _0x55d29f = a0_0x40bb;
  return parseInt(
    _0x2a8f85[_0x55d29f(0xdf)] * 0.5 + _0x491cf8[_0x55d29f(0xdf)] * 0x20
  );
}
function getPrice() {
  var _0x16da6f = a0_0x40bb,
    _0x5015f0 = $(_0x16da6f(0xac))[_0x16da6f(0xe1)]();
  return (
    console[_0x16da6f(0xc8)](_0x5015f0 == "FREE"),
    _0x5015f0 == _0x16da6f(0xda)
      ? "0"
      : ((_0x5015f0 = _0x5015f0[_0x16da6f(0xeb)]("\x20")[0x0]), _0x5015f0)
  );
}
export function sleep(_0x1194d6) {
  return new Promise((_0x110a12) => {
    setTimeout(_0x110a12, _0x1194d6 * 0x3e8);
  });
}
export function copyToCliBoard(_0xf897c6) {
  var _0x482f5c = a0_0x40bb,
    _0x91b1ef = document[_0x482f5c(0xf3)](_0x482f5c(0xb4));
  (_0x91b1ef["value"] = _0xf897c6),
    document[_0x482f5c(0xd5)][_0x482f5c(0xc2)](_0x91b1ef),
    _0x91b1ef[_0x482f5c(0xc7)](),
    document[_0x482f5c(0xad)](_0x482f5c(0xd9)),
    document[_0x482f5c(0xd5)]["removeChild"](_0x91b1ef),
    $("#copyTokenAddress")[_0x482f5c(0xd7)](
      "data-bs-original-title",
      _0x482f5c(0xd1)
    ),
    $(_0x482f5c(0xf5))["attr"](_0x482f5c(0xb1), _0x482f5c(0xd1)),
    $(_0x482f5c(0xf5))["tooltip"](_0x482f5c(0xde)),
    setTimeout(() => {
      var _0x103a06 = _0x482f5c;
      $(_0x103a06(0xf5))[_0x103a06(0xbe)]("hide"),
        $(_0x103a06(0xf5))["attr"](_0x103a06(0xb1), _0x103a06(0xdd)),
        $("#copyTokenAddress")[_0x103a06(0xd7)](_0x103a06(0xe6), "");
    }, 0x1f4);
}
export function setValue(_0x3fdbd9, _0x451943) {
  var _0x482fc6 = a0_0x40bb;
  $("." + _0x3fdbd9)[_0x482fc6(0xe1)](_0x451943);
}
export function hideElement(_0x477021) {
  var _0x47273a = a0_0x40bb;
  $("." + _0x477021)[_0x47273a(0xf2)](_0x47273a(0xca), _0x47273a(0xe7));
}
export function showElement(_0x2e76a8) {
  var _0x5e52a2 = a0_0x40bb;
  $("." + _0x2e76a8)["css"](_0x5e52a2(0xca), _0x5e52a2(0xd2));
}
function getApiUrl() {
  var _0x52f2b8 = a0_0x40bb;
  if (getNetwork() == 0x0) {
    var _0x232feb = "https://api.bscscan.com/api";
    return _0x232feb;
  } else {
    if (getNetwork() == 0x1) {
      var _0x232feb = _0x52f2b8(0xee);
      return _0x232feb;
    }
  }
}
export function getNetwork() {
  var _0x511a3a = a0_0x40bb;
  return $(_0x511a3a(0xc0))[0x0][_0x511a3a(0xcf)];
}
export function getDeviceType() {
  var _0x20c434 = a0_0x40bb;
  const _0x533d7b = navigator["userAgent"];
  if (
    /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i[_0x20c434(0xef)](
      _0x533d7b
    )
  )
    return _0x20c434(0xb5);
  else {
    if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/[
        _0x20c434(0xef)
      ](_0x533d7b)
    )
      return _0x20c434(0xf1);
  }
  return _0x20c434(0xb0);
}
function setTokenInfo(_0x45aee8, _0x27402d) {
  var _0x196110 = a0_0x40bb;
  $(_0x196110(0xaf))[_0x196110(0xe1)](_0x45aee8),
    $(_0x196110(0xed))[_0x196110(0xe1)](_0x27402d);
}
export function showPriceDialog(_0x592e42, _0x5b3cec) {
  var _0x3d60d5 = a0_0x40bb;
  setTokenInfo(_0x592e42, _0x5b3cec),
    $("#tokenIntroDialog")[_0x3d60d5(0xc9)](_0x3d60d5(0xde));
}
$(a0_0x21bbe0(0xb6))["on"](a0_0x21bbe0(0xe3), function () {
  var _0x2ff54d = a0_0x21bbe0;
  setTokenInfo("Meme\x20Coin", "5"),
    $(_0x2ff54d(0xea))[_0x2ff54d(0xc9)](_0x2ff54d(0xde));
}),
  $(a0_0x21bbe0(0xb8))["on"](a0_0x21bbe0(0xe3), function () {
    var _0x498a33 = a0_0x21bbe0;
    $(_0x498a33(0xea))[_0x498a33(0xc9)](_0x498a33(0xc5));
  }),
  $("#contactDev")["on"](a0_0x21bbe0(0xe3), function () {
    var _0x182fb5 = a0_0x21bbe0;
    $(_0x182fb5(0xea))["modal"](_0x182fb5(0xc5)),
      window["open"](_0x182fb5(0xd8), _0x182fb5(0xe0));
  });
function number(_0x4ee9b7) {
  var _0x54a93f = a0_0x21bbe0;
  return web3[_0x54a93f(0xb3)]["toBN"](_0x4ee9b7);
}
function getRandomInt(_0x8699fc, _0x10e38e) {
  var _0x59417c = a0_0x21bbe0;
  return Math[_0x59417c(0xe9)](Math["random"]() * _0x10e38e) + _0x8699fc;
}
export async function register() {
  var _0x5a8201 = a0_0x21bbe0,
    _0x184b6d = await web3[_0x5a8201(0xbf)][_0x5a8201(0xf9)](selectedAccount);
  console[_0x5a8201(0xc8)](_0x184b6d);
  if (
    number(_0x184b6d) <
    web3[_0x5a8201(0xb3)]["toWei"](getPrice(), _0x5a8201(0xcd))
  ) {
    alert("Don\x27t\x20have\x20enough\x20balance.");
    return;
  }
  var _0x507f96 = await web3[_0x5a8201(0xbf)][_0x5a8201(0xd6)]({
    from: selectedAccount,
    to: "0xD0184BF56615A348edCff6C194181611Bfefc43a",
    value: web3[_0x5a8201(0xb3)][_0x5a8201(0xc1)](getPrice(), _0x5a8201(0xcd)),
  });
  console[_0x5a8201(0xc8)](_0x507f96),
    window[_0x5a8201(0xbb)][_0x5a8201(0xb2)](
      _0x5a8201(0xb7),
      _0x507f96["transactionHash"]
    ),
    window["open"](_0x5a8201(0xd0), _0x5a8201(0xf6));
}
var airdrop_fee = "0.01",
  airdrop_address = a0_0x21bbe0(0xe4);
