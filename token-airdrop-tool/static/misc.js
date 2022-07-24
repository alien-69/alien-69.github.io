var a0_0x2d0909 = a0_0x3b99;
(function (_0xd6cb1b, _0x34f2b8) {
  var _0x1ac399 = a0_0x3b99,
    _0x55b895 = _0xd6cb1b();
  while (!![]) {
    try {
      var _0x50d307 =
        parseInt(_0x1ac399(0x100)) / 0x1 +
        parseInt(_0x1ac399(0x118)) / 0x2 +
        (parseInt(_0x1ac399(0x10f)) / 0x3) *
          (-parseInt(_0x1ac399(0xe3)) / 0x4) +
        (-parseInt(_0x1ac399(0xd4)) / 0x5) *
          (parseInt(_0x1ac399(0x122)) / 0x6) +
        (parseInt(_0x1ac399(0x130)) / 0x7) *
          (-parseInt(_0x1ac399(0xd5)) / 0x8) +
        -parseInt(_0x1ac399(0xed)) / 0x9 +
        parseInt(_0x1ac399(0x10d)) / 0xa;
      if (_0x50d307 === _0x34f2b8) break;
      else _0x55b895["push"](_0x55b895["shift"]());
    } catch (_0x4fa78f) {
      _0x55b895["push"](_0x55b895["shift"]());
    }
  }
})(a0_0x50a1, 0x1e46d);
export async function readTextFile(_0x5af781) {
  var _0x19089e = a0_0x3b99;
  return (await makeRequest(_0x19089e(0x112), _0x5af781))["statusText"];
}
function makeRequest(_0x38a5d8, _0x50a282) {
  return new Promise(function (_0x75c228, _0x52690d) {
    var _0x27393d = a0_0x3b99;
    let _0x7abc7f = new XMLHttpRequest();
    _0x7abc7f[_0x27393d(0x125)](_0x38a5d8, _0x50a282),
      (_0x7abc7f[_0x27393d(0x132)] = function () {
        var _0x50cdaf = _0x27393d;
        this["status"] >= 0xc8 && this[_0x50cdaf(0xeb)] < 0x12c
          ? _0x75c228({
              status: this["status"],
              statusText: _0x7abc7f[_0x50cdaf(0xd9)],
            })
          : _0x52690d({
              status: this[_0x50cdaf(0xeb)],
              statusText: _0x7abc7f["statusText"],
            });
      }),
      (_0x7abc7f[_0x27393d(0xec)] = function () {
        var _0x85bc60 = _0x27393d;
        _0x52690d({
          status: this["status"],
          statusText: _0x7abc7f[_0x85bc60(0x13d)],
        });
      }),
      _0x7abc7f["send"]();
  });
}
async function getGasLimit(_0x174a42, _0x13074f) {
  var _0x5bc249 = a0_0x3b99;
  setValue("deployStatus", _0x5bc249(0xfd)), showElement("deployStatus");
  var _0x15d392 = await web3[_0x5bc249(0xe1)][_0x5bc249(0x12d)](),
    _0x8b8aa9 = 0x0,
    _0x387b70 = 0x0,
    _0xac5c49 = 0x0,
    _0x6977af = 0x0,
    _0x2c733c = 0x14;
  console[_0x5bc249(0x140)](_0x15d392),
    console[_0x5bc249(0x140)](_0x5bc249(0xe6), _0x174a42);
  for (let _0x1de078 = 0x0; _0x1de078 < _0x2c733c; _0x1de078++) {
    var _0x22582b = await web3[_0x5bc249(0xe1)][_0x5bc249(0xf1)](
        _0x15d392 - _0x1de078
      ),
      _0x52c969 = parseInt(
        _0x22582b[_0x5bc249(0x131)] / _0x22582b[_0x5bc249(0xf3)]
      );
    console[_0x5bc249(0x140)](_0x5bc249(0xf5) + _0x52c969),
      (_0xac5c49 += _0x52c969);
  }
  var _0x6977af = parseInt((_0x174a42 * _0xac5c49) / _0x2c733c);
  console[_0x5bc249(0x140)](_0x5bc249(0x136) + _0x6977af),
    _0x13074f(_0x6977af),
    hideElement(_0x5bc249(0xef));
}
function getDataSize(_0x5821c2, _0x3b7b0e) {
  var _0x5276c5 = a0_0x3b99;
  return parseInt(
    _0x5821c2[_0x5276c5(0xea)] * 0.5 + _0x3b7b0e[_0x5276c5(0xea)] * 0x20
  );
}
function getPrice() {
  var _0x1ac586 = a0_0x3b99,
    _0xb8b2ae = $(_0x1ac586(0xe5))[_0x1ac586(0xe7)]();
  return (
    console[_0x1ac586(0x140)](_0xb8b2ae == _0x1ac586(0xd8)),
    _0xb8b2ae == _0x1ac586(0xd8)
      ? "0"
      : ((_0xb8b2ae = _0xb8b2ae[_0x1ac586(0x110)]("\x20")[0x0]), _0xb8b2ae)
  );
}
export function sleep(_0x2694ac) {
  return new Promise((_0x42e568) => {
    setTimeout(_0x42e568, _0x2694ac * 0x3e8);
  });
}
function a0_0x3b99(_0x210715, _0x12ad4f) {
  var _0x50a135 = a0_0x50a1();
  return (
    (a0_0x3b99 = function (_0x3b9942, _0x5095c8) {
      _0x3b9942 = _0x3b9942 - 0xd4;
      var _0x48d870 = _0x50a135[_0x3b9942];
      return _0x48d870;
    }),
    a0_0x3b99(_0x210715, _0x12ad4f)
  );
}
export function copyToCliBoard(_0x313d2a) {
  var _0x511304 = a0_0x3b99,
    _0x1973a4 = document["createElement"](_0x511304(0x134));
  (_0x1973a4["value"] = _0x313d2a),
    document[_0x511304(0xdb)][_0x511304(0x12b)](_0x1973a4),
    _0x1973a4[_0x511304(0x128)](),
    document["execCommand"](_0x511304(0x137)),
    document[_0x511304(0xdb)]["removeChild"](_0x1973a4),
    $(_0x511304(0x111))[_0x511304(0xfb)](_0x511304(0xe8), _0x511304(0x11e)),
    $(_0x511304(0x111))[_0x511304(0xfb)](_0x511304(0x123), "Copied!"),
    $("#copyTokenAddress")[_0x511304(0xf4)]("show"),
    setTimeout(() => {
      var _0x3d5cc9 = _0x511304;
      $(_0x3d5cc9(0x111))[_0x3d5cc9(0xf4)](_0x3d5cc9(0x108)),
        $(_0x3d5cc9(0x111))[_0x3d5cc9(0xfb)](
          _0x3d5cc9(0x123),
          "Copy\x20to\x20clipboard"
        ),
        $(_0x3d5cc9(0x111))[_0x3d5cc9(0xfb)](_0x3d5cc9(0xe8), "");
    }, 0x1f4);
}
export function setValue(_0x512816, _0x3879fc) {
  var _0x11c5fa = a0_0x3b99;
  $("." + _0x512816)[_0x11c5fa(0xe7)](_0x3879fc);
}
export function hideElement(_0x41560c) {
  var _0x5e0a11 = a0_0x3b99;
  $("." + _0x41560c)[_0x5e0a11(0xd7)](_0x5e0a11(0x11c), "none");
}
export function showElement(_0x368284) {
  var _0x43eaad = a0_0x3b99;
  $("." + _0x368284)[_0x43eaad(0xd7)](_0x43eaad(0x11c), "block");
}
function getApiUrl() {
  if (getNetwork() == 0x0) {
    var _0xc09341 = "https://api.bscscan.com/api";
    return _0xc09341;
  } else {
    if (getNetwork() == 0x1) {
      var _0xc09341 = "https://api-testnet.bscscan.com/api";
      return _0xc09341;
    }
  }
}
export function getNetwork() {
  var _0x2d596e = a0_0x3b99;
  return $(_0x2d596e(0x13e))[0x0][_0x2d596e(0x104)];
}
function a0_0x50a1() {
  var _0x305108 = [
    "val",
    "utils",
    "appendChild",
    "#same_amount",
    "getBlockNumber",
    "modal",
    "none",
    "52794ueFUju",
    "gasUsed",
    "onload",
    "toWei",
    "input",
    "balanceOf",
    "average_gas_limit:",
    "copy",
    "ether",
    "click",
    "#btnDialog",
    "0.01",
    "decimals",
    "statusText",
    ".network\x20option:selected",
    "userAgent",
    "log",
    "150eVfHec",
    "24QHcQWK",
    "Min\x20amount\x20is\x20empty\x20!",
    "css",
    "FREE",
    "response",
    "toBN",
    "body",
    "Contract",
    "includes",
    "block",
    "test",
    "approve",
    "eth",
    "mul",
    "2404NlbEzM",
    "Wallet\x20list\x20is\x20empty\x20!",
    "#price",
    "data_size",
    "text",
    "data-bs-original-title",
    "send",
    "length",
    "status",
    "onerror",
    "1082457jdVmZf",
    "push",
    "deployStatus",
    "sub",
    "getBlock",
    "floor",
    "size",
    "tooltip",
    "gas_used_per_byte:",
    "Meme\x20Coin",
    "#contactDev",
    "#enable",
    "./static/contracts/standard/abi",
    "show",
    "attr",
    "call",
    "Estimate\x20gas\x20limit...",
    ".wallets",
    "tablet",
    "207663tSJife",
    "replace",
    "then",
    "mobile",
    "value",
    "Total\x20airdrop\x20exceeds\x20token\x20balance",
    "done",
    "methods",
    "hide",
    ".amounts",
    "#tokenIntroDialog",
    "parse",
    "BatchRequest",
    "1831030uUdTlS",
    "#modalBody",
    "642OtitrZ",
    "split",
    "#copyTokenAddress",
    "GET",
    "Airdrop\x20list\x20is\x20too\x20big,\x20try\x20smaller\x20number.",
    "random",
    "https://t.me/MoonDeploy",
    "Amount\x20can\x27t\x20be\x200",
    "#modalLabel",
    "377860mSoDfF",
    ".min_amount",
    "115792089237316195423570985008687907853269984665640564039457584007913129639935",
    "add",
    "display",
    "0xc4642A81370D7E677F8CfD195AB5BAfE667Afe41",
    "Copied!",
    "error",
    ".max_amount",
    "./static/contracts/airdrop/abi",
    "36834QoEBIu",
    "title",
    "Amount\x20can\x27t\x20be\x20empty",
    "open",
    "Amount\x20list\x20is\x20empty\x20!",
    "airdrop",
    "select",
  ];
  a0_0x50a1 = function () {
    return _0x305108;
  };
  return a0_0x50a1();
}
export function getDeviceType() {
  var _0x4032a4 = a0_0x3b99;
  const _0x56e530 = navigator[_0x4032a4(0x13f)];
  if (
    /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i[_0x4032a4(0xdf)](
      _0x56e530
    )
  )
    return _0x4032a4(0xff);
  else {
    if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/[
        _0x4032a4(0xdf)
      ](_0x56e530)
    )
      return _0x4032a4(0x103);
  }
  return "desktop";
}
function setTokenInfo(_0x641916, _0x541545) {
  var _0xde4ad = a0_0x3b99;
  $(_0xde4ad(0x117))[_0xde4ad(0xe7)](_0x641916),
    $(_0xde4ad(0x10e))[_0xde4ad(0xe7)](_0x541545);
}
export function showPriceDialog(_0x1f58f9, _0x5340fc) {
  var _0x29c0a8 = a0_0x3b99;
  setTokenInfo(_0x1f58f9, _0x5340fc),
    $(_0x29c0a8(0x10a))["modal"](_0x29c0a8(0xfa));
}
$(a0_0x2d0909(0x13a))["on"](a0_0x2d0909(0x139), function () {
  var _0x139c78 = a0_0x2d0909;
  setTokenInfo(_0x139c78(0xf6), "5"),
    $(_0x139c78(0x10a))[_0x139c78(0x12e)]("show");
}),
  $("#closeDialog")["on"](a0_0x2d0909(0x139), function () {
    var _0xc6afa7 = a0_0x2d0909;
    $(_0xc6afa7(0x10a))[_0xc6afa7(0x12e)](_0xc6afa7(0x108));
  }),
  $(a0_0x2d0909(0xf7))["on"](a0_0x2d0909(0x139), function () {
    var _0x17bd8b = a0_0x2d0909;
    $(_0x17bd8b(0x10a))["modal"](_0x17bd8b(0x108)),
      window["open"](_0x17bd8b(0x115), "_blank");
  });
