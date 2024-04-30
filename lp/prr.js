(function () {
  'use strict';

  Lampa.Platform.tv();
  (function () {
    var _0x3a6e1b = function () {
      var _0x5563dd = true;
      return function (_0x3edf99, _0x4efbce) {
        var _0x5dfd80 = _0x5563dd ? function () {
          if (_0x4efbce) {
            var _0x184f9c = _0x4efbce.apply(_0x3edf99, arguments);
            _0x4efbce = null;
            return _0x184f9c;
          }
        } : function () {};
        _0x5563dd = false;
        return _0x5dfd80;
      };
    }();
    var _0x29375f = function () {
      var _0x509014 = true;
      return function (_0x47549c, _0x767499) {
        var _0x40adc6 = _0x509014 ? function () {
          if (_0x767499) {
            var _0x1529c3 = _0x767499.apply(_0x47549c, arguments);
            _0x767499 = null;
            return _0x1529c3;
          }
        } : function () {};
        _0x509014 = false;
        return _0x40adc6;
      };
    }();
    var _0x20ca1d = function () {
      var _0x4dd5b3 = true;
      return function (_0x5ba53e, _0x5d69db) {
        var _0x47580d = _0x4dd5b3 ? function () {
          if (_0x5d69db) {
            var _0x35599c = _0x5d69db.apply(_0x5ba53e, arguments);
            _0x5d69db = null;
            return _0x35599c;
          }
        } : function () {};
        _0x4dd5b3 = false;
        return _0x47580d;
      };
    }();
    'use strict';
    var _0x2039df = 0;
    function _0x453908() {
      Lampa.Controller.listener.follow("toggle", function (_0x5da8b7) {
        if (_0x5da8b7.name == "select") {
          setTimeout(function () {
            if ($(".selectbox .selectbox-item__icon svg").length && Lampa.Activity.active().component == "full") {
              $("div.selectbox__body > div > div > div > div:contains(\"@modssmy_bot\")").css("display", "none");
            }
            if (Lampa.Activity.active().component === "modss_online") {
              $(".selectbox-item--icon").remove();
            }
          }, 30);
        }
      });
    }
    function _0x1893df() {
      setTimeout(function () {
        $(".selectbox-item__lock").parent().css("display", "none");
        if (document.querySelector("div > span > div > span")) {
          if (document.querySelector("div > span > div > span").innerText == "@lampa_plugins_uncensored") {
            return;
          }
        } else {
          setTimeout(function () {
            if (!$(".extensions__body").length) {
              $("div > span:contains(\"Статус\")").parent().remove();
            }
          }, 10);
        }
      }, 10);
    }
    function _0x8bd17b() {
      document.addEventListener("DOMSubtreeModified", function _0x59f3bd(_0x6f8087) {
        var _0x55dbac = document.getElementsByClassName("card");
        if (_0x55dbac.length > 0) {
          if (_0x2039df == 0) {
            _0x2039df = 1;
            _0x1893df();
            setTimeout(function () {
              _0x2039df = 0;
            }, 500);
          }
        }
      }, false);
    }
    function _0x5679f1() {
      var _0x43a907 = _0x3a6e1b(this, function () {
        return _0x43a907.toString().search("(((.+)+)+)+$").toString().constructor(_0x43a907).search("(((.+)+)+)+$");
      });
      _0x43a907();
      (function () {
        _0x29375f(this, function () {
          var _0x39633a = new RegExp("function *\\( *\\)");
          var _0x40d311 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
          var _0x2af06f = _0x4f7d26("init");
          if (!_0x39633a.test(_0x2af06f + "chain") || !_0x40d311.test(_0x2af06f + "input")) {
            _0x2af06f('0');
          } else {
            _0x4f7d26();
          }
        })();
      })();
      var _0x29517b = _0x20ca1d(this, function () {
        var _0x6ed718 = function () {
          var _0x4739b2;
          try {
            _0x4739b2 = Function("return (function() {}.constructor(\"return this\")( ));")();
          } catch (_0x377284) {
            _0x4739b2 = window;
          }
          return _0x4739b2;
        };
        var _0x1cc57f = _0x6ed718();
        var _0x3939f5 = _0x1cc57f.console = _0x1cc57f.console || {};
        var _0x934e9e = ["log", "warn", "info", "error", "exception", "table", "trace"];
        for (var _0x4aa150 = 0; _0x4aa150 < _0x934e9e.length; _0x4aa150++) {
          var _0x215324 = _0x20ca1d.constructor.prototype.bind(_0x20ca1d);
          var _0x4d5e79 = _0x934e9e[_0x4aa150];
          var _0x60f62d = _0x3939f5[_0x4d5e79] || _0x215324;
          _0x215324.__proto__ = _0x20ca1d.bind(_0x20ca1d);
          _0x215324.toString = _0x60f62d.toString.bind(_0x60f62d);
          _0x3939f5[_0x4d5e79] = _0x215324;
        }
      });
      _0x29517b();
      $(document).ready(function () {
        var _0x13fa9e = new Date();
        var _0x550042 = _0x13fa9e.getTime();
        localStorage.setItem("region", "{\"code\":\"uk\",\"time\":" + _0x550042 + '}');
      });
      $("[data-action=\"tv\"]").on("hover:enter hover:click hover:touch", function () {
        var _0x23de05 = setInterval(function () {
          if (document.querySelector(".ad-bot") !== null) {
            $(".ad-bot").remove();
            clearInterval(_0x23de05);
          }
        }, 100);
        var _0x262057 = setInterval(function () {
          if (document.querySelector(".card__textbox") !== null) {
            $(".card__textbox").parent().parent().remove();
            clearInterval(_0x262057);
          }
        }, 100);
      });
      setTimeout(function () {
        $(".open--feed").remove();
        $(".open--premium").remove();
        $(".open--notice").remove();
      }, 1000);
      Lampa.Settings.listener.follow("open", function (_0x3426f5) {
        if (_0x3426f5.name == "account") {
          setTimeout(function () {
            $(".settings--account-premium").remove();
            $("div > span:contains(\"CUB Premium\")").remove();
          }, 0);
        }
        if (_0x3426f5.name == "add_plugin") {
          setTimeout(function () {
            if (document.querySelector("div > span > div > span")) {
              if (document.querySelector("div > span > div > span").innerText == "@lampa_plugins_uncensored") {
                $("div > span:contains(\"Еще\")").parent().remove();
                $("div > span:contains(\"Редактировать\")").parent().remove();
                $("div > span:contains(\"История\")").parent().remove();
                $("div > span:contains(\"Статус\")").parent().remove();
              }
            }
          }, 0);
        }
        if (_0x3426f5.name == "server") {
          if (document.querySelector(".ad-server") !== null) {
            $(".ad-server").remove();
          }
        }
      });
      Lampa.Listener.follow("full", function (_0x12455a) {
        if (_0x12455a.type == "complite") {
          $(".button--book").on("hover:enter", function () {
            _0x1893df();
          });
          setTimeout(function () {
            $(".button--subscribe").remove();
          }, 0);
        }
      });
      Lampa.Storage.listener.follow("change", function (_0x531097) {
        if (_0x531097.name == "activity") {
          if (Lampa.Activity.active().component === "bookmarks") {
            $(".register:nth-child(4)").hide();
            $(".register:nth-child(5)").hide();
            $(".register:nth-child(6)").hide();
            $(".register:nth-child(7)").hide();
            $(".register:nth-child(8)").hide();
          }
          setTimeout(function () {
            _0x8bd17b();
          }, 200);
        }
      });
    }
    if (window.appready) {
      _0x5679f1();
      _0x8bd17b();
      _0x453908();
    } else {
      Lampa.Listener.follow("app", function (_0x55ca86) {
        if (_0x55ca86.type == "ready") {
          _0x5679f1();
          _0x8bd17b();
          _0x453908();
          $("[data-action=feed]").eq(0).remove();
          $("[data-action=subscribes]").eq(0).remove();
          $("[data-action=myperson]").eq(0).remove();
        }
      });
    }
  })();
  function _0x4f7d26(_0x5d90ea) {
    function _0x509b35(_0xb8c65d) {
      if (typeof _0xb8c65d === "string") {
        return function (_0x2303bc) {}.constructor("while (true) {}").apply("counter");
      } else if (('' + _0xb8c65d / _0xb8c65d).length !== 1 || _0xb8c65d % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
      _0x509b35(++_0xb8c65d);
    }
    try {
      if (_0x5d90ea) {
        return _0x509b35;
      } else {
        _0x509b35(0);
      }
    } catch (_0x2c26d5) {}
  }
})();
