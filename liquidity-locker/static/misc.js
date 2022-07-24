var a0_0x456a9d = a0_0x14e4;
(function (_0x412937, _0x13be2a) {
  var _0xa970cb = a0_0x14e4,
    _0x80125e = _0x412937();
  while (!![]) {
    try {
      var _0x151484 =
        parseInt(_0xa970cb(0x1dd)) / 0x1 +
        -parseInt(_0xa970cb(0x1ee)) / 0x2 +
        parseInt(_0xa970cb(0x1d1)) / 0x3 +
        parseInt(_0xa970cb(0x1c2)) / 0x4 +
        (-parseInt(_0xa970cb(0x1c6)) / 0x5) *
          (-parseInt(_0xa970cb(0x227)) / 0x6) +
        parseInt(_0xa970cb(0x1ae)) / 0x7 +
        -parseInt(_0xa970cb(0x1db)) / 0x8;
      if (_0x151484 === _0x13be2a) break;
      else _0x80125e["push"](_0x80125e["shift"]());
    } catch (_0x19dd73) {
      _0x80125e["push"](_0x80125e["shift"]());
    }
  }
})(a0_0x5b40, 0xde613);
export function solcCompiler(_0x2797ea) {
  var _0x4df24b = a0_0x14e4;
  BrowserSolc[_0x4df24b(0x1c8)](
    "soljson-v0.4.26+commit.4563c3fc.js",
    function (_0x544fa6) {
      var _0xd9493c = _0x4df24b,
        _0x2d4b20 = _0x2d4b20,
        _0x16d549 = 0x1,
        _0x231ecc = _0x544fa6[_0xd9493c(0x1cc)](_0x2d4b20, _0x16d549);
      console[_0xd9493c(0x20f)](
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20---result---\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
          JSON["stringify"](_0x544fa6) +
          _0xd9493c(0x1c5) +
          JSON[_0xd9493c(0x1e9)](_0x231ecc) +
          "\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20"
      );
    }
  ),
    BrowserSolc[_0x4df24b(0x1a9)](function (_0x742786, _0x2c61f0) {
      var _0x28cc4a = _0x4df24b;
      console["log"](_0x742786), console[_0x28cc4a(0x20f)](_0x2c61f0);
    });
}
function readTextFile_old(_0x47c9ae, _0x4271b2) {
  var _0x556634 = a0_0x14e4,
    _0x44cfa8 = new XMLHttpRequest();
  _0x44cfa8[_0x556634(0x20e)]("GET", _0x47c9ae, ![]),
    (_0x44cfa8[_0x556634(0x213)] = function () {
      var _0x38e8aa = _0x556634;
      if (_0x44cfa8["readyState"] === 0x4) {
        if (
          _0x44cfa8[_0x38e8aa(0x19d)] === 0xc8 ||
          _0x44cfa8[_0x38e8aa(0x19d)] == 0x0
        ) {
          var _0x5e4566 = _0x44cfa8[_0x38e8aa(0x1be)];
          _0x4271b2(_0x5e4566);
        }
      }
    }),
    _0x44cfa8[_0x556634(0x236)](null);
}
export async function readTextFile(_0x2d282f) {
  var _0x39b723 = a0_0x14e4;
  return (await makeRequest("GET", _0x2d282f))[_0x39b723(0x17d)];
}
function makeRequest(_0x451a7b, _0x1c8112) {
  return new Promise(function (_0x841bce, _0x2f4cc3) {
    var _0x44ad40 = a0_0x14e4;
    let _0x42f6a0 = new XMLHttpRequest();
    _0x42f6a0[_0x44ad40(0x20e)](_0x451a7b, _0x1c8112),
      (_0x42f6a0[_0x44ad40(0x1e2)] = function () {
        var _0x204131 = _0x44ad40;
        this["status"] >= 0xc8 && this[_0x204131(0x19d)] < 0x12c
          ? _0x841bce({
              status: this[_0x204131(0x19d)],
              statusText: _0x42f6a0[_0x204131(0x198)],
            })
          : _0x2f4cc3({
              status: this[_0x204131(0x19d)],
              statusText: _0x42f6a0["statusText"],
            });
      }),
      (_0x42f6a0["onerror"] = function () {
        var _0x569ce8 = _0x44ad40;
        _0x2f4cc3({
          status: this["status"],
          statusText: _0x42f6a0[_0x569ce8(0x17d)],
        });
      }),
      _0x42f6a0["send"]();
  });
}
function getGasPrice(_0x2d9eba) {
  web3["eth"]["getGasPrice"]()["then"]((_0x2775a7) => {
    var _0x568cc1 = a0_0x14e4;
    console[_0x568cc1(0x20f)](_0x568cc1(0x229), _0x2775a7),
      _0x2d9eba(_0x2775a7);
  });
}
async function getGasLimit(_0x464abe, _0x2d29bb) {
  var _0x59cf6e = a0_0x14e4;
  setValue(_0x59cf6e(0x1c9), "Estimate\x20gas\x20limit..."),
    showElement("deployStatus");
  var _0x15357d = await web3["eth"][_0x59cf6e(0x17e)](),
    _0x3d2b1d = 0x0,
    _0x522fa4 = 0x0,
    _0x3d0b45 = 0x0,
    _0x45249b = 0x0,
    _0x133ffd = 0x14;
  console[_0x59cf6e(0x20f)](_0x15357d),
    console[_0x59cf6e(0x20f)]("data_size", _0x464abe);
  for (let _0x4975ae = 0x0; _0x4975ae < _0x133ffd; _0x4975ae++) {
    var _0x42e74b = await web3[_0x59cf6e(0x1ec)][_0x59cf6e(0x1e1)](
        _0x15357d - _0x4975ae
      ),
      _0x76cef9 = parseInt(
        _0x42e74b[_0x59cf6e(0x216)] / _0x42e74b[_0x59cf6e(0x1bb)]
      );
    console["log"](_0x59cf6e(0x18a) + _0x76cef9), (_0x3d0b45 += _0x76cef9);
  }
  var _0x45249b = parseInt((_0x464abe * _0x3d0b45) / _0x133ffd);
  console[_0x59cf6e(0x20f)](_0x59cf6e(0x1e6) + _0x45249b),
    _0x2d29bb(_0x45249b),
    hideElement(_0x59cf6e(0x1c9));
}
function getDataSize(_0x1c9894, _0x1c30ab) {
  var _0x2e40d1 = a0_0x14e4;
  return parseInt(
    _0x1c9894[_0x2e40d1(0x1de)] * 0.5 + _0x1c30ab[_0x2e40d1(0x1de)] * 0x20
  );
}
function getPrice() {
  var _0x15aac8 = a0_0x14e4,
    _0x3208cc = $(_0x15aac8(0x1f9))[_0x15aac8(0x1b3)]();
  return (
    console[_0x15aac8(0x20f)](_0x3208cc == _0x15aac8(0x17a)),
    _0x3208cc == _0x15aac8(0x17a)
      ? "0"
      : ((_0x3208cc = _0x3208cc[_0x15aac8(0x217)]("\x20")[0x0]), _0x3208cc)
  );
}
export async function deployContract(
  _0x317d62,
  _0x2dbc44,
  _0x3e7124,
  _0x4aedfc,
  _0x42546e
) {
  var _0x1a37b4 = a0_0x14e4,
    _0x421efe = await readTextFile(_0x317d62 + _0x1a37b4(0x1da)),
    _0x1a77e5 = JSON[_0x1a37b4(0x204)](_0x421efe);
  console["log"](Object[_0x1a37b4(0x1d6)](_0x1a77e5)),
    console[_0x1a37b4(0x20f)](_0x1a37b4(0x22d), web3);
  var _0x1ee0dc = new web3[_0x1a37b4(0x1ec)][_0x1a37b4(0x189)](_0x1a77e5);
  console["log"](_0x1a37b4(0x23b) + _0x1ee0dc + _0x1a37b4(0x1c5));
  var _0x4a99ef = await readTextFile(_0x317d62 + "data");
  console[_0x1a37b4(0x20f)](_0x317d62 + "data");
  var _0x4a99ef = JSON[_0x1a37b4(0x204)](_0x4a99ef)[_0x1a37b4(0x1d9)];
  if (typeof _0x4aedfc !== undefined && _0x4aedfc != null) {
    (_0x4aedfc = _0x4aedfc[_0x1a37b4(0x1e8)]("0x", "")),
      (_0x4a99ef = _0x4a99ef[_0x1a37b4(0x1dc)](_0x1a37b4(0x230), _0x4aedfc));
    var _0x4d16e7 = "0";
  } else var _0x4d16e7 = getPrice();
  console[_0x1a37b4(0x20f)](
    "\x0a\x20\x20library_address:\x20" +
      _0x4aedfc +
      _0x1a37b4(0x1bc) +
      _0x4a99ef +
      _0x1a37b4(0x183)
  ),
    console[_0x1a37b4(0x20f)](_0x2dbc44);
  if (_0x2dbc44 != []) {
    var _0x3c1721 = await getConstructor(_0x317d62 + "abi"),
      _0x19a222 = encodeParameters(_0x3c1721, _0x2dbc44);
    console[_0x1a37b4(0x20f)]("encoded_constructor", _0x19a222);
  }
  try {
    var _0x34c4a2 = _0x1ee0dc[_0x1a37b4(0x1f4)]({
        data: _0x4a99ef,
        arguments: _0x2dbc44,
      })[_0x1a37b4(0x241)](),
      _0x50aa0b = await web3["eth"][_0x1a37b4(0x22b)]({
        data: _0x34c4a2,
        from: selectedAccount,
        value: web3[_0x1a37b4(0x202)][_0x1a37b4(0x1cd)](
          web3["utils"]["toWei"](_0x4d16e7, _0x1a37b4(0x1d5))
        ),
      });
    console["log"](_0x1a37b4(0x19c), _0x34c4a2),
      console[_0x1a37b4(0x20f)](_0x1a37b4(0x20c), _0x50aa0b),
      getGasPrice(function (_0x3f04b9) {
        var _0x3ae75c = _0x1a37b4;
        _0x1ee0dc[_0x3ae75c(0x1f4)]({ data: _0x4a99ef, arguments: _0x2dbc44 })
          [_0x3ae75c(0x236)](
            {
              from: selectedAccount,
              gas: _0x50aa0b,
              gasPrice: _0x3f04b9,
              value: web3[_0x3ae75c(0x202)][_0x3ae75c(0x21c)](
                _0x4d16e7,
                _0x3ae75c(0x1d5)
              ),
            },
            function (_0xdd271e, _0x4f4451) {}
          )
          ["once"](_0x3ae75c(0x242), function (_0x145b02) {
            var _0x485182 = _0x3ae75c;
            console[_0x485182(0x20f)](_0x485182(0x242), _0x145b02);
          })
          [_0x3ae75c(0x1fe)](_0x3ae75c(0x200), function (_0x18ffaf) {
            var _0x3e1b54 = _0x3ae75c;
            console[_0x3e1b54(0x20f)]("sent", _0x18ffaf),
              setValue(_0x3e1b54(0x1c9), _0x3e1b54(0x231)),
              showElement("deployStatus");
          })
          ["on"]("error", function (_0x7e0f72) {
            var _0xb4969a = _0x3ae75c;
            _0x3e7124(_0xb4969a(0x18e), _0x7e0f72), hideElement("deployStatus");
          })
          ["on"](_0x3ae75c(0x185), function (_0x3296d2) {
            _0x3e7124("transactionHash", _0x3296d2);
          })
          ["on"](_0x3ae75c(0x18b), function (_0x291685) {
            var _0x4f8f8a = _0x3ae75c;
            console[_0x4f8f8a(0x20f)](_0x291685[_0x4f8f8a(0x1d4)]),
              _0x3e7124(_0x4f8f8a(0x18b), _0x291685);
          })
          ["on"](_0x3ae75c(0x22e), function (_0x31b69a, _0x4f2dfb) {
            var _0x37be3d = _0x3ae75c;
            _0x3e7124(_0x37be3d(0x22e), _0x31b69a);
          })
          ["then"](async function (_0x3ec8bc) {
            var _0x52911f = _0x3ae75c;
            console["log"](_0x3ec8bc[_0x52911f(0x181)][_0x52911f(0x1f6)]),
              _0x3e7124(
                _0x52911f(0x1b4),
                _0x3ec8bc[_0x52911f(0x181)]["address"]
              ),
              setValue(_0x52911f(0x1c9), _0x52911f(0x225));
            if (!_0x317d62[_0x52911f(0x219)]("/lib.")) {
              await sleep(0x1e);
              var _0x460aa2 = _0x3ec8bc[_0x52911f(0x181)][_0x52911f(0x1f6)];
              console[_0x52911f(0x20f)](_0x52911f(0x1e5), _0x460aa2);
              var _0x2373a6 = await readTextFile(_0x317d62 + "sol");
              if (_0x317d62[_0x52911f(0x219)]("standard"))
                var _0x2d66bf = _0x52911f(0x179);
              else {
                if (_0x317d62[_0x52911f(0x219)](_0x52911f(0x1b6)))
                  var _0x2d66bf = _0x52911f(0x1ce);
                else {
                  if (_0x317d62["includes"]("reward"))
                    var _0x2d66bf = _0x52911f(0x1a8),
                      _0x33ec77 = [_0x52911f(0x1d0)],
                      _0xa41bf5 = ["0x" + _0x4aedfc];
                  else var _0x2d66bf = _0x52911f(0x179);
                }
              }
              var _0xb551aa = await readTextFile(_0x317d62 + _0x52911f(0x233)),
                _0x1b9b8f = _0x19a222;
              verifyContract(
                _0x460aa2,
                _0x2373a6,
                _0x2d66bf,
                _0xb551aa,
                _0x1b9b8f,
                _0x33ec77,
                _0xa41bf5,
                _0x42546e
              );
            }
          });
      });
  } catch (_0x18f915) {
    console[_0x1a37b4(0x20f)](_0x1a37b4(0x1d3), _0x18f915),
      _0x3e7124("error", _0x18f915);
  }
}
export function sleep(_0x307c74) {
  return new Promise((_0x67a61b) => {
    setTimeout(_0x67a61b, _0x307c74 * 0x3e8);
  });
}
export async function createToken(
  _0x2d980b,
  _0x2e25f9,
  _0x29a5c5,
  _0x218155,
  _0x183988
) {
  var _0x5d0fac = a0_0x14e4,
    _0x96daf3 = _0x5d0fac(0x18c) + _0x2d980b + "/";
  await deployContract(_0x96daf3, _0x2e25f9, _0x29a5c5, _0x218155, _0x183988);
}
export async function deployLibrary(
  _0x2c5076,
  _0x15b190,
  _0x1c33f4,
  _0x266a99
) {
  var _0x11b279 = a0_0x14e4,
    _0x568a07 = _0x11b279(0x18c) + _0x2c5076 + _0x11b279(0x1d8);
  await deployContract(_0x568a07, _0x15b190, _0x1c33f4, null, _0x266a99);
}
export function copyToCliBoard(_0x19806a) {
  var _0x14b6fd = a0_0x14e4,
    _0x52974e = document["createElement"]("input");
  (_0x52974e[_0x14b6fd(0x19b)] = _0x19806a),
    document["body"][_0x14b6fd(0x209)](_0x52974e),
    _0x52974e[_0x14b6fd(0x1a5)](),
    document["execCommand"]("copy"),
    document[_0x14b6fd(0x1a3)]["removeChild"](_0x52974e),
    $(_0x14b6fd(0x187))[_0x14b6fd(0x1a7)](
      "data-bs-original-title",
      _0x14b6fd(0x1f2)
    ),
    $(_0x14b6fd(0x187))[_0x14b6fd(0x1a7)](_0x14b6fd(0x1e3), "Copied!"),
    $("#copyTokenAddress")[_0x14b6fd(0x1eb)](_0x14b6fd(0x20b)),
    setTimeout(() => {
      var _0x51c754 = _0x14b6fd;
      $("#copyTokenAddress")["tooltip"](_0x51c754(0x1e4)),
        $(_0x51c754(0x187))[_0x51c754(0x1a7)](
          _0x51c754(0x1e3),
          _0x51c754(0x1bd)
        ),
        $("#copyTokenAddress")[_0x51c754(0x1a7)](_0x51c754(0x23a), "");
    }, 0x1f4);
}
export function setValue(_0x3ab8c8, _0x114e84) {
  $("." + _0x3ab8c8)["text"](_0x114e84);
}
export function hideElement(_0x4a2904) {
  var _0x2aa41a = a0_0x14e4;
  $("." + _0x4a2904)["css"](_0x2aa41a(0x1b5), _0x2aa41a(0x1fb));
}
export function showElement(_0x554046) {
  var _0x48073e = a0_0x14e4;
  $("." + _0x554046)[_0x48073e(0x1df)]("display", _0x48073e(0x177));
}
export function verifyContract(
  _0x418ade,
  _0x5308b3,
  _0x282159,
  _0x42a558,
  _0x246a23,
  _0x150977,
  _0x4978b6,
  _0x501a0d
) {
  var _0x491e32 = a0_0x14e4;
  _0x150977 == undefined && (_0x150977 = [""]);
  _0x4978b6 == undefined && (_0x4978b6 = [""]);
  var _0x259b2e = _0x491e32(0x19a),
    _0x57a373 = getApiUrl();
  $[_0x491e32(0x1aa)]({
    type: _0x491e32(0x235),
    url: _0x57a373,
    data: {
      apikey: _0x259b2e,
      module: "contract",
      action: _0x491e32(0x240),
      contractaddress: _0x418ade,
      sourceCode: _0x5308b3,
      codeformat: _0x491e32(0x22f),
      contractname: _0x282159,
      compilerversion: _0x42a558,
      optimizationUsed: 0x1,
      runs: 0xc8,
      constructorArguements: _0x246a23,
      evmversion: "",
      licenseType: 0x1,
      libraryname1: _0x150977[0x0],
      libraryaddress1: _0x4978b6[0x0],
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
    success: function (_0x4e0dfc) {
      var _0x579cc3 = _0x491e32;
      console["log"](_0x4e0dfc),
        _0x4e0dfc[_0x579cc3(0x19d)] == "1"
          ? console[_0x579cc3(0x20f)](
              _0x4e0dfc[_0x579cc3(0x19d)] +
                ";" +
                _0x4e0dfc[_0x579cc3(0x220)] +
                ";" +
                _0x4e0dfc[_0x579cc3(0x1f5)]
            )
          : console[_0x579cc3(0x20f)](
              _0x4e0dfc[_0x579cc3(0x19d)] +
                ";" +
                _0x4e0dfc[_0x579cc3(0x220)] +
                ";" +
                _0x4e0dfc[_0x579cc3(0x1f5)]
            ),
        console[_0x579cc3(0x20f)](
          _0x579cc3(0x234) + _0x4e0dfc[_0x579cc3(0x19d)]
        ),
        console[_0x579cc3(0x20f)](
          _0x579cc3(0x19e) + _0x4e0dfc[_0x579cc3(0x1f5)]
        ),
        _0x501a0d != null &&
          _0x501a0d != undefined &&
          _0x501a0d(_0x418ade, _0x4e0dfc);
    },
    error: function (_0x30b7e1) {
      var _0xfdd531 = _0x491e32;
      console["log"](_0xfdd531(0x1cb)),
        console["log"](_0xfdd531(0x188)),
        console["log"](_0x30b7e1),
        _0x501a0d != null &&
          _0x501a0d != undefined &&
          _0x501a0d(_0x418ade, _0x30b7e1);
    },
  });
}
function getApiUrl() {
  var _0x5701d4 = a0_0x14e4;
  if (getNetwork() == 0x0) {
    var _0x314601 = _0x5701d4(0x1d2);
    return _0x314601;
  } else {
    if (getNetwork() == 0x1) {
      var _0x314601 = _0x5701d4(0x23e);
      return _0x314601;
    }
  }
}
function a0_0x5b40() {
  var _0x467ef0 = [
    "\x20day,\x20",
    "response",
    ".min_amount",
    "M4JST2ZP7HWZIWF1FDD8ASEEDDS46VY1GS",
    "value",
    "bytecodeWithEncodedParameters",
    "status",
    "result\x20:\x20",
    ".network\x20option:selected",
    "approve",
    "test",
    "\x20minutes,\x20",
    "body",
    "inputs",
    "select",
    "Meme\x20Coin",
    "attr",
    "RewardToken",
    "getVersions",
    "ajax",
    "/abi",
    "Amount\x20can\x27t\x20be\x200",
    "#lp_token_address",
    "10509373QlQkdA",
    "Total\x20airdrop\x20exceeds\x20token\x20balance",
    "prop",
    "encodeParameters",
    "random",
    "text",
    "done",
    "display",
    "safemoon",
    "#btnDialog",
    "Amount\x20can\x27t\x20be\x20empty",
    "methods",
    "\x20minute,\x20",
    "size",
    "\x0a\x0a\x20\x20data:\x20",
    "Copy\x20to\x20clipboard",
    "responseText",
    "You\x20need\x20to\x20enter\x20token\x20LP\x20address\x20!",
    "&locker=",
    "#lp_token_address_to_unlock",
    "7117900yDHyiX",
    "message\x20:\x20",
    "execute",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "9045475INcsPd",
    "internalType",
    "loadVersion",
    "deployStatus",
    "returnValues",
    "error!",
    "compile",
    "toHex",
    "SafeToken",
    "div",
    "IterableMapping",
    "3842553JdIXCS",
    "https://api.bscscan.com/api",
    "try\x20estimate\x20gas\x20limit",
    "contractAddress",
    "ether",
    "values",
    "click",
    "/lib.",
    "object",
    "abi",
    "37236176nwNHKx",
    "replaceAll",
    "436979snKdYc",
    "length",
    "css",
    "BatchRequest",
    "getBlock",
    "onload",
    "title",
    "hide",
    "contract_addresscontract_address",
    "average_gas_limit:",
    "./static/contracts/airdrop/abi",
    "replace",
    "stringify",
    "canWithdraw",
    "tooltip",
    "eth",
    "#tokenIntroDialog",
    "2484700GOmAmU",
    "floor",
    "#lp_token_amount",
    "events",
    "Copied!",
    "Not\x20valid\x20data",
    "deploy",
    "result",
    "address",
    ".days",
    "115792089237316195423570985008687907853269984665640564039457584007913129639935",
    "#price",
    "update\x20clock",
    "none",
    "mul",
    ".max_amount",
    "once",
    "locker",
    "sent",
    "days",
    "utils",
    "lockerAddress",
    "parse",
    "./static/contracts/standard/abi",
    "push",
    "airdrop",
    "#10_percent",
    "appendChild",
    "total",
    "show",
    "gaslimit",
    "#lock_liquidity",
    "open",
    "log",
    "then",
    "name",
    "getLockerAddress",
    "onreadystatechange",
    "balanceOf",
    "getElementById",
    "gasUsed",
    "split",
    "mobile",
    "includes",
    "val",
    "timeLeft",
    "toWei",
    "_self",
    "modal",
    "0x4F81365D5a1d8D38869bDe1Ab3046acB4FF3940B",
    "message",
    "standard",
    "GET",
    ".wallets",
    "hours",
    "Verify\x20contract...",
    "#modalLabel",
    "6JqUJsM",
    "call",
    "gas_price:",
    "disabled",
    "estimateGas",
    "success/?lp=",
    "web3\x20object",
    "confirmation",
    "solidity-single-file",
    "__$13356894708e8712e57b8854de619104de$__",
    "Deploy\x20contract...",
    "newLockerAddress:\x20",
    "compiler",
    "status\x20:\x20",
    "POST",
    "send",
    "slice",
    "seconds",
    "0x0339bFB95f060a9222Dde05613211c31c9653B2E",
    "data-bs-original-title",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20new\x20contract:\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "querySelector",
    "desktop",
    "https://api-testnet.bscscan.com/api",
    "minutes",
    "verifysourcecode",
    "encodeABI",
    "sending",
    "toBN",
    "\x20hour,\x20",
    "0x60fE5dE2d5ac048C14c24d0A9f2dD337A5876b48",
    "#locking_duration",
    "block",
    "add",
    "StandardToken",
    "FREE",
    ".amounts",
    "decimals",
    "statusText",
    "getBlockNumber",
    "LP\x20Token\x20Address\x20is\x20not\x20valid.\x20Enter\x20LP\x20Token\x20Address\x20instead\x20of\x20Token\x20Address.",
    "deployLocker",
    "options",
    "innerHTML",
    "\x0a\x20\x20",
    "https://t.me/MoonDeploy",
    "transactionHash",
    "userAgent",
    "#copyTokenAddress",
    "Unexpected\x20Error",
    "Contract",
    "gas_used_per_byte:",
    "receipt",
    "./static/contracts/",
    "#modalBody",
    "error",
    ".seconds",
    ".minutes",
    ".hours",
    "sub",
    "_blank",
    "#50_percent",
    "LiquidityLocked",
    "Your\x20liquidity\x20is\x20still\x20locked,\x20wait\x20for\x20",
  ];
  a0_0x5b40 = function () {
    return _0x467ef0;
  };
  return a0_0x5b40();
}
export function checkVerifyStatus(_0x4df719) {
  var _0x21153d = a0_0x14e4,
    _0x744eb1 = _0x21153d(0x19a),
    _0x163756 = getApiUrl();
  $[_0x21153d(0x1aa)]({
    type: _0x21153d(0x222),
    url: _0x163756,
    data: {
      apikey: _0x744eb1,
      guid: _0x4df719,
      module: "contract",
      action: "checkverifystatus",
    },
    success: function (_0x47e0d3) {
      var _0x366105 = _0x21153d;
      console[_0x366105(0x20f)](_0x366105(0x234) + _0x47e0d3[_0x366105(0x19d)]),
        console["log"](_0x366105(0x1c3) + _0x47e0d3[_0x366105(0x220)]),
        console[_0x366105(0x20f)](
          _0x366105(0x19e) + _0x47e0d3[_0x366105(0x1f5)]
        );
    },
    error: function (_0x418048) {
      var _0x3f3c48 = _0x21153d;
      alert(_0x3f3c48(0x18e));
    },
  });
}
export function encodeParameters(_0x58ab42, _0x20e9d4) {
  var _0x180b19 = a0_0x14e4;
  return web3[_0x180b19(0x1ec)][_0x180b19(0x1da)]
    [_0x180b19(0x1b1)](_0x58ab42, _0x20e9d4)
    [_0x180b19(0x1e8)]("0x", "");
}
export async function getConstructor(_0x1eb7b3) {
  var _0x33a685 = a0_0x14e4,
    _0x23bf8b = JSON[_0x33a685(0x204)](await readTextFile(_0x1eb7b3));
  console[_0x33a685(0x20f)](_0x23bf8b);
  var _0x318d40 = _0x23bf8b[0x0],
    _0x3212f5 = _0x318d40[_0x33a685(0x1a4)],
    _0x7d7099 = [];
  for (
    let _0x2714ea = 0x0;
    _0x2714ea < _0x3212f5[_0x33a685(0x1de)];
    _0x2714ea++
  ) {
    var _0x1bb6b8 = _0x3212f5[_0x2714ea][_0x33a685(0x1c7)];
    _0x7d7099[_0x33a685(0x206)](_0x1bb6b8);
  }
  return console["log"](_0x7d7099), _0x7d7099;
}
function a0_0x14e4(_0x3502bb, _0x24413b) {
  var _0x5b4013 = a0_0x5b40();
  return (
    (a0_0x14e4 = function (_0x14e49e, _0x11fe2c) {
      _0x14e49e = _0x14e49e - 0x177;
      var _0x283fe1 = _0x5b4013[_0x14e49e];
      return _0x283fe1;
    }),
    a0_0x14e4(_0x3502bb, _0x24413b)
  );
}
export function getNetwork() {
  var _0x2019d2 = a0_0x14e4;
  return $(_0x2019d2(0x19f))[0x0][_0x2019d2(0x19b)];
}
export function getDeviceType() {
  var _0x10c2f0 = a0_0x14e4;
  const _0x3f287f = navigator[_0x10c2f0(0x186)];
  if (
    /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i[_0x10c2f0(0x1a1)](
      _0x3f287f
    )
  )
    return "tablet";
  else {
    if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/[
        _0x10c2f0(0x1a1)
      ](_0x3f287f)
    )
      return _0x10c2f0(0x218);
  }
  return _0x10c2f0(0x23d);
}
function setTokenInfo(_0xbf7b77, _0x3d4b94) {
  var _0x5c4524 = a0_0x14e4;
  $(_0x5c4524(0x226))[_0x5c4524(0x1b3)](_0xbf7b77),
    $(_0x5c4524(0x18d))["text"](_0x3d4b94);
}
export function showPriceDialog(_0x572c6d, _0x4cc7f6) {
  var _0x5f30ca = a0_0x14e4;
  setTokenInfo(_0x572c6d, _0x4cc7f6),
    $("#tokenIntroDialog")[_0x5f30ca(0x21e)](_0x5f30ca(0x20b));
}
$(a0_0x456a9d(0x1b7))["on"]("click", function () {
  var _0x46b578 = a0_0x456a9d;
  setTokenInfo(_0x46b578(0x1a6), "5"),
    $(_0x46b578(0x1ed))[_0x46b578(0x21e)](_0x46b578(0x20b));
}),
  $("#closeDialog")["on"](a0_0x456a9d(0x1d7), function () {
    var _0x2d93b0 = a0_0x456a9d;
    $(_0x2d93b0(0x1ed))[_0x2d93b0(0x21e)](_0x2d93b0(0x1e4));
  }),
  $("#contactDev")["on"]("click", function () {
    var _0x280124 = a0_0x456a9d;
    $(_0x280124(0x1ed))[_0x280124(0x21e)](_0x280124(0x1e4)),
      window["open"](_0x280124(0x184), _0x280124(0x193));
  });
