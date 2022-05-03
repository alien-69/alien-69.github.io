var a0_0x4ff743 = a0_0x3b74;
(function (_0x126a60, _0x467918) {
  var _0x413521 = a0_0x3b74,
    _0x4617f2 = _0x126a60();
  while (!![]) {
    try {
      var _0x3cc858 =
        -parseInt(_0x413521(0x1b5)) / 0x1 +
        (parseInt(_0x413521(0x1c0)) / 0x2) *
          (-parseInt(_0x413521(0x19d)) / 0x3) +
        (parseInt(_0x413521(0x198)) / 0x4) *
          (-parseInt(_0x413521(0x1c5)) / 0x5) +
        (parseInt(_0x413521(0x175)) / 0x6) *
          (parseInt(_0x413521(0x181)) / 0x7) +
        parseInt(_0x413521(0x1ba)) / 0x8 +
        parseInt(_0x413521(0x1aa)) / 0x9 +
        (-parseInt(_0x413521(0x164)) / 0xa) *
          (-parseInt(_0x413521(0x176)) / 0xb);
      if (_0x3cc858 === _0x467918) break;
      else _0x4617f2["push"](_0x4617f2["shift"]());
    } catch (_0x27bb6a) {
      _0x4617f2["push"](_0x4617f2["shift"]());
    }
  }
})(a0_0x46af, 0x425ec);
export function solcCompiler(_0x12f547) {
  var _0x499ab7 = a0_0x3b74;
  BrowserSolc[_0x499ab7(0x1b2)](
    "soljson-v0.4.26+commit.4563c3fc.js",
    function (_0x42db50) {
      var _0x4da71d = _0x499ab7,
        _0x489be6 = _0x489be6,
        _0x4af1ea = 0x1,
        _0x106f0d = _0x42db50[_0x4da71d(0x18c)](_0x489be6, _0x4af1ea);
      console[_0x4da71d(0x14f)](
        _0x4da71d(0x151) +
          JSON[_0x4da71d(0x1c9)](_0x42db50) +
          "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
          JSON[_0x4da71d(0x1c9)](_0x106f0d) +
          _0x4da71d(0x153)
      );
    }
  ),
    BrowserSolc["getVersions"](function (_0xb4c9ee, _0x25fb9b) {
      var _0x3b5c90 = _0x499ab7;
      console["log"](_0xb4c9ee), console[_0x3b5c90(0x14f)](_0x25fb9b);
    });
}
function readTextFile_old(_0x5d7f44, _0x527a75) {
  var _0x58c8e9 = a0_0x3b74,
    _0x1b3721 = new XMLHttpRequest();
  _0x1b3721[_0x58c8e9(0x1c6)](_0x58c8e9(0x159), _0x5d7f44, ![]),
    (_0x1b3721[_0x58c8e9(0x1a2)] = function () {
      var _0x439df2 = _0x58c8e9;
      if (_0x1b3721["readyState"] === 0x4) {
        if (
          _0x1b3721[_0x439df2(0x15a)] === 0xc8 ||
          _0x1b3721[_0x439df2(0x15a)] == 0x0
        ) {
          var _0x41f38d = _0x1b3721[_0x439df2(0x180)];
          _0x527a75(_0x41f38d);
        }
      }
    }),
    _0x1b3721["send"](null);
}
export async function readTextFile(_0x2a5648) {
  var _0x1c93c9 = a0_0x3b74;
  return (await makeRequest("GET", _0x2a5648))[_0x1c93c9(0x1b4)];
}
function makeRequest(_0x291ba0, _0xe456dc) {
  return new Promise(function (_0x4a9fdb, _0x245eb9) {
    var _0x287cf0 = a0_0x3b74;
    let _0x36951 = new XMLHttpRequest();
    _0x36951["open"](_0x291ba0, _0xe456dc),
      (_0x36951[_0x287cf0(0x1a3)] = function () {
        var _0x308237 = _0x287cf0;
        this[_0x308237(0x15a)] >= 0xc8 && this[_0x308237(0x15a)] < 0x12c
          ? _0x4a9fdb({
              status: this[_0x308237(0x15a)],
              statusText: _0x36951["response"],
            })
          : _0x245eb9({
              status: this["status"],
              statusText: _0x36951[_0x308237(0x1b4)],
            });
      }),
      (_0x36951[_0x287cf0(0x1ac)] = function () {
        var _0x5ab9b0 = _0x287cf0;
        _0x245eb9({
          status: this[_0x5ab9b0(0x15a)],
          statusText: _0x36951[_0x5ab9b0(0x1b4)],
        });
      }),
      _0x36951[_0x287cf0(0x15c)]();
  });
}
function getGasPrice(_0x5edf43) {
  var _0x3c3ec0 = a0_0x3b74;
  web3[_0x3c3ec0(0x188)][_0x3c3ec0(0x165)]()[_0x3c3ec0(0x14b)]((_0x4c000b) => {
    var _0x5056fe = _0x3c3ec0;
    console[_0x5056fe(0x14f)]("gas_price:", _0x4c000b), _0x5edf43(_0x4c000b);
  });
}
async function getGasLimit(_0x1011ba, _0xe1db4e) {
  var _0x2c4af9 = a0_0x3b74;
  setValue(_0x2c4af9(0x1bb), _0x2c4af9(0x177)), showElement(_0x2c4af9(0x1bb));
  var _0x216c90 = await web3[_0x2c4af9(0x188)][_0x2c4af9(0x16f)](),
    _0x5c480b = 0x0,
    _0x472826 = 0x0,
    _0x1e3026 = 0x0,
    _0xa08eb5 = 0x0,
    _0x3b4617 = 0x14;
  console[_0x2c4af9(0x14f)](_0x216c90),
    console["log"](_0x2c4af9(0x1a7), _0x1011ba);
  for (let _0xb637e6 = 0x0; _0xb637e6 < _0x3b4617; _0xb637e6++) {
    var _0x50ec0a = await web3["eth"][_0x2c4af9(0x150)](_0x216c90 - _0xb637e6),
      _0x276ec1 = parseInt(
        _0x50ec0a[_0x2c4af9(0x170)] / _0x50ec0a[_0x2c4af9(0x155)]
      );
    console[_0x2c4af9(0x14f)]("gas_used_per_byte:" + _0x276ec1),
      (_0x1e3026 += _0x276ec1);
  }
  var _0xa08eb5 = parseInt((_0x1011ba * _0x1e3026) / _0x3b4617);
  console[_0x2c4af9(0x14f)]("average_gas_limit:" + _0xa08eb5),
    _0xe1db4e(_0xa08eb5),
    hideElement("deployStatus");
}
function getDataSize(_0x287b21, _0x1be341) {
  var _0x22c94d = a0_0x3b74;
  return parseInt(
    _0x287b21[_0x22c94d(0x172)] * 0.5 + _0x1be341[_0x22c94d(0x172)] * 0x20
  );
}
function getPrice() {
  var _0x41289a = a0_0x3b74,
    _0x1d39b6 = $(_0x41289a(0x16c))[_0x41289a(0x182)]();
  return (
    console[_0x41289a(0x14f)](_0x1d39b6 == _0x41289a(0x166)),
    _0x1d39b6 == _0x41289a(0x166)
      ? "0.01"
      : ((_0x1d39b6 = _0x1d39b6["split"]("\x20")[0x0]), _0x1d39b6)
  );
}
export async function deployContract(
  _0x3992af,
  _0x16b16e,
  _0x56c836,
  _0x3344a7,
  _0x24668b
) {
  var _0x2f669e = a0_0x3b74,
    _0x454bcf = await readTextFile(_0x3992af + _0x2f669e(0x1b7)),
    _0x161c90 = JSON[_0x2f669e(0x19b)](_0x454bcf);
  console[_0x2f669e(0x14f)](Object[_0x2f669e(0x16a)](_0x161c90)),
    console[_0x2f669e(0x14f)](_0x2f669e(0x14e), web3);
  var _0x585b12 = new web3["eth"]["Contract"](_0x161c90);
  console[_0x2f669e(0x14f)](_0x2f669e(0x1b9) + _0x585b12 + _0x2f669e(0x191));
  var _0x42434f = await readTextFile(_0x3992af + "data");
  console[_0x2f669e(0x14f)](_0x3992af + _0x2f669e(0x18d));
  var _0x42434f = JSON[_0x2f669e(0x19b)](_0x42434f)[_0x2f669e(0x17e)];
  if (typeof _0x3344a7 !== undefined && _0x3344a7 != null) {
    (_0x3344a7 = _0x3344a7[_0x2f669e(0x14c)]("0x", "")),
      (_0x42434f = _0x42434f["replaceAll"](_0x2f669e(0x15b), _0x3344a7));
    var _0x56795c = "0";
  } else var _0x56795c = getPrice();
  console[_0x2f669e(0x14f)](
    _0x2f669e(0x183) +
      _0x3344a7 +
      "\x0a\x20\x20\x0a\x20\x20\x20\x20data:\x20" +
      _0x42434f +
      "\x0a\x20\x20\x20\x20"
  ),
    console[_0x2f669e(0x14f)](_0x16b16e);
  if (_0x16b16e != []) {
    var _0x54ac6f = await getConstructor(_0x3992af + _0x2f669e(0x1b7)),
      _0x29a579 = encodeParameters(_0x54ac6f, _0x16b16e);
    console[_0x2f669e(0x14f)](_0x2f669e(0x154), _0x29a579);
  }
  try {
    var _0x21d004 = _0x585b12[_0x2f669e(0x174)]({
        data: _0x42434f,
        arguments: _0x16b16e,
      })["encodeABI"](),
      _0x373bb4 = await web3[_0x2f669e(0x188)]["estimateGas"]({
        data: _0x21d004,
        from: selectedAccount,
        value: web3[_0x2f669e(0x157)]["toHex"](
          web3["utils"][_0x2f669e(0x1c1)](_0x56795c, _0x2f669e(0x194))
        ),
      });
    console["log"](_0x2f669e(0x16e), _0x21d004),
      console[_0x2f669e(0x14f)]("gaslimit", _0x373bb4),
      getGasPrice(function (_0x51f98e) {
        var _0x3944fb = _0x2f669e;
        _0x585b12[_0x3944fb(0x174)]({ data: _0x42434f, arguments: _0x16b16e })
          [_0x3944fb(0x15c)](
            {
              from: selectedAccount,
              gas: _0x373bb4,
              gasPrice: _0x51f98e,
              value: web3["utils"][_0x3944fb(0x1c1)](
                _0x56795c,
                _0x3944fb(0x194)
              ),
            },
            function (_0x1f8b2b, _0xcaf386) {}
          )
          [_0x3944fb(0x189)]("sending", function (_0x39647c) {
            var _0x3c60d3 = _0x3944fb;
            console[_0x3c60d3(0x14f)](_0x3c60d3(0x1a8), _0x39647c);
          })
          [_0x3944fb(0x189)](_0x3944fb(0x1bd), function (_0x2a9107) {
            var _0x5d2900 = _0x3944fb;
            console[_0x5d2900(0x14f)](_0x5d2900(0x1bd), _0x2a9107),
              setValue(_0x5d2900(0x1bb), _0x5d2900(0x168)),
              showElement(_0x5d2900(0x1bb));
          })
          ["on"](_0x3944fb(0x192), function (_0x35b102) {
            var _0x4dab7e = _0x3944fb;
            _0x56c836(_0x4dab7e(0x192), _0x35b102), hideElement("deployStatus");
          })
          ["on"](_0x3944fb(0x15e), function (_0x308df5) {
            var _0x55786a = _0x3944fb;
            _0x56c836(_0x55786a(0x15e), _0x308df5);
          })
          ["on"]("receipt", function (_0x2abec4) {
            var _0x41def3 = _0x3944fb;
            console[_0x41def3(0x14f)](_0x2abec4["contractAddress"]),
              _0x56c836(_0x41def3(0x184), _0x2abec4);
          })
          ["on"]("confirmation", function (_0x182e6f, _0x2344d3) {
            var _0x285666 = _0x3944fb;
            _0x56c836(_0x285666(0x1a6), _0x182e6f);
          })
          [_0x3944fb(0x14b)](async function (_0x4a3bce) {
            var _0x581547 = _0x3944fb;
            console[_0x581547(0x14f)](_0x4a3bce[_0x581547(0x19c)]["address"]),
              _0x56c836(
                _0x581547(0x163),
                _0x4a3bce[_0x581547(0x19c)][_0x581547(0x19f)]
              ),
              setValue(_0x581547(0x1bb), _0x581547(0x1a1));
            if (!_0x3992af[_0x581547(0x17f)](_0x581547(0x186))) {
              await sleep(0x1e);
              var _0x5d3f2f = _0x4a3bce[_0x581547(0x19c)]["address"];
              console[_0x581547(0x14f)](_0x581547(0x1c4), _0x5d3f2f);
              var _0x499ce0 = await readTextFile(_0x3992af + _0x581547(0x1b8));
              if (_0x3992af[_0x581547(0x17f)]("standard"))
                var _0x175cfc = "StandardToken";
              else {
                if (_0x3992af[_0x581547(0x17f)]("safemoon"))
                  var _0x175cfc = _0x581547(0x196);
                else {
                  if (_0x3992af[_0x581547(0x17f)](_0x581547(0x199)))
                    var _0x175cfc = _0x581547(0x19e),
                      _0x1141da = ["IterableMapping"],
                      _0x46c15f = ["0x" + _0x3344a7];
                  else var _0x175cfc = _0x581547(0x178);
                }
              }
              var _0x312e40 = await readTextFile(_0x3992af + _0x581547(0x1b0)),
                _0x1c39aa = _0x29a579;
              verifyContract(
                _0x5d3f2f,
                _0x499ce0,
                _0x175cfc,
                _0x312e40,
                _0x1c39aa,
                _0x1141da,
                _0x46c15f,
                _0x24668b
              );
            }
          });
      });
  } catch (_0x517fc7) {
    console[_0x2f669e(0x14f)](_0x2f669e(0x1c8), _0x517fc7),
      _0x56c836(_0x2f669e(0x192), _0x517fc7);
  }
}
export function sleep(_0x5e2929) {
  return new Promise((_0x9af82e) => {
    setTimeout(_0x9af82e, _0x5e2929 * 0x3e8);
  });
}
export async function createToken(
  _0x33845a,
  _0x479e8c,
  _0x39dd2b,
  _0x3d272e,
  _0x54cc44
) {
  var _0x3d9653 = a0_0x3b74,
    _0x2ca87b = _0x3d9653(0x197) + _0x33845a + "/";
  await deployContract(_0x2ca87b, _0x479e8c, _0x39dd2b, _0x3d272e, _0x54cc44);
}
export async function deployLibrary(
  _0xdd1c12,
  _0xdb3893,
  _0x52a177,
  _0x3945fc
) {
  var _0x1ed1af = a0_0x3b74,
    _0x54419b = "./static/contracts/" + _0xdd1c12 + _0x1ed1af(0x186);
  await deployContract(_0x54419b, _0xdb3893, _0x52a177, null, _0x3945fc);
}
export function copyToCliBoard(_0x306b9f) {
  var _0x132559 = a0_0x3b74,
    _0x41647c = document["createElement"]("input");
  (_0x41647c["value"] = _0x306b9f),
    document["body"][_0x132559(0x18a)](_0x41647c),
    _0x41647c[_0x132559(0x1c3)](),
    document[_0x132559(0x1cc)](_0x132559(0x195)),
    document[_0x132559(0x1bf)][_0x132559(0x190)](_0x41647c),
    $(_0x132559(0x156))[_0x132559(0x167)](_0x132559(0x19a), _0x132559(0x18f)),
    $(_0x132559(0x156))["attr"](_0x132559(0x1ca), _0x132559(0x18f)),
    $("#copyTokenAddress")[_0x132559(0x17b)]("show"),
    setTimeout(() => {
      var _0x4b536b = _0x132559;
      $("#copyTokenAddress")["tooltip"]("hide"),
        $(_0x4b536b(0x156))["attr"](_0x4b536b(0x1ca), _0x4b536b(0x162)),
        $(_0x4b536b(0x156))[_0x4b536b(0x167)](_0x4b536b(0x19a), "");
    }, 0x1f4);
}
export function setValue(_0xb6f5e, _0x2791a7) {
  var _0x2b8d93 = a0_0x3b74;
  $("." + _0xb6f5e)[_0x2b8d93(0x182)](_0x2791a7);
}
export function hideElement(_0x2fbac8) {
  var _0x51b931 = a0_0x3b74;
  $("." + _0x2fbac8)["css"](_0x51b931(0x16b), _0x51b931(0x1c2));
}
export function showElement(_0x53e878) {
  var _0x289892 = a0_0x3b74;
  $("." + _0x53e878)[_0x289892(0x161)](_0x289892(0x16b), _0x289892(0x17a));
}
export function verifyContract(
  _0x5c56c7,
  _0x412d1d,
  _0x5bb02e,
  _0x23998b,
  _0x58b8a8,
  _0x337598,
  _0x22ec7b,
  _0x3f3721
) {
  var _0x4de04c = a0_0x3b74;
  _0x337598 == undefined && (_0x337598 = [""]);
  _0x22ec7b == undefined && (_0x22ec7b = [""]);
  var _0x5b96a0 = "M4JST2ZP7HWZIWF1FDD8ASEEDDS46VY1GS",
    _0x1371b9 = getApiUrl();
  $[_0x4de04c(0x15f)]({
    type: _0x4de04c(0x171),
    url: _0x1371b9,
    data: {
      apikey: _0x5b96a0,
      module: "contract",
      action: "verifysourcecode",
      contractaddress: _0x5c56c7,
      sourceCode: _0x412d1d,
      codeformat: _0x4de04c(0x1a9),
      contractname: _0x5bb02e,
      compilerversion: _0x23998b,
      optimizationUsed: 0x1,
      runs: 0xc8,
      constructorArguements: _0x58b8a8,
      evmversion: "",
      licenseType: 0x1,
      libraryname1: _0x337598[0x0],
      libraryaddress1: _0x22ec7b[0x0],
      libraryname2: "",
      libraryaddress2: "",
      libraryname3: "",
      libraryaddress3: "",
      libraryname4: "",
      libraryaddress4: "",
      libraryname5: "",
      libraryaddress5: "",
      libraryname6: "",
      libraryaddress6: "",
      libraryname7: "",
      libraryaddress7: "",
      libraryname8: "",
      libraryaddress8: "",
      libraryname9: "",
      libraryaddress9: "",
      libraryname10: "",
      libraryaddress10: "",
    },
    success: function (_0x32e472) {
      var _0x10b41a = _0x4de04c;
      console["log"](_0x32e472),
        _0x32e472[_0x10b41a(0x15a)] == "1"
          ? console["log"](
              _0x32e472[_0x10b41a(0x15a)] +
                ";" +
                _0x32e472[_0x10b41a(0x14d)] +
                ";" +
                _0x32e472["result"]
            )
          : console[_0x10b41a(0x14f)](
              _0x32e472[_0x10b41a(0x15a)] +
                ";" +
                _0x32e472["message"] +
                ";" +
                _0x32e472[_0x10b41a(0x1b1)]
            ),
        console["log"](_0x10b41a(0x173) + _0x32e472[_0x10b41a(0x15a)]),
        console[_0x10b41a(0x14f)](
          "result\x20:\x20" + _0x32e472[_0x10b41a(0x1b1)]
        ),
        _0x3f3721 != null &&
          _0x3f3721 != undefined &&
          _0x3f3721(_0x5c56c7, _0x32e472);
    },
    error: function (_0x33e7ac) {
      var _0x312d40 = _0x4de04c;
      console[_0x312d40(0x14f)](_0x312d40(0x1a4)),
        console["log"](_0x312d40(0x1bc)),
        console[_0x312d40(0x14f)](_0x33e7ac),
        _0x3f3721 != null &&
          _0x3f3721 != undefined &&
          _0x3f3721(_0x5c56c7, _0x33e7ac);
    },
  });
}
function getApiUrl() {
  var _0x59c5b3 = a0_0x3b74;
  if (getNetwork() == 0x0) {
    var _0x6111f9 = "https://api.bscscan.com/api";
    return _0x6111f9;
  } else {
    if (getNetwork() == 0x1) {
      var _0x6111f9 = _0x59c5b3(0x1b6);
      return _0x6111f9;
    }
  }
}
export function checkVerifyStatus(_0x2f4f09) {
  var _0x32b12a = a0_0x3b74,
    _0xfae064 = _0x32b12a(0x18e),
    _0xa3ba3e = getApiUrl();
  $[_0x32b12a(0x15f)]({
    type: _0x32b12a(0x159),
    url: _0xa3ba3e,
    data: {
      apikey: _0xfae064,
      guid: _0x2f4f09,
      module: _0x32b12a(0x1ae),
      action: _0x32b12a(0x16d),
    },
    success: function (_0x1a6547) {
      var _0x41d514 = _0x32b12a;
      console["log"](_0x41d514(0x173) + _0x1a6547[_0x41d514(0x15a)]),
        console[_0x41d514(0x14f)](
          _0x41d514(0x152) + _0x1a6547[_0x41d514(0x14d)]
        ),
        console[_0x41d514(0x14f)](
          _0x41d514(0x169) + _0x1a6547[_0x41d514(0x1b1)]
        );
    },
    error: function (_0x59a815) {
      var _0x3d17a5 = _0x32b12a;
      alert(_0x3d17a5(0x192));
    },
  });
}
function a0_0x3b74(_0x46d19d, _0x3192d8) {
  var _0x46af3b = a0_0x46af();
  return (
    (a0_0x3b74 = function (_0x3b743e, _0x46d937) {
      _0x3b743e = _0x3b743e - 0x14b;
      var _0xb53dab = _0x46af3b[_0x3b743e];
      return _0xb53dab;
    }),
    a0_0x3b74(_0x46d19d, _0x3192d8)
  );
}
export function encodeParameters(_0x46cf33, _0x13e3fa) {
  var _0x4dc8b8 = a0_0x3b74;
  return web3[_0x4dc8b8(0x188)]["abi"]
    [_0x4dc8b8(0x1be)](_0x46cf33, _0x13e3fa)
    [_0x4dc8b8(0x14c)]("0x", "");
}
export async function getConstructor(_0x21f677) {
  var _0x24ab8d = a0_0x3b74,
    _0x25a9a4 = JSON[_0x24ab8d(0x19b)](await readTextFile(_0x21f677));
  console[_0x24ab8d(0x14f)](_0x25a9a4);
  var _0x55f923 = _0x25a9a4[0x0],
    _0x845005 = _0x55f923[_0x24ab8d(0x18b)],
    _0x36cc97 = [];
  for (
    let _0x4ce110 = 0x0;
    _0x4ce110 < _0x845005[_0x24ab8d(0x172)];
    _0x4ce110++
  ) {
    var _0x5aa7a1 = _0x845005[_0x4ce110]["internalType"];
    _0x36cc97[_0x24ab8d(0x1b3)](_0x5aa7a1);
  }
  return console[_0x24ab8d(0x14f)](_0x36cc97), _0x36cc97;
}
export function getNetwork() {
  var _0x15997c = a0_0x3b74;
  return $(_0x15997c(0x15d))[0x0][_0x15997c(0x1cb)];
}
export function getDeviceType() {
  var _0x57f295 = a0_0x3b74;
  const _0x3b4193 = navigator[_0x57f295(0x160)];
  if (
    /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i[_0x57f295(0x179)](
      _0x3b4193
    )
  )
    return "tablet";
  else {
    if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/[
        _0x57f295(0x179)
      ](_0x3b4193)
    )
      return "mobile";
  }
  return _0x57f295(0x1ab);
}
function setTokenInfo(_0x3e4287, _0x251db1) {
  var _0x3b2481 = a0_0x3b74;
  $(_0x3b2481(0x158))[_0x3b2481(0x182)](_0x3e4287),
    $(_0x3b2481(0x17c))[_0x3b2481(0x182)](_0x251db1);
}
export function showPriceDialog(_0x21e4a5, _0x31928e) {
  var _0x3e7ce4 = a0_0x3b74;
  setTokenInfo(_0x21e4a5, _0x31928e),
    $(_0x3e7ce4(0x17d))[_0x3e7ce4(0x1a5)](_0x3e7ce4(0x187));
}
function a0_0x46af() {
  var _0x590e76 = [
    "#price",
    "checkverifystatus",
    "bytecodeWithEncodedParameters",
    "getBlockNumber",
    "gasUsed",
    "POST",
    "length",
    "status\x20:\x20",
    "deploy",
    "90RmcxPA",
    "5935897idnbXl",
    "Estimate\x20gas\x20limit...",
    "StandardToken",
    "test",
    "block",
    "tooltip",
    "#modalBody",
    "#tokenIntroDialog",
    "object",
    "includes",
    "responseText",
    "241402QsnijK",
    "text",
    "\x0a\x20\x20\x20\x20library_address:\x20",
    "receipt",
    "Meme\x20Coin",
    "/lib.",
    "show",
    "eth",
    "once",
    "appendChild",
    "inputs",
    "compile",
    "data",
    "M4JST2ZP7HWZIWF1FDD8ASEEDDS46VY1GS",
    "Copied!",
    "removeChild",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "error",
    "click",
    "ether",
    "copy",
    "SafeToken",
    "./static/contracts/",
    "11932DuHaqI",
    "reward",
    "data-bs-original-title",
    "parse",
    "options",
    "3KOHlGP",
    "RewardToken",
    "address",
    "#closeDialog",
    "Verify\x20contract...",
    "onreadystatechange",
    "onload",
    "error!",
    "modal",
    "confirmation",
    "data_size",
    "sending",
    "solidity-single-file",
    "251973PHTHbL",
    "desktop",
    "onerror",
    "#btnDialog",
    "contract",
    "_blank",
    "compiler",
    "result",
    "loadVersion",
    "push",
    "statusText",
    "377585WEbcNo",
    "https://api-testnet.bscscan.com/api",
    "abi",
    "sol",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20new\x20contract:\x0a\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "2075128VaorjJ",
    "deployStatus",
    "Unexpected\x20Error",
    "sent",
    "encodeParameters",
    "body",
    "381482PLGDuS",
    "toWei",
    "none",
    "select",
    "contract_addresscontract_address",
    "845cBLozQ",
    "open",
    "hide",
    "try\x20estimate\x20gas\x20limit",
    "stringify",
    "title",
    "value",
    "execCommand",
    "then",
    "replace",
    "message",
    "web3\x20object",
    "log",
    "getBlock",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20---result---\x0a\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "message\x20:\x20",
    "\x0a\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "encoded_constructor",
    "size",
    "#copyTokenAddress",
    "utils",
    "#modalLabel",
    "GET",
    "status",
    "__$13356894708e8712e57b8854de619104de$__",
    "send",
    ".network\x20option:selected",
    "transactionHash",
    "ajax",
    "userAgent",
    "css",
    "Copy\x20to\x20clipboard",
    "done",
    "10hRsWeC",
    "getGasPrice",
    "FREE",
    "attr",
    "Deploy\x20contract...",
    "result\x20:\x20",
    "values",
    "display",
  ];
  a0_0x46af = function () {
    return _0x590e76;
  };
  return a0_0x46af();
}
$(a0_0x4ff743(0x1ad))["on"](a0_0x4ff743(0x193), function () {
  var _0x7c370e = a0_0x4ff743;
  setTokenInfo(_0x7c370e(0x185), "5"),
    $(_0x7c370e(0x17d))[_0x7c370e(0x1a5)](_0x7c370e(0x187));
}),
  $(a0_0x4ff743(0x1a0))["on"](a0_0x4ff743(0x193), function () {
    var _0x301dc1 = a0_0x4ff743;
    $(_0x301dc1(0x17d))[_0x301dc1(0x1a5)](_0x301dc1(0x1c7));
  }),
  $("#contactDev")["on"]("click", function () {
    var _0x272137 = a0_0x4ff743;
    $(_0x272137(0x17d))[_0x272137(0x1a5)]("hide"),
      window["open"]("https://t.me/TokenGeneratorBSC", _0x272137(0x1af));
  });
