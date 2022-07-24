var a0_0x492edb = a0_0x19ea;
(function (_0x3f9cd4, _0x336f09) {
  var _0x1bbcb1 = a0_0x19ea,
    _0x5b75a3 = _0x3f9cd4();
  while (!![]) {
    try {
      var _0x2c6000 =
        parseInt(_0x1bbcb1(0x160)) / 0x1 +
        (parseInt(_0x1bbcb1(0x167)) / 0x2) *
          (-parseInt(_0x1bbcb1(0x14e)) / 0x3) +
        -parseInt(_0x1bbcb1(0x156)) / 0x4 +
        (parseInt(_0x1bbcb1(0x154)) / 0x5) *
          (-parseInt(_0x1bbcb1(0x14c)) / 0x6) +
        parseInt(_0x1bbcb1(0x15c)) / 0x7 +
        -parseInt(_0x1bbcb1(0x146)) / 0x8 +
        (parseInt(_0x1bbcb1(0x16b)) / 0x9) * (parseInt(_0x1bbcb1(0x173)) / 0xa);
      if (_0x2c6000 === _0x336f09) break;
      else _0x5b75a3["push"](_0x5b75a3["shift"]());
    } catch (_0x225d7c) {
      _0x5b75a3["push"](_0x5b75a3["shift"]());
    }
  }
})(a0_0x5519, 0x6cc50);
export async function readTextFile(_0x1b463d) {
  var _0x41e6a6 = a0_0x19ea;
  return (await makeRequest("GET", _0x1b463d))[_0x41e6a6(0x150)];
}
function a0_0x5519() {
  var _0x2bace8 = [
    "FREE",
    "#contactDev",
    "ticket_id",
    "tooltip",
    "onload",
    ".network\x20option:selected",
    "Don\x27t\x20have\x20enough\x20balance.",
    "block",
    "https://t.me/MoonDeploy",
    "data_size",
    "tablet",
    "length",
    "#modalLabel",
    "#copyTokenAddress",
    "data-bs-original-title",
    "_self",
    "toBN",
    "size",
    "send",
    "hide",
    "getBlock",
    "open",
    "random",
    "status",
    "#tokenIntroDialog",
    "790880ZNeMKQ",
    "click",
    "createElement",
    "show",
    "appendChild",
    "execCommand",
    "84AtTiRl",
    "toWei",
    "1665fiILex",
    "userAgent",
    "statusText",
    "ether",
    "Copied!",
    "select",
    "216785taqrkI",
    "gasUsed",
    "763792ScEoUd",
    "https://api.bscscan.com/api",
    "getBlockNumber",
    "gas_used_per_byte:",
    "test",
    "eth",
    "2227582pfFGfJ",
    "floor",
    "#price",
    "title",
    "259179kOZyxv",
    "deployStatus",
    "Copy\x20to\x20clipboard",
    "error",
    "log",
    "#modalBody",
    "css",
    "574JGJqDu",
    "average_gas_limit:",
    "modal",
    "onerror",
    "8317854QsHtYq",
    "removeChild",
    "https://api-testnet.bscscan.com/api",
    "utils",
    "_blank",
    "getBalance",
    "sendTransaction",
    "mobile",
    "10tLgMow",
    "display",
    "0xD0184BF56615A348edCff6C194181611Bfefc43a",
    "./success",
    "#closeDialog",
    "text",
    "attr",
    "body",
    "none",
    "transactionHash",
  ];
  a0_0x5519 = function () {
    return _0x2bace8;
  };
  return a0_0x5519();
}
function a0_0x19ea(_0x4debaf, _0x4610b7) {
  var _0x551948 = a0_0x5519();
  return (
    (a0_0x19ea = function (_0x19ea12, _0x2d5671) {
      _0x19ea12 = _0x19ea12 - 0x145;
      var _0x3dd5bc = _0x551948[_0x19ea12];
      return _0x3dd5bc;
    }),
    a0_0x19ea(_0x4debaf, _0x4610b7)
  );
}
function makeRequest(_0xd975f7, _0x509330) {
  return new Promise(function (_0x2e6c56, _0xebd44f) {
    var _0x1e236d = a0_0x19ea;
    let _0x311831 = new XMLHttpRequest();
    _0x311831[_0x1e236d(0x192)](_0xd975f7, _0x509330),
      (_0x311831[_0x1e236d(0x181)] = function () {
        var _0x84005f = _0x1e236d;
        this["status"] >= 0xc8 && this["status"] < 0x12c
          ? _0x2e6c56({
              status: this[_0x84005f(0x194)],
              statusText: _0x311831["response"],
            })
          : _0xebd44f({
              status: this["status"],
              statusText: _0x311831["statusText"],
            });
      }),
      (_0x311831[_0x1e236d(0x16a)] = function () {
        var _0x17b1bf = _0x1e236d;
        _0xebd44f({
          status: this["status"],
          statusText: _0x311831[_0x17b1bf(0x150)],
        });
      }),
      _0x311831[_0x1e236d(0x18f)]();
  });
}
async function getGasLimit(_0x20b51e, _0x12818e) {
  var _0x3621d7 = a0_0x19ea;
  setValue(_0x3621d7(0x161), "Estimate\x20gas\x20limit..."),
    showElement(_0x3621d7(0x161));
  var _0x1052b5 = await web3[_0x3621d7(0x15b)][_0x3621d7(0x158)](),
    _0x575da5 = 0x0,
    _0xf741de = 0x0,
    _0x1010b1 = 0x0,
    _0x2a11f1 = 0x0,
    _0x547c78 = 0x14;
  console[_0x3621d7(0x164)](_0x1052b5),
    console["log"](_0x3621d7(0x186), _0x20b51e);
  for (let _0x2474a7 = 0x0; _0x2474a7 < _0x547c78; _0x2474a7++) {
    var _0x395b80 = await web3[_0x3621d7(0x15b)][_0x3621d7(0x191)](
        _0x1052b5 - _0x2474a7
      ),
      _0x3a205f = parseInt(
        _0x395b80[_0x3621d7(0x155)] / _0x395b80[_0x3621d7(0x18e)]
      );
    console[_0x3621d7(0x164)](_0x3621d7(0x159) + _0x3a205f),
      (_0x1010b1 += _0x3a205f);
  }
  var _0x2a11f1 = parseInt((_0x20b51e * _0x1010b1) / _0x547c78);
  console[_0x3621d7(0x164)](_0x3621d7(0x168) + _0x2a11f1),
    _0x12818e(_0x2a11f1),
    hideElement("deployStatus");
}
function getDataSize(_0x200429, _0x587bce) {
  var _0x424b3e = a0_0x19ea;
  return parseInt(
    _0x200429["length"] * 0.5 + _0x587bce[_0x424b3e(0x188)] * 0x20
  );
}
function getPrice() {
  var _0x568708 = a0_0x19ea,
    _0x2532be = $(_0x568708(0x15e))["text"]();
  return (
    console["log"](_0x2532be == _0x568708(0x17d)),
    _0x2532be == _0x568708(0x17d)
      ? "0"
      : ((_0x2532be = _0x2532be["split"]("\x20")[0x0]), _0x2532be)
  );
}
export function sleep(_0xf634ea) {
  return new Promise((_0x717fb0) => {
    setTimeout(_0x717fb0, _0xf634ea * 0x3e8);
  });
}
export function copyToCliBoard(_0x4b061f) {
  var _0x3a5103 = a0_0x19ea,
    _0x483f48 = document[_0x3a5103(0x148)]("input");
  (_0x483f48["value"] = _0x4b061f),
    document[_0x3a5103(0x17a)][_0x3a5103(0x14a)](_0x483f48),
    _0x483f48[_0x3a5103(0x153)](),
    document[_0x3a5103(0x14b)]("copy"),
    document[_0x3a5103(0x17a)][_0x3a5103(0x16c)](_0x483f48),
    $(_0x3a5103(0x18a))["attr"]("data-bs-original-title", "Copied!"),
    $(_0x3a5103(0x18a))["attr"](_0x3a5103(0x15f), _0x3a5103(0x152)),
    $(_0x3a5103(0x18a))[_0x3a5103(0x180)](_0x3a5103(0x149)),
    setTimeout(() => {
      var _0x563938 = _0x3a5103;
      $(_0x563938(0x18a))[_0x563938(0x180)](_0x563938(0x190)),
        $("#copyTokenAddress")[_0x563938(0x179)]("title", _0x563938(0x162)),
        $(_0x563938(0x18a))[_0x563938(0x179)](_0x563938(0x18b), "");
    }, 0x1f4);
}
export function setValue(_0x438802, _0x41fcd4) {
  var _0x41f349 = a0_0x19ea;
  $("." + _0x438802)[_0x41f349(0x178)](_0x41fcd4);
}
export function hideElement(_0x58f375) {
  var _0x56c1f6 = a0_0x19ea;
  $("." + _0x58f375)["css"]("display", _0x56c1f6(0x17b));
}
export function showElement(_0x5c122b) {
  var _0x40fefd = a0_0x19ea;
  $("." + _0x5c122b)[_0x40fefd(0x166)](_0x40fefd(0x174), _0x40fefd(0x184));
}
function getApiUrl() {
  var _0x4dc14f = a0_0x19ea;
  if (getNetwork() == 0x0) {
    var _0x42cea4 = _0x4dc14f(0x157);
    return _0x42cea4;
  } else {
    if (getNetwork() == 0x1) {
      var _0x42cea4 = _0x4dc14f(0x16d);
      return _0x42cea4;
    }
  }
}
export function getNetwork() {
  var _0x1f0960 = a0_0x19ea;
  return $(_0x1f0960(0x182))[0x0]["value"];
}
export function getDeviceType() {
  var _0x5a7674 = a0_0x19ea;
  const _0x1da1c9 = navigator[_0x5a7674(0x14f)];
  if (
    /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i[_0x5a7674(0x15a)](
      _0x1da1c9
    )
  )
    return _0x5a7674(0x187);
  else {
    if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/[
        "test"
      ](_0x1da1c9)
    )
      return _0x5a7674(0x172);
  }
  return "desktop";
}
function setTokenInfo(_0x7978a9, _0x382907) {
  var _0x4e3b9a = a0_0x19ea;
  $(_0x4e3b9a(0x189))[_0x4e3b9a(0x178)](_0x7978a9),
    $(_0x4e3b9a(0x165))[_0x4e3b9a(0x178)](_0x382907);
}
export function showPriceDialog(_0x3d2a35, _0x81320a) {
  var _0x30c893 = a0_0x19ea;
  setTokenInfo(_0x3d2a35, _0x81320a),
    $(_0x30c893(0x145))[_0x30c893(0x169)](_0x30c893(0x149));
}
$("#btnDialog")["on"](a0_0x492edb(0x147), function () {
  var _0xc22d3 = a0_0x492edb;
  setTokenInfo("Meme\x20Coin", "5"),
    $(_0xc22d3(0x145))[_0xc22d3(0x169)]("show");
}),
  $(a0_0x492edb(0x177))["on"](a0_0x492edb(0x147), function () {
    var _0x2c217d = a0_0x492edb;
    $(_0x2c217d(0x145))[_0x2c217d(0x169)](_0x2c217d(0x190));
  }),
  $(a0_0x492edb(0x17e))["on"]("click", function () {
    var _0x5edd09 = a0_0x492edb;
    $(_0x5edd09(0x145))[_0x5edd09(0x169)]("hide"),
      window[_0x5edd09(0x192)](_0x5edd09(0x185), _0x5edd09(0x16f));
  });