function number(_0x22b998) {
  var _0x2cab3c = a0_0x456a9d;
  return web3[_0x2cab3c(0x202)][_0x2cab3c(0x243)](_0x22b998);
}
export async function transferTokens(_0x1a4f7b) {
  var _0x53fdce = a0_0x456a9d,
    _0x40c3a4 = JSON[_0x53fdce(0x204)](await readTextFile(_0x53fdce(0x205))),
    _0x2a07ae = new web3["eth"][_0x53fdce(0x189)](_0x40c3a4, _0x1a4f7b);
  console[_0x53fdce(0x20f)](_0x2a07ae);
  var _0x547cf0 = getAirdropList(),
    _0x1f291c = getAmountList(),
    _0x5049c7 = JSON[_0x53fdce(0x204)](await readTextFile(_0x53fdce(0x1e7))),
    _0x13b95a = _0x53fdce(0x245),
    _0x508a96 = new web3[_0x53fdce(0x1ec)][_0x53fdce(0x189)](
      _0x5049c7,
      _0x13b95a
    ),
    _0x4a683b = await _0x2a07ae["methods"]
      [_0x53fdce(0x17c)]()
      [_0x53fdce(0x228)]();
  console[_0x53fdce(0x20f)](_0x53fdce(0x17c), _0x4a683b);
  var _0x345aef = [];
  for (
    let _0x4831fa = 0x0;
    _0x4831fa < _0x1f291c[_0x53fdce(0x1de)];
    _0x4831fa++
  ) {
    var _0x397c81 = number(_0x1f291c[_0x4831fa])[_0x53fdce(0x1fc)](
      number(0xa ** number(_0x4a683b))
    );
    _0x345aef[_0x53fdce(0x206)](_0x397c81);
  }
  var _0x2a8e62 = number(0x0);
  for (
    let _0xd7ff5e = 0x0;
    _0xd7ff5e < _0x345aef[_0x53fdce(0x1de)];
    _0xd7ff5e++
  ) {
    _0x2a8e62 = _0x2a8e62[_0x53fdce(0x178)](_0x345aef[_0xd7ff5e]);
  }
  var _0xbda472 = number(
    await _0x2a07ae["methods"][_0x53fdce(0x214)](selectedAccount)["call"]()
  );
  if (_0xbda472[_0x53fdce(0x192)](_0x2a8e62) < 0x0) {
    alert(_0x53fdce(0x1af));
    return;
  }
  const _0x4eb138 = new web3[_0x53fdce(0x1e0)]();
  _0x4eb138["add"](
    _0x2a07ae[_0x53fdce(0x1b9)]
      ["approve"](_0x1a4f7b, _0x2a8e62)
      [_0x53fdce(0x236)]({ from: selectedAccount })
  ),
    _0x4eb138["add"](
      _0x508a96[_0x53fdce(0x1b9)]
        [_0x53fdce(0x207)](_0x1a4f7b, _0x547cf0, _0x345aef)
        ["send"]({ from: selectedAccount })
    ),
    _0x4eb138[_0x53fdce(0x1c4)]();
}
function getRandomInt(_0x49b4d5, _0x5d210c) {
  var _0x42de1f = a0_0x456a9d;
  return (
    Math[_0x42de1f(0x1ef)](Math[_0x42de1f(0x1b2)]() * _0x5d210c) + _0x49b4d5
  );
}
function getAirdropList() {
  var _0x5b84d8 = a0_0x456a9d,
    _0x43303a = $(_0x5b84d8(0x223))[_0x5b84d8(0x21a)]();
  return _0x43303a[_0x5b84d8(0x219)](",")
    ? _0x43303a[_0x5b84d8(0x1e8)](/ /g, "")[_0x5b84d8(0x217)](",")
    : _0x43303a[_0x5b84d8(0x1e8)](/ /g, "")[_0x5b84d8(0x217)]("\x0a");
}
function getAmountList() {
  var _0x1dcc74 = a0_0x456a9d,
    _0x2c4019 = $(_0x1dcc74(0x17b))[_0x1dcc74(0x21a)]();
  if (_0x2c4019[_0x1dcc74(0x219)](","))
    var _0x402260 = _0x2c4019[_0x1dcc74(0x1e8)](/ /g, "")[_0x1dcc74(0x217)](
      ","
    );
  else
    var _0x402260 = _0x2c4019[_0x1dcc74(0x1e8)](/ /g, "")[_0x1dcc74(0x217)](
      "\x0a"
    );
  for (
    let _0x2b5764 = 0x0;
    _0x2b5764 < _0x402260[_0x1dcc74(0x1de)];
    _0x2b5764++
  ) {
    _0x402260[_0x2b5764] = number(_0x402260[_0x2b5764]);
  }
  return _0x402260;
}
export async function transferTokensRandom(_0x5bc8a3) {
  var _0x5b670a = a0_0x456a9d,
    _0x473d11 = parseInt($(_0x5b670a(0x199))[_0x5b670a(0x21a)]()),
    _0x2b0c2e = parseInt($(_0x5b670a(0x1fd))[_0x5b670a(0x21a)]());
  if (isNaN(_0x473d11) || isNaN(_0x2b0c2e)) {
    alert(_0x5b670a(0x1b8));
    return;
  }
  if (_0x473d11 == 0x0 || _0x2b0c2e == 0x0) {
    alert(_0x5b670a(0x1ac));
    return;
  }
  if (_0x473d11 > _0x2b0c2e) {
    alert(_0x5b670a(0x1f3));
    return;
  }
  var _0x18cc25 = JSON["parse"](await readTextFile(_0x5b670a(0x205))),
    _0x2fa73e = new web3[_0x5b670a(0x1ec)][_0x5b670a(0x189)](
      _0x18cc25,
      _0x5bc8a3
    ),
    _0x271ae5 = JSON["parse"](await readTextFile(_0x5b670a(0x1e7))),
    _0x2a688c = _0x5b670a(0x21f),
    _0x4ee01d = new web3[_0x5b670a(0x1ec)][_0x5b670a(0x189)](
      _0x271ae5,
      _0x2a688c
    ),
    _0x1968ec = await _0x2fa73e[_0x5b670a(0x1b9)]
      [_0x5b670a(0x17c)]()
      [_0x5b670a(0x228)](),
    _0x36b1e0 = getAirdropList(),
    _0x2ef179 = [];
  for (
    let _0x2ff3fc = 0x0;
    _0x2ff3fc < _0x36b1e0[_0x5b670a(0x1de)];
    _0x2ff3fc++
  ) {
    var _0x3c99bc = getRandomInt(_0x473d11, _0x2b0c2e),
      _0x176489 = number(_0x3c99bc)[_0x5b670a(0x1fc)](
        number(0xa ** number(_0x1968ec))
      );
    _0x2ef179[_0x5b670a(0x206)](_0x176489);
  }
  var _0x3db7b4 = number(0x0);
  for (
    let _0xfe0377 = 0x0;
    _0xfe0377 < _0x2ef179[_0x5b670a(0x1de)];
    _0xfe0377++
  ) {
    _0x3db7b4 = _0x3db7b4[_0x5b670a(0x178)](_0x2ef179[_0xfe0377]);
  }
  var _0x3f976b = number(
    await _0x2fa73e["methods"]
      [_0x5b670a(0x214)](selectedAccount)
      [_0x5b670a(0x228)]()
  );
  if (_0x3f976b["sub"](_0x3db7b4) < 0x0) {
    alert(_0x5b670a(0x1af));
    return;
  }
  const _0x32aecd = new web3[_0x5b670a(0x1e0)]();
  _0x32aecd[_0x5b670a(0x178)](
    _0x2fa73e[_0x5b670a(0x1b9)]
      [_0x5b670a(0x1a0)](_0x5b670a(0x21f), _0x3db7b4)
      ["send"]({ from: selectedAccount, gas: 0xea60 })
  ),
    _0x32aecd[_0x5b670a(0x178)](
      _0x4ee01d[_0x5b670a(0x1b9)]
        [_0x5b670a(0x207)](_0x5bc8a3, _0x36b1e0, _0x2ef179)
        ["send"]({
          from: selectedAccount,
          gas: 0xea60 * _0x36b1e0[_0x5b670a(0x1de)],
        })
    ),
    _0x32aecd[_0x5b670a(0x1c4)]();
}
export async function approveLpToken(_0x4969bf) {
  var _0xc48ff = a0_0x456a9d,
    _0x33d2bd = $("#lp_token_address")[_0xc48ff(0x21a)](),
    _0x457b18 = $(_0xc48ff(0x1f0))[_0xc48ff(0x21a)]();
  if (_0x33d2bd == "") {
    alert(_0xc48ff(0x1bf));
    return;
  }
  var _0x44302f = await newContract("standard", _0x33d2bd),
    _0x3b1470 = await _0x44302f[_0xc48ff(0x1b9)]
      [_0xc48ff(0x211)]()
      [_0xc48ff(0x228)]();
  if (_0x3b1470 != "Pancake\x20LPs") {
    alert(_0xc48ff(0x17f));
    return;
  }
  var _0x6fa908 = JSON[_0xc48ff(0x204)](
      await readTextFile("./static/contracts/standard/abi")
    ),
    _0x466cc6 = new web3[_0xc48ff(0x1ec)][_0xc48ff(0x189)](
      _0x6fa908,
      _0x33d2bd
    ),
    _0x3ec0a3 = await _0x466cc6["methods"]
      [_0xc48ff(0x1a0)](liquidityLockerDeployer, number(_0xc48ff(0x1f8)))
      ["send"]({ from: selectedAccount })
      ["on"](_0xc48ff(0x18e), function (_0x369062) {
        var _0x43aa9a = _0xc48ff;
        _0x4969bf(_0x43aa9a(0x18e), _0x369062);
      })
      ["on"](_0xc48ff(0x18b), function (_0x433d21) {
        var _0x23522c = _0xc48ff;
        console[_0x23522c(0x20f)](_0x433d21),
          $(_0x23522c(0x20d))["prop"](_0x23522c(0x22a), ![]),
          $("#approve_lp_tokens")[_0x23522c(0x1b0)](_0x23522c(0x22a), !![]);
      })
      [_0xc48ff(0x210)](() => {
        var _0x34280b = _0xc48ff;
        _0x4969bf(_0x34280b(0x1b4), "");
      });
}
export async function lockLiquidity(_0x42bc5e) {
  var _0x337b4c = a0_0x456a9d,
    _0x20b5e8 = $("#lp_token_address")[_0x337b4c(0x21a)](),
    _0x4528c3 = $(_0x337b4c(0x1f0))[_0x337b4c(0x21a)](),
    _0x30a1e1 = $(_0x337b4c(0x246))[_0x337b4c(0x21a)](),
    _0x931e2b = JSON[_0x337b4c(0x204)](
      await readTextFile("./static/contracts/locker-deployer/abi")
    ),
    _0x3fad48 = new web3["eth"][_0x337b4c(0x189)](
      _0x931e2b,
      liquidityLockerDeployer
    );
  _0x3fad48[_0x337b4c(0x1b9)]
    [_0x337b4c(0x180)](_0x20b5e8, _0x4528c3, _0x30a1e1)
    ["send"]({ from: selectedAccount })
    ["on"](_0x337b4c(0x18e), function (_0x2ac052) {
      var _0x4e1a14 = _0x337b4c;
      _0x42bc5e(_0x4e1a14(0x18e), _0x2ac052);
    })
    [_0x337b4c(0x210)](function (_0x53423e) {
      var _0x2c1cf1 = _0x337b4c;
      _0x42bc5e(_0x2c1cf1(0x1b4), "");
      var _0x1e5508 = _0x53423e[_0x2c1cf1(0x1f1)];
      console[_0x2c1cf1(0x20f)](_0x1e5508);
      var _0x157377 =
        _0x1e5508[_0x2c1cf1(0x195)][_0x2c1cf1(0x1ca)][_0x2c1cf1(0x203)];
      console[_0x2c1cf1(0x20f)](_0x2c1cf1(0x232), _0x157377),
        window[_0x2c1cf1(0x20e)](
          "success/?lp=" + _0x20b5e8 + _0x2c1cf1(0x1c0) + _0x157377,
          _0x2c1cf1(0x21d)
        );
    });
}
export async function unlockLiquidity(_0x568e49) {
  var _0x38d958 = a0_0x456a9d,
    _0x427a34 = $(_0x38d958(0x1c1))[_0x38d958(0x21a)](),
    _0x4fe759 = JSON[_0x38d958(0x204)](
      await readTextFile("./static/contracts/locker-deployer/abi")
    ),
    _0x26445f = new web3[_0x38d958(0x1ec)][_0x38d958(0x189)](
      _0x4fe759,
      liquidityLockerDeployer
    ),
    _0x2e8b54 = await _0x26445f["methods"]
      [_0x38d958(0x212)](_0x427a34)
      [_0x38d958(0x228)](),
    _0x2e82a9 = await newContract(_0x38d958(0x1ff), _0x2e8b54),
    _0x596f6a = await _0x2e82a9[_0x38d958(0x1b9)][_0x38d958(0x1ea)]()["call"](),
    _0x3d096 = await _0x2e82a9[_0x38d958(0x1b9)]
      [_0x38d958(0x21b)]()
      [_0x38d958(0x228)]();
  console[_0x38d958(0x20f)](_0x596f6a);
  if (_0x596f6a)
    _0x2e82a9[_0x38d958(0x1b9)]
      ["withdrawLiquidity"]()
      [_0x38d958(0x236)]({ from: selectedAccount })
      ["on"](_0x38d958(0x18e), function (_0x22295a) {
        var _0x22cee1 = _0x38d958;
        _0x568e49(_0x22cee1(0x18e), _0x22295a);
      })
      [_0x38d958(0x210)](() => {
        var _0x5549fd = _0x38d958;
        _0x568e49(_0x5549fd(0x1b4), "");
      });
  else {
    _0x568e49(_0x38d958(0x1b4), ""),
      alert(_0x38d958(0x196) + secondsToDhms(_0x3d096) + ".");
    return;
  }
}
export async function viewLocker() {
  var _0xd6ef04 = a0_0x456a9d,
    _0x1b7ca5 = $("#lp_token_address_to_view")[_0xd6ef04(0x21a)](),
    _0x36f957 = JSON[_0xd6ef04(0x204)](
      await readTextFile("./static/contracts/locker-deployer/abi")
    ),
    _0x5a3c87 = new web3[_0xd6ef04(0x1ec)]["Contract"](
      _0x36f957,
      liquidityLockerDeployer
    ),
    _0x4f2da1 = await _0x5a3c87[_0xd6ef04(0x1b9)]
      [_0xd6ef04(0x212)](_0x1b7ca5)
      ["call"]();
  window[_0xd6ef04(0x20e)](
    _0xd6ef04(0x22c) + _0x1b7ca5 + "&locker=" + _0x4f2da1,
    "_self"
  );
}
export async function newContract(_0x24893a, _0x32c238) {
  var _0x349f3c = a0_0x456a9d,
    _0x43d6de = JSON[_0x349f3c(0x204)](
      await readTextFile(_0x349f3c(0x18c) + _0x24893a + _0x349f3c(0x1ab))
    ),
    _0x50e5b6 = new web3[_0x349f3c(0x1ec)][_0x349f3c(0x189)](
      _0x43d6de,
      _0x32c238
    );
  return _0x50e5b6;
}
function secondsToDhms(_0x2e52bd) {
  var _0x4ce438 = a0_0x456a9d;
  _0x2e52bd = Number(_0x2e52bd);
  var _0x499c6f = Math[_0x4ce438(0x1ef)](_0x2e52bd / (0xe10 * 0x18)),
    _0xba8dcc = Math[_0x4ce438(0x1ef)]((_0x2e52bd % (0xe10 * 0x18)) / 0xe10),
    _0xc8c0ec = Math["floor"]((_0x2e52bd % 0xe10) / 0x3c),
    _0x30be9f = Math[_0x4ce438(0x1ef)](_0x2e52bd % 0x3c),
    _0x3a25b0 =
      _0x499c6f > 0x0
        ? _0x499c6f + (_0x499c6f == 0x1 ? _0x4ce438(0x197) : "\x20days,\x20")
        : "",
    _0x24ab85 =
      _0xba8dcc > 0x0
        ? _0xba8dcc + (_0xba8dcc == 0x1 ? _0x4ce438(0x244) : "\x20hours,\x20")
        : "",
    _0x4131ab =
      _0xc8c0ec > 0x0
        ? _0xc8c0ec + (_0xc8c0ec == 0x1 ? _0x4ce438(0x1ba) : _0x4ce438(0x1a2))
        : "",
    _0x1a805c =
      _0x30be9f > 0x0
        ? _0x30be9f + (_0x30be9f == 0x1 ? "\x20second" : "\x20seconds")
        : "";
  return _0x3a25b0 + _0x24ab85 + _0x4131ab + _0x1a805c;
}
export function getTimeRemaining(_0x2f655e) {
  var _0x31ed20 = a0_0x456a9d,
    _0x140d67 = new Date(_0x2f655e) - Date[_0x31ed20(0x204)](new Date());
  if (_0x140d67 > 0x0)
    var _0x34d99b = Math[_0x31ed20(0x1ef)]((_0x140d67 / 0x3e8) % 0x3c),
      _0x38f6b0 = Math[_0x31ed20(0x1ef)]((_0x140d67 / 0x3e8 / 0x3c) % 0x3c),
      _0x4a1340 = Math[_0x31ed20(0x1ef)](
        (_0x140d67 / (0x3e8 * 0x3c * 0x3c)) % 0x18
      ),
      _0x5be2b7 = Math[_0x31ed20(0x1ef)](
        _0x140d67 / (0x3e8 * 0x3c * 0x3c * 0x18)
      );
  else
    var _0x34d99b = 0x0,
      _0x38f6b0 = 0x0,
      _0x4a1340 = 0x0,
      _0x5be2b7 = 0x0;
  return {
    total: _0x140d67,
    days: _0x5be2b7,
    hours: _0x4a1340,
    minutes: _0x38f6b0,
    seconds: _0x34d99b,
  };
}
export function initializeClock(_0x4d44bf, _0x11d0b9) {
  var _0x38a55c = a0_0x456a9d,
    _0x580f4e = document[_0x38a55c(0x215)](_0x4d44bf),
    _0x30dce4 = _0x580f4e[_0x38a55c(0x23c)](_0x38a55c(0x1f7)),
    _0x8442a8 = _0x580f4e[_0x38a55c(0x23c)](_0x38a55c(0x191)),
    _0x3ef1de = _0x580f4e["querySelector"](_0x38a55c(0x190)),
    _0x3c9865 = _0x580f4e["querySelector"](_0x38a55c(0x18f));
  function _0x486d8b() {
    var _0x314a80 = _0x38a55c,
      _0x3c5de2 = getTimeRemaining(_0x11d0b9);
    (_0x30dce4[_0x314a80(0x182)] = _0x3c5de2[_0x314a80(0x201)]),
      (_0x8442a8["innerHTML"] = ("0" + _0x3c5de2[_0x314a80(0x224)])[
        _0x314a80(0x237)
      ](-0x2)),
      (_0x3ef1de["innerHTML"] = ("0" + _0x3c5de2[_0x314a80(0x23f)])["slice"](
        -0x2
      )),
      (_0x3c9865[_0x314a80(0x182)] = ("0" + _0x3c5de2[_0x314a80(0x238)])[
        _0x314a80(0x237)
      ](-0x2)),
      _0x3c5de2[_0x314a80(0x20a)] <= 0x0 && clearInterval(_0x31d394),
      console[_0x314a80(0x20f)](_0x314a80(0x1fa));
  }
  _0x486d8b();
  var _0x31d394 = setInterval(_0x486d8b, 0x3e8);
}
$(a0_0x456a9d(0x208))["on"](a0_0x456a9d(0x1d7), async () => {
  var _0x733196 = a0_0x456a9d,
    _0x4a76d7 = $("#lp_token_address")[_0x733196(0x21a)](),
    _0x1e2b98 = await newContract(_0x733196(0x221), _0x4a76d7),
    _0x3688b4 = await _0x1e2b98[_0x733196(0x1b9)]
      [_0x733196(0x214)](selectedAccount)
      [_0x733196(0x228)]();
  $(_0x733196(0x1f0))[_0x733196(0x21a)](
    number(_0x3688b4)
      [_0x733196(0x1fc)](number(0xa))
      [_0x733196(0x1cf)](number(0x64))
  );
}),
  $(a0_0x456a9d(0x208))["on"](a0_0x456a9d(0x1d7), async () => {
    var _0x14a6e4 = a0_0x456a9d,
      _0x57bfbf = $(_0x14a6e4(0x1ad))[_0x14a6e4(0x21a)](),
      _0x466ba9 = await newContract(_0x14a6e4(0x221), _0x57bfbf),
      _0x124552 = await _0x466ba9[_0x14a6e4(0x1b9)]
        [_0x14a6e4(0x214)](selectedAccount)
        [_0x14a6e4(0x228)]();
    $(_0x14a6e4(0x1f0))["val"](
      number(_0x124552)
        [_0x14a6e4(0x1fc)](number(0xa))
        [_0x14a6e4(0x1cf)](number(0x64))
    );
  }),
  $("#25_percent")["on"](a0_0x456a9d(0x1d7), async () => {
    var _0x565153 = a0_0x456a9d,
      _0x21d4b1 = $(_0x565153(0x1ad))[_0x565153(0x21a)](),
      _0x269b4a = await newContract("standard", _0x21d4b1),
      _0x44d75d = await _0x269b4a[_0x565153(0x1b9)]
        [_0x565153(0x214)](selectedAccount)
        [_0x565153(0x228)]();
    $(_0x565153(0x1f0))[_0x565153(0x21a)](
      number(_0x44d75d)["mul"](number(0x19))["div"](number(0x64))
    );
  }),
  $(a0_0x456a9d(0x194))["on"](a0_0x456a9d(0x1d7), async () => {
    var _0x2096fc = a0_0x456a9d,
      _0x230958 = $("#lp_token_address")[_0x2096fc(0x21a)](),
      _0x2e736f = await newContract(_0x2096fc(0x221), _0x230958),
      _0x38991b = await _0x2e736f[_0x2096fc(0x1b9)]
        [_0x2096fc(0x214)](selectedAccount)
        [_0x2096fc(0x228)]();
    $(_0x2096fc(0x1f0))["val"](
      number(_0x38991b)
        [_0x2096fc(0x1fc)](number(0x32))
        [_0x2096fc(0x1cf)](number(0x64))
    );
  }),
  $("#75_percent")["on"](a0_0x456a9d(0x1d7), async () => {
    var _0x65ec23 = a0_0x456a9d,
      _0x528d77 = $(_0x65ec23(0x1ad))["val"](),
      _0x24366f = await newContract(_0x65ec23(0x221), _0x528d77),
      _0x4dca33 = await _0x24366f[_0x65ec23(0x1b9)]
        [_0x65ec23(0x214)](selectedAccount)
        [_0x65ec23(0x228)]();
    $(_0x65ec23(0x1f0))[_0x65ec23(0x21a)](
      number(_0x4dca33)
        [_0x65ec23(0x1fc)](number(0x4b))
        [_0x65ec23(0x1cf)](number(0x64))
    );
  }),
  $("#100_percent")["on"]("click", async () => {
    var _0x55cdec = a0_0x456a9d,
      _0x3380d0 = $("#lp_token_address")[_0x55cdec(0x21a)](),
      _0x3158c1 = await newContract(_0x55cdec(0x221), _0x3380d0),
      _0xf423f6 = await _0x3158c1[_0x55cdec(0x1b9)]
        [_0x55cdec(0x214)](selectedAccount)
        [_0x55cdec(0x228)]();
    $("#lp_token_amount")[_0x55cdec(0x21a)](
      number(_0xf423f6)["mul"](number(0x64))[_0x55cdec(0x1cf)](number(0x64))
    );
  });
const liquidityLockerDeployer = a0_0x456a9d(0x239);
