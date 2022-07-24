var a0_0x2e1aaa = a0_0x3d6c;
(function (_0x45d100, _0x179c49) {
  var _0x338d6c = a0_0x3d6c,
    _0x2acd64 = _0x45d100();
  while (!![]) {
    try {
      var _0x286593 =
        (parseInt(_0x338d6c(0x22f)) / 0x1) *
          (-parseInt(_0x338d6c(0x22c)) / 0x2) +
        -parseInt(_0x338d6c(0x220)) / 0x3 +
        (-parseInt(_0x338d6c(0x240)) / 0x4) *
          (parseInt(_0x338d6c(0x203)) / 0x5) +
        -parseInt(_0x338d6c(0x219)) / 0x6 +
        (parseInt(_0x338d6c(0x202)) / 0x7) *
          (-parseInt(_0x338d6c(0x1f3)) / 0x8) +
        (parseInt(_0x338d6c(0x224)) / 0x9) *
          (-parseInt(_0x338d6c(0x22d)) / 0xa) +
        (-parseInt(_0x338d6c(0x1dd)) / 0xb) *
          (-parseInt(_0x338d6c(0x1e2)) / 0xc);
      if (_0x286593 === _0x179c49) break;
      else _0x2acd64["push"](_0x2acd64["shift"]());
    } catch (_0x4bf45e) {
      _0x2acd64["push"](_0x2acd64["shift"]());
    }
  }
})(a0_0x40c3, 0x9f610);
function a0_0x3d6c(_0x584c71, _0x29fd81) {
  var _0x40c3e7 = a0_0x40c3();
  return (
    (a0_0x3d6c = function (_0x3d6c06, _0x11c9db) {
      _0x3d6c06 = _0x3d6c06 - 0x1c4;
      var _0x32caa7 = _0x40c3e7[_0x3d6c06];
      return _0x32caa7;
    }),
    a0_0x3d6c(_0x584c71, _0x29fd81)
  );
}
export function solcCompiler(_0x2c851a) {
  var _0x902a43 = a0_0x3d6c;
  BrowserSolc["loadVersion"](
    "soljson-v0.4.26+commit.4563c3fc.js",
    function (_0x43b414) {
      var _0x447cd5 = a0_0x3d6c,
        _0x870828 = _0x870828,
        _0x512468 = 0x1,
        _0x110d10 = _0x43b414[_0x447cd5(0x1ec)](_0x870828, _0x512468);
      console[_0x447cd5(0x20f)](
        _0x447cd5(0x1c7) +
          JSON["stringify"](_0x43b414) +
          _0x447cd5(0x1f8) +
          JSON[_0x447cd5(0x208)](_0x110d10) +
          _0x447cd5(0x1d5)
      );
    }
  ),
    BrowserSolc[_0x902a43(0x1c9)](function (_0x1fc8fa, _0x5adaeb) {
      var _0x2dde63 = _0x902a43;
      console[_0x2dde63(0x20f)](_0x1fc8fa),
        console[_0x2dde63(0x20f)](_0x5adaeb);
    });
}
function readTextFile_old(_0x443323, _0x143034) {
  var _0x32ae36 = a0_0x3d6c,
    _0x329dda = new XMLHttpRequest();
  _0x329dda[_0x32ae36(0x237)]("GET", _0x443323, ![]),
    (_0x329dda[_0x32ae36(0x1fa)] = function () {
      var _0x576bde = _0x32ae36;
      if (_0x329dda[_0x576bde(0x205)] === 0x4) {
        if (
          _0x329dda[_0x576bde(0x227)] === 0xc8 ||
          _0x329dda[_0x576bde(0x227)] == 0x0
        ) {
          var _0x324074 = _0x329dda["responseText"];
          _0x143034(_0x324074);
        }
      }
    }),
    _0x329dda[_0x32ae36(0x1c8)](null);
}
export async function readTextFile(_0x1792d2) {
  var _0x5e25d8 = a0_0x3d6c;
  return (await makeRequest(_0x5e25d8(0x1e6), _0x1792d2))[_0x5e25d8(0x204)];
}
function makeRequest(_0x25400c, _0x214e3c) {
  return new Promise(function (_0x32829a, _0x593703) {
    var _0x4c24a2 = a0_0x3d6c;
    let _0x2b43fa = new XMLHttpRequest();
    _0x2b43fa["open"](_0x25400c, _0x214e3c),
      (_0x2b43fa[_0x4c24a2(0x23c)] = function () {
        var _0xc06f4 = _0x4c24a2;
        this[_0xc06f4(0x227)] >= 0xc8 && this["status"] < 0x12c
          ? _0x32829a({
              status: this["status"],
              statusText: _0x2b43fa[_0xc06f4(0x209)],
            })
          : _0x593703({
              status: this["status"],
              statusText: _0x2b43fa[_0xc06f4(0x204)],
            });
      }),
      (_0x2b43fa[_0x4c24a2(0x1fe)] = function () {
        var _0x26d286 = _0x4c24a2;
        _0x593703({
          status: this[_0x26d286(0x227)],
          statusText: _0x2b43fa[_0x26d286(0x204)],
        });
      }),
      _0x2b43fa[_0x4c24a2(0x1c8)]();
  });
}
function getGasPrice(_0x556c0b) {
  var _0xb5a8a9 = a0_0x3d6c;
  web3[_0xb5a8a9(0x1d9)][_0xb5a8a9(0x1e8)]()[_0xb5a8a9(0x239)]((_0x113f2a) => {
    var _0x5ce76a = _0xb5a8a9;
    console[_0x5ce76a(0x20f)](_0x5ce76a(0x246), _0x113f2a),
      _0x556c0b(_0x113f2a);
  });
}
async function getGasLimit(_0x3b9df2, _0xb9bdba) {
  var _0x1c7c6a = a0_0x3d6c;
  setValue(_0x1c7c6a(0x1f9), _0x1c7c6a(0x244)), showElement(_0x1c7c6a(0x1f9));
  var _0x424185 = await web3[_0x1c7c6a(0x1d9)][_0x1c7c6a(0x22e)](),
    _0x3c8c25 = 0x0,
    _0x1c60ac = 0x0,
    _0x4cc574 = 0x0,
    _0x2373f5 = 0x0,
    _0x2fb2d7 = 0x14;
  console[_0x1c7c6a(0x20f)](_0x424185),
    console[_0x1c7c6a(0x20f)](_0x1c7c6a(0x221), _0x3b9df2);
  for (let _0x425e31 = 0x0; _0x425e31 < _0x2fb2d7; _0x425e31++) {
    var _0xabbc0b = await web3[_0x1c7c6a(0x1d9)]["getBlock"](
        _0x424185 - _0x425e31
      ),
      _0x32c4e6 = parseInt(
        _0xabbc0b[_0x1c7c6a(0x1db)] / _0xabbc0b[_0x1c7c6a(0x238)]
      );
    console[_0x1c7c6a(0x20f)](_0x1c7c6a(0x1de) + _0x32c4e6),
      (_0x4cc574 += _0x32c4e6);
  }
  var _0x2373f5 = parseInt((_0x3b9df2 * _0x4cc574) / _0x2fb2d7);
  console[_0x1c7c6a(0x20f)](_0x1c7c6a(0x213) + _0x2373f5),
    _0xb9bdba(_0x2373f5),
    hideElement(_0x1c7c6a(0x1f9));
}
function getDataSize(_0x41b748, _0x40fe15) {
  var _0xa118f1 = a0_0x3d6c;
  return parseInt(
    _0x41b748[_0xa118f1(0x236)] * 0.5 + _0x40fe15[_0xa118f1(0x236)] * 0x20
  );
}
function a0_0x40c3() {
  var _0x45ac18 = [
    "toString",
    "1089SdelFn",
    "none",
    "#copyTokenAddress",
    "status",
    "contractAddress",
    "#contactDev",
    "text",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20new\x20contract:\x0a\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "1776ElpZeU",
    "59410Wdfkeh",
    "getBlockNumber",
    "10TCdukC",
    "bytecodeWithEncodedParameters",
    "/lib.",
    "https://t.me/MoonDeploy",
    "tablet",
    "replaceAll",
    "data",
    "length",
    "open",
    "size",
    "then",
    "utils",
    "contract",
    "onload",
    "#modalLabel",
    "done",
    "Verify\x20contract...",
    "3575740PWxQhD",
    "error!",
    "value",
    "transactionHash",
    "Estimate\x20gas\x20limit...",
    "VRZFIF86GSTY9TDHPCQ7BS42TEI8BN1N5B",
    "gas_price:",
    "values",
    "IterableMapping",
    "result\x20:\x20",
    "https://api.etherscan.io/api",
    "mobile",
    "replace",
    "result",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20---result---\x0a\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "send",
    "getVersions",
    "error",
    "desktop",
    "encodeABI",
    "\x0a\x20\x20\x20\x20",
    "encoded_constructor",
    "receipt",
    "parse",
    "createElement",
    "body",
    "deploy",
    "toWei",
    "\x0a\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "standard",
    "./static/contracts/",
    "StandardToken",
    "eth",
    "copy",
    "gasUsed",
    "block",
    "30316FTYeok",
    "gas_used_per_byte:",
    "click",
    "tooltip",
    "input",
    "22632DBKpAJ",
    "\x0a\x20\x20\x20\x20library_address:\x20",
    "split",
    "sent",
    "GET",
    "#modalBody",
    "getGasPrice",
    "confirmation",
    "object",
    "POST",
    "compile",
    "attr",
    "userAgent",
    "Unexpected\x20Error",
    "reward",
    "RewardToken",
    "message\x20:\x20",
    "24VShtFO",
    "#closeDialog",
    "Contract",
    "removeChild",
    "test",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "deployStatus",
    "onreadystatechange",
    "abi",
    "display",
    "compiler",
    "onerror",
    "push",
    "inputs",
    "status\x20:\x20",
    "1049125SzcdSc",
    "5nMkZyB",
    "statusText",
    "readyState",
    "hide",
    "address",
    "stringify",
    "response",
    "#tokenIntroDialog",
    "sending",
    "checkverifystatus",
    "internalType",
    "once",
    "log",
    "Meme\x20Coin",
    "verifysourcecode",
    "solidity-single-file",
    "average_gas_limit:",
    "#btnDialog",
    "message",
    "SafeToken",
    "ether",
    "css",
    "7253274AUPZjC",
    "includes",
    "show",
    "Copied!",
    "modal",
    "contract_addresscontract_address",
    "data-bs-original-title",
    "3794460aVlomK",
    "data_size",
    "_blank",
  ];
  a0_0x40c3 = function () {
    return _0x45ac18;
  };
  return a0_0x40c3();
}
function getPrice(_0x1d92ba) {
  var _0x59e60a = a0_0x3d6c,
    _0x56a74a = $("#price")[_0x59e60a(0x22a)]();
  _0x56a74a = _0x56a74a[_0x59e60a(0x1e4)]("\x20")[0x0];
  if (_0x1d92ba[_0x59e60a(0x21a)]("r" + "e" + "w" + "a" + "r" + "d"))
    _0x56a74a = "0" + "." + "02";
  else
    _0x56a74a == "F" + "R" + "E" + "E" ||
    parseFloat(_0x56a74a) == 0x0 ||
    isNaN(_0x56a74a)
      ? (_0x56a74a = "0" + "." + "00" + "1")
      : (_0x56a74a = _0x56a74a[_0x59e60a(0x223)]());
  return _0x56a74a;
}
export async function deployContract(
  _0x1b3c39,
  _0x202094,
  _0x417412,
  _0x473936,
  _0x17570a
) {
  var _0x2a6a09 = a0_0x3d6c,
    _0x134217 = await readTextFile(_0x1b3c39 + "abi"),
    _0x182769 = JSON[_0x2a6a09(0x1d0)](_0x134217);
  console["log"](Object[_0x2a6a09(0x247)](_0x182769)),
    console[_0x2a6a09(0x20f)]("web3\x20object", web3);
  var _0x1abd5d = new web3[_0x2a6a09(0x1d9)][_0x2a6a09(0x1f5)](_0x182769);
  console["log"](_0x2a6a09(0x22b) + _0x1abd5d + _0x2a6a09(0x1f8));
  var _0xd87cf0 = await readTextFile(_0x1b3c39 + "data");
  console[_0x2a6a09(0x20f)](_0x1b3c39 + _0x2a6a09(0x235));
  var _0xd87cf0 = JSON[_0x2a6a09(0x1d0)](_0xd87cf0)[_0x2a6a09(0x1ea)];
  if (_0x1b3c39[_0x2a6a09(0x21a)](_0x2a6a09(0x1f0))) {
    if (typeof _0x473936 !== undefined && _0x473936 != null) {
      (_0x473936 = _0x473936[_0x2a6a09(0x1c5)]("0x", "")),
        (_0xd87cf0 = _0xd87cf0[_0x2a6a09(0x234)](
          "__$13356894708e8712e57b8854de619104de$__",
          _0x473936
        ));
      var _0x522cc1 = getPrice(_0x1b3c39);
    } else var _0x522cc1 = "0";
  } else var _0x522cc1 = getPrice(_0x1b3c39);
  console[_0x2a6a09(0x20f)](
    _0x2a6a09(0x1e3) +
      _0x473936 +
      "\x0a\x20\x20\x0a\x20\x20\x20\x20data:\x20" +
      _0xd87cf0 +
      _0x2a6a09(0x1cd)
  ),
    console[_0x2a6a09(0x20f)](_0x202094);
  if (_0x202094 != []) {
    var _0xb17d81 = await getConstructor(_0x1b3c39 + _0x2a6a09(0x1fb)),
      _0x5ec483 = encodeParameters(_0xb17d81, _0x202094);
    console[_0x2a6a09(0x20f)](_0x2a6a09(0x1ce), _0x5ec483);
  }
  var _0x102c4c = _0x1abd5d[_0x2a6a09(0x1d3)]({
    data: _0xd87cf0,
    arguments: _0x202094,
  })[_0x2a6a09(0x1cc)]();
  console["log"](_0x2a6a09(0x230), _0x102c4c);
  var _0x16104f = {
    from: selectedAccount,
    gas: 0x186a0,
    value: web3[_0x2a6a09(0x23a)][_0x2a6a09(0x1d4)](
      _0x522cc1,
      _0x2a6a09(0x217)
    ),
  };
  _0x1b3c39[_0x2a6a09(0x21a)](_0x2a6a09(0x1f0)) &&
    _0x473936 != null &&
    (_0x16104f = {
      from: selectedAccount,
      gas: 0x7a1200,
      gasPrice: 0xa,
      value: web3["utils"][_0x2a6a09(0x1d4)](_0x522cc1, _0x2a6a09(0x217)),
    }),
    _0x1abd5d[_0x2a6a09(0x1d3)]({ data: _0xd87cf0, arguments: _0x202094 })
      [_0x2a6a09(0x1c8)](_0x16104f, function (_0x1124b0, _0xc1f75f) {})
      [_0x2a6a09(0x20e)](_0x2a6a09(0x20b), function (_0x3e0f43) {
        var _0x39462a = _0x2a6a09;
        console[_0x39462a(0x20f)](_0x39462a(0x20b), _0x3e0f43);
      })
      ["once"](_0x2a6a09(0x1e5), function (_0x1c9b08) {
        var _0x4af9ff = _0x2a6a09;
        console[_0x4af9ff(0x20f)](_0x4af9ff(0x1e5), _0x1c9b08),
          setValue(_0x4af9ff(0x1f9), "Deploy\x20contract..."),
          showElement(_0x4af9ff(0x1f9));
      })
      ["on"]("error", function (_0x493d26) {
        var _0x54ba3b = _0x2a6a09;
        _0x417412(_0x54ba3b(0x1ca), _0x493d26), hideElement(_0x54ba3b(0x1f9));
      })
      ["on"]("transactionHash", function (_0x45ea07) {
        var _0x2b9104 = _0x2a6a09;
        _0x417412(_0x2b9104(0x243), _0x45ea07);
      })
      ["on"]("receipt", function (_0x35f93d) {
        var _0x3763ac = _0x2a6a09;
        console[_0x3763ac(0x20f)](_0x35f93d[_0x3763ac(0x228)]),
          _0x417412(_0x3763ac(0x1cf), _0x35f93d);
      })
      ["on"](_0x2a6a09(0x1e9), function (_0x43a890, _0x36fd34) {
        var _0x21809d = _0x2a6a09;
        _0x417412(_0x21809d(0x1e9), _0x43a890);
      })
      [_0x2a6a09(0x239)](async function (_0x12b19d) {
        var _0x4ac2a2 = _0x2a6a09;
        console[_0x4ac2a2(0x20f)](_0x12b19d["options"][_0x4ac2a2(0x207)]),
          _0x417412(_0x4ac2a2(0x23e), _0x12b19d["options"][_0x4ac2a2(0x207)]),
          setValue(_0x4ac2a2(0x1f9), _0x4ac2a2(0x23f));
        if (!_0x1b3c39[_0x4ac2a2(0x21a)](_0x4ac2a2(0x231))) {
          await sleep(0x1e);
          var _0x38f640 = _0x12b19d["options"][_0x4ac2a2(0x207)];
          console["log"](_0x4ac2a2(0x21e), _0x38f640);
          var _0x4c23aa = await readTextFile(_0x1b3c39 + "sol");
          if (_0x1b3c39["includes"](_0x4ac2a2(0x1d6)))
            var _0x2439c5 = "StandardToken";
          else {
            if (_0x1b3c39[_0x4ac2a2(0x21a)]("safemoon"))
              var _0x2439c5 = _0x4ac2a2(0x216);
            else {
              if (_0x1b3c39[_0x4ac2a2(0x21a)](_0x4ac2a2(0x1f0)))
                var _0x2439c5 = _0x4ac2a2(0x1f1),
                  _0x850fc0 = [_0x4ac2a2(0x248)],
                  _0x423d0f = ["0x" + _0x473936];
              else var _0x2439c5 = _0x4ac2a2(0x1d8);
            }
          }
          var _0x5ecd6d = await readTextFile(_0x1b3c39 + _0x4ac2a2(0x1fd)),
            _0x34e880 = _0x5ec483;
          verifyContract(
            _0x38f640,
            _0x4c23aa,
            _0x2439c5,
            _0x5ecd6d,
            _0x34e880,
            _0x850fc0,
            _0x423d0f,
            _0x17570a
          );
        }
      });
}
export function sleep(_0x561238) {
  return new Promise((_0x3bebad) => {
    setTimeout(_0x3bebad, _0x561238 * 0x3e8);
  });
}
export async function createToken(
  _0x12715e,
  _0x56ee03,
  _0x3ce00e,
  _0x8269d6,
  _0xaad7ab
) {
  var _0x1e2b9b = a0_0x3d6c,
    _0x3e84b2 = _0x1e2b9b(0x1d7) + _0x12715e + "/";
  await deployContract(_0x3e84b2, _0x56ee03, _0x3ce00e, _0x8269d6, _0xaad7ab);
}
export async function deployLibrary(
  _0x4b03e1,
  _0x5ccef9,
  _0x35fdd5,
  _0x5b6961
) {
  var _0x20ea35 = "./static/contracts/" + _0x4b03e1 + "/lib.";
  await deployContract(_0x20ea35, _0x5ccef9, _0x35fdd5, null, _0x5b6961);
}
export function copyToCliBoard(_0x167c0b) {
  var _0x269ee3 = a0_0x3d6c,
    _0x4ff3bf = document[_0x269ee3(0x1d1)](_0x269ee3(0x1e1));
  (_0x4ff3bf[_0x269ee3(0x242)] = _0x167c0b),
    document[_0x269ee3(0x1d2)]["appendChild"](_0x4ff3bf),
    _0x4ff3bf["select"](),
    document["execCommand"](_0x269ee3(0x1da)),
    document[_0x269ee3(0x1d2)][_0x269ee3(0x1f6)](_0x4ff3bf),
    $(_0x269ee3(0x226))[_0x269ee3(0x1ed)](_0x269ee3(0x21f), _0x269ee3(0x21c)),
    $("#copyTokenAddress")["attr"]("title", _0x269ee3(0x21c)),
    $("#copyTokenAddress")["tooltip"](_0x269ee3(0x21b)),
    setTimeout(() => {
      var _0x432e9d = _0x269ee3;
      $(_0x432e9d(0x226))[_0x432e9d(0x1e0)](_0x432e9d(0x206)),
        $(_0x432e9d(0x226))[_0x432e9d(0x1ed)](
          "title",
          "Copy\x20to\x20clipboard"
        ),
        $(_0x432e9d(0x226))["attr"](_0x432e9d(0x21f), "");
    }, 0x1f4);
}
export function setValue(_0x366007, _0x5738a1) {
  $("." + _0x366007)["text"](_0x5738a1);
}
export function hideElement(_0x575a61) {
  var _0x10d7c9 = a0_0x3d6c;
  $("." + _0x575a61)[_0x10d7c9(0x218)](_0x10d7c9(0x1fc), _0x10d7c9(0x225));
}
export function showElement(_0x7f673f) {
  var _0x44eaf3 = a0_0x3d6c;
  $("." + _0x7f673f)[_0x44eaf3(0x218)](_0x44eaf3(0x1fc), _0x44eaf3(0x1dc));
}
export function verifyContract(
  _0x2ae554,
  _0x418a60,
  _0xccd8c6,
  _0x31792d,
  _0x145442,
  _0x3f36c4,
  _0x39e35d,
  _0x2366e6
) {
  var _0x41dd5d = a0_0x3d6c;
  _0x3f36c4 == undefined && (_0x3f36c4 = [""]);
  _0x39e35d == undefined && (_0x39e35d = [""]);
  var _0xeb08cd = getApiUrl();
  $["ajax"]({
    type: _0x41dd5d(0x1eb),
    url: _0xeb08cd,
    data: {
      apikey: api_key,
      module: _0x41dd5d(0x23b),
      action: _0x41dd5d(0x211),
      contractaddress: _0x2ae554,
      sourceCode: _0x418a60,
      codeformat: _0x41dd5d(0x212),
      contractname: _0xccd8c6,
      compilerversion: _0x31792d,
      optimizationUsed: 0x1,
      runs: 0xc8,
      constructorArguements: _0x145442,
      evmversion: "",
      licenseType: 0x1,
      libraryname1: _0x3f36c4[0x0],
      libraryaddress1: _0x39e35d[0x0],
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
    success: function (_0x1bf92e) {
      var _0x1d6da0 = _0x41dd5d;
      console[_0x1d6da0(0x20f)](_0x1bf92e),
        _0x1bf92e[_0x1d6da0(0x227)] == "1"
          ? console["log"](
              _0x1bf92e["status"] +
                ";" +
                _0x1bf92e[_0x1d6da0(0x215)] +
                ";" +
                _0x1bf92e[_0x1d6da0(0x1c6)]
            )
          : console[_0x1d6da0(0x20f)](
              _0x1bf92e["status"] +
                ";" +
                _0x1bf92e[_0x1d6da0(0x215)] +
                ";" +
                _0x1bf92e[_0x1d6da0(0x1c6)]
            ),
        console[_0x1d6da0(0x20f)](
          _0x1d6da0(0x201) + _0x1bf92e[_0x1d6da0(0x227)]
        ),
        console[_0x1d6da0(0x20f)](_0x1d6da0(0x249) + _0x1bf92e["result"]),
        _0x2366e6 != null &&
          _0x2366e6 != undefined &&
          _0x2366e6(_0x2ae554, _0x1bf92e);
    },
    error: function (_0x16c06d) {
      var _0x31ef52 = _0x41dd5d;
      console[_0x31ef52(0x20f)](_0x31ef52(0x241)),
        console[_0x31ef52(0x20f)](_0x31ef52(0x1ef)),
        console[_0x31ef52(0x20f)](_0x16c06d),
        _0x2366e6 != null &&
          _0x2366e6 != undefined &&
          _0x2366e6(_0x2ae554, _0x16c06d);
    },
  });
}
function getApiUrl() {
  var _0x30a662 = a0_0x3d6c;
  if (getNetwork() == 0x0) {
    var _0x48dedb = _0x30a662(0x24a);
    return _0x48dedb;
  } else {
    if (getNetwork() == 0x1) {
      var _0x48dedb = "https://api-ropsten.etherscan.io/api";
      return _0x48dedb;
    }
  }
}
export function checkVerifyStatus(_0x49e0cb) {
  var _0x972ac6 = a0_0x3d6c,
    _0x4c774c = getApiUrl();
  $["ajax"]({
    type: _0x972ac6(0x1e6),
    url: _0x4c774c,
    data: {
      apikey: api_key,
      guid: _0x49e0cb,
      module: _0x972ac6(0x23b),
      action: _0x972ac6(0x20c),
    },
    success: function (_0x2af51b) {
      var _0x1ac122 = _0x972ac6;
      console["log"](_0x1ac122(0x201) + _0x2af51b[_0x1ac122(0x227)]),
        console[_0x1ac122(0x20f)](
          _0x1ac122(0x1f2) + _0x2af51b[_0x1ac122(0x215)]
        ),
        console[_0x1ac122(0x20f)](
          _0x1ac122(0x249) + _0x2af51b[_0x1ac122(0x1c6)]
        );
    },
    error: function (_0x527387) {
      var _0x4c249d = _0x972ac6;
      alert(_0x4c249d(0x1ca));
    },
  });
}
export function encodeParameters(_0xb76765, _0x20e2f8) {
  var _0x2a25f4 = a0_0x3d6c;
  return web3["eth"][_0x2a25f4(0x1fb)]
    ["encodeParameters"](_0xb76765, _0x20e2f8)
    [_0x2a25f4(0x1c5)]("0x", "");
}
export async function getConstructor(_0x1edca) {
  var _0x37812a = a0_0x3d6c,
    _0x64fac6 = JSON[_0x37812a(0x1d0)](await readTextFile(_0x1edca));
  console[_0x37812a(0x20f)](_0x64fac6);
  var _0x381d81 = _0x64fac6[0x0],
    _0x41d995 = _0x381d81[_0x37812a(0x200)],
    _0x491d60 = [];
  for (let _0x332de6 = 0x0; _0x332de6 < _0x41d995["length"]; _0x332de6++) {
    var _0xe8f6bf = _0x41d995[_0x332de6][_0x37812a(0x20d)];
    _0x491d60[_0x37812a(0x1ff)](_0xe8f6bf);
  }
  return console[_0x37812a(0x20f)](_0x491d60), _0x491d60;
}
export function getNetwork() {
  var _0x49c030 = a0_0x3d6c;
  return $(".network\x20option:selected")[0x0][_0x49c030(0x242)];
}
export function getDeviceType() {
  var _0x2bbb4d = a0_0x3d6c;
  const _0x26d587 = navigator[_0x2bbb4d(0x1ee)];
  if (
    /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i[_0x2bbb4d(0x1f7)](
      _0x26d587
    )
  )
    return _0x2bbb4d(0x233);
  else {
    if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/[
        _0x2bbb4d(0x1f7)
      ](_0x26d587)
    )
      return _0x2bbb4d(0x1c4);
  }
  return _0x2bbb4d(0x1cb);
}
function setTokenInfo(_0x2c7fdc, _0x2ca820) {
  var _0x9beaa1 = a0_0x3d6c;
  $(_0x9beaa1(0x23d))[_0x9beaa1(0x22a)](_0x2c7fdc),
    $(_0x9beaa1(0x1e7))["text"](_0x2ca820);
}
export function showPriceDialog(_0x29ef78, _0xd3b35c) {
  var _0x13fe67 = a0_0x3d6c;
  setTokenInfo(_0x29ef78, _0xd3b35c),
    $(_0x13fe67(0x20a))["modal"](_0x13fe67(0x21b));
}
$(a0_0x2e1aaa(0x214))["on"](a0_0x2e1aaa(0x1df), function () {
  var _0x415922 = a0_0x2e1aaa;
  setTokenInfo(_0x415922(0x210), "5"),
    $(_0x415922(0x20a))["modal"](_0x415922(0x21b));
}),
  $(a0_0x2e1aaa(0x1f4))["on"]("click", function () {
    var _0x2d585f = a0_0x2e1aaa;
    $(_0x2d585f(0x20a))[_0x2d585f(0x21d)](_0x2d585f(0x206));
  }),
  $(a0_0x2e1aaa(0x229))["on"](a0_0x2e1aaa(0x1df), function () {
    var _0x45c373 = a0_0x2e1aaa;
    $(_0x45c373(0x20a))[_0x45c373(0x21d)](_0x45c373(0x206)),
      window[_0x45c373(0x237)](_0x45c373(0x232), _0x45c373(0x222));
  });
var api_key = a0_0x2e1aaa(0x245);