function number(_0x54ae05) {
  var _0x49d645 = a0_0x492edb;
  return web3[_0x49d645(0x16e)][_0x49d645(0x18d)](_0x54ae05);
}
function getRandomInt(_0x3b5e1a, _0x4db431) {
  var _0x2b39f2 = a0_0x492edb;
  return (
    Math[_0x2b39f2(0x15d)](Math[_0x2b39f2(0x193)]() * _0x4db431) + _0x3b5e1a
  );
}
export async function register(_0x4886ed) {
  var _0x5753f6 = a0_0x492edb,
    _0x25594a = await web3[_0x5753f6(0x15b)][_0x5753f6(0x170)](selectedAccount);
  console[_0x5753f6(0x164)](_0x25594a);
  if (
    number(_0x25594a) <
    web3[_0x5753f6(0x16e)][_0x5753f6(0x14d)](getPrice(), _0x5753f6(0x151))
  ) {
    alert(_0x5753f6(0x183));
    return;
  }
  var _0x919737 = await web3[_0x5753f6(0x15b)]
    [_0x5753f6(0x171)]({
      from: selectedAccount,
      to: _0x5753f6(0x175),
      value: web3[_0x5753f6(0x16e)][_0x5753f6(0x14d)](
        getPrice(),
        _0x5753f6(0x151)
      ),
    })
    ["on"](_0x5753f6(0x163), function (_0x40dfe6) {
      _0x4886ed("error", _0x40dfe6);
    });
  console[_0x5753f6(0x164)](_0x919737),
    window["localStorage"]["setItem"](
      _0x5753f6(0x17f),
      _0x919737[_0x5753f6(0x17c)]
    ),
    window[_0x5753f6(0x192)](_0x5753f6(0x176), _0x5753f6(0x18c));
}