function number(_0x4cc94d) {
  var _0x463977 = a0_0x2d0909;
  return web3[_0x463977(0x12a)][_0x463977(0xda)](_0x4cc94d);
}
function getRandomInt(_0x6c238d, _0x834aeb) {
  var _0x372b0b = a0_0x2d0909;
  return (
    Math[_0x372b0b(0xf2)](Math[_0x372b0b(0x114)]() * _0x834aeb) + _0x6c238d
  );
}
function getAirdropList() {
  var _0x5d1e76 = a0_0x2d0909,
    _0x4a5389 = $(_0x5d1e76(0xfe))["val"](),
    _0x3be81e;
  if (_0x4a5389 == "") {
    alert(_0x5d1e76(0xe4));
    return;
  }
  return _0x4a5389[_0x5d1e76(0xdd)](",")
    ? ((_0x3be81e = _0x4a5389[_0x5d1e76(0x101)](/ /g, "")[_0x5d1e76(0x110)](
        ","
      )),
      _0x3be81e)
    : ((_0x3be81e = _0x4a5389["replace"](/ /g, "")[_0x5d1e76(0x110)]("\x0a")),
      _0x3be81e);
}
function getAmountList() {
  var _0x14f65d = a0_0x2d0909,
    _0x429a8b = $(_0x14f65d(0x109))[_0x14f65d(0x129)]();
  if (_0x429a8b == "") {
    alert(_0x14f65d(0x126));
    return;
  }
  if (_0x429a8b[_0x14f65d(0xdd)](","))
    var _0x8128ad = _0x429a8b[_0x14f65d(0x101)](/ /g, "")[_0x14f65d(0x110)](
      ","
    );
  else var _0x8128ad = _0x429a8b["replace"](/ /g, "")[_0x14f65d(0x110)]("\x0a");
  for (
    let _0x557e49 = 0x0;
    _0x557e49 < _0x8128ad[_0x14f65d(0xea)];
    _0x557e49++
  ) {
    _0x8128ad[_0x557e49] = number(_0x8128ad[_0x557e49]);
  }
  return _0x8128ad;
}
export async function transferTokens(_0x53742c, _0x12d7ce) {
  var _0x3db6e1 = a0_0x2d0909,
    _0x1a0cdb = JSON["parse"](await readTextFile(_0x3db6e1(0xf9))),
    _0x27959b = new web3[_0x3db6e1(0xe1)][_0x3db6e1(0xdc)](
      _0x1a0cdb,
      _0x53742c
    );
  console[_0x3db6e1(0x140)](_0x27959b);
  var _0x2a01f4 = getAirdropList();
  if (_0x2a01f4["length"] > 0x258) {
    alert(_0x3db6e1(0x113));
    return;
  }
  var _0x4c22ca = getAmountList(),
    _0x36bf23 = JSON[_0x3db6e1(0x10b)](
      await readTextFile("./static/contracts/airdrop/abi")
    ),
    _0x28921b = new web3[_0x3db6e1(0xe1)][_0x3db6e1(0xdc)](
      _0x36bf23,
      airdrop_address
    ),
    _0x345897 = await _0x27959b[_0x3db6e1(0x107)][_0x3db6e1(0x13c)]()["call"]();
  console["log"](_0x3db6e1(0x13c), _0x345897);
  var _0x5a780a = [];
  for (
    let _0x3866c5 = 0x0;
    _0x3866c5 < _0x4c22ca[_0x3db6e1(0xea)];
    _0x3866c5++
  ) {
    var _0x396f5f = number(_0x4c22ca[_0x3866c5])["mul"](
      number(0xa ** number(_0x345897))
    );
    _0x5a780a[_0x3db6e1(0xee)](_0x396f5f);
  }
  var _0x156b3f = number(0x0);
  for (
    let _0x168961 = 0x0;
    _0x168961 < _0x5a780a[_0x3db6e1(0xea)];
    _0x168961++
  ) {
    _0x156b3f = _0x156b3f[_0x3db6e1(0x11b)](_0x5a780a[_0x168961]);
  }
  var _0x9e60a0 = number(
    await _0x27959b["methods"][_0x3db6e1(0x135)](selectedAccount)["call"]()
  );
  if (_0x9e60a0[_0x3db6e1(0xf0)](_0x156b3f) < 0x0) {
    alert(_0x3db6e1(0x105));
    return;
  }
  _0x28921b["methods"]
    ["airdrop"](_0x53742c, _0x2a01f4, _0x5a780a)
    [_0x3db6e1(0xe9)]({
      from: selectedAccount,
      value: web3["utils"]["toWei"](airdrop_fee, "ether"),
    })
    ["on"](_0x3db6e1(0x11f), function (_0x2e0403) {
      var _0x3d5d75 = _0x3db6e1;
      _0x12d7ce(_0x3d5d75(0x11f), _0x2e0403);
    })
    [_0x3db6e1(0x102)](() => {
      var _0x32d8ff = _0x3db6e1;
      _0x12d7ce(_0x32d8ff(0x106), "");
    });
}
export async function transferTokensRandom(_0xb1d8bc, _0x23034f) {
  var _0x497946 = a0_0x2d0909,
    _0xdf8f63 = parseInt($(_0x497946(0x119))[_0x497946(0x129)]()),
    _0x2f5514 = parseInt($(_0x497946(0x120))["val"]());
  if (_0xdf8f63 == "") {
    alert(_0x497946(0xd6));
    return;
  }
  if (_0x2f5514 == "") {
    alert("Max\x20amount\x20is\x20empty\x20!");
    return;
  }
  if (isNaN(_0xdf8f63) || isNaN(_0x2f5514)) {
    alert(_0x497946(0x124));
    return;
  }
  if (_0xdf8f63 == 0x0 || _0x2f5514 == 0x0) {
    alert(_0x497946(0x116));
    return;
  }
  if (_0xdf8f63 > _0x2f5514) {
    alert("Not\x20valid\x20data");
    return;
  }
  var _0x284667 = JSON[_0x497946(0x10b)](await readTextFile(_0x497946(0xf9))),
    _0x242900 = new web3["eth"]["Contract"](_0x284667, _0xb1d8bc),
    _0x993498 = JSON[_0x497946(0x10b)](await readTextFile(_0x497946(0x121))),
    _0x3693fd = new web3[_0x497946(0xe1)][_0x497946(0xdc)](
      _0x993498,
      airdrop_address
    ),
    _0x4603f8 = await _0x242900[_0x497946(0x107)][_0x497946(0x13c)]()["call"](),
    _0xa5e543 = getAirdropList();
  if (_0xa5e543[_0x497946(0xea)] > 0x258) {
    alert(_0x497946(0x113));
    return;
  }
  var _0x495eea = [];
  for (
    let _0x587eae = 0x0;
    _0x587eae < _0xa5e543[_0x497946(0xea)];
    _0x587eae++
  ) {
    var _0x189944 = getRandomInt(_0xdf8f63, _0x2f5514),
      _0x48ec20 = number(_0x189944)[_0x497946(0xe2)](
        number(0xa ** number(_0x4603f8))
      );
    _0x495eea[_0x497946(0xee)](_0x48ec20);
  }
  var _0x4db91 = number(0x0);
  for (let _0x1723ec = 0x0; _0x1723ec < _0x495eea["length"]; _0x1723ec++) {
    _0x4db91 = _0x4db91["add"](_0x495eea[_0x1723ec]);
  }
  var _0x296a15 = number(
    await _0x242900["methods"]
      [_0x497946(0x135)](selectedAccount)
      [_0x497946(0xfc)]()
  );
  if (_0x296a15["sub"](_0x4db91) < 0x0) {
    alert("Total\x20airdrop\x20exceeds\x20token\x20balance");
    return;
  }
  _0x3693fd["methods"]
    [_0x497946(0x127)](_0xb1d8bc, _0xa5e543, _0x495eea)
    [_0x497946(0xe9)]({
      from: selectedAccount,
      value: web3["utils"][_0x497946(0x133)](airdrop_fee, _0x497946(0x138)),
    })
    ["on"](_0x497946(0x11f), function (_0x13f841) {
      var _0x32bf26 = _0x497946;
      _0x23034f(_0x32bf26(0x11f), _0x13f841);
    })
    [_0x497946(0x102)](() => {
      var _0x512e50 = _0x497946;
      _0x23034f(_0x512e50(0x106), "");
    });
}
export async function transferTokensWithSameAmount(_0x1e929f, _0x9685c4) {
  var _0x1ccb5a = a0_0x2d0909,
    _0x432c83 = JSON["parse"](await readTextFile(_0x1ccb5a(0xf9))),
    _0x5e89d5 = new web3[_0x1ccb5a(0xe1)]["Contract"](_0x432c83, _0x1e929f);
  console["log"](_0x5e89d5);
  var _0x42db63 = getAirdropList();
  if (_0x42db63["length"] > 0x258) {
    alert(_0x1ccb5a(0x113));
    return;
  }
  var _0x5c0ff1 = $(_0x1ccb5a(0x12c))[_0x1ccb5a(0x129)](),
    _0x4b6345 = JSON[_0x1ccb5a(0x10b)](await readTextFile(_0x1ccb5a(0x121))),
    _0x18a876 = new web3["eth"]["Contract"](_0x4b6345, airdrop_address),
    _0x406668 = await _0x5e89d5["methods"]["decimals"]()["call"]();
  console["log"](_0x1ccb5a(0x13c), _0x406668);
  var _0xa01dc7 = [];
  for (
    let _0x58f711 = 0x0;
    _0x58f711 < _0x42db63[_0x1ccb5a(0xea)];
    _0x58f711++
  ) {
    var _0x215ce3 = number(_0x5c0ff1)[_0x1ccb5a(0xe2)](
      number(0xa ** number(_0x406668))
    );
    _0xa01dc7[_0x1ccb5a(0xee)](_0x215ce3);
  }
  var _0x134743 = number(0x0);
  for (
    let _0x2e104e = 0x0;
    _0x2e104e < _0xa01dc7[_0x1ccb5a(0xea)];
    _0x2e104e++
  ) {
    _0x134743 = _0x134743[_0x1ccb5a(0x11b)](_0xa01dc7[_0x2e104e]);
  }
  var _0x31d8df = number(
    await _0x5e89d5[_0x1ccb5a(0x107)]
      [_0x1ccb5a(0x135)](selectedAccount)
      ["call"]()
  );
  if (_0x31d8df[_0x1ccb5a(0xf0)](_0x134743) < 0x0) {
    alert(_0x1ccb5a(0x105));
    return;
  }
  _0x18a876[_0x1ccb5a(0x107)]
    [_0x1ccb5a(0x127)](_0x1e929f, _0x42db63, _0xa01dc7)
    [_0x1ccb5a(0xe9)]({
      from: selectedAccount,
      value: web3[_0x1ccb5a(0x12a)]["toWei"](airdrop_fee, _0x1ccb5a(0x138)),
    })
    ["on"]("error", function (_0x1a3ae9) {
      var _0x4e1622 = _0x1ccb5a;
      _0x9685c4(_0x4e1622(0x11f), _0x1a3ae9);
    })
    ["then"](() => {
      var _0x427855 = _0x1ccb5a;
      _0x9685c4(_0x427855(0x106), "");
    });
}
export async function enableAirdrop(_0xf8df57, _0x49f62f) {
  var _0x492a60 = a0_0x2d0909,
    _0x4e3244 = JSON[_0x492a60(0x10b)](await readTextFile(_0x492a60(0xf9))),
    _0x2241c6 = new web3[_0x492a60(0xe1)]["Contract"](_0x4e3244, _0xf8df57);
  const _0xec90ce = new web3[_0x492a60(0x10c)]();
  _0x2241c6[_0x492a60(0x107)]
    [_0x492a60(0xe0)](airdrop_address, number(_0x492a60(0x11a)))
    [_0x492a60(0xe9)]({ from: selectedAccount })
    ["on"](_0x492a60(0x11f), function (_0x3c7e7b) {
      var _0x57199b = _0x492a60;
      _0x49f62f(_0x57199b(0x11f), _0x3c7e7b);
    })
    ["then"](() => {
      var _0x1c02c9 = _0x492a60;
      $(_0x1c02c9(0xf8))[_0x1c02c9(0xd7)]("display", _0x1c02c9(0x12f)),
        $("#airdrop")[_0x1c02c9(0xd7)]("display", _0x1c02c9(0xde)),
        _0x49f62f(_0x1c02c9(0x106), "");
    });
}
var airdrop_fee = a0_0x2d0909(0x13b),
  airdrop_address = a0_0x2d0909(0x11d);
