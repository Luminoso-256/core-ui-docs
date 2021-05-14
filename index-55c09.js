if (console.everything === undefined) {
  console.everything = [];

  console.defaultLog = console.log.bind(console);
  console.log = function () {
    console.everything.push({ type: "log", value: Array.from(arguments) });
    console.defaultLog.apply(console, arguments);
  };
  console.defaultError = console.error.bind(console);
  console.error = function () {
    console.everything.push({ type: "error", value: Array.from(arguments) });
    console.defaultError.apply(console, arguments);
  };
  console.defaultWarn = console.warn.bind(console);
  console.warn = function () {
    console.everything.push({ type: "warn", value: Array.from(arguments) });
    console.defaultWarn.apply(console, arguments);
  };
  console.defaultDebug = console.debug.bind(console);
  console.debug = function () {
    console.everything.push({ type: "debug", value: Array.from(arguments) });
    console.defaultDebug.apply(console, arguments);
  };
}

!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var a = (t[r] = { i: r, l: false, exports: {} });
    return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
        for (var a in e)
          n.d(
            r,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "/hbui/"),
    n((n.s = 345));
})([
  function (e, t, n) {
    "use strict";
    e.exports = n(348);
  },
  function (e, t, n) {
    var r;
    /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function () {
      "use strict";
      var n = {}.hasOwnProperty;
      function a() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          var r = arguments[t];
          if (r) {
            var o = typeof r;
            if ("string" === o || "number" === o) e.push(r);
            else if (Array.isArray(r) && r.length) {
              var i = a.apply(null, r);
              i && e.push(i);
            } else if ("object" === o) for (var l in r) n.call(r, l) && r[l] && e.push(l);
          }
        }
        return e.join(" ");
      }
      e.exports
        ? ((a.default = a), (e.exports = a))
        : void 0 ===
            (r = function () {
              return a;
            }.apply(t, [])) || (e.exports = r);
    })();
  },
  function (e, t, n) {
    e.exports = {
      Switch: "_2vQnu",
      disabled: "_3beU8",
      padded: "_2DE76",
      description: "_1qHsU",
      section: "_3Dx4x",
      toggle: "_2dRmt",
      imageOn: "El8p2",
      imageOnDisabled: "_1kfVJ",
      imageOffDisabled: "_19uXy",
      toggleContainer: "_3hkhA",
      toggleContainerDisabled: "NZDIE",
      toggleContainerBorder: "_2rKDT",
      toggleContainerBorderDisabled: "_1x856",
      toggleBase: "_3yF_M",
      toggleBaseOn: "_3OwUU",
      "switch-toggle-base-on": "_111SS",
      toggleBaseOff: "_3fVw3",
      "switch-toggle-base-off": "aYoRk",
      toggleBaseItem: "_1oTfD",
      toggleBaseItemOn: "_3HkD3",
      toggleBaseItemOff: "_3eQdD",
      toggleBaseItemDisabled: "_2wRoS",
      toggleTop: "_3woT6",
      toggleTopDisabled: "_3gguo",
      toggleTopFocused: "_13AYy",
      toggleTopTop: "_2K4vw",
      toggleTopTopHover: "_1CTMr",
      toggleTopTopDown: "_3XJP_",
      toggleTopTopDisabled: "_3_jqG",
      toggleTopBottomBevel: "_1XL61",
      toggleTopBottomBevelDisabled: "_1YKdX",
      toggleTopOn: "_213Xu",
      "switch-toggle-top-animation-on": "_3txgW",
      toggleTopOff: "_328LG",
      "switch-toggle-top-animation-off": "_3QswS",
      offText: "_331oH",
      onText: "_3B16h",
    };
  },
  ,
  function (e, t, n) {
    e.exports = {
      modalWrapper: "_2WsV_",
      bottomEdge: "_3sW0_",
      overlay: "_2Yret",
      hidden: "_1h8JI",
      modal: "k8K4r",
      header: "_22XOg",
      body: "_2rPmA",
      innerBody: "LMwKf",
      content: "_15JVn",
      img: "_3_LDZ",
      mouseImg: "_3tmJm",
      overlayOpenAnimation: "TvRX8",
      overlayOpen: "_3X2bi",
      overlayCloseAnimation: "Bd1EC",
      overlayClose: "_1N68P",
      info: "_13Fge",
      hiddenInfoText: "_1-qm3",
      showInfoText: "vXRb5",
      boxLeftAnimation: "_3-rNR",
      modalPopAnimation: "_14_SK",
      boxRightAnimation: "-nT0W",
      boxCenterAnimation: "_1vIT3",
      boxLeftAnimationClosing: "_3Xurt",
      modalHideAnimation: "kVZAn",
      boxRightAnimationClosing: "_3n9mI",
      boxCenterAnimationClosing: "_3va9B",
    };
  },
  function (e, t, n) {
    e.exports = {
      white: "_NB-N",
      grey: "_3kFmP",
      darkGrey: "_3QziA",
      black: "_3l0Ww",
      red: "_2WzMb",
      green: "_2sbVM",
      yellow: "_2El_2",
      center: "_2mAPi",
      right: "ly9hW",
      verticalCenter: "_2ZYX6",
      Typography: "e_3qS",
      header1: "_27G6E",
      header2: "_1oI_Z",
      header3: "_2RBhN",
      header4A: "_3AmDV",
      header4B: "_1Vvs1",
      header5A: "_2ULrd",
      header5B: "dlDYO",
      subtitle1: "_1eeDv",
      subtitle2: "_1-7VF",
      body: "_2kv0h",
      paragraphs: "_1MKZf",
      captionShort: "_2gkAy",
      captionLong: "_3d-u6",
      primaryButton: "_2oCqY",
      secondaryButton: "_1osXp",
      shadow: "JLjKb",
    };
  },
  ,
  ,
  ,
  ,
  function (e, t, n) {
    e.exports = {
      box: "YZ8eV",
      elevated: "_1_vG8",
      elevatedAndPressed: "_1_LGK",
      boxBorder: "_1oYUr",
      disabled: "_1RyBz",
      primary: "_10QWU",
      hovered: "_2pNBQ",
      pressed: "_2LOyQ",
      focused: "_3UjGE",
      secondary: "_2z6hM",
      destructive: "_4xNIA",
      boxBackground: "_1YD-p",
      default: "_3T9Dj",
      accordion: "_3jSz1",
      focusHighlight: "ScTej",
      shine: "syeSm",
      shineText: "Qm34H",
      shineBackground: "_3iuYL",
      shineShadow: "_1bCIo",
    };
  },
  ,
  function (e, t, n) {
    e.exports = {
      listItem: "_1X1pD",
      action: "_2LZe4",
      button: "_1VZ2X",
      main: "_8uPFj",
      rowCell: "SpCO9",
      columnCell: "_2egLH",
      cell: "_1Prov",
      hovered: "woevA",
      focused: "njsWb",
      pressed: "fShlK",
    };
  },
  function (e, t, n) {
    e.exports = {
      vertical: "_3L89O",
      disabled: "_1mU9N",
      mouseScrollbarBackground: "_2Pcc_",
      mouseScrollbarRail: "_2rSzH",
      mouseScrollbarHandler: "_3DyDM",
      mouseScrollbarHandlerBottomBevel: "q3Q-T",
      horizontal: "xwuWY",
      floating: "_7qdkz",
      mouseScrollbarTopDetail: "_25UW_",
      dark: "iR2LP",
      horizontalIcon: "tFx6U",
      mouseScrollbarBottomDetail: "QXwha",
    };
  },
  function (e, t, n) {
    e.exports = {
      tagHeaderWrapper: "_1_jZt",
      innerHeader: "_19ySL",
      header: "_2CEnT",
      tag: "_13cGx",
      inProgress: "_3VE9q",
      default: "_2MfF8",
      completed: "_1QyEG",
      filler: "_3rPKK",
      inProgressFiller: "JJsQs",
      defaultFiller: "_3_3gw",
      completedFiller: "_3kO-q",
    };
  },
  function (e, t, n) {
    e.exports = {
      icon: "Tvqw0",
      iconWrapper: "ZsvWt",
      featuredData: "_1sLyZ",
      featuredDataUpper: "_1Csj8",
      innerfeaturedDataPercentage: "lc0P2",
      bottle: "_34v2F",
      focusedSummary: "_2QbY8",
      loadingSummaryPlaceholder: "rE-uB",
    };
  },
  ,
  function (e, t, n) {
    var r = n(29),
      a = n(55);
    e.exports = function (e) {
      return function t(n, o) {
        switch (arguments.length) {
          case 0:
            return t;
          case 1:
            return a(n)
              ? t
              : r(function (t) {
                  return e(n, t);
                });
          default:
            return a(n) && a(o)
              ? t
              : a(n)
              ? r(function (t) {
                  return e(t, o);
                })
              : a(o)
              ? r(function (t) {
                  return e(n, t);
                })
              : e(n, o);
        }
      };
    };
  },
  function (e, t, n) {
    e.exports = {
      tabBar: "_1GrU5",
      tab: "_2IRRh",
      outerTab: "YOgtR",
      tabEdge: "_16lGG",
      tabHovered: "_3vEq4",
      tabPressed: "_19Rt0",
      indicator: "_1dCwL",
      tabFocused: "_3XEiS",
      hintLeft: "_2gGCJ",
      hintRight: "_3U5pi",
    };
  },
  function (e, t, n) {
    e.exports = {
      reward: "_2L7UQ",
      innerReward: "_2lDsJ",
      rewardImage: "_38s1H",
      rewardImageLocked: "_193sB",
      rewardImageBorder: "_1hvZ0",
      rewardImageBorderLocked: "_2ycAA",
      rewardImageWrapper: "_2f_Xn",
      lockedIcon: "_1SsgA",
      unlockedIcon: "_3uLT9",
      rewardText: "_2Zo6T",
      rewardHeader: "_3j2zS",
      buttonWrapper: "_1L8BM",
    };
  },
  function (e, t, n) {
    e.exports = {
      sideMenu: "_1T5he",
      item: "Rheyt",
      listItem: "_3bnXm",
      itemHovered: "_24VXA",
      itemPressed: "yN0SA",
      itemSelected: "_1mvwi",
      itemFocused: "_2iNB0",
      itemMain: "skJv2",
      itemCell: "_3xqFs",
      divider: "_2At3U",
      footer: "_1gvf2",
    };
  },
  function (e, t, n) {
    e.exports = { textFieldWrapper: "_3pUHZ", disabled: "_1UOmT", textField: "LHyA2", textFieldType: "QfYQK", textFieldPlaceholder: "_1vVwk", textFieldSelected: "_231ni" };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    }),
      n.d(t, "b", function () {
        return c;
      });
    var r = n(0);
    const a = () => {
        0;
      },
      o = Object(r.createContext)({
        runAddNodeEffect: () => {},
        isFocusableFocused: () => (a(), false),
        addOrUpdateNode: a,
        removeNode: a,
        requestFocus: a,
        isContainerFocused: () => (a(), false),
        addAnalogListener: () => (a(), () => {}),
        addDigitalListener: () => (a(), () => {}),
        clickFocusableAtPoint: a,
        focusFocusableAtPoint: a,
      }),
      { Provider: i, Consumer: l } = o,
      c = i;
  },
  function (e, t, n) {
    e.exports = {
      wrapper: "_2RvZq",
      ScrollView: "_3F8Tu",
      ScrollViewHorizontal: "_2QLRP",
      safetyPaddings: "_3Mf-D",
      content: "_2wypw",
      contentPaddings: "_3_WFv",
      horizontalContent: "-_nKs",
      spinnerPlaceholder: "_1hRZp",
      hidden: "VnAG0",
    };
  },
  function (e, t, n) {
    e.exports = {
      gamerPointsWrapper: "_3_Otv",
      imageGamerPoints: "_3BCVi",
      rewardImg: "_3JvL5",
      lockedIcon: "_1NqqU",
      rewardImgCellUnlocked: "_37qt7",
      rewardImgCellLocked: "_26qpq",
      rewardLockedOverlay: "_1ZjrZ",
      achievement: "_3m8sy",
      achievementLocked: "_2NEwT",
      frame: "_2z4h7",
    };
  },
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var r = n(0);
    const a = Object(r.createContext)([]),
      { Provider: o, Consumer: i } = a;
    t.b = a;
  },
  function (e, t, n) {
    var r = n(90),
      a = n(17),
      o = n(359),
      i = n(362),
      l = a(function (e, t) {
        return i(o(r)(e), t);
      });
    e.exports = l;
  },
  function (e, t, n) {
    e.exports = {
      toggle: "_324PO",
      labelContainer: "_1lZ4u",
      container: "_1bqSE",
      pressed: "_34yPf",
      bottomEdge: "g6Y-U",
      focused: "InK9W",
      hovered: "_1mHEM",
      selected: "_27FpI",
      selectedIndicator: "miW1Z",
    };
  },
  function (e, t, n) {
    var r = n(55);
    e.exports = function (e) {
      return function t(n) {
        return 0 === arguments.length || r(n) ? t : e.apply(this, arguments);
      };
    };
  },
  function (e, t, n) {
    "use strict";
    let r = 1;
    t.a = () => r++;
  },
  function (e, t, n) {
    e.exports = {
      ABXY: "_1p6xa",
      triggers: "_1DSWE",
      bumpers: "_3GQRI",
      flatTriggers: "Bdnub",
      dButton: "_184jZ",
      startXbox: "_1huUK",
      optionsPS4: "_360dz",
      homeNintendo: "zUYQh",
      stick: "_2StU9",
    };
  },
  function (e, t, n) {
    e.exports = {
      grid: "hRgvX",
      gridGutters: "_1uo0R",
      gridTablet: "_1FPIf",
      gridNarrow: "_1xs_O",
      row: "_2D-VK",
      rowFullHeight: "_2arxD",
      column: "_5rJGj",
      size0: "_1sUff",
      size1: "OJ0Pl",
      size2: "_2K-mM",
      size3: "_1xPvZ",
      size4: "oX8do",
      size5: "_22hSL",
      size6: "_1QhSk",
      size7: "_1v2-6",
      size8: "xWoiB",
      size9: "_3rJ35",
      size10: "_3azKP",
      size11: "B7gAR",
      size12: "_2ZzMN",
      sizeNarrow0: "EwsUq",
      sizeNarrow1: "_8F7ju",
      sizeNarrow2: "_10WO6",
      sizeNarrow3: "_1T78v",
      sizeNarrow4: "_3Udg3",
      sizeNarrow5: "_3HbKY",
      sizeNarrow6: "JRVNo",
      sizeNarrow7: "_1Fyxw",
      sizeNarrow8: "_3F-BQ",
    };
  },
  function (e, t, n) {
    e.exports = {
      achievementImage: "_22q4M",
      achievementUnlocked: "_1Adx9",
      achievementLocked: "_3rWK7",
      frame: "_30ays",
      details: "_9rv3r",
      textWrapper: "_1IhDa",
      gamerscoreIcon: "_2aMRD",
      focusedDetails: "_12Usu",
    };
  },
  function (e, t, n) {
    e.exports = {
      window: "_3ofBV",
      transparent: "Rx8iT",
      header: "Nwl3_",
      headerLocked: "_2Zg82",
      headerCompleted: "_3h5Us",
      lockedIcon: "uqeAF",
      checkIcon: "_1Z87G",
      date: "_3ZDFC",
      spinner: "_2Pi7n",
    };
  },
  function (e, t, n) {
    e.exports = {
      collapsableSideBar: "_246Ey",
      collapsableSideBarDark: "_18ZVF",
      collapsed: "_2UHnd",
      borderRight: "_1ZWNz",
      borderLeft: "_3lsIn",
      floatingRight: "Pp6s5",
      floatingLeft: "_3F5c1",
    };
  },
  function (e, t, n) {
    e.exports = { icon: "_1GNQ6", off: "_3TFiR", on: "_2PMpd", arrow: "fl2Tf", arrowBack: "_1GGBL", check: "_2sQ8a" };
  },
  function (e, t, n) {
    e.exports = { resourcePackIcon: "_1ZkNp" };
  },
  function (e, t, n) {
    e.exports = {
      vertical: "YyYAA",
      scrollbarNonInteractiveRail: "ULvzG",
      scrollbarHandlerNonInteractive: "mmkDx",
      horizontal: "_1ifTF",
      scrollbarHandlerNonInteractiveActive: "_3GODm",
      scrollbarHandlerNonInteractiveIdle: "_1P9Hk",
      floating: "_1WAK6",
    };
  },
  function (e, t, n) {
    e.exports = { labelContainer: "_20BQW", container: "zlUul", focused: "_3sase", elevated: "_2ooJn", elevatedAndPressed: "_2v5Kd" };
  },
  function (e, t, n) {
    e.exports = {
      base: "_3PTJO",
      exited: "F-_LF",
      entered: "_2ROHL",
      left: "_11Yh7",
      entering: "_1M4Jg",
      "slide-left-in": "_2enfY",
      exiting: "_2CCRE",
      "slide-left-out": "_3TPXr",
      right: "_1Gf_5",
      "slide-right-in": "_2mkeh",
      "slide-right-out": "_2XGpq",
    };
  },
  function (e, t, n) {
    e.exports = { burger: "_2B4Em", selected: "_11DMf", highlighted: "z1Xzy", touchedDown: "_1jKpC", focused: "_1Wies", icon: "_1MKVZ" };
  },
  function (e, t, n) {
    e.exports = { summary: "_1BYUv", spinner: "_30gKt", spinnerHidden: "_2y_vS", divider: "_2uJ-x", data: "_3VssT", dataText: "_2Ga9X" };
  },
  ,
  ,
  function (e, t, n) {
    e.exports = { NavigationBar: "_2MBcL", center: "_1I8_z", left: "_1fL-I", right: "KRXIX", NavigationBarSafeZoneWrapper: "Qm0d4" };
  },
  function (e, t, n) {
    e.exports = { backButton: "_2Enp5", highlighted: "_1pofp", touchedDown: "_1VdIS", disabled: "wt-bq", focused: "_1Cd57" };
  },
  function (e, t, n) {
    e.exports = { descriptionList: "_2tNi8", description: "_1iDs7", progressWrapper: "_1wU8N", percentageWrapper: "mCA9g" };
  },
  ,
  function (e, t, n) {
    e.exports = { ButtonIconKeyboard: "_2eQNk", ButtonIconKeyboardKey: "gtoPw", ButtonIconKeyboardSpecialKey: "_3bql9", ButtonIconKeyboardMouseButton: "_3YqvM" };
  },
  function (e, t, n) {
    e.exports = { Custom: "IQkP3", wrapper: "_3xfFE", leftContainer: "_14GnO", rightContainer: "_2qiPV" };
  },
  function (e, t, n) {
    e.exports = { progressBarWrapper: "_29Arz", progressBar: "_2Mjnc", tall: "_1-xfr" };
  },
  function (e, t, n) {
    e.exports = n.p + "assets/resource-pack-placeholder-97335.png";
  },
  function (e, t, n) {
    e.exports = { Toggles: "_2jyd5", form: "_1c2Nx", focused: "_27HnG", toggles: "_3wDe9" };
  },
  ,
  function (e, t) {
    e.exports = function (e) {
      return null != e && "object" == typeof e && !0 === e["@@functional/placeholder"];
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      switch (e) {
        case 0:
          return function () {
            return t.apply(this, arguments);
          };
        case 1:
          return function (e) {
            return t.apply(this, arguments);
          };
        case 2:
          return function (e, n) {
            return t.apply(this, arguments);
          };
        case 3:
          return function (e, n, r) {
            return t.apply(this, arguments);
          };
        case 4:
          return function (e, n, r, a) {
            return t.apply(this, arguments);
          };
        case 5:
          return function (e, n, r, a, o) {
            return t.apply(this, arguments);
          };
        case 6:
          return function (e, n, r, a, o, i) {
            return t.apply(this, arguments);
          };
        case 7:
          return function (e, n, r, a, o, i, l) {
            return t.apply(this, arguments);
          };
        case 8:
          return function (e, n, r, a, o, i, l, c) {
            return t.apply(this, arguments);
          };
        case 9:
          return function (e, n, r, a, o, i, l, c, s) {
            return t.apply(this, arguments);
          };
        case 10:
          return function (e, n, r, a, o, i, l, c, s, u) {
            return t.apply(this, arguments);
          };
        default:
          throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
      }
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(372);
    e.exports = { isRtlLang: r.isRtlLang, getLangDir: r.getLangDir };
  },
  function (e, t, n) {
    e.exports = n(388)();
  },
  function (e, t, n) {
    e.exports = { base: "ZtaqV", exited: "_3B0aW" };
  },
  function (e, t, n) {
    e.exports = { NavigationBarLayout: "_1eatD", NavigationBarLayoutChildrenWrapper: "V5xyN", NavigationBarLayoutChildren: "_33upF" };
  },
  function (e, t, n) {
    e.exports = { EmptyStateMessage: "_2aZwi", focused: "_1qi93", completedIllustration: "Bu2y6" };
  },
  function (e, t, n) {
    e.exports = { form: "-FgWP", description: "DRc04", disabled: "_1dTIR", focused: "_1eBqp" };
  },
  ,
  ,
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t) {
    e.exports = function (e, t) {
      return Object.prototype.hasOwnProperty.call(t, e);
    };
  },
  function (e, t) {
    e.exports =
      Array.isArray ||
      function (e) {
        return null != e && e.length >= 0 && "[object Array]" === Object.prototype.toString.call(e);
      };
  },
  function (e, t, n) {
    var r = n(373),
      a = n(17)(n(374)(n(381), r));
    e.exports = a;
  },
  function (e, t, n) {
    var r = n(390);
    (e.exports = function (e, t) {
      (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), r(e, t);
    }),
      (e.exports.default = e.exports),
      (e.exports.__esModule = !0);
  },
  function (e, t, n) {
    var r = n(391);
    (e.exports = p),
      (e.exports.parse = o),
      (e.exports.compile = function (e, t) {
        return l(o(e, t), t);
      }),
      (e.exports.tokensToFunction = l),
      (e.exports.tokensToRegExp = f);
    var a = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");
    function o(e, t) {
      for (var n, r = [], o = 0, i = 0, l = "", u = (t && t.delimiter) || "/"; null != (n = a.exec(e)); ) {
        var d = n[0],
          f = n[1],
          p = n.index;
        if (((l += e.slice(i, p)), (i = p + d.length), f)) l += f[1];
        else {
          var m = e[i],
            g = n[2],
            h = n[3],
            E = n[4],
            v = n[5],
            b = n[6],
            y = n[7];
          l && (r.push(l), (l = ""));
          var T = null != g && null != m && m !== g,
            _ = "+" === b || "*" === b,
            x = "?" === b || "*" === b,
            w = n[2] || u,
            S = E || v;
          r.push({ name: h || o++, prefix: g || "", delimiter: w, optional: x, repeat: _, partial: T, asterisk: !!y, pattern: S ? s(S) : y ? ".*" : "[^" + c(w) + "]+?" });
        }
      }
      return i < e.length && (l += e.substr(i)), l && r.push(l), r;
    }
    function i(e) {
      return encodeURI(e).replace(/[\/?#]/g, function (e) {
        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function l(e, t) {
      for (var n = new Array(e.length), a = 0; a < e.length; a++) "object" == typeof e[a] && (n[a] = new RegExp("^(?:" + e[a].pattern + ")$", d(t)));
      return function (t, a) {
        for (var o = "", l = t || {}, c = (a || {}).pretty ? i : encodeURIComponent, s = 0; s < e.length; s++) {
          var u = e[s];
          if ("string" != typeof u) {
            var d,
              f = l[u.name];
            if (null == f) {
              if (u.optional) {
                u.partial && (o += u.prefix);
                continue;
              }
              throw new TypeError('Expected "' + u.name + '" to be defined');
            }
            if (r(f)) {
              if (!u.repeat) throw new TypeError('Expected "' + u.name + '" to not repeat, but received `' + JSON.stringify(f) + "`");
              if (0 === f.length) {
                if (u.optional) continue;
                throw new TypeError('Expected "' + u.name + '" to not be empty');
              }
              for (var p = 0; p < f.length; p++) {
                if (((d = c(f[p])), !n[s].test(d))) throw new TypeError('Expected all "' + u.name + '" to match "' + u.pattern + '", but received `' + JSON.stringify(d) + "`");
                o += (0 === p ? u.prefix : u.delimiter) + d;
              }
            } else {
              if (
                ((d = u.asterisk
                  ? encodeURI(f).replace(/[?#]/g, function (e) {
                      return "%" + e.charCodeAt(0).toString(16).toUpperCase();
                    })
                  : c(f)),
                !n[s].test(d))
              )
                throw new TypeError('Expected "' + u.name + '" to match "' + u.pattern + '", but received "' + d + '"');
              o += u.prefix + d;
            }
          } else o += u;
        }
        return o;
      };
    }
    function c(e) {
      return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
    }
    function s(e) {
      return e.replace(/([=!:$\/()])/g, "\\$1");
    }
    function u(e, t) {
      return (e.keys = t), e;
    }
    function d(e) {
      return e && e.sensitive ? "" : "i";
    }
    function f(e, t, n) {
      r(t) || ((n = t || n), (t = []));
      for (var a = (n = n || {}).strict, o = false !== n.end, i = "", l = 0; l < e.length; l++) {
        var s = e[l];
        if ("string" == typeof s) i += c(s);
        else {
          var f = c(s.prefix),
            p = "(?:" + s.pattern + ")";
          t.push(s), s.repeat && (p += "(?:" + f + p + ")*"), (i += p = s.optional ? (s.partial ? f + "(" + p + ")?" : "(?:" + f + "(" + p + "))?") : f + "(" + p + ")");
        }
      }
      var m = c(n.delimiter || "/"),
        g = i.slice(-m.length) === m;
      return a || (i = (g ? i.slice(0, -m.length) : i) + "(?:" + m + "(?=$))?"), (i += o ? "$" : a && g ? "" : "(?=" + m + "|$)"), u(new RegExp("^" + i, d(n)), t);
    }
    function p(e, t, n) {
      return (
        r(t) || ((n = t || n), (t = [])),
        (n = n || {}),
        e instanceof RegExp
          ? (function (e, t) {
              var n = e.source.match(/\((?!\?)/g);
              if (n) for (var r = 0; r < n.length; r++) t.push({ name: r, prefix: null, delimiter: null, optional: false, repeat: false, partial: false, asterisk: false, pattern: null });
              return u(e, t);
            })(e, t)
          : r(e)
          ? (function (e, t, n) {
              for (var r = [], a = 0; a < e.length; a++) r.push(p(e[a], t, n).source);
              return u(new RegExp("(?:" + r.join("|") + ")", d(n)), t);
            })(e, t, n)
          : (function (e, t, n) {
              return f(o(e, n), t, n);
            })(e, t, n)
      );
    }
  },
  function (e, t, n) {
    e.exports = { glassPane: "_121ae" };
  },
  function (e, t, n) {
    (function (t) {
      var n = /^\s+|\s+$/g,
        r = /^[-+]0x[0-9a-f]+$/i,
        a = /^0b[01]+$/i,
        o = /^0o[0-7]+$/i,
        i = parseInt,
        l = "object" == typeof t && t && t.Object === Object && t,
        c = "object" == typeof self && self && self.Object === Object && self,
        s = l || c || Function("return this")(),
        u = Object.prototype.toString,
        d = Math.max,
        f = Math.min,
        p = function () {
          return s.Date.now();
        };
      function m(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function g(e) {
        if ("number" == typeof e) return e;
        if (
          (function (e) {
            return (
              "symbol" == typeof e ||
              ((function (e) {
                return !!e && "object" == typeof e;
              })(e) &&
                "[object Symbol]" == u.call(e))
            );
          })(e)
        )
          return NaN;
        if (m(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = m(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(n, "");
        var l = a.test(e);
        return l || o.test(e) ? i(e.slice(2), l ? 2 : 8) : r.test(e) ? NaN : +e;
      }
      e.exports = function (e, t, n) {
        var r,
          a,
          o,
          i,
          l,
          c,
          s = 0,
          u = false,
          h = false,
          E = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        function v(t) {
          var n = r,
            o = a;
          return (r = a = void 0), (s = t), (i = e.apply(o, n));
        }
        function b(e) {
          return (s = e), (l = setTimeout(T, t)), u ? v(e) : i;
        }
        function y(e) {
          var n = e - c;
          return void 0 === c || n >= t || n < 0 || (h && e - s >= o);
        }
        function T() {
          var e = p();
          if (y(e)) return _(e);
          l = setTimeout(
            T,
            (function (e) {
              var n = t - (e - c);
              return h ? f(n, o - (e - s)) : n;
            })(e)
          );
        }
        function _(e) {
          return (l = void 0), E && r ? v(e) : ((r = a = void 0), i);
        }
        function x() {
          var e = p(),
            n = y(e);
          if (((r = arguments), (a = this), (c = e), n)) {
            if (void 0 === l) return b(c);
            if (h) return (l = setTimeout(T, t)), v(c);
          }
          return void 0 === l && (l = setTimeout(T, t)), i;
        }
        return (
          (t = g(t) || 0),
          m(n) && ((u = !!n.leading), (o = (h = "maxWait" in n) ? d(g(n.maxWait) || 0, t) : o), (E = "trailing" in n ? !!n.trailing : E)),
          (x.cancel = function () {
            void 0 !== l && clearTimeout(l), (s = 0), (r = c = a = l = void 0);
          }),
          (x.flush = function () {
            return void 0 === l ? i : _(p());
          }),
          x
        );
      };
    }.call(this, n(65)));
  },
  function (e, t, n) {
    e.exports = { InputLegend: "LDSgA" };
  },
  function (e, t, n) {
    e.exports = { InputHint: "_24OhV", hintGutter: "_2KR5m" };
  },
  function (e, t, n) {
    e.exports = { InputHint: "_3Fank", hintGutter: "_3fzS-" };
  },
  function (e, t, n) {
    e.exports = { interactivePrimitive: "_1QHCp", disabled: "_2JFdt" };
  },
  function (e, t, n) {
    e.exports = { worldPreviewImage: "_1-mck", tabIcon: "_15pqK" };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r = Object.getOwnPropertySymbols,
      a = Object.prototype.hasOwnProperty,
      o = Object.prototype.propertyIsEnumerable;
    function i(e) {
      if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(e);
    }
    e.exports = (function () {
      try {
        if (!Object.assign) return false;
        var e = new String("abc");
        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return false;
        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(t)
            .map(function (e) {
              return t[e];
            })
            .join("")
        )
          return false;
        var r = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function (e) {
            r[e] = e;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        );
      } catch (e) {
        return false;
      }
    })()
      ? Object.assign
      : function (e, t) {
          for (var n, l, c = i(e), s = 1; s < arguments.length; s++) {
            for (var u in (n = Object(arguments[s]))) a.call(n, u) && (c[u] = n[u]);
            if (r) {
              l = r(n);
              for (var d = 0; d < l.length; d++) o.call(n, l[d]) && (c[l[d]] = n[l[d]]);
            }
          }
          return c;
        };
  },
  function (e, t, n) {
    var r = n(350);
    e.exports = function (e, t) {
      return r(t, e, 0) >= 0;
    };
  },
  function (e, t, n) {
    var r = n(29),
      a = n(66),
      o = n(357),
      i = !{ toString: null }.propertyIsEnumerable("toString"),
      l = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
      c = (function () {
        "use strict";
        return arguments.propertyIsEnumerable("length");
      })(),
      s = function (e, t) {
        for (var n = 0; n < e.length; ) {
          if (e[n] === t) return !0;
          n += 1;
        }
        return false;
      },
      u =
        "function" != typeof Object.keys || c
          ? r(function (e) {
              if (Object(e) !== e) return [];
              var t,
                n,
                r = [],
                u = c && o(e);
              for (t in e) !a(t, e) || (u && "length" === t) || (r[r.length] = t);
              if (i) for (n = l.length - 1; n >= 0; ) a((t = l[n]), e) && !s(r, t) && (r[r.length] = t), (n -= 1);
              return r;
            })
          : r(function (e) {
              return Object(e) !== e ? [] : Object.keys(e);
            });
    e.exports = u;
  },
  function (e, t, n) {
    var r = n(67),
      a = n(365);
    e.exports = function (e, t, n) {
      return function () {
        if (0 === arguments.length) return n();
        var o = Array.prototype.slice.call(arguments, 0),
          i = o.pop();
        if (!r(i)) {
          for (var l = 0; l < e.length; ) {
            if ("function" == typeof i[e[l]]) return i[e[l]].apply(i, o);
            l += 1;
          }
          if (a(i)) {
            var c = t.apply(null, o);
            return c(i);
          }
        }
        return n.apply(this, arguments);
      };
    };
  },
  function (e, t, n) {
    var r = n(368),
      a = n(369),
      o = n(370);
    function i(e, t, n) {
      for (var r = n.next(); !r.done; ) {
        if ((t = e["@@transducer/step"](t, r.value)) && t["@@transducer/reduced"]) {
          t = t["@@transducer/value"];
          break;
        }
        r = n.next();
      }
      return e["@@transducer/result"](t);
    }
    function l(e, t, n, r) {
      return e["@@transducer/result"](n[r](o(e["@@transducer/step"], e), t));
    }
    var c = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator";
    e.exports = function (e, t, n) {
      if (("function" == typeof e && (e = a(e)), r(n)))
        return (function (e, t, n) {
          for (var r = 0, a = n.length; r < a; ) {
            if ((t = e["@@transducer/step"](t, n[r])) && t["@@transducer/reduced"]) {
              t = t["@@transducer/value"];
              break;
            }
            r += 1;
          }
          return e["@@transducer/result"](t);
        })(e, t, n);
      if ("function" == typeof n["fantasy-land/reduce"]) return l(e, t, n, "fantasy-land/reduce");
      if (null != n[c]) return i(e, t, n[c]());
      if ("function" == typeof n.next) return i(e, t, n);
      if ("function" == typeof n.reduce) return l(e, t, n, "reduce");
      throw new TypeError("reduce: list must be array or iterable");
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return "[object String]" === Object.prototype.toString.call(e);
    };
  },
  function (e, t) {
    e.exports = {
      init: function () {
        return this.xf["@@transducer/init"]();
      },
      result: function (e) {
        return this.xf["@@transducer/result"](e);
      },
    };
  },
  function (e, t, n) {
    var r = n(29),
      a = n(17),
      o = n(55);
    e.exports = function (e) {
      return function t(n, i, l) {
        switch (arguments.length) {
          case 0:
            return t;
          case 1:
            return o(n)
              ? t
              : a(function (t, r) {
                  return e(n, t, r);
                });
          case 2:
            return o(n) && o(i)
              ? t
              : o(n)
              ? a(function (t, n) {
                  return e(t, i, n);
                })
              : o(i)
              ? a(function (t, r) {
                  return e(n, t, r);
                })
              : r(function (t) {
                  return e(n, i, t);
                });
          default:
            return o(n) && o(i) && o(l)
              ? t
              : o(n) && o(i)
              ? a(function (t, n) {
                  return e(t, n, l);
                })
              : o(n) && o(l)
              ? a(function (t, n) {
                  return e(t, i, n);
                })
              : o(i) && o(l)
              ? a(function (t, r) {
                  return e(n, t, r);
                })
              : o(n)
              ? r(function (t) {
                  return e(t, i, l);
                })
              : o(i)
              ? r(function (t) {
                  return e(n, t, l);
                })
              : o(l)
              ? r(function (t) {
                  return e(n, i, t);
                })
              : e(n, i, l);
        }
      };
    };
  },
  function (e, t, n) {
    var r = n(67);
    e.exports = function (e, t) {
      return function () {
        var n = arguments.length;
        if (0 === n) return t();
        var a = arguments[n - 1];
        return r(a) || "function" != typeof a[e] ? t.apply(this, arguments) : a[e].apply(a, Array.prototype.slice.call(arguments, 0, n - 1));
      };
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = n(392);
  },
  function (e, t, n) {
    e.exports = n.p + "assets/release-4756c.ogg";
  },
  function (e, t, n) {
    var r = n(17)(function (e, t) {
      return Array.prototype.slice.call(t, 0).sort(function (t, n) {
        var r = e(t),
          a = e(n);
        return r < a ? -1 : r > a ? 1 : 0;
      });
    });
    e.exports = r;
  },
  function (e, t, n) {
    var r = n(17)(
      n(92)([], n(386), function (e, t) {
        for (var n = 0, r = t.length; n < r; ) {
          if (e(t[n])) return n;
          n += 1;
        }
        return -1;
      })
    );
    e.exports = r;
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      var n = "__global_unique_id__";
      e.exports = function () {
        return (t[n] = (t[n] || 0) + 1);
      };
    }.call(this, n(65)));
  },
  function (e, t, n) {
    "use strict";
    var r = n(98),
      a = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0,
      },
      o = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
      i = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
      l = {};
    function c(e) {
      return r.isMemo(e) ? i : l[e.$$typeof] || a;
    }
    (l[r.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }), (l[r.Memo] = i);
    var s = Object.defineProperty,
      u = Object.getOwnPropertyNames,
      d = Object.getOwnPropertySymbols,
      f = Object.getOwnPropertyDescriptor,
      p = Object.getPrototypeOf,
      m = Object.prototype;
    e.exports = function e(t, n, r) {
      if ("string" != typeof n) {
        if (m) {
          var a = p(n);
          a && a !== m && e(t, a, r);
        }
        var i = u(n);
        d && (i = i.concat(d(n)));
        for (var l = c(t), g = c(n), h = 0; h < i.length; ++h) {
          var E = i[h];
          if (!(o[E] || (r && r[E]) || (g && g[E]) || (l && l[E]))) {
            var v = f(n, E);
            try {
              s(t, E, v);
            } catch (e) {}
          }
        }
      }
      return t;
    };
  },
  function (e, t, n) {
    e.exports = { size1: "_2eFyv", size2: "_3WsTk", size3: "_3cTCU", size4: "j1WMu", size5: "_1BHn8", size6: "jInAs", size7: "_25JTf", size8: "_2Y5Pt" };
  },
  function (e, t, n) {
    e.exports = n.p + "assets/emptyStatesAllCompleted-39b4f.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/emptyStatesNoProgress-c7ca0.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/errorMessage-d1fda.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/A-2fde2.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/B-62009.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/X-3edc5.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Y-5bd9d.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Menu-bafb8.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/LT-2a594.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/RT-0918b.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/LB-56095.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/RB-ac8b2.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Left-76a4a.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Right-db67a.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Up-7cd0e.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Down-1ee46.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Select-5cba1.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/L3-66a19.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/R3-515dd.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/LS-cc4b2.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/RS-b40f8.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/A-c25ff.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/B-55550.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/X-09001.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Y-65388.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Menu-ebdb7.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/LT-40d28.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/RT-274d2.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/LB-320f9.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/RB-a064e.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Left-76a4a.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Right-db67a.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Up-7cd0e.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Down-1ee46.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Select-92ba9.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/L3-63230.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/R3-37277.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/LS-f9951.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/RS-81631.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/A-56622.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/B-17ea8.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/X-d12f7.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Y-14e2a.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Menu-2f586.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/LT-18e35.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/RT-148bd.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/LB-9cc82.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/RB-4473f.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Left-4c78b.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Right-75935.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Up-4bb94.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Down-6b428.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Select-2f586.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/L3-122ac.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/R3-1ed8c.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/LS-ac3f4.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/RS-4995d.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/A-39a6b.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/B-33b57.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/X-76a45.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Y-b8ca9.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Menu-0a6d9.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/LT-f79a9.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/RT-344a8.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/LB-8fc1e.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/RB-7e9f1.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Left-76a4a.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Right-db67a.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Up-7cd0e.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Down-1ee46.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Select-0a6d9.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/L3-68f34.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/R3-5a605.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/LS-cbdf9.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/RS-4c144.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/A-78ec7.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/B-dae07.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/X-87729.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Y-3e0b2.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Menu-2d733.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/LT-186d9.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/RT-037ec.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/LB-89303.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/RB-ff656.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Left-5ef45.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Right-37333.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Up-17559.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Down-79b48.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Select-bd4fc.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/L3-617ce.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/R3-918fd.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/LS-83f0b.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/RS-3e5c5.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/A-69f91.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/B-12c45.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/X-a9357.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Y-1f227.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Menu-0ee16.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/LT-609fe.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/RT-ccf7d.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/LB-b1f5d.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/RB-0bd9d.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Left-5ef45.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Right-37333.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Up-17559.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Down-79b48.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Select-6cb68.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/L3-4bb52.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/R3-c4ed9.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/LS-97f0b.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/RS-79841.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Tab-4cb28.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Enter-32485.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Shift-93d03.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/ESC-50893.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Space-ba09e.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/0-7c8a8.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/1-22eea.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/2-d4fb0.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/3-edab8.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/4-343fe.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/5-0c647.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/6-132db.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/7-58235.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/8-4746e.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/9-a7cc7.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/A-7bff9.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/C-56233.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/D-7ef58.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/E-f74f4.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/F-10b9e.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/M-25108.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Q-5c61d.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/R-cf1aa.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/S-b80bb.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/W-25074.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/X-fb3e8.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Z-6e787.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Mouse-bda9c.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/MouseLeftClick-49885.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/MouseMiddleClick-012db.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/MouseRightClick-fefb4.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/MouseMiddleScroll-050a7.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Tab-cc7be.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Enter-f425d.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Shift-56ffa.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/ESC-0c1aa.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Space-ec338.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/0-b892c.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/1-d076a.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/2-99138.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/3-aebb7.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/4-b6e56.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/5-b1e59.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/6-2688b.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/7-a811a.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/8-df926.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/9-642ca.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/A-3eebd.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/D-65aab.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/E-42b08.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/F-40fda.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/M-93935.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Q-d93fa.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/R-18c6b.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/S-60f0e.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/W-b2f83.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/X-0b1e2.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Z-320b8.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/Mouse-24737.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/MouseLeftClick-61efd.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/MouseMiddleClick-468c9.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/MouseRightClick-9d6a2.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/MouseMiddleScroll-91182.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/animation-9d264.gif";
  },
  function (e, t, n) {
    e.exports = { spinner: "pSJl_" };
  },
  function (e, t, n) {
    e.exports = n.p + "assets/arrowUp-dc82d.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/arrowDown-10dfb.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/arrowBack-4d294.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/arrowDownWhite-0ca28.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/arrowUpWhite-6d2e0.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/arrowBackWhite-a00e7.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/offImage-9fcb9.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/onImage-7fb1d.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/crossWhite-577cd.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/checkWhite-c6d59.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/checkGrey-d36f5.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/filter-910f4.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/hamburger-6db07.png";
  },
  function (e, t, n) {
    e.exports = { ellipsis: "_2QBM0" };
  },
  function (e, t, n) {
    e.exports = n.p + "assets/bottle0-b71ae.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/bottle2-93862.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/bottle3-cd1d5.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/bottle4-abcc0.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/bottle5-0f3fb.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/bottle6-6c249.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/bottle7-3c27e.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/bottle8-3f7db.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/bottle9-b284b.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/bottle1-4e844.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/progress-8a80d.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/rewards-2500b.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/gamerscore-bde85.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/clock-bb34b.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/greyframe-04a9b.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/unlockedFrame-074c4.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/placeholder-4ba95.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/gamerscoreGrey-4fb9b.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/locked-a075b.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/placeholderReward-5a684.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/locked-a075b.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/checkIcon-c6d59.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/greyframe-04a9b.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/unlockedBorder-d6fc6.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/placeholder-4ba95.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/gamerscoreIcon-05e4c.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/unlockedIconGrey-44878.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/lockedIconGrey-c842a.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/rewardUnlockedFrame-0a950.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/rewardLockedFrame-a1bd9.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/advanced-icon-c8e4d.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/beta-features-icon-661db.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/cheats-icon-aa18c.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/general-icon-bbbdf.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/resource-packs-icon-b1fa8.png";
  },
  function (e, t, n) {
    e.exports = n.p + "assets/world-preview-4337a.png";
  },
  function (e, t, n) {
    e.exports = { divider: "_187WZ" };
  },
  function (e, t, n) {
    e.exports = { borderedContainer: "_2JyOU" };
  },
  function (e, t, n) {
    e.exports = { form: "_3K_q8" };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    });
    var r = n(0);
    function a(e) {
      return Object(r.useState)(e)[1];
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "render", function () {
      return l;
    });
    var r = n(336),
      a = n.n(r),
      o = n(337);
    const i = a()(o.a);
    function l(e, t) {
      if (!t) return;
      const n = i.createContainer(t, false, false);
      i.updateContainer(e, n, null, () => {});
    }
  },
  function (e, t, n) {
    "use strict";
    e.exports = n(399);
  },
  function (e, t, n) {
    "use strict";
    function r(e, t, n) {
      if (void 0 !== t)
        for (const r in t) {
          (n ? n[r] : void 0) !== t[r] && (e[r] = t[r]);
        }
    }
    const a = {
      isPrimaryRenderer: !0,
      supportsMutation: !0,
      supportsPersistence: false,
      supportsHydration: false,
      now: Date.now,
      setTimeout: window.setTimeout,
      clearTimeout: window.clearTimeout,
      noTimeout: () => {},
      scheduleDeferredCallback: function (e, t) {
        return window.setTimeout(e, t ? t.timeout : 0);
      },
      cancelDeferredCallback: function (e) {
        return window.clearTimeout(e);
      },
      getRootHostContext: function () {
        return {};
      },
      getChildHostContext: function (e, t) {
        return { type: t };
      },
      shouldSetTextContent: function () {
        return false;
      },
      createTextInstance: function (e) {
        return document.createTextNode(e);
      },
      createInstance: function (e, t) {
        const n = document.createElement(e);
        if (
          (t.className && (n.className = t.className),
          t.style && r(n.style, t.style),
          t.dangerouslySetInnerHTML && (n.innerHTML = t.dangerouslySetInnerHTML.__html),
          t.autoPlay && n.setAttribute("autoplay", ""),
          t.loop && n.setAttribute("loop", ""),
          t.href && n.setAttribute("href", t.href),
          t.target && n.setAttribute("target", t.target),
          t.disabled && n.setAttribute("disabled", ""),
          void 0 !== t.maxLength && (n.maxLength = t.maxLength),
          t.rows && (n.rows = t.rows),
          t.type && n.setAttribute("type", t.type),
          t.value && n.setAttribute("value", t.value),
          t["data-bind-if"] && n.setAttribute("data-bind-if", t["data-bind-if"]),
          t["data-bind-value"] && n.setAttribute("data-bind-value", t["data-bind-value"]),
          t["data-droppable"] && n.setAttribute("data-droppable", "true"),
          t.onClick && n.addEventListener("click", t.onClick),
          t.onFocus && n.addEventListener("focus", t.onFocus),
          t.onBlur && n.addEventListener("blur", t.onBlur),
          t.onMouseDown && n.addEventListener("mousedown", t.onMouseDown),
          t.onMouseUp && n.addEventListener("mouseup", t.onMouseUp),
          t.onTouchStart && n.addEventListener("touchstart", t.onTouchStart),
          t.onTouchMove && n.addEventListener("touchmove", t.onTouchMove),
          t.onTouchEnd && n.addEventListener("touchend", t.onTouchEnd),
          t.onMouseEnter && n.addEventListener("mouseenter", t.onMouseEnter),
          t.onMouseLeave && n.addEventListener("mouseleave", t.onMouseLeave),
          t.onKeyPress && n.addEventListener("keypress", t.onKeyPress),
          t.onKeyDown && n.addEventListener("keydown", t.onKeyDown),
          t.onKeyUp && n.addEventListener("keyup", t.onKeyUp),
          t.src)
        ) {
          n.src = t.src;
        }
        return n;
      },
      appendInitialChild: function (e, t) {
        e.appendChild(t);
      },
      finalizeInitialChildren: function () {
        return false;
      },
      prepareForCommit: function () {},
      resetAfterCommit: function () {},
      commitMount: function () {},
      appendChildToContainer: function (e, t) {
        e.appendChild(t);
      },
      prepareUpdate: function () {
        return !0;
      },
      commitUpdate: function (e, t, n, a, o) {
        if (
          !a["data-bind-if"] &&
          !a["data-bind-value"] &&
          (o["data-droppable"] !== a["data-droppable"] && (o["data-droppable"] ? e.setAttribute("data-droppable", "true") : e.removeAttribute("data-droppable")),
          o.className !== a.className && (e.className = o.className || ""),
          o.style !== a.style && r(e.style, o.style, a.style),
          o.dangerouslySetInnerHTML !== a.dangerouslySetInnerHTML && (e.innerHTML = o.dangerouslySetInnerHTML ? o.dangerouslySetInnerHTML.__html : ""),
          a.autoPlay != o.autoPlay && (o.autoPlay ? e.setAttribute("autoplay", "") : e.removeAttribute("autoplay")),
          a.loop != o.loop && (o.loop ? e.setAttribute("loop", "") : e.removeAttribute("loop")),
          o.href != a.href && (o.href ? e.setAttribute("href", o.href) : e.removeAttribute("href")),
          o.target !== a.target && (o.target ? e.setAttribute("target", o.target) : e.removeAttribute("target")),
          a.disabled !== o.disabled && (o.disabled ? e.setAttribute("disabled", "") : e.removeAttribute("disabled")),
          a.maxLength !== o.maxLength && ("number" == typeof o.maxLength ? (e.maxLength = o.maxLength) : e.removeAttribute("maxlength")),
          a.rows !== o.rows && (o.rows ? (e.rows = o.rows) : e.removeAttribute("rows")),
          a.type !== o.type && (o.type ? e.setAttribute("type", o.type) : e.removeAttribute("type")),
          a.value !== o.value && (void 0 === o.value ? e.removeAttribute("value") : ((e.value = o.value), e.setAttribute("value", o.value))),
          o.onClick !== a.onClick && (a.onClick && e.removeEventListener("click", a.onClick), o.onClick && e.addEventListener("click", o.onClick)),
          o.onFocus !== a.onFocus && (a.onFocus && e.removeEventListener("focus", a.onFocus), o.onFocus && e.addEventListener("focus", o.onFocus)),
          o.onBlur !== a.onBlur && (a.onBlur && e.removeEventListener("blur", a.onBlur), o.onBlur && e.addEventListener("blur", o.onBlur)),
          o.onMouseDown !== a.onMouseDown && (a.onMouseDown && e.removeEventListener("mousedown", a.onMouseDown), o.onMouseDown && e.addEventListener("mousedown", o.onMouseDown)),
          o.onMouseEnter !== a.onMouseEnter &&
            (a.onMouseEnter && e.removeEventListener("mouseenter", a.onMouseEnter), o.onMouseEnter && e.addEventListener("mouseenter", o.onMouseEnter)),
          o.onMouseLeave !== a.onMouseLeave &&
            (a.onMouseLeave && e.removeEventListener("mouseleave", a.onMouseLeave), o.onMouseLeave && e.addEventListener("mouseleave", o.onMouseLeave)),
          o.onMouseUp !== a.onMouseUp && (a.onMouseUp && e.removeEventListener("mouseup", a.onMouseUp), o.onMouseUp && e.addEventListener("mouseup", o.onMouseUp)),
          o.onTouchStart !== a.onTouchStart &&
            (a.onTouchStart && e.removeEventListener("touchstart", a.onTouchStart), o.onTouchStart && e.addEventListener("touchstart", o.onTouchStart)),
          o.onTouchMove !== a.onTouchMove && (a.onTouchMove && e.removeEventListener("touchmove", a.onTouchMove), o.onTouchMove && e.addEventListener("touchmove", o.onTouchMove)),
          o.onTouchEnd !== a.onTouchEnd && (a.onTouchEnd && e.removeEventListener("touchend", a.onTouchEnd), o.onTouchEnd && e.addEventListener("touchend", o.onTouchEnd)),
          o.onMouseEnter !== a.onMouseEnter &&
            (a.onMouseEnter && e.removeEventListener("touchmove", a.onMouseEnter), o.onMouseEnter && e.addEventListener("touchmove", o.onMouseEnter)),
          o.onMouseLeave !== a.onMouseLeave &&
            (a.onMouseLeave && e.removeEventListener("touchend", a.onMouseLeave), o.onMouseLeave && e.addEventListener("touchend", o.onMouseLeave)),
          o.onKeyPress !== a.onKeyPress && (a.onKeyPress && e.removeEventListener("keypress", a.onKeyPress), o.onKeyPress && e.addEventListener("keypress", o.onKeyPress)),
          o.onKeyDown !== a.onKeyDown && (a.onKeyDown && e.removeEventListener("keydown", a.onKeyDown), o.onKeyDown && e.addEventListener("keydown", o.onKeyDown)),
          o.onKeyUp !== a.onKeyUp && (a.onKeyUp && e.removeEventListener("keyup", a.onKeyUp), o.onKeyUp && e.addEventListener("keyup", o.onKeyUp)),
          o.src !== a.src)
        ) {
          e.src = o.src || "";
        }
      },
      commitTextUpdate: function (e, t, n) {
        e.nodeValue = n;
      },
      appendChild: function (e, t) {
        e.appendChild(t);
      },
      insertBefore: function (e, t, n) {
        e.insertBefore(t, n);
      },
      removeChild: function (e, t) {
        e.removeChild(t);
      },
      insertInContainerBefore: function (e, t, n) {
        e.insertBefore(t, n);
      },
      removeChildFromContainer: function (e, t) {
        e.removeChild(t);
      },
      resetTextContent: function (e) {
        e.textContent = "";
      },
      shouldDeprioritizeSubtree: function () {
        return false;
      },
      getPublicInstance: function (e) {
        return e;
      },
    };
    t.a = a;
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    n(346), n(347), (e.exports = n(402));
  },
  function (e, t, n) {},
  function (e, t) {
    window.HTMLIFrameElement = window.HTMLIFrameElement || function () {};
  },
  function (e, t, n) {
    "use strict";
    /** @license React v16.13.1
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = n(89),
      a = "function" == typeof Symbol && Symbol.for,
      o = a ? Symbol.for("react.element") : 60103,
      i = a ? Symbol.for("react.portal") : 60106,
      l = a ? Symbol.for("react.fragment") : 60107,
      c = a ? Symbol.for("react.strict_mode") : 60108,
      s = a ? Symbol.for("react.profiler") : 60114,
      u = a ? Symbol.for("react.provider") : 60109,
      d = a ? Symbol.for("react.context") : 60110,
      f = a ? Symbol.for("react.forward_ref") : 60112,
      p = a ? Symbol.for("react.suspense") : 60113,
      m = a ? Symbol.for("react.memo") : 60115,
      g = a ? Symbol.for("react.lazy") : 60116,
      h = "function" == typeof Symbol && Symbol.iterator;
    function E(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var v = {
        isMounted: function () {
          return false;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      b = {};
    function y(e, t, n) {
      (this.props = e), (this.context = t), (this.refs = b), (this.updater = n || v);
    }
    function T() {}
    function _(e, t, n) {
      (this.props = e), (this.context = t), (this.refs = b), (this.updater = n || v);
    }
    (y.prototype.isReactComponent = {}),
      (y.prototype.setState = function (e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error(E(85));
        this.updater.enqueueSetState(this, e, t, "setState");
      }),
      (y.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }),
      (T.prototype = y.prototype);
    var x = (_.prototype = new T());
    (x.constructor = _), r(x, y.prototype), (x.isPureReactComponent = !0);
    var w = { current: null },
      S = Object.prototype.hasOwnProperty,
      C = { key: !0, ref: !0, __self: !0, __source: !0 };
    function O(e, t, n) {
      var r,
        a = {},
        i = null,
        l = null;
      if (null != t) for (r in (void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = "" + t.key), t)) S.call(t, r) && !C.hasOwnProperty(r) && (a[r] = t[r]);
      var c = arguments.length - 2;
      if (1 === c) a.children = n;
      else if (1 < c) {
        for (var s = Array(c), u = 0; u < c; u++) s[u] = arguments[u + 2];
        a.children = s;
      }
      if (e && e.defaultProps) for (r in (c = e.defaultProps)) void 0 === a[r] && (a[r] = c[r]);
      return { $$typeof: o, type: e, key: i, ref: l, props: a, _owner: w.current };
    }
    function I(e) {
      return "object" == typeof e && null !== e && e.$$typeof === o;
    }
    var N = /\/+/g,
      k = [];
    function P(e, t, n, r) {
      if (k.length) {
        var a = k.pop();
        return (a.result = e), (a.keyPrefix = t), (a.func = n), (a.context = r), (a.count = 0), a;
      }
      return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
    }
    function R(e) {
      (e.result = null), (e.keyPrefix = null), (e.func = null), (e.context = null), (e.count = 0), 10 > k.length && k.push(e);
    }
    function L(e, t, n) {
      return null == e
        ? 0
        : (function e(t, n, r, a) {
            var l = typeof t;
            ("undefined" !== l && "boolean" !== l) || (t = null);
            var c = false;
            if (null === t) c = !0;
            else
              switch (l) {
                case "string":
                case "number":
                  c = !0;
                  break;
                case "object":
                  switch (t.$$typeof) {
                    case o:
                    case i:
                      c = !0;
                  }
              }
            if (c) return r(a, t, "" === n ? "." + A(t, 0) : n), 1;
            if (((c = 0), (n = "" === n ? "." : n + ":"), Array.isArray(t)))
              for (var s = 0; s < t.length; s++) {
                var u = n + A((l = t[s]), s);
                c += e(l, u, r, a);
              }
            else if ((null === t || "object" != typeof t ? (u = null) : (u = "function" == typeof (u = (h && t[h]) || t["@@iterator"]) ? u : null), "function" == typeof u))
              for (t = u.call(t), s = 0; !(l = t.next()).done; ) c += e((l = l.value), (u = n + A(l, s++)), r, a);
            else if ("object" === l) throw ((r = "" + t), Error(E(31, "[object Object]" === r ? "object with keys {" + Object.keys(t).join(", ") + "}" : r, "")));
            return c;
          })(e, "", t, n);
    }
    function A(e, t) {
      return "object" == typeof e && null !== e && null != e.key
        ? (function (e) {
            var t = { "=": "=0", ":": "=2" };
            return (
              "$" +
              ("" + e).replace(/[=:]/g, function (e) {
                return t[e];
              })
            );
          })(e.key)
        : t.toString(36);
    }
    function M(e, t) {
      e.func.call(e.context, t, e.count++);
    }
    function F(e, t, n) {
      var r = e.result,
        a = e.keyPrefix;
      (e = e.func.call(e.context, t, e.count++)),
        Array.isArray(e)
          ? D(e, r, n, function (e) {
              return e;
            })
          : null != e &&
            (I(e) &&
              (e = (function (e, t) {
                return { $$typeof: o, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
              })(e, a + (!e.key || (t && t.key === e.key) ? "" : ("" + e.key).replace(N, "$&/") + "/") + n)),
            r.push(e));
    }
    function D(e, t, n, r, a) {
      var o = "";
      null != n && (o = ("" + n).replace(N, "$&/") + "/"), L(e, F, (t = P(t, o, r, a))), R(t);
    }
    var j = { current: null };
    function U() {
      var e = j.current;
      if (null === e) throw Error(E(321));
      return e;
    }
    var B = { ReactCurrentDispatcher: j, ReactCurrentBatchConfig: { suspense: null }, ReactCurrentOwner: w, IsSomeRendererActing: { current: false }, assign: r };
    (t.Children = {
      map: function (e, t, n) {
        if (null == e) return e;
        var r = [];
        return D(e, r, null, t, n), r;
      },
      forEach: function (e, t, n) {
        if (null == e) return e;
        L(e, M, (t = P(null, null, t, n))), R(t);
      },
      count: function (e) {
        return L(
          e,
          function () {
            return null;
          },
          null
        );
      },
      toArray: function (e) {
        var t = [];
        return (
          D(e, t, null, function (e) {
            return e;
          }),
          t
        );
      },
      only: function (e) {
        if (!I(e)) throw Error(E(143));
        return e;
      },
    }),
      (t.Component = y),
      (t.Fragment = l),
      (t.Profiler = s),
      (t.PureComponent = _),
      (t.StrictMode = c),
      (t.Suspense = p),
      (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B),
      (t.cloneElement = function (e, t, n) {
        if (null == e) throw Error(E(267, e));
        var a = r({}, e.props),
          i = e.key,
          l = e.ref,
          c = e._owner;
        if (null != t) {
          if ((void 0 !== t.ref && ((l = t.ref), (c = w.current)), void 0 !== t.key && (i = "" + t.key), e.type && e.type.defaultProps)) var s = e.type.defaultProps;
          for (u in t) S.call(t, u) && !C.hasOwnProperty(u) && (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
        }
        var u = arguments.length - 2;
        if (1 === u) a.children = n;
        else if (1 < u) {
          s = Array(u);
          for (var d = 0; d < u; d++) s[d] = arguments[d + 2];
          a.children = s;
        }
        return { $$typeof: o, type: e.type, key: i, ref: l, props: a, _owner: c };
      }),
      (t.createContext = function (e, t) {
        return (
          void 0 === t && (t = null),
          ((e = { $$typeof: d, _calculateChangedBits: t, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }).Provider = {
            $$typeof: u,
            _context: e,
          }),
          (e.Consumer = e)
        );
      }),
      (t.createElement = O),
      (t.createFactory = function (e) {
        var t = O.bind(null, e);
        return (t.type = e), t;
      }),
      (t.createRef = function () {
        return { current: null };
      }),
      (t.forwardRef = function (e) {
        return { $$typeof: f, render: e };
      }),
      (t.isValidElement = I),
      (t.lazy = function (e) {
        return { $$typeof: g, _ctor: e, _status: -1, _result: null };
      }),
      (t.memo = function (e, t) {
        return { $$typeof: m, type: e, compare: void 0 === t ? null : t };
      }),
      (t.useCallback = function (e, t) {
        return U().useCallback(e, t);
      }),
      (t.useContext = function (e, t) {
        return U().useContext(e, t);
      }),
      (t.useDebugValue = function () {}),
      (t.useEffect = function (e, t) {
        return U().useEffect(e, t);
      }),
      (t.useImperativeHandle = function (e, t, n) {
        return U().useImperativeHandle(e, t, n);
      }),
      (t.useLayoutEffect = function (e, t) {
        return U().useLayoutEffect(e, t);
      }),
      (t.useMemo = function (e, t) {
        return U().useMemo(e, t);
      }),
      (t.useReducer = function (e, t, n) {
        return U().useReducer(e, t, n);
      }),
      (t.useRef = function (e) {
        return U().useRef(e);
      }),
      (t.useState = function (e) {
        return U().useState(e);
      }),
      (t.version = "16.13.1");
  },
  function (e, t, n) {
    (function (t) {
      console.everything.push({ type: "log", value:"Loading Client Side cohtml file..."}),
        e.exports &&
          (e.exports = () =>
            (function (e, t, n) {
              "use strict";
              var r = [1, 5, 0, 8];
              function a() {
                this.events = {};
              }
              function o(e, t) {
                (this.code = e), (this.context = t);
              }
              (a.prototype._createClear = function (e, n, r) {
                return function () {
                  var a = e.events[n];
                  if (a) {
                    var o = -1;
                    if (void 0 === r) {
                      for (var i = 0; i < a.length; ++i)
                        if (void 0 !== a[i].wasInCPP) {
                          o = i;
                          break;
                        }
                    } else o = a.indexOf(r);
                    -1 != o && (a.splice(o, 1), 0 === a.length && delete e.events[n]);
                  } else void 0 !== t.RemoveOnHandler && t.RemoveOnHandler(n);
                };
              }),
                (a.prototype.on = function (e, t, n) {
                  var r = this.events[e];
                  void 0 === r && (r = this.events[e] = []);
                  var a = new o(t, n || this);
                  return r.push(a), { clear: this._createClear(this, e, a) };
                }),
                (a.prototype.off = function (e, n, r) {
                  var a = this.events[e];
                  if (void 0 !== a) {
                    var o;
                    r = r || this;
                    var i = a.length;
                    for (o = 0; o < i; ++o) {
                      var l = a[o];
                      if (l.code == n && l.context == r) break;
                    }
                    o < i && (a.splice(o, 1), 0 === a.length && delete this.events[e]);
                  } else t.RemoveOnHandler(e);
                });
              var i = void 0 !== t;
              for (var l in (((t = t || {}).isAttached = i),
              (t.onEventsReplayed = null),
              (a.prototype.trigger = function (e) {
                var t = this.events[e];
                if (void 0 !== t) {
                  var n = Array.prototype.slice.call(arguments, 1);
                  return (
                    t.forEach(function (e) {
                      e.code.apply(e.context, n);
                    }),
                    !0
                  );
                }
                return false;
              }),
              (a.prototype.merge = function (e) {
                var t,
                  n = this.events,
                  r = e.events,
                  a = Array.prototype.push;
                for (var o in r) (t = n[o] = n[o] || []), a.apply(t, r[o]);
              }),
              t.isAttached ||
                ((a.prototype.on = function (e, t, n) {
                  var r = this.events[e];
                  this.browserCallbackOn && this.browserCallbackOn(e, t, n), void 0 === r && (r = this.events[e] = []);
                  var a = new o(t, n || this);
                  return r.push(a), { clear: this._createClear(this, e, a) };
                }),
                (a.prototype.off = function (e, t, n) {
                  var r = this.events[e];
                  if (void 0 !== r) {
                    var a;
                    n = n || this;
                    var o = r.length;
                    for (a = 0; a < o; ++a) {
                      var i = r[a];
                      if (i.code == t && i.context == n) break;
                    }
                    a < o && (r.splice(a, 1), 0 === r.length && (delete this.events[e], this.browserCallbackOff && this.browserCallbackOff(e, t, n)));
                  }
                }),
                (t.SendMessage = function (e, n) {
                  var r = Array.prototype.slice.call(arguments, 2),
                    a = t._ActiveRequests[n];
                  delete t._ActiveRequests[n];
                  var o = function () {
                    var n = t._mocks[e];
                    void 0 !== n && a.resolve(n.apply(t, r));
                  };
                  window.setTimeout(o, 16);
                }),
                (t.TriggerEvent = function () {
                  var e = Array.prototype.slice.call(arguments),
                    n = function () {
                      var n = t._mocks[e[0]];
                      void 0 !== n && n.apply(t, e.slice(1));
                    };
                  return window.setTimeout(n, 16), void 0 !== t._mocks[e[0]];
                }),
                (t.BindingsReady = function () {
                  t._OnReady();
                }),
                (t.__observeLifetime = function () {}),
                (t.beginEventRecording = t.endEventRecording = t.saveEventRecord = function () {
                  console.warn("Event recording will not work in the browser!");
                }),
                (t._mocks = {}),
                (t._mockImpl = function (e, t, n, r) {
                  t && (this._mocks[e] = t);
                  var a = t.toString().replace("function " + t.name + "(", ""),
                    o = a.indexOf(")"),
                    i = a.substr(0, o);
                  this.browserCallbackMock && this.browserCallbackMock(e, i, n, Boolean(r));
                }),
                (t.mock = function (e, t, n) {
                  this._mockImpl(e, t, !0, n);
                })),
              (t.events = {}),
              a.prototype))
                t[l] = a.prototype[l];
              t.isAttached &&
                (t.on = function (e, n, r) {
                  var a = this.events[e];
                  if (void 0 === a && void 0 !== t.AddOrRemoveOnHandler) {
                    var i = t.AddOrRemoveOnHandler(e, n, r || t);
                    if (void 0 === i) return { clear: this._createClear(this, e, void 0) };
                    a = this.events[e] = [];
                    var l = new o(i[0], i[1] || this);
                    (l.wasInCPP = !0), a.push(l);
                  } else void 0 === a && (a = this.events[e] = []);
                  var c = new o(n, r || this);
                  return a.push(c), { clear: this._createClear(this, e, c) };
                }),
                (t.whenReady = new Promise((e) => {
                  t.on("Ready", e);
                })),
                (t._trigger = a.prototype.trigger);
              var c = Array.prototype.concat;
              return (
                (t.trigger = function (e) {
                  if ((this._trigger.apply(this, arguments) || this.TriggerEvent.apply(this, arguments), void 0 !== this.events.all)) {
                    var t = c.apply(["all"], arguments);
                    this._trigger.apply(this, t);
                  }
                }),
                (t.showOverlay = function () {}),
                (t.hideOverlay = function () {}),
                t.isAttached && (t.mock = function (e, t, n) {}),
                (t._BindingsReady = false),
                (t._WindowLoaded = false),
                (t._RequestId = 0),
                (t._ActiveRequests = {}),
                void 0 !== e.engineCreateDeferred && console.warn("engineCreateDeferred is depricated"),
                (t.call = function () {
                  t._RequestId++;
                  var e = t._RequestId,
                    n = Array.prototype.slice.call(arguments);
                  n.splice(1, 0, e);
                  var r = new Promise(function (r, a) {
                    (t._ActiveRequests[e] = { resolve: r, reject: a }), t.SendMessage.apply(t, n);
                  });
                  return r;
                }),
                (t._Result = function (e) {
                  var n = t._ActiveRequests[e];
                  if (void 0 !== n) {
                    delete t._ActiveRequests[e];
                    var r = Array.prototype.slice.call(arguments);
                    r.shift(), n.resolve.apply(n, r);
                  }
                }),
                (t._Errors = ["Success", "ArgumentType", "NoSuchMethod", "NoResult"]),
                (t._ForEachError = function (e, t) {
                  for (var n = e.length, r = 0; r < n; ++r) t(e[r].first, e[r].second);
                }),
                (t._TriggerError = function (e) {
                  t.trigger("Error", e);
                }),
                (t._OnError = function (e, n) {
                  if (null === e || 0 === e) t._ForEachError(n, t._TriggerError);
                  else {
                    var r = t._ActiveRequests[e];
                    delete t._ActiveRequests[e], r.reject(new Error(n[0].second));
                  }
                  if (n.length) throw new Error(n[0].second);
                }),
                (t._eventHandles = {}),
                (t._Register = function (e) {
                  var n = (function (e, t) {
                    return function () {
                      var n = [e];
                      n.push.apply(n, arguments), t.TriggerEvent.apply(this, n);
                    };
                  })(e, t);
                  t._eventHandles[e] = t.on(e, n);
                }),
                (t._removeEventThunk = function (e) {
                  t._eventHandles[e].clear(), delete t._eventHandles[e];
                }),
                (t._Unregister = function (e) {
                  "string" == typeof e ? t._removeEventThunk(e) : e.forEach(t._removeEventThunk, t);
                }),
                (t._boundTypes = {}),
                (t._createInstance = function (e) {
                  var n = e[0],
                    r = e[1],
                    a = e[2],
                    o = t._boundTypes[n];
                  void 0 === o &&
                    (((o = function (e) {
                      this._id = e;
                    }).prototype.__Type = n),
                    a.forEach(function (e) {
                      o.prototype[e] = (function (e) {
                        return function () {
                          var n = Array.prototype.slice.call(arguments);
                          return n.splice(0, 0, e, this._id), t.call.apply(t, n);
                        };
                      })(n + "_" + e);
                    }),
                    (t._boundTypes[n] = o));
                  var i = new o(r);
                  return t.__observeLifetime(i), i;
                }),
                (t._OnReady = function () {
                  (t._BindingsReady = !0), t._WindowLoaded && t.trigger("Ready");
                }),
                (t._OnWindowLoaded = function () {
                  (t._WindowLoaded = !0), t._BindingsReady && t.trigger("Ready");
                }),
                (t._ThrowError = function (e) {
                  var t =
                    e.name +
                    ": " +
                    e.message +
                    "\n" +
                    e.stack
                      .split("\n")
                      .map(function (e) {
                        return "\t" + e;
                      })
                      .join("\n");
                  console.error(t);
                }),
                n
                  ? e.addEventListener("load", function () {
                      t._OnWindowLoaded();
                    })
                  : (t._WindowLoaded = !0),
                t.on("_Result", t._Result, t),
                t.on("_Register", t._Register, t),
                t.on("_Unregister", t._Unregister, t),
                t.on("_OnReady", t._OnReady, t),
                t.on("_OnError", t._OnError, t),
                t.on("__OnReplayRecordCompleted", function (e) {
                  t.onEventsReplayed && t.onEventsReplayed();
                }),
                (t.dependency = new WeakMap()),
                (t.updateWholeModelCallbacks = []),
                (t.hasAttachedUpdateListner = false),
                (t.onUpdateWholeModel = (e) => {
                  (t.dependency.get(e) || []).forEach((e) => t.updateWholeModel(e));
                }),
                (t.createObservableModel = (e) => {
                  const n = {
                    set: (n, r, a) => {
                      t.updateWholeModel(window[e]), (n[r] = a);
                    },
                  };
                  t.createJSModel(e, new Proxy({}, n));
                }),
                (t.addSynchronizationDependency = (e, n) => {
                  t.hasAttachedUpdateListner || (t.addDataBindEventListner("updateWholeModel", t.onUpdateWholeModel), (t.hasAttachedUpdateListner = !0));
                  let r = t.dependency.get(e);
                  r || ((r = []), t.dependency.set(e, r)), r.push(n);
                }),
                (t.removeSynchronizationDependency = (e, n) => {
                  let r = t.dependency.get(e) || [];
                  r.splice(r.indexOf(e), 1);
                }),
                t.BindingsReady(r[0], r[1], r[2], r[3]),
                t
              );
            })(t, t.engine, false));
    }.call(this, n(65)));
  },
  function (e, t, n) {
    var r = n(351);
    e.exports = function (e, t, n) {
      var a, o;
      if ("function" == typeof e.indexOf)
        switch (typeof t) {
          case "number":
            if (0 === t) {
              for (a = 1 / t; n < e.length; ) {
                if (0 === (o = e[n]) && 1 / o === a) return n;
                n += 1;
              }
              return -1;
            }
            if (t != t) {
              for (; n < e.length; ) {
                if ("number" == typeof (o = e[n]) && o != o) return n;
                n += 1;
              }
              return -1;
            }
            return e.indexOf(t, n);
          case "string":
          case "boolean":
          case "function":
          case "undefined":
            return e.indexOf(t, n);
          case "object":
            if (null === t) return e.indexOf(t, n);
        }
      for (; n < e.length; ) {
        if (r(e[n], t)) return n;
        n += 1;
      }
      return -1;
    };
  },
  function (e, t, n) {
    var r = n(17),
      a = n(352),
      o = r(function (e, t) {
        return a(e, t, [], []);
      });
    e.exports = o;
  },
  function (e, t, n) {
    var r = n(353),
      a = n(354),
      o = n(355),
      i = n(66),
      l = n(356),
      c = n(91),
      s = n(358);
    function u(e, t, n, o) {
      var i = r(e),
        l = r(t);
      function c(e, t) {
        return d(e, t, n.slice(), o.slice());
      }
      return !a(
        function (e, t) {
          return !a(c, t, e);
        },
        l,
        i
      );
    }
    function d(e, t, n, r) {
      if (l(e, t)) return !0;
      var a = s(e);
      if (a !== s(t)) return false;
      if (null == e || null == t) return false;
      if ("function" == typeof e["fantasy-land/equals"] || "function" == typeof t["fantasy-land/equals"])
        return "function" == typeof e["fantasy-land/equals"] && e["fantasy-land/equals"](t) && "function" == typeof t["fantasy-land/equals"] && t["fantasy-land/equals"](e);
      if ("function" == typeof e.equals || "function" == typeof t.equals) return "function" == typeof e.equals && e.equals(t) && "function" == typeof t.equals && t.equals(e);
      switch (a) {
        case "Arguments":
        case "Array":
        case "Object":
          if ("function" == typeof e.constructor && "Promise" === o(e.constructor)) return e === t;
          break;
        case "Boolean":
        case "Number":
        case "String":
          if (typeof e != typeof t || !l(e.valueOf(), t.valueOf())) return false;
          break;
        case "Date":
          if (!l(e.valueOf(), t.valueOf())) return false;
          break;
        case "Error":
          return e.name === t.name && e.message === t.message;
        case "RegExp":
          if (e.source !== t.source || e.global !== t.global || e.ignoreCase !== t.ignoreCase || e.multiline !== t.multiline || e.sticky !== t.sticky || e.unicode !== t.unicode)
            return false;
      }
      for (var f = n.length - 1; f >= 0; ) {
        if (n[f] === e) return r[f] === t;
        f -= 1;
      }
      switch (a) {
        case "Map":
          return e.size === t.size && u(e.entries(), t.entries(), n.concat([e]), r.concat([t]));
        case "Set":
          return e.size === t.size && u(e.values(), t.values(), n.concat([e]), r.concat([t]));
        case "Arguments":
        case "Array":
        case "Object":
        case "Boolean":
        case "Number":
        case "String":
        case "Date":
        case "Error":
        case "RegExp":
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "ArrayBuffer":
          break;
        default:
          return false;
      }
      var p = c(e);
      if (p.length !== c(t).length) return false;
      var m = n.concat([e]),
        g = r.concat([t]);
      for (f = p.length - 1; f >= 0; ) {
        var h = p[f];
        if (!i(h, t) || !d(t[h], e[h], m, g)) return false;
        f -= 1;
      }
      return !0;
    }
    e.exports = d;
  },
  function (e, t) {
    e.exports = function (e) {
      for (var t, n = []; !(t = e.next()).done; ) n.push(t.value);
      return n;
    };
  },
  function (e, t) {
    e.exports = function (e, t, n) {
      for (var r = 0, a = n.length; r < a; ) {
        if (e(t, n[r])) return !0;
        r += 1;
      }
      return false;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = String(e).match(/^function (\w*)/);
      return null == t ? "" : t[1];
    };
  },
  function (e, t) {
    e.exports =
      "function" == typeof Object.is
        ? Object.is
        : function (e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
          };
  },
  function (e, t, n) {
    var r = n(66),
      a = Object.prototype.toString,
      o = (function () {
        return "[object Arguments]" === a.call(arguments)
          ? function (e) {
              return "[object Arguments]" === a.call(e);
            }
          : function (e) {
              return r("callee", e);
            };
      })();
    e.exports = o;
  },
  function (e, t, n) {
    var r = n(29)(function (e) {
      return null === e ? "Null" : void 0 === e ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
    });
    e.exports = r;
  },
  function (e, t, n) {
    var r = n(29),
      a = n(360),
      o = r(function (e) {
        return a(e.length, function (t, n) {
          var r = Array.prototype.slice.call(arguments, 0);
          return (r[0] = n), (r[1] = t), e.apply(this, r);
        });
      });
    e.exports = o;
  },
  function (e, t, n) {
    var r = n(56),
      a = n(29),
      o = n(17),
      i = n(361),
      l = o(function (e, t) {
        return 1 === e ? a(t) : r(e, i(e, [], t));
      });
    e.exports = l;
  },
  function (e, t, n) {
    var r = n(56),
      a = n(55);
    e.exports = function e(t, n, o) {
      return function () {
        for (var i = [], l = 0, c = t, s = 0; s < n.length || l < arguments.length; ) {
          var u;
          s < n.length && (!a(n[s]) || l >= arguments.length) ? (u = n[s]) : ((u = arguments[l]), (l += 1)), (i[s] = u), a(u) || (c -= 1), (s += 1);
        }
        return c <= 0 ? o.apply(this, i) : r(c, e(t, i, o));
      };
    };
  },
  function (e, t, n) {
    var r = n(363),
      a = n(17),
      o = n(364),
      i = a(function (e, t) {
        return o(r(e), t);
      });
    e.exports = i;
  },
  function (e, t) {
    e.exports = function (e) {
      return function () {
        return !e.apply(this, arguments);
      };
    };
  },
  function (e, t, n) {
    var r = n(17),
      a = n(92),
      o = n(366),
      i = n(367),
      l = n(93),
      c = n(371),
      s = n(91),
      u = r(
        a(["filter"], c, function (e, t) {
          return i(t)
            ? l(
                function (n, r) {
                  return e(t[r]) && (n[r] = t[r]), n;
                },
                {},
                s(t)
              )
            : o(e, t);
        })
      );
    e.exports = u;
  },
  function (e, t) {
    e.exports = function (e) {
      return null != e && "function" == typeof e["@@transducer/step"];
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      for (var n = 0, r = t.length, a = []; n < r; ) e(t[n]) && (a[a.length] = t[n]), (n += 1);
      return a;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return "[object Object]" === Object.prototype.toString.call(e);
    };
  },
  function (e, t, n) {
    var r = n(29),
      a = n(67),
      o = n(94),
      i = r(function (e) {
        return (
          !!a(e) ||
          (!!e && "object" == typeof e && !o(e) && (1 === e.nodeType ? !!e.length : 0 === e.length || (e.length > 0 && e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1))))
        );
      });
    e.exports = i;
  },
  function (e, t) {
    var n = (function () {
      function e(e) {
        this.f = e;
      }
      return (
        (e.prototype["@@transducer/init"] = function () {
          throw new Error("init not implemented on XWrap");
        }),
        (e.prototype["@@transducer/result"] = function (e) {
          return e;
        }),
        (e.prototype["@@transducer/step"] = function (e, t) {
          return this.f(e, t);
        }),
        e
      );
    })();
    e.exports = function (e) {
      return new n(e);
    };
  },
  function (e, t, n) {
    var r = n(56),
      a = n(17)(function (e, t) {
        return r(e.length, function () {
          return e.apply(t, arguments);
        });
      });
    e.exports = a;
  },
  function (e, t, n) {
    var r = n(17),
      a = n(95),
      o = (function () {
        function e(e, t) {
          (this.xf = t), (this.f = e);
        }
        return (
          (e.prototype["@@transducer/init"] = a.init),
          (e.prototype["@@transducer/result"] = a.result),
          (e.prototype["@@transducer/step"] = function (e, t) {
            return this.f(t) ? this.xf["@@transducer/step"](e, t) : e;
          }),
          e
        );
      })(),
      i = r(function (e, t) {
        return new o(e, t);
      });
    e.exports = i;
  },
  function (e, t, n) {
    "use strict";
    var r,
      a = (r = {
        _escapeRegExpPattern: function (e) {
          return "string" != typeof e ? e : e.replace(/([\.\*\+\^\$\[\]\\\(\)\|\{\}\,\-\:\?])/g, "\\$1");
        },
        _toLowerCase: function (e, t) {
          return "string" != typeof e ? t && e : e.toLowerCase();
        },
        _toUpperCase: function (e, t) {
          return "string" != typeof e ? t && e : e.toUpperCase();
        },
        _trim: function (e, t, n) {
          var a,
            o = [],
            i = function (e) {
              o.push("^" + e + "+|" + e + "+$");
            };
          if (("boolean" == typeof t && ((n = t), (t = null)), "string" != typeof e)) return n && e;
          if (
            (Array.isArray(t) &&
              t.map(function (e) {
                var t = r._escapeRegExpPattern(e);
                i(t);
              }),
            "string" == typeof t)
          ) {
            var l = r._escapeRegExpPattern(t);
            i(l);
          }
          t || i("\\s");
          var c = "(" + o.join("|") + ")";
          for (a = new RegExp(c, "g"); e.match(a); ) e = e.replace(a, "");
          return e;
        },
        _parseLocale: function (e) {
          var t,
            n = /^([a-zA-Z]*)([_\-a-zA-Z]*)$/.exec(e);
          if (e && n) return (n[2] = r._trim(n[2], ["-", "_"])), { lang: r._toLowerCase(n[1]), countryCode: (t = r._toUpperCase(n[2]) || t) };
        },
        isRtlLang: function (e) {
          var t = r._parseLocale(e);
          if (t) return r._BIDI_RTL_LANGS.indexOf(t.lang) >= 0;
        },
        getLangDir: function (e) {
          return r.isRtlLang(e) ? "rtl" : "ltr";
        },
      });
    Object.defineProperty(r, "_BIDI_RTL_LANGS", {
      value: ["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"],
      writable: false,
      enumerable: !0,
      configurable: false,
    }),
      (e.exports = a);
  },
  function (e, t) {
    e.exports = function (e, t) {
      var n;
      t = t || [];
      var r = (e = e || []).length,
        a = t.length,
        o = [];
      for (n = 0; n < r; ) (o[o.length] = e[n]), (n += 1);
      for (n = 0; n < a; ) (o[o.length] = t[n]), (n += 1);
      return o;
    };
  },
  function (e, t, n) {
    var r = n(375),
      a = n(380);
    e.exports = function () {
      if (0 === arguments.length) throw new Error("compose requires at least one argument");
      return r.apply(this, a(arguments));
    };
  },
  function (e, t, n) {
    var r = n(56),
      a = n(376),
      o = n(377),
      i = n(378);
    e.exports = function () {
      if (0 === arguments.length) throw new Error("pipe requires at least one argument");
      return r(arguments[0].length, o(a, arguments[0], i(arguments)));
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return function () {
        return t.call(this, e.apply(this, arguments));
      };
    };
  },
  function (e, t, n) {
    var r = n(96)(n(93));
    e.exports = r;
  },
  function (e, t, n) {
    var r = n(97),
      a = n(29)(r("tail", n(379)(1, 1 / 0)));
    e.exports = a;
  },
  function (e, t, n) {
    var r = n(97),
      a = n(96)(
        r("slice", function (e, t, n) {
          return Array.prototype.slice.call(n, e, t);
        })
      );
    e.exports = a;
  },
  function (e, t, n) {
    var r = n(29),
      a = n(94),
      o = r(function (e) {
        return a(e) ? e.split("").reverse().join("") : Array.prototype.slice.call(e, 0).reverse();
      });
    e.exports = o;
  },
  function (e, t, n) {
    var r = n(382),
      a = n(384)(r);
    e.exports = a;
  },
  function (e, t, n) {
    var r = n(29)(n(383));
    e.exports = r;
  },
  function (e, t) {
    e.exports = function (e) {
      return e;
    };
  },
  function (e, t, n) {
    var r = n(385),
      a = n(17)(function (e, t) {
        for (var n, a, o = new r(), i = [], l = 0; l < t.length; ) (n = e((a = t[l]))), o.add(n) && i.push(a), (l += 1);
        return i;
      });
    e.exports = a;
  },
  function (e, t, n) {
    var r = n(90),
      a = (function () {
        function e() {
          (this._nativeSet = "function" == typeof Set ? new Set() : null), (this._items = {});
        }
        return (
          (e.prototype.add = function (e) {
            return !o(e, !0, this);
          }),
          (e.prototype.has = function (e) {
            return o(e, false, this);
          }),
          e
        );
      })();
    function o(e, t, n) {
      var a,
        o = typeof e;
      switch (o) {
        case "string":
        case "number":
          return 0 === e && 1 / e == -1 / 0
            ? !!n._items["-0"] || (t && (n._items["-0"] = !0), false)
            : null !== n._nativeSet
            ? t
              ? ((a = n._nativeSet.size), n._nativeSet.add(e), n._nativeSet.size === a)
              : n._nativeSet.has(e)
            : o in n._items
            ? e in n._items[o] || (t && (n._items[o][e] = !0), false)
            : (t && ((n._items[o] = {}), (n._items[o][e] = !0)), false);
        case "boolean":
          if (o in n._items) {
            var i = e ? 1 : 0;
            return !!n._items[o][i] || (t && (n._items[o][i] = !0), false);
          }
          return t && (n._items[o] = e ? [false, !0] : [!0, false]), false;
        case "function":
          return null !== n._nativeSet
            ? t
              ? ((a = n._nativeSet.size), n._nativeSet.add(e), n._nativeSet.size === a)
              : n._nativeSet.has(e)
            : o in n._items
            ? !!r(e, n._items[o]) || (t && n._items[o].push(e), false)
            : (t && (n._items[o] = [e]), false);
        case "undefined":
          return !!n._items[o] || (t && (n._items[o] = !0), false);
        case "object":
          if (null === e) return !!n._items.null || (t && (n._items.null = !0), false);
        default:
          return (o = Object.prototype.toString.call(e)) in n._items ? !!r(e, n._items[o]) || (t && n._items[o].push(e), false) : (t && (n._items[o] = [e]), false);
      }
    }
    e.exports = a;
  },
  function (e, t, n) {
    var r = n(17),
      a = n(387),
      o = n(95),
      i = (function () {
        function e(e, t) {
          (this.xf = t), (this.f = e), (this.idx = -1), (this.found = false);
        }
        return (
          (e.prototype["@@transducer/init"] = o.init),
          (e.prototype["@@transducer/result"] = function (e) {
            return this.found || (e = this.xf["@@transducer/step"](e, -1)), this.xf["@@transducer/result"](e);
          }),
          (e.prototype["@@transducer/step"] = function (e, t) {
            return (this.idx += 1), this.f(t) && ((this.found = !0), (e = a(this.xf["@@transducer/step"](e, this.idx)))), e;
          }),
          e
        );
      })(),
      l = r(function (e, t) {
        return new i(e, t);
      });
    e.exports = l;
  },
  function (e, t) {
    e.exports = function (e) {
      return e && e["@@transducer/reduced"] ? e : { "@@transducer/value": e, "@@transducer/reduced": !0 };
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(389);
    function a() {}
    function o() {}
    (o.resetWarningCache = a),
      (e.exports = function () {
        function e(e, t, n, a, o, i) {
          if (i !== r) {
            var l = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ((l.name = "Invariant Violation"), l);
          }
        }
        function t() {
          return e;
        }
        e.isRequired = e;
        var n = {
          array: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: o,
          resetWarningCache: a,
        };
        return (n.PropTypes = n), n;
      });
  },
  function (e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  },
  function (e, t) {
    function n(t, r) {
      return (
        (e.exports = n =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0),
        n(t, r)
      );
    }
    (e.exports = n), (e.exports.default = e.exports), (e.exports.__esModule = !0);
  },
  function (e, t) {
    e.exports =
      Array.isArray ||
      function (e) {
        return "[object Array]" == Object.prototype.toString.call(e);
      };
  },
  function (e, t, n) {
    "use strict";
    /** @license React v16.13.1
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = "function" == typeof Symbol && Symbol.for,
      a = r ? Symbol.for("react.element") : 60103,
      o = r ? Symbol.for("react.portal") : 60106,
      i = r ? Symbol.for("react.fragment") : 60107,
      l = r ? Symbol.for("react.strict_mode") : 60108,
      c = r ? Symbol.for("react.profiler") : 60114,
      s = r ? Symbol.for("react.provider") : 60109,
      u = r ? Symbol.for("react.context") : 60110,
      d = r ? Symbol.for("react.async_mode") : 60111,
      f = r ? Symbol.for("react.concurrent_mode") : 60111,
      p = r ? Symbol.for("react.forward_ref") : 60112,
      m = r ? Symbol.for("react.suspense") : 60113,
      g = r ? Symbol.for("react.suspense_list") : 60120,
      h = r ? Symbol.for("react.memo") : 60115,
      E = r ? Symbol.for("react.lazy") : 60116,
      v = r ? Symbol.for("react.block") : 60121,
      b = r ? Symbol.for("react.fundamental") : 60117,
      y = r ? Symbol.for("react.responder") : 60118,
      T = r ? Symbol.for("react.scope") : 60119;
    function _(e) {
      if ("object" == typeof e && null !== e) {
        var t = e.$$typeof;
        switch (t) {
          case a:
            switch ((e = e.type)) {
              case d:
              case f:
              case i:
              case c:
              case l:
              case m:
                return e;
              default:
                switch ((e = e && e.$$typeof)) {
                  case u:
                  case p:
                  case E:
                  case h:
                  case s:
                    return e;
                  default:
                    return t;
                }
            }
          case o:
            return t;
        }
      }
    }
    function x(e) {
      return _(e) === f;
    }
    (t.AsyncMode = d),
      (t.ConcurrentMode = f),
      (t.ContextConsumer = u),
      (t.ContextProvider = s),
      (t.Element = a),
      (t.ForwardRef = p),
      (t.Fragment = i),
      (t.Lazy = E),
      (t.Memo = h),
      (t.Portal = o),
      (t.Profiler = c),
      (t.StrictMode = l),
      (t.Suspense = m),
      (t.isAsyncMode = function (e) {
        return x(e) || _(e) === d;
      }),
      (t.isConcurrentMode = x),
      (t.isContextConsumer = function (e) {
        return _(e) === u;
      }),
      (t.isContextProvider = function (e) {
        return _(e) === s;
      }),
      (t.isElement = function (e) {
        return "object" == typeof e && null !== e && e.$$typeof === a;
      }),
      (t.isForwardRef = function (e) {
        return _(e) === p;
      }),
      (t.isFragment = function (e) {
        return _(e) === i;
      }),
      (t.isLazy = function (e) {
        return _(e) === E;
      }),
      (t.isMemo = function (e) {
        return _(e) === h;
      }),
      (t.isPortal = function (e) {
        return _(e) === o;
      }),
      (t.isProfiler = function (e) {
        return _(e) === c;
      }),
      (t.isStrictMode = function (e) {
        return _(e) === l;
      }),
      (t.isSuspense = function (e) {
        return _(e) === m;
      }),
      (t.isValidElementType = function (e) {
        return (
          "string" == typeof e ||
          "function" == typeof e ||
          e === i ||
          e === f ||
          e === c ||
          e === l ||
          e === m ||
          e === g ||
          ("object" == typeof e &&
            null !== e &&
            (e.$$typeof === E ||
              e.$$typeof === h ||
              e.$$typeof === s ||
              e.$$typeof === u ||
              e.$$typeof === p ||
              e.$$typeof === b ||
              e.$$typeof === y ||
              e.$$typeof === T ||
              e.$$typeof === v))
        );
      }),
      (t.typeOf = _);
  },
  function (e, t, n) {},
  function (e, t, n) {
    (window.__globalDevCoreUISoundDefinitions = window.__globalDevCoreUISoundDefinitions || {}),
      Object.assign(window.__globalDevCoreUISoundDefinitions, { "Modal.show": { category: "ui", sounds: [] }, "Modal.hide": { category: "ui", sounds: [{ name: n(395) }] } });
  },
  function (e, t, n) {
    e.exports = n.p + "assets/modal_hide-4f26a.ogg";
  },
  function (e, t, n) {
    (window.__globalDevCoreUISoundDefinitions = window.__globalDevCoreUISoundDefinitions || {}),
      Object.assign(window.__globalDevCoreUISoundDefinitions, {
        "Button.primary.pressed": { category: "ui", sounds: [{ name: n(99) }] },
        "Button.secondary.pressed": { category: "ui", sounds: [{ name: n(397) }] },
        "Button.destructive.pressed": { category: "ui", sounds: [{ name: n(99) }] },
      });
  },
  function (e, t, n) {
    e.exports = n.p + "assets/snes_pop-7227f.ogg";
  },
  function (e, t) {
    var n,
      r,
      a = (e.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function i() {
      throw new Error("clearTimeout has not been defined");
    }
    function l(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === o || !n) && setTimeout) return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : o;
      } catch (e) {
        n = o;
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : i;
      } catch (e) {
        r = i;
      }
    })();
    var c,
      s = [],
      u = false,
      d = -1;
    function f() {
      u && c && ((u = false), c.length ? (s = c.concat(s)) : (d = -1), s.length && p());
    }
    function p() {
      if (!u) {
        var e = l(f);
        u = !0;
        for (var t = s.length; t; ) {
          for (c = s, s = []; ++d < t; ) c && c[d].run();
          (d = -1), (t = s.length);
        }
        (c = null),
          (u = false),
          (function (e) {
            if (r === clearTimeout) return clearTimeout(e);
            if ((r === i || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e);
            try {
              r(e);
            } catch (t) {
              try {
                return r.call(null, e);
              } catch (t) {
                return r.call(this, e);
              }
            }
          })(e);
      }
    }
    function m(e, t) {
      (this.fun = e), (this.array = t);
    }
    function g() {}
    (a.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      s.push(new m(e, t)), 1 !== s.length || u || l(p);
    }),
      (m.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (a.title = "browser"),
      (a.browser = !0),
      (a.env = {}),
      (a.argv = []),
      (a.version = ""),
      (a.versions = {}),
      (a.on = g),
      (a.addListener = g),
      (a.once = g),
      (a.off = g),
      (a.removeListener = g),
      (a.removeAllListeners = g),
      (a.emit = g),
      (a.prependListener = g),
      (a.prependOnceListener = g),
      (a.listeners = function (e) {
        return [];
      }),
      (a.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (a.cwd = function () {
        return "/";
      }),
      (a.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (a.umask = function () {
        return 0;
      });
  },
  function (e, t, n) {
    /** @license React v0.24.0
     * react-reconciler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    e.exports = function t(r) {
      "use strict";
      var a = n(89),
        o = n(0),
        i = n(400);
      function l(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var c = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      c.hasOwnProperty("ReactCurrentDispatcher") || (c.ReactCurrentDispatcher = { current: null }),
        c.hasOwnProperty("ReactCurrentBatchConfig") || (c.ReactCurrentBatchConfig = { suspense: null });
      var s = "function" == typeof Symbol && Symbol.for,
        u = s ? Symbol.for("react.element") : 60103,
        d = s ? Symbol.for("react.portal") : 60106,
        f = s ? Symbol.for("react.fragment") : 60107,
        p = s ? Symbol.for("react.strict_mode") : 60108,
        m = s ? Symbol.for("react.profiler") : 60114,
        g = s ? Symbol.for("react.provider") : 60109,
        h = s ? Symbol.for("react.context") : 60110,
        E = s ? Symbol.for("react.concurrent_mode") : 60111,
        v = s ? Symbol.for("react.forward_ref") : 60112,
        b = s ? Symbol.for("react.suspense") : 60113,
        y = s ? Symbol.for("react.suspense_list") : 60120,
        T = s ? Symbol.for("react.memo") : 60115,
        _ = s ? Symbol.for("react.lazy") : 60116;
      s && Symbol.for("react.fundamental"), s && Symbol.for("react.responder"), s && Symbol.for("react.scope");
      var x = "function" == typeof Symbol && Symbol.iterator;
      function w(e) {
        return null === e || "object" != typeof e ? null : "function" == typeof (e = (x && e[x]) || e["@@iterator"]) ? e : null;
      }
      function S(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
          case f:
            return "Fragment";
          case d:
            return "Portal";
          case m:
            return "Profiler";
          case p:
            return "StrictMode";
          case b:
            return "Suspense";
          case y:
            return "SuspenseList";
        }
        if ("object" == typeof e)
          switch (e.$$typeof) {
            case h:
              return "Context.Consumer";
            case g:
              return "Context.Provider";
            case v:
              var t = e.render;
              return (t = t.displayName || t.name || ""), e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
            case T:
              return S(e.type);
            case _:
              if ((e = 1 === e._status ? e._result : null)) return S(e);
          }
        return null;
      }
      function C(e) {
        var t = e,
          n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do {
            0 != (1026 & (t = e).effectTag) && (n = t.return), (e = t.return);
          } while (e);
        }
        return 3 === t.tag ? n : null;
      }
      function O(e) {
        if (C(e) !== e) throw Error(l(188));
      }
      function I(e) {
        var t = e.alternate;
        if (!t) {
          if (null === (t = C(e))) throw Error(l(188));
          return t !== e ? null : e;
        }
        for (var n = e, r = t; ; ) {
          var a = n.return;
          if (null === a) break;
          var o = a.alternate;
          if (null === o) {
            if (null !== (r = a.return)) {
              n = r;
              continue;
            }
            break;
          }
          if (a.child === o.child) {
            for (o = a.child; o; ) {
              if (o === n) return O(a), e;
              if (o === r) return O(a), t;
              o = o.sibling;
            }
            throw Error(l(188));
          }
          if (n.return !== r.return) (n = a), (r = o);
          else {
            for (var i = false, c = a.child; c; ) {
              if (c === n) {
                (i = !0), (n = a), (r = o);
                break;
              }
              if (c === r) {
                (i = !0), (r = a), (n = o);
                break;
              }
              c = c.sibling;
            }
            if (!i) {
              for (c = o.child; c; ) {
                if (c === n) {
                  (i = !0), (n = o), (r = a);
                  break;
                }
                if (c === r) {
                  (i = !0), (r = o), (n = a);
                  break;
                }
                c = c.sibling;
              }
              if (!i) throw Error(l(189));
            }
          }
          if (n.alternate !== r) throw Error(l(190));
        }
        if (3 !== n.tag) throw Error(l(188));
        return n.stateNode.current === n ? e : t;
      }
      function N(e) {
        if (!(e = I(e))) return null;
        for (var t = e; ; ) {
          if (5 === t.tag || 6 === t.tag) return t;
          if (t.child) (t.child.return = t), (t = t.child);
          else {
            if (t === e) break;
            for (; !t.sibling; ) {
              if (!t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }
        return null;
      }
      var k = r.getPublicInstance,
        P = r.getRootHostContext,
        R = r.getChildHostContext,
        L = r.prepareForCommit,
        A = r.resetAfterCommit,
        M = r.createInstance,
        F = r.appendInitialChild,
        D = r.finalizeInitialChildren,
        j = r.prepareUpdate,
        U = r.shouldSetTextContent,
        B = r.shouldDeprioritizeSubtree,
        H = r.createTextInstance,
        z = r.setTimeout,
        G = r.clearTimeout,
        Y = r.noTimeout,
        K = r.isPrimaryRenderer,
        W = r.supportsMutation,
        V = r.supportsPersistence,
        $ = r.supportsHydration,
        X = r.appendChild,
        q = r.appendChildToContainer,
        Q = r.commitTextUpdate,
        Z = r.commitMount,
        J = r.commitUpdate,
        ee = r.insertBefore,
        te = r.insertInContainerBefore,
        ne = r.removeChild,
        re = r.removeChildFromContainer,
        ae = r.resetTextContent,
        oe = r.hideInstance,
        ie = r.hideTextInstance,
        le = r.unhideInstance,
        ce = r.unhideTextInstance,
        se = r.cloneInstance,
        ue = r.createContainerChildSet,
        de = r.appendChildToContainerChildSet,
        fe = r.finalizeContainerChildren,
        pe = r.replaceContainerChildren,
        me = r.cloneHiddenInstance,
        ge = r.cloneHiddenTextInstance,
        he = r.canHydrateInstance,
        Ee = r.canHydrateTextInstance,
        ve = r.isSuspenseInstancePending,
        be = r.isSuspenseInstanceFallback,
        ye = r.getNextHydratableSibling,
        Te = r.getFirstHydratableChild,
        _e = r.hydrateInstance,
        xe = r.hydrateTextInstance,
        we = r.getNextHydratableInstanceAfterSuspenseInstance,
        Se = r.commitHydratedContainer,
        Ce = r.commitHydratedSuspenseInstance,
        Oe = /^(.*)[\\\/]/;
      function Ie(e) {
        var t = "";
        do {
          e: switch (e.tag) {
            case 3:
            case 4:
            case 6:
            case 7:
            case 10:
            case 9:
              var n = "";
              break e;
            default:
              var r = e._debugOwner,
                a = e._debugSource,
                o = S(e.type);
              (n = null),
                r && (n = S(r.type)),
                (r = o),
                (o = ""),
                a ? (o = " (at " + a.fileName.replace(Oe, "") + ":" + a.lineNumber + ")") : n && (o = " (created by " + n + ")"),
                (n = "\n    in " + (r || "Unknown") + o);
          }
          (t += n), (e = e.return);
        } while (e);
        return t;
      }
      new Set();
      var Ne = [],
        ke = -1;
      function Pe(e) {
        0 > ke || ((e.current = Ne[ke]), (Ne[ke] = null), ke--);
      }
      function Re(e, t) {
        ke++, (Ne[ke] = e.current), (e.current = t);
      }
      var Le = {},
        Ae = { current: Le },
        Me = { current: false },
        Fe = Le;
      function De(e, t) {
        var n = e.type.contextTypes;
        if (!n) return Le;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var a,
          o = {};
        for (a in n) o[a] = t[a];
        return r && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = o)), o;
      }
      function je(e) {
        return null != (e = e.childContextTypes);
      }
      function Ue(e) {
        Pe(Me), Pe(Ae);
      }
      function Be(e) {
        Pe(Me), Pe(Ae);
      }
      function He(e, t, n) {
        if (Ae.current !== Le) throw Error(l(168));
        Re(Ae, t), Re(Me, n);
      }
      function ze(e, t, n) {
        var r = e.stateNode;
        if (((e = t.childContextTypes), "function" != typeof r.getChildContext)) return n;
        for (var o in (r = r.getChildContext())) if (!(o in e)) throw Error(l(108, S(t) || "Unknown", o));
        return a({}, n, {}, r);
      }
      function Ge(e) {
        var t = e.stateNode;
        return (t = (t && t.__reactInternalMemoizedMergedChildContext) || Le), (Fe = Ae.current), Re(Ae, t), Re(Me, Me.current), !0;
      }
      function Ye(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(l(169));
        n ? ((t = ze(e, t, Fe)), (r.__reactInternalMemoizedMergedChildContext = t), Pe(Me), Pe(Ae), Re(Ae, t)) : Pe(Me), Re(Me, n);
      }
      var Ke = i.unstable_runWithPriority,
        We = i.unstable_scheduleCallback,
        Ve = i.unstable_cancelCallback,
        $e = i.unstable_shouldYield,
        Xe = i.unstable_requestPaint,
        qe = i.unstable_now,
        Qe = i.unstable_getCurrentPriorityLevel,
        Ze = i.unstable_ImmediatePriority,
        Je = i.unstable_UserBlockingPriority,
        et = i.unstable_NormalPriority,
        tt = i.unstable_LowPriority,
        nt = i.unstable_IdlePriority,
        rt = {},
        at = void 0 !== Xe ? Xe : function () {},
        ot = null,
        it = null,
        lt = false,
        ct = qe(),
        st =
          1e4 > ct
            ? qe
            : function () {
                return qe() - ct;
              };
      function ut() {
        switch (Qe()) {
          case Ze:
            return 99;
          case Je:
            return 98;
          case et:
            return 97;
          case tt:
            return 96;
          case nt:
            return 95;
          default:
            throw Error(l(332));
        }
      }
      function dt(e) {
        switch (e) {
          case 99:
            return Ze;
          case 98:
            return Je;
          case 97:
            return et;
          case 96:
            return tt;
          case 95:
            return nt;
          default:
            throw Error(l(332));
        }
      }
      function ft(e, t) {
        return (e = dt(e)), Ke(e, t);
      }
      function pt(e, t, n) {
        return (e = dt(e)), We(e, t, n);
      }
      function mt(e) {
        return null === ot ? ((ot = [e]), (it = We(Ze, ht))) : ot.push(e), rt;
      }
      function gt() {
        if (null !== it) {
          var e = it;
          (it = null), Ve(e);
        }
        ht();
      }
      function ht() {
        if (!lt && null !== ot) {
          lt = !0;
          var e = 0;
          try {
            var t = ot;
            ft(99, function () {
              for (; e < t.length; e++) {
                var n = t[e];
                do {
                  n = n(!0);
                } while (null !== n);
              }
            }),
              (ot = null);
          } catch (t) {
            throw (null !== ot && (ot = ot.slice(e + 1)), We(Ze, gt), t);
          } finally {
            lt = false;
          }
        }
      }
      var Et = 3;
      function vt(e, t, n) {
        return 1073741821 - (1 + (((1073741821 - e + t / 10) / (n /= 10)) | 0)) * n;
      }
      var bt =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
        yt = Object.prototype.hasOwnProperty;
      function Tt(e, t) {
        if (bt(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return false;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return false;
        for (r = 0; r < n.length; r++) if (!yt.call(t, n[r]) || !bt(e[n[r]], t[n[r]])) return false;
        return !0;
      }
      function _t(e, t) {
        if (e && e.defaultProps) for (var n in ((t = a({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
        return t;
      }
      var xt = { current: null },
        wt = null,
        St = null,
        Ct = null;
      function Ot() {
        Ct = St = wt = null;
      }
      function It(e, t) {
        var n = e.type._context;
        K ? (Re(xt, n._currentValue), (n._currentValue = t)) : (Re(xt, n._currentValue2), (n._currentValue2 = t));
      }
      function Nt(e) {
        var t = xt.current;
        Pe(xt), (e = e.type._context), K ? (e._currentValue = t) : (e._currentValue2 = t);
      }
      function kt(e, t) {
        for (; null !== e; ) {
          var n = e.alternate;
          if (e.childExpirationTime < t) (e.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t);
          else {
            if (!(null !== n && n.childExpirationTime < t)) break;
            n.childExpirationTime = t;
          }
          e = e.return;
        }
      }
      function Pt(e, t) {
        (wt = e), (Ct = St = null), null !== (e = e.dependencies) && null !== e.firstContext && (e.expirationTime >= t && (fr = !0), (e.firstContext = null));
      }
      function Rt(e, t) {
        if (Ct !== e && false !== t && 0 !== t)
          if ((("number" == typeof t && 1073741823 !== t) || ((Ct = e), (t = 1073741823)), (t = { context: e, observedBits: t, next: null }), null === St)) {
            if (null === wt) throw Error(l(308));
            (St = t), (wt.dependencies = { expirationTime: 0, firstContext: t, responders: null });
          } else St = St.next = t;
        return K ? e._currentValue : e._currentValue2;
      }
      var Lt = false;
      function At(e) {
        return {
          baseState: e,
          firstUpdate: null,
          lastUpdate: null,
          firstCapturedUpdate: null,
          lastCapturedUpdate: null,
          firstEffect: null,
          lastEffect: null,
          firstCapturedEffect: null,
          lastCapturedEffect: null,
        };
      }
      function Mt(e) {
        return {
          baseState: e.baseState,
          firstUpdate: e.firstUpdate,
          lastUpdate: e.lastUpdate,
          firstCapturedUpdate: null,
          lastCapturedUpdate: null,
          firstEffect: null,
          lastEffect: null,
          firstCapturedEffect: null,
          lastCapturedEffect: null,
        };
      }
      function Ft(e, t) {
        return { expirationTime: e, suspenseConfig: t, tag: 0, payload: null, callback: null, next: null, nextEffect: null };
      }
      function Dt(e, t) {
        null === e.lastUpdate ? (e.firstUpdate = e.lastUpdate = t) : ((e.lastUpdate.next = t), (e.lastUpdate = t));
      }
      function jt(e, t) {
        var n = e.alternate;
        if (null === n) {
          var r = e.updateQueue,
            a = null;
          null === r && (r = e.updateQueue = At(e.memoizedState));
        } else
          (r = e.updateQueue),
            (a = n.updateQueue),
            null === r
              ? null === a
                ? ((r = e.updateQueue = At(e.memoizedState)), (a = n.updateQueue = At(n.memoizedState)))
                : (r = e.updateQueue = Mt(a))
              : null === a && (a = n.updateQueue = Mt(r));
        null === a || r === a ? Dt(r, t) : null === r.lastUpdate || null === a.lastUpdate ? (Dt(r, t), Dt(a, t)) : (Dt(r, t), (a.lastUpdate = t));
      }
      function Ut(e, t) {
        var n = e.updateQueue;
        null === (n = null === n ? (e.updateQueue = At(e.memoizedState)) : Bt(e, n)).lastCapturedUpdate
          ? (n.firstCapturedUpdate = n.lastCapturedUpdate = t)
          : ((n.lastCapturedUpdate.next = t), (n.lastCapturedUpdate = t));
      }
      function Bt(e, t) {
        var n = e.alternate;
        return null !== n && t === n.updateQueue && (t = e.updateQueue = Mt(t)), t;
      }
      function Ht(e, t, n, r, o, i) {
        switch (n.tag) {
          case 1:
            return "function" == typeof (e = n.payload) ? e.call(i, r, o) : e;
          case 3:
            e.effectTag = (-4097 & e.effectTag) | 64;
          case 0:
            if (null == (o = "function" == typeof (e = n.payload) ? e.call(i, r, o) : e)) break;
            return a({}, r, o);
          case 2:
            Lt = !0;
        }
        return r;
      }
      function zt(e, t, n, r, a) {
        Lt = false;
        for (var o = (t = Bt(e, t)).baseState, i = null, l = 0, c = t.firstUpdate, s = o; null !== c; ) {
          var u = c.expirationTime;
          u < a
            ? (null === i && ((i = c), (o = s)), l < u && (l = u))
            : (Ba(u, c.suspenseConfig),
              (s = Ht(e, 0, c, s, n, r)),
              null !== c.callback &&
                ((e.effectTag |= 32), (c.nextEffect = null), null === t.lastEffect ? (t.firstEffect = t.lastEffect = c) : ((t.lastEffect.nextEffect = c), (t.lastEffect = c)))),
            (c = c.next);
        }
        for (u = null, c = t.firstCapturedUpdate; null !== c; ) {
          var d = c.expirationTime;
          d < a
            ? (null === u && ((u = c), null === i && (o = s)), l < d && (l = d))
            : ((s = Ht(e, 0, c, s, n, r)),
              null !== c.callback &&
                ((e.effectTag |= 32),
                (c.nextEffect = null),
                null === t.lastCapturedEffect ? (t.firstCapturedEffect = t.lastCapturedEffect = c) : ((t.lastCapturedEffect.nextEffect = c), (t.lastCapturedEffect = c)))),
            (c = c.next);
        }
        null === i && (t.lastUpdate = null),
          null === u ? (t.lastCapturedUpdate = null) : (e.effectTag |= 32),
          null === i && null === u && (o = s),
          (t.baseState = o),
          (t.firstUpdate = i),
          (t.firstCapturedUpdate = u),
          Ha(l),
          (e.expirationTime = l),
          (e.memoizedState = s);
      }
      function Gt(e, t, n) {
        null !== t.firstCapturedUpdate &&
          (null !== t.lastUpdate && ((t.lastUpdate.next = t.firstCapturedUpdate), (t.lastUpdate = t.lastCapturedUpdate)), (t.firstCapturedUpdate = t.lastCapturedUpdate = null)),
          Yt(t.firstEffect, n),
          (t.firstEffect = t.lastEffect = null),
          Yt(t.firstCapturedEffect, n),
          (t.firstCapturedEffect = t.lastCapturedEffect = null);
      }
      function Yt(e, t) {
        for (; null !== e; ) {
          var n = e.callback;
          if (null !== n) {
            e.callback = null;
            var r = t;
            if ("function" != typeof n) throw Error(l(191, n));
            n.call(r);
          }
          e = e.nextEffect;
        }
      }
      var Kt = c.ReactCurrentBatchConfig,
        Wt = new o.Component().refs;
      function Vt(e, t, n, r) {
        (n = null == (n = n(r, (t = e.memoizedState))) ? t : a({}, t, n)), (e.memoizedState = n), null !== (r = e.updateQueue) && 0 === e.expirationTime && (r.baseState = n);
      }
      var $t = {
        isMounted: function (e) {
          return !!(e = e._reactInternalFiber) && C(e) === e;
        },
        enqueueSetState: function (e, t, n) {
          e = e._reactInternalFiber;
          var r = Ia(),
            a = Kt.suspense;
          ((a = Ft((r = Na(r, e, a)), a)).payload = t), null != n && (a.callback = n), jt(e, a), ka(e, r);
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternalFiber;
          var r = Ia(),
            a = Kt.suspense;
          ((a = Ft((r = Na(r, e, a)), a)).tag = 1), (a.payload = t), null != n && (a.callback = n), jt(e, a), ka(e, r);
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternalFiber;
          var n = Ia(),
            r = Kt.suspense;
          ((r = Ft((n = Na(n, e, r)), r)).tag = 2), null != t && (r.callback = t), jt(e, r), ka(e, n);
        },
      };
      function Xt(e, t, n, r, a, o, i) {
        return "function" == typeof (e = e.stateNode).shouldComponentUpdate
          ? e.shouldComponentUpdate(r, o, i)
          : !t.prototype || !t.prototype.isPureReactComponent || !Tt(n, r) || !Tt(a, o);
      }
      function qt(e, t, n) {
        var r = false,
          a = Le,
          o = t.contextType;
        return (
          "object" == typeof o && null !== o ? (o = Rt(o)) : ((a = je(t) ? Fe : Ae.current), (o = (r = null != (r = t.contextTypes)) ? De(e, a) : Le)),
          (t = new t(n, o)),
          (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
          (t.updater = $t),
          (e.stateNode = t),
          (t._reactInternalFiber = e),
          r && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a), (e.__reactInternalMemoizedMaskedChildContext = o)),
          t
        );
      }
      function Qt(e, t, n, r) {
        (e = t.state),
          "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
          "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
          t.state !== e && $t.enqueueReplaceState(t, t.state, null);
      }
      function Zt(e, t, n, r) {
        var a = e.stateNode;
        (a.props = n), (a.state = e.memoizedState), (a.refs = Wt);
        var o = t.contextType;
        "object" == typeof o && null !== o ? (a.context = Rt(o)) : ((o = je(t) ? Fe : Ae.current), (a.context = De(e, o))),
          null !== (o = e.updateQueue) && (zt(e, o, n, a, r), (a.state = e.memoizedState)),
          "function" == typeof (o = t.getDerivedStateFromProps) && (Vt(e, t, o, n), (a.state = e.memoizedState)),
          "function" == typeof t.getDerivedStateFromProps ||
            "function" == typeof a.getSnapshotBeforeUpdate ||
            ("function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount) ||
            ((t = a.state),
            "function" == typeof a.componentWillMount && a.componentWillMount(),
            "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(),
            t !== a.state && $t.enqueueReplaceState(a, a.state, null),
            null !== (o = e.updateQueue) && (zt(e, o, n, a, r), (a.state = e.memoizedState))),
          "function" == typeof a.componentDidMount && (e.effectTag |= 4);
      }
      var Jt = Array.isArray;
      function en(e, t, n) {
        if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
          if (n._owner) {
            if ((n = n._owner)) {
              if (1 !== n.tag) throw Error(l(309));
              var r = n.stateNode;
            }
            if (!r) throw Error(l(147, e));
            var a = "" + e;
            return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === a
              ? t.ref
              : (((t = function (e) {
                  var t = r.refs;
                  t === Wt && (t = r.refs = {}), null === e ? delete t[a] : (t[a] = e);
                })._stringRef = a),
                t);
          }
          if ("string" != typeof e) throw Error(l(284));
          if (!n._owner) throw Error(l(290, e));
        }
        return e;
      }
      function tn(e, t) {
        if ("textarea" !== e.type) throw Error(l(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, ""));
      }
      function nn(e) {
        function t(t, n) {
          if (e) {
            var r = t.lastEffect;
            null !== r ? ((r.nextEffect = n), (t.lastEffect = n)) : (t.firstEffect = t.lastEffect = n), (n.nextEffect = null), (n.effectTag = 8);
          }
        }
        function n(n, r) {
          if (!e) return null;
          for (; null !== r; ) t(n, r), (r = r.sibling);
          return null;
        }
        function r(e, t) {
          for (e = new Map(); null !== t; ) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
          return e;
        }
        function a(e, t, n) {
          return ((e = lo(e, t)).index = 0), (e.sibling = null), e;
        }
        function o(t, n, r) {
          return (t.index = r), e ? (null !== (r = t.alternate) ? ((r = r.index) < n ? ((t.effectTag = 2), n) : r) : ((t.effectTag = 2), n)) : n;
        }
        function i(t) {
          return e && null === t.alternate && (t.effectTag = 2), t;
        }
        function c(e, t, n, r) {
          return null === t || 6 !== t.tag ? (((t = uo(n, e.mode, r)).return = e), t) : (((t = a(t, n)).return = e), t);
        }
        function s(e, t, n, r) {
          return null !== t && t.elementType === n.type
            ? (((r = a(t, n.props)).ref = en(e, t, n)), (r.return = e), r)
            : (((r = co(n.type, n.key, n.props, null, e.mode, r)).ref = en(e, t, n)), (r.return = e), r);
        }
        function p(e, t, n, r) {
          return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation
            ? (((t = fo(n, e.mode, r)).return = e), t)
            : (((t = a(t, n.children || [])).return = e), t);
        }
        function m(e, t, n, r, o) {
          return null === t || 7 !== t.tag ? (((t = so(n, e.mode, r, o)).return = e), t) : (((t = a(t, n)).return = e), t);
        }
        function g(e, t, n) {
          if ("string" == typeof t || "number" == typeof t) return ((t = uo("" + t, e.mode, n)).return = e), t;
          if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
              case u:
                return ((n = co(t.type, t.key, t.props, null, e.mode, n)).ref = en(e, null, t)), (n.return = e), n;
              case d:
                return ((t = fo(t, e.mode, n)).return = e), t;
            }
            if (Jt(t) || w(t)) return ((t = so(t, e.mode, n, null)).return = e), t;
            tn(e, t);
          }
          return null;
        }
        function h(e, t, n, r) {
          var a = null !== t ? t.key : null;
          if ("string" == typeof n || "number" == typeof n) return null !== a ? null : c(e, t, "" + n, r);
          if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
              case u:
                return n.key === a ? (n.type === f ? m(e, t, n.props.children, r, a) : s(e, t, n, r)) : null;
              case d:
                return n.key === a ? p(e, t, n, r) : null;
            }
            if (Jt(n) || w(n)) return null !== a ? null : m(e, t, n, r, null);
            tn(e, n);
          }
          return null;
        }
        function E(e, t, n, r, a) {
          if ("string" == typeof r || "number" == typeof r) return c(t, (e = e.get(n) || null), "" + r, a);
          if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
              case u:
                return (e = e.get(null === r.key ? n : r.key) || null), r.type === f ? m(t, e, r.props.children, a, r.key) : s(t, e, r, a);
              case d:
                return p(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
            }
            if (Jt(r) || w(r)) return m(t, (e = e.get(n) || null), r, a, null);
            tn(t, r);
          }
          return null;
        }
        function v(a, i, l, c) {
          for (var s = null, u = null, d = i, f = (i = 0), p = null; null !== d && f < l.length; f++) {
            d.index > f ? ((p = d), (d = null)) : (p = d.sibling);
            var m = h(a, d, l[f], c);
            if (null === m) {
              null === d && (d = p);
              break;
            }
            e && d && null === m.alternate && t(a, d), (i = o(m, i, f)), null === u ? (s = m) : (u.sibling = m), (u = m), (d = p);
          }
          if (f === l.length) return n(a, d), s;
          if (null === d) {
            for (; f < l.length; f++) null !== (d = g(a, l[f], c)) && ((i = o(d, i, f)), null === u ? (s = d) : (u.sibling = d), (u = d));
            return s;
          }
          for (d = r(a, d); f < l.length; f++)
            null !== (p = E(d, a, f, l[f], c)) &&
              (e && null !== p.alternate && d.delete(null === p.key ? f : p.key), (i = o(p, i, f)), null === u ? (s = p) : (u.sibling = p), (u = p));
          return (
            e &&
              d.forEach(function (e) {
                return t(a, e);
              }),
            s
          );
        }
        function b(a, i, c, s) {
          var u = w(c);
          if ("function" != typeof u) throw Error(l(150));
          if (null == (c = u.call(c))) throw Error(l(151));
          for (var d = (u = null), f = i, p = (i = 0), m = null, v = c.next(); null !== f && !v.done; p++, v = c.next()) {
            f.index > p ? ((m = f), (f = null)) : (m = f.sibling);
            var b = h(a, f, v.value, s);
            if (null === b) {
              null === f && (f = m);
              break;
            }
            e && f && null === b.alternate && t(a, f), (i = o(b, i, p)), null === d ? (u = b) : (d.sibling = b), (d = b), (f = m);
          }
          if (v.done) return n(a, f), u;
          if (null === f) {
            for (; !v.done; p++, v = c.next()) null !== (v = g(a, v.value, s)) && ((i = o(v, i, p)), null === d ? (u = v) : (d.sibling = v), (d = v));
            return u;
          }
          for (f = r(a, f); !v.done; p++, v = c.next())
            null !== (v = E(f, a, p, v.value, s)) &&
              (e && null !== v.alternate && f.delete(null === v.key ? p : v.key), (i = o(v, i, p)), null === d ? (u = v) : (d.sibling = v), (d = v));
          return (
            e &&
              f.forEach(function (e) {
                return t(a, e);
              }),
            u
          );
        }
        return function (e, r, o, c) {
          var s = "object" == typeof o && null !== o && o.type === f && null === o.key;
          s && (o = o.props.children);
          var p = "object" == typeof o && null !== o;
          if (p)
            switch (o.$$typeof) {
              case u:
                e: {
                  for (p = o.key, s = r; null !== s; ) {
                    if (s.key === p) {
                      if (7 === s.tag ? o.type === f : s.elementType === o.type) {
                        n(e, s.sibling), ((r = a(s, o.type === f ? o.props.children : o.props)).ref = en(e, s, o)), (r.return = e), (e = r);
                        break e;
                      }
                      n(e, s);
                      break;
                    }
                    t(e, s), (s = s.sibling);
                  }
                  o.type === f
                    ? (((r = so(o.props.children, e.mode, c, o.key)).return = e), (e = r))
                    : (((c = co(o.type, o.key, o.props, null, e.mode, c)).ref = en(e, r, o)), (c.return = e), (e = c));
                }
                return i(e);
              case d:
                e: {
                  for (s = o.key; null !== r; ) {
                    if (r.key === s) {
                      if (4 === r.tag && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
                        n(e, r.sibling), ((r = a(r, o.children || [])).return = e), (e = r);
                        break e;
                      }
                      n(e, r);
                      break;
                    }
                    t(e, r), (r = r.sibling);
                  }
                  ((r = fo(o, e.mode, c)).return = e), (e = r);
                }
                return i(e);
            }
          if ("string" == typeof o || "number" == typeof o)
            return (o = "" + o), null !== r && 6 === r.tag ? (n(e, r.sibling), ((r = a(r, o)).return = e), (e = r)) : (n(e, r), ((r = uo(o, e.mode, c)).return = e), (e = r)), i(e);
          if (Jt(o)) return v(e, r, o, c);
          if (w(o)) return b(e, r, o, c);
          if ((p && tn(e, o), void 0 === o && !s))
            switch (e.tag) {
              case 1:
              case 0:
                throw ((e = e.type), Error(l(152, e.displayName || e.name || "Component")));
            }
          return n(e, r);
        };
      }
      var rn = nn(!0),
        an = nn(false),
        on = {},
        ln = { current: on },
        cn = { current: on },
        sn = { current: on };
      function un(e) {
        if (e === on) throw Error(l(174));
        return e;
      }
      function dn(e, t) {
        Re(sn, t), Re(cn, e), Re(ln, on), (t = P(t)), Pe(ln), Re(ln, t);
      }
      function fn(e) {
        Pe(ln), Pe(cn), Pe(sn);
      }
      function pn(e) {
        var t = un(sn.current),
          n = un(ln.current);
        n !== (t = R(n, e.type, t)) && (Re(cn, e), Re(ln, t));
      }
      function mn(e) {
        cn.current === e && (Pe(ln), Pe(cn));
      }
      var gn = { current: 0 };
      function hn(e) {
        for (var t = e; null !== t; ) {
          if (13 === t.tag) {
            var n = t.memoizedState;
            if (null !== n && (null === (n = n.dehydrated) || ve(n) || be(n))) return t;
          } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 != (64 & t.effectTag)) return t;
          } else if (null !== t.child) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break;
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
      }
      function En(e, t) {
        return { responder: e, props: t };
      }
      var vn = c.ReactCurrentDispatcher,
        bn = c.ReactCurrentBatchConfig,
        yn = 0,
        Tn = null,
        _n = null,
        xn = null,
        wn = null,
        Sn = null,
        Cn = null,
        On = 0,
        In = null,
        Nn = 0,
        kn = false,
        Pn = null,
        Rn = 0;
      function Ln() {
        throw Error(l(321));
      }
      function An(e, t) {
        if (null === t) return false;
        for (var n = 0; n < t.length && n < e.length; n++) if (!bt(e[n], t[n])) return false;
        return !0;
      }
      function Mn(e, t, n, r, a, o) {
        if (((yn = o), (Tn = t), (xn = null !== e ? e.memoizedState : null), (vn.current = null === xn ? er : tr), (t = n(r, a)), kn)) {
          do {
            (kn = false), (Rn += 1), (xn = null !== e ? e.memoizedState : null), (Cn = wn), (In = Sn = _n = null), (vn.current = tr), (t = n(r, a));
          } while (kn);
          (Pn = null), (Rn = 0);
        }
        if (
          ((vn.current = Jn),
          ((e = Tn).memoizedState = wn),
          (e.expirationTime = On),
          (e.updateQueue = In),
          (e.effectTag |= Nn),
          (e = null !== _n && null !== _n.next),
          (yn = 0),
          (Cn = Sn = wn = xn = _n = Tn = null),
          (On = 0),
          (In = null),
          (Nn = 0),
          e)
        )
          throw Error(l(300));
        return t;
      }
      function Fn() {
        (vn.current = Jn), (yn = 0), (Cn = Sn = wn = xn = _n = Tn = null), (On = 0), (In = null), (Nn = 0), (kn = false), (Pn = null), (Rn = 0);
      }
      function Dn() {
        var e = { memoizedState: null, baseState: null, queue: null, baseUpdate: null, next: null };
        return null === Sn ? (wn = Sn = e) : (Sn = Sn.next = e), Sn;
      }
      function jn() {
        if (null !== Cn) (Cn = (Sn = Cn).next), (xn = null !== (_n = xn) ? _n.next : null);
        else {
          if (null === xn) throw Error(l(310));
          var e = { memoizedState: (_n = xn).memoizedState, baseState: _n.baseState, queue: _n.queue, baseUpdate: _n.baseUpdate, next: null };
          (Sn = null === Sn ? (wn = e) : (Sn.next = e)), (xn = _n.next);
        }
        return Sn;
      }
      function Un(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
      function Bn(e) {
        var t = jn(),
          n = t.queue;
        if (null === n) throw Error(l(311));
        if (((n.lastRenderedReducer = e), 0 < Rn)) {
          var r = n.dispatch;
          if (null !== Pn) {
            var a = Pn.get(n);
            if (void 0 !== a) {
              Pn.delete(n);
              var o = t.memoizedState;
              do {
                (o = e(o, a.action)), (a = a.next);
              } while (null !== a);
              return bt(o, t.memoizedState) || (fr = !0), (t.memoizedState = o), t.baseUpdate === n.last && (t.baseState = o), (n.lastRenderedState = o), [o, r];
            }
          }
          return [t.memoizedState, r];
        }
        r = n.last;
        var i = t.baseUpdate;
        if (((o = t.baseState), null !== i ? (null !== r && (r.next = null), (r = i.next)) : (r = null !== r ? r.next : null), null !== r)) {
          var c = (a = null),
            s = r,
            u = false;
          do {
            var d = s.expirationTime;
            d < yn ? (u || ((u = !0), (c = i), (a = o)), d > On && Ha((On = d))) : (Ba(d, s.suspenseConfig), (o = s.eagerReducer === e ? s.eagerState : e(o, s.action))),
              (i = s),
              (s = s.next);
          } while (null !== s && s !== r);
          u || ((c = i), (a = o)), bt(o, t.memoizedState) || (fr = !0), (t.memoizedState = o), (t.baseUpdate = c), (t.baseState = a), (n.lastRenderedState = o);
        }
        return [t.memoizedState, n.dispatch];
      }
      function Hn(e) {
        var t = Dn();
        return (
          "function" == typeof e && (e = e()),
          (t.memoizedState = t.baseState = e),
          (e = (e = t.queue = { last: null, dispatch: null, lastRenderedReducer: Un, lastRenderedState: e }).dispatch = Zn.bind(null, Tn, e)),
          [t.memoizedState, e]
        );
      }
      function zn(e) {
        return Bn(Un);
      }
      function Gn(e, t, n, r) {
        return (
          (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
          null === In
            ? ((In = { lastEffect: null }).lastEffect = e.next = e)
            : null === (t = In.lastEffect)
            ? (In.lastEffect = e.next = e)
            : ((n = t.next), (t.next = e), (e.next = n), (In.lastEffect = e)),
          e
        );
      }
      function Yn(e, t, n, r) {
        var a = Dn();
        (Nn |= e), (a.memoizedState = Gn(t, n, void 0, void 0 === r ? null : r));
      }
      function Kn(e, t, n, r) {
        var a = jn();
        r = void 0 === r ? null : r;
        var o = void 0;
        if (null !== _n) {
          var i = _n.memoizedState;
          if (((o = i.destroy), null !== r && An(r, i.deps))) return void Gn(0, n, o, r);
        }
        (Nn |= e), (a.memoizedState = Gn(t, n, o, r));
      }
      function Wn(e, t) {
        return Yn(516, 192, e, t);
      }
      function Vn(e, t) {
        return Kn(516, 192, e, t);
      }
      function $n(e, t) {
        return "function" == typeof t
          ? ((e = e()),
            t(e),
            function () {
              t(null);
            })
          : null != t
          ? ((e = e()),
            (t.current = e),
            function () {
              t.current = null;
            })
          : void 0;
      }
      function Xn() {}
      function qn(e, t) {
        return (Dn().memoizedState = [e, void 0 === t ? null : t]), e;
      }
      function Qn(e, t) {
        var n = jn();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && An(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
      }
      function Zn(e, t, n) {
        if (!(25 > Rn)) throw Error(l(301));
        var r = e.alternate;
        if (e === Tn || (null !== r && r === Tn))
          if (
            ((kn = !0),
            (e = { expirationTime: yn, suspenseConfig: null, action: n, eagerReducer: null, eagerState: null, next: null }),
            null === Pn && (Pn = new Map()),
            void 0 === (n = Pn.get(t)))
          )
            Pn.set(t, e);
          else {
            for (t = n; null !== t.next; ) t = t.next;
            t.next = e;
          }
        else {
          var a = Ia(),
            o = Kt.suspense;
          o = { expirationTime: (a = Na(a, e, o)), suspenseConfig: o, action: n, eagerReducer: null, eagerState: null, next: null };
          var i = t.last;
          if (null === i) o.next = o;
          else {
            var c = i.next;
            null !== c && (o.next = c), (i.next = o);
          }
          if (((t.last = o), 0 === e.expirationTime && (null === r || 0 === r.expirationTime) && null !== (r = t.lastRenderedReducer)))
            try {
              var s = t.lastRenderedState,
                u = r(s, n);
              if (((o.eagerReducer = r), (o.eagerState = u), bt(u, s))) return;
            } catch (e) {}
          ka(e, a);
        }
      }
      var Jn = {
          readContext: Rt,
          useCallback: Ln,
          useContext: Ln,
          useEffect: Ln,
          useImperativeHandle: Ln,
          useLayoutEffect: Ln,
          useMemo: Ln,
          useReducer: Ln,
          useRef: Ln,
          useState: Ln,
          useDebugValue: Ln,
          useResponder: Ln,
          useDeferredValue: Ln,
          useTransition: Ln,
        },
        er = {
          readContext: Rt,
          useCallback: qn,
          useContext: Rt,
          useEffect: Wn,
          useImperativeHandle: function (e, t, n) {
            return (n = null != n ? n.concat([e]) : null), Yn(4, 36, $n.bind(null, t, e), n);
          },
          useLayoutEffect: function (e, t) {
            return Yn(4, 36, e, t);
          },
          useMemo: function (e, t) {
            var n = Dn();
            return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
          },
          useReducer: function (e, t, n) {
            var r = Dn();
            return (
              (t = void 0 !== n ? n(t) : t),
              (r.memoizedState = r.baseState = t),
              (e = (e = r.queue = { last: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }).dispatch = Zn.bind(null, Tn, e)),
              [r.memoizedState, e]
            );
          },
          useRef: function (e) {
            return (e = { current: e }), (Dn().memoizedState = e);
          },
          useState: Hn,
          useDebugValue: Xn,
          useResponder: En,
          useDeferredValue: function (e, t) {
            var n = Hn(e),
              r = n[0],
              a = n[1];
            return (
              Wn(
                function () {
                  i.unstable_next(function () {
                    var n = bn.suspense;
                    bn.suspense = void 0 === t ? null : t;
                    try {
                      a(e);
                    } finally {
                      bn.suspense = n;
                    }
                  });
                },
                [e, t]
              ),
              r
            );
          },
          useTransition: function (e) {
            var t = Hn(false),
              n = t[0],
              r = t[1];
            return [
              qn(
                function (t) {
                  r(!0),
                    i.unstable_next(function () {
                      var n = bn.suspense;
                      bn.suspense = void 0 === e ? null : e;
                      try {
                        r(false), t();
                      } finally {
                        bn.suspense = n;
                      }
                    });
                },
                [e, n]
              ),
              n,
            ];
          },
        },
        tr = {
          readContext: Rt,
          useCallback: Qn,
          useContext: Rt,
          useEffect: Vn,
          useImperativeHandle: function (e, t, n) {
            return (n = null != n ? n.concat([e]) : null), Kn(4, 36, $n.bind(null, t, e), n);
          },
          useLayoutEffect: function (e, t) {
            return Kn(4, 36, e, t);
          },
          useMemo: function (e, t) {
            var n = jn();
            t = void 0 === t ? null : t;
            var r = n.memoizedState;
            return null !== r && null !== t && An(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
          },
          useReducer: Bn,
          useRef: function () {
            return jn().memoizedState;
          },
          useState: zn,
          useDebugValue: Xn,
          useResponder: En,
          useDeferredValue: function (e, t) {
            var n = zn(),
              r = n[0],
              a = n[1];
            return (
              Vn(
                function () {
                  i.unstable_next(function () {
                    var n = bn.suspense;
                    bn.suspense = void 0 === t ? null : t;
                    try {
                      a(e);
                    } finally {
                      bn.suspense = n;
                    }
                  });
                },
                [e, t]
              ),
              r
            );
          },
          useTransition: function (e) {
            var t = zn(),
              n = t[0],
              r = t[1];
            return [
              Qn(
                function (t) {
                  r(!0),
                    i.unstable_next(function () {
                      var n = bn.suspense;
                      bn.suspense = void 0 === e ? null : e;
                      try {
                        r(false), t();
                      } finally {
                        bn.suspense = n;
                      }
                    });
                },
                [e, n]
              ),
              n,
            ];
          },
        },
        nr = null,
        rr = null,
        ar = false;
      function or(e, t) {
        var n = oo(5, null, null, 0);
        (n.elementType = "DELETED"),
          (n.type = "DELETED"),
          (n.stateNode = t),
          (n.return = e),
          (n.effectTag = 8),
          null !== e.lastEffect ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n)) : (e.firstEffect = e.lastEffect = n);
      }
      function ir(e, t) {
        switch (e.tag) {
          case 5:
            return null !== (t = he(t, e.type, e.pendingProps)) && ((e.stateNode = t), !0);
          case 6:
            return null !== (t = Ee(t, e.pendingProps)) && ((e.stateNode = t), !0);
          case 13:
          default:
            return false;
        }
      }
      function lr(e) {
        if (ar) {
          var t = rr;
          if (t) {
            var n = t;
            if (!ir(e, t)) {
              if (!(t = ye(n)) || !ir(e, t)) return (e.effectTag = (-1025 & e.effectTag) | 2), (ar = false), void (nr = e);
              or(nr, n);
            }
            (nr = e), (rr = Te(t));
          } else (e.effectTag = (-1025 & e.effectTag) | 2), (ar = false), (nr = e);
        }
      }
      function cr(e) {
        for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
        nr = e;
      }
      function sr(e) {
        if (!$ || e !== nr) return false;
        if (!ar) return cr(e), (ar = !0), false;
        var t = e.type;
        if (5 !== e.tag || ("head" !== t && "body" !== t && !U(t, e.memoizedProps))) for (t = rr; t; ) or(e, t), (t = ye(t));
        if ((cr(e), 13 === e.tag)) {
          if (!$) throw Error(l(316));
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(l(317));
          rr = we(e);
        } else rr = nr ? ye(e.stateNode) : null;
        return !0;
      }
      function ur() {
        $ && ((rr = nr = null), (ar = false));
      }
      var dr = c.ReactCurrentOwner,
        fr = false;
      function pr(e, t, n, r) {
        t.child = null === e ? an(t, null, n, r) : rn(t, e.child, n, r);
      }
      function mr(e, t, n, r, a) {
        n = n.render;
        var o = t.ref;
        return (
          Pt(t, a),
          (r = Mn(e, t, n, r, o, a)),
          null === e || fr
            ? ((t.effectTag |= 1), pr(e, t, r, a), t.child)
            : ((t.updateQueue = e.updateQueue), (t.effectTag &= -517), e.expirationTime <= a && (e.expirationTime = 0), Pr(e, t, a))
        );
      }
      function gr(e, t, n, r, a, o) {
        if (null === e) {
          var i = n.type;
          return "function" != typeof i || io(i) || void 0 !== i.defaultProps || null !== n.compare || void 0 !== n.defaultProps
            ? (((e = co(n.type, null, r, null, t.mode, o)).ref = t.ref), (e.return = t), (t.child = e))
            : ((t.tag = 15), (t.type = i), hr(e, t, i, r, a, o));
        }
        return (
          (i = e.child),
          a < o && ((a = i.memoizedProps), (n = null !== (n = n.compare) ? n : Tt)(a, r) && e.ref === t.ref)
            ? Pr(e, t, o)
            : ((t.effectTag |= 1), ((e = lo(i, r)).ref = t.ref), (e.return = t), (t.child = e))
        );
      }
      function hr(e, t, n, r, a, o) {
        return null !== e && Tt(e.memoizedProps, r) && e.ref === t.ref && ((fr = false), a < o) ? Pr(e, t, o) : vr(e, t, n, r, o);
      }
      function Er(e, t) {
        var n = t.ref;
        ((null === e && null !== n) || (null !== e && e.ref !== n)) && (t.effectTag |= 128);
      }
      function vr(e, t, n, r, a) {
        var o = je(n) ? Fe : Ae.current;
        return (
          (o = De(t, o)),
          Pt(t, a),
          (n = Mn(e, t, n, r, o, a)),
          null === e || fr
            ? ((t.effectTag |= 1), pr(e, t, n, a), t.child)
            : ((t.updateQueue = e.updateQueue), (t.effectTag &= -517), e.expirationTime <= a && (e.expirationTime = 0), Pr(e, t, a))
        );
      }
      function br(e, t, n, r, a) {
        if (je(n)) {
          var o = !0;
          Ge(t);
        } else o = false;
        if ((Pt(t, a), null === t.stateNode)) null !== e && ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)), qt(t, n, r), Zt(t, n, r, a), (r = !0);
        else if (null === e) {
          var i = t.stateNode,
            l = t.memoizedProps;
          i.props = l;
          var c = i.context,
            s = n.contextType;
          "object" == typeof s && null !== s ? (s = Rt(s)) : (s = De(t, (s = je(n) ? Fe : Ae.current)));
          var u = n.getDerivedStateFromProps,
            d = "function" == typeof u || "function" == typeof i.getSnapshotBeforeUpdate;
          d || ("function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps) || ((l !== r || c !== s) && Qt(t, i, r, s)), (Lt = false);
          var f = t.memoizedState;
          c = i.state = f;
          var p = t.updateQueue;
          null !== p && (zt(t, p, r, i, a), (c = t.memoizedState)),
            l !== r || f !== c || Me.current || Lt
              ? ("function" == typeof u && (Vt(t, n, u, r), (c = t.memoizedState)),
                (l = Lt || Xt(t, n, l, r, f, c, s))
                  ? (d ||
                      ("function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount) ||
                      ("function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()),
                    "function" == typeof i.componentDidMount && (t.effectTag |= 4))
                  : ("function" == typeof i.componentDidMount && (t.effectTag |= 4), (t.memoizedProps = r), (t.memoizedState = c)),
                (i.props = r),
                (i.state = c),
                (i.context = s),
                (r = l))
              : ("function" == typeof i.componentDidMount && (t.effectTag |= 4), (r = false));
        } else
          (i = t.stateNode),
            (l = t.memoizedProps),
            (i.props = t.type === t.elementType ? l : _t(t.type, l)),
            (c = i.context),
            "object" == typeof (s = n.contextType) && null !== s ? (s = Rt(s)) : (s = De(t, (s = je(n) ? Fe : Ae.current))),
            (d = "function" == typeof (u = n.getDerivedStateFromProps) || "function" == typeof i.getSnapshotBeforeUpdate) ||
              ("function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps) ||
              ((l !== r || c !== s) && Qt(t, i, r, s)),
            (Lt = false),
            (c = t.memoizedState),
            (f = i.state = c),
            null !== (p = t.updateQueue) && (zt(t, p, r, i, a), (f = t.memoizedState)),
            l !== r || c !== f || Me.current || Lt
              ? ("function" == typeof u && (Vt(t, n, u, r), (f = t.memoizedState)),
                (u = Lt || Xt(t, n, l, r, c, f, s))
                  ? (d ||
                      ("function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate) ||
                      ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(r, f, s),
                      "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, f, s)),
                    "function" == typeof i.componentDidUpdate && (t.effectTag |= 4),
                    "function" == typeof i.getSnapshotBeforeUpdate && (t.effectTag |= 256))
                  : ("function" != typeof i.componentDidUpdate || (l === e.memoizedProps && c === e.memoizedState) || (t.effectTag |= 4),
                    "function" != typeof i.getSnapshotBeforeUpdate || (l === e.memoizedProps && c === e.memoizedState) || (t.effectTag |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = f)),
                (i.props = r),
                (i.state = f),
                (i.context = s),
                (r = u))
              : ("function" != typeof i.componentDidUpdate || (l === e.memoizedProps && c === e.memoizedState) || (t.effectTag |= 4),
                "function" != typeof i.getSnapshotBeforeUpdate || (l === e.memoizedProps && c === e.memoizedState) || (t.effectTag |= 256),
                (r = false));
        return yr(e, t, n, r, o, a);
      }
      function yr(e, t, n, r, a, o) {
        Er(e, t);
        var i = 0 != (64 & t.effectTag);
        if (!r && !i) return a && Ye(t, n, false), Pr(e, t, o);
        (r = t.stateNode), (dr.current = t);
        var l = i && "function" != typeof n.getDerivedStateFromError ? null : r.render();
        return (
          (t.effectTag |= 1),
          null !== e && i ? ((t.child = rn(t, e.child, null, o)), (t.child = rn(t, null, l, o))) : pr(e, t, l, o),
          (t.memoizedState = r.state),
          a && Ye(t, n, !0),
          t.child
        );
      }
      function Tr(e) {
        var t = e.stateNode;
        t.pendingContext ? He(0, t.pendingContext, t.pendingContext !== t.context) : t.context && He(0, t.context, false), dn(e, t.containerInfo);
      }
      var _r,
        xr,
        wr,
        Sr,
        Cr = { dehydrated: null, retryTime: 0 };
      function Or(e, t, n) {
        var r,
          a = t.mode,
          o = t.pendingProps,
          i = gn.current,
          l = false;
        if (
          ((r = 0 != (64 & t.effectTag)) || (r = 0 != (2 & i) && (null === e || null !== e.memoizedState)),
          r ? ((l = !0), (t.effectTag &= -65)) : (null !== e && null === e.memoizedState) || void 0 === o.fallback || !0 === o.unstable_avoidThisFallback || (i |= 1),
          Re(gn, 1 & i),
          null === e)
        ) {
          if ((void 0 !== o.fallback && lr(t), l)) {
            if (((l = o.fallback), ((o = so(null, a, 0, null)).return = t), 0 == (2 & t.mode)))
              for (e = null !== t.memoizedState ? t.child.child : t.child, o.child = e; null !== e; ) (e.return = o), (e = e.sibling);
            return ((n = so(l, a, n, null)).return = t), (o.sibling = n), (t.memoizedState = Cr), (t.child = o), n;
          }
          return (a = o.children), (t.memoizedState = null), (t.child = an(t, null, a, n));
        }
        if (null !== e.memoizedState) {
          if (((a = (e = e.child).sibling), l)) {
            if (((o = o.fallback), ((n = lo(e, e.pendingProps)).return = t), 0 == (2 & t.mode) && (l = null !== t.memoizedState ? t.child.child : t.child) !== e.child))
              for (n.child = l; null !== l; ) (l.return = n), (l = l.sibling);
            return ((a = lo(a, o, a.expirationTime)).return = t), (n.sibling = a), (n.childExpirationTime = 0), (t.memoizedState = Cr), (t.child = n), a;
          }
          return (n = rn(t, e.child, o.children, n)), (t.memoizedState = null), (t.child = n);
        }
        if (((e = e.child), l)) {
          if (((l = o.fallback), ((o = so(null, a, 0, null)).return = t), (o.child = e), null !== e && (e.return = o), 0 == (2 & t.mode)))
            for (e = null !== t.memoizedState ? t.child.child : t.child, o.child = e; null !== e; ) (e.return = o), (e = e.sibling);
          return ((n = so(l, a, n, null)).return = t), (o.sibling = n), (n.effectTag |= 2), (o.childExpirationTime = 0), (t.memoizedState = Cr), (t.child = o), n;
        }
        return (t.memoizedState = null), (t.child = rn(t, e, o.children, n));
      }
      function Ir(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t), kt(e.return, t);
      }
      function Nr(e, t, n, r, a, o) {
        var i = e.memoizedState;
        null === i
          ? (e.memoizedState = { isBackwards: t, rendering: null, last: r, tail: n, tailExpiration: 0, tailMode: a, lastEffect: o })
          : ((i.isBackwards = t), (i.rendering = null), (i.last = r), (i.tail = n), (i.tailExpiration = 0), (i.tailMode = a), (i.lastEffect = o));
      }
      function kr(e, t, n) {
        var r = t.pendingProps,
          a = r.revealOrder,
          o = r.tail;
        if ((pr(e, t, r.children, n), 0 != (2 & (r = gn.current)))) (r = (1 & r) | 2), (t.effectTag |= 64);
        else {
          if (null !== e && 0 != (64 & e.effectTag))
            e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && Ir(e, n);
              else if (19 === e.tag) Ir(e, n);
              else if (null !== e.child) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === t) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          r &= 1;
        }
        if ((Re(gn, r), 0 == (2 & t.mode))) t.memoizedState = null;
        else
          switch (a) {
            case "forwards":
              for (n = t.child, a = null; null !== n; ) null !== (e = n.alternate) && null === hn(e) && (a = n), (n = n.sibling);
              null === (n = a) ? ((a = t.child), (t.child = null)) : ((a = n.sibling), (n.sibling = null)), Nr(t, false, a, n, o, t.lastEffect);
              break;
            case "backwards":
              for (n = null, a = t.child, t.child = null; null !== a; ) {
                if (null !== (e = a.alternate) && null === hn(e)) {
                  t.child = a;
                  break;
                }
                (e = a.sibling), (a.sibling = n), (n = a), (a = e);
              }
              Nr(t, !0, n, null, o, t.lastEffect);
              break;
            case "together":
              Nr(t, false, null, null, void 0, t.lastEffect);
              break;
            default:
              t.memoizedState = null;
          }
        return t.child;
      }
      function Pr(e, t, n) {
        null !== e && (t.dependencies = e.dependencies);
        var r = t.expirationTime;
        if ((0 !== r && Ha(r), t.childExpirationTime < n)) return null;
        if (null !== e && t.child !== e.child) throw Error(l(153));
        if (null !== t.child) {
          for (n = lo((e = t.child), e.pendingProps, e.expirationTime), t.child = n, n.return = t; null !== e.sibling; )
            (e = e.sibling), ((n = n.sibling = lo(e, e.pendingProps, e.expirationTime)).return = t);
          n.sibling = null;
        }
        return t.child;
      }
      function Rr(e) {
        e.effectTag |= 4;
      }
      if (W)
        (_r = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) F(e, n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (xr = function () {}),
          (wr = function (e, t, n, r, a) {
            if ((e = e.memoizedProps) !== r) {
              var o = t.stateNode,
                i = un(ln.current);
              (n = j(o, n, e, r, a, i)), (t.updateQueue = n) && Rr(t);
            }
          }),
          (Sr = function (e, t, n, r) {
            n !== r && Rr(t);
          });
      else if (V) {
        _r = function (e, t, n, r) {
          for (var a = t.child; null !== a; ) {
            if (5 === a.tag) {
              var o = a.stateNode;
              n && r && (o = me(o, a.type, a.memoizedProps, a)), F(e, o);
            } else if (6 === a.tag) (o = a.stateNode), n && r && (o = ge(o, a.memoizedProps, a)), F(e, o);
            else if (4 !== a.tag) {
              if (13 === a.tag && 0 != (4 & a.effectTag) && (o = null !== a.memoizedState)) {
                var i = a.child;
                if (null !== i && (null !== i.child && ((i.child.return = i), _r(e, i, !0, o)), null !== (o = i.sibling))) {
                  (o.return = a), (a = o);
                  continue;
                }
              }
              if (null !== a.child) {
                (a.child.return = a), (a = a.child);
                continue;
              }
            }
            if (a === t) break;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === t) return;
              a = a.return;
            }
            (a.sibling.return = a.return), (a = a.sibling);
          }
        };
        var Lr = function (e, t, n, r) {
          for (var a = t.child; null !== a; ) {
            if (5 === a.tag) {
              var o = a.stateNode;
              n && r && (o = me(o, a.type, a.memoizedProps, a)), de(e, o);
            } else if (6 === a.tag) (o = a.stateNode), n && r && (o = ge(o, a.memoizedProps, a)), de(e, o);
            else if (4 !== a.tag) {
              if (13 === a.tag && 0 != (4 & a.effectTag) && (o = null !== a.memoizedState)) {
                var i = a.child;
                if (null !== i && (null !== i.child && ((i.child.return = i), Lr(e, i, !0, o)), null !== (o = i.sibling))) {
                  (o.return = a), (a = o);
                  continue;
                }
              }
              if (null !== a.child) {
                (a.child.return = a), (a = a.child);
                continue;
              }
            }
            if (a === t) break;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === t) return;
              a = a.return;
            }
            (a.sibling.return = a.return), (a = a.sibling);
          }
        };
        (xr = function (e) {
          var t = e.stateNode;
          if (null !== e.firstEffect) {
            var n = t.containerInfo,
              r = ue(n);
            Lr(r, e, false, false), (t.pendingChildren = r), Rr(e), fe(n, r);
          }
        }),
          (wr = function (e, t, n, r, a) {
            var o = e.stateNode,
              i = e.memoizedProps;
            if ((e = null === t.firstEffect) && i === r) t.stateNode = o;
            else {
              var l = t.stateNode,
                c = un(ln.current),
                s = null;
              i !== r && (s = j(l, n, i, r, a, c)),
                e && null === s ? (t.stateNode = o) : ((o = se(o, s, n, i, r, t, e, l)), D(o, n, r, a, c) && Rr(t), (t.stateNode = o), e ? Rr(t) : _r(o, t, false, false));
            }
          }),
          (Sr = function (e, t, n, r) {
            n !== r && ((e = un(sn.current)), (n = un(ln.current)), (t.stateNode = H(r, e, n, t)), Rr(t));
          });
      } else (xr = function () {}), (wr = function () {}), (Sr = function () {});
      function Ar(e, t) {
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
            null === n ? (e.tail = null) : (n.sibling = null);
            break;
          case "collapsed":
            n = e.tail;
            for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
            null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
        }
      }
      function Mr(e) {
        switch (e.tag) {
          case 1:
            je(e.type) && Ue();
            var t = e.effectTag;
            return 4096 & t ? ((e.effectTag = (-4097 & t) | 64), e) : null;
          case 3:
            if ((fn(), Be(), 0 != (64 & (t = e.effectTag)))) throw Error(l(285));
            return (e.effectTag = (-4097 & t) | 64), e;
          case 5:
            return mn(e), null;
          case 13:
            return Pe(gn), 4096 & (t = e.effectTag) ? ((e.effectTag = (-4097 & t) | 64), e) : null;
          case 19:
            return Pe(gn), null;
          case 4:
            return fn(), null;
          case 10:
            return Nt(e), null;
          default:
            return null;
        }
      }
      function Fr(e, t) {
        return { value: e, source: t, stack: Ie(t) };
      }
      var Dr = "function" == typeof WeakSet ? WeakSet : Set;
      function jr(e, t) {
        var n = t.source,
          r = t.stack;
        null === r && null !== n && (r = Ie(n)), null !== n && S(n.type), (t = t.value), null !== e && 1 === e.tag && S(e.type);
        try {
          console.error(t);
        } catch (e) {
          setTimeout(function () {
            throw e;
          });
        }
      }
      function Ur(e) {
        var t = e.ref;
        if (null !== t)
          if ("function" == typeof t)
            try {
              t(null);
            } catch (t) {
              Ja(e, t);
            }
          else t.current = null;
      }
      function Br(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Hr(2, 0, t);
            break;
          case 1:
            if (256 & t.effectTag && null !== e) {
              var n = e.memoizedProps,
                r = e.memoizedState;
              (t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : _t(t.type, n), r)), (e.__reactInternalSnapshotBeforeUpdate = t);
            }
            break;
          case 3:
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(l(163));
        }
      }
      function Hr(e, t, n) {
        if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
          var r = (n = n.next);
          do {
            if (0 != (r.tag & e)) {
              var a = r.destroy;
              (r.destroy = void 0), void 0 !== a && a();
            }
            0 != (r.tag & t) && ((a = r.create), (r.destroy = a())), (r = r.next);
          } while (r !== n);
        }
      }
      function zr(e, t, n) {
        switch (("function" == typeof ro && ro(t), t.tag)) {
          case 0:
          case 11:
          case 14:
          case 15:
            if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
              var r = e.next;
              ft(97 < n ? 97 : n, function () {
                var e = r;
                do {
                  var n = e.destroy;
                  if (void 0 !== n) {
                    var a = t;
                    try {
                      n();
                    } catch (e) {
                      Ja(a, e);
                    }
                  }
                  e = e.next;
                } while (e !== r);
              });
            }
            break;
          case 1:
            Ur(t),
              "function" == typeof (n = t.stateNode).componentWillUnmount &&
                (function (e, t) {
                  try {
                    (t.props = e.memoizedProps), (t.state = e.memoizedState), t.componentWillUnmount();
                  } catch (t) {
                    Ja(e, t);
                  }
                })(t, n);
            break;
          case 5:
            Ur(t);
            break;
          case 4:
            W
              ? Vr(e, t, n)
              : V &&
                (function (e) {
                  if (V) {
                    e = e.stateNode.containerInfo;
                    var t = ue(e);
                    pe(e, t);
                  }
                })(t);
        }
      }
      function Gr(e, t, n) {
        for (var r = t; ; )
          if ((zr(e, r, n), null === r.child || (W && 4 === r.tag))) {
            if (r === t) break;
            for (; null === r.sibling; ) {
              if (null === r.return || r.return === t) return;
              r = r.return;
            }
            (r.sibling.return = r.return), (r = r.sibling);
          } else (r.child.return = r), (r = r.child);
      }
      function Yr(e) {
        var t = e.alternate;
        (e.return = null),
          (e.child = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.alternate = null),
          (e.firstEffect = null),
          (e.lastEffect = null),
          (e.pendingProps = null),
          (e.memoizedProps = null),
          null !== t && Yr(t);
      }
      function Kr(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag;
      }
      function Wr(e) {
        if (W) {
          e: {
            for (var t = e.return; null !== t; ) {
              if (Kr(t)) {
                var n = t;
                break e;
              }
              t = t.return;
            }
            throw Error(l(160));
          }
          switch (((t = n.stateNode), n.tag)) {
            case 5:
              var r = false;
              break;
            case 3:
            case 4:
              (t = t.containerInfo), (r = !0);
              break;
            default:
              throw Error(l(161));
          }
          16 & n.effectTag && (ae(t), (n.effectTag &= -17));
          e: t: for (n = e; ; ) {
            for (; null === n.sibling; ) {
              if (null === n.return || Kr(n.return)) {
                n = null;
                break e;
              }
              n = n.return;
            }
            for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag; ) {
              if (2 & n.effectTag) continue t;
              if (null === n.child || 4 === n.tag) continue t;
              (n.child.return = n), (n = n.child);
            }
            if (!(2 & n.effectTag)) {
              n = n.stateNode;
              break e;
            }
          }
          for (var a = e; ; ) {
            var o = 5 === a.tag || 6 === a.tag;
            if (o) (o = o ? a.stateNode : a.stateNode.instance), n ? (r ? te(t, o, n) : ee(t, o, n)) : r ? q(t, o) : X(t, o);
            else if (4 !== a.tag && null !== a.child) {
              (a.child.return = a), (a = a.child);
              continue;
            }
            if (a === e) break;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === e) return;
              a = a.return;
            }
            (a.sibling.return = a.return), (a = a.sibling);
          }
        }
      }
      function Vr(e, t, n) {
        for (var r, a, o = t, i = false; ; ) {
          if (!i) {
            i = o.return;
            e: for (;;) {
              if (null === i) throw Error(l(160));
              switch (((r = i.stateNode), i.tag)) {
                case 5:
                  a = false;
                  break e;
                case 3:
                case 4:
                  (r = r.containerInfo), (a = !0);
                  break e;
              }
              i = i.return;
            }
            i = !0;
          }
          if (5 === o.tag || 6 === o.tag) Gr(e, o, n), a ? re(r, o.stateNode) : ne(r, o.stateNode);
          else if (4 === o.tag) {
            if (null !== o.child) {
              (r = o.stateNode.containerInfo), (a = !0), (o.child.return = o), (o = o.child);
              continue;
            }
          } else if ((zr(e, o, n), null !== o.child)) {
            (o.child.return = o), (o = o.child);
            continue;
          }
          if (o === t) break;
          for (; null === o.sibling; ) {
            if (null === o.return || o.return === t) return;
            4 === (o = o.return).tag && (i = false);
          }
          (o.sibling.return = o.return), (o = o.sibling);
        }
      }
      function $r(e, t) {
        if (W)
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              Hr(4, 8, t);
              break;
            case 1:
              break;
            case 5:
              var n = t.stateNode;
              if (null != n) {
                var r = t.memoizedProps;
                e = null !== e ? e.memoizedProps : r;
                var a = t.type,
                  o = t.updateQueue;
                (t.updateQueue = null), null !== o && J(n, o, a, e, r, t);
              }
              break;
            case 6:
              if (null === t.stateNode) throw Error(l(162));
              (n = t.memoizedProps), Q(t.stateNode, null !== e ? e.memoizedProps : n, n);
              break;
            case 3:
              $ && (t = t.stateNode).hydrate && ((t.hydrate = false), Se(t.containerInfo));
              break;
            case 12:
              break;
            case 13:
              Xr(t), qr(t);
              break;
            case 19:
              qr(t);
              break;
            case 17:
            case 20:
            case 21:
              break;
            default:
              throw Error(l(163));
          }
        else {
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              return void Hr(4, 8, t);
            case 12:
              return;
            case 13:
              return Xr(t), void qr(t);
            case 19:
              return void qr(t);
            case 3:
              $ && (n = t.stateNode).hydrate && ((n.hydrate = false), Se(n.containerInfo));
          }
          e: if (V)
            switch (t.tag) {
              case 1:
              case 5:
              case 6:
              case 20:
                break e;
              case 3:
              case 4:
                (t = t.stateNode), pe(t.containerInfo, t.pendingChildren);
                break e;
              default:
                throw Error(l(163));
            }
        }
      }
      function Xr(e) {
        var t = e;
        if (null === e.memoizedState) var n = false;
        else (n = !0), (t = e.child), (ha = st());
        if (W && null !== t)
          e: if (((e = t), W))
            for (t = e; ; ) {
              if (5 === t.tag) {
                var r = t.stateNode;
                n ? oe(r) : le(t.stateNode, t.memoizedProps);
              } else if (6 === t.tag) (r = t.stateNode), n ? ie(r) : ce(r, t.memoizedProps);
              else {
                if (13 === t.tag && null !== t.memoizedState && null === t.memoizedState.dehydrated) {
                  ((r = t.child.sibling).return = t), (t = r);
                  continue;
                }
                if (null !== t.child) {
                  (t.child.return = t), (t = t.child);
                  continue;
                }
              }
              if (t === e) break e;
              for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) break e;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
      }
      function qr(e) {
        var t = e.updateQueue;
        if (null !== t) {
          e.updateQueue = null;
          var n = e.stateNode;
          null === n && (n = e.stateNode = new Dr()),
            t.forEach(function (t) {
              var r = to.bind(null, e, t);
              n.has(t) || (n.add(t), t.then(r, r));
            });
        }
      }
      var Qr = "function" == typeof WeakMap ? WeakMap : Map;
      function Zr(e, t, n) {
        ((n = Ft(n, null)).tag = 3), (n.payload = { element: null });
        var r = t.value;
        return (
          (n.callback = function () {
            va || ((va = !0), (ba = r)), jr(e, t);
          }),
          n
        );
      }
      function Jr(e, t, n) {
        (n = Ft(n, null)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" == typeof r) {
          var a = t.value;
          n.payload = function () {
            return jr(e, t), r(a);
          };
        }
        var o = e.stateNode;
        return (
          null !== o &&
            "function" == typeof o.componentDidCatch &&
            (n.callback = function () {
              "function" != typeof r && (null === ya ? (ya = new Set([this])) : ya.add(this), jr(e, t));
              var n = t.stack;
              this.componentDidCatch(t.value, { componentStack: null !== n ? n : "" });
            }),
          n
        );
      }
      var ea,
        ta = Math.ceil,
        na = c.ReactCurrentDispatcher,
        ra = c.ReactCurrentOwner,
        aa = 16,
        oa = 0,
        ia = null,
        la = null,
        ca = 0,
        sa = 0,
        ua = null,
        da = 1073741823,
        fa = 1073741823,
        pa = null,
        ma = 0,
        ga = false,
        ha = 0,
        Ea = null,
        va = false,
        ba = null,
        ya = null,
        Ta = false,
        _a = null,
        xa = 90,
        wa = null,
        Sa = 0,
        Ca = null,
        Oa = 0;
      function Ia() {
        return 0 != (48 & oa) ? 1073741821 - ((st() / 10) | 0) : 0 !== Oa ? Oa : (Oa = 1073741821 - ((st() / 10) | 0));
      }
      function Na(e, t, n) {
        if (0 == (2 & (t = t.mode))) return 1073741823;
        var r = ut();
        if (0 == (4 & t)) return 99 === r ? 1073741823 : 1073741822;
        if (0 != (oa & aa)) return ca;
        if (null !== n) e = vt(e, 0 | n.timeoutMs || 5e3, 250);
        else
          switch (r) {
            case 99:
              e = 1073741823;
              break;
            case 98:
              e = vt(e, 150, 100);
              break;
            case 97:
            case 96:
              e = vt(e, 5e3, 250);
              break;
            case 95:
              e = 2;
              break;
            default:
              throw Error(l(326));
          }
        return null !== ia && e === ca && --e, e;
      }
      function ka(e, t) {
        if (50 < Sa) throw ((Sa = 0), (Ca = null), Error(l(185)));
        if (null !== (e = Pa(e, t))) {
          var n = ut();
          1073741823 === t ? (0 != (8 & oa) && 0 == (48 & oa) ? Ma(e) : (La(e), 0 === oa && gt())) : La(e),
            0 == (4 & oa) || (98 !== n && 99 !== n) || (null === wa ? (wa = new Map([[e, t]])) : (void 0 === (n = wa.get(e)) || n > t) && wa.set(e, t));
        }
      }
      function Pa(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t);
        var r = e.return,
          a = null;
        if (null === r && 3 === e.tag) a = e.stateNode;
        else
          for (; null !== r; ) {
            if (
              ((n = r.alternate),
              r.childExpirationTime < t && (r.childExpirationTime = t),
              null !== n && n.childExpirationTime < t && (n.childExpirationTime = t),
              null === r.return && 3 === r.tag)
            ) {
              a = r.stateNode;
              break;
            }
            r = r.return;
          }
        return null !== a && (ia === a && (Ha(t), 4 === sa && go(a, ca)), ho(a, t)), a;
      }
      function Ra(e) {
        var t = e.lastExpiredTime;
        return 0 !== t ? t : mo(e, (t = e.firstPendingTime)) ? ((t = e.lastPingedTime) > (e = e.nextKnownPendingLevel) ? t : e) : t;
      }
      function La(e) {
        if (0 !== e.lastExpiredTime) (e.callbackExpirationTime = 1073741823), (e.callbackPriority = 99), (e.callbackNode = mt(Ma.bind(null, e)));
        else {
          var t = Ra(e),
            n = e.callbackNode;
          if (0 === t) null !== n && ((e.callbackNode = null), (e.callbackExpirationTime = 0), (e.callbackPriority = 90));
          else {
            var r = Ia();
            if (
              (1073741823 === t
                ? (r = 99)
                : 1 === t || 2 === t
                ? (r = 95)
                : (r = 0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r)) ? 99 : 250 >= r ? 98 : 5250 >= r ? 97 : 95),
              null !== n)
            ) {
              var a = e.callbackPriority;
              if (e.callbackExpirationTime === t && a >= r) return;
              n !== rt && Ve(n);
            }
            (e.callbackExpirationTime = t),
              (e.callbackPriority = r),
              (t = 1073741823 === t ? mt(Ma.bind(null, e)) : pt(r, Aa.bind(null, e), { timeout: 10 * (1073741821 - t) - st() })),
              (e.callbackNode = t);
          }
        }
      }
      function Aa(e, t) {
        if (((Oa = 0), t)) return Eo(e, (t = Ia())), La(e), null;
        var n = Ra(e);
        if (0 !== n) {
          if (((t = e.callbackNode), 0 != (48 & oa))) throw Error(l(327));
          if ((qa(), (e === ia && n === ca) || Da(e, n), null !== la)) {
            var r = oa;
            oa |= aa;
            for (var a = Ua(); ; )
              try {
                Ga();
                break;
              } catch (t) {
                ja(e, t);
              }
            if ((Ot(), (oa = r), (na.current = a), 1 === sa)) throw ((t = ua), Da(e, n), go(e, n), La(e), t);
            if (null === la)
              switch (((a = e.finishedWork = e.current.alternate), (e.finishedExpirationTime = n), (r = sa), (ia = null), r)) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 2:
                  Eo(e, 2 < n ? 2 : n);
                  break;
                case 3:
                  if ((go(e, n), n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = Wa(a)), 1073741823 === da && 10 < (a = ha + 500 - st()))) {
                    if (ga) {
                      var o = e.lastPingedTime;
                      if (0 === o || o >= n) {
                        (e.lastPingedTime = n), Da(e, n);
                        break;
                      }
                    }
                    if (0 !== (o = Ra(e)) && o !== n) break;
                    if (0 !== r && r !== n) {
                      e.lastPingedTime = r;
                      break;
                    }
                    e.timeoutHandle = z(Va.bind(null, e), a);
                    break;
                  }
                  Va(e);
                  break;
                case 4:
                  if ((go(e, n), n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = Wa(a)), ga && (0 === (a = e.lastPingedTime) || a >= n))) {
                    (e.lastPingedTime = n), Da(e, n);
                    break;
                  }
                  if (0 !== (a = Ra(e)) && a !== n) break;
                  if (0 !== r && r !== n) {
                    e.lastPingedTime = r;
                    break;
                  }
                  if (
                    (1073741823 !== fa
                      ? (r = 10 * (1073741821 - fa) - st())
                      : 1073741823 === da
                      ? (r = 0)
                      : ((r = 10 * (1073741821 - da) - 5e3),
                        0 > (r = (a = st()) - r) && (r = 0),
                        (n = 10 * (1073741821 - n) - a) <
                          (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ta(r / 1960)) - r) && (r = n)),
                    10 < r)
                  ) {
                    e.timeoutHandle = z(Va.bind(null, e), r);
                    break;
                  }
                  Va(e);
                  break;
                case 5:
                  if (1073741823 !== da && null !== pa) {
                    o = da;
                    var i = pa;
                    if (
                      (0 >= (r = 0 | i.busyMinDurationMs)
                        ? (r = 0)
                        : ((a = 0 | i.busyDelayMs), (r = (o = st() - (10 * (1073741821 - o) - (0 | i.timeoutMs || 5e3))) <= a ? 0 : a + r - o)),
                      10 < r)
                    ) {
                      go(e, n), (e.timeoutHandle = z(Va.bind(null, e), r));
                      break;
                    }
                  }
                  Va(e);
                  break;
                default:
                  throw Error(l(329));
              }
            if ((La(e), e.callbackNode === t)) return Aa.bind(null, e);
          }
        }
        return null;
      }
      function Ma(e) {
        var t = e.lastExpiredTime;
        if (((t = 0 !== t ? t : 1073741823), e.finishedExpirationTime === t)) Va(e);
        else {
          if (0 != (48 & oa)) throw Error(l(327));
          if ((qa(), (e === ia && t === ca) || Da(e, t), null !== la)) {
            var n = oa;
            oa |= aa;
            for (var r = Ua(); ; )
              try {
                za();
                break;
              } catch (t) {
                ja(e, t);
              }
            if ((Ot(), (oa = n), (na.current = r), 1 === sa)) throw ((n = ua), Da(e, t), go(e, t), La(e), n);
            if (null !== la) throw Error(l(261));
            (e.finishedWork = e.current.alternate), (e.finishedExpirationTime = t), (ia = null), Va(e), La(e);
          }
        }
        return null;
      }
      function Fa(e, t) {
        if (0 != (48 & oa)) throw Error(l(187));
        var n = oa;
        oa |= 1;
        try {
          return ft(99, e.bind(null, t));
        } finally {
          (oa = n), gt();
        }
      }
      function Da(e, t) {
        (e.finishedWork = null), (e.finishedExpirationTime = 0);
        var n = e.timeoutHandle;
        if ((n !== Y && ((e.timeoutHandle = Y), G(n)), null !== la))
          for (n = la.return; null !== n; ) {
            var r = n;
            switch (r.tag) {
              case 1:
                var a = r.type.childContextTypes;
                null != a && Ue();
                break;
              case 3:
                fn(), Be();
                break;
              case 5:
                mn(r);
                break;
              case 4:
                fn();
                break;
              case 13:
              case 19:
                Pe(gn);
                break;
              case 10:
                Nt(r);
            }
            n = n.return;
          }
        (ia = e), (la = lo(e.current, null)), (ca = t), (sa = 0), (ua = null), (fa = da = 1073741823), (pa = null), (ma = 0), (ga = false);
      }
      function ja(e, t) {
        for (;;) {
          try {
            if ((Ot(), Fn(), null === la || null === la.return)) return (sa = 1), (ua = t), null;
            e: {
              var n = e,
                r = la.return,
                a = la,
                o = t;
              if (((t = ca), (a.effectTag |= 2048), (a.firstEffect = a.lastEffect = null), null !== o && "object" == typeof o && "function" == typeof o.then)) {
                var i = o,
                  l = 0 != (1 & gn.current),
                  c = r;
                do {
                  var s;
                  if ((s = 13 === c.tag)) {
                    var u = c.memoizedState;
                    if (null !== u) s = null !== u.dehydrated;
                    else {
                      var d = c.memoizedProps;
                      s = void 0 !== d.fallback && (!0 !== d.unstable_avoidThisFallback || !l);
                    }
                  }
                  if (s) {
                    var f = c.updateQueue;
                    if (null === f) {
                      var p = new Set();
                      p.add(i), (c.updateQueue = p);
                    } else f.add(i);
                    if (0 == (2 & c.mode)) {
                      if (((c.effectTag |= 64), (a.effectTag &= -2981), 1 === a.tag))
                        if (null === a.alternate) a.tag = 17;
                        else {
                          var m = Ft(1073741823, null);
                          (m.tag = 2), jt(a, m);
                        }
                      a.expirationTime = 1073741823;
                      break e;
                    }
                    (o = void 0), (a = t);
                    var g = n.pingCache;
                    if ((null === g ? ((g = n.pingCache = new Qr()), (o = new Set()), g.set(i, o)) : void 0 === (o = g.get(i)) && ((o = new Set()), g.set(i, o)), !o.has(a))) {
                      o.add(a);
                      var h = eo.bind(null, n, i, a);
                      i.then(h, h);
                    }
                    (c.effectTag |= 4096), (c.expirationTime = t);
                    break e;
                  }
                  c = c.return;
                } while (null !== c);
                o = Error(
                  (S(a.type) || "A React component") +
                    " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." +
                    Ie(a)
                );
              }
              5 !== sa && (sa = 2), (o = Fr(o, a)), (c = r);
              do {
                switch (c.tag) {
                  case 3:
                    (i = o), (c.effectTag |= 4096), (c.expirationTime = t), Ut(c, Zr(c, i, t));
                    break e;
                  case 1:
                    i = o;
                    var E = c.type,
                      v = c.stateNode;
                    if (
                      0 == (64 & c.effectTag) &&
                      ("function" == typeof E.getDerivedStateFromError || (null !== v && "function" == typeof v.componentDidCatch && (null === ya || !ya.has(v))))
                    ) {
                      (c.effectTag |= 4096), (c.expirationTime = t), Ut(c, Jr(c, i, t));
                      break e;
                    }
                }
                c = c.return;
              } while (null !== c);
            }
            la = Ka(la);
          } catch (e) {
            t = e;
            continue;
          }
          break;
        }
      }
      function Ua() {
        var e = na.current;
        return (na.current = Jn), null === e ? Jn : e;
      }
      function Ba(e, t) {
        e < da && 2 < e && (da = e), null !== t && e < fa && 2 < e && ((fa = e), (pa = t));
      }
      function Ha(e) {
        e > ma && (ma = e);
      }
      function za() {
        for (; null !== la; ) la = Ya(la);
      }
      function Ga() {
        for (; null !== la && !$e(); ) la = Ya(la);
      }
      function Ya(e) {
        var t = ea(e.alternate, e, ca);
        return (e.memoizedProps = e.pendingProps), null === t && (t = Ka(e)), (ra.current = null), t;
      }
      function Ka(e) {
        la = e;
        do {
          var t = la.alternate;
          if (((e = la.return), 0 == (2048 & la.effectTag))) {
            e: {
              var n = t,
                r = ca,
                a = (t = la).pendingProps;
              switch (t.tag) {
                case 2:
                case 16:
                  break;
                case 15:
                case 0:
                  break;
                case 1:
                  je(t.type) && Ue();
                  break;
                case 3:
                  fn(),
                    Be(),
                    (a = t.stateNode).pendingContext && ((a.context = a.pendingContext), (a.pendingContext = null)),
                    (null === n || null === n.child) && sr(t) && Rr(t),
                    xr(t);
                  break;
                case 5:
                  mn(t);
                  var o = un(sn.current);
                  if (((r = t.type), null !== n && null != t.stateNode)) wr(n, t, r, a, o), n.ref !== t.ref && (t.effectTag |= 128);
                  else if (a) {
                    if (((n = un(ln.current)), sr(t))) {
                      if (((a = t), !$)) throw Error(l(175));
                      (n = _e(a.stateNode, a.type, a.memoizedProps, o, n, a)), (a.updateQueue = n), (n = null !== n) && Rr(t);
                    } else {
                      var i = M(r, a, o, n, t);
                      _r(i, t, false, false), (t.stateNode = i), D(i, r, a, o, n) && Rr(t);
                    }
                    null !== t.ref && (t.effectTag |= 128);
                  } else if (null === t.stateNode) throw Error(l(166));
                  break;
                case 6:
                  if (n && null != t.stateNode) Sr(n, t, n.memoizedProps, a);
                  else {
                    if ("string" != typeof a && null === t.stateNode) throw Error(l(166));
                    if (((n = un(sn.current)), (o = un(ln.current)), sr(t))) {
                      if (((n = t), !$)) throw Error(l(176));
                      (n = xe(n.stateNode, n.memoizedProps, n)) && Rr(t);
                    } else t.stateNode = H(a, n, o, t);
                  }
                  break;
                case 11:
                  break;
                case 13:
                  if ((Pe(gn), (a = t.memoizedState), 0 != (64 & t.effectTag))) {
                    t.expirationTime = r;
                    break e;
                  }
                  (a = null !== a),
                    (o = false),
                    null === n
                      ? void 0 !== t.memoizedProps.fallback && sr(t)
                      : ((o = null !== (r = n.memoizedState)),
                        a ||
                          null === r ||
                          (null !== (r = n.child.sibling) &&
                            (null !== (i = t.firstEffect) ? ((t.firstEffect = r), (r.nextEffect = i)) : ((t.firstEffect = t.lastEffect = r), (r.nextEffect = null)),
                            (r.effectTag = 8)))),
                    a &&
                      !o &&
                      0 != (2 & t.mode) &&
                      ((null === n && !0 !== t.memoizedProps.unstable_avoidThisFallback) || 0 != (1 & gn.current)
                        ? 0 === sa && (sa = 3)
                        : ((0 !== sa && 3 !== sa) || (sa = 4), 0 !== ma && null !== ia && (go(ia, ca), ho(ia, ma)))),
                    V && a && (t.effectTag |= 4),
                    W && (a || o) && (t.effectTag |= 4);
                  break;
                case 7:
                case 8:
                case 12:
                  break;
                case 4:
                  fn(), xr(t);
                  break;
                case 10:
                  Nt(t);
                  break;
                case 9:
                case 14:
                  break;
                case 17:
                  je(t.type) && Ue();
                  break;
                case 19:
                  if ((Pe(gn), null === (a = t.memoizedState))) break;
                  if (((o = 0 != (64 & t.effectTag)), null === (i = a.rendering))) {
                    if (o) Ar(a, false);
                    else if (0 !== sa || (null !== n && 0 != (64 & n.effectTag)))
                      for (n = t.child; null !== n; ) {
                        if (null !== (i = hn(n))) {
                          for (
                            t.effectTag |= 64,
                              Ar(a, false),
                              null !== (n = i.updateQueue) && ((t.updateQueue = n), (t.effectTag |= 4)),
                              null === a.lastEffect && (t.firstEffect = null),
                              t.lastEffect = a.lastEffect,
                              n = r,
                              a = t.child;
                            null !== a;

                          )
                            (r = n),
                              ((o = a).effectTag &= 2),
                              (o.nextEffect = null),
                              (o.firstEffect = null),
                              (o.lastEffect = null),
                              null === (i = o.alternate)
                                ? ((o.childExpirationTime = 0),
                                  (o.expirationTime = r),
                                  (o.child = null),
                                  (o.memoizedProps = null),
                                  (o.memoizedState = null),
                                  (o.updateQueue = null),
                                  (o.dependencies = null))
                                : ((o.childExpirationTime = i.childExpirationTime),
                                  (o.expirationTime = i.expirationTime),
                                  (o.child = i.child),
                                  (o.memoizedProps = i.memoizedProps),
                                  (o.memoizedState = i.memoizedState),
                                  (o.updateQueue = i.updateQueue),
                                  (r = i.dependencies),
                                  (o.dependencies = null === r ? null : { expirationTime: r.expirationTime, firstContext: r.firstContext, responders: r.responders })),
                              (a = a.sibling);
                          Re(gn, (1 & gn.current) | 2), (t = t.child);
                          break e;
                        }
                        n = n.sibling;
                      }
                  } else {
                    if (!o)
                      if (null !== (n = hn(i))) {
                        if (
                          ((t.effectTag |= 64),
                          (o = !0),
                          null !== (n = n.updateQueue) && ((t.updateQueue = n), (t.effectTag |= 4)),
                          Ar(a, !0),
                          null === a.tail && "hidden" === a.tailMode && !i.alternate)
                        ) {
                          null !== (t = t.lastEffect = a.lastEffect) && (t.nextEffect = null);
                          break;
                        }
                      } else st() > a.tailExpiration && 1 < r && ((t.effectTag |= 64), (o = !0), Ar(a, false), (t.expirationTime = t.childExpirationTime = r - 1));
                    a.isBackwards ? ((i.sibling = t.child), (t.child = i)) : (null !== (n = a.last) ? (n.sibling = i) : (t.child = i), (a.last = i));
                  }
                  if (null !== a.tail) {
                    0 === a.tailExpiration && (a.tailExpiration = st() + 500),
                      (n = a.tail),
                      (a.rendering = n),
                      (a.tail = n.sibling),
                      (a.lastEffect = t.lastEffect),
                      (n.sibling = null),
                      (a = gn.current),
                      Re(gn, (a = o ? (1 & a) | 2 : 1 & a)),
                      (t = n);
                    break e;
                  }
                  break;
                case 20:
                case 21:
                  break;
                default:
                  throw Error(l(156, t.tag));
              }
              t = null;
            }
            if (((n = la), 1 === ca || 1 !== n.childExpirationTime)) {
              for (a = 0, o = n.child; null !== o; ) (r = o.expirationTime) > a && (a = r), (i = o.childExpirationTime) > a && (a = i), (o = o.sibling);
              n.childExpirationTime = a;
            }
            if (null !== t) return t;
            null !== e &&
              0 == (2048 & e.effectTag) &&
              (null === e.firstEffect && (e.firstEffect = la.firstEffect),
              null !== la.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = la.firstEffect), (e.lastEffect = la.lastEffect)),
              1 < la.effectTag && (null !== e.lastEffect ? (e.lastEffect.nextEffect = la) : (e.firstEffect = la), (e.lastEffect = la)));
          } else {
            if (null !== (t = Mr(la))) return (t.effectTag &= 2047), t;
            null !== e && ((e.firstEffect = e.lastEffect = null), (e.effectTag |= 2048));
          }
          if (null !== (t = la.sibling)) return t;
          la = e;
        } while (null !== la);
        return 0 === sa && (sa = 5), null;
      }
      function Wa(e) {
        var t = e.expirationTime;
        return t > (e = e.childExpirationTime) ? t : e;
      }
      function Va(e) {
        var t = ut();
        return ft(99, $a.bind(null, e, t)), null;
      }
      function $a(e, t) {
        do {
          qa();
        } while (null !== _a);
        if (0 != (48 & oa)) throw Error(l(327));
        var n = e.finishedWork,
          r = e.finishedExpirationTime;
        if (null === n) return null;
        if (((e.finishedWork = null), (e.finishedExpirationTime = 0), n === e.current)) throw Error(l(177));
        (e.callbackNode = null), (e.callbackExpirationTime = 0), (e.callbackPriority = 90), (e.nextKnownPendingLevel = 0);
        var a = Wa(n);
        if (
          ((e.firstPendingTime = a),
          r <= e.lastSuspendedTime ? (e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0) : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1),
          r <= e.lastPingedTime && (e.lastPingedTime = 0),
          r <= e.lastExpiredTime && (e.lastExpiredTime = 0),
          e === ia && ((la = ia = null), (ca = 0)),
          1 < n.effectTag ? (null !== n.lastEffect ? ((n.lastEffect.nextEffect = n), (a = n.firstEffect)) : (a = n)) : (a = n.firstEffect),
          null !== a)
        ) {
          var o = oa;
          (oa |= 32), (ra.current = null), L(e.containerInfo), (Ea = a);
          do {
            try {
              Xa();
            } catch (e) {
              if (null === Ea) throw Error(l(330));
              Ja(Ea, e), (Ea = Ea.nextEffect);
            }
          } while (null !== Ea);
          Ea = a;
          do {
            try {
              for (var i = e, c = t; null !== Ea; ) {
                var s = Ea.effectTag;
                if ((16 & s && W && ae(Ea.stateNode), 128 & s)) {
                  var u = Ea.alternate;
                  if (null !== u) {
                    var d = u.ref;
                    null !== d && ("function" == typeof d ? d(null) : (d.current = null));
                  }
                }
                switch (1038 & s) {
                  case 2:
                    Wr(Ea), (Ea.effectTag &= -3);
                    break;
                  case 6:
                    Wr(Ea), (Ea.effectTag &= -3), $r(Ea.alternate, Ea);
                    break;
                  case 1024:
                    Ea.effectTag &= -1025;
                    break;
                  case 1028:
                    (Ea.effectTag &= -1025), $r(Ea.alternate, Ea);
                    break;
                  case 4:
                    $r(Ea.alternate, Ea);
                    break;
                  case 8:
                    var f = i,
                      p = Ea,
                      m = c;
                    W ? Vr(f, p, m) : Gr(f, p, m), Yr(p);
                }
                Ea = Ea.nextEffect;
              }
            } catch (e) {
              if (null === Ea) throw Error(l(330));
              Ja(Ea, e), (Ea = Ea.nextEffect);
            }
          } while (null !== Ea);
          A(e.containerInfo), (e.current = n), (Ea = a);
          do {
            try {
              for (s = r; null !== Ea; ) {
                var g = Ea.effectTag;
                if (36 & g) {
                  var h = Ea.alternate;
                  switch (((d = s), (u = Ea).tag)) {
                    case 0:
                    case 11:
                    case 15:
                      Hr(16, 32, u);
                      break;
                    case 1:
                      var E = u.stateNode;
                      if (4 & u.effectTag)
                        if (null === h) E.componentDidMount();
                        else {
                          var v = u.elementType === u.type ? h.memoizedProps : _t(u.type, h.memoizedProps);
                          E.componentDidUpdate(v, h.memoizedState, E.__reactInternalSnapshotBeforeUpdate);
                        }
                      var b = u.updateQueue;
                      null !== b && Gt(0, b, E);
                      break;
                    case 3:
                      var y = u.updateQueue;
                      if (null !== y) {
                        if (((i = null), null !== u.child))
                          switch (u.child.tag) {
                            case 5:
                              i = k(u.child.stateNode);
                              break;
                            case 1:
                              i = u.child.stateNode;
                          }
                        Gt(0, y, i);
                      }
                      break;
                    case 5:
                      var T = u.stateNode;
                      null === h && 4 & u.effectTag && Z(T, u.type, u.memoizedProps, u);
                      break;
                    case 6:
                    case 4:
                    case 12:
                      break;
                    case 13:
                      if ($ && null === u.memoizedState) {
                        var _ = u.alternate;
                        if (null !== _) {
                          var x = _.memoizedState;
                          if (null !== x) {
                            var w = x.dehydrated;
                            null !== w && Ce(w);
                          }
                        }
                      }
                      break;
                    case 19:
                    case 17:
                    case 20:
                    case 21:
                      break;
                    default:
                      throw Error(l(163));
                  }
                }
                if (128 & g) {
                  u = void 0;
                  var S = Ea.ref;
                  if (null !== S) {
                    var C = Ea.stateNode;
                    switch (Ea.tag) {
                      case 5:
                        u = k(C);
                        break;
                      default:
                        u = C;
                    }
                    "function" == typeof S ? S(u) : (S.current = u);
                  }
                }
                Ea = Ea.nextEffect;
              }
            } catch (e) {
              if (null === Ea) throw Error(l(330));
              Ja(Ea, e), (Ea = Ea.nextEffect);
            }
          } while (null !== Ea);
          (Ea = null), at(), (oa = o);
        } else e.current = n;
        if (Ta) (Ta = false), (_a = e), (xa = t);
        else for (Ea = a; null !== Ea; ) (t = Ea.nextEffect), (Ea.nextEffect = null), (Ea = t);
        if (
          (0 === (t = e.firstPendingTime) && (ya = null),
          1073741823 === t ? (e === Ca ? Sa++ : ((Sa = 0), (Ca = e))) : (Sa = 0),
          "function" == typeof no && no(n.stateNode, r),
          La(e),
          va)
        )
          throw ((va = false), (e = ba), (ba = null), e);
        return 0 != (8 & oa) || gt(), null;
      }
      function Xa() {
        for (; null !== Ea; ) {
          var e = Ea.effectTag;
          0 != (256 & e) && Br(Ea.alternate, Ea),
            0 == (512 & e) ||
              Ta ||
              ((Ta = !0),
              pt(97, function () {
                return qa(), null;
              })),
            (Ea = Ea.nextEffect);
        }
      }
      function qa() {
        if (90 !== xa) {
          var e = 97 < xa ? 97 : xa;
          return (xa = 90), ft(e, Qa);
        }
      }
      function Qa() {
        if (null === _a) return false;
        var e = _a;
        if (((_a = null), 0 != (48 & oa))) throw Error(l(331));
        var t = oa;
        for (oa |= 32, e = e.current.firstEffect; null !== e; ) {
          try {
            var n = e;
            if (0 != (512 & n.effectTag))
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  Hr(128, 0, n), Hr(0, 64, n);
              }
          } catch (t) {
            if (null === e) throw Error(l(330));
            Ja(e, t);
          }
          (n = e.nextEffect), (e.nextEffect = null), (e = n);
        }
        return (oa = t), gt(), !0;
      }
      function Za(e, t, n) {
        jt(e, (t = Zr(e, (t = Fr(n, t)), 1073741823))), null !== (e = Pa(e, 1073741823)) && La(e);
      }
      function Ja(e, t) {
        if (3 === e.tag) Za(e, e, t);
        else
          for (var n = e.return; null !== n; ) {
            if (3 === n.tag) {
              Za(n, e, t);
              break;
            }
            if (1 === n.tag) {
              var r = n.stateNode;
              if ("function" == typeof n.type.getDerivedStateFromError || ("function" == typeof r.componentDidCatch && (null === ya || !ya.has(r)))) {
                jt(n, (e = Jr(n, (e = Fr(t, e)), 1073741823))), null !== (n = Pa(n, 1073741823)) && La(n);
                break;
              }
            }
            n = n.return;
          }
      }
      function eo(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t),
          ia === e && ca === n
            ? 4 === sa || (3 === sa && 1073741823 === da && st() - ha < 500)
              ? Da(e, ca)
              : (ga = !0)
            : mo(e, n) &&
              ((0 !== (t = e.lastPingedTime) && t < n) ||
                ((e.lastPingedTime = n), e.finishedExpirationTime === n && ((e.finishedExpirationTime = 0), (e.finishedWork = null)), La(e)));
      }
      function to(e, t) {
        var n = e.stateNode;
        null !== n && n.delete(t), 0 === (t = 0) && (t = Na((t = Ia()), e, null)), null !== (e = Pa(e, t)) && La(e);
      }
      ea = function (e, t, n) {
        var r = t.expirationTime;
        if (null !== e) {
          var a = t.pendingProps;
          if (e.memoizedProps !== a || Me.current) fr = !0;
          else {
            if (r < n) {
              switch (((fr = false), t.tag)) {
                case 3:
                  Tr(t), ur();
                  break;
                case 5:
                  if ((pn(t), 4 & t.mode && 1 !== n && B(t.type, a))) return (t.expirationTime = t.childExpirationTime = 1), null;
                  break;
                case 1:
                  je(t.type) && Ge(t);
                  break;
                case 4:
                  dn(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  It(t, t.memoizedProps.value);
                  break;
                case 13:
                  if (null !== t.memoizedState)
                    return 0 !== (r = t.child.childExpirationTime) && r >= n ? Or(e, t, n) : (Re(gn, 1 & gn.current), null !== (t = Pr(e, t, n)) ? t.sibling : null);
                  Re(gn, 1 & gn.current);
                  break;
                case 19:
                  if (((r = t.childExpirationTime >= n), 0 != (64 & e.effectTag))) {
                    if (r) return kr(e, t, n);
                    t.effectTag |= 64;
                  }
                  if ((null !== (a = t.memoizedState) && ((a.rendering = null), (a.tail = null)), Re(gn, gn.current), !r)) return null;
              }
              return Pr(e, t, n);
            }
            fr = false;
          }
        } else fr = false;
        switch (((t.expirationTime = 0), t.tag)) {
          case 2:
            if (
              ((r = t.type),
              null !== e && ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
              (e = t.pendingProps),
              (a = De(t, Ae.current)),
              Pt(t, n),
              (a = Mn(null, t, r, e, a, n)),
              (t.effectTag |= 1),
              "object" == typeof a && null !== a && "function" == typeof a.render && void 0 === a.$$typeof)
            ) {
              if (((t.tag = 1), Fn(), je(r))) {
                var o = !0;
                Ge(t);
              } else o = false;
              t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null;
              var i = r.getDerivedStateFromProps;
              "function" == typeof i && Vt(t, r, i, e), (a.updater = $t), (t.stateNode = a), (a._reactInternalFiber = t), Zt(t, r, e, n), (t = yr(null, t, r, !0, o, n));
            } else (t.tag = 0), pr(null, t, a, n), (t = t.child);
            return t;
          case 16:
            if (
              ((a = t.elementType),
              null !== e && ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
              (e = t.pendingProps),
              (function (e) {
                if (-1 === e._status) {
                  e._status = 0;
                  var t = e._ctor;
                  (t = t()),
                    (e._result = t),
                    t.then(
                      function (t) {
                        0 === e._status && ((t = t.default), (e._status = 1), (e._result = t));
                      },
                      function (t) {
                        0 === e._status && ((e._status = 2), (e._result = t));
                      }
                    );
                }
              })(a),
              1 !== a._status)
            )
              throw a._result;
            switch (
              ((a = a._result),
              (t.type = a),
              (o = t.tag = (function (e) {
                if ("function" == typeof e) return io(e) ? 1 : 0;
                if (null != e) {
                  if ((e = e.$$typeof) === v) return 11;
                  if (e === T) return 14;
                }
                return 2;
              })(a)),
              (e = _t(a, e)),
              o)
            ) {
              case 0:
                t = vr(null, t, a, e, n);
                break;
              case 1:
                t = br(null, t, a, e, n);
                break;
              case 11:
                t = mr(null, t, a, e, n);
                break;
              case 14:
                t = gr(null, t, a, _t(a.type, e), r, n);
                break;
              default:
                throw Error(l(306, a, ""));
            }
            return t;
          case 0:
            return (r = t.type), (a = t.pendingProps), vr(e, t, r, (a = t.elementType === r ? a : _t(r, a)), n);
          case 1:
            return (r = t.type), (a = t.pendingProps), br(e, t, r, (a = t.elementType === r ? a : _t(r, a)), n);
          case 3:
            if ((Tr(t), null === (r = t.updateQueue))) throw Error(l(282));
            if (((a = null !== (a = t.memoizedState) ? a.element : null), zt(t, r, t.pendingProps, null, n), (r = t.memoizedState.element) === a)) ur(), (t = Pr(e, t, n));
            else {
              if (((a = t.stateNode.hydrate) && ($ ? ((rr = Te(t.stateNode.containerInfo)), (nr = t), (a = ar = !0)) : (a = false)), a))
                for (n = an(t, null, r, n), t.child = n; n; ) (n.effectTag = (-3 & n.effectTag) | 1024), (n = n.sibling);
              else pr(e, t, r, n), ur();
              t = t.child;
            }
            return t;
          case 5:
            return (
              pn(t),
              null === e && lr(t),
              (r = t.type),
              (a = t.pendingProps),
              (o = null !== e ? e.memoizedProps : null),
              (i = a.children),
              U(r, a) ? (i = null) : null !== o && U(r, o) && (t.effectTag |= 16),
              Er(e, t),
              4 & t.mode && 1 !== n && B(r, a) ? ((t.expirationTime = t.childExpirationTime = 1), (t = null)) : (pr(e, t, i, n), (t = t.child)),
              t
            );
          case 6:
            return null === e && lr(t), null;
          case 13:
            return Or(e, t, n);
          case 4:
            return dn(t, t.stateNode.containerInfo), (r = t.pendingProps), null === e ? (t.child = rn(t, null, r, n)) : pr(e, t, r, n), t.child;
          case 11:
            return (r = t.type), (a = t.pendingProps), mr(e, t, r, (a = t.elementType === r ? a : _t(r, a)), n);
          case 7:
            return pr(e, t, t.pendingProps, n), t.child;
          case 8:
          case 12:
            return pr(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              if (((r = t.type._context), (a = t.pendingProps), (i = t.memoizedProps), It(t, (o = a.value)), null !== i)) {
                var c = i.value;
                if (0 === (o = bt(c, o) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(c, o) : 1073741823))) {
                  if (i.children === a.children && !Me.current) {
                    t = Pr(e, t, n);
                    break e;
                  }
                } else
                  for (null !== (c = t.child) && (c.return = t); null !== c; ) {
                    var s = c.dependencies;
                    if (null !== s) {
                      i = c.child;
                      for (var u = s.firstContext; null !== u; ) {
                        if (u.context === r && 0 != (u.observedBits & o)) {
                          1 === c.tag && (((u = Ft(n, null)).tag = 2), jt(c, u)),
                            c.expirationTime < n && (c.expirationTime = n),
                            null !== (u = c.alternate) && u.expirationTime < n && (u.expirationTime = n),
                            kt(c.return, n),
                            s.expirationTime < n && (s.expirationTime = n);
                          break;
                        }
                        u = u.next;
                      }
                    } else i = 10 === c.tag && c.type === t.type ? null : c.child;
                    if (null !== i) i.return = c;
                    else
                      for (i = c; null !== i; ) {
                        if (i === t) {
                          i = null;
                          break;
                        }
                        if (null !== (c = i.sibling)) {
                          (c.return = i.return), (i = c);
                          break;
                        }
                        i = i.return;
                      }
                    c = i;
                  }
              }
              pr(e, t, a.children, n), (t = t.child);
            }
            return t;
          case 9:
            return (a = t.type), (r = (o = t.pendingProps).children), Pt(t, n), (r = r((a = Rt(a, o.unstable_observedBits)))), (t.effectTag |= 1), pr(e, t, r, n), t.child;
          case 14:
            return (o = _t((a = t.type), t.pendingProps)), gr(e, t, a, (o = _t(a.type, o)), r, n);
          case 15:
            return hr(e, t, t.type, t.pendingProps, r, n);
          case 17:
            return (
              (r = t.type),
              (a = t.pendingProps),
              (a = t.elementType === r ? a : _t(r, a)),
              null !== e && ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
              (t.tag = 1),
              je(r) ? ((e = !0), Ge(t)) : (e = false),
              Pt(t, n),
              qt(t, r, a),
              Zt(t, r, a, n),
              yr(null, t, r, !0, e, n)
            );
          case 19:
            return kr(e, t, n);
        }
        throw Error(l(156, t.tag));
      };
      var no = null,
        ro = null;
      function ao(e, t, n, r) {
        (this.tag = e),
          (this.key = n),
          (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = t),
          (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
          (this.mode = r),
          (this.effectTag = 0),
          (this.lastEffect = this.firstEffect = this.nextEffect = null),
          (this.childExpirationTime = this.expirationTime = 0),
          (this.alternate = null);
      }
      function oo(e, t, n, r) {
        return new ao(e, t, n, r);
      }
      function io(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
      }
      function lo(e, t) {
        var n = e.alternate;
        return (
          null === n
            ? (((n = oo(e.tag, t, e.key, e.mode)).elementType = e.elementType), (n.type = e.type), (n.stateNode = e.stateNode), (n.alternate = e), (e.alternate = n))
            : ((n.pendingProps = t), (n.effectTag = 0), (n.nextEffect = null), (n.firstEffect = null), (n.lastEffect = null)),
          (n.childExpirationTime = e.childExpirationTime),
          (n.expirationTime = e.expirationTime),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (t = e.dependencies),
          (n.dependencies = null === t ? null : { expirationTime: t.expirationTime, firstContext: t.firstContext, responders: t.responders }),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          n
        );
      }
      function co(e, t, n, r, a, o) {
        var i = 2;
        if (((r = e), "function" == typeof e)) io(e) && (i = 1);
        else if ("string" == typeof e) i = 5;
        else
          e: switch (e) {
            case f:
              return so(n.children, a, o, t);
            case E:
              (i = 8), (a |= 7);
              break;
            case p:
              (i = 8), (a |= 1);
              break;
            case m:
              return ((e = oo(12, n, t, 8 | a)).elementType = m), (e.type = m), (e.expirationTime = o), e;
            case b:
              return ((e = oo(13, n, t, a)).type = b), (e.elementType = b), (e.expirationTime = o), e;
            case y:
              return ((e = oo(19, n, t, a)).elementType = y), (e.expirationTime = o), e;
            default:
              if ("object" == typeof e && null !== e)
                switch (e.$$typeof) {
                  case g:
                    i = 10;
                    break e;
                  case h:
                    i = 9;
                    break e;
                  case v:
                    i = 11;
                    break e;
                  case T:
                    i = 14;
                    break e;
                  case _:
                    (i = 16), (r = null);
                    break e;
                }
              throw Error(l(130, null == e ? e : typeof e, ""));
          }
        return ((t = oo(i, n, t, a)).elementType = e), (t.type = r), (t.expirationTime = o), t;
      }
      function so(e, t, n, r) {
        return ((e = oo(7, e, r, t)).expirationTime = n), e;
      }
      function uo(e, t, n) {
        return ((e = oo(6, e, null, t)).expirationTime = n), e;
      }
      function fo(e, t, n) {
        return (
          ((t = oo(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n),
          (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
          t
        );
      }
      function po(e, t, n) {
        (this.tag = t),
          (this.current = null),
          (this.containerInfo = e),
          (this.pingCache = this.pendingChildren = null),
          (this.finishedExpirationTime = 0),
          (this.finishedWork = null),
          (this.timeoutHandle = Y),
          (this.pendingContext = this.context = null),
          (this.hydrate = n),
          (this.callbackNode = null),
          (this.callbackPriority = 90),
          (this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0);
      }
      function mo(e, t) {
        var n = e.firstSuspendedTime;
        return (e = e.lastSuspendedTime), 0 !== n && n >= t && e <= t;
      }
      function go(e, t) {
        var n = e.firstSuspendedTime,
          r = e.lastSuspendedTime;
        n < t && (e.firstSuspendedTime = t),
          (r > t || 0 === n) && (e.lastSuspendedTime = t),
          t <= e.lastPingedTime && (e.lastPingedTime = 0),
          t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
      }
      function ho(e, t) {
        t > e.firstPendingTime && (e.firstPendingTime = t);
        var n = e.firstSuspendedTime;
        0 !== n &&
          (t >= n ? (e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0) : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1),
          t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
      }
      function Eo(e, t) {
        var n = e.lastExpiredTime;
        (0 === n || n > t) && (e.lastExpiredTime = t);
      }
      function vo(e) {
        var t = e._reactInternalFiber;
        if (void 0 === t) {
          if ("function" == typeof e.render) throw Error(l(188));
          throw Error(l(268, Object.keys(e)));
        }
        return null === (e = N(t)) ? null : e.stateNode;
      }
      function bo(e, t) {
        null !== (e = e.memoizedState) && null !== e.dehydrated && e.retryTime < t && (e.retryTime = t);
      }
      function yo(e, t) {
        bo(e, t), (e = e.alternate) && bo(e, t);
      }
      var To = {
        createContainer: function (e, t, n) {
          return (e = new po(e, t, n)), (t = oo(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)), (e.current = t), (t.stateNode = e);
        },
        updateContainer: function (e, t, n, r) {
          var a = t.current,
            o = Ia(),
            i = Kt.suspense;
          o = Na(o, a, i);
          e: if (n) {
            t: {
              if (C((n = n._reactInternalFiber)) !== n || 1 !== n.tag) throw Error(l(170));
              var c = n;
              do {
                switch (c.tag) {
                  case 3:
                    c = c.stateNode.context;
                    break t;
                  case 1:
                    if (je(c.type)) {
                      c = c.stateNode.__reactInternalMemoizedMergedChildContext;
                      break t;
                    }
                }
                c = c.return;
              } while (null !== c);
              throw Error(l(171));
            }
            if (1 === n.tag) {
              var s = n.type;
              if (je(s)) {
                n = ze(n, s, c);
                break e;
              }
            }
            n = c;
          } else n = Le;
          return (
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ft(o, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            jt(a, t),
            ka(a, o),
            o
          );
        },
        batchedEventUpdates: function (e, t) {
          var n = oa;
          oa |= 2;
          try {
            return e(t);
          } finally {
            0 === (oa = n) && gt();
          }
        },
        batchedUpdates: function (e, t) {
          var n = oa;
          oa |= 1;
          try {
            return e(t);
          } finally {
            0 === (oa = n) && gt();
          }
        },
        unbatchedUpdates: function (e, t) {
          var n = oa;
          (oa &= -2), (oa |= 8);
          try {
            return e(t);
          } finally {
            0 === (oa = n) && gt();
          }
        },
        deferredUpdates: function (e) {
          return ft(97, e);
        },
        syncUpdates: function (e, t, n, r) {
          return ft(99, e.bind(null, t, n, r));
        },
        discreteUpdates: function (e, t, n, r) {
          var a = oa;
          oa |= 4;
          try {
            return ft(98, e.bind(null, t, n, r));
          } finally {
            0 === (oa = a) && gt();
          }
        },
        flushDiscreteUpdates: function () {
          0 == (49 & oa) &&
            ((function () {
              if (null !== wa) {
                var e = wa;
                (wa = null),
                  e.forEach(function (e, t) {
                    Eo(t, e), La(t);
                  }),
                  gt();
              }
            })(),
            qa());
        },
        flushControlled: function (e) {
          var t = oa;
          oa |= 1;
          try {
            ft(99, e);
          } finally {
            0 === (oa = t) && gt();
          }
        },
        flushSync: Fa,
        flushPassiveEffects: qa,
        IsThisRendererActing: { current: false },
        getPublicRootInstance: function (e) {
          if (!(e = e.current).child) return null;
          switch (e.child.tag) {
            case 5:
              return k(e.child.stateNode);
            default:
              return e.child.stateNode;
          }
        },
        attemptSynchronousHydration: function (e) {
          switch (e.tag) {
            case 3:
              var t = e.stateNode;
              t.hydrate &&
                (function (e, t) {
                  Eo(e, t), La(e), 0 == (48 & oa) && gt();
                })(t, t.firstPendingTime);
              break;
            case 13:
              Fa(function () {
                return ka(e, 1073741823);
              }),
                (t = vt(Ia(), 150, 100)),
                yo(e, t);
          }
        },
        attemptUserBlockingHydration: function (e) {
          if (13 === e.tag) {
            var t = vt(Ia(), 150, 100);
            ka(e, t), yo(e, t);
          }
        },
        attemptContinuousHydration: function (e) {
          if (13 === e.tag) {
            Ia();
            var t = Et++;
            ka(e, t), yo(e, t);
          }
        },
        attemptHydrationAtCurrentPriority: function (e) {
          if (13 === e.tag) {
            var t = Ia();
            ka(e, (t = Na(t, e, null))), yo(e, t);
          }
        },
        findHostInstance: vo,
        findHostInstanceWithWarning: function (e) {
          return vo(e);
        },
        findHostInstanceWithNoPortals: function (e) {
          return null ===
            (e = (function (e) {
              if (!(e = I(e))) return null;
              for (var t = e; ; ) {
                if (5 === t.tag || 6 === t.tag) return t;
                if (t.child && 4 !== t.tag) (t.child.return = t), (t = t.child);
                else {
                  if (t === e) break;
                  for (; !t.sibling; ) {
                    if (!t.return || t.return === e) return null;
                    t = t.return;
                  }
                  (t.sibling.return = t.return), (t = t.sibling);
                }
              }
              return null;
            })(e))
            ? null
            : 20 === e.tag
            ? e.stateNode.instance
            : e.stateNode;
        },
        shouldSuspend: function () {
          return false;
        },
        injectIntoDevTools: function (e) {
          var t = e.findFiberByHostInstance;
          return (function (e) {
            if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return false;
            var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (t.isDisabled || !t.supportsFiber) return !0;
            try {
              var n = t.inject(e);
              (no = function (e) {
                try {
                  t.onCommitFiberRoot(n, e, void 0, 64 == (64 & e.current.effectTag));
                } catch (e) {}
              }),
                (ro = function (e) {
                  try {
                    t.onCommitFiberUnmount(n, e);
                  } catch (e) {}
                });
            } catch (e) {}
            return !0;
          })(
            a({}, e, {
              overrideHookState: null,
              overrideProps: null,
              setSuspenseHandler: null,
              scheduleUpdate: null,
              currentDispatcherRef: c.ReactCurrentDispatcher,
              findHostInstanceByFiber: function (e) {
                return null === (e = N(e)) ? null : e.stateNode;
              },
              findFiberByHostInstance: function (e) {
                return t ? t(e) : null;
              },
              findHostInstancesForRefresh: null,
              scheduleRefresh: null,
              scheduleRoot: null,
              setRefreshHandler: null,
              getCurrentFiber: null,
            })
          );
        },
      };
      e.exports = To.default || To;
      var _o = e.exports;
      return (e.exports = t), _o;
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = n(401);
  },
  function (e, t, n) {
    "use strict";
    /** @license React v0.18.0
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r, a, o, i, l;
    if ((Object.defineProperty(t, "__esModule", { value: !0 }), "undefined" == typeof window || "function" != typeof MessageChannel)) {
      var c = null,
        s = null,
        u = function () {
          if (null !== c)
            try {
              var e = t.unstable_now();
              c(!0, e), (c = null);
            } catch (e) {
              throw (setTimeout(u, 0), e);
            }
        },
        d = Date.now();
      (t.unstable_now = function () {
        return Date.now() - d;
      }),
        (r = function (e) {
          null !== c ? setTimeout(r, 0, e) : ((c = e), setTimeout(u, 0));
        }),
        (a = function (e, t) {
          s = setTimeout(e, t);
        }),
        (o = function () {
          clearTimeout(s);
        }),
        (i = function () {
          return false;
        }),
        (l = t.unstable_forceFrameRate = function () {});
    } else {
      var f = window.performance,
        p = window.Date,
        m = window.setTimeout,
        g = window.clearTimeout;
      if ("undefined" != typeof console) {
        var h = window.cancelAnimationFrame;
        "function" != typeof window.requestAnimationFrame &&
          console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),
          "function" != typeof h &&
            console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
      }
      if ("object" == typeof f && "function" == typeof f.now)
        t.unstable_now = function () {
          return f.now();
        };
      else {
        var E = p.now();
        t.unstable_now = function () {
          return p.now() - E;
        };
      }
      var v = false,
        b = null,
        y = -1,
        T = 5,
        _ = 0;
      (i = function () {
        return t.unstable_now() >= _;
      }),
        (l = function () {}),
        (t.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e
            ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported")
            : (T = 0 < e ? Math.floor(1e3 / e) : 5);
        });
      var x = new MessageChannel(),
        w = x.port2;
      (x.port1.onmessage = function () {
        if (null !== b) {
          var e = t.unstable_now();
          _ = e + T;
          try {
            b(!0, e) ? w.postMessage(null) : ((v = false), (b = null));
          } catch (e) {
            throw (w.postMessage(null), e);
          }
        } else v = false;
      }),
        (r = function (e) {
          (b = e), v || ((v = !0), w.postMessage(null));
        }),
        (a = function (e, n) {
          y = m(function () {
            e(t.unstable_now());
          }, n);
        }),
        (o = function () {
          g(y), (y = -1);
        });
    }
    function S(e, t) {
      var n = e.length;
      e.push(t);
      e: for (;;) {
        var r = Math.floor((n - 1) / 2),
          a = e[r];
        if (!(void 0 !== a && 0 < I(a, t))) break e;
        (e[r] = t), (e[n] = a), (n = r);
      }
    }
    function C(e) {
      return void 0 === (e = e[0]) ? null : e;
    }
    function O(e) {
      var t = e[0];
      if (void 0 !== t) {
        var n = e.pop();
        if (n !== t) {
          e[0] = n;
          e: for (var r = 0, a = e.length; r < a; ) {
            var o = 2 * (r + 1) - 1,
              i = e[o],
              l = o + 1,
              c = e[l];
            if (void 0 !== i && 0 > I(i, n)) void 0 !== c && 0 > I(c, i) ? ((e[r] = c), (e[l] = n), (r = l)) : ((e[r] = i), (e[o] = n), (r = o));
            else {
              if (!(void 0 !== c && 0 > I(c, n))) break e;
              (e[r] = c), (e[l] = n), (r = l);
            }
          }
        }
        return t;
      }
      return null;
    }
    function I(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return 0 !== n ? n : e.id - t.id;
    }
    var N = [],
      k = [],
      P = 1,
      R = null,
      L = 3,
      A = false,
      M = false,
      F = false;
    function D(e) {
      for (var t = C(k); null !== t; ) {
        if (null === t.callback) O(k);
        else {
          if (!(t.startTime <= e)) break;
          O(k), (t.sortIndex = t.expirationTime), S(N, t);
        }
        t = C(k);
      }
    }
    function j(e) {
      if (((F = false), D(e), !M))
        if (null !== C(N)) (M = !0), r(U);
        else {
          var t = C(k);
          null !== t && a(j, t.startTime - e);
        }
    }
    function U(e, n) {
      (M = false), F && ((F = false), o()), (A = !0);
      var r = L;
      try {
        for (D(n), R = C(N); null !== R && (!(R.expirationTime > n) || (e && !i())); ) {
          var l = R.callback;
          if (null !== l) {
            (R.callback = null), (L = R.priorityLevel);
            var c = l(R.expirationTime <= n);
            (n = t.unstable_now()), "function" == typeof c ? (R.callback = c) : R === C(N) && O(N), D(n);
          } else O(N);
          R = C(N);
        }
        if (null !== R) var s = !0;
        else {
          var u = C(k);
          null !== u && a(j, u.startTime - n), (s = false);
        }
        return s;
      } finally {
        (R = null), (L = r), (A = false);
      }
    }
    function B(e) {
      switch (e) {
        case 1:
          return -1;
        case 2:
          return 250;
        case 5:
          return 1073741823;
        case 4:
          return 1e4;
        default:
          return 5e3;
      }
    }
    var H = l;
    (t.unstable_ImmediatePriority = 1),
      (t.unstable_UserBlockingPriority = 2),
      (t.unstable_NormalPriority = 3),
      (t.unstable_IdlePriority = 5),
      (t.unstable_LowPriority = 4),
      (t.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = L;
        L = e;
        try {
          return t();
        } finally {
          L = n;
        }
      }),
      (t.unstable_next = function (e) {
        switch (L) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = L;
        }
        var n = L;
        L = t;
        try {
          return e();
        } finally {
          L = n;
        }
      }),
      (t.unstable_scheduleCallback = function (e, n, i) {
        var l = t.unstable_now();
        if ("object" == typeof i && null !== i) {
          var c = i.delay;
          (c = "number" == typeof c && 0 < c ? l + c : l), (i = "number" == typeof i.timeout ? i.timeout : B(e));
        } else (i = B(e)), (c = l);
        return (
          (e = { id: P++, callback: n, priorityLevel: e, startTime: c, expirationTime: (i = c + i), sortIndex: -1 }),
          c > l ? ((e.sortIndex = c), S(k, e), null === C(N) && e === C(k) && (F ? o() : (F = !0), a(j, c - l))) : ((e.sortIndex = i), S(N, e), M || A || ((M = !0), r(U))),
          e
        );
      }),
      (t.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (t.unstable_wrapCallback = function (e) {
        var t = L;
        return function () {
          var n = L;
          L = t;
          try {
            return e.apply(this, arguments);
          } finally {
            L = n;
          }
        };
      }),
      (t.unstable_getCurrentPriorityLevel = function () {
        return L;
      }),
      (t.unstable_shouldYield = function () {
        var e = t.unstable_now();
        D(e);
        var n = C(N);
        return (n !== R && null !== R && null !== n && null !== n.callback && n.startTime <= e && n.expirationTime < R.expirationTime) || i();
      }),
      (t.unstable_requestPaint = H),
      (t.unstable_continueExecution = function () {
        M || A || ((M = !0), r(U));
      }),
      (t.unstable_pauseExecution = function () {}),
      (t.unstable_getFirstCallbackNode = function () {
        return C(N);
      }),
      (t.unstable_Profiling = null);
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
      a = n.n(r),
      o = n(335);
    function i(e, t) {
      return (i =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function l(e, t) {
      (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), i(e, t);
    }
    var c = n(58),
      s = n.n(c);
    function u() {
      return (u =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function d(e) {
      return "/" === e.charAt(0);
    }
    function f(e, t) {
      for (var n = t, r = n + 1, a = e.length; r < a; n += 1, r += 1) e[n] = e[r];
      e.pop();
    }
    var p = function (e, t) {
      void 0 === t && (t = "");
      var n,
        r = (e && e.split("/")) || [],
        a = (t && t.split("/")) || [],
        o = e && d(e),
        i = t && d(t),
        l = o || i;
      if ((e && d(e) ? (a = r) : r.length && (a.pop(), (a = a.concat(r))), !a.length)) return "/";
      if (a.length) {
        var c = a[a.length - 1];
        n = "." === c || ".." === c || "" === c;
      } else n = false;
      for (var s = 0, u = a.length; u >= 0; u--) {
        var p = a[u];
        "." === p ? f(a, u) : ".." === p ? (f(a, u), s++) : s && (f(a, u), s--);
      }
      if (!l) for (; s--; s) a.unshift("..");
      !l || "" === a[0] || (a[0] && d(a[0])) || a.unshift("");
      var m = a.join("/");
      return n && "/" !== m.substr(-1) && (m += "/"), m;
    };
    var m = function (e, t) {
      if (!e) throw new Error("Invariant failed");
    };
    function g(e) {
      var t = e.pathname,
        n = e.search,
        r = e.hash,
        a = t || "/";
      return n && "?" !== n && (a += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (a += "#" === r.charAt(0) ? r : "#" + r), a;
    }
    function h(e, t, n, r) {
      var a;
      "string" == typeof e
        ? ((a = (function (e) {
            var t = e || "/",
              n = "",
              r = "",
              a = t.indexOf("#");
            -1 !== a && ((r = t.substr(a)), (t = t.substr(0, a)));
            var o = t.indexOf("?");
            return -1 !== o && ((n = t.substr(o)), (t = t.substr(0, o))), { pathname: t, search: "?" === n ? "" : n, hash: "#" === r ? "" : r };
          })(e)).state = t)
        : (void 0 === (a = u({}, e)).pathname && (a.pathname = ""),
          a.search ? "?" !== a.search.charAt(0) && (a.search = "?" + a.search) : (a.search = ""),
          a.hash ? "#" !== a.hash.charAt(0) && (a.hash = "#" + a.hash) : (a.hash = ""),
          void 0 !== t && void 0 === a.state && (a.state = t));
      try {
        a.pathname = decodeURI(a.pathname);
      } catch (e) {
        throw e instanceof URIError ? new URIError('Pathname "' + a.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : e;
      }
      return (
        n && (a.key = n),
        r ? (a.pathname ? "/" !== a.pathname.charAt(0) && (a.pathname = p(a.pathname, r.pathname)) : (a.pathname = r.pathname)) : a.pathname || (a.pathname = "/"),
        a
      );
    }
    function E() {
      var e = null;
      var t = [];
      return {
        setPrompt: function (t) {
          return (
            (e = t),
            function () {
              e === t && (e = null);
            }
          );
        },
        confirmTransitionTo: function (t, n, r, a) {
          if (null != e) {
            var o = "function" == typeof e ? e(t, n) : e;
            "string" == typeof o ? ("function" == typeof r ? r(o, a) : a(!0)) : a(false !== o);
          } else a(!0);
        },
        appendListener: function (e) {
          var n = !0;
          function r() {
            n && e.apply(void 0, arguments);
          }
          return (
            t.push(r),
            function () {
              (n = false),
                (t = t.filter(function (e) {
                  return e !== r;
                }));
            }
          );
        },
        notifyListeners: function () {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
          t.forEach(function (e) {
            return e.apply(void 0, n);
          });
        },
      };
    }
    "undefined" == typeof window || !window.document || window.document.createElement;
    function v(e, t, n) {
      return Math.min(Math.max(e, t), n);
    }
    function b(e) {
      void 0 === e && (e = {});
      var t = e,
        n = t.getUserConfirmation,
        r = t.initialEntries,
        a = void 0 === r ? ["/"] : r,
        o = t.initialIndex,
        i = void 0 === o ? 0 : o,
        l = t.keyLength,
        c = void 0 === l ? 6 : l,
        s = E();
      function d(e) {
        u(T, e), (T.length = T.entries.length), s.notifyListeners(T.location, T.action);
      }
      function f() {
        return Math.random().toString(36).substr(2, c);
      }
      var p = v(i, 0, a.length - 1),
        m = a.map(function (e) {
          return h(e, void 0, "string" == typeof e ? f() : e.key || f());
        }),
        b = g;
      function y(e) {
        var t = v(T.index + e, 0, T.entries.length - 1),
          r = T.entries[t];
        s.confirmTransitionTo(r, "POP", n, function (e) {
          e ? d({ action: "POP", location: r, index: t }) : d();
        });
      }
      var T = {
        length: m.length,
        action: "POP",
        location: m[p],
        index: p,
        entries: m,
        createHref: b,
        push: function (e, t) {
          var r = h(e, t, f(), T.location);
          s.confirmTransitionTo(r, "PUSH", n, function (e) {
            if (e) {
              var t = T.index + 1,
                n = T.entries.slice(0);
              n.length > t ? n.splice(t, n.length - t, r) : n.push(r), d({ action: "PUSH", location: r, index: t, entries: n });
            }
          });
        },
        replace: function (e, t) {
          var r = h(e, t, f(), T.location);
          s.confirmTransitionTo(r, "REPLACE", n, function (e) {
            e && ((T.entries[T.index] = r), d({ action: "REPLACE", location: r }));
          });
        },
        go: y,
        goBack: function () {
          y(-1);
        },
        goForward: function () {
          y(1);
        },
        canGo: function (e) {
          var t = T.index + e;
          return t >= 0 && t < T.entries.length;
        },
        block: function (e) {
          return void 0 === e && (e = false), s.setPrompt(e);
        },
        listen: function (e) {
          return s.appendListener(e);
        },
      };
      return T;
    }
    var y = n(69),
      T = n.n(y),
      _ = n(102),
      x = n.n(_);
    function w(e) {
      var t = [];
      return {
        on: function (e) {
          t.push(e);
        },
        off: function (e) {
          t = t.filter(function (t) {
            return t !== e;
          });
        },
        get: function () {
          return e;
        },
        set: function (n, r) {
          (e = n),
            t.forEach(function (t) {
              return t(e, r);
            });
        },
      };
    }
    var S =
        a.a.createContext ||
        function (e, t) {
          var n,
            a,
            o = "__create-react-context-" + x()() + "__",
            i = (function (e) {
              function n() {
                var t;
                return ((t = e.apply(this, arguments) || this).emitter = w(t.props.value)), t;
              }
              T()(n, e);
              var r = n.prototype;
              return (
                (r.getChildContext = function () {
                  var e;
                  return ((e = {})[o] = this.emitter), e;
                }),
                (r.componentWillReceiveProps = function (e) {
                  if (this.props.value !== e.value) {
                    var n,
                      r = this.props.value,
                      a = e.value;
                    ((o = r) === (i = a) ? 0 !== o || 1 / o == 1 / i : o != o && i != i)
                      ? (n = 0)
                      : ((n = "function" == typeof t ? t(r, a) : 1073741823), 0 !== (n |= 0) && this.emitter.set(e.value, n));
                  }
                  var o, i;
                }),
                (r.render = function () {
                  return this.props.children;
                }),
                n
              );
            })(r.Component);
          i.childContextTypes = (((n = {})[o] = s.a.object.isRequired), n);
          var l = (function (t) {
            function n() {
              var e;
              return (
                ((e = t.apply(this, arguments) || this).state = { value: e.getValue() }),
                (e.onUpdate = function (t, n) {
                  0 != ((0 | e.observedBits) & n) && e.setState({ value: e.getValue() });
                }),
                e
              );
            }
            T()(n, t);
            var r = n.prototype;
            return (
              (r.componentWillReceiveProps = function (e) {
                var t = e.observedBits;
                this.observedBits = null == t ? 1073741823 : t;
              }),
              (r.componentDidMount = function () {
                this.context[o] && this.context[o].on(this.onUpdate);
                var e = this.props.observedBits;
                this.observedBits = null == e ? 1073741823 : e;
              }),
              (r.componentWillUnmount = function () {
                this.context[o] && this.context[o].off(this.onUpdate);
              }),
              (r.getValue = function () {
                return this.context[o] ? this.context[o].get() : e;
              }),
              (r.render = function () {
                return ((e = this.props.children), Array.isArray(e) ? e[0] : e)(this.state.value);
                var e;
              }),
              n
            );
          })(r.Component);
          return (l.contextTypes = (((a = {})[o] = s.a.object), a)), { Provider: i, Consumer: l };
        },
      C = n(70),
      O = n.n(C);
    n(98);
    function I(e, t) {
      if (null == e) return {};
      var n,
        r,
        a = {},
        o = Object.keys(e);
      for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a;
    }
    n(103);
    var N = (function (e) {
        var t = S();
        return (t.displayName = e), t;
      })("Router"),
      k = (function (e) {
        function t(t) {
          var n;
          return (
            ((n = e.call(this, t) || this).state = { location: t.history.location }),
            (n._isMounted = false),
            (n._pendingLocation = null),
            t.staticContext ||
              (n.unlisten = t.history.listen(function (e) {
                n._isMounted ? n.setState({ location: e }) : (n._pendingLocation = e);
              })),
            n
          );
        }
        l(t, e),
          (t.computeRootMatch = function (e) {
            return { path: "/", url: "/", params: {}, isExact: "/" === e };
          });
        var n = t.prototype;
        return (
          (n.componentDidMount = function () {
            (this._isMounted = !0), this._pendingLocation && this.setState({ location: this._pendingLocation });
          }),
          (n.componentWillUnmount = function () {
            this.unlisten && this.unlisten();
          }),
          (n.render = function () {
            return a.a.createElement(N.Provider, {
              children: this.props.children || null,
              value: {
                history: this.props.history,
                location: this.state.location,
                match: t.computeRootMatch(this.state.location.pathname),
                staticContext: this.props.staticContext,
              },
            });
          }),
          t
        );
      })(a.a.Component);
    a.a.Component;
    a.a.Component;
    var P = {},
      R = 0;
    function L(e, t) {
      void 0 === t && (t = {}), ("string" == typeof t || Array.isArray(t)) && (t = { path: t });
      var n = t,
        r = n.path,
        a = n.exact,
        o = void 0 !== a && a,
        i = n.strict,
        l = void 0 !== i && i,
        c = n.sensitive,
        s = void 0 !== c && c;
      return [].concat(r).reduce(function (t, n) {
        if (!n && "" !== n) return null;
        if (t) return t;
        var r = (function (e, t) {
            var n = "" + t.end + t.strict + t.sensitive,
              r = P[n] || (P[n] = {});
            if (r[e]) return r[e];
            var a = [],
              o = { regexp: O()(e, a, t), keys: a };
            return R < 1e4 && ((r[e] = o), R++), o;
          })(n, { end: o, strict: l, sensitive: s }),
          a = r.regexp,
          i = r.keys,
          c = a.exec(e);
        if (!c) return null;
        var u = c[0],
          d = c.slice(1),
          f = e === u;
        return o && !f
          ? null
          : {
              path: n,
              url: "/" === n && "" === u ? "/" : u,
              isExact: f,
              params: i.reduce(function (e, t, n) {
                return (e[t.name] = d[n]), e;
              }, {}),
            };
      }, null);
    }
    var A = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (
        l(t, e),
        (t.prototype.render = function () {
          var e = this;
          return a.a.createElement(N.Consumer, null, function (t) {
            t || m(false);
            var n = e.props.location || t.location,
              r = u({}, t, { location: n, match: e.props.computedMatch ? e.props.computedMatch : e.props.path ? L(n.pathname, e.props) : t.match }),
              o = e.props,
              i = o.children,
              l = o.component,
              c = o.render;
            return (
              Array.isArray(i) && 0 === i.length && (i = null),
              a.a.createElement(
                N.Provider,
                { value: r },
                r.match ? (i ? ("function" == typeof i ? i(r) : i) : l ? a.a.createElement(l, r) : c ? c(r) : null) : "function" == typeof i ? i(r) : null
              )
            );
          });
        }),
        t
      );
    })(a.a.Component);
    function M(e) {
      return "/" === e.charAt(0) ? e : "/" + e;
    }
    function F(e, t) {
      if (!e) return t;
      var n = M(e);
      return 0 !== t.pathname.indexOf(n) ? t : u({}, t, { pathname: t.pathname.substr(n.length) });
    }
    function D(e) {
      return "string" == typeof e ? e : g(e);
    }
    function j(e) {
      return function () {
        m(false);
      };
    }
    function U() {}
    a.a.Component;
    a.a.Component;
    var B = a.a.useContext;
    function H(e) {
      return e ? L(B(N).location.pathname, e) : B(N).match;
    }
    var z = n(27),
      G = n.n(z);
    var engine = !0 === window.__bedrockProvidedCohtmljs ? window.engine : n(349)();
    var iterator;
    window.n_thingy = [];
    try{
    for (iterator = 0; iterator < 349; iterator++) {
      window.n_thingy.push(n(iterator));
    }}
    catch(e){

    }
 
    const K = new Map(),
      W = new Map(),
      V = new Map();
    function $(e, t, n, r) {
      const a = V.get(e);
      if (a) return t(a), () => {};
      const o = (a) => {
          "activate-facet-not-found" === a && n
            ? (V.set(e, n), t(n))
            : r
            ? r(a)
            : ((t) => {
                console.everything.push({ type: "warn", value: `Error "${t}" while using facet ${e}`});
              })(a);
        },
        i = (n) => {
          console.everything.push({ type: "log", value: "facet:updated | "+JSON.stringify(n) });
          //Facet callback stuff i want to do go here?
          //MARKER: FACETS



          W.set(e, n), t(n);
        },
        l = K.get(e) || 0,
        c = W.get(e);
      return (
        engine.on(`facet:updated:${e}`, i),
        engine.on(`facet:error:${e}`, o),
        0 === l ? engine.trigger("facet:request", [e]) : c && t(c),
        K.set(e, l + 1),
        () => {
          const t = K.get(e) || 0;
          engine.off(`facet:updated:${e}`, i), engine.off(`facet:error:${e}`, o), 1 === t && (engine.trigger("facet:discard", [e]), W.delete(e)), t > 0 && K.set(e, t - 1);
        }
      );
    }
    function X(e) {
      const t = new Map();
      return (n) => {
        const r = t.get(n);
        if (r) return r;
        const a = e(n);
        return t.set(n, a), a;
      };
    }
    const q = (e) => "function" == typeof e,
      Q = Symbol.for("None");
    function Z(e, t) {
      const n = [];
      let r,
        a = t,
        o = [];
      const i = (e) => {
        if (((a = e), 0 !== o.length)) {
          for (let e = 0; e < o.length; e++) o[e].cleanup();
          o = [];
        }
        for (let e = 0; e < n.length; e++) {
          const t = n[e],
            r = t(a);
          void 0 !== r && o.push({ cleanup: r, listener: t });
        }
      };
      return {
        set: (e) => {
          ((e) => "function" == typeof e)(e) ? i(e(a === Q ? void 0 : a)) : i(e);
        },
        get: () => a,
        observe: (t) => {
          if ((n.push(t), a !== Q)) {
            const e = t(a);
            void 0 !== e && o.push({ cleanup: e, listener: t });
          }
          return (
            1 === n.length && (r = e(i)),
            {
              unsubscribe: () => {
                const e = o.findIndex((e) => e.listener === t);
                -1 !== e && (o[e].cleanup(), o.splice(e, 1));
                const a = n.indexOf(t);
                n.splice(a, 1), 0 === n.length && r();
              },
            }
          );
        },
      };
    }
    function J(e = Q) {
      const t = Z(() => () => {}, e),
        n = () => t;
      return (n.local = !0), n;
    }
    function ee(e, t = Q) {
      const n = X((n) => Z((t) => n(e, t), t));
      return (n.remote = !0), n;
    }
    const te = ee;
    function ne(e, t, n, r = Q) {
      if (1 === e.length) {
        return X((a) => {
          let o;
          const i = e[0];
          return Z(
            (e) =>
              i(a).observe((r) => {
                const a = t(r);
                (!n || !n(a, o)) && ((o = a), e(a));
              }).unsubscribe,
            r
          );
        });
      }
      return X((a) => {
        let o;
        const i = [],
          l = e.map(() => false);
        let c = false;
        return Z((r) => {
          const s = e.map((e, s) =>
            e(a).observe((e) => {
              if (((i[s] = e), (l[s] = !0), (c = c || l.every((e) => e)), c)) {
                const e = t(...i);
                (!n || !n(e, o)) && ((o = e), r(e));
              }
            })
          );
          return () => {
            s.forEach(({ unsubscribe: e }) => e());
          };
        }, r);
      });
    }
    const re = te("core.router");
    /*! (c) Andrea Giammarchi - ISC */
    var ae = {};
    try {
      !(function (e, t) {
        if (
          "+" !== new e("q=%2B").get("q") ||
          "+" !== new e({ q: "+" }).get("q") ||
          "+" !== new e([["q", "+"]]).get("q") ||
          "q=%0A" !== new e("q=\n").toString() ||
          "q=+%26" !== new e({ q: " &" }).toString() ||
          "q=%25zx" !== new e({ q: "%zx" }).toString()
        )
          throw e;
        ae.URLSearchParams = e;
      })(URLSearchParams);
    } catch (e) {
      !(function (e, t, n) {
        var r = e.create,
          a = e.defineProperty,
          o = /[!'\(\)~]|%20|%00/g,
          i = /%(?![0-9a-fA-F]{2})/g,
          l = /\+/g,
          c = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" },
          s = {
            append: function (e, t) {
              p(this._ungap, e, t);
            },
            delete: function (e) {
              delete this._ungap[e];
            },
            get: function (e) {
              return this.has(e) ? this._ungap[e][0] : null;
            },
            getAll: function (e) {
              return this.has(e) ? this._ungap[e].slice(0) : [];
            },
            has: function (e) {
              return e in this._ungap;
            },
            set: function (e, n) {
              this._ungap[e] = [t(n)];
            },
            forEach: function (e, n) {
              var r = this;
              for (var a in r._ungap) r._ungap[a].forEach(o, a);
              function o(o) {
                e.call(n, o, t(a), r);
              }
            },
            toJSON: function () {
              return {};
            },
            toString: function () {
              var e = [];
              for (var t in this._ungap) for (var n = g(t), r = 0, a = this._ungap[t]; r < a.length; r++) e.push(n + "=" + g(a[r]));
              return e.join("&");
            },
          };
        for (var u in s) a(d.prototype, u, { configurable: !0, writable: !0, value: s[u] });
        function d(e) {
          var t = r(null);
          switch ((a(this, "_ungap", { value: t }), !0)) {
            case !e:
              break;
            case "string" == typeof e:
              "?" === e.charAt(0) && (e = e.slice(1));
              for (var o = e.split("&"), i = 0, l = o.length; i < l; i++) {
                var c = (s = o[i]).indexOf("=");
                -1 < c ? p(t, m(s.slice(0, c)), m(s.slice(c + 1))) : s.length && p(t, m(s), "");
              }
              break;
            case n(e):
              for (i = 0, l = e.length; i < l; i++) {
                var s;
                p(t, (s = e[i])[0], s[1]);
              }
              break;
            case "forEach" in e:
              e.forEach(f, t);
              break;
            default:
              for (var u in e) p(t, u, e[u]);
          }
        }
        function f(e, t) {
          p(this, t, e);
        }
        function p(e, t, r) {
          var a = n(r) ? r.join(",") : r;
          t in e ? e[t].push(a) : (e[t] = [a]);
        }
        function m(e) {
          return decodeURIComponent(e.replace(i, "%25").replace(l, " "));
        }
        function g(e) {
          return encodeURIComponent(e).replace(o, h);
        }
        function h(e) {
          return c[e];
        }
        ae.URLSearchParams = d;
      })(Object, String, Array.isArray);
    }
    !(function (e) {
      var t = false;
      try {
        t = !!Symbol.iterator;
      } catch (e) {}
      function n(e, n) {
        var r = [];
        return (
          e.forEach(n, r),
          t
            ? r[Symbol.iterator]()
            : {
                next: function () {
                  var e = r.shift();
                  return { done: void 0 === e, value: e };
                },
              }
        );
      }
      "forEach" in e ||
        (e.forEach = function (e, t) {
          var n = this,
            r = Object.create(null);
          this.toString()
            .replace(/=[\s\S]*?(?:&|$)/g, "=")
            .split("=")
            .forEach(function (a) {
              a.length &&
                !(a in r) &&
                (r[a] = n.getAll(a)).forEach(function (r) {
                  e.call(t, r, a, n);
                });
            });
        }),
        "keys" in e ||
          (e.keys = function () {
            return n(this, function (e, t) {
              this.push(t);
            });
          }),
        "values" in e ||
          (e.values = function () {
            return n(this, function (e, t) {
              this.push(e);
            });
          }),
        "entries" in e ||
          (e.entries = function () {
            return n(this, function (e, t) {
              this.push([t, e]);
            });
          }),
        t && !(Symbol.iterator in e) && (e[Symbol.iterator] = e.entries),
        "sort" in e ||
          (e.sort = function () {
            for (var e, t, n, r = this.entries(), a = r.next(), o = a.done, i = [], l = Object.create(null); !o; )
              (t = (n = a.value)[0]), i.push(t), t in l || (l[t] = []), l[t].push(n[1]), (o = (a = r.next()).done);
            for (i.sort(), e = 0; e < i.length; e++) this.delete(i[e]);
            for (e = 0; e < i.length; e++) (t = i[e]), this.append(t, l[t].shift());
          }),
        (function (t) {
          var n = t.defineProperty,
            r = t.getOwnPropertyDescriptor,
            a = function (t) {
              var n = t.append;
              (t.append = e.append), URLSearchParams.call(t, t._usp.search.slice(1)), (t.append = n);
            },
            o = function (e, t) {
              if (!(e instanceof t)) throw new TypeError("'searchParams' accessed on an object that does not implement interface " + t.name);
            },
            i = function (i) {
              var l,
                c,
                s = i.prototype,
                u = r(s, "searchParams"),
                d = r(s, "href"),
                f = r(s, "search");
              !u &&
                f &&
                f.set &&
                ((c = (function (t) {
                  function r(n, r) {
                    e.append.call(this, n, r), (n = this.toString()), t.set.call(this._usp, n ? "?" + n : "");
                  }
                  function a(n) {
                    e.delete.call(this, n), (n = this.toString()), t.set.call(this._usp, n ? "?" + n : "");
                  }
                  function o(n, r) {
                    e.set.call(this, n, r), (n = this.toString()), t.set.call(this._usp, n ? "?" + n : "");
                  }
                  return function (e, t) {
                    return (e.append = r), (e.delete = a), (e.set = o), n(e, "_usp", { configurable: !0, writable: !0, value: t });
                  };
                })(f)),
                (l = function (e, t) {
                  return n(e, "_searchParams", { configurable: !0, writable: !0, value: c(t, e) }), t;
                }),
                t.defineProperties(s, {
                  href: {
                    get: function () {
                      return d.get.call(this);
                    },
                    set: function (e) {
                      var t = this._searchParams;
                      d.set.call(this, e), t && a(t);
                    },
                  },
                  search: {
                    get: function () {
                      return f.get.call(this);
                    },
                    set: function (e) {
                      var t = this._searchParams;
                      f.set.call(this, e), t && a(t);
                    },
                  },
                  searchParams: {
                    get: function () {
                      return o(this, i), this._searchParams || l(this, new URLSearchParams(this.search.slice(1)));
                    },
                    set: function (e) {
                      o(this, i), l(this, e);
                    },
                  },
                }));
            };
          try {
            i(HTMLAnchorElement), /^function|object$/.test(typeof URL) && URL.prototype && i(URL);
          } catch (e) {}
        })(Object);
    })(ae.URLSearchParams.prototype);
    var oe = ae.URLSearchParams;
    function ie(e, t = false) {
      const n = new oe(t ? e.hash : e.search),
        r = n.get("alias");
      if ("string" == typeof r && 0 !== r.length) return r;
      const a = n.get("nodeId");
      return null !== a ? parseInt(a, 10) : void 0;
    }
    function le(e, t, n = false) {
      const r = n ? "#" : "?";
      return "string" == typeof t ? `${e}${r}alias=${t}` : "number" == typeof t ? `${e}${r}nodeId=${t}` : e;
    }
    
    function ce(e, t) {
      let n;
      $(
        "core.router",
        (r) => {
          n
            ? n.notifyListeners()
            : ((n = (function (e, t) {
                let n = [];
                e.engineUITransitionTime = 800;
                const r = {
                  createHref: g,
                  block: () => () => {},
                  listen: (e) => (
                    (n = [...n, e]),
                    () => {
                      n = G()([e], n);
                    }
                  ),
                  get length() {
                    return e.history.length;
                  },
                  get action() {
                    return e.history.action;
                  },
                  get location() {
                    return (function (e) {
                      const [t, n] = e.pathname.split("?"),
                        [r, a] = t.split("#");
                      return { hash: a || e.hash || "", pathname: r, search: n || e.search || "", state: e.state };
                    })(e.history.location);
                  },
                  go: (t) => {
                    e.history.go(t);
                  },
                  goBack: () => {
                    e.history.goBack();
                  },
                  goForward: () => {
                    e.history.goForward();
                  },
                  push: (t) => {
                    if ("object" == typeof t) throw new Error("Not supported");
                    e.history.push(t, "/achievements/");
                  },
                  replace: (t) => {
                    if ("object" == typeof t) throw new Error("Not supported");
                    e.history.replace(t, "/achievements/");
                  },
                };
                let a = null,
                  o = ie(r.location);
                return {
                  history: r,
                  notifyListeners: () => {
                    (a && a.pathname === r.location.pathname) || n.forEach((e) => e(r.location, r.action));
                    const e = ie(r.location);
                    e !== o && t(e), (o = e), (a = r.location);
                  },
                };
              })(r, e)),
              t(n.history));
        },
        void 0,
        (e) => {
          throw new Error(e);
        }
      );
      var engine = window.engine;
     //
     // engine.on("facet:updated:core.router", function(interface) {
     //   window._facet_interface = interface;
     // });
      engine.trigger("facet:request", ["all"]);
    }
    n(57);
    let se, ue, de, fe;
    !(function (e) {
      (e[(e.TV_SCREEN_TYPE = 0)] = "TV_SCREEN_TYPE"),
        (e[(e.DESKTOP_SCREEN_TYPE = 1)] = "DESKTOP_SCREEN_TYPE"),
        (e[(e.HANDHELD_SCREEN_TYPE = 2)] = "HANDHELD_SCREEN_TYPE"),
        (e[(e.VR_SCREEN_TYPE = 3)] = "VR_SCREEN_TYPE");
    })(se || (se = {})),
      (function (e) {
        (e[(e.PHONE = 0)] = "PHONE"), (e[(e.TABLET = 1)] = "TABLET");
      })(ue || (ue = {})),
      (function (e) {
        (e[(e.GAMEPAD_INPUT_METHOD = 0)] = "GAMEPAD_INPUT_METHOD"),
          (e[(e.TOUCH_INPUT_METHOD = 1)] = "TOUCH_INPUT_METHOD"),
          (e[(e.MOUSE_INPUT_METHOD = 2)] = "MOUSE_INPUT_METHOD"),
          (e[(e.MOTION_CONTROLLER_INPUT_METHOD = 3)] = "MOTION_CONTROLLER_INPUT_METHOD");
      })(de || (de = {})),
      (function (e) {
        (e[(e.IOS = 0)] = "IOS"),
          (e[(e.GOOGLE = 1)] = "GOOGLE"),
          (e[(e.AMAZON_HANDHELD = 2)] = "AMAZON_HANDHELD"),
          (e[(e.UWP = 3)] = "UWP"),
          (e[(e.XBOX = 4)] = "XBOX"),
          (e[(e.NX_HANDHELD = 5)] = "NX_HANDHELD"),
          (e[(e.PS4 = 6)] = "PS4"),
          (e[(e.GEARVR = 7)] = "GEARVR"),
          (e[(e.WIN32 = 8)] = "WIN32"),
          (e[(e.MACOS = 9)] = "MACOS"),
          (e[(e.AMAZON_TV = 10)] = "AMAZON_TV"),
          (e[(e.NX_TV = 11)] = "NX_TV");
      })(fe || (fe = {}));
    const pe = Object(r.createContext)(se.TV_SCREEN_TYPE),
      me = Object(r.createContext)(false),
      ge = Object(r.createContext)(false),
      he = Object(r.createContext)(!0),
      Ee = Object(r.createContext)(fe.XBOX),
      ve = Object(r.createContext)(false),
      be = () => Object(r.useContext)(me),
      ye = () => Object(r.useContext)(ge),
      Te = () => Object(r.useContext)(he),
      _e = () => Object(r.useContext)(ve);
    var xe = n(68),
      we = n.n(xe);
    let Se;
    !(function (e) {
      (e.A = "A"),
        (e.B = "B"),
        (e.X = "X"),
        (e.Y = "Y"),
        (e.START = "START"),
        (e.SELECT = "SELECT"),
        (e.XBOX = "XBOX"),
        (e.RIGHT_TRIGGER = "RT"),
        (e.LEFT_TRIGGER = "LT"),
        (e.LEFT_BUMPER = "LB"),
        (e.RIGHT_BUMPER = "RB"),
        (e.L3 = "L3"),
        (e.R3 = "R3"),
        (e.LEFT = "LEFT"),
        (e.RIGHT = "RIGHT"),
        (e.UP = "UP"),
        (e.DOWN = "DOWN"),
        (e.NEXT = "NEXT"),
        (e.PREV = "PREV"),
        (e.LEFT_ANALOG_LEFT = "L_LEFT"),
        (e.LEFT_ANALOG_RIGHT = "L_RIGHT"),
        (e.LEFT_ANALOG_UP = "L_UP"),
        (e.LEFT_ANALOG_DOWN = "L_DOWN"),
        (e.RIGHT_ANALOG_LEFT = "R_LEFT"),
        (e.RIGHT_ANALOG_RIGHT = "R_RIGHT"),
        (e.RIGHT_ANALOG_UP = "R_UP"),
        (e.RIGHT_ANALOG_DOWN = "R_DOWN"),
        (e[(e.LEFT_HORIZONTAL_AXIS = 0)] = "LEFT_HORIZONTAL_AXIS"),
        (e[(e.LEFT_VERTICAL_AXIS = 1)] = "LEFT_VERTICAL_AXIS"),
        (e[(e.RIGHT_HORIZONTAL_AXIS = 2)] = "RIGHT_HORIZONTAL_AXIS"),
        (e[(e.RIGHT_VERTICAL_AXIS = 3)] = "RIGHT_VERTICAL_AXIS"),
        (e.PSEUDO_BUTTON_1 = "PSEUDO_BUTTON_1"),
        (e.PSEUDO_BUTTON_2 = "PSEUDO_BUTTON_2");
    })(Se || (Se = {}));
    const Ce = [
        [Se.LEFT_ANALOG_LEFT, Se.LEFT_ANALOG_RIGHT],
        [Se.LEFT_ANALOG_UP, Se.LEFT_ANALOG_DOWN],
        [Se.RIGHT_ANALOG_LEFT, Se.RIGHT_ANALOG_RIGHT],
        [Se.RIGHT_ANALOG_RIGHT, Se.RIGHT_ANALOG_DOWN],
      ],
      Oe =
        (Se.A,
        Se.B,
        Se.X,
        Se.Y,
        Se.START,
        Se.SELECT,
        Se.XBOX,
        Se.RIGHT_TRIGGER,
        Se.LEFT_TRIGGER,
        Se.LEFT_BUMPER,
        Se.RIGHT_BUMPER,
        Se.L3,
        Se.R3,
        Se.LEFT,
        Se.RIGHT,
        Se.UP,
        Se.DOWN,
        Se.PSEUDO_BUTTON_1,
        Se.PSEUDO_BUTTON_2,
        [Se.A, Se.B, Se.X, Se.Y, Se.START, Se.SELECT, Se.LEFT_BUMPER, Se.RIGHT_BUMPER, Se.LEFT_TRIGGER, Se.RIGHT_TRIGGER, Se.R3]),
      Ie = [
        Se.A,
        Se.B,
        Se.X,
        Se.Y,
        Se.LEFT_BUMPER,
        Se.RIGHT_BUMPER,
        Se.LEFT_TRIGGER,
        Se.RIGHT_TRIGGER,
        Se.SELECT,
        Se.START,
        Se.L3,
        Se.R3,
        Se.UP,
        Se.DOWN,
        Se.LEFT,
        Se.RIGHT,
        Se.XBOX,
      ],
      Ne = [Se.LEFT, Se.RIGHT, Se.UP, Se.DOWN];
    Oe.map((e) => Ie.indexOf(e)), Ne.map((e) => Ie.indexOf(e));
    function ke(e, t, n) {
      "focusable" === t.type && (e.focusableCount += n), "shortcut" === t.type && "parent" === t.scope && (e.parentShortcutCount += n);
    }
    function Pe(e, t) {
      if (je(e, t.id)) {
        if ("focusable" === t.type) {
          const n = Re(e, t.id),
            r = t.alias;
          n !== r && (n && e.aliases.delete(n), r && e.aliases.set(r, t.id));
        }
        e.metadata.set(t.id, t);
      } else {
        if ((e.metadata.set(t.id, t), ke(e, t, 1), "focusable" === t.type && t.alias && e.aliases.set(t.alias, t.id), "shortcut" === t.type && "global" === t.scope))
          return void (e.globalShortcuts = we()([t.id], e.globalShortcuts));
        t.path.forEach((n, r) => {
          const a = r < t.path.length - 1 ? "containerChildren" : "focusable" === t.type ? "focusableChildren" : "shortcut" === t.type ? "shortcutChildren" : "containerChildren",
            o = e[a].get(n) || [],
            i = r === t.path.length - 1 ? t.id : t.path[r + 1];
          e[a].set(n, we()(o, [i])), e.parents.set(i, n);
        });
      }
    }
    function Re(e, t) {
      const n = Ue(e, t);
      if (n) return n.alias;
    }
    function Le(e, t) {
      if (void 0 === t) return Fe(e);
      const n = "string" == typeof t ? e.aliases.get(t) : t;
      return void 0 !== n && De(e, n) ? n : void 0;
    }
    function Ae(e, t) {
      for (const [n, r] of e) if (t(r, n)) return r;
    }
    function Me(e, t, n) {
      return (function (e, t) {
        return Ae(e.metadata, t);
      })(e, (e) => {
        if ("focusable" !== e.type || e.disabled || !e.onClick || !e.ref || !e.ref.current) return false;
        const r = e.ref.current.getBoundingClientRect();
        return t >= r.left && t <= r.left + r.width && n >= r.top && n <= r.top + r.height;
      });
    }
    function Fe(e) {
      const t = Ae(e.metadata, (t, n) => "focusable" === t.type && De(e, n) && !!t.autofocus);
      if (t) return t.id;
    }
    function De(e, t) {
      const n = je(e, t);
      if (void 0 === n) return false;
      if (n.disabled) return false;
      const r = He(e, t);
      for (let t = 0; t < r.length; t++) {
        const n = je(e, r[t]);
        if (void 0 === n || n.disabled) return false;
      }
      return !0;
    }
    function je(e, t) {
      return e.metadata.get(t);
    }
    function Ue(e, t) {
      const n = je(e, t);
      if (n && "focusable" === n.type) return n;
    }
    function Be(e, t) {
      return e.parents.get(t);
    }
    function He(e, t) {
      const n = Be(e, t);
      return void 0 === n ? [] : [n, ...He(e, n)];
    }
    function ze(e, t) {
      return He(e, t)
        .map((t) => je(e, t))
        .filter((e) => void 0 !== e);
    }
    function Ge(e, t) {
      return [...(e.containerChildren.get(t) || []), ...(e.focusableChildren.get(t) || [])];
    }
    function Ye(e, t) {
      const n = t ? Ue(e, t) : void 0,
        r = Ke(e, t, Se.A);
      return {
        [Se.A]: r || (n && n.inputLegend ? n.inputLegend : void 0),
        [Se.B]: Ke(e, t, Se.B),
        [Se.X]: Ke(e, t, Se.X),
        [Se.Y]: Ke(e, t, Se.Y),
        [Se.LEFT]: Ke(e, t, Se.LEFT),
        [Se.RIGHT]: Ke(e, t, Se.RIGHT),
        [Se.UP]: Ke(e, t, Se.UP),
        [Se.DOWN]: Ke(e, t, Se.DOWN),
        [Se.START]: Ke(e, t, Se.START),
      };
    }
    function Ke(e, t, n) {
      const r = We(e, t, (e) => e.shortcut === n && void 0 !== e.inputLegend && !e.disabled);
      if (void 0 === r) return;
      const a = je(e, r);
      return void 0 !== a ? a.inputLegend : void 0;
    }
    function We(e, t, n) {
      const r = t
        ? (function e(t, n, r) {
            const a = Be(t, n);
            if (void 0 === a) return;
            const o = t.shortcutChildren.get(a);
            if (void 0 === o) return e(t, a, r);
            const i = o.find((e) => {
              const n = (function (e, t) {
                const n = je(e, t);
                if (n && "shortcut" === n.type) return n;
              })(t, e);
              return n ? r(n) : void 0;
            });
            return void 0 !== i ? i : e(t, a, r);
          })(e, t, n)
        : void 0;
      return (
        r ||
        (function (e, t) {
          return e.globalShortcuts.find((n) => {
            const r = je(e, n);
            return r ? t(r) : void 0;
          });
        })(e, n)
      );
    }
    var Ve = n(22);
    const $e = Object(r.createContext)({ swapABButtons: false, swapXYButtons: false }),
      { Provider: Xe, Consumer: qe } = $e;
    var Qe = n(101),
      Ze = n.n(Qe),
      Je = n(100),
      et = n.n(Je);
    function tt(e, t) {
      return ("column" !== e || ("right" !== t && "left" !== t)) && ("row" !== e || ("up" !== t && "down" !== t));
    }
    function nt(e) {
      return "left" === e || "up" === e || "prev" === e;
    }
    const rt = ({ focusTree: e, parentId: t, childId: n, shouldFindDefaultFocusedChild: r, direction: a, focusState: o, gridIndex: i }) => {
      const l = Ge(e, t);
      if (0 === l.length) return;
      const c = l.map((t) => je(e, t)).filter((e) => void 0 !== e && ("focusable" === e.type || "row" === e.type || "column" === e.type) && !e.disabled),
        s = et()((e) => e.index, c);
      if (r) {
        const n = je(e, t),
          r = ((e, t, n, r, a, o, i) => {
            if ("remember" === e && r.get(n)) return a.find((e) => e.id === r.get(n));
            if (t) return a.find((e) => "focusable" === e.type && !!e.alias && e.alias === t);
            if ("grid" === e) return a.find((e) => e.index === o);
            if ("last" === e) return a[a.length - 1];
            if ("first" === e) return a[0];
            return a[nt(i) ? a.length - 1 : 0];
          })(n.defaultFocusedChildBehavior, n.defaultFocusedChildAlias, t, o, s, i, a);
        if (r) return r;
      }
      return s[
        Ze()((e) => e.id === n, s) +
          (function (e) {
            return nt(e) ? -1 : 1;
          })(a)
      ];
    };
    function at({ focusTree: e, parentId: t, shouldFindDefaultFocusedChild: n, direction: r, childId: a, focusState: o, gridIndex: i, unexplored: l = [], explored: c = {} }) {
      const s = rt({ focusTree: e, parentId: t, childId: a, shouldFindDefaultFocusedChild: n, direction: r, focusState: o, gridIndex: i });
      if (s && ((c[s.id] = !0), l.push(...(e.containerChildren.get(t) || [])), "focusable" === s.type)) return s.id;
      c[t] = !0;
      const u = s ? s.id : l.filter((e) => !c[e]).pop();
      return u ? at({ focusTree: e, parentId: u, shouldFindDefaultFocusedChild: !0, direction: r, childId: a, focusState: o, gridIndex: i, unexplored: l, explored: c }) : void 0;
    }
    const ot = function (e) {
      return --e * e * e + 1;
    };
    const it = () => ({ 0: lt(), 1: lt(), 2: lt(), 3: lt() }),
      lt = () => ({
        [Se.A]: 0,
        [Se.B]: 0,
        [Se.X]: 0,
        [Se.Y]: 0,
        [Se.START]: 0,
        [Se.SELECT]: 0,
        [Se.XBOX]: 0,
        [Se.RIGHT_TRIGGER]: 0,
        [Se.LEFT_TRIGGER]: 0,
        [Se.LEFT_BUMPER]: 0,
        [Se.RIGHT_BUMPER]: 0,
        [Se.L3]: 0,
        [Se.R3]: 0,
        [Se.LEFT]: 0,
        [Se.RIGHT]: 0,
        [Se.UP]: 0,
        [Se.DOWN]: 0,
        [Se.NEXT]: 0,
        [Se.PREV]: 0,
        [Se.LEFT_ANALOG_LEFT]: 0,
        [Se.LEFT_ANALOG_RIGHT]: 0,
        [Se.LEFT_ANALOG_UP]: 0,
        [Se.LEFT_ANALOG_DOWN]: 0,
        [Se.RIGHT_ANALOG_LEFT]: 0,
        [Se.RIGHT_ANALOG_RIGHT]: 0,
        [Se.RIGHT_ANALOG_UP]: 0,
        [Se.RIGHT_ANALOG_DOWN]: 0,
        [Se.LEFT_HORIZONTAL_AXIS]: 0,
        [Se.LEFT_VERTICAL_AXIS]: 0,
        [Se.RIGHT_HORIZONTAL_AXIS]: 0,
        [Se.RIGHT_VERTICAL_AXIS]: 0,
        [Se.PSEUDO_BUTTON_1]: 0,
        [Se.PSEUDO_BUTTON_2]: 0,
      });
    var ct = (e, t, n, r, a, o) => {
      const i = (function (e) {
          const t = it(),
            n = it();
          return (r, a, o) => {
            if (a) {
              const a = Date.now(),
                i = t[o][r] || 0,
                l = n[o][r] || 0,
                c = a - i;
              if (0 === l) return (t[o][r] = a), (n[o][r] = 1), e(r);
              if (1 === l && c > 400) return (t[o][r] = a), (n[o][r] = 2), e(r);
              if (l > 1 && l < 16 && c > 100) return (t[o][r] = a), (n[o][r] = l + 1), e(r);
              if (l > 15 && c > 40) return (t[o][r] = a), (n[o][r] = l + 1), e(r);
            } else (t[o][r] = 0), (n[o][r] = 0);
          };
        })(e),
        l = ut(e),
        c = Oe.map((e) => Ie.indexOf(dt(e, a, o))),
        s = Ne.map((e) => Ie.indexOf(e));
      function u(e) {
        const n = e.buttons,
          r = e.index;
        for (let e = 0; e < c.length; e++) {
          const t = c[e];
          l(Ie[t], n[t].pressed, r);
        }
        for (let e = 0; e < s.length; e++) {
          const t = s[e];
          i(Ie[t], n[t].pressed, r);
        }
        const a = e.axes.map((e, t) => {
          if (e > -0.16 && e < 0.16) return 0;
          const n = Ce[t];
          return i(n[0], e < -st, r), i(n[1], e > st, r), e;
        });
        t(a);
      }
      const d = r
        ? function () {
            try {
              const e = navigator.getGamepads(),
                t = e[0],
                n = e[1],
                r = e[2],
                a = e[3];
              t && u(t), n && u(n), r && u(r), a && u(a), (f = requestAnimationFrame(d));
            } catch (e) {
              console.log("Error handling gamepad input", e);
            }
          }
        : function () {
            try {
              const e = navigator.getGamepads();
              for (let t = 0; t < e.length; t++) {
                const r = e[t];
                if (r && n === r.id) {
                  u(r);
                  break;
                }
              }
              f = requestAnimationFrame(d);
            } catch (e) {
              console.log("Error handling gamepad input", e);
            }
          };
      let f = requestAnimationFrame(d);
      return () => {
        cancelAnimationFrame(f);
      };
    };
    const st = 0.5,
      ut = (e) => {
        const t = { 0: {}, 1: {}, 2: {}, 3: {} };
        return (n, r, a) => {
          const o = t[a][n];
          r !== o && (r ? ((t[a][n] = !0), void 0 !== o && e(n)) : (t[a][n] = false));
        };
      },
      dt = (e, t, n) => (e === Se.Y && n ? Se.X : e === Se.X && n ? Se.Y : e === Se.A && t ? Se.B : e === Se.B && t ? Se.A : e);
    let ft;
    !(function (e) {
      (e[(e.TAB = 9)] = "TAB"),
        (e[(e.ENTER = 13)] = "ENTER"),
        (e[(e.SHIFT = 16)] = "SHIFT"),
        (e[(e.CTRL = 17)] = "CTRL"),
        (e[(e.ALT = 18)] = "ALT"),
        (e[(e.ESCAPE = 27)] = "ESCAPE"),
        (e[(e.SPACE = 32)] = "SPACE"),
        (e[(e.LEFT = 37)] = "LEFT"),
        (e[(e.UP = 38)] = "UP"),
        (e[(e.RIGHT = 39)] = "RIGHT"),
        (e[(e.DOWN = 40)] = "DOWN"),
        (e[(e.KEY_0 = 48)] = "KEY_0"),
        (e[(e.KEY_1 = 49)] = "KEY_1"),
        (e[(e.KEY_2 = 50)] = "KEY_2"),
        (e[(e.KEY_3 = 51)] = "KEY_3"),
        (e[(e.KEY_4 = 52)] = "KEY_4"),
        (e[(e.KEY_5 = 53)] = "KEY_5"),
        (e[(e.KEY_6 = 54)] = "KEY_6"),
        (e[(e.KEY_7 = 55)] = "KEY_7"),
        (e[(e.KEY_8 = 56)] = "KEY_8"),
        (e[(e.KEY_9 = 57)] = "KEY_9"),
        (e[(e.KEY_A = 65)] = "KEY_A"),
        (e[(e.KEY_B = 66)] = "KEY_B"),
        (e[(e.KEY_C = 67)] = "KEY_C"),
        (e[(e.KEY_D = 68)] = "KEY_D"),
        (e[(e.KEY_E = 69)] = "KEY_E"),
        (e[(e.KEY_F = 70)] = "KEY_F"),
        (e[(e.KEY_G = 71)] = "KEY_G"),
        (e[(e.KEY_H = 72)] = "KEY_H"),
        (e[(e.KEY_I = 73)] = "KEY_I"),
        (e[(e.KEY_J = 74)] = "KEY_J"),
        (e[(e.KEY_K = 75)] = "KEY_K"),
        (e[(e.KEY_L = 76)] = "KEY_L"),
        (e[(e.KEY_M = 77)] = "KEY_M"),
        (e[(e.KEY_N = 78)] = "KEY_N"),
        (e[(e.KEY_O = 79)] = "KEY_O"),
        (e[(e.KEY_P = 80)] = "KEY_P"),
        (e[(e.KEY_Q = 81)] = "KEY_Q"),
        (e[(e.KEY_R = 82)] = "KEY_R"),
        (e[(e.KEY_S = 83)] = "KEY_S"),
        (e[(e.KEY_T = 84)] = "KEY_T"),
        (e[(e.KEY_U = 85)] = "KEY_U"),
        (e[(e.KEY_V = 86)] = "KEY_V"),
        (e[(e.KEY_W = 87)] = "KEY_W"),
        (e[(e.KEY_X = 88)] = "KEY_X"),
        (e[(e.KEY_Y = 89)] = "KEY_Y"),
        (e[(e.KEY_Z = 90)] = "KEY_Z"),
        (e[(e.F1 = 112)] = "F1"),
        (e[(e.F2 = 113)] = "F2"),
        (e[(e.F3 = 114)] = "F3"),
        (e[(e.F4 = 115)] = "F4"),
        (e[(e.F5 = 116)] = "F5"),
        (e[(e.F6 = 117)] = "F6"),
        (e[(e.F7 = 118)] = "F7"),
        (e[(e.F8 = 119)] = "F8"),
        (e[(e.F9 = 120)] = "F9"),
        (e[(e.F10 = 121)] = "F10"),
        (e[(e.F11 = 122)] = "F11"),
        (e[(e.F12 = 123)] = "F12"),
        (e[(e.MOUSE_MOVEMENT = 200)] = "MOUSE_MOVEMENT"),
        (e[(e.MOUSE_BUTTON_LEFT = 201)] = "MOUSE_BUTTON_LEFT"),
        (e[(e.MOUSE_BUTTON_MIDDLE = 202)] = "MOUSE_BUTTON_MIDDLE"),
        (e[(e.MOUSE_BUTTON_RIGHT = 203)] = "MOUSE_BUTTON_RIGHT"),
        (e[(e.MOUSE_WHEEL = 204)] = "MOUSE_WHEEL"),
        (e[(e.BRACKET_OPEN = 219)] = "BRACKET_OPEN"),
        (e[(e.BRACKET_CLOSE = 221)] = "BRACKET_CLOSE"),
        (e[(e.PSEUDO_KEY_1 = 210)] = "PSEUDO_KEY_1"),
        (e[(e.PSEUDO_KEY_2 = 211)] = "PSEUDO_KEY_2");
    })(ft || (ft = {}));
    const pt = {
        [Se.UP]: ft.UP,
        [Se.DOWN]: ft.DOWN,
        [Se.LEFT]: ft.LEFT,
        [Se.RIGHT]: ft.RIGHT,
        [Se.X]: ft.KEY_X,
        [Se.Y]: ft.KEY_Y,
        [Se.A]: ft.ENTER,
        [Se.B]: ft.ESCAPE,
        [Se.LEFT_TRIGGER]: ft.KEY_Q,
        [Se.RIGHT_TRIGGER]: ft.KEY_Z,
        [Se.LEFT_BUMPER]: ft.BRACKET_OPEN,
        [Se.RIGHT_BUMPER]: ft.BRACKET_CLOSE,
        [Se.START]: ft.F10,
        [Se.SELECT]: ft.F11,
        [Se.XBOX]: ft.F1,
        [Se.L3]: ft.F2,
        [Se.R3]: ft.F3,
        [Se.PSEUDO_BUTTON_1]: ft.PSEUDO_KEY_1,
        [Se.PSEUDO_BUTTON_2]: ft.PSEUDO_KEY_2,
      },
      mt = Object(r.createContext)(pt);
    function gt(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function ht(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? gt(Object(n), !0).forEach(function (t) {
              Et(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : gt(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function Et(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
    }
    var vt = (e, t, n, r, a, o, i) => {
      const l = ct(e, t, n, r, a, o),
        c = ((e, t) => {
          const n = Object.keys(t).reduce((e, n) => ht(ht({}, e), {}, { [t[n]]: n }), {}),
            r = (t) => {
              if (document.activeElement !== document.body) return;
              const r = t.keyCode,
                a = n[r];
              return a ? (t.preventDefault(), e(a)) : r === ft.TAB ? (t.preventDefault(), e(t.shiftKey ? Se.PREV : Se.NEXT)) : void 0;
            };
          return (
            document.addEventListener("keydown", r),
            () => {
              document.removeEventListener("keydown", r);
            }
          );
        })(e, i),
        s = ((e) => {
          const t = (t) => {
            3 === t.button && e(Se.B);
          };
          return (
            document.addEventListener("mousedown", t),
            () => {
              document.removeEventListener("mousedown", t);
            }
          );
        })(e);
      return () => {
        c(), l(), s();
      };
    };
    const bt = Object(r.createContext)({}),
      yt = bt.Provider,
      Tt = Object(r.createContext)(() => () => {}),
      _t = ({ onFocusedIdChange: e, children: t, focusedId: n }) => {
        const o = Object(r.useRef)(n);
        o.current = n;
        const i = Object(r.useCallback)(
          (t) => {
            const n = o.current;
            return e(t), () => e(n);
          },
          [e]
        );
        return a.a.createElement(Tt.Provider, { value: i }, t);
      };
    function xt({
      children: e,
      focusedId: t,
      onFocusedIdChange: n,
      gameControllerId: o = "0",
      acceptInputFromAllControllers: i = false,
      swapABButtons: l = false,
      swapXYButtons: c = false,
      disabledNavigation: s,
      disabledTransition: u = false,
      disabledShortcuts: d = false,
      isRtl: f = false,
      keyboardGamepadMap: p,
    }) {
      const m = Object(r.useMemo)(
          () => ({
            disabledShortcuts: d,
            disabledNavigation: s,
            focusedId: t,
            onFocusedIdChange: n,
            recalculateInputLegends: false,
            focusState: new Map(),
            focusTree: {
              focusableCount: 0,
              parentShortcutCount: 0,
              metadata: new Map(),
              focusableChildren: new Map(),
              containerChildren: new Map(),
              shortcutChildren: new Map(),
              parents: new Map(),
              aliases: new Map(),
              globalShortcuts: [],
            },
            analogListeners: [],
            digitalListeners: [],
            isRtl: f,
          }),
          []
        ),
        g = Object(r.useRef)(m);
      (g.current.disabledShortcuts = d), (g.current.disabledNavigation = s), (g.current.focusedId = t), (g.current.onFocusedIdChange = n), (g.current.isRtl = f);
      const h = (function (e) {
          const t = e.focusedId,
            n = Object(r.useRef)(),
            a = Object(r.useRef)({}),
            [[o, i], l] = Object(r.useState)([{}, 0]),
            [c, s] = Object(r.useMemo)(() => {
              const n = Le(e.focusTree, t);
              return [Ye(e.focusTree, n), Date.now()];
            }, [e, t]);
          (n.current = c),
            Object(r.useEffect)(() => {
              const t = () => {
                if (e.recalculateInputLegends) {
                  const t = Le(e.focusTree, e.focusedId),
                    r = Ye(e.focusTree, t);
                  (void 0 === n.current || !St(o, r) || !St(n.current, r)) && l([r, Date.now()]), (e.recalculateInputLegends = false);
                }
                r = setTimeout(t, 100);
              };
              let r = setTimeout(t, 100);
              return () => {
                clearTimeout(r);
              };
            }, [e, o]);
          const u = s > i ? c : o;
          if (St(u, a.current)) return a.current;
          return (a.current = u), u;
        })(g.current),
        E = (function (e, t, n, a, o, i, l) {
          const [c, s] = Object(r.useState)(false),
            u = Object(r.useRef)(void 0);
          return (
            Object(r.useLayoutEffect)(() => {
              if (!e.focusedId) return;
              const t = Le(e.focusTree, e.focusedId);
              if (!t) return;
              const n = Ue(e.focusTree, t);
              if (!n) return;
              const r = ze(e.focusTree, t);
              u.current = wt(n, r, i);
            }, [e.focusTree, e.focusedId, i]),
            Object(r.useLayoutEffect)(() => {
              const r = (t, n) => {
                if ((e.isRtl && ("left" === t ? (t = "right") : "right" === t && (t = "left")), e.disabledNavigation)) return;
                if (void 0 === n) {
                  const t = (function (e) {
                      const t = Fe(e);
                      if (void 0 !== t) return t;
                      const n = Ae(e.metadata, (t, n) => "focusable" === t.type && De(e, n));
                      return n ? n.id : void 0;
                    })(e.focusTree),
                    n = t ? Re(e.focusTree, t) || t : void 0;
                  return void (void 0 !== n && e.onFocusedIdChange(n));
                }
                const r = Ue(e.focusTree, n);
                if (r)
                  switch (t) {
                    case "left":
                      if (r.onLeft && r.onLeft()) return;
                      break;
                    case "right":
                      if (r.onRight && r.onRight()) return;
                  }
                const a = (function (e, t, n, r) {
                    const a = [t, ...He(e, t)],
                      o = je(e, t).index;
                    let i;
                    for (const t of a) {
                      if (je(e, t).bounded) break;
                      const a = Be(e, t);
                      if (void 0 === a) continue;
                      const l = je(e, a);
                      if (
                        void 0 !== l &&
                        tt(l.type, r) &&
                        ((i = at({ focusTree: e, parentId: a, shouldFindDefaultFocusedChild: false, direction: r, childId: t, focusState: n, gridIndex: o, explored: { [t]: !0 } })),
                        void 0 !== i)
                      )
                        return i;
                    }
                    return t;
                  })(e.focusTree, n, e.focusState, t),
                  o = a ? Re(e.focusTree, a) || a : void 0;
                e.focusedId !== o && e.onFocusedIdChange(o);
              };
              return c
                ? vt(
                    (t) => {
                      e.digitalListeners.forEach((e) => e(t));
                      const n = Le(e.focusTree, e.focusedId);
                      if (
                        !((t, n) => {
                          if (e.disabledShortcuts) return false;
                          const r = We(e.focusTree, n, (e) => e.shortcut === t && !e.disabled);
                          if (!r) return false;
                          const a = je(e.focusTree, r);
                          return !(!a || !a.onClick) && (a.onClick(), !0);
                        })(t, n)
                      )
                        switch (t) {
                          case Se.A:
                            return (() => {
                              if (e.disabledNavigation) return;
                              const t = Le(e.focusTree, e.focusedId);
                              if (void 0 === t) return;
                              const n = Ue(e.focusTree, t);
                              void 0 !== n && n.onClick && n.onClick();
                            })();
                          case Se.LEFT_ANALOG_UP:
                          case Se.UP:
                            return r("up", n);
                          case Se.LEFT_ANALOG_DOWN:
                          case Se.DOWN:
                            return r("down", n);
                          case Se.LEFT_ANALOG_LEFT:
                          case Se.LEFT:
                            return r("left", n);
                          case Se.LEFT_ANALOG_RIGHT:
                          case Se.RIGHT:
                            return r("right", n);
                          case Se.NEXT:
                            return r("next", n);
                          case Se.PREV:
                            return r("prev", n);
                        }
                    },
                    (t) => {
                      if (e.disabledNavigation) return;
                      if ((e.analogListeners.forEach((e) => e(t)), !e.focusedId)) return;
                      const n = t[Se.RIGHT_VERTICAL_AXIS],
                        r = t[Se.RIGHT_HORIZONTAL_AXIS];
                      if (0 === n && 0 === r) return;
                      const a = Le(e.focusTree, e.focusedId);
                      if (!a) return;
                      const o = ze(e.focusTree, a).filter((e) => e.scrollWithAnalog);
                      0 !== o.length &&
                        (u.current && u.current(),
                        o.forEach((e) => {
                          const t = "row" === e.type ? r : n,
                            a = "row" === e.type ? "scrollLeft" : "scrollTop";
                          e.ref && e.ref.current && (e.ref.current[a] += 20 * t);
                        }));
                    },
                    t,
                    n,
                    a,
                    o,
                    l
                  )
                : void 0;
            }, [c, e, t, n, a, o, l]),
            s
          );
        })(g.current, o, i, l, c, u, p);
      !(function (e, t) {
        const n = Object(r.useRef)(),
          a = Object(r.useRef)(t);
        Object(r.useLayoutEffect)(() => {
          const r = a.current,
            o = n.current,
            i = e.focusTree,
            l = Le(i, r),
            c = l ? Ue(i, l) : null;
          if ((c && c.onFocusedChange(false), o !== l)) {
            const e = o ? Ue(i, o) : null;
            e && e.onFocusedChange(false);
          }
          const s = Le(i, t),
            u = s ? Ue(i, s) : null;
          u && u.onFocusedChange(!0), (a.current = t), (n.current = s);
        }, [t, e]);
      })(g.current, t);
      const v = (function (e, t) {
        return Object(r.useMemo)(() => {
          const n = () => {
            var n;
            t((n = e.focusTree).focusableCount > 0 || n.parentShortcutCount > 0 || n.globalShortcuts.length > 0);
          };
          return {
            requestFocus(t) {
              if (!t) return;
              if (De(e.focusTree, t) && e.onFocusedIdChange) {
                const n = Re(e.focusTree, t);
                n !== e.focusedId && e.onFocusedIdChange(n || t);
              }
            },
            runAddNodeEffect() {
              n();
            },
            addOrUpdateNode(t) {
              Pe(e.focusTree, t), ("shortcut" !== t.type && "focusable" !== t.type) || (e.recalculateInputLegends = !0);
            },
            removeNode(t) {
              !(function (e, t) {
                const n = je(e, t);
                if (!n) return;
                ke(e, n, -1);
                const r = Be(e, t);
                if (("focusable" === n.type && void 0 !== n.alias && e.aliases.delete(n.alias), "shortcut" === n.type && "global" === n.scope))
                  e.globalShortcuts = G()([t], e.globalShortcuts);
                else if (r)
                  if ("shortcut" === n.type && "parent" === n.scope) {
                    const n = e.shortcutChildren.get(r);
                    n && e.shortcutChildren.set(r, G()([t], n));
                  } else if ("focusable" === n.type) {
                    const n = e.focusableChildren.get(r);
                    n && e.focusableChildren.set(r, G()([t], n));
                  } else {
                    const n = e.containerChildren.get(r);
                    n && e.containerChildren.set(r, G()([t], n));
                  }
                e.parents.delete(t), e.metadata.delete(t);
              })(e.focusTree, t),
                n();
            },
            isFocusableFocused: (t, n, r, a, o) => !o && (n === e.focusedId || (void 0 !== r && r === e.focusedId) || !(void 0 !== e.focusedId || !a || !De(e.focusTree, t))),
            isContainerFocused: (t) => {
              const n = Le(e.focusTree, e.focusedId);
              return (
                !!n &&
                (function (e, t, n) {
                  return -1 !== He(e, t).indexOf(n);
                })(e.focusTree, n, t)
              );
            },
            addAnalogListener: (t) => (
              (e.analogListeners = [...e.analogListeners, t]),
              () => {
                e.analogListeners = G()([t], e.analogListeners);
              }
            ),
            addDigitalListener: (t) => (
              (e.digitalListeners = [...e.digitalListeners, t]),
              () => {
                e.digitalListeners = G()([t], e.digitalListeners);
              }
            ),
            clickFocusableAtPoint: (t, n) => {
              const r = Me(e.focusTree, t, n);
              r && r.onClick && r.onClick();
            },
            focusFocusableAtPoint: (t, n) => {
              const r = Me(e.focusTree, t, n),
                { focusedId: a, onFocusedIdChange: o } = e;
              r && o && (!a || (r.id !== a && r.alias !== a)) ? o(r.alias || r.id) : o && !r && a && o(void 0);
            },
          };
        }, [e, t]);
      })(g.current, E);
      !(function (e) {
        const t = e.focusedId;
        Object(r.useLayoutEffect)(() => {
          const n = e.focusTree,
            r = e.focusState,
            a = Le(n, t);
          if (!a) return;
          const o = Be(n, a);
          o && r.set(o, a);
        }, [e, t]);
      })(g.current);
      const b = Object(r.useMemo)(() => ({ swapABButtons: l, swapXYButtons: c }), [l, c]);
      return a.a.createElement(
        mt.Provider,
        { value: p },
        a.a.createElement(
          _t,
          { onFocusedIdChange: n, focusedId: t },
          a.a.createElement(Xe, { value: b }, a.a.createElement(Ve.b, { value: v }, a.a.createElement(yt, { value: h }, e)))
        )
      );
    }
    const wt = (() => {
      const e = new Map();
      return (t, n, r) => (
        n.forEach((n) => {
          const a = n;
          if (!a.scrollIntoView || t.disableScrollIntoView) return;
          if (!t.ref || !t.ref.current) return void 0;
          if (!a.ref || !a.ref.current) return void 0;
          const o = e.get(a.id);
          o && (o(), e.delete(a.id));
          const { scrollIntoView: i, stopScrolling: l, scrollTo: c } = (function ({
            disabledTransition: e = false,
            speedFactor: t = 1,
            align: n = "center",
            scrollOffset: r = 0,
            axis: a = "y",
          } = {}) {
            let o, i, l, c, s;
            const u = 500 / t,
              d = () => {
                if (!i) return;
                const t = Date.now() - s,
                  n = t / u,
                  r = t > u || e;
                (i["x" === a ? "scrollLeft" : "scrollTop"] = Math.round(l + ot(r ? 1 : n) * c)), r || window.requestAnimationFrame(d);
              };
            return {
              scrollIntoView(e, t) {
                (i = e), (o = t);
                const u = i.getBoundingClientRect(),
                  f = u["x" === a ? "width" : "height"],
                  p = o.getBoundingClientRect(),
                  m = "center" === n ? f / 2 : 0;
                (c = ("x" === a ? p.left : p.top) - ("x" === a ? u.left : u.top) + ("center" === n ? p["x" === a ? "width" : "height"] / 2 : 0) - m + r),
                  (l = i["x" === a ? "scrollLeft" : "scrollTop"]),
                  (s = Date.now()),
                  Math.abs(c) < 5 || window.requestAnimationFrame(d);
              },
              scrollTo(e, t) {
                (i = e), (l = i["x" === a ? "scrollLeft" : "scrollTop"]), (c = t - l), (s = Date.now()), window.requestAnimationFrame(d);
              },
              stopScrolling() {
                (i = null), (o = null);
              },
            };
          })({
            disabledTransition: r,
            speedFactor: (t.scrollSpeedFactor ? t.scrollSpeedFactor : a.scrollIntoViewSpeedFactor) || 1,
            align: (t.scrollAlign ? t.scrollAlign : a.scrollIntoViewAlign) || "center",
            scrollOffset: (a.scrollIntoViewOffset || 0) + (t.scrollOffset || 0),
            axis: "row" === a.type ? "x" : "y",
          });
          a.scrollIntoViewCalculateValue ? c(a.ref.current, a.scrollIntoViewCalculateValue(a, t)) : i(a.ref.current, t.ref.current), e.set(a.id, l);
        }),
        () => {
          for (const t of e.values()) t();
          e.clear();
        }
      );
    })();
    const St = (e, t) => e.A === t.A && e.B === t.B && e.START === t.START && e.X === t.X && e.Y === t.Y;
    function Ct({ children: e, remoteFacetDriver: t }) {
      return a.a.createElement(Ot.Provider, { value: t }, e);
    }
    const Ot = Object(r.createContext)(() => () => {}),
      It = () => Object(r.useContext)(Ot);
    function Nt(e) {
      const t = It(),
        [n, a] = Object(r.useState)({ value: q(e) ? void 0 : e });
      return (
        Object(r.useLayoutEffect)(() => {
          if ("function" == typeof e)
            return e(t).observe((e) => {
              a({ value: e });
            }).unsubscribe;
        }, [t, e]),
        "function" == typeof e ? n.value : e
      );
    }
    const kt = Nt,
      Pt = kt,
      Rt = te("core.input", { acceptInputFromAllControllers: false, gameControllerId: "0", swapABButtons: false, swapXYButtons: false }),
      Lt = te("core.animation", { screenAnimationEnabled: !0 }),
     // vanillaDotToast = Pt(te("vanilla.toast", {})),
  //    vanillaDotLocalWorlds = kt(te("vanilla.localWorlds", {})),
      At = ne([te("core.locale")], (e) => ({
        set locale(t) {
          e && (e.locale = t);
        },
        get locale() {
          return e.locale;
        },
        translate: e.translate ? e.translate.bind(e) : Mt,
        translateWithParameters: e.translateWithParameters ? e.translateWithParameters.bind(e) : Ft,
        formatDate: e.formatDate ? e.formatDate.bind(e) : Dt,
      })),
      Mt = (e) => engine.translate(e),
      Ft = (e) => (console.error("Update Bedrock to get support for translations with parameters."), engine.translate(e)),
      Dt = (e) => (console.error("Update Bedrock to get support for formatDate."), `${e}`);
    let jt;
  //  console.everything.push({type: "log", value: vanillaDotToast});
    //console.everything.push({type: "log", value: vanillaDotLocalWorlds});
    //console.everything.push({type: "log", value: JSON.stringifyvanillaDotToast});
    !(function (e) {
      (e[(e.HORIZONTAL = 0)] = "HORIZONTAL"), (e[(e.VERTICAL = 1)] = "VERTICAL");
    })(jt || (jt = {}));
    const Ut = te("core.splitScreen", { numActivePlayers: 1, splitScreenDirection: jt.HORIZONTAL, splitScreenPosition: 0 });
    function Bt({ focusedId: e, onFocusedIdChange: t, children: n, keyboardGamepadMap: r }) {
      Pt(At);
      const o = Pt(Lt),
        i = Pt(Rt),
        l = Pt(Ut),
        c = _e(),
        s = Te();
      if (!i || !o || !l) return null;
      const u = !o.screenAnimationEnabled || l.numActivePlayers > 1;
      return a.a.createElement(
        xt,
        {
          onFocusedIdChange: t,
          focusedId: s || c ? e : -1,
          disabledNavigation: !(s || c),
          acceptInputFromAllControllers: i.acceptInputFromAllControllers,
          gameControllerId: i.gameControllerId,
          swapABButtons: i.swapABButtons,
          swapXYButtons: i.swapXYButtons,
          disabledTransition: u,
          isRtl: false,
          keyboardGamepadMap: r,
        },
        n
      );
    }
    function Ht({ children: e, enableFocusPersistency: t, keyboardGamepadMap: n }) {
      const [o, i] = Object(r.useState)(null),
        [l, c] = Object(r.useState)();
      Object(r.useLayoutEffect)(() => {
        ce(t ? c : Gt, i);
      }, [t]);
      const s = Object(r.useCallback)(
        (e) => {
          if (!t) return c(e);
          o && o.replace(le(o.location.pathname, e));
        },
        [o, t]
      );
      return o ? a.a.createElement(Bt, { onFocusedIdChange: s, focusedId: l, keyboardGamepadMap: n }, a.a.createElement(zt, { history: o, children: e })) : null;
    }
    const zt = a.a.memo((e) => a.a.createElement(k, e));
    function Gt() {}
    function Yt(e, t) {
      void 0 === t && (t = {});
      for (
        var n = (function (e) {
            for (var t = [], n = 0; n < e.length; ) {
              var r = e[n];
              if ("*" !== r && "+" !== r && "?" !== r)
                if ("\\" !== r)
                  if ("{" !== r)
                    if ("}" !== r)
                      if (":" !== r)
                        if ("(" !== r) t.push({ type: "CHAR", index: n, value: e[n++] });
                        else {
                          var a = 1,
                            o = "";
                          if ("?" === e[(l = n + 1)]) throw new TypeError('Pattern cannot start with "?" at ' + l);
                          for (; l < e.length; )
                            if ("\\" !== e[l]) {
                              if (")" === e[l]) {
                                if (0 === --a) {
                                  l++;
                                  break;
                                }
                              } else if ("(" === e[l] && (a++, "?" !== e[l + 1])) throw new TypeError("Capturing groups are not allowed at " + l);
                              o += e[l++];
                            } else o += e[l++] + e[l++];
                          if (a) throw new TypeError("Unbalanced pattern at " + n);
                          if (!o) throw new TypeError("Missing pattern at " + n);
                          t.push({ type: "PATTERN", index: n, value: o }), (n = l);
                        }
                      else {
                        for (var i = "", l = n + 1; l < e.length; ) {
                          var c = e.charCodeAt(l);
                          if (!((c >= 48 && c <= 57) || (c >= 65 && c <= 90) || (c >= 97 && c <= 122) || 95 === c)) break;
                          i += e[l++];
                        }
                        if (!i) throw new TypeError("Missing parameter name at " + n);
                        t.push({ type: "NAME", index: n, value: i }), (n = l);
                      }
                    else t.push({ type: "CLOSE", index: n, value: e[n++] });
                  else t.push({ type: "OPEN", index: n, value: e[n++] });
                else t.push({ type: "ESCAPED_CHAR", index: n++, value: e[n++] });
              else t.push({ type: "MODIFIER", index: n, value: e[n++] });
            }
            return t.push({ type: "END", index: n, value: "" }), t;
          })(e),
          r = t.prefixes,
          a = void 0 === r ? "./" : r,
          o = "[^" + Wt(t.delimiter || "/#?") + "]+?",
          i = [],
          l = 0,
          c = 0,
          s = "",
          u = function (e) {
            if (c < n.length && n[c].type === e) return n[c++].value;
          },
          d = function (e) {
            var t = u(e);
            if (void 0 !== t) return t;
            var r = n[c],
              a = r.type,
              o = r.index;
            throw new TypeError("Unexpected " + a + " at " + o + ", expected " + e);
          },
          f = function () {
            for (var e, t = ""; (e = u("CHAR") || u("ESCAPED_CHAR")); ) t += e;
            return t;
          };
        c < n.length;

      ) {
        var p = u("CHAR"),
          m = u("NAME"),
          g = u("PATTERN");
        if (m || g) {
          var h = p || "";
          -1 === a.indexOf(h) && ((s += h), (h = "")),
            s && (i.push(s), (s = "")),
            i.push({ name: m || l++, prefix: h, suffix: "", pattern: g || o, modifier: u("MODIFIER") || "" });
        } else {
          var E = p || u("ESCAPED_CHAR");
          if (E) s += E;
          else if ((s && (i.push(s), (s = "")), u("OPEN"))) {
            h = f();
            var v = u("NAME") || "",
              b = u("PATTERN") || "",
              y = f();
            d("CLOSE"), i.push({ name: v || (b ? l++ : ""), pattern: v && !b ? o : b, prefix: h, suffix: y, modifier: u("MODIFIER") || "" });
          } else d("END");
        }
      }
      return i;
    }
    function Kt(e, t) {
      return (function (e, t) {
        void 0 === t && (t = {});
        var n = Vt(t),
          r = t.encode,
          a =
            void 0 === r
              ? function (e) {
                  return e;
                }
              : r,
          o = t.validate,
          i = void 0 === o || o,
          l = e.map(function (e) {
            if ("object" == typeof e) return new RegExp("^(?:" + e.pattern + ")$", n);
          });
        return function (t) {
          for (var n = "", r = 0; r < e.length; r++) {
            var o = e[r];
            if ("string" != typeof o) {
              var c = t ? t[o.name] : void 0,
                s = "?" === o.modifier || "*" === o.modifier,
                u = "*" === o.modifier || "+" === o.modifier;
              if (Array.isArray(c)) {
                if (!u) throw new TypeError('Expected "' + o.name + '" to not repeat, but got an array');
                if (0 === c.length) {
                  if (s) continue;
                  throw new TypeError('Expected "' + o.name + '" to not be empty');
                }
                for (var d = 0; d < c.length; d++) {
                  var f = a(c[d], o);
                  if (i && !l[r].test(f)) throw new TypeError('Expected all "' + o.name + '" to match "' + o.pattern + '", but got "' + f + '"');
                  n += o.prefix + f + o.suffix;
                }
              } else if ("string" != typeof c && "number" != typeof c) {
                if (!s) {
                  var p = u ? "an array" : "a string";
                  throw new TypeError('Expected "' + o.name + '" to be ' + p);
                }
              } else {
                f = a(String(c), o);
                if (i && !l[r].test(f)) throw new TypeError('Expected "' + o.name + '" to match "' + o.pattern + '", but got "' + f + '"');
                n += o.prefix + f + o.suffix;
              }
            } else n += o;
          }
          return n;
        };
      })(Yt(e, t), t);
    }
    function Wt(e) {
      return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }
    function Vt(e) {
      return e && e.sensitive ? "" : "i";
    }
    function $t({ history: e, to: t, from: n }) {
      const a = H(n);
      return (
        Object(r.useEffect)(() => {
          const n = a ? Kt(t)(a.params) : t;
          e.replace(n);
        }, [e, t, a]),
        null
      );
    }
    function routeAlias({ from: e, to: t }) {
      return a.a.createElement(A, { exact: !0, path: e, render: ({ history: n }) => a.a.createElement($t, { history: n, to: t, from: e }) });
    }
    const qt = Object(r.createContext)({ push: () => {}, replace: () => {}, replaceKeepingFocus: () => {}, replaceWithPreviousFocus: () => {}, goBack: () => {} }),
      Qt = (() => {
        const e = new Map(),
          t = (e) => e.replace(/\/$/, "");
        return {
          set: (n, r) => {
            e.set(t(n), r);
          },
          get: (n) => e.get(t(n)),
        };
      })(),
      Zt = ({ children: e, disabled: t }) => {
        const n = B(N).history,
          o = Object(r.useRef)(t);
        o.current = t;
        const i = Object(r.useMemo)(
          () => ({
            goBack: () => {
              o.current || n.goBack();
            },
            push: (e) => {
              o.current || n.push(e);
            },
            replace: (e) => {
              o.current || n.replace(e);
            },
            replaceKeepingFocus: (e) => {
              if (o.current) return;
              const t = ie(n.location);
              Qt.set(n.location.pathname, t), n.replace(le(e, t));
            },
            replaceWithPreviousFocus: (e) => {
              if (o.current) return;
              const t = ie(n.location);
              Qt.set(n.location.pathname, t);
              const r = Qt.get(e);
              n.replace(le(e, r));
            },
          }),
          [n]
        );
        return a.a.createElement(qt.Provider, { value: i }, e);
      },
      getRouter = () => Object(r.useContext)(qt),
      en = Object(r.createContext)({});
    function tn({ match: e, children: t }) {
      const n = Object(r.useRef)({});
      return e && (n.current = e.params), a.a.createElement(en.Provider, { value: n.current }, t);
    }
    const nn = () => Object(r.useContext)(en);
    var rn = n(26),
      an = n(30);
    function on(e, t, n) {
      const [o] = Object(r.useState)(() => Object(an.a)()),
        i = Object(r.useContext)(Ve.a),
        l = Object(r.useContext)(rn.b),
        c = [...l, o],
        s = {
          type: t,
          id: o,
          path: l,
          bounded: e.bounded,
          index: e.index,
          defaultFocusedChildAlias: e.defaultFocusedChildAlias,
          defaultFocusedChildBehavior: e.defaultFocusedChildBehavior,
          disabled: e.disabled,
          ref: n,
          scrollWithAnalog: e.scrollWithAnalog,
          scrollIntoView: e.scrollIntoView,
          scrollIntoViewAlign: e.scrollIntoViewAlign,
          scrollIntoViewOffset: e.scrollIntoViewOffset,
          scrollIntoViewSpeedFactor: e.scrollIntoViewSpeedFactor,
          scrollIntoViewCalculateValue: e.scrollIntoViewCalculateValue,
        };
      return (
        Object(r.useEffect)(() => () => i.removeNode(o), [i, o]), i.addOrUpdateNode(s), Object(r.useMemo)(() => ({ children: e }) => a.a.createElement(rn.a, { value: c }, e), c)
      );
    }
    function ln(e, t) {
      return on(e, "row", t);
    }
    function cn(e) {
      const t = ln(
        {
          bounded: e.bounded,
          disabled: e.disabled,
          index: e.gamepadIndex,
          defaultFocusedChildAlias: e.defaultFocusedChildAlias,
          defaultFocusedChildBehavior: e.defaultFocusedChildBehavior,
          scrollWithAnalog: e.scrollWithAnalog,
          scrollIntoView: e.scrollIntoView,
          scrollIntoViewAlign: e.scrollIntoViewAlign,
          scrollIntoViewCalculateValue: e.scrollIntoViewCalculateValue,
          scrollIntoViewOffset: e.scrollIntoViewOffset,
          scrollIntoViewSpeedFactor: e.scrollIntoViewSpeedFactor,
        },
        e.scrollRef
      );
      return a.a.createElement(t, null, e.children);
    }
    var sn = n(59),
      un = n.n(sn),
      dn = n(1),
      fn = n.n(dn);
    function pn({ visible: e, unmountOnExit: t, contentComponent: n, renderTracker: o }) {
      const i = Object(r.useMemo)(() => a.a.memo(n), [n]),
        l = Object(r.useRef)(e);
      return (
        (l.current = t ? e : l.current || e),
        l.current ? a.a.createElement("div", { className: fn()(un.a.base, { [un.a.entered]: e, [un.a.exited]: !e }) }, o && o(e), a.a.createElement(i, null)) : null
      );
    }
    const mn = Object(r.createContext)(!0),
      gn = mn.Provider,
      hn = Object(r.createContext)(false);
    function En({ children: e, active: t }) {
      return a.a.createElement(hn.Provider, { value: t }, e);
    }
    const vn = () => Object(r.useContext)(hn);
    var bn = Object(r.createContext)({ block: () => {}, unblock: () => {}, contentfulPaint: () => {}, meaningfulPaint: () => {} });
    function yn() {
      return Object(r.useContext)(bn);
    }
    let Tn = 0;
    function _n({ type: e, renderingCompleted: t }) {
      const n = yn(),
        a = vn(),
        o = Object(r.useMemo)(() => Tn++, []);
      return (
        Object(r.useEffect)(() => {
          a ? (t ? n.unblock(o, e) : n.block(o, e)) : n.unblock(o, e);
        }, [o, t, n, e, a]),
        null
      );
    }
    function makePageAtRoute({ component: e, transitionComponent: t, route: n, keepMounted: r }) {
      return a.a.createElement(A, {
        exact: !0,
        path: n,
        children: (n) =>
          a.a.createElement(
            tn,
            { match: n.match },
            a.a.createElement(
              En,
              { active: !!n.match },
              a.a.createElement(wn, { keepMounted: r, component: e, routeTransition: t, action: n.history.action, currentIn: !!n.match })
            )
          ),
      });
    }
    const wn = a.a.memo(({ component: e, routeTransition: t, keepMounted: n, action: o, currentIn: i }) => {
      const l = Object(r.useRef)(null),
        c = Object(r.useRef)(null),
        s = Object(r.useContext)(mn);
      Object(r.useEffect)(() => {
        c.current = i;
      }, [i]),
        (l.current = l.current || i),
        "POP" === o && c.current && (l.current = false);
      const u = "POP" === o,
        d = !i,
        f = e,
        p = s && void 0 !== t ? t : pn;
      return a.a.createElement(
        cn,
        { gamepadIndex: 0, disabled: d },
        a.a.createElement(
          Zt,
          { disabled: d || !i },
          a.a.createElement(p, {
            visible: i,
            unmountOnExit: !l.current && !n,
            contentComponent: f,
            renderTracker: (e) => a.a.createElement(_n, { type: "contentful", renderingCompleted: e }),
            inverse: u,
          })
        )
      );
    });
    function Sn(e, t) {
      if (e) for (let n = 0; n < e.length; n++) if (e[n] === t) return !0;
      return false;
    }
    function Cn(e, t, n, a) {
      const o = (function (e, t) {
          return 0 === e.length
            ? de.MOUSE_INPUT_METHOD
            : !Sn(e, de.TOUCH_INPUT_METHOD) || (t !== fe.IOS && t !== fe.GOOGLE && t !== fe.AMAZON_HANDHELD)
            ? Sn(e, de.GAMEPAD_INPUT_METHOD)
              ? de.GAMEPAD_INPUT_METHOD
              : Sn(e, de.MOUSE_INPUT_METHOD)
              ? de.MOUSE_INPUT_METHOD
              : e[0]
            : de.TOUCH_INPUT_METHOD;
        })(e, t),
        [i, l] = Object(r.useState)(o);
      return (
        (function (e, t, n) {
          const a = Object(r.useRef)(null);
          Object(r.useEffect)(() => {
            t !== de.MOUSE_INPUT_METHOD && (a.current = null);
          }, [t, a]),
            Object(r.useEffect)(() => {
              let r = 0;
              if (t === de.MOUSE_INPUT_METHOD || -1 === e.indexOf(de.MOUSE_INPUT_METHOD)) return;
              const o = (e) => {
                  if (Date.now() - r < 300) return;
                  const t = [e.clientX, e.clientY];
                  if (!a.current) return void (a.current = t);
                  const o = Math.abs(t[0] - a.current[0]),
                    i = Math.abs(t[1] - a.current[1]);
                  Math.sqrt(Math.pow(o, 2) + Math.pow(i, 2)) > 10 && n(de.MOUSE_INPUT_METHOD);
                },
                i = () => {
                  Date.now() - r < 300 || n(de.MOUSE_INPUT_METHOD);
                },
                l = () => {
                  n(de.MOUSE_INPUT_METHOD);
                },
                c = () => {
                  r = Date.now();
                };
              return (
                window.addEventListener("touchend", c),
                window.addEventListener("mousemove", o),
                window.addEventListener("mousedown", i),
                window.addEventListener("wheel", l),
                () => {
                  window.removeEventListener("touchend", c),
                    window.removeEventListener("mousedown", i),
                    window.removeEventListener("mousemove", o),
                    window.removeEventListener("wheel", l);
                }
              );
            }, [e, n, t]);
        })(e, i, l),
        (function (e, t, n) {
          Object(r.useEffect)(() => {
            if (t === de.TOUCH_INPUT_METHOD || -1 === e.indexOf(de.TOUCH_INPUT_METHOD)) return;
            const r = () => n(de.TOUCH_INPUT_METHOD);
            return window.addEventListener("touchstart", r), () => window.removeEventListener("touchstart", r);
          }, [e, n, t]);
        })(e, i, l),
        (function (e, t, n, a, o) {
          Object(r.useEffect)(() => {
            if (-1 === e.indexOf(de.GAMEPAD_INPUT_METHOD)) return;
            if (t === de.GAMEPAD_INPUT_METHOD) return;
            let r;
            const i = () => {
              (navigator.getGamepads ? Array.from(navigator.getGamepads()) : []).find((e) => {
                if (!e || (!a && e.id !== o)) return;
                return !!e.axes.find((e) => e > 0.16) || !!e.buttons.find((e) => e.pressed);
              }) && n(de.GAMEPAD_INPUT_METHOD),
                (r = window.requestAnimationFrame(i));
            };
            return i(), () => window.cancelAnimationFrame(r);
          }, [e, n, t, a, o]);
        })(e, i, l, n, a),
        Object(r.useEffect)(() => {
          1 === e.length && l(e[0]);
        }, [e, l]),
        i
      );
    }
    const On = {
      [fe.IOS]: se.HANDHELD_SCREEN_TYPE,
      [fe.GOOGLE]: se.HANDHELD_SCREEN_TYPE,
      [fe.AMAZON_HANDHELD]: se.HANDHELD_SCREEN_TYPE,
      [fe.UWP]: se.DESKTOP_SCREEN_TYPE,
      [fe.XBOX]: se.TV_SCREEN_TYPE,
      [fe.NX_HANDHELD]: se.HANDHELD_SCREEN_TYPE,
      [fe.PS4]: se.TV_SCREEN_TYPE,
      [fe.GEARVR]: se.HANDHELD_SCREEN_TYPE,
      [fe.WIN32]: se.DESKTOP_SCREEN_TYPE,
      [fe.MACOS]: se.DESKTOP_SCREEN_TYPE,
      [fe.AMAZON_TV]: se.TV_SCREEN_TYPE,
      [fe.NX_TV]: se.TV_SCREEN_TYPE,
    };
    function In(e, t) {
      const [n, a] = Object(r.useState)(false),
        o = e && n,
        i = t && n;
      var l, c;
      return (
        (l = (t || e) && !n),
        (c = () => a(!0)),
        Object(r.useEffect)(() => {
          if (l)
            return (
              window.addEventListener("keyup", c),
              () => {
                window.removeEventListener("keyup", c);
              }
            );
        }, [l, c]),
        (function (e, t) {
          const n = Object(r.useRef)(null);
          Object(r.useEffect)(() => {
            e || (n.current = null);
            const r = (e) => {
                const r = [e.clientX, e.clientY];
                if (!n.current) return void (n.current = r);
                const a = Math.abs(r[0] - n.current[0]),
                  o = Math.abs(r[1] - n.current[1]);
                Math.sqrt(Math.pow(a, 2) + Math.pow(o, 2)) > 10 && ((n.current = null), t());
              },
              a = () => {
                t();
              },
              o = () => {
                t();
              };
            if (e)
              return (
                window.addEventListener("mousemove", r),
                window.addEventListener("mousedown", a),
                window.addEventListener("wheel", o),
                () => {
                  window.removeEventListener("mousedown", a), window.removeEventListener("mousemove", r), window.removeEventListener("wheel", o);
                }
              );
          }, [e, t]);
        })(o, () => a(false)),
        (function (e, t) {
          Object(r.useEffect)(() => {
            if (e) return window.addEventListener("touchstart", t), () => window.removeEventListener("touchstart", t);
          }, [t, e]);
        })(i, () => a(false)),
        n
      );
    }
    function Nn({ primaryInputMethod: e, platform: t, children: n }) {
      const o = e === de.MOUSE_INPUT_METHOD,
        i = e === de.TOUCH_INPUT_METHOD,
        l = e === de.GAMEPAD_INPUT_METHOD,
        c = In(o, i);
      !(function (e) {
        Object(r.useEffect)(() => {
          e === de.MOUSE_INPUT_METHOD ? (document.body.style.cursor = "auto") : (document.body.style.cursor = "none");
        }, [e]);
      })(e);
      const s = (function (e) {
        return On[e];
      })(t);
      return a.a.createElement(
        me.Provider,
        { value: o },
        a.a.createElement(
          ge.Provider,
          { value: i },
          a.a.createElement(
            he.Provider,
            { value: l },
            a.a.createElement(ve.Provider, { value: c }, a.a.createElement(Ee.Provider, { value: t }, a.a.createElement(pe.Provider, { value: s }, n)))
          )
        )
      );
    }
    function kn({ children: e, availableInputMethods: t, platform: n, acceptInputFromAllControllers: r, gameControllerId: o }) {
      const i = Cn(t, n, r, o);
      return a.a.createElement(Nn, { primaryInputMethod: i, platform: n }, e);
    }
    const Pn = te("core.deviceInformation", {
      inputMethods: [de.GAMEPAD_INPUT_METHOD],
      platform: fe.XBOX,
      isLowMemoryDevice: false,
      pixelsPerMillimeter: 5,
      guiScaleModifier: 0,
      guiScaleBase: 4,
    });
    function Rn({ children: e }) {
      const t = Pt(Pn),
        n = Pt(Rt);
      return t && n
        ? void 0 === n.currentInputType
          ? a.a.createElement(
              kn,
              {
                platform: t.platform,
                availableInputMethods: t.inputMethods,
                acceptInputFromAllControllers: !!n && n.acceptInputFromAllControllers,
                gameControllerId: n ? n.gameControllerId : "0",
              },
              e
            )
          : a.a.createElement(Nn, { platform: t.platform, primaryInputMethod: n.currentInputType }, e)
        : null;
    }
    function Ln({ children: e, errorComponent: t }) {
      const [n, o] = Object(r.useState)(null),
        i = Object(r.useCallback)((e) => {
          o(e), engine.trigger("core:exception");
        }, []),
        l = Object(r.useCallback)(() => {
          o(null);
        }, []);
      return a.a.createElement(An, { onError: i }, n ? a.a.createElement(Mn, { dissmissTimeout: void 0, errorMessage: void 0, errorComponent: t, onDismiss: l }) : e);
    }
    class An extends a.a.Component {
      static getDerivedStateFromError() {}
      componentDidCatch(e) {
        this.props.onError(e);
      }
      render() {
        return this.props.children;
      }
    }
    function Mn({ errorComponent: e, errorMessage: t, onDismiss: n, dissmissTimeout: o }) {
      const i = Pt(re),
        l = Object(r.useCallback)(() => {
          i && i.history.goBack(), requestAnimationFrame(n);
        }, [i, n]);
      return (
        Object(r.useEffect)(() => {
          if (o) {
            const e = setTimeout(l, o);
            return () => clearTimeout(e);
          }
        }, [i, l, o]),
        a.a.createElement(e, { errorMessage: t, onDismiss: l })
      );
    }
    function Fn({ children: e }) {
      return a.a.createElement(Ct, { remoteFacetDriver: $ }, e);
    }
    const Dn = Object(r.createContext)([]),
      jn = Dn.Provider,
      Un = te("core.featureFlags");
    function Bn({ children: e }) {
      const t = Pt(Un);
      return t ? a.a.createElement(jn, { value: t.flags }, e) : null;
    }
    const Hn = (e) => e,
      zn = Object(r.createContext)({ translationPrefix: "hbui", translate: Hn, translateWithParameters: Hn, formatDate: (e) => `${e}` });
    function Gn({ translationPrefix: e, translate: t, translateWithParameters: n, formatDate: r, children: o }) {
      return a.a.createElement(zn.Provider, { value: { translationPrefix: e, translate: t, translateWithParameters: n, formatDate: r } }, o);
    }
    function Yn({ children: e }) {
      const t = Pt(At);
      return t
        ? a.a.createElement(
            Gn,
            { translationPrefix: "hbui", locale: t.locale, translate: t.translate, translateWithParameters: t.translateWithParameters, formatDate: t.formatDate },
            e
          )
        : null;
    }
    const Kn = Object(r.createContext)({ narrationTree: {}, readById: () => {}, readText: () => {}, clear: () => {} }),
      Wn = Kn.Provider,
      Vn = Object(r.createContext)(!0),
      $n = Vn.Provider,
      Xn = (e, t) => {
        if ("" === t) return [];
        const n = e[t];
        return [t, ...Xn(e, n.parentNarrationId)];
      },
      qn = (e, t) => {
        if (0 === t.length) return e;
        return e[e.length - 1] === t[t.length - 1] ? qn(e.slice(0, -1), t.slice(0, -1)) : e;
      },
      Qn = ({ children: e, disabled: t, narrationTree: n, driver: o }) => {
        const i = Object(r.useRef)({ root: { text: "", parentNarrationId: "", shouldSkipParent: [] } }),
          l = Object(r.useRef)(""),
          c = n || i.current,
          s = Object(r.useCallback)(
            (e, t = { outOfGame: !0, inGame: !0 }, n = !0, r = false, a = false) => {
              const i = Xn(c, e),
                s = Xn(c, l.current),
                u = qn(i, s),
                d = ((e, t) => {
                  const n = e[t[0]].shouldSkipParent;
                  return t
                    .filter((e, t) => -1 === n.indexOf(t - 1))
                    .reverse()
                    .map((t) => e[t].text.trim())
                    .filter((e) => "" !== e)
                    .join(" . ");
                })(c, 0 === u.length ? [e] : u);
              o.read(d, t, n, r, a), (l.current = e);
            },
            [c, o]
          ),
          u = Object(r.useCallback)(
            (e, t = { outOfGame: !0, inGame: !0 }, n = !0, r = false, a = false) => {
              o.read(e, t, n, r, a);
            },
            [o]
          ),
          d = Object(r.useCallback)(() => {
            o.clear();
          }, [o]);
        return a.a.createElement(Wn, { value: { narrationTree: c, readById: s, readText: u, clear: d } }, a.a.createElement($n, { value: !t }, e));
      };
    let Zn, Jn, er, tr;
    !(function (e) {
      (e[(e.NONE = 0)] = "NONE"),
        (e[(e.UI_FRONT_END = 1)] = "UI_FRONT_END"),
        (e[(e.UI_IN_GAME = 2)] = "UI_IN_GAME"),
        (e[(e.ALL_UI = e.UI_FRONT_END | e.UI_IN_GAME)] = "ALL_UI"),
        (e[(e.IN_GAME_CHAT = 4)] = "IN_GAME_CHAT"),
        (e[(e.IN_GAME_ITEMS = 8)] = "IN_GAME_ITEMS"),
        (e[(e.IN_GAME_NAME = 16)] = "IN_GAME_NAME"),
        (e[(e.ALL = e.UI_FRONT_END | e.UI_IN_GAME | e.IN_GAME_CHAT | e.IN_GAME_ITEMS | e.IN_GAME_NAME)] = "ALL");
    })(Zn || (Zn = {})),
      (function (e) {
        (e[(e.NOT_INTERRUPTIBLE = 0)] = "NOT_INTERRUPTIBLE"), (e[(e.INTERRUPTIBLE = 1)] = "INTERRUPTIBLE");
      })(Jn || (Jn = {})),
      (function (e) {
        (e[(e.NOT_REQUIRED = 0)] = "NOT_REQUIRED"), (e[(e.REQUIRED = 1)] = "REQUIRED");
      })(er || (er = {})),
      (function (e) {
        (e[(e.DO_NOT_PLAY_IN_BACKGROUND = 0)] = "DO_NOT_PLAY_IN_BACKGROUND"), (e[(e.PLAY_IN_BACKGROUND = 1)] = "PLAY_IN_BACKGROUND");
      })(tr || (tr = {}));
    const nr = te("core.screenReader");
    function rr({ children: e }) {
      const t = Pt(nr);
      if (!t) return null;
      const n = (function (e) {
        return {
          read: (t, n, r, a, o) => {
            e.isUITextToSpeechEnabled &&
              e.read(
                t,
                (function (e) {
                  let t = 0;
                  e.outOfGame && (t += Zn.UI_FRONT_END);
                  e.inGame && (t += Zn.UI_IN_GAME);
                  e.inGameChat && (t += Zn.IN_GAME_CHAT);
                  e.inGameItem && (t += Zn.IN_GAME_ITEMS);
                  e.inGameName && (t += Zn.IN_GAME_NAME);
                  return t;
                })(n),
                r ? Jn.INTERRUPTIBLE : Jn.NOT_INTERRUPTIBLE,
                a ? er.REQUIRED : er.NOT_REQUIRED,
                o ? tr.PLAY_IN_BACKGROUND : tr.DO_NOT_PLAY_IN_BACKGROUND
              );
          },
          clear: () => e.clear(),
        };
      })(t);
      return a.a.createElement(Qn, { driver: n, disabled: !t.isUITextToSpeechEnabled }, e);
    }
    const ar = Object(r.createContext)(() => () => {}),
      { Provider: or, Consumer: ir } = ar,
      lr = () => Object(r.useContext)(ar);
    function cr({ children: e, driver: t }) {
      return a.a.createElement(or, { value: t.play }, e);
    }
    const sr = te("core.sound");
    function ur({ children: e }) {
      const t = Pt(sr),
        n = Object(r.useMemo)(
          () => ({
            play(e, n) {
              let r, a;
              const o = () => {
                t ? (r = t.play(e)) : console.log("Bedrock Sound driver not yet initialized while playing", e);
              };
              return (
                n > 0 ? (a = setTimeout(o, n)) : o(),
                () => {
                  a && clearTimeout(a), t ? t.isPlaying(r) && t.fadeOut(r, 0) : console.log("Bedrock Sound driver not yet initialized while stopping", e);
                }
              );
            },
          }),
          [t]
        );
      return a.a.createElement(cr, { driver: n }, e);
    }
    const dr = Object(r.createContext)({ top: 0, bottom: 0, left: 0, right: 0 }),
      fr = () => Object(r.useContext)(dr);
    let pr;
    !(function (e) {
      (e[(e.HORIZONTAL = 0)] = "HORIZONTAL"), (e[(e.VERTICAL = 1)] = "VERTICAL");
    })(pr || (pr = {}));
    const mr = Object(r.createContext)({ numActivePlayers: 1, direction: pr.HORIZONTAL, position: 0 });
    function gr({ children: e, numActivePlayers: t, direction: n = pr.HORIZONTAL, position: r }) {
      return a.a.createElement(mr.Provider, { value: { numActivePlayers: t, direction: n, position: r } }, e);
    }
    function hr(e, t, n) {
      return Math.min(Math.max(e, t), n);
    }
    var Er;
    function vr(e, t, n) {
      switch (e) {
        case 2:
          return 0 === t || (1 === t && n === Er.VERTICAL);
        case 3:
        case 4:
          return 0 === t || 1 === t;
        default:
          return !0;
      }
    }
    function br(e, t, n) {
      switch (e) {
        case 2:
          return 1 === t || (0 === t && n === Er.VERTICAL);
        case 3:
          return 2 === t;
        case 4:
          return 2 === t || 3 === t;
        default:
          return !0;
      }
    }
    function yr(e, t, n) {
      switch (e) {
        case 2:
          return 0 === t || (1 === t && n === Er.HORIZONTAL);
        case 3:
        case 4:
          return 0 === t || 2 === t;
        default:
          return !0;
      }
    }
    function Tr(e, t, n) {
      switch (e) {
        case 2:
          return 1 === t || (0 === t && n === Er.HORIZONTAL);
        case 3:
          return 1 === t;
        case 4:
          return 1 === t || 3 === t;
        default:
          return !0;
      }
    }
    function _r(e, t, n, a) {
      const o = Object(r.useContext)(mr),
        i = Object(r.useCallback)(
          () =>
            (function (e, t, n, r) {
              const a = hr(e, 0.9, 1),
                o = hr(t, 0.9, 1),
                i = hr(n, -0.1, 0.1),
                l = hr(r, -0.1, 0.1),
                c = window.innerWidth,
                s = window.innerHeight;
              return {
                top: Math.round(((1 - o + l) / 2) * s),
                bottom: Math.round(((1 - o - l) / 2) * s),
                left: Math.round(((1 - a + i) / 2) * c),
                right: Math.round(((1 - a - i) / 2) * c),
              };
            })(e, t, n, a),
          [e, t, n, a]
        ),
        l = Object(r.useCallback)(
          () =>
            (function ({ top: e, bottom: t, left: n, right: r }, { numActivePlayers: a, direction: o, position: i }) {
              return { top: vr(a, i, o) ? e : 0, bottom: br(a, i, o) ? t : 0, left: yr(a, i, o) ? n : 0, right: Tr(a, i, o) ? r : 0 };
            })(i(), o),
          [i, o]
        ),
        [c, s] = Object(r.useState)(l);
      return (
        Object(r.useEffect)(() => {
          s(l);
          const e = () => s(l);
          return (
            window.addEventListener("resize", e),
            () => {
              window.removeEventListener("resize", e);
            }
          );
        }, [l]),
        c
      );
    }
    function xr({ children: e, safeAreaX: t, safeAreaY: n, screenPositionX: r, screenPositionY: o }) {
      const i = _r(t, n, r, o);
      return a.a.createElement(dr.Provider, { value: i }, e);
    }
    !(function (e) {
      (e[(e.HORIZONTAL = 0)] = "HORIZONTAL"), (e[(e.VERTICAL = 1)] = "VERTICAL");
    })(Er || (Er = {}));
    const wr = te("core.safeZone", { safeAreaX: 1, safeAreaY: 1, screenPositionX: 0, screenPositionY: 0 });
    function Sr({ children: e }) {
      const t = Pt(wr);
      return t ? a.a.createElement(xr, { safeAreaX: t.safeAreaX, safeAreaY: t.safeAreaY, screenPositionX: t.screenPositionX, screenPositionY: t.screenPositionY }, e) : null;
    }
    function Cr({ children: e }) {
      const t = Pt(Ut);
      return t ? a.a.createElement(gr, { numActivePlayers: t.numActivePlayers, direction: t.splitScreenDirection, position: t.splitScreenPosition }, e) : null;
    }
    n(393);
    function Or({ children: e }) {
      return a.a.createElement(a.a.Fragment, null, e);
    }
    function Ir(e, t) {
      return e / (t / 6.417322835);
    }
    const Nr = Object(r.createContext)(10),
      kr = Nr.Provider,
      Pr = () => Object(r.useContext)(Nr),
      Rr = Object(r.createContext)(6.417322835),
      Lr = Rr.Provider,
      Ar = () => Object(r.useContext)(Rr);
    function Mr({ children: e, guiScale: t, pixelsPerMillimeter: n, onGuiScaleApplied: o = Fr, screenAnimationEnabled: i, isRtl: l = false, locale: c }) {
      const s = 2.5 * t;
      return (
        (function (e) {
          Object(r.useEffect)(() => {}, [e]);
        })(l),
        (function (e) {
          Object(r.useEffect)(() => {
            const t = document.body;
            switch (e) {
              case "ja_JP":
                t.style.setProperty("--fallbackFont1", "Noto Sans"),
                  t.style.setProperty("--fallbackFont2", "Noto Sans JP"),
                  t.style.setProperty("--fallbackFont3", "Noto Sans TC"),
                  t.style.setProperty("--fallbackFont4", "Noto Sans SC"),
                  t.style.setProperty("--fallbackFont5", "Noto Sans KR");
                break;
              case "zh_TW":
                t.style.setProperty("--fallbackFont1", "Noto Sans"),
                  t.style.setProperty("--fallbackFont2", "Noto Sans SC"),
                  t.style.setProperty("--fallbackFont3", "Noto Sans TC"),
                  t.style.setProperty("--fallbackFont4", "Noto Sans JP"),
                  t.style.setProperty("--fallbackFont5", "Noto Sans KR");
                break;
              case "ko_KR":
                t.style.setProperty("--fallbackFont1", "Noto Sans"),
                  t.style.setProperty("--fallbackFont2", "Noto Sans KR"),
                  t.style.setProperty("--fallbackFont3", "Noto Sans TC"),
                  t.style.setProperty("--fallbackFont4", "Noto Sans SC"),
                  t.style.setProperty("--fallbackFont5", "Noto Sans JP");
                break;
              default:
              case "ch_ZN":
                t.style.setProperty("--fallbackFont1", "Noto Sans"),
                  t.style.setProperty("--fallbackFont2", "Noto Sans TC"),
                  t.style.setProperty("--fallbackFont3", "Noto Sans SC"),
                  t.style.setProperty("--fallbackFont4", "Noto Sans JP"),
                  t.style.setProperty("--fallbackFont5", "Noto Sans KR");
            }
          }, [e]);
        })(c),
        Object(r.useEffect)(() => {
          const e = document.getElementsByTagName("html")[0],
            n = document.body;
          (e.style.fontSize = `${s}px`), n.style.setProperty("--baseFontSize", `${s}px`);
          const r = Math.max(Math.round((t / 4) * 2), 1);
          n.style.setProperty("--base2Scale", `${r}px`), n.style.setProperty("--base2ScaleNeg", `-${r}px`);
          const a = Math.max(Math.round(t / 4), 1);
          n.style.setProperty("--base1Scale", `${a}px`), n.style.setProperty("--base1ScaleNeg", `-${a}px`), o();
        }, [s, t, o, c]),
        a.a.createElement(gn, { value: i }, a.a.createElement(Or, null, a.a.createElement(Lr, { value: n }, a.a.createElement(kr, { value: s }, e))))
      );
    }
    const Fr = () => {};
    function Dr(e, t, n, r, a, o) {
      const i = scalingModes[e][t];
      return t === se.HANDHELD_SCREEN_TYPE
        ? (function (e, t, n, r, a, o) {
            const i = r / 6.417322835,
              l = Ir(a, r),
              c = Ir(o, r),
              s = l > 1e3 && c > 700 ? ue.TABLET : ue.PHONE,
              u = t[s],
              d = Math.round(i * u),
              f = Math.round(i * n);
            return d + f;
          })(0, i, n, o, r, a)
        : (function (e, t, n, r, a) {
            const o = r / 1920,
              i = a / 1080,
              l = Math.min(i, o),
              c = Math.round(l * t),
              s = Math.round(l * n);
            return c + s;
          })(0, i, n, r, a);
    }
    const scalingModes = {
      compat: { [se.DESKTOP_SCREEN_TYPE]: 4, [se.TV_SCREEN_TYPE]: 4, [se.HANDHELD_SCREEN_TYPE]: { [ue.PHONE]: 4, [ue.TABLET]: 4 }, [se.VR_SCREEN_TYPE]: 4 },
      legacy: { [se.DESKTOP_SCREEN_TYPE]: 7, [se.TV_SCREEN_TYPE]: 7, [se.HANDHELD_SCREEN_TYPE]: { [ue.PHONE]: 4, [ue.TABLET]: 6 }, [se.VR_SCREEN_TYPE]: 4 },
      default: { [se.DESKTOP_SCREEN_TYPE]: 5, [se.TV_SCREEN_TYPE]: 7, [se.HANDHELD_SCREEN_TYPE]: { [ue.PHONE]: 4, [ue.TABLET]: 4 }, [se.VR_SCREEN_TYPE]: 4 },
    };
    function Ur({ children: e, scalingMode: t }) {
      const n = Pt(Pn),
        r = Pt(Ut),
        o = Pt(Lt),
        i = Pt(At);
      if (!(n && i && r && o)) return null;
      const l = o.screenAnimationEnabled && 1 === r.numActivePlayers;
      return a.a.createElement(Br, { deviceInformationFacet: n, localeFacet: i, scalingMode: t, screenAnimationEnabled: l }, e);
    }
    function Br({ scalingMode: e, children: t, deviceInformationFacet: n, localeFacet: o, screenAnimationEnabled: i }) {
      const l = (function (e, t, n) {
          const { guiScaleModifier: a, pixelsPerMillimeter: o } = n,
            i = Object(r.useCallback)(() => Dr(e, t, a, window.innerWidth, window.innerHeight, o), [e, a, o, t]),
            [l, c] = Object(r.useState)(i);
          return (
            Object(r.useEffect)(() => {
              const e = () => c(i());
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
            }, [i]),
            l
          );
        })(e, Object(r.useContext)(pe), n),
        c = Nt(o),
        s = Object(r.useCallback)(() => {
          engine.trigger("core:gui:resize-hack");
        }, []);
      return c
        ? a.a.createElement(Mr, { guiScale: l, pixelsPerMillimeter: n.pixelsPerMillimeter, onGuiScaleApplied: s, screenAnimationEnabled: i, isRtl: false, locale: c.locale }, t)
        : null;
    }
    const Hr = Object(r.createContext)(null),
      zr = Hr.Provider;
    function Gr(e, t) {
      return engine.on(e, t), () => engine.off(e, t);
    }
    function potentialTriggerKeyboard({ children: e }) {
      Object(r.useEffect)(
        () =>
          Gr("core:keyboard:dismissed", () => {
            const e = document.activeElement;
            if (e)
              if ("TEXTAREA" === e.tagName) {
                e.blur();
              } else if ("INPUT" === e.tagName && "text" === e.type) {
                e.blur();
              }
          }),
        []
      );
      const t = Object(r.useCallback)((e) => Gr("core:keyboard:changed", e), []);
      return a.a.createElement(zr, { value: t }, e);
    }
    let Kr;
    !(function (e) {
      (e.FIRST_MEANINGFUL_PAINT = "core:telemetry:firstMeaningfulPaint"), (e.FIRST_CONTENTFUL_PAINT = "core:telemetry:firstContentfulPaint");
    })(Kr || (Kr = {}));
    const Wr = () => new Map();
    function Vr({ children: e, triggerEvent: t }) {
      const n = Object(r.useMemo)(Wr, []),
        o = Object(r.useMemo)(Wr, []),
        i = Object(r.useRef)(false),
        l = Object(r.useRef)(false),
        c = Object(r.useMemo)(() => {
          const e = () => {
              0 === n.size && 0 === o.size && i.current && (t(Kr.FIRST_MEANINGFUL_PAINT), (i.current = false));
            },
            r = () => {
              0 === n.size && l.current && (t(Kr.FIRST_CONTENTFUL_PAINT), (l.current = false)), e();
            };
          return {
            block: (e, t) => {
              ("contentful" === t ? n : o).set(e, !0);
            },
            unblock: (t, a) => {
              ("contentful" === a ? n : o).delete(t), "contentful" === a ? r() : e();
            },
            meaningfulPaint: () => {
              (i.current = !0), e();
            },
            contentfulPaint: () => {
              (l.current = !0), r();
            },
          };
        }, [t, n, o]);
      return a.a.createElement(bn.Provider, { value: c }, e);
    }
    function $r({ children: e }) {
      const t = Object(r.useMemo)(() => engine.trigger.bind(engine), []);
      return a.a.createElement(Vr, { triggerEvent: t }, e);
    }
    function Xr({ children: e, defaultRoute: t, errorComponent: n, scalingMode: r = "default", enableFocusPersistency: o = false, keyboardGamepadMap: i = pt }) {
      return a.a.createElement(
        Fn,
        null,
        a.a.createElement(
          Yn,
          null,
          a.a.createElement(
            Rn,
            null,
            a.a.createElement(
              Cr,
              null,
              a.a.createElement(
                Sr,
                null,
                a.a.createElement(
                  Bn,
                  null,
                  a.a.createElement(
                    rr,
                    null,
                    a.a.createElement(
                      ur,
                      null,
                      a.a.createElement(
                        Ur,
                        { scalingMode: r },
                        a.a.createElement(
                          Ln,
                          { errorComponent: n },
                          a.a.createElement(
                            potentialTriggerKeyboard,
                            null,
                            a.a.createElement(
                              Ht,
                              { enableFocusPersistency: o, keyboardGamepadMap: i },
                              a.a.createElement($r, null, a.a.createElement(routeAlias, { from: "/", to: t }), a.a.createElement(a.a.Fragment, null, e))
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
    te("core.social"), te("core.user");
    function qr(e, t) {
      return on(e, "column", t);
    }
    function Qr(e, t) {
      Jr(e, t, "global");
    }
    function Zr(e, t) {
      Jr(e, t, "parent");
    }
    function Jr(e, t, n) {
      const a = Object(r.useMemo)(() => Object(an.a)(), []),
        o = Object(r.useContext)(Ve.a),
        i = Object(r.useContext)(rn.b),
        l = { type: "shortcut", scope: n, id: a, path: i, onClick: t, shortcut: e.shortcut, inputLegend: e.inputLegend, disabled: e.disabled || false };
      Object(r.useEffect)(() => (o.runAddNodeEffect(), () => o.removeNode(a)), [o, a]), o.addOrUpdateNode(l);
    }
    function ea({ buttonType: e, inputLegend: t, gamepadAlias: n, disabled: r, onClick: a }) {
      return Zr({ shortcut: e, inputLegend: t, alias: n, disabled: r }, a), null;
    }
    const ta = () => {};
    function na({ autoplay: e, eventName: t, delay: n = 0, disabled: a = false, cancellable: o = false }) {
      const i = lr(),
        l = Object(r.useRef)(ta),
        c = !a && e,
        s = Object(r.useRef)(false);
      return (
        Object(r.useLayoutEffect)(() => {
          if (s.current)
            return (
              c && (l.current = i(t, n)),
              () => {
                o && (l.current(), (l.current = ta));
              }
            );
          s.current = !0;
        }, [c, n, t, i, o]),
        null
      );
    }
    function ra(e) {
      const { translationPrefix: t, translate: n, translateWithParameters: a, formatDate: o } = Object(r.useContext)(zn);
      return Object(r.useMemo)(
        () => ({
          f: { formatDate: o },
          t: (r, o) => {
            const i = `${t}${"" !== t ? "." : ""}${e}${r}`;
            return o ? a(i, o) : n(i);
          },
        }),
        [t, e, n, a, o]
      );
    }
    var aa = n(104),
      oa = n.n(aa);
    function ia({ size: e }) {
      return a.a.createElement("div", { className: oa.a[`size${e}`] });
    }
    ia.displayName = "Spacing";
    var la = n(5),
      ca = n.n(la);
    var text = function ({ children: e, color: t = "white", align: n, verticalAlign: r = "top", variant: o, shadow: i, tag: l }) {
        const c = l || ("paragraphs" === o ? "p" : "div"),
          s = {
            [ca.a.header1]: "header1" === o,
            [ca.a.header2]: "header2" === o,
            [ca.a.header3]: "header3" === o,
            [ca.a.header4A]: "header4A" === o,
            [ca.a.header4B]: "header4B" === o,
            [ca.a.header5A]: "header5A" === o,
            [ca.a.header5B]: "header5B" === o,
            [ca.a.subtitle1]: "subtitle1" === o,
            [ca.a.subtitle2]: "subtitle2" === o,
            [ca.a.body]: "body" === o,
            [ca.a.paragraphs]: "paragraphs" === o,
            [ca.a.captionShort]: "captionShort" === o,
            [ca.a.captionLong]: "captionLong" === o,
            [ca.a.primaryButton]: "primaryButton" === o,
            [ca.a.secondaryButton]: "secondaryButton" === o,
          },
          u = { [ca.a.center]: "center" === n, [ca.a.right]: "right" === n, [ca.a.verticalCenter]: "center" === r },
          d = {
            [ca.a.white]: "white" === t,
            [ca.a.grey]: "grey" === t,
            [ca.a.black]: "black" === t,
            [ca.a.red]: "red" === t,
            [ca.a.green]: "green" === t,
            [ca.a.yellow]: "yellow" === t,
            [ca.a.darkGrey]: "darkGrey" === t,
          },
          f = { [ca.a.shadow]: i };
        return a.a.createElement(c, { className: fn()(ca.a.Typography, s, u, d, f) }, e);
      },
      ua = n(4),
      da = n.n(ua);
    n(394);
    const fa = () => {};
    function Modal({ buttonArray: e, animationOrigin: t, content: n, title: o, version: i, icon: l, isHidden: c, onClose: s = fa, showCopyright: u, showVersion: d }) {
      const { t: f } = ra("Modal"),
        p = be(),
        m = Object(r.useRef)(null),
        g = qr({ bounded: !0, index: 0, disabled: c }, m),
        [h, E] = Object(r.useState)(c);
      Object(r.useLayoutEffect)(() => {
        let e;
        return (
          c
            ? (e = setTimeout(() => {
                E(!0), (e = void 0);
              }, 300))
            : E(false),
          () => e && clearTimeout(e)
        );
      }, [c]);
      const v = fn()(da.a.modalWrapper, { [da.a.hidden]: h }),
        b = fn()(da.a.modal, {
          [da.a.hidden]: h,
          [da.a.boxRightAnimation]: "right" === t && !c,
          [da.a.boxRightAnimationClosing]: "right" === t && c,
          [da.a.boxLeftAnimation]: "left" === t && !c,
          [da.a.boxLeftAnimationClosing]: "left" === t && c,
          [da.a.boxCenterAnimation]: "center" === t && !c,
          [da.a.boxCenterAnimationClosing]: "center" === t && c,
        }),
        y = fn()(da.a.overlay, { [da.a.overlayOpenAnimation]: !c, [da.a.overlayCloseAnimation]: c });
      return a.a.createElement(
        g,
        null,
        a.a.createElement(
          "div",
          {
            ref: m,
            className: v,
            onClick: (e) => {
              const t = e.target;
              (t.classList.contains(da.a.modal) || t.classList.contains(da.a.overlay)) && s();
            },
          },
          a.a.createElement(
            "div",
            { className: b },
            a.a.createElement(
              "div",
              { className: da.a.body },
              a.a.createElement(
                "div",
                { className: da.a.innerBody },
                a.a.createElement(
                  "div",
                  { className: da.a.header },
                  a.a.createElement(ia, { size: 7 }),
                  l && a.a.createElement("div", { className: fn()(da.a.img, { [da.a.mouseImg]: p }) }, l),
                  o && a.a.createElement(text, { variant: "header4A", color: "black" }, o),
                  a.a.createElement(ia, { size: 2 }),
                  n && a.a.createElement("div", { className: da.a.content }, n),
                  a.a.createElement(ia, { size: 6 })
                ),
                e,
                d ||
                  (u &&
                    a.a.createElement(
                      "div",
                      { className: da.a.info },
                      a.a.createElement("div", { className: u ? da.a.showInfoText : da.a.hiddenInfoText }, "©Mojang AB"),
                      a.a.createElement("div", { className: d ? da.a.showInfoText : da.a.hiddenInfoText }, i)
                    ))
              ),
              a.a.createElement(ia, { size: 4 }),
              a.a.createElement("div", { className: da.a.bottomEdge })
            )
          ),
          a.a.createElement("div", { className: y }),
          a.a.createElement(na, { eventName: "Modal.show", autoplay: !c }),
          a.a.createElement(na, { eventName: "Modal.hide", autoplay: !!c }),
          a.a.createElement(ea, { buttonType: Se.B, inputLegend: f(".close"), onClick: s })
        )
      );
    }
    const ma = Object(r.createContext)({ narrationId: "root", text: "" }),
      ga = ma.Provider,
      ha = () => {
        const { narrationTree: e } = Object(r.useContext)(Kn),
          { narrationId: t } = Object(r.useContext)(ma);
        return Object(r.useCallback)(
          (n, r = []) => {
            const a = `${t}-${n}`;
            return (e[a] = { parentNarrationId: t, text: n, shouldSkipParent: r }), a;
          },
          [e, t]
        );
      },
      Ea = () => {
        const e = Object(r.useRef)(),
          { readById: t } = Object(r.useContext)(Kn);
        return {
          narrateById: Object(r.useCallback)(
            (n, r = !0, a, o, i) => {
              e.current = setTimeout(() => {
                t(n, a, r, o, i);
              }, 200);
            },
            [t]
          ),
          preventNarrateById: Object(r.useCallback)(() => {
            e.current && clearTimeout(e.current);
          }, []),
        };
      },
      va = ({ text: e }) => {
        const t = ha(),
          { narrateById: n } = Ea(),
          a = t(e);
        return (
          Object(r.useEffect)(() => {
            n(a);
          }, [n, a]),
          null
        );
      };
    function ba(e = false, t) {
      const [n, a] = Object(r.useState)(false);
      return (
        Object(r.useEffect)(() => {
          if (e) return;
          const n = setTimeout(() => {
            a(!0);
          }, t);
          return () => {
            clearTimeout(n);
          };
        }, [e, t]),
        n
      );
    }
    function ya({ type: e, renderingCompleted: t }) {
      const n = yn(),
        a = vn();
      return (
        Object(r.useEffect)(() => {
          if (!t || !a || !n) return;
          const r = requestAnimationFrame(() => {
            "contentful" === e ? n.contentfulPaint() : n.meaningfulPaint();
          });
          return () => {
            cancelAnimationFrame(r);
          };
        }, [n, e, t, a]),
        null
      );
    }
    function Ta(e) {
      const t = Object(r.useContext)(Dn);
      return Object(r.useMemo)(() => Sn(t, e), t);
    }
    var _a = n(105),
      xa = n.n(_a),
      wa = n(106),
      Sa = n.n(wa),
      Ca = n(107),
      Oa = n.n(Ca);
    const Ia = (e, t) => e === t,
      Na =
        ((ka = Ia),
        (e, t) => {
          if (null === t && null !== e) return false;
          if (null !== t && null === e) return false;
          if (null === t && null === e) return !0;
          if (void 0 === t && void 0 !== e) return false;
          if (void 0 !== t && void 0 === e) return false;
          if (void 0 === t && void 0 === e) return !0;
          for (const n in e) if (!ka(e[n], t[n])) return false;
          return !0;
        });
    var ka;
    const Pa = ((e) => (t, n) => {
      if (null === n && null !== t) return false;
      if (null !== n && null === t) return false;
      if (null === n && null === t) return !0;
      hbui.Achievements.locked;
      if (void 0 === n && void 0 !== t) return false;
      if (void 0 !== n && void 0 === t) return false;
      if (void 0 === n && void 0 === t) return !0;
      if (void 0 === n || void 0 === t) return false;
      const r = Math.max((t || []).length, (n || []).length);
      for (let a = 0; a < r; a++) if (!e(t[a], n[a])) return false;
      return !0;
    })(Na);
    let Ra;
    !(function (e) {
      (e[(e.LOADING = 0)] = "LOADING"), (e[(e.LOADED = 1)] = "LOADED");
    })(Ra || (Ra = {}));
    const La = te("vanilla.achievements"),
      Aa = ne([La], (e) =>
        (function (e) {
          const t = [],
            n = [],
            r = [];
          e.forEach((e) => {
            za(e) ? r.push(e) : Ha(e) ? n.push(e) : t.push(e);
          }),
            t.sort(Wa);
          const a = r,
            o = Ka(n);
          return { inProgress: t, locked: a, completed: o };
        })(e.data.achievements)
      ),
      Ma = ne([La], (e) => e.data.achievements.filter(za)),
      Fa = ne([La], (e) => Ka(e.data.achievements)),
      Da = ne([La], (e) => e.status === Ra.LOADED, Ia),
      ja = (function (e, t, n = Q) {
        return X((r) =>
          X((a) => {
            const { get: o, dependencies: i } = e(r);
            return ne(i, o, t, n)(a);
          })
        );
      })((e) => ({
        dependencies: [La, Da],
        get: (t, n) => ({
          isLoaded: n,
          achievement: (function (e, t) {
            for (let n = 0; n < e.length; n++) if (t(e[n], n, e)) return e[n];
          })(t.data.achievements, (t) => t.id === e),
        }),
      })),
      Ua = ne(
        [La],
        (e) => {
          var t;
          return {
            loaded: e.status === Ra.LOADED,
            unlocked: e.data.achievementsUnlocked,
            total: e.data.maxAchievements,
            inProgressCount: e.data.achievements.filter(Ba).length,
            rewardsTotal: ((t = e.data.achievements), t.filter((e) => e.hasReward).length),
            rewardsUnlocked: Ya(e.data.achievements),
            gamerScore: e.data.currentGamerScore,
            maxGamerScore: e.data.maxGamerScore,
            hoursPlayed: e.data.hoursPlayed,
          };
        },
        Na
      );
    function Ba(e) {
      return e.isLocked && e.progress > 0;
    }
    function Ha(e) {
      return !e.isLocked;
    }
    function za(e) {
      return e.isLocked && !e.progress;
    }
    function Ga(e) {
      return !(e.isLocked && !e.isRewardOwned);
    }
    function Ya(e) {
      return e.filter((e) => e.hasReward && Ga(e)).length;
    }
    function Ka(e) {
      return e.filter(Ha).sort(Va);
    }
    function Wa(e, t) {
      return !e.hasReward && t.hasReward ? 1 : e.hasReward && !t.hasReward ? -1 : e.progress < t.progress ? 1 : e.progress > t.progress ? -1 : 0;
    }
    function Va(e, t) {
      return e.dateUnlocked < t.dateUnlocked ? 1 : e.dateUnlocked > t.dateUnlocked ? -1 : 0;
    }
    function genericMap(e, t) {
      const n = [];
      for (let r = 0; r < e.length; r++) n[r] = t(e[r], r, e);
      return n;
    }
    function Xa(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function qa(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Xa(Object(n), !0).forEach(function (t) {
              Qa(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Xa(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function Qa(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
    }
    let gamemode, difficulty, worldType, daylightCycle;
    !(function (e) {
      (e[(e.SURVIVAL = 0)] = "SURVIVAL"), (e[(e.CREATIVE = 1)] = "CREATIVE"), (e[(e.ADVENTURE = 2)] = "ADVENTURE");
    })(gamemode || (gamemode = {})),
      (function (e) {
        (e[(e.PEACEFUL = 0)] = "PEACEFUL"), (e[(e.EASY = 1)] = "EASY"), (e[(e.NORMAL = 2)] = "NORMAL"), (e[(e.HARD = 3)] = "HARD");
      })(difficulty || (difficulty = {})),
      (function (e) {
        (e[(e.INFINITE = 0)] = "INFINITE"), (e[(e.FLAT = 1)] = "FLAT"), (e[(e.LIMITED = 2)] = "LIMITED");
      })(worldType || (worldType = {})),
      (function (e) {
        (e[(e.NORMAL = 0)] = "NORMAL"), (e[(e.ALWAYS_DAY = 1)] = "ALWAYS_DAY"), (e[(e.LOCK_TIME = 2)] = "LOCK_TIME");
      })(daylightCycle || (daylightCycle = {}));
    const no = ee("vanilla.createNewWorld"),
      ro = { worldName: "My World", gameMode: gamemode.SURVIVAL, difficulty: difficulty.EASY },
      ao = {
        cheatsEnabled: false,
        daylightCycle: daylightCycle.NORMAL,
        keepInventory: false,
        mobSpawning: false,
        mobGriefing: false,
        entitiesDropLoot: false,
        regeneration: false,
        weather: false,
        commandBlocks: false,
        educationEdition: false,
      },
      oo = {
        worldType: worldType.INFINITE,
        simulationDistance: null,
        startWithMap: false,
        bonusChest: false,
        showCoordinates: false,
        friendlyFire: !0,
        firesSpreads: !0,
        tntExplodes: !0,
        mobLoot: !0,
        naturalRegeneration: !0,
        tileDrops: !0,
        immediateRespawn: false,
        respawnRadius: "5",
        worldSeed: "",
      },
      io = J(ro),
      lo = J({ goats: false, snow: false, biomes: false, modding: false }),
      co = J(ao),
      so = J(oo);
    ne([io, lo, co, so], (e, t, n, r) =>
      qa(
        qa({ __Type: "CreateNewWorldData" }, e),
        {},
        { experiments: qa({ __Type: "ExperimentalFeaturesData" }, t), cheats: qa({ __Type: "CheatsData" }, n), advanced: qa({ __Type: "AdvancedData" }, r) }
      )
    );
    let uo, fo, po;
    !(function (e) {
      (e[(e.PackActivated = 0)] = "PackActivated"),
        (e[(e.PackDeactivated = 1)] = "PackDeactivated"),
        (e[(e.DownloadStarted = 2)] = "DownloadStarted"),
        (e[(e.StorageCheckStarted = 3)] = "StorageCheckStarted"),
        (e[(e.OpenMarketplaceForItem = 4)] = "OpenMarketplaceForItem"),
        (e[(e.MoveResourceError = 5)] = "MoveResourceError"),
        (e[(e.NullContentItem = 6)] = "NullContentItem"),
        (e[(e.UnknownError = 7)] = "UnknownError");
    })(uo || (uo = {})),
      (function (e) {
        (e[(e.PriorityIncreased = 0)] = "PriorityIncreased"),
          (e[(e.PriorityDecreased = 1)] = "PriorityDecreased"),
          (e[(e.PriorityAdjustmentFailed = 2)] = "PriorityAdjustmentFailed");
      })(fo || (fo = {})),
      (function (e) {
        (e[(e.NotInitialized = 0)] = "NotInitialized"),
          (e[(e.Idle = 1)] = "Idle"),
          (e[(e.LoadingPacks = 2)] = "LoadingPacks"),
          (e[(e.CheckingResourcePacks = 3)] = "CheckingResourcePacks"),
          (e[(e.StartDownload = 4)] = "StartDownload"),
          (e[(e.ShowDownloadDialog = 5)] = "ShowDownloadDialog"),
          (e[(e.DownloadingResourcePacks = 6)] = "DownloadingResourcePacks"),
          (e[(e.ActivateDownloadedPack = 7)] = "ActivateDownloadedPack"),
          (e[(e.CheckDlcError = 8)] = "CheckDlcError"),
          (e[(e.ShowRetryDialog = 9)] = "ShowRetryDialog"),
          (e[(e.ErrorGettingPackDetails = 10)] = "ErrorGettingPackDetails");
      })(po || (po = {}));
    const vanillaResourcePacks = te("vanilla.resourcePacks");
    let go = false;
    const ho = ne(
        [vanillaResourcePacks],
        (e) => {
          if (e)
            return (
              (go = !0),
              {
                init: e.init.bind(e),
                cancelDownload: e.cancelDownload.bind(e),
                confirmDownload: e.confirmDownload.bind(e),
                increasePriority: e.increasePriority.bind(e),
                decreasePriority: e.decreasePriority.bind(e),
                activate: e.activate.bind(e),
                deactivate: e.deactivate.bind(e),
                getDetails: e.getDetails.bind(e),
                onAllPacksLoaded: e.onAllPacksLoaded.bind(e),
              }
            );
        },
        () => !go
      ),
      Eo = ne([vanillaResourcePacks], (e) => e.status, Ia);
    let vo;
    !(function (e) {
      (e[(e.NOT_READY = 0)] = "NOT_READY"), (e[(e.READY_TO_INIT = 1)] = "READY_TO_INIT"), (e[(e.INITIALIZED = 2)] = "INITIALIZED");
    })(vo || (vo = {}));
    const bo = ne([no, Eo, ho], (e, t, n) => (null !== t && n && e ? (t === po.NotInitialized && n && e ? vo.READY_TO_INIT : vo.INITIALIZED) : vo.NOT_READY), Ia);
    ne([Eo], (e) => e === po.ShowDownloadDialog),
      ne([Eo], (e) => e == po.DownloadingResourcePacks || e == po.StartDownload),
      ne([vanillaResourcePacks, ho, bo], (e, t, n) => (t && n ? genericMap(e.activePacks, (e) => t.getDetails(e)) : []), Pa),
      ne([vanillaResourcePacks, ho, bo], (e, t, n) => (n !== vo.INITIALIZED || void 0 === t ? [] : genericMap(e.availablePacks, (e) => t.getDetails(e))), Pa),
      ne([vanillaResourcePacks, ho, bo], (e, t, n) => (n !== vo.INITIALIZED || void 0 === t ? [] : genericMap(e.realmsPacks, (e) => t.getDetails(e))), Pa),
      ne([vanillaResourcePacks, ho, bo], (e, t, n) => (n !== vo.INITIALIZED || void 0 === t ? [] : genericMap(e.unownedPacks, (e) => t.getDetails(e))), Pa),
      ne([vanillaResourcePacks], (e) => e.downloadProgress, Ia),
      ne([vanillaResourcePacks], (e) => e.importProgress, Ia),
      ne([vanillaResourcePacks], (e) => e.resourcePackToDownload, Ia),
      ne([ee("vanilla.simulationDistanceOptions")], (e) => ({
        options: e.simulationDistanceOptions,
        default: e.simulationDistanceOptions[Math.max(0, e.simulationDistanceOptions.length - 2)],
      }));
    var yo = n(71),
      To = n.n(yo);
    function obscureScreen({ onClick: e, children: t }) {
      return t ? a.a.createElement("div", { onClick: e, className: To.a.glassPane }, t) : a.a.createElement("div", { onClick: e, className: To.a.glassPane });
    }
    function image({ className: e, src: t, filtering: n = "linear", height: r, width: o }) {
      return a.a.createElement("img", { style: {}, className: e, src: `${t}${"point" === n ? "?filtering=point" : ""}`, height: r, width: o });
    }
    var wo = n(294),
      So = n.n(wo);
    var Co = ({ children: e, innerRef: t }) => a.a.createElement("div", { ref: t, className: So.a.ellipsis, style: void 0 }, e);
    function Oo(e = { index: 0 }, t, n) {
      const [a] = Object(r.useState)(() => Object(an.a)()),
        o = Object(r.useContext)(Ve.a),
        i = Object(r.useContext)(rn.b),
        l = i[i.length - 1],
        c = o.isFocusableFocused(l, a, e.alias, e.autofocus, e.disabled),
        s = {
          type: "focusable",
          id: a,
          path: i,
          alias: e.alias,
          ref: n,
          disabled: e.disabled,
          autofocus: e.autofocus,
          disableScrollIntoView: e.disableScrollIntoView,
          scrollSpeedFactor: e.scrollIntoViewSpeedFactor,
          scrollAlign: e.scrollIntoViewAlign,
          scrollOffset: e.scrollIntoViewOffset,
          onClick: t,
          onFocusedChange: (t) => {
            e && e.onFocusChanged && e.onFocusChanged(t);
          },
          index: e.index,
          inputLegend: e.inputLegend,
          onRight: e.onRight,
          onLeft: e.onLeft,
        };
      return (
        o.addOrUpdateNode(s),
        Object(r.useEffect)(() => (o.runAddNodeEffect(), () => o.removeNode(a)), [o, a]),
        {
          isFocused: c,
          onFocus: Object(r.useCallback)(() => {
            o.requestFocus(a);
          }, [o, a]),
        }
      );
    }
    const Io = Object(r.createContext)(null),
      No = () => Object(r.useContext)(Io);
    Io.Provider;
    const ko = () => Object(r.useContext)(Vn);
    function Po(e) {
      const t = Object(r.useMemo)(() => (q(e) ? e : J(e)), []);
      return ((e, t) => "function" != typeof e)(e) && !q(e) && t().set(e), t;
    }
    function Ro(e, t, n) {
      const a = It(),
        o = Object(r.useCallback)(e, t);
      Object(r.useLayoutEffect)(() => n(a).observe(o).unsubscribe, [a, n, o]);
    }
    function Lo(e, t, n) {
      const a = n(It()).get(),
        o = Object(r.useRef)(a);
      Ro(
        (e) => {
          o.current = e;
        },
        [],
        n
      );
      const i = Object(r.useCallback)(e, t);
      return Object(r.useCallback)(
        (...e) => {
          const t = o.current;
          if (t !== Q) return i(t)(...e);
        },
        [i, o]
      );
    }
    const Ao = (e) => {
      const t = ((e) => Object(r.useMemo)(() => J(e), []))(e);
      var n;
      return [t, ((n = t), Object(r.useMemo)(() => n().set, [n]))];
    };
    var Mo = n(76),
      Fo = n.n(Mo);
    function Do(e) {
      const t = Object(r.useRef)(e);
      t.current = e;
      const n = Object(r.useRef)(null),
        o = t.current.innerRef || n,
        i = Object(r.useRef)({ x: 0, y: 0 }),
        l = No(),
        c = be(),
        s = ye(),
        u = ko(),
        d = (() => {
          const e = Object(r.useRef)([]),
            t = Object(r.useCallback)(() => {
              e.current.forEach(clearTimeout), (e.current = []);
            }, [e]),
            n = Object(r.useCallback)(
              (n) => {
                t();
                let r = 0;
                n.forEach((t) => {
                  "number" == typeof t ? (r += t) : e.current.push(setTimeout(() => t(), r));
                });
              },
              [t]
            );
          return (
            Object(r.useEffect)(() => {
              const t = e.current;
              return () => {
                t.forEach((e) => clearTimeout(e));
              };
            }, []),
            n
          );
        })(),
        f = (function () {
          const e = lr();
          return Object(r.useCallback)(
            (t, n = 0) => {
              e && t && e(t, n);
            },
            [e]
          );
        })(),
        p = ha(),
        { narrateCurrentContext: m, preventNarrateCurrentContext: g } = (() => {
          const e = Object(r.useRef)(),
            { narrationId: t } = Object(r.useContext)(ma),
            { readById: n, narrationTree: a } = Object(r.useContext)(Kn);
          return {
            narrateCurrentContext: Object(r.useCallback)(
              (r, o = !0, i, l) => {
                Object.keys(a).length > 0 &&
                  (e.current = setTimeout(() => {
                    n(t, r || void 0, o, i, l);
                  }, 200));
              },
              [t, n, a]
            ),
            preventNarrateCurrentContext: Object(r.useCallback)(() => {
              e.current && clearTimeout(e.current);
            }, []),
          };
        })(),
        { narrateById: h, preventNarrateById: E } = Ea(),
        v = Po(e.narrationText),
        b = Lo((e) => () => (false !== e && void 0 !== e ? p(e) : void 0), [], v),
        [y, T] = Ao(b());
      Ro(
        () => {
          T(b());
        },
        [T, b],
        v
      );
      const _ = Lo((e) => () => e, [], y),
        x = Object(r.useRef)(false),
        w = Object(r.useRef)(false),
        S = Object(r.useRef)(false),
        C = Object(r.useCallback)(() => {
          if (!o.current) return;
          (x.current = !0),
            (o.current.className = l ? Uo(t.current, l.hovered, "pressed" === l.pressState, l.focused) : Uo(t.current, x.current, w.current, S.current)),
            t.current.soundEffectHovered && f(t.current.soundEffectHovered),
            t.current.onHoverChanged && t.current.onHoverChanged(!0);
          const e = _();
          void 0 === e ? m() : h(e);
        }, [f, m, h, _, l, o]),
        O = Object(r.useCallback)(() => {
          o.current &&
            ((x.current = false),
            (w.current = false),
            (o.current.className = l ? Uo(t.current, l.hovered, "pressed" === l.pressState, l.focused) : Uo(t.current, x.current, w.current, S.current)),
            t.current.onHoverChanged && t.current.onHoverChanged(false),
            g(),
            E());
        }, [E, g, l, o]),
        I = Object(r.useCallback)(
          (e) => {
            o.current &&
              ((e && e.button > 0) ||
                ((w.current = !0),
                (o.current.className = l ? Uo(t.current, l.hovered, "pressed" === l.pressState, l.focused) : Uo(t.current, x.current, w.current, S.current)),
                t.current.soundEffectPressed && f(t.current.soundEffectPressed),
                t.current.onPressChanged && t.current.onPressChanged(!0)));
          },
          [f, l, o]
        ),
        N = Object(r.useCallback)(
          (e) => {
            o.current &&
              ((e && e.button > 0) ||
                ((w.current = false),
                (o.current.className = l ? Uo(t.current, l.hovered, "pressed" === l.pressState, l.focused) : Uo(t.current, x.current, w.current, S.current)),
                t.current.onPressChanged && t.current.onPressChanged(false)));
          },
          [l, o]
        ),
        k = Object(r.useCallback)((e) => {
          if ((e.stopPropagation(), !(e.button > 0))) return t.current.onClick();
        }, []),
        P = Object(r.useCallback)(
          (e) => {
            (i.current.x = e.touches[0].clientX), (i.current.y = e.touches[0].clientY), d([150, I]), t.current.onPressChanged && t.current.onPressChanged(!0);
          },
          [d, I]
        ),
        R = Object(r.useCallback)(
          (e) => {
            (Math.abs(i.current.x - e.touches[0].clientX) > 3 || Math.abs(i.current.y - e.touches[0].clientY) > 3) && d([N]);
          },
          [d, N]
        ),
        L = Object(r.useCallback)(() => {
          d([N]), t.current.onPressChanged && t.current.onPressChanged(false);
        }, [d, N]),
        A = Object(r.useCallback)(() => {
          const e = t.current.delayedClick ? [I, 10, t.current.pressDuration || 150, N, t.current.onClick] : [I, 10, t.current.onClick, t.current.pressDuration || 150, N];
          d(e);
        }, [I, N, d]),
        { isFocused: M, onFocus: F } = Oo(
          {
            index: e.gamepadIndex,
            alias: e.gamepadAlias,
            inputLegend: e.inputLegend || void 0,
            disabled: e.disabled,
            autofocus: e.autofocus,
            disableScrollIntoView: e.disableScrollIntoView,
            onFocusChanged: (e) => {
              if (o.current) {
                if (
                  ((S.current = e), (o.current.className = Uo(t.current, x.current, w.current, S.current)), e && t.current.soundEffectFocused && f(t.current.soundEffectFocused), e)
                ) {
                  const e = _();
                  void 0 === e ? m() : h(e);
                } else g(), E();
                t.current.onFocusChanged && t.current.onFocusChanged(e);
              }
            },
          },
          e.disabled ? jo : A,
          o
        );
      (S.current = M),
        Object(r.useEffect)(() => {
          if (S.current) {
            const e = _();
            void 0 === e ? m() : h(e);
          }
        }, []);
      const D = e.tag || "div";
      return a.a.createElement(
        D,
        {
          ref: o,
          className: l ? Uo(e, l.hovered, "pressed" === l.pressState, l.focused) : Uo(e, x.current, w.current, S.current),
          onClick: c && !e.disabled ? k : s && !e.disabled ? A : void 0,
          onTouchStart: !s || e.disabled ? void 0 : P,
          onTouchMove: !s || e.disabled ? void 0 : R,
          onTouchEnd: !s || e.disabled ? void 0 : L,
          onMouseDown: !c || e.disabled ? void 0 : I,
          onMouseUp: !c || e.disabled ? void 0 : N,
          onMouseEnter: (c || (s && u)) && !e.disabled ? C : void 0,
          onMouseLeave: (c || (s && u)) && !e.disabled ? O : void 0,
          onKeyDown: t.current.onKeyDown,
          onFocus: F,
        },
        e.children
      );
    }
    function jo() {}
    const Uo = (e, t, n, r) => {
      const a = e.className ? ` ${e.className}` : "",
        o = t && e.classNameHovered ? ` ${e.classNameHovered}` : "",
        i = n && e.classNamePressed ? ` ${e.classNamePressed}` : "",
        l = r && e.classNameFocused ? ` ${e.classNameFocused}` : "",
        c = !0 === e.disabled ? ` ${Fo.a.disabled}` : "";
      return `${Fo.a.interactivePrimitive}${a}${o}${i}${l}${c}`;
    };
    var Bo = n(12),
      Ho = n.n(Bo);
    function zo({ children: e, gamepadIndex: t, innerRef: n, style: r }) {
      return a.a.createElement(cn, { gamepadIndex: t }, a.a.createElement("div", { className: Ho.a.listItem, ref: n, style: r }, e));
    }
    (zo.Action = function ({
      autofocus: e,
      children: t,
      disabled: n,
      onClick: r,
      inputLegend: o,
      narrationText: i,
      gamepadAlias: l,
      soundEffectPressed: c,
      onFocusChanged: s,
      onHoverChanged: u,
    }) {
      return a.a.createElement(
        Do,
        {
          autofocus: e,
          gamepadAlias: l,
          className: Ho.a.action,
          classNameHovered: Ho.a.hovered,
          classNameFocused: Ho.a.focused,
          classNamePressed: Ho.a.pressed,
          disabled: n,
          gamepadIndex: 0,
          inputLegend: o,
          narrationText: i,
          onClick: r,
          onFocusChanged: s,
          onHoverChanged: u,
          soundEffectPressed: c,
        },
        t
      );
    }),
      (zo.AdditionalAction = function ({ children: e, onClick: t, shortcut: n, inputLegend: r, narrationText: o, gamepadAlias: i, hidden: l = false }) {
        return (
          Zr({ shortcut: n, inputLegend: r }, t),
          l
            ? null
            : a.a.createElement(
                Do,
                {
                  className: Ho.a.button,
                  classNameHovered: Ho.a.hovered,
                  classNameFocused: Ho.a.focused,
                  classNamePressed: Ho.a.pressed,
                  gamepadIndex: 0,
                  gamepadAlias: i,
                  inputLegend: r,
                  onClick: t,
                  narrationText: o,
                },
                e
              )
        );
      }),
      (zo.Main = function ({ children: e }) {
        return a.a.createElement("div", { className: Ho.a.main }, e);
      }),
      (zo.Cell = function ({ children: e, direction: t = "column", showOnlyOnGamepad: n }) {
        const r = Te();
        return n
          ? r
            ? a.a.createElement("div", { className: fn()(Ho.a.cell, { [Ho.a.rowCell]: "row" === t, [Ho.a.columnCell]: "column" === t }) }, e)
            : null
          : a.a.createElement("div", { className: fn()(Ho.a.cell, { [Ho.a.rowCell]: "row" === t, [Ho.a.columnCell]: "column" === t }) }, e);
      });
    var Go = zo,
      Yo = n(51),
      Ko = n.n(Yo);
    function Wo({ percentage: e, tall: t = false }) {
      return (
        (e < 0 || e > 1) && console.warn("Percentage needs to be a valid number from 0 to 1"),
        a.a.createElement(
          "div",
          { className: fn()(Ko.a.progressBarWrapper, { [Ko.a.tall]: t }) },
          a.a.createElement("div", { className: fn()(Ko.a.progressBar, { [Ko.a.tall]: t }), style: { width: `${Math.max(Math.min(Math.round(100 * e), 100), 0)}%` } })
        )
      );
    }
    var Vo = n(24),
      $o = n.n(Vo),
      Xo = n(313),
      qo = n.n(Xo),
      Qo = n(312),
      Zo = n.n(Qo),
      Jo = n(309),
      ei = n.n(Jo),
      ti = n(310),
      ni = n.n(ti),
      ri = n(311),
      ai = n.n(ri),
      oi = n(314),
      ii = n.n(oi);
    function achievementListItem({
      autofocus: e,
      name: t,
      description: n,
      gamepadIndex: r,
      gamepadAlias: o,
      gamerScore: i,
      progress: l,
      isLocked: c,
      image: s,
      onClick: u,
      showReward: d,
      rewardImage: f,
      index: p = 0,
      listLength: m = 0,
    }) {
      const { t: g } = ra("AchievementListItem"),
        h = [
          t,
          g(".siblingNarration", [`${p + 1}`, `${m}`]),
          0 !== l && l > 0 && l < 1 ? g(".percentageNarration", [`${Math.round(100 * l)}`]) : "",
          g(".gamerscoreNarration", [`${i}`]),
          d ? g(c ? ".rewardLockedNarration" : ".rewardUnlockedNarration") : "",
          n,
        ];
      return a.a.createElement(
        Go,
        { gamepadIndex: r },
        a.a.createElement(
          Go.Action,
          { narrationText: h.join(" . "), inputLegend: g(".view"), onClick: u, gamepadAlias: o, autofocus: e, soundEffectPressed: "random.click" },
          a.a.createElement(
            Go.Cell,
            null,
            a.a.createElement(
              "div",
              { className: fn()($o.a.achievement, { [$o.a.achievementLocked]: c }) },
              a.a.createElement(image, { className: $o.a.frame, filtering: "point", src: c ? ei.a : ni.a }),
              a.a.createElement(image, { className: $o.a.achievement, filtering: "point", src: s || ai.a })
            )
          ),
          a.a.createElement(
            Go.Main,
            null,
            a.a.createElement(text, { variant: "body", color: "white" }, a.a.createElement(Co, null, t)),
            a.a.createElement(text, { variant: "captionShort", color: "grey" }, a.a.createElement(Co, null, n)),
            !!l && 1 !== l && a.a.createElement(a.a.Fragment, null, a.a.createElement(ia, { size: 1 }), a.a.createElement(Wo, { percentage: l }))
          ),
          i &&
            a.a.createElement(
              Go.Cell,
              { direction: "row" },
              a.a.createElement(
                "div",
                { className: $o.a.gamerPointsWrapper },
                a.a.createElement(image, { className: $o.a.imageGamerPoints, src: Zo.a, filtering: "point" }),
                a.a.createElement(text, { variant: "captionShort", color: "inherit" }, i)
              )
            ),
          d
            ? a.a.createElement(
                Go.Cell,
                null,
                a.a.createElement(
                  "div",
                  { className: c ? $o.a.rewardImgCellLocked : $o.a.rewardImgCellUnlocked },
                  c && a.a.createElement(image, { className: $o.a.lockedIcon, filtering: "point", src: qo.a }),
                  c && a.a.createElement("div", { className: $o.a.rewardLockedOverlay }),
                  a.a.createElement(image, { className: $o.a.rewardImg, src: f || ii.a })
                )
              )
            : null
        )
      );
    }
    var ci = n(305),
      si = n.n(ci),
      ui = n(307),
      di = n.n(ui),
      fi = n(308),
      pi = n.n(fi),
      mi = n(306),
      gi = n.n(mi),
      hi = n(295),
      Ei = n.n(hi),
      vi = n(304),
      bi = n.n(vi),
      yi = n(296),
      Ti = n.n(yi),
      _i = n(297),
      xi = n.n(_i),
      wi = n(298),
      Si = n.n(wi),
      Ci = n(299),
      Oi = n.n(Ci),
      Ii = n(300),
      Ni = n.n(Ii),
      ki = n(301),
      Pi = n.n(ki),
      Ri = n(302),
      Li = n.n(Ri),
      Ai = n(303),
      Mi = n.n(Ai);
    function Fi({ visible: e, inverse: t = false, appear: n, unmountOnExit: a, timeout: o, children: i }) {
      const l = Object(r.useRef)(null),
        c = Object(r.useRef)(t);
      c.current = t;
      const s = Object(r.useRef)(a);
      s.current = a;
      const [u, d] = Object(r.useState)(() => (e && n ? ["exited", t] : e ? ["entered", t] : ["unmounted", t])),
        f = "entering" === u[0],
        p = "exiting" === u[0],
        m = "exited" === u[0];
      return (
        Object(r.useEffect)(() => {
          m && a && d((e) => ["unmounted", e[1]]);
        }, [m, a]),
        Object(r.useEffect)(() => {
          Di(l);
          const t = c.current,
            n = setTimeout(() => {
              d(([n]) => (e ? ("entered" === n ? ["entered", t] : ["entering", t]) : "exited" === n ? ["exited", t] : "unmounted" === n ? ["unmounted", t] : ["exiting", t]));
            }, 150);
          return () => clearTimeout(n);
        }, [e]),
        Object(r.useEffect)(() => {
          Di(l), f && (l.current = setTimeout(() => d((e) => ["entered", e[1]]), o + 100));
        }, [f, o]),
        Object(r.useEffect)(() => {
          Di(l), p && (l.current = setTimeout(() => d((e) => [s.current ? "unmounted" : "exited", e[1]]), o + 100));
        }, [p, o]),
        Object(r.useEffect)(() => () => Di(l), []),
        "unmounted" === u[0] ? null : i(u[0], u[1])
      );
    }
    const Di = (e) => {
      e.current && (clearTimeout(e.current), (e.current = null));
    };
    var ji = n(42),
      Ui = n.n(ji),
      Bi = n(280),
      Hi = n.n(Bi),
      zi = n(279),
      Gi = n.n(zi);
    function Yi() {
      return a.a.createElement(image, { src: Gi.a, className: Hi.a.spinner, filtering: "point" });
    }
    function Ki({ children: e }) {
      return a.a.createElement("div", { className: Ui.a.summary }, e);
    }
    (Ki.Data = function ({ value: e, label: t, icon: n }) {
      return a.a.createElement(
        "div",
        { className: Ui.a.data },
        n,
        a.a.createElement(
          "div",
          { className: Ui.a.dataText },
          a.a.createElement(text, { variant: "captionShort", color: "inherit" }, t),
          a.a.createElement(text, { variant: "captionShort", color: "white" }, e)
        )
      );
    }),
      (Ki.Divider = function () {
        return a.a.createElement("div", { className: Ui.a.divider });
      });
    Ki.SummarySpinner = ({ hidden: e }) =>
      a.a.createElement(Fi, { visible: !e, timeout: 500 }, (e) =>
        a.a.createElement("div", { className: fn()(Ui.a.spinner, { [Ui.a.spinnerHidden]: "exited" === e || "exiting" === e || "unmounted" === e }) }, a.a.createElement(Yi, null))
      );
    var Wi = n(15),
      Vi = n.n(Wi);
    function $i(e) {
      return 0 === e
        ? Ei.a
        : 2 === Math.round(10 * e)
        ? Ti.a
        : 3 === Math.round(10 * e)
        ? xi.a
        : 4 === Math.round(10 * e)
        ? Si.a
        : 5 === Math.round(10 * e)
        ? Oi.a
        : 6 === Math.round(10 * e)
        ? Ni.a
        : 7 === Math.round(10 * e)
        ? Pi.a
        : 8 === Math.round(10 * e)
        ? Li.a
        : 9 === Math.round(10 * e) || 10 === Math.round(10 * e)
        ? Mi.a
        : bi.a;
    }
    function Xi({
      inProgress: e,
      achievementsUnlocked: t,
      achievementsTotal: n,
      rewardsUnlocked: r,
      rewardsTotal: o,
      gamerScore: i,
      gamerScoreTotal: l,
      hoursPlayed: c,
      gamepadIndex: s,
    }) {
      const { t: u } = ra("AchievementsSummary"),
        d = !!o && `${r || 0}` + "/" + `${o}`,
        f = `${i}` + "/" + `${l}`,
        p = 0 === n ? 0 : t / n,
        m = n && t && 100 * p > 98 ? Math.floor(100 * p) : Math.ceil(100 * p),
        g = ko(),
        h = [
          u(".narratorTextBlock"),
          u(".narratorSummary"),
          u(".narratorIndex", ["1", "4"]),
          u(".narratorPercentage", [`${m}`]),
          u(".narratorCompletedAchievements", [`${t}`, `${n}`]),
          u(".narratorInProgress", [`${e}`]),
          r && o ? u(".narratorCompletedRewards", [`${r}`, `${o}`]) : "",
          u(".narratorGamerscore", [`${i}`, `${l}`]),
          u(".narratorTimePlayed", [`${c}`]),
        ];
      return a.a.createElement(
        Do,
        {
          inputLegend: false,
          className: "",
          autofocus: !0,
          classNameHovered: "",
          classNameFocused: Vi.a.focusedSummary,
          classNamePressed: "",
          disabled: !g,
          gamepadIndex: s,
          narrationText: h.join(" - "),
          onClick: () => {},
        },
        a.a.createElement(
          Ki,
          null,
          a.a.createElement(
            "div",
            { className: Vi.a.featuredData },
            a.a.createElement(
              "div",
              { className: Vi.a.featuredDataUpper },
              a.a.createElement(image, { filtering: "point", src: $i(p), className: Vi.a.bottle }),
              a.a.createElement(text, { variant: "header2", color: "white", shadow: !0 }, m),
              a.a.createElement(text, { variant: "header3", color: "white", shadow: !0 }, a.a.createElement("div", { className: Vi.a.innerfeaturedDataPercentage }, "%"))
            ),
            a.a.createElement(text, { variant: "captionShort", color: "white" }, u(".percentage", [`${t}`, `${n}`]))
          ),
          a.a.createElement(Ki.Divider, null),
          a.a.createElement(Ki.Data, {
            icon: a.a.createElement("div", { className: Vi.a.iconWrapper }, a.a.createElement(image, { src: si.a, filtering: "point", className: Vi.a.icon })),
            label: u(".progress"),
            value: e,
          }),
          a.a.createElement(ih, {
            title: "Go to Persona",
            onClickView: () => {
              router.push(`/persona`);
            },
            isOwned: Ga(s),
            image: null,
          }),
          a.a.createElement(Ki.Divider, null),
          d &&
            a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(Ki.Data, {
                icon: a.a.createElement("div", { className: Vi.a.iconWrapper }, a.a.createElement(image, { src: gi.a, filtering: "point", className: Vi.a.icon })),
                label: u(".rewards"),
                value: d,
              }),
              a.a.createElement(Ki.Divider, null)
            ),
          a.a.createElement(Ki.Data, {
            icon: a.a.createElement("div", { className: Vi.a.iconWrapper }, a.a.createElement(image, { src: di.a, filtering: "point", className: Vi.a.icon })),
            label: u(".gamerscore"),
            value: f,
          }),
          a.a.createElement(Ki.Divider, null),
          a.a.createElement(Ki.Data, {
            icon: a.a.createElement("div", { className: Vi.a.iconWrapper }, a.a.createElement(image, { src: pi.a, filtering: "point", className: Vi.a.icon })),
            label: u(".time"),
            value: u(".hoursPlayed", [`${c}`]),
          })
        )
      );
    }
    function qi(e) {
      const t = qr(
        {
          bounded: e.bounded,
          disabled: e.disabled,
          index: e.gamepadIndex,
          defaultFocusedChildAlias: e.defaultFocusedChildAlias,
          defaultFocusedChildBehavior: e.defaultFocusedChildBehavior,
          scrollWithAnalog: e.scrollWithAnalog,
          scrollIntoView: e.scrollIntoView,
          scrollIntoViewAlign: e.scrollIntoViewAlign,
          scrollIntoViewCalculateValue: e.scrollIntoViewCalculateValue,
          scrollIntoViewOffset: e.scrollIntoViewOffset,
          scrollIntoViewSpeedFactor: e.scrollIntoViewSpeedFactor,
        },
        e.scrollRef
      );
      return a.a.createElement(t, null, e.children);
    }
    Xi.Loading = function ({ loading: e }) {
      return a.a.createElement(Ki, null, a.a.createElement("div", { className: Vi.a.loadingSummaryPlaceholder }, a.a.createElement(Ki.SummarySpinner, { hidden: !e })));
    };
    var Qi = n(60),
      Zi = n.n(Qi),
      Ji = n(45),
      el = n.n(Ji);
    function tl({ left: e, center: t, right: n, safeZone: r }) {
      const o = r && r.top ? `${r.top}px` : "";
      return a.a.createElement(
        "div",
        { className: el.a.NavigationBar, style: { paddingTop: o } },
        a.a.createElement(
          "div",
          { className: el.a.NavigationBarSafeZoneWrapper, style: { paddingRight: r && r.right + "px", paddingLeft: r && r.left + "px" } },
          a.a.createElement("div", { className: el.a.left }, e),
          a.a.createElement("div", { className: el.a.center }, t),
          a.a.createElement("div", { className: el.a.right }, n)
        )
      );
    }
    var nl = n(46),
      rl = n.n(nl),
      al = n(281),
      ol = n.n(al),
      il = n(282),
      ll = n.n(il),
      cl = n(283),
      sl = n.n(cl),
      ul = n(284),
      dl = n.n(ul),
      fl = n(285),
      pl = n.n(fl),
      ml = n(286),
      gl = n.n(ml),
      hl = n(289),
      El = n.n(hl),
      vl = n(290),
      bl = n.n(vl),
      yl = n(291),
      Tl = n.n(yl),
      _l = n(287),
      xl = n.n(_l),
      wl = n(288),
      Sl = n.n(wl),
      Cl = {
        arrowUp: ol.a,
        arrowDown: ll.a,
        arrowBack: sl.a,
        arrowDownWhite: dl.a,
        arrowUpWhite: pl.a,
        arrowBackWhite: gl.a,
        off: xl.a,
        on: Sl.a,
        crossWhite: El.a,
        checkWhite: bl.a,
        checkGrey: Tl.a,
      },
      Ol = n(36),
      Il = n.n(Ol);
    function createIcon({ type: e, focused: t }) {
      const n = Cl[e];
      if (!n) throw new Error(`Unsupported icon "${e}".`);
      return a.a.createElement(image, {
        className: fn()(Il.a.icon, {
          [Il.a.arrow]: "arrowUp" === e || "arrowDown" === e || "arrowDownWhite" === e || "arrowUpWhite" === e,
          [Il.a.arrowBack]: "arrowBack" === e || "arrowBackWhite" === e,
          [Il.a.crossWhite]: "crossWhite" === e,
          [Il.a.check]: "checkWhite" === e || "checkGrey" === e,
          [Il.a.off]: "off" === e,
          [Il.a.on]: "on" === e,
          [Il.a.focused]: t,
        }),
        src: n,
        filtering: "point",
      });
    }
    function backButton({ onClick: e, disabled: t }) {
      const { t: n } = ra("BackButton.narration");
      return a.a.createElement(
        Do,
        {
          narrationText: n(".backButton"),
          className: fn()(rl.a.backButton, { [rl.a.disabled]: t }),
          classNamePressed: rl.a.touchedDown,
          classNameHovered: rl.a.highlighted,
          classNameFocused: rl.a.focused,
          gamepadIndex: 0,
          inputLegend: "",
          onClick: e,
          disabled: t,
          soundEffectPressed: "random.click",
        },
        a.a.createElement(createIcon, { type: "arrowBack" })
      );
    }
    var Pl = n(292),
      Rl = n.n(Pl),
      Ll = n(293),
      Al = n.n(Ll),
      Ml = n(41),
      Fl = n.n(Ml);
    function Dl({ buttonType: e, inputLegend: t, gamepadAlias: n, disabled: r, onClick: a }) {
      return Qr({ shortcut: e, inputLegend: t, alias: n, disabled: r }, a), null;
    }
    var jl = n(35),
      Ul = n.n(jl),
      Bl = n(13),
      Hl = n.n(Bl),
      zl = n(72),
      Gl = n.n(zl),
      Yl = n(73),
      Kl = n.n(Yl),
      Wl = n(50),
      Vl = n.n(Wl);
    var $l = n(31),
      Xl = n.n($l),
      ql = n(108),
      Ql = n.n(ql),
      Zl = n(109),
      Jl = n.n(Zl),
      ec = n(110),
      tc = n.n(ec),
      nc = n(111),
      rc = n.n(nc),
      ac = n(112),
      oc = n.n(ac),
      ic = n(113),
      lc = n.n(ic),
      cc = n(114),
      sc = n.n(cc),
      uc = n(115),
      dc = n.n(uc),
      fc = n(116),
      pc = n.n(fc),
      mc = n(117),
      gc = n.n(mc),
      hc = n(118),
      Ec = n.n(hc),
      vc = n(119),
      bc = n.n(vc),
      yc = n(120),
      Tc = n.n(yc),
      _c = n(121),
      xc = n.n(_c),
      wc = n(122),
      Sc = n.n(wc),
      Cc = n(123),
      Oc = n.n(Cc),
      Ic = n(124),
      Nc = n.n(Ic),
      kc = n(125),
      Pc = n.n(kc);
    var Rc = {
        A: Ql.a,
        B: Jl.a,
        X: tc.a,
        Y: rc.a,
        START: oc.a,
        LT: lc.a,
        RT: sc.a,
        LB: dc.a,
        RB: pc.a,
        LEFT: gc.a,
        RIGHT: Ec.a,
        UP: bc.a,
        DOWN: Tc.a,
        SELECT: xc.a,
        L3: Sc.a,
        R3: Oc.a,
        L_LEFT: Nc.a,
        R_LEFT: Pc.a,
      },
      Lc = n(144),
      Ac = n.n(Lc),
      Mc = n(145),
      Fc = n.n(Mc),
      Dc = n(146),
      jc = n.n(Dc),
      Uc = n(147),
      Bc = n.n(Uc),
      Hc = n(148),
      zc = n.n(Hc),
      Gc = n(149),
      Yc = n.n(Gc),
      Kc = n(150),
      Wc = n.n(Kc),
      Vc = n(151),
      $c = n.n(Vc),
      Xc = n(152),
      qc = n.n(Xc),
      Qc = n(153),
      Zc = n.n(Qc),
      Jc = n(154),
      es = n.n(Jc),
      ts = n(155),
      ns = n.n(ts),
      rs = n(156),
      as = n.n(rs),
      os = n(157),
      is = n.n(os),
      ls = n(158),
      cs = n.n(ls),
      ss = n(159),
      us = n.n(ss),
      ds = n(160),
      fs = n.n(ds),
      ps = n(161),
      ms = n.n(ps);
    var gs = {
        A: Ac.a,
        B: Fc.a,
        X: jc.a,
        Y: Bc.a,
        START: zc.a,
        LT: Yc.a,
        RT: Wc.a,
        LB: $c.a,
        RB: qc.a,
        LEFT: Zc.a,
        RIGHT: es.a,
        UP: ns.a,
        DOWN: as.a,
        SELECT: is.a,
        L3: cs.a,
        R3: us.a,
        L_LEFT: fs.a,
        R_LEFT: ms.a,
      },
      hs = n(180),
      Es = n.n(hs),
      vs = n(181),
      bs = n.n(vs),
      ys = n(182),
      Ts = n.n(ys),
      _s = n(183),
      xs = n.n(_s),
      ws = n(184),
      Ss = n.n(ws),
      Cs = n(185),
      Os = n.n(Cs),
      Is = n(186),
      Ns = n.n(Is),
      ks = n(187),
      Ps = n.n(ks),
      Rs = n(188),
      Ls = n.n(Rs),
      As = n(189),
      Ms = n.n(As),
      Fs = n(190),
      Ds = n.n(Fs),
      js = n(191),
      Us = n.n(js),
      Bs = n(192),
      Hs = n.n(Bs),
      zs = n(193),
      Gs = n.n(zs),
      Ys = n(194),
      Ks = n.n(Ys),
      Ws = n(195),
      Vs = n.n(Ws),
      $s = n(196),
      Xs = n.n($s),
      qs = n(197),
      Qs = n.n(qs);
    var Zs = {
        A: Es.a,
        B: bs.a,
        X: Ts.a,
        Y: xs.a,
        START: Ss.a,
        LT: Os.a,
        RT: Ns.a,
        LB: Ps.a,
        RB: Ls.a,
        LEFT: Ms.a,
        RIGHT: Ds.a,
        UP: Us.a,
        DOWN: Hs.a,
        SELECT: Gs.a,
        L3: Ks.a,
        R3: Vs.a,
        L_LEFT: Xs.a,
        R_LEFT: Qs.a,
      },
      Js = n(126),
      eu = n.n(Js),
      tu = n(127),
      nu = n.n(tu),
      ru = n(128),
      au = n.n(ru),
      ou = n(129),
      iu = n.n(ou),
      lu = n(130),
      cu = n.n(lu),
      su = n(131),
      uu = n.n(su),
      du = n(132),
      fu = n.n(du),
      pu = n(133),
      mu = n.n(pu),
      gu = n(134),
      hu = n.n(gu),
      Eu = n(135),
      vu = n.n(Eu),
      bu = n(136),
      yu = n.n(bu),
      Tu = n(137),
      _u = n.n(Tu),
      xu = n(138),
      wu = n.n(xu),
      Su = n(139),
      Cu = n.n(Su),
      Ou = n(140),
      Iu = n.n(Ou),
      Nu = n(141),
      ku = n.n(Nu),
      Pu = n(142),
      Ru = n.n(Pu),
      Lu = n(143),
      Au = n.n(Lu);
    var Mu = {
        A: eu.a,
        B: nu.a,
        X: au.a,
        Y: iu.a,
        START: cu.a,
        LT: uu.a,
        RT: fu.a,
        LB: mu.a,
        RB: hu.a,
        LEFT: vu.a,
        RIGHT: yu.a,
        UP: _u.a,
        DOWN: wu.a,
        SELECT: Cu.a,
        L3: Iu.a,
        R3: ku.a,
        L_LEFT: Ru.a,
        R_LEFT: Au.a,
      },
      Fu = n(162),
      Du = n.n(Fu),
      ju = n(163),
      Uu = n.n(ju),
      Bu = n(164),
      Hu = n.n(Bu),
      zu = n(165),
      Gu = n.n(zu),
      Yu = n(166),
      Ku = n.n(Yu),
      Wu = n(167),
      Vu = n.n(Wu),
      $u = n(168),
      Xu = n.n($u),
      qu = n(169),
      Qu = n.n(qu),
      Zu = n(170),
      Ju = n.n(Zu),
      ed = n(171),
      td = n.n(ed),
      nd = n(172),
      rd = n.n(nd),
      ad = n(173),
      od = n.n(ad),
      id = n(174),
      ld = n.n(id),
      cd = n(175),
      sd = n.n(cd),
      ud = n(176),
      dd = n.n(ud),
      fd = n(177),
      pd = n.n(fd),
      md = n(178),
      gd = n.n(md),
      hd = n(179),
      Ed = n.n(hd);
    var vd = {
        A: Du.a,
        B: Uu.a,
        X: Hu.a,
        Y: Gu.a,
        START: Ku.a,
        LT: Vu.a,
        RT: Xu.a,
        LB: Qu.a,
        RB: Ju.a,
        LEFT: td.a,
        RIGHT: rd.a,
        UP: od.a,
        DOWN: ld.a,
        SELECT: sd.a,
        L3: dd.a,
        R3: pd.a,
        L_LEFT: gd.a,
        R_LEFT: Ed.a,
      },
      bd = n(198),
      yd = n.n(bd),
      Td = n(199),
      _d = n.n(Td),
      xd = n(200),
      wd = n.n(xd),
      Sd = n(201),
      Cd = n.n(Sd),
      Od = n(202),
      Id = n.n(Od),
      Nd = n(203),
      kd = n.n(Nd),
      Pd = n(204),
      Rd = n.n(Pd),
      Ld = n(205),
      Ad = n.n(Ld),
      Md = n(206),
      Fd = n.n(Md),
      Dd = n(207),
      jd = n.n(Dd),
      Ud = n(208),
      Bd = n.n(Ud),
      Hd = n(209),
      zd = n.n(Hd),
      Gd = n(210),
      Yd = n.n(Gd),
      Kd = n(211),
      Wd = n.n(Kd),
      Vd = n(212),
      $d = n.n(Vd),
      Xd = n(213),
      qd = n.n(Xd),
      Qd = n(214),
      Zd = n.n(Qd),
      Jd = n(215),
      ef = n.n(Jd);
    var tf = {
      A: yd.a,
      B: _d.a,
      X: wd.a,
      Y: Cd.a,
      START: Id.a,
      LT: kd.a,
      RT: Rd.a,
      LB: Ad.a,
      RB: Fd.a,
      LEFT: jd.a,
      RIGHT: Bd.a,
      UP: zd.a,
      DOWN: Yd.a,
      SELECT: Wd.a,
      L3: $d.a,
      R3: qd.a,
      L_LEFT: Zd.a,
      R_LEFT: ef.a,
    };
    const nf = (e, t) =>
      e === fe.XBOX
        ? "light" === t
          ? Rc
          : Mu
        : e === fe.PS4
        ? "light" === t
          ? gs
          : vd
        : e === fe.NX_HANDHELD || e === fe.NX_TV
        ? "light" === t
          ? Zs
          : tf
        : "light" === t
        ? Rc
        : Mu;
    var rf = n(49),
      af = n.n(rf),
      of = n(221),
      lf = n.n(of),
      cf = n(222),
      sf = n.n(cf),
      uf = n(223),
      df = n.n(uf),
      ff = n(224),
      pf = n.n(ff),
      mf = n(225),
      gf = n.n(mf),
      hf = n(226),
      Ef = n.n(hf),
      vf = n(227),
      bf = n.n(vf),
      yf = n(228),
      Tf = n.n(yf),
      _f = n(229),
      xf = n.n(_f),
      wf = n(230),
      Sf = n.n(wf),
      Cf = n(231),
      Of = n.n(Cf),
      If = n(232),
      Nf = n.n(If),
      kf = n(233),
      Pf = n.n(kf),
      Rf = n(234),
      Lf = n.n(Rf),
      Af = n(217),
      Mf = n.n(Af),
      Ff = n(219),
      Df = n.n(Ff),
      jf = n(235),
      Uf = n.n(jf),
      Bf = n(236),
      Hf = n.n(Bf),
      zf = n(237),
      Gf = n.n(zf),
      Yf = n(238),
      Kf = n.n(Yf),
      Wf = n(239),
      Vf = n.n(Wf),
      $f = n(218),
      Xf = n.n($f),
      qf = n(220),
      Qf = n.n(qf),
      Zf = n(216),
      Jf = n.n(Zf),
      ep = n(240),
      tp = n.n(ep),
      np = n(241),
      rp = n.n(np),
      ap = n(242),
      op = n.n(ap),
      ip = n(243),
      lp = n.n(ip),
      cp = n(244),
      sp = n.n(cp),
      up = n(245),
      dp = n.n(up),
      fp = n(246),
      pp = n.n(fp),
      mp = n(247),
      gp = n.n(mp);
    var hp = {
        [ft.TAB]: Jf.a,
        [ft.ENTER]: Mf.a,
        [ft.SHIFT]: Xf.a,
        [ft.ESCAPE]: Df.a,
        [ft.SPACE]: Qf.a,
        [ft.KEY_0]: lf.a,
        [ft.KEY_1]: sf.a,
        [ft.KEY_2]: df.a,
        [ft.KEY_3]: pf.a,
        [ft.KEY_4]: gf.a,
        [ft.KEY_5]: Ef.a,
        [ft.KEY_6]: bf.a,
        [ft.KEY_7]: Tf.a,
        [ft.KEY_8]: xf.a,
        [ft.KEY_9]: Sf.a,
        [ft.KEY_A]: Of.a,
        [ft.KEY_C]: Nf.a,
        [ft.KEY_D]: Pf.a,
        [ft.KEY_E]: Lf.a,
        [ft.KEY_F]: Uf.a,
        [ft.KEY_M]: Hf.a,
        [ft.KEY_Q]: Gf.a,
        [ft.KEY_R]: Kf.a,
        [ft.KEY_S]: Vf.a,
        [ft.KEY_W]: tp.a,
        [ft.KEY_X]: rp.a,
        [ft.KEY_Z]: op.a,
        [ft.MOUSE_MOVEMENT]: lp.a,
        [ft.MOUSE_BUTTON_LEFT]: sp.a,
        [ft.MOUSE_BUTTON_MIDDLE]: dp.a,
        [ft.MOUSE_BUTTON_RIGHT]: pp.a,
        [ft.MOUSE_WHEEL]: gp.a,
      },
      Ep = n(253),
      vp = n.n(Ep),
      bp = n(254),
      yp = n.n(bp),
      Tp = n(255),
      _p = n.n(Tp),
      xp = n(256),
      wp = n.n(xp),
      Sp = n(257),
      Cp = n.n(Sp),
      Op = n(258),
      Ip = n.n(Op),
      Np = n(259),
      kp = n.n(Np),
      Pp = n(260),
      Rp = n.n(Pp),
      Lp = n(261),
      Ap = n.n(Lp),
      Mp = n(262),
      Fp = n.n(Mp),
      Dp = n(263),
      jp = n.n(Dp),
      Up = n(264),
      Bp = n.n(Up),
      Hp = n(265),
      zp = n.n(Hp),
      Gp = n(249),
      Yp = n.n(Gp),
      Kp = n(251),
      Wp = n.n(Kp),
      Vp = n(266),
      $p = n.n(Vp),
      Xp = n(267),
      qp = n.n(Xp),
      Qp = n(268),
      Zp = n.n(Qp),
      Jp = n(269),
      em = n.n(Jp),
      tm = n(270),
      nm = n.n(tm),
      rm = n(250),
      am = n.n(rm),
      om = n(252),
      im = n.n(om),
      lm = n(248),
      cm = n.n(lm),
      sm = n(271),
      um = n.n(sm),
      dm = n(272),
      fm = n.n(dm),
      pm = n(273),
      mm = n.n(pm),
      gm = n(274),
      hm = n.n(gm),
      Em = n(275),
      vm = n.n(Em),
      bm = n(276),
      ym = n.n(bm),
      Tm = n(277),
      _m = n.n(Tm),
      xm = n(278),
      wm = n.n(xm);
    var Sm = {
      [ft.TAB]: cm.a,
      [ft.ENTER]: Yp.a,
      [ft.SHIFT]: am.a,
      [ft.ESCAPE]: Wp.a,
      [ft.SPACE]: im.a,
      [ft.KEY_0]: vp.a,
      [ft.KEY_1]: yp.a,
      [ft.KEY_2]: _p.a,
      [ft.KEY_3]: wp.a,
      [ft.KEY_4]: Cp.a,
      [ft.KEY_5]: Ip.a,
      [ft.KEY_6]: kp.a,
      [ft.KEY_7]: Rp.a,
      [ft.KEY_8]: Ap.a,
      [ft.KEY_9]: Fp.a,
      [ft.KEY_A]: jp.a,
      [ft.KEY_D]: Bp.a,
      [ft.KEY_E]: zp.a,
      [ft.KEY_F]: $p.a,
      [ft.KEY_M]: qp.a,
      [ft.KEY_Q]: Zp.a,
      [ft.KEY_R]: em.a,
      [ft.KEY_S]: nm.a,
      [ft.KEY_W]: um.a,
      [ft.KEY_X]: fm.a,
      [ft.KEY_Z]: mm.a,
      [ft.MOUSE_MOVEMENT]: hm.a,
      [ft.MOUSE_BUTTON_LEFT]: vm.a,
      [ft.MOUSE_BUTTON_MIDDLE]: ym.a,
      [ft.MOUSE_BUTTON_RIGHT]: _m.a,
      [ft.MOUSE_WHEEL]: wm.a,
    };
    var Cm = function ({ button: e, theme: t = "light" }) {
        const n = Object(r.useContext)(Ee),
          o = nf(n, t);
        if (!o[e]) throw new Error(`ButtonIconGamepad: unknown button '${e}'`);
        const i = [Se.LEFT_TRIGGER, Se.RIGHT_TRIGGER].includes(e),
          l = n === fe.NX_HANDHELD || n === fe.NX_TV,
          c = n === fe.XBOX,
          s = n === fe.PS4;
        return a.a.createElement(image, {
          className: fn()({
            [Xl.a.ABXY]: [Se.A, Se.B, Se.X, Se.Y].includes(e),
            [Xl.a.bumpers]: [Se.LEFT_BUMPER, Se.RIGHT_BUMPER].includes(e),
            [Xl.a.flatTriggers]: i && (s || l),
            [Xl.a.triggers]: i && c,
            [Xl.a.startXbox]: Se.START === e && c,
            [Xl.a.optionsPS4]: Se.START === e && s,
            [Xl.a.homeNintendo]: Se.START === e && l,
            [Xl.a.dButton]: [Se.UP, Se.RIGHT, Se.DOWN, Se.LEFT].includes(e),
            [Xl.a.stick]: [Se.L3, Se.R3, Se.RIGHT_ANALOG_LEFT, Se.LEFT_ANALOG_LEFT].includes(e),
          }),
          src: o[e],
          filtering: "linear",
        });
      },
      Om = ({ keyCode: e, theme: t = "light" }) => {
        const n = "light" === t ? hp : Sm;
        if (n[e])
          return a.a.createElement("img", {
            className: fn()(af.a.ButtonIconKeyboardKey, {
              [af.a.ButtonIconKeyboardSpecialKey]: [ft.TAB, ft.ENTER, ft.SHIFT, ft.ESCAPE, ft.SPACE].includes(e),
              [af.a.ButtonIconKeyboardMouseButton]: [ft.MOUSE_MOVEMENT, ft.MOUSE_BUTTON_LEFT, ft.MOUSE_BUTTON_MIDDLE, ft.MOUSE_BUTTON_RIGHT, ft.MOUSE_WHEEL].includes(e),
            }),
            src: n[e],
          });
        {
          const t = String.fromCharCode(e);
          return a.a.createElement("div", { className: af.a.ButtonIconKeyboard }, t);
        }
      },
      Im = n(75),
      Nm = n.n(Im);
    function km({ button: e, label: t, theme: n = "light" }) {
      return a.a.createElement("div", { className: Nm.a.InputHint }, a.a.createElement(Cm, { button: e, theme: n }), a.a.createElement("div", { className: Nm.a.hintGutter }), t);
    }
    var Pm = n(74),
      Rm = n.n(Pm);
    function Lm({ keyCode: e, label: t, theme: n = "light" }) {
      return a.a.createElement("div", { className: Rm.a.InputHint }, a.a.createElement(Om, { keyCode: e, theme: n }), a.a.createElement("div", { className: Rm.a.hintGutter }), t);
    }
    function inputHint({ shouldDisplayKeyboard: e }) {
      const t = Object(r.useContext)(bt),
        n = Object(r.useContext)(mt),
        o = Te();
      return _e() && e
        ? a.a.createElement(
            "div",
            { className: Kl.a.InputLegend },
            a.a.createElement(inputHint.Wrapper, {
              left: a.a.createElement(a.a.Fragment, null, t[Se.B] ? a.a.createElement(Lm, { label: t[Se.B], keyCode: n[Se.B] }) : null),
              right: a.a.createElement(
                a.a.Fragment,
                null,
                t[Se.LEFT] ? a.a.createElement(Lm, { label: t[Se.LEFT], keyCode: n[Se.LEFT] }) : null,
                t[Se.RIGHT] ? a.a.createElement(Lm, { label: t[Se.RIGHT], keyCode: n[Se.RIGHT] }) : null,
                t[Se.UP] ? a.a.createElement(Lm, { label: t[Se.UP], keyCode: n[Se.UP] }) : null,
                t[Se.DOWN] ? a.a.createElement(Lm, { label: t[Se.DOWN], keyCode: n[Se.DOWN] }) : null,
                t[Se.X] ? a.a.createElement(Lm, { label: t[Se.X], keyCode: n[Se.X] }) : null,
                t[Se.Y] ? a.a.createElement(Lm, { label: t[Se.Y], keyCode: n[Se.Y] }) : null,
                t[Se.START] ? a.a.createElement(Lm, { label: t[Se.START], keyCode: n[Se.START] }) : null,
                t[Se.A] ? a.a.createElement(Lm, { label: t[Se.A], keyCode: n[Se.A] }) : null
              ),
            })
          )
        : o
        ? a.a.createElement(
            "div",
            { className: Kl.a.InputLegend },
            a.a.createElement(inputHint.Wrapper, {
              left: a.a.createElement(a.a.Fragment, null, t[Se.B] ? a.a.createElement(km, { button: Se.B, label: t[Se.B] }) : null),
              right: a.a.createElement(
                a.a.Fragment,
                null,
                t[Se.LEFT] ? a.a.createElement(km, { button: Se.LEFT, label: t[Se.LEFT] }) : null,
                t[Se.RIGHT] ? a.a.createElement(km, { button: Se.RIGHT, label: t[Se.RIGHT] }) : null,
                t[Se.UP] ? a.a.createElement(km, { button: Se.UP, label: t[Se.UP] }) : null,
                t[Se.DOWN] ? a.a.createElement(km, { button: Se.DOWN, label: t[Se.DOWN] }) : null,
                t[Se.X] ? a.a.createElement(km, { button: Se.X, label: t[Se.X] }) : null,
                t[Se.Y] ? a.a.createElement(km, { button: Se.Y, label: t[Se.Y] }) : null,
                t[Se.START] ? a.a.createElement(km, { button: Se.START, label: t[Se.START] }) : null,
                t[Se.A] ? a.a.createElement(km, { button: Se.A, label: t[Se.A] }) : null
              ),
            })
          )
        : null;
    }
    (inputHint.Wrapper = function ({ safeZone: e, left: t, right: n }) {
      const r = fr(),
        o = e || r;
      return a.a.createElement(
        "div",
        { className: Vl.a.Custom, style: { height: `calc(4rem + ${o.bottom}px)` } },
        a.a.createElement(
          "div",
          { className: Vl.a.wrapper, style: { height: "4rem", paddingRight: o.right + "px", paddingLeft: o.left + "px" } },
          t && a.a.createElement("div", { className: Vl.a.leftContainer }, t),
          n && a.a.createElement("div", { className: Vl.a.rightContainer }, n)
        )
      );
    }),
      (inputHint.GamepadInputHint = km),
      (inputHint.KeyboardInputHint = Lm),
      (inputHint.Space = function ({ extraSpace: e }) {
        return Te() ? a.a.createElement(a.a.Fragment, null, a.a.createElement("div", { style: { height: "4rem" } }), e) : null;
      });
    function Mm(e, t, n, a, o = false) {
      const [i, l] = Object(r.useState)(false),
        [c, s] = Object(r.useState)(false),
        u = Object(r.useRef)(!0),
        d = Te(),
        f = Pr(),
        p = 4 * f,
        m = 8 * f,
        g = Object(r.useCallback)(
          Gl()(() => l(!0), 500, { leading: !0, trailing: false }),
          [l]
        ),
        h = Object(r.useCallback)(
          Gl()(() => l(false), 500, { leading: false, trailing: !0 }),
          [l]
        );
      return (
        Object(r.useEffect)(() => {
          let e = null;
          return (
            (e = setTimeout(() => {
              if (!a || !a.current || o) return;
              if (!d) return void (c && s(false));
              const e = window.innerHeight - a.current.getBoundingClientRect().bottom - m < p;
              s(e);
            }, 150)),
            () => {
              e && window.clearTimeout(e);
            }
          );
        }, [s, m, p, c, d, a, e, o]),
        Object(r.useEffect)(() => {
          let r = null,
            a = null,
            i = null,
            l = null;
          const s = e.current,
            d = t.current,
            p = n.current;
          if (!s || !d || !p) return;
          let m = false;
          const E = () => {
            const e = o ? s.scrollLeft : s.scrollTop,
              t = o ? window.innerWidth : window.innerHeight;
            if (m) {
              const t = s.getBoundingClientRect(),
                n = c ? 4 * f : 0,
                r = (o ? t.width : t.height) - n,
                a = o ? s.scrollWidth : s.scrollHeight,
                i = e / (a - (o ? t.width : t.height)),
                l = Math.max(40, (r / a) * r),
                u = `${i * (r - l - 2 * (o ? p.getBoundingClientRect().left - t.left : p.getBoundingClientRect().top - t.top))}px`;
              o
                ? ((d.style.left = `${100 * i}%`), (d.style.width = `${l}px`), (d.style.marginLeft = `${-l / 2}px`), (p.style.left = `${l / 2}px`), (p.style.right = `${l / 2}px`))
                : ((d.style.top = u), (d.style.height = `${l}px`), (p.style.bottom = `${n}px`)),
                (m = false);
            }
            c !== r && ((r = c), (m = !0)),
              e !== i && (u.current ? (u.current = false) : (g(), h()), (i = e), (m = !0)),
              t !== a && ((a = t), (m = !0)),
              (l = window.requestAnimationFrame(E));
          };
          return (
            E(),
            () => {
              l && window.cancelAnimationFrame(l), h.cancel(), g.cancel();
            }
          );
        }, [f, e, a, d, m, c, p, t, n, g, h, u, o]),
        i
      );
    }
    function Fm(e, t = false) {
      const [n, a] = Object(r.useState)(false);
      return (
        Object(r.useEffect)(() => {
          let n;
          const r = () => {
            const o = e.current;
            if (!o) return;
            if (0 === o.scrollHeight) return;
            const i = o.getBoundingClientRect();
            a(t ? o.scrollWidth > i.width : o.scrollHeight > i.height), (n = setTimeout(r, 1e3));
          };
          return r(), () => clearTimeout(n);
        }),
        n
      );
    }
    function Dm({ scrollingContainerRef: e, horizontal: t, floating: n, darkTheme: r }) {
      const { handlerRef: o, railRef: i } = Um(e, t),
        l = jm(e, i, t),
        c = Fm(e, t);
      Mm(e, o, i, void 0, t);
      const s = fn()({ [Hl.a.vertical]: !t, [Hl.a.horizontal]: t, [Hl.a.disabled]: !c, [Hl.a.floating]: n });
      return a.a.createElement(
        "div",
        { className: s, onClick: l },
        a.a.createElement("div", { className: fn()(Hl.a.mouseScrollbarTopDetail, { [Hl.a.horizontalIcon]: t, [Hl.a.dark]: r }) }),
        a.a.createElement("div", { className: Hl.a.mouseScrollbarBackground }),
        a.a.createElement(
          "div",
          { className: Hl.a.mouseScrollbarRail, ref: i },
          a.a.createElement("div", { className: Hl.a.mouseScrollbarHandler, ref: o }, a.a.createElement("div", { className: Hl.a.mouseScrollbarHandlerBottomBevel }))
        ),
        a.a.createElement("div", { className: fn()(Hl.a.mouseScrollbarBottomDetail, { [Hl.a.horizontalIcon]: t, [Hl.a.dark]: r }) })
      );
    }
    const jm = (e, t, n) =>
        Object(r.useCallback)(
          (r) => {
            const a = e.current,
              o = t.current;
            if (!a || !o) return;
            const i = o.getBoundingClientRect(),
              l = a.getBoundingClientRect();
            if (n) {
              const e = (r.clientX - i.left) / i.width;
              a.scrollLeft = e * (a.scrollWidth - l.width);
            } else {
              const e = (r.clientY - i.top) / i.height;
              a.scrollTop = e * (a.scrollHeight - l.height);
            }
          },
          [e, t, n]
        ),
      Um = (e, t = false) => {
        const n = Object(r.useRef)(null),
          a = Object(r.useRef)(null);
        return (
          Object(r.useEffect)(() => {
            const r = n.current,
              o = e.current,
              i = a.current;
            if (!r || !o || !i) return;
            let l = false,
              c = 0;
            const s = (e) => {
                l = !0;
                const n = r.getBoundingClientRect();
                c = t ? e.clientX - n.left : e.clientY - n.top;
              },
              u = () => {
                (l = false), (c = 0);
              },
              d = (e) => {
                if (!l) return;
                const n = i.getBoundingClientRect(),
                  a = r.getBoundingClientRect(),
                  s = o.getBoundingClientRect(),
                  u = t ? (e.clientX - c - n.left) / (n.width - a.width) : (e.clientY - c - n.top) / (n.height - a.height);
                t ? (o.scrollLeft = u * (o.scrollWidth - s.width)) : (o.scrollTop = u * (o.scrollHeight - s.height));
              },
              f = (e) => {
                e.preventDefault(), e.stopPropagation();
              };
            return (
              document.addEventListener("mousemove", d),
              document.addEventListener("mouseup", u),
              r.addEventListener("mousedown", s),
              r.addEventListener("click", f),
              () => {
                document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", u), r.removeEventListener("mousedown", s), r.removeEventListener("click", f);
              }
            );
          }, [n, e, a, t]),
          { handlerRef: n, railRef: a }
        );
      };
    var Bm = n(38),
      Hm = n.n(Bm);
    function zm({ scrollingContainerRef: e, horizontal: t, alwaysVisible: n, floating: o }) {
      const i = Object(r.useRef)(null),
        l = Object(r.useRef)(null),
        c = Object(r.useRef)(null),
        s = Gm(),
        u = Fm(e, t),
        d = !Mm(e, i, l, c, t) && !s && !n,
        f = fn()({ [Hm.a.vertical]: !t, [Hm.a.horizontal]: t, [Hm.a.floating]: o });
      return a.a.createElement(
        "div",
        { className: f, ref: c },
        a.a.createElement(
          "div",
          { className: Hm.a.scrollbarNonInteractiveRail, ref: l },
          a.a.createElement("div", {
            className: fn()(Hm.a.scrollbarHandlerNonInteractive, { [Hm.a.scrollbarHandlerNonInteractiveActive]: u && !d, [Hm.a.scrollbarHandlerNonInteractiveIdle]: !u || d }),
            ref: i,
          })
        )
      );
    }
    const Gm = () => {
      const [e, t] = Object(r.useState)(false);
      return (
        Object(r.useEffect)(() => {
          const e = () => t(!0),
            n = () => t(false);
          return (
            window.addEventListener("touchstart", e),
            window.addEventListener("touchend", n),
            () => {
              window.removeEventListener("touchstart", e), window.removeEventListener("touchend", n);
            }
          );
        }),
        e
      );
    };
    function Ym({ scrollingContainerRef: e, alwaysVisible: t, horizontal: n = false, floating: r, darkTheme: o }) {
      return be()
        ? a.a.createElement(Dm, { horizontal: n, scrollingContainerRef: e, floating: r, darkTheme: o })
        : a.a.createElement(zm, { horizontal: n, scrollingContainerRef: e, alwaysVisible: t, floating: r });
    }
    var Km = n(23),
      Wm = n.n(Km);
    const Vm = ({ children: e, loading: t, scrollingContainerRef: n, renderTracker: r, alwaysVisible: o, horizontal: i = false, floating: l, darkTheme: c }) =>
      a.a.createElement(
        "div",
        { className: Wm.a.wrapper },
        a.a.createElement(Xm, { hidden: !t, renderTracker: r }),
        a.a.createElement(
          "div",
          { className: fn()(i ? Wm.a.ScrollViewHorizontal : Wm.a.ScrollView, Wm.a.safetyPaddings, { [Wm.a.hidden]: t }) },
          e,
          !t && a.a.createElement(Ym, { floating: l, horizontal: i, scrollingContainerRef: n, alwaysVisible: o, darkTheme: c })
        )
      );
    var $m = ({
      children: e,
      loading: t,
      renderTracker: n,
      gamepadIndex: o,
      focusableIfScrollable: i,
      scrollIntoViewAlign: l = "center",
      scrollIntoView: c = !0,
      scrollIntoViewSpeedFactor: s,
      defaultFocusedChildBehavior: u,
      autofocusFocusable: d,
      horizontal: f = false,
      innerRef: p,
      floating: m,
      darkTheme: g,
    }) => {
      const h = Object(r.useRef)(null),
        E = p || h,
        [v, b] = Object(r.useState)(false),
        y = Fm(E),
        T = f ? cn : qi;
      return a.a.createElement(
        Vm,
        { floating: m, horizontal: f, scrollingContainerRef: E, loading: t, renderTracker: n, alwaysVisible: v, darkTheme: g },
        a.a.createElement(
          "div",
          { className: fn()(f ? Wm.a.horizontalContent : Wm.a.content, Wm.a.contentPaddings, Wm.a.safetyPaddings), ref: E },
          a.a.createElement(
            T,
            { scrollIntoView: c, scrollIntoViewAlign: l, scrollWithAnalog: !0, scrollIntoViewSpeedFactor: s, gamepadIndex: o, defaultFocusedChildBehavior: u, scrollRef: E },
            e,
            y && i ? a.a.createElement(Qm, { autofocus: !!d, onFocusChanged: b }) : null
          )
        )
      );
    };
    function Xm({ hidden: e, renderTracker: t }) {
      return a.a.createElement(Fi, { visible: !e, timeout: 500 }, (e) =>
        a.a.createElement(
          a.a.Fragment,
          null,
          "exited" !== e && a.a.createElement("div", { className: fn()(Wm.a.spinnerPlaceholder, { [Wm.a.hidden]: "exiting" === e }) }, a.a.createElement(Yi, null)),
          t && t("exited" === e)
        )
      );
    }
    const qm = () => {},
      Qm = ({ autofocus: e, onFocusChanged: t }) => {
        const n = Object(r.useRef)(null);
        return Oo({ index: 0, autofocus: e, onFocusChanged: t }, qm, n), null;
      };
    function Zm({ children: e, collapsed: t = false, floating: n = false, onDismiss: o, gamepadIndex: i, align: l = "left" }) {
      const c = Object(r.useRef)(null),
        s = qr({ scrollWithAnalog: !0, scrollIntoView: !0, defaultFocusedChildBehavior: "remember", index: i }, c),
        u = Object(r.useCallback)((e) => {
          e.stopPropagation();
        }, []),
        d = a.a.createElement(
          s,
          null,
          a.a.createElement(
            "div",
            {
              ref: c,
              onClick: u,
              className: fn()({
                [Ul.a.collapsed]: t,
                [Ul.a.collapsableSideBar]: "left" === l,
                [Ul.a.collapsableSideBarDark]: "right" === l,
                [Ul.a.borderRight]: "left" === l,
                [Ul.a.borderLeft]: "right" === l,
              }),
            },
            a.a.createElement($m, { gamepadIndex: 0 }, e)
          )
        );
      return n
        ? a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement("div", { className: fn()({ [Ul.a.floatingRight]: "right" === l, [Ul.a.floatingLeft]: "left" === l, [Ul.a.collapsed]: t }) }, d),
            !t && a.a.createElement(obscureScreen, { onClick: o })
          )
        : d;
    }
    function PageLayout({
      children: e,
      collapsedLeftSidebar: t = !0,
      collapsedRightSidebar: n = !0,
      onToggleCollapsedLeftSidebar: o = eg,
      onToggleCollapsedRightSidebar: i = eg,
      left: l,
      center: c,
      right: s,
      leftSidebar: u,
      rightSidebar: d,
      footer: f,
    }) {
      const p = fr(),
        m = ((e = 100) => {
          const t = Pr(),
            n = Ar(),
            a = Object(r.useCallback)(() => Ir(window.innerWidth, n) < e * t, [t, e, n]),
            [o, i] = Object(r.useState)(a());
          return (
            Object(r.useEffect)(() => {
              const e = () => i(a());
              return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
            }, [a]),
            o
          );
        })();
      return a.a.createElement(
        qi,
        { gamepadIndex: 0 },
        a.a.createElement(
          "div",
          { className: Zi.a.NavigationBarLayout },
          a.a.createElement(
            cn,
            { gamepadIndex: 0 },
            a.a.createElement(tl, {
              left: a.a.createElement(a.a.Fragment, null, l, m && u && a.a.createElement(PageLayout.MenuButton, { selected: !t, onClick: o, gamepadIndex: 0 })),
              center: c,
              right: a.a.createElement(a.a.Fragment, null, s, d && a.a.createElement(PageLayout.MenuButton, { type: "filter", selected: !n, onClick: i, gamepadIndex: 1 })),
              safeZone: p,
            })
          ),
          a.a.createElement(
            cn,
            { gamepadIndex: 1, defaultFocusedChildBehavior: n ? "first" : "last" },
            a.a.createElement(
              "div",
              { className: Zi.a.NavigationBarLayoutChildrenWrapper },
              a.a.createElement(
                "div",
                { className: Zi.a.NavigationBarLayoutChildren, style: { left: p.left + "px", right: p.right + "px", bottom: p.bottom + "px" } },
                u &&
                  a.a.createElement(
                    qi,
                    { gamepadIndex: 0, disabled: t && m },
                    a.a.createElement(Zm, { align: "left", onDismiss: o, floating: m, collapsed: m && t, gamepadIndex: 0 }, u)
                  ),
                a.a.createElement(qi, { gamepadIndex: 1, disabled: !t && m && !!u }, e),
                d && a.a.createElement(qi, { gamepadIndex: 2, disabled: n }, a.a.createElement(Zm, { align: "right", onDismiss: i, floating: m, collapsed: n, gamepadIndex: 0 }, d))
              )
            ),
            f
          )
        )
      );
    }
    (PageLayout.BackButton = function ({ onClick: e, disabled: t }) {
      const n = Te(),
        { t: r } = ra("BackButton");
      return Qr({ shortcut: Se.B, inputLegend: r(".back") }, e), n ? null : a.a.createElement(backButton, { onClick: e, disabled: t });
    }),
      (PageLayout.MenuButton = function ({ onClick: e, selected: t, type: n = "hamburger", gamepadIndex: r }) {
        const { t: o } = ra("MenuButton");
        return a.a.createElement(
          a.a.Fragment,
          null,
          "hamburger" === n && a.a.createElement(Dl, { buttonType: Se.START, inputLegend: o(".menu"), onClick: e }),
          a.a.createElement(
            Do,
            {
              narrationText: false,
              className: fn()(Fl.a.burger, { [Fl.a.selected]: t }),
              classNamePressed: Fl.a.touchedDown,
              classNameHovered: Fl.a.highlighted,
              classNameFocused: Fl.a.focused,
              gamepadIndex: r,
              inputLegend: o(".toggle"),
              onClick: e,
            },
            a.a.createElement(image, { className: Fl.a.icon, filtering: "point", src: "filter" === n ? Rl.a : Al.a })
          )
        );
      });
    const eg = () => {},
      tg = () => {
        const e = Pr(),
          t = Ar(),
          n = Object(r.useCallback)(() => {
            const n = Ir(window.innerWidth, t);
            return n < 76 * e ? "narrow" : n < 128 * e ? "tablet" : "desktop";
          }, [e, t]),
          [a, o] = Object(r.useState)("desktop");
        return (
          Object(r.useEffect)(() => {
            const e = () => o(n());
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
          }, [n]),
          a
        );
      };
    var ng = n(32),
      rg = n.n(ng);
    function ag({ children: e, noGutters: t = false }) {
      const n = tg();
      return a.a.createElement(
        "div",
        { className: fn()(rg.a.grid, { [rg.a.gridNarrow]: "narrow" === n, [rg.a.gridTablet]: "tablet" === n, [rg.a.gridGutters]: "desktop" === n || !t }) },
        e
      );
    }
    (ag.Column = (e) => {
      const { disabled: t, defaultFocusedChildAlias: n, defaultFocusedChildBehavior: r, wideSize: o, narrowSize: i } = e,
        l = fn()(rg.a[`size${o}`], rg.a[`sizeNarrow${i}`]),
        c = fn()(rg.a.column, l);
      return "gamepadIndex" in e
        ? a.a.createElement(
            qi,
            { gamepadIndex: e.gamepadIndex, disabled: t, defaultFocusedChildAlias: n, defaultFocusedChildBehavior: r },
            a.a.createElement("div", { className: c }, e.children)
          )
        : a.a.createElement("div", { className: c });
    }),
      (ag.Row = function ({ children: e, gamepadIndex: t, disabled: n, defaultFocusedChildAlias: r, defaultFocusedChildBehavior: o, fullHeight: i }) {
        return a.a.createElement(
          cn,
          { gamepadIndex: t, disabled: n, defaultFocusedChildAlias: r, defaultFocusedChildBehavior: o },
          a.a.createElement("div", { className: fn()(rg.a.row, { [rg.a.rowFullHeight]: i }) }, e)
        );
      });
    function og({ children: e, speed: t = 3 }) {
      const [n, o] = Object(r.useState)(!0),
        [i, l] = Object(r.useState)(false),
        c = Object(r.useRef)([]),
        s = Object(r.useCallback)(
          (e) => {
            l(!0), c.current.push(e);
          },
          [l]
        );
      return (
        Object(r.useEffect)(() => {
          if (!i) return;
          const e = () => {
            const r = c.current;
            r.length > 0 && (n = window.requestAnimationFrame(e));
            for (let e = 0; e < t; e++) {
              const e = r.shift();
              e && e(false);
            }
            0 === r.length && (o(false), l(false));
          };
          let n = window.requestAnimationFrame(e);
          return () => {
            window.cancelAnimationFrame(n);
          };
        }, [i, t]),
        a.a.createElement(ug.Provider, { value: n }, a.a.createElement(sg.Provider, { value: s }, e))
      );
    }
    function ig({ children: e }) {
      const [t, n] = Object(r.useState)(!0),
        o = Object(r.useContext)(sg);
      return Object(r.useEffect)(() => o(n), [o]), t ? null : a.a.createElement(a.a.Fragment, null, e());
    }
    function lg() {
      return Object(r.useContext)(ug);
    }
    function cg() {
      return Object(r.useContext)(dg);
    }
    const sg = Object(r.createContext)(() => {}),
      ug = Object(r.createContext)(false),
      dg = Object(r.createContext)(false);
    function fg({ paused: e, children: t }) {
      const n = Object(r.useRef)(!e);
      return (
        Object(r.useEffect)(() => {
          e || (n.current = !0);
        }, [e]),
        a.a.createElement(dg.Provider, { value: !n.current && e }, t)
      );
    }
    const pg = ({ children: e, text: t, shouldSkipParent: n = [] }) => {
      const r = ha()(t, n);
      return a.a.createElement(ga, { value: { narrationId: r, text: t } }, e);
    };
    const mg = ig;
    function gg({
      header: e,
      renderItem: t,
      renderSectionHeader: n,
      data: r,
      gamepadIndex: o,
      itemSeparator: i,
      sectionSeparator: l,
      loading: c,
      footer: s,
      keyExtractor: u,
      renderTracker: d,
    }) {
      const f = cg(),
        p = (function (e, t) {
          const n = [];
          for (let r = 0; r < e.length; r++) t(e[r], r, e) && n.push(e[r]);
          return n;
        })(r, (e) => e.data.length > 0),
        { t: m } = ra("SectionList");
      return a.a.createElement(
        og,
        null,
        a.a.createElement(
          hg,
          { loading: c, gamepadIndex: o, renderTracker: d },
          e && a.a.createElement(a.a.Fragment, null, e, i),
          genericMap(f ? [] : p, (e, r) => {
            const o = n(e.title, e.id);
            return a.a.createElement(
              qi,
              { gamepadIndex: r, key: e.id },
              a.a.createElement(
                pg,
                { text: m(".groupNarration", [e.title, `${r + 1}`, `${p.length}`]) },
                r > 0 && l,
                o,
                i,
                genericMap(e.data, (n, o) =>
                  a.a.createElement(mg, { key: u(n) }, () =>
                    a.a.createElement(a.a.Fragment, null, o > 0 && i, t({ item: n, index: o, sectionIndex: r, listLength: e.data.length }))
                  )
                )
              )
            );
          }),
          s
        )
      );
    }
    function hg({ loading: e, gamepadIndex: t, children: n, renderTracker: r }) {
      const o = lg(),
        i = cg(),
        l = e || o || i;
      return a.a.createElement($m, { loading: l, gamepadIndex: t, renderTracker: r }, n);
    }
    var Eg = n(14),
      vg = n.n(Eg);
    function bg({ children: e, variant: t = "default" }) {
      return a.a.createElement(
        "div",
        { className: vg.a.tagHeaderWrapper },
        a.a.createElement(
          text,
          { variant: "captionShort", color: "black" },
          a.a.createElement(
            "div",
            { className: fn()(vg.a.header, { [vg.a.inProgress]: "inProgress" === t, [vg.a.completed]: "completed" === t, [vg.a.default]: "default" === t }) },
            a.a.createElement("div", { className: vg.a.innerHeader }, e),
            a.a.createElement("div", {
              className: fn()(vg.a.filler, { [vg.a.inProgressFiller]: "inProgress" === t, [vg.a.completedFiller]: "completed" === t, [vg.a.defaultFiller]: "default" === t }),
            })
          )
        ),
        a.a.createElement("div", { className: fn()(vg.a.tag, { [vg.a.inProgress]: "inProgress" === t, [vg.a.completed]: "completed" === t, [vg.a.default]: "default" === t }) })
      );
    }
    const yg = ig;
    function Tg({
      loading: e,
      emptyMessage: t,
      header: n,
      renderItem: r,
      data: o,
      gamepadIndex: i,
      scrollIntoViewAlign: l,
      scrollIntoViewSpeedFactor: c,
      itemSeparator: s,
      footer: u,
      keyExtractor: d,
      renderTracker: f,
      horizontal: p = false,
    }) {
      const m = cg();
      return a.a.createElement(
        og,
        null,
        a.a.createElement(
          _g,
          { loading: e, gamepadIndex: i, scrollIntoViewAlign: l, scrollIntoViewSpeedFactor: c, renderTracker: f, horizontal: p },
          n && a.a.createElement(a.a.Fragment, null, n, s),
          !m &&
            (o.length > 0
              ? genericMap(o, (e, t) => a.a.createElement(yg, { key: d(e) }, () => a.a.createElement(a.a.Fragment, null, t > 0 && s, r({ item: e, index: t, listLength: o.length }))))
              : a.a.createElement(yg, null, () => t)),
          u && a.a.createElement(a.a.Fragment, null, s, u)
        )
      );
    }
    function _g({ loading: e, gamepadIndex: t, children: n, scrollIntoViewAlign: r, scrollIntoViewSpeedFactor: o, renderTracker: i, horizontal: l }) {
      const c = lg(),
        s = cg(),
        u = e || c || s;
      return a.a.createElement($m, { loading: u, gamepadIndex: t, scrollIntoViewAlign: r, scrollIntoViewSpeedFactor: o, renderTracker: i, horizontal: l }, n);
    }
    var xg = n(18),
      wg = n.n(xg);
    const Sg = ({ interruptible: e = !0, playInBackground: t = false, profanityFilterContext: n = { outOfGame: !0, inGame: !0 }, required: a = false } = {}) => {
      const o = Object(r.useRef)(),
        { readText: i } = Object(r.useContext)(Kn);
      return {
        narrateText: Object(r.useCallback)(
          (r) => {
            o.current = setTimeout(() => {
              i(r, n, e, a, t);
            }, 200);
          },
          [i, n, e, a, t]
        ),
        preventNarrateText: Object(r.useCallback)(() => {
          o.current && clearTimeout(o.current);
        }, []),
      };
    };
    function Cg({ tabs: e, gamepadIndex: t, gamepadAliasNamespace: n, value: r, onChange: o, enableGamepadShortcuts: i }) {
      return a.a.createElement(
        cn,
        { gamepadIndex: t, defaultFocusedChildBehavior: "remember", defaultFocusedChildAlias: kg(n, r) },
        a.a.createElement(
          "div",
          { className: wg.a.tabBar },
          e.map((e, t) =>
            a.a.createElement(
              Ig,
              { gamepadAliasNamespace: n, narrationText: e.narrationText, key: `${e.value}`, index: t, selected: e.value === r, onChange: o, value: e.value },
              e.label
            )
          ),
          i && a.a.createElement(Og, { value: r, onChange: o, tabs: e })
        )
      );
    }
    const Og = function ({ value: e, tabs: t, onChange: n }) {
      const r = Te(),
        o = (function (e, t) {
          return e.findIndex(({ value: e }) => e === t);
        })(t, e);
      return a.a.createElement(
        a.a.Fragment,
        null,
        a.a.createElement(Dl, {
          buttonType: Se.LEFT_BUMPER,
          onClick: () => {
            const e = o - 1;
            e > -1 && n(Ng(t, e), !0);
          },
        }),
        a.a.createElement(Dl, {
          buttonType: Se.RIGHT_BUMPER,
          onClick: () => {
            const e = o + 1;
            e < t.length && n(Ng(t, e), !0);
          },
        }),
        r &&
          a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement("div", { className: wg.a.hintLeft }, a.a.createElement(Cm, { button: Se.LEFT_BUMPER })),
            a.a.createElement("div", { className: wg.a.hintRight }, a.a.createElement(Cm, { button: Se.RIGHT_BUMPER }))
          )
      );
    };
    function Ig({ gamepadAliasNamespace: e, children: t, selected: n, onChange: r, value: o, index: i, narrationText: l }) {
      const { t: c } = ra("TabBar"),
        { narrateText: s } = Sg();
      return a.a.createElement(
        Do,
        {
          className: n ? `${wg.a.tab} ${wg.a.tabPressed}` : wg.a.tab,
          classNameFocused: wg.a.tabFocused,
          classNameHovered: n ? void 0 : wg.a.tabHovered,
          classNamePressed: n ? void 0 : wg.a.tabPressed,
          onClick: () => {
            s(c(".selected") + " . " + l), r(o, false);
          },
          gamepadAlias: kg(e, o),
          gamepadIndex: i,
          inputLegend: !n && c(".open"),
          soundEffectPressed: "random.click",
          narrationText: void 0 !== l && l + " . " + c(n ? ".selected" : ".notSelected"),
        },
        a.a.createElement("div", { className: wg.a.outerTab, style: {} }, a.a.createElement(Co, null, t)),
        a.a.createElement("div", { className: wg.a.tabEdge }),
        n && a.a.createElement("div", { className: wg.a.indicator })
      );
    }
    function Ng(e, t) {
      return e[t].value;
    }
    function kg(e, t) {
      return `tab-bar-${e}-${t}`;
    }
    var Pg = n(61),
      Rg = n.n(Pg);
    const Lg = () => {};
    function DarkGrayBox({ autofocus: e, gamepadIndex: t, title: n, text: r, imgSrc: o, narrationText: i }) {
      return a.a.createElement(
        Do,
        { className: Rg.a.EmptyStateMessage, classNameHovered: "", classNameFocused: Rg.a.focused, gamepadIndex: t, inputLegend: "", narrationText: i, autofocus: e, onClick: Lg },
        a.a.createElement(text, { variant: "secondaryButton", color: "white", align: "center" }, n),
        o
          ? a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(ia, { size: 4 }),
              a.a.createElement(image, { src: o, className: Rg.a.completedIllustration }),
              a.a.createElement(ia, { size: 4 })
            )
          : null,
        a.a.createElement(text, { variant: "captionShort", color: "inherit", align: "center" }, r)
      );
    }
    const AchievementsMenu = ({ component: e, status: t }) => {
        const n = nn().status === t,
          r = vn();
        return a.a.createElement(
          En,
          { active: n && r },
          a.a.createElement(
            cn,
            { gamepadIndex: 0, disabled: !n },
            a.a.createElement(pn, {
              visible: n,
              contentComponent: e,
              unmountOnExit: false,
              renderTracker: (e) => a.a.createElement(_n, { type: "contentful", renderingCompleted: e }),
            })
          )
        );
      },
      AchievementsNavBar = () => {
        const { t: e } = ra("Achievements"),
          t = getRouter(),
          n = nn(),
          r = [
            { label: "info", value: "info", narrationText: e(".narration.tab", [e(".all"), "2", "4"]) },
            { label: "components", value: "components", narrationText: e(".narration.tab", [e(".locked"), "3", "4"]) },
            { label: "logs", value: "logs", narrationText: e(".narration.tab", [e(".completed"), "4", "4"]) },
            { label: "tests", value: "tests", narrationText: e(".narration.tab", [e(".completed"), "4", "4"]) },
            { label: "tests2", value: "teststwo", narrationText: e(".narration.tab", [e(".completed"), "4", "4"]) },
           // { label: "modals", value: "modal", narrationText: e(".narration.tab", [e(".completed"), "4", "4"]) },
            
          ];
        return a.a.createElement(Cg, {
          gamepadAliasNamespace: "achievement-screen",
          speechCurrentIndexOffset: 1,
          speechTotalTabCount: r.length + 1,
          gamepadIndex: 0,
          value: n.status ? n.status : "all",
          onChange: (e, n) => {
            n ? t.replaceWithPreviousFocus(`/achievements/${"all" !== e ? e : ""}`) : t.replaceKeepingFocus(`/achievements/${"all" !== e ? e : ""}`);
          },
          tabs: r,
          enableGamepadShortcuts: !0,
        });
      },
      InfoTab = () => {
        const router = getRouter();
        const { t: e } = ra("Achievements"),
          t = Pt(Da),
          n = Pt(Ma),
          r = n && 0 === n.length,
          o = ko();
      
        if (!n) return null;

        // var r = n(25),
        //  a = n(0);
        //  n = Object(r.a)("core.featureFlags");

        // var t = Object(n(25).a)("vanilla.toast");

        const i = e(".narration.tab", [e(".locked"), "3", "4"]) + " . " + e(".narration.selected");
        //  const achievements = te("vanilla.achievements");
        return a.a.createElement(
          pg,
          { text: i },
          a.a.createElement(text, { variant: "header4A", color: "white" }, "Window Properties"),
          a.a.createElement(text, { variant: "captionShort", color: "white" }, "Window Location: " + window.location.href),
          a.a.createElement(text, { variant: "captionShort", color: "white" }, "Window Hostname&Port: " + window.location.host),
          a.a.createElement(text, { variant: "captionShort", color: "white" }, "BedrockProvidedCohtmlJS: " + window.__bedrockProvidedCohtmljs),
          a.a.createElement(text, { variant: "captionShort", color: "white" }, "window.__html: " + window.__html),
          a.a.createElement(text, { variant: "captionShort", color: "white" }, "window.engine: " + JSON.stringify(window.engine).replace(",", ",\n")),
          a.a.createElement(text, { variant: "captionShort", color: "white" }, "Navigator: " + JSON.stringify(window.Navigator)),
           a.a.createElement(text, { variant: "captionShort", color: "white" }, "window.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: " + JSON.stringify(window.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)),
          a.a.createElement(text, { variant: "header4A", color: "white" }, "Other Properties"),
          a.a.createElement(text, { variant: "captionShort", color: "white" }, "Router Object: " + JSON.stringify(router)),
          
        // a.a.createElement(text, { variant: "captionShort", color: "white" }, "[Test - may change]: " + JSON.stringify(vanillaResourcePacks),
      //    a.a.createElement(text, { variant: "captionShort", color: "white" }, "Console Logs: " + JSON.stringify(console.everything)),
          //a.a.createElement(text, { variant: "captionShort", color: "white" }, "Test: "+JSON.stringify(achievements) ),
          a.a.createElement(text, { variant: "header4A", color: "white" }, "Manage"),
          a.a.createElement(
            button,
            {
              delayedClick: !0,
              onClick: () => {
                location.href = location.href.replace("index", "index-van");
              },
              gamepadIndex: 0,
              autofocus: !0,
              inputLegend: "inputlegendtext",
              variant: "primary",
              soundEffectPressed: "random.click",
            },
            "Reload Page"
          ),
          a.a.createElement(
            button,
            {
              delayedClick: !0,
              onClick: () => {
                console.log("Button");
              },
              gamepadIndex: 0,
              autofocus: !0,
              inputLegend: "inputlegendtext",
              variant: "secondary",
              soundEffectPressed: "random.click",
            },
            "add to console log"
          ),
         
        );
      },
      ModalTab = () => {
        const router = getRouter();
        const { t: e } = ra("Achievements"),
          t = Pt(Da),
          n = Pt(Ma),
          r = n && 0 === n.length,
          o = ko();
      
        if (!n) return null;

        // var r = n(25),
        //  a = n(0);
        //  n = Object(r.a)("core.featureFlags");

        // var t = Object(n(25).a)("vanilla.toast");

        const i = e(".narration.tab", [e(".locked"), "3", "4"]) + " . " + e(".narration.selected");
        //  const achievements = te("vanilla.achievements");
        return a.a.createElement(
          pg,
          { text: i },
          a.a.createElement(Modal, { content: "Modal Content", title: "Modal Title", animationOrigin: "center", showCopyright: true, showVersion:true, version: "Version" }, "hsdfjhsdkfj")
         
        );
      },
      ComponentsTab = () => {
        const { t: e } = ra("Achievements"),
          t = Pt(Da),
          n = Pt(Ma),
          r = n && 0 === n.length,
          o = ko();
        if (!n) return null;
        const i = e(".narration.tab", [e(".locked"), "3", "4"]) + " . " + e(".narration.selected");
        return a.a.createElement(
          pg,
          { text: i },
          a.a.createElement("br"),
          a.a.createElement(
            button,
            { delayedClick: !0, onClick: r, gamepadIndex: 0, autofocus: !0, inputLegend: "inputlegendtext", variant: "primary", soundEffectPressed: "random.click" },
            "Primary Button"
          ),
          a.a.createElement("br"),
          a.a.createElement(
            button,
            { delayedClick: !0, onClick: r, gamepadIndex: 0, autofocus: !0, inputLegend: "inputlegendtext", variant: "secondary", soundEffectPressed: "random.click" },
            "Secondary Button"
          ),
          a.a.createElement("br"),
          a.a.createElement(
            button,
            { delayedClick: !0, onClick: r, gamepadIndex: 0, autofocus: !0, inputLegend: "inputlegendtext", variant: "destructive", soundEffectPressed: "random.click" },
            "Destructive Button"
          ),
          a.a.createElement("br"),
          a.a.createElement(
            button,
            { delayedClick: !0, onClick: r, gamepadIndex: 0, autofocus: !0, inputLegend: "inputlegendtext", variant: "default", soundEffectPressed: "random.click" },
            "Default Button"
          ),
          a.a.createElement("br"),
          a.a.createElement(
            button,
            { delayedClick: !0, onClick: r, gamepadIndex: 0, autofocus: !0, inputLegend: "inputlegendtext", variant: "accordion", soundEffectPressed: "random.click" },
            "Accordion Button"
          ),
          a.a.createElement("br"),
          a.a.createElement(
            button,
            { delayedClick: !0, onClick: r, gamepadIndex: 0, autofocus: !0, inputLegend: "inputlegendtext", variant: "invalid", soundEffectPressed: "random.click" },
            "Invalid variant parameter"
          ),
            
          a.a.createElement(
            inputHint,
            {shouldDisplayKeyboard: true},
            "test"
          ),
          a.a.createElement(ig, {value: "test"}, "test"),
          a.a.createElement(achievementListItem, {
            gamepadAlias: `achievement-${e}-${t}`,
            autofocus: r,
            onClick: () => {
             
            
            },
            index: null,
            listLength: 20,  grid: "hRgvX",
            gridGutters: "_1uo0R",
            gridTablet: "_1FPIf",
            gridNarrow: "_1xs_O",
            row: "_2D-VK",
            gamepadIndex: null,
            name: "Go",
            description: "AchievementistItem",
            gamerScore: 0,
            isLocked: false,
            progress: 100,
            image: null,
            showReward: false,
            rewardImage: null,
          }),
          a.a.createElement(
            createIcon, {
              type: "arrowUp",
              focused: true
            },
            "text"
          ),
          a.a.createElement(
            backButton,
            {},
            "text"
          ),
         
        );
      },
      TestsTwoTab = () => {
        const { t: e } = ra("Achievements"),
          t = Pt(Da),
          n = Pt(Ma),
          r = n && 0 === n.length,
          o = ko();
        if (!n) return null;
     //   const blah = n(23);
        const i = e(".narration.tab", [e(".locked"), "3", "4"]) + " . " + e(".narration.selected");
        return a.a.createElement(
          pg,
          { text: i },
        
          a.a.createElement(text, { variant: "header4A", color: "white" }, "Generic"),
          a.a.createElement(
            button,
            {
              delayedClick: !0,
              onClick: () => {
                document.getElementById("root").appendChild(a.a.createElement(Modal, { content: "Yo this is a modal!" }, "hsdfjhsdkfj"));
              },
              gamepadIndex: 0,
              autofocus: !0,
              inputLegend: "inputlegendtext",
              variant: "secondary",
              soundEffectPressed: "random.click",
            },
            "Attempt to add a modal"
          ),
        
          a.a.createElement(
            button,
            {
              delayedClick: !0,
              onClick: () => {
               potentialTriggerKeyboard();
                //const La =
              },
              gamepadIndex: 0,
              autofocus: !0,
              inputLegend: "inputlegendtext",
              variant: "secondary",
              soundEffectPressed: "random.click",
            },
            "Activate handler for core:keyboard:changed, perhaps?"
          ),
          a.a.createElement(
            button,
            {
              delayedClick: !0,
              onClick: () => {
                window.engine.trigger("core:exception");
                window.engine.trigger("Error", "Error");
              },
              gamepadIndex: 0,
              autofocus: !0,
              inputLegend: "inputlegendtext",
              variant: "secondary",
              soundEffectPressed: "random.click",
            },
            "Throw Error"
          ),
          a.a.createElement(
            button,
            {
              delayedClick: !0,
              onClick: () => {
                window.location.href = window.location.href.replace("index", "testing/craft-engine/index")
              },
              gamepadIndex: 0,
              autofocus: !0,
              inputLegend: "inputlegendtext",
              variant: "secondary",
              soundEffectPressed: "random.click",
            },
            "Attempt to run Craft Engine"
          ),
          a.a.createElement(
            button,
            {
              delayedClick: !0,
              onClick: () => {
                window.location.href = window.location.href.replace("index", "testing/threejs/index")
              },
              gamepadIndex: 0,
              autofocus: !0,
              inputLegend: "inputlegendtext",
              variant: "secondary",
              soundEffectPressed: "random.click",
            },
            "Attempt to run a Three.JS proj"
          ),
          a.a.createElement(
            button,
            {
              delayedClick: !0,
              onClick: () => {
                window.location.href = window.location.href.replace("index", "testing/launcher/index")
              },
              gamepadIndex: 0,
              autofocus: !0,
              inputLegend: "inputlegendtext",
              variant: "secondary",
              soundEffectPressed: "random.click",
            },
            "Attempt to open MC launcherUI"
          ),
        

          a.a.createElement(text, { variant: "header4A", color: "white" }, "Facets"),
          a.a.createElement(achievementListItem, {
            gamepadAlias: `achievement-${e}-${t}`,
            autofocus: r,
            onClick: () => {
              var engine = window.engine;
              var facetInterface = undefined;
             // engine.on("facet:updated:vanilla.toast", function(interface) {
             //   facetInterface= interface;
             // });
              engine.trigger("facet:request", ["vanilla.toast","vanilla.createNewWorld"]);
              facetInterface.show("tets", "test");
            },
            index: null,
            listLength: 20,
            gamepadIndex: null,
            name: "Go",
            description: "[Facet Test]",
            gamerScore: 0,
            isLocked: false,
            progress: 100,
            image: null,
            showReward: false,
            rewardImage: null,
          }),
          a.a.createElement("textarea"),
          a.a.createElement(achievementListItem, {
            gamepadAlias: `achievement-${e}-${t}`,
            autofocus: r,
            onClick: () => {
              var engine = window.engine;
              engine.trigger(document.getElementsByTagName("textarea")[0].value);
            },
            index: null,
            listLength: 20,
            gamepadIndex: null,
            name: "Go",
            description: "Attempt to trigger given facet (calls engine.trigger on the object window.engine provides)",
            gamerScore: 0,
            isLocked: false,
            progress: 100,
            image: null,
            showReward: false,
            rewardImage: null,
          }),
          a.a.createElement(text, { variant: "header4A", color: "white" }, "Translations"),
          a.a.createElement(text, { variant: "paragraphs", color: "white" }, "prefix [hbui. seems to be implied]"),
          a.a.createElement("textarea"),
          a.a.createElement(text, { variant: "paragraphs", color: "white" }, "key"),
          a.a.createElement("textarea"),
          a.a.createElement(achievementListItem, {
            gamepadAlias: `achievement-${e}-${t}`,
            autofocus: r,
            onClick: () => {
              var engine = window.engine;
              //var { t: translation } = ra(document.getElementsByTagName("textarea")[1].value);
              //document.getElementsByTagName("h6")[0].innerHTML = translation(document.getElementsByTagName("textarea")[2].value);
              const { t: e } = ra("Achievements")
              document.getElementsByTagName("h6")[0].innerHTML = e(".completedEmptyTitle");
             
            },
            index: null,
            listLength: 20,
            gamepadIndex: null,
            name: "Go",
            description: "Get Translation",
            gamerScore: 0,
            isLocked: false,
            progress: 100,
            image: "assets/cheats-icon-aa18c.png",
            showReward: false,
            rewardImage: null,
          }),
          a.a.createElement("h3", {className:"_15JVn"}, "==result data goes here=="),
          a.a.createElement(
            inputHint,
            {shouldDisplayKeyboard: true},
            "test"
          ),
           
        );
      },
      TestsTab = () => {
        const router = getRouter(),
          g = Ta("vanilla.toast");

        const { t: e } = ra("Achievements"),
          t = Pt(Da),
          n = Pt(Ma),
          r = n && 0 === n.length,
          o = ko();
        if (!n) return null;
        const i = e(".narration .tab", [e(".locked"), "3", "4"]) + " . " + e(".narration.selected");

        return a.a.createElement(
          pg,
          { text: i },
          a.a.createElement(text, { variant: "header4A", color: "white" }, "Generic"),
          a.a.createElement("img", {
            style: { width: "100px", height: "100px", padding: "10px 10px" },
            src: "pack://textures/blocks/chest_front.png?filtering=point",
            alt: "image",
          }),
          a.a.createElement(text, { variant: "captionShort", color: "white" }, "" + g.type),
          //a.a.createElement("textarea"),
          // a.a.createElement(achievementListItem, {
          //   gamepadAlias: `achievement-${e}-${t}`,
          //   autofocus: r,
          //   onClick: () => {
          //     var engine = window.engine;
          //     //engine.trigger(document.getElementsByTagName("textarea")[1].value);
          //     document.getElementsByTagName("h6")[0].innerHTML = window.n_thingy[parseInt(document.getElementsByTagName("textarea")[0].value)];
          //   },
          //   index: null,
          //   listLength: 20,
          //   gamepadIndex: null,
          //   name: "Go",
          //   description: "Get the N result for index that is typed in.",
          //   gamerScore: "Available: "+window.n_thingy.length,
          //   isLocked: false,
          //   progress: 100,
          //   image: null,
          //   showReward: false,
          //   rewardImage: null,
          // }),
          // a.a.createElement("h3", null, "==result data goes here=="),
          // a.a.createElement("p", {class:"_15JVn"}, ""+JSON.stringify(window.n_thingy)),
          //   a.a.createElement("img", { style: { width: "100px", height: "100px", padding: "10px 10px" }, src: "id://minecraft:obsidian", alt: "image" }),
          a.a.createElement(text, { variant: "header4A", color: "white" }, "Routes"),
          a.a.createElement(text, { variant: "captionShort", color: "white" }, "Navigate to a route of your choice"),
          a.a.createElement("textarea", {className: ""}),
          a.a.createElement(achievementListItem, {
            gamepadAlias: `achievement-${e}-${t}`,
            autofocus: r,
            onClick: () => {
              router.push(document.getElementsByTagName("textarea")[0].value);
            },
            index: null,
            listLength: 20,
            gamepadIndex: null,
            name: "Go",
            description: "attempts to navigate to route given in textbox. WARNING: May result in Runtime Error",
            gamerScore: 0,
            isLocked: false,
            progress: 100,
            image: "assets/general-icon-bbbdf.png",
            showReward: false,
            rewardImage: null,
          }),
          a.a.createElement(text, { variant: "captionShort", color: "white" }, "Presets"),
          a.a.createElement(achievementListItem, {
            gamepadAlias: `achievement-${e}-${t}`,
            autofocus: r,
            onClick: () => {
              router.push(`/persona`);
            },
            index: null,
            listLength: 20,
            gamepadIndex: null,
            name: "/persona",
            description: "go to /persona",
            gamerScore: 0,
            isLocked: false,
            progress: 100,
            image: null,
            showReward: false,
            rewardImage: null,
          }),
          a.a.createElement(achievementListItem, {
            gamepadAlias: `achievement-${e}-${t}`,
            autofocus: r,
            onClick: () => {
              router.push(`/achievements`);
            },
            index: null,
            listLength: 20,
            gamepadIndex: null,
            name: "/achievements",
            description: "go to /achievements",
            gamerScore: 0,
            isLocked: false,
            progress: 100,
            image: null,
            showReward: false,
            rewardImage: null,
          }),
          a.a.createElement("img", {
            style: { width: "30px", height: "30px", padding: "10px 10px" },
            src: "cheats-icon-aa18c.png",
            alt: "image",
          })
        );
      },
      LoggingTab = () => {
        const { t: e } = ra("Achievements"),
          t = Pt(Da),
          n = console.everything,
          r = n && 0 === n.length,
          o = ko();
        var listsize = console.everything.length;
        if (!n) return null;
        const i = e(".narration.tab", [e(".completed"), "4", "4"]) + " . " + e(".narration.selected");
        return a.a.createElement(
          pg,
          { text: i },
          a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(ya, { type: "contentful", renderingCompleted: !0 }),
            a.a.createElement(Tg, {
              header: a.a.createElement(ia, { size: 2 }),
              loading: !t,
              gamepadIndex: 1,
              emptyMessage: a.a.createElement(DarkGrayBox, {
                autofocus: !0,
                narrationText: `${e(".completedEmptyTitle")} . ${e(".completedEmptyText")}`,
                imgSrc: r ? Sa.a : void 0,
                gamepadIndex: 0,
                title: "No logs yet!",
                text: "console.everything is empty, or otherwise has a lenght of 0",
              }),
              data: n,
              keyExtractor: (e) => e.id,
              footer: a.a.createElement(a.a.Fragment, null, a.a.createElement(inputHint.Space, { extraSpace: a.a.createElement(ia, { size: 1 }) }), a.a.createElement(ia, { size: 1 })),
              renderItem: ({ item: e, index: t, listLength: n }) =>
              a.a.createElement(achievementListItem, {
                gamepadAlias: `achievement-${e}-${t}`,
                autofocus: r,
                onClick: () => {
                  //router.push(document.getElementsByTagName("textarea")[0].value);
                },
                index: null,
                listLength: 20,
                gamepadIndex: null,
                name: console.everything[t].type+"",
                description: console.everything[t].value+"",
                gamerScore: null,
                isLocked: false,
                progress: 0,
                image: null,
                showReward: false,
                rewardImage: null,
              }),
              renderTracker: (e) => a.a.createElement(ya, { type: "meaningful", renderingCompleted: e }),
            })
          )
        );
      },
      Bg = () => {
        const e = Pt(Ua),
          t = Ta("vanilla.achievementsReward");
        return e
          ? e.loaded
            ? a.a.createElement(Xi, {
                loading: !e.loaded,
                gamepadIndex: 0,
                inProgress: e.inProgressCount,
                achievementsUnlocked: e.unlocked,
                achievementsTotal: e.total,
                rewardsTotal: t ? e.rewardsTotal : 0,
                rewardsUnlocked: t ? e.rewardsUnlocked : void 0,
                gamerScore: e.gamerScore,
                gamerScoreTotal: e.maxGamerScore,
                hoursPlayed: e.hoursPlayed,
              })
            : a.a.createElement(Xi.Loading, { loading: !e.loaded })
          : null;
      },
      Hg = a.a.memo(
        ({
          filterName: e,
          id: t,
          name: n,
          autofocus: r,
          index: o,
          listLength: i,
          description: l,
          gamerScore: c,
          isLocked: s,
          progress: u,
          image: d,
          hasReward: f,
          rewardImage: p,
        }) => {
          const m = getRouter(),
            g = Ta("vanilla.achievementsReward");
          return a.a.createElement(achievementListItem, {
            gamepadAlias: `achievement-${e}-${t}`,
            autofocus: r,
            onClick: () => {
              m.push(`/achievement-detail/${t}`);
            },
            index: o,
            listLength: i,
            gamepadIndex: o,
            name: n,
            description: l,
            gamerScore: c,
            isLocked: s,
            progress: u,
            image: d,
            showReward: g && f,
            rewardImage: p,
          });
        }
      );
    var zg = n(19),
      Gg = n.n(zg),
      Yg = n(39),
      Kg = n.n(Yg),
      Wg = (n(396), n(10)),
      Vg = n.n(Wg);
    function $g(e) {
      const t = Object(r.useRef)(e);
      t.current = e;
      const n = fn()(Vg.a.box, Vg.a.boxBorder, Vg.a.boxBackground, Vg.a.focusHighlight, void 0 !== t.current.className ? t.current.className : void 0, {
          [Vg.a.disabled]: t.current.disabled,
        }),
        o = fn()(Vg.a.focused, void 0 !== t.current.classNameFocused ? t.current.classNameFocused : void 0),
        i = fn()(Vg.a.hovered, void 0 !== t.current.classNameHovered ? t.current.classNameHovered : void 0),
        l = fn()(Vg.a.pressed, void 0 !== t.current.classNamePressed ? t.current.classNamePressed : void 0);
      return a.a.createElement(
        Do,
        {
          autofocus: t.current.autofocus,
          disabled: t.current.disabled,
          disableScrollIntoView: t.current.disableScrollIntoView,
          className: n,
          classNameFocused: o,
          classNameHovered: i,
          classNamePressed: l,
          delayedClick: t.current.delayedClick,
          gamepadAlias: t.current.gamepadAlias,
          gamepadIndex: t.current.gamepadIndex,
          inputLegend: t.current.inputLegend,
          innerRef: t.current.innerRef,
          onClick: t.current.onClick,
          onFocusChanged: t.current.onFocusChanged,
          onHoverChanged: t.current.onHoverChanged,
          onPressChanged: t.current.onPressChanged,
          soundEffectHovered: t.current.soundEffectHovered,
          soundEffectFocused: t.current.soundEffectFocused,
          soundEffectPressed: t.current.soundEffectPressed,
          pressDuration: t.current.pressDuration,
          narrationText: t.current.narrationText,
        },
        e.children
      );
    }
    function Xg(e) {
      const t = Object(r.useRef)(e);
      t.current = e;
      const n = Object(r.useRef)(null),
        o = t.current.classNameElevated ? t.current.classNameElevated : Vg.a.elevated,
        i = t.current.classNameElevatedAndPressed ? t.current.classNameElevatedAndPressed : Vg.a.elevatedAndPressed,
        l = fn()({
          [o]: t.current.isElevated,
          [Vg.a.primary]: "primary" === t.current.variant,
          [Vg.a.secondary]: "secondary" === t.current.variant,
          [Vg.a.destructive]: "destructive" === t.current.variant,
          [Vg.a.default]: "default" === t.current.variant,
          [Vg.a.accordion]: "accordion" === t.current.variant,
        }),
        c = fn()(Vg.a.shine, Vg.a.shineBackground, Vg.a.shineShadow, Vg.a.shineText, void 0 !== t.current.className ? t.current.className : void 0);
      return a.a.createElement(
        $g,
        {
          autofocus: t.current.autofocus,
          disabled: t.current.disabled,
          disableScrollIntoView: t.current.disableScrollIntoView,
          className: l,
          classNamePressed: t.current.isElevated ? i : void 0,
          delayedClick: t.current.delayedClick,
          gamepadAlias: t.current.gamepadAlias,
          gamepadIndex: t.current.gamepadIndex,
          innerRef: n,
          inputLegend: t.current.inputLegend,
          onClick: t.current.onClick,
          onFocusChanged: t.current.onFocusChanged,
          onHoverChanged: t.current.onHoverChanged,
          soundEffectHovered: t.current.soundEffectHovered,
          soundEffectFocused: t.current.soundEffectFocused,
          soundEffectPressed: t.current.soundEffectPressed,
          pressDuration: t.current.pressDuration,
          narrationText: t.current.narrationText,
        },
        a.a.createElement("div", { className: c, style: null != t.current.height ? { height: `${t.current.height / 10}rem` } : void 0 }, e.children)
      );
    }
    const qg = () => {};
    var button = ({
        children: e,
        variant: t = "secondary",
        onClick: n = qg,
        accessibilityLabel: r,
        disabled: o,
        soundEffectPressed: i,
        soundEffectHovered: l,
        soundEffectFocused: c,
        delayedClick: s,
        isElevated: u = !0,
        autofocus: d,
        gamepadIndex: f = 0,
        gamepadAlias: p,
        disableScrollIntoView: m,
        inputLegend: g,
        onFocusChanged: h,
      }) => {
        const { t: E } = ra("Button"),
          v = `${r || e} . ${E(".button")}`;
        return a.a.createElement(
          Xg,
          {
            isElevated: u,
            delayedClick: s,
            narrationText: v,
            className: Kg.a.container,
            classNameHovered: Kg.a.hovered,
            classNameFocused: Kg.a.focused,
            classNamePressed: Kg.a.pressed,
            classNameElevated: Kg.a.elevated,
            classNameElevatedAndPressed: Kg.a.elevatedAndPressed,
            disabled: o,
            gamepadIndex: f,
            inputLegend: g,
            autofocus: d,
            gamepadAlias: p,
            disableScrollIntoView: m,
            onClick: n,
            soundEffectPressed: void 0 !== i ? i : `Button.${t}.pressed`,
            soundEffectHovered: void 0 !== l ? l : `Button.${t}.hovered`,
            soundEffectFocused: void 0 !== c ? c : `Button.${t}.focused`,
            variant: t,
            onFocusChanged: h,
          },
          a.a.createElement(
            "div",
            { className: Kg.a.labelContainer, style: {} },
            a.a.createElement(
              text,
              { variant: "secondary" !== t ? "primaryButton" : "header5B", color: "secondary" !== t ? "white" : "black", shadow: "secondary" !== t },
              a.a.createElement(Co, null, e)
            )
          )
        );
      },
      Zg = n(323),
      Jg = n.n(Zg),
      eh = n(324),
      th = n.n(eh),
      nh = n(321),
      rh = n.n(nh),
      ah = n(322),
      oh = n.n(ah);
    function ih({ image: e, title: t, isOwned: n, onClickView: r }) {
      const { t: o } = ra("AchievementReward"),
        i = [o(n ? ".narration.rewardUnlocked" : ".narration.rewardLocked"), t].join(" - ");
      return a.a.createElement(
        pg,
        { text: i },
        a.a.createElement(
          "div",
          { className: Gg.a.reward },
          a.a.createElement(
            "div",
            { className: Gg.a.innerReward },
            a.a.createElement(
              "div",
              { className: Gg.a.rewardText },
              a.a.createElement(
                "div",
                { className: Gg.a.rewardHeader },
                a.a.createElement(text, { variant: "captionShort", color: "grey" }, a.a.createElement(Co, null, o(".reward"))),
                n
                  ? a.a.createElement(image, { src: rh.a, filtering: "point", className: Gg.a.unlockedIcon })
                  : a.a.createElement(image, { src: oh.a, filtering: "point", className: Gg.a.lockedIcon })
              ),
              a.a.createElement(text, { variant: "body", align: "center", color: "white" }, t)
            ),
            a.a.createElement(
              "div",
              { className: Gg.a.rewardImageWrapper },
              a.a.createElement(image, { src: e, filtering: "point", className: fn()(Gg.a.rewardImage, { [Gg.a.rewardImageLocked]: !n }) }),
              a.a.createElement(image, { src: n ? Jg.a : th.a, filtering: "point", className: n ? Gg.a.rewardImageBorder : Gg.a.rewardImageBorderLocked })
            ),
            a.a.createElement(
              "div",
              { className: Gg.a.buttonWrapper },
              a.a.createElement(
                button,
                { delayedClick: !0, onClick: r, gamepadIndex: 0, autofocus: !0, inputLegend: o(".viewReward"), variant: "secondary", soundEffectPressed: "random.click" },
                o(".viewReward")
              )
            )
          )
        )
      );
    }
    var lh = n(33),
      ch = n.n(lh),
      sh = n(47),
      uh = n.n(sh);
    function dh({ children: e }) {
      return a.a.createElement("div", { className: uh.a.descriptionList }, e);
    }
    (dh.Pair = function ({ label: e, value: t, icon: n }) {
      return a.a.createElement(
        "div",
        { className: uh.a.description },
        a.a.createElement(text, { variant: "captionShort", color: "grey" }, e),
        a.a.createElement(text, { variant: "captionShort", color: "grey" }, n, t)
      );
    }),
      (dh.Progress = function ({ value: e, total: t }) {
        return a.a.createElement(
          "div",
          { className: uh.a.progressWrapper },
          a.a.createElement(
            "div",
            { className: uh.a.description },
            a.a.createElement(text, { variant: "captionShort", color: "grey" }, "Progress"),
            a.a.createElement(text, { variant: "captionShort", color: "grey" }, e, "/", t)
          ),
          a.a.createElement("div", { className: uh.a.percentageWrapper }, a.a.createElement(Wo, { tall: !0, percentage: e / t }), a.a.createElement(ia, { size: 2 }))
        );
      });
    var fh = n(315),
      ph = n.n(fh),
      mh = n(316),
      gh = n.n(mh),
      hh = n(34),
      Eh = n.n(hh);
    function vh({ children: e, variant: t, date: n }) {
      const { f: r } = ra("Window");
      return a.a.createElement(
        "div",
        { className: fn()(Eh.a.header, { [Eh.a.headerCompleted]: "completed" === t, [Eh.a.headerLocked]: "locked" === t }) },
        a.a.createElement(image, {
          filtering: "point",
          className: fn()({ [Eh.a.lockedIcon]: "locked" === t, [Eh.a.checkIcon]: "completed" === t }),
          src: "locked" === t ? ph.a : gh.a,
        }),
        a.a.createElement(text, { variant: "captionShort", color: "white" }, e),
        "completed" === t && n && a.a.createElement("div", { className: Eh.a.date }, a.a.createElement(text, { variant: "captionShort", color: "white" }, r.formatDate(n)))
      );
    }
    function bh({ children: e, variant: t = "locked", title: n, date: r, loading: o }) {
      return o
        ? a.a.createElement("div", { className: Eh.a.transparent }, a.a.createElement(yh, null))
        : a.a.createElement("div", { className: Eh.a.window }, a.a.createElement(vh, { date: r, variant: t }, n), e);
    }
    const yh = () => a.a.createElement("div", { className: Eh.a.spinner }, a.a.createElement(Yi, null));
    var Th = n(320),
      _h = n.n(Th),
      xh = n(317),
      wh = n.n(xh),
      Sh = n(318),
      Ch = n.n(Sh),
      Oh = n(319),
      Ih = n.n(Oh);
    function Nh({
      title: e,
      description: t = "",
      image: n,
      gamerscore: r = 0,
      progress: o = 0,
      autofocus: i = false,
      progressTarget: l = 0,
      isLocked: c,
      dateUnlocked: s = 0,
      loading: u,
      completedOnAnotherPlatform: d,
      gamepadIndex: f,
    }) {
      const { t: p } = ra("AchievementDetails"),
        m = ko();
      return a.a.createElement(
        Do,
        {
          inputLegend: false,
          className: "",
          classNameHovered: "",
          classNameFocused: ch.a.focusedDetails,
          classNamePressed: "",
          disabled: !m,
          autofocus: m && i,
          gamepadIndex: f,
          narrationText: false,
          onClick: () => {},
        },
        a.a.createElement(
          bh,
          { loading: u, title: p(c ? ".locked" : ".completed"), variant: c ? "locked" : "completed", date: s },
          a.a.createElement(
            "div",
            { className: ch.a.details },
            a.a.createElement(ia, { size: 5 }),
            a.a.createElement(
              "div",
              { className: fn()({ [ch.a.achievementLocked]: c }) },
              a.a.createElement(image, { className: fn()(ch.a.achievementImage, ch.a.frame), filtering: "point", src: c ? wh.a : Ch.a }),
              a.a.createElement(image, { className: fn()(ch.a.achievementImage, { [ch.a.achievementUnlocked]: !c }), filtering: "point", src: n || Ih.a })
            ),
            a.a.createElement(ia, { size: 2 }),
            a.a.createElement(
              "div",
              { className: ch.a.textWrapper },
              a.a.createElement(text, { variant: "header5B", color: "white" }, e),
              a.a.createElement(ia, { size: 1 }),
              a.a.createElement(text, { variant: "paragraphs", color: "grey" }, t)
            ),
            a.a.createElement(ia, { size: 5 })
          ),
          a.a.createElement(
            dh,
            null,
            a.a.createElement(dh.Pair, { label: p(".gamerscore"), value: `${r}`, icon: a.a.createElement(image, { className: ch.a.gamerscoreIcon, filtering: "point", src: _h.a }) }),
            d && a.a.createElement(dh.Pair, { label: p(".anotherPlatform"), value: p(".yes") }),
            o && 0 !== o && 1 !== o ? a.a.createElement(dh.Progress, { value: Math.round(o * l), total: l }) : null
          )
        )
      );
    }
    const kh = ({ isLocked: e, progress: t, progressTarget: n }, r) => {
      const a = Math.ceil(t * n),
        o = Math.round(100 * t);
      return e && t > 0 && t < 1 ? [r(".narration.progress"), r(".narration.percentage", [`${a}`, `${n}`]), `${o}%`] : [];
    };
    n(453);
    n(2);
    n(28);
    n(53);
    n(21);
    n(62);
    n(37), n(52);
    var Ph = n(20),
      Rh = n.n(Ph),
      Lh = n(331),
      Ah = n.n(Lh);
    function Mh() {
      return a.a.createElement("div", { className: Ah.a.divider });
    }
    function Fh(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Dh(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Fh(Object(n), !0).forEach(function (t) {
              jh(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Fh(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function jh(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
    }
    function Uh({ children: e, footer: t, gamepadIndex: n }) {
      const o = Object(r.useRef)(null),
        i = tg();
      return a.a.createElement(
        $m,
        { gamepadIndex: n, floating: "desktop" !== i },
        a.a.createElement(
          "div",
          { ref: o, className: Rh.a.sideMenu },
          a.a.createElement(ia, { size: 4 }),
          e,
          t && a.a.createElement(text, { variant: "captionShort" }, a.a.createElement("div", { className: Rh.a.footer }, t)),
          a.a.createElement(ia, { size: 4 })
        )
      );
    }
    function Bh(e, t) {
      return `item-list-${e}-${t}`;
  
    }
    (Uh.ItemMain = function ({ children: e }) {
      return a.a.createElement("div", { className: Rh.a.itemMain }, e);
    }),
      (Uh.ItemCell = function ({ children: e }) {
        return a.a.createElement("div", { className: Rh.a.itemCell }, e);
      }),
      (Uh.Divider = function ({ label: e }) {
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(text, { variant: "captionShort" }, a.a.createElement("div", { className: Rh.a.divider }, e)),
          a.a.createElement(Mh, null)
        );
      }),
      (Uh.ItemList = function ({ items: e, renderItem: t, gamepadIndex: n, selectedValue: r, gamepadAliasNamespace: o }) {
        return a.a.createElement(
          qi,
          { gamepadIndex: n, defaultFocusedChildBehavior: "remember" },
          e.map((e, n) => t(Dh(Dh({}, e), {}, { gamepadIndex: n, selected: e.value === r, gamepadAlias: Bh(o, e.value) })))
        );
      }),
      (Uh.ListItem = function ({ onSelect: e, children: t, selected: n, value: r, gamepadIndex: o, narrationText: i, inputLegendText: l, gamepadAlias: c }) {
        const { t: s } = ra("SideMenu"),
          { narrateText: u } = Sg();
        return a.a.createElement(
          Do,
          {
            className: n ? `${Rh.a.listItem} ${Rh.a.itemSelected}` : Rh.a.listItem,
            classNameFocused: Rh.a.itemFocused,
            classNameHovered: n ? void 0 : Rh.a.itemHovered,
            classNamePressed: n ? void 0 : Rh.a.itemPressed,
            onClick: () => {
              u(s(".sideMenuItem.selected") + " . " + i), e(r);
            },
            gamepadAlias: c,
            gamepadIndex: o,
            inputLegend: !n && l,
            soundEffectPressed: "random.click",
            narrationText: i,
          },
          t
        );
      }),
      (Uh.Item = function ({ children: e }) {
        return a.a.createElement("div", { className: Rh.a.item }, e);
      });
    n(77);
    var Hh = n(325),
      zh = n.n(Hh),
      Gh = n(326),
      Yh = n.n(Gh),
      Kh = n(327),
      Wh = n.n(Kh),
      Vh = n(328),
      $h = n.n(Vh),
      Xh = n(329),
      qh = n.n(Xh);
    n(330);
    $h.a, zh.a, Wh.a, qh.a, Yh.a;
    n(333);
    n(332);
    var Qh = n(40),
      Zh = n.n(Qh);
    function pageTransition({ visible: e, unmountOnExit: t, contentComponent: n, inverse: o, renderTracker: i }) {
      const l = Object(r.useMemo)(() => a.a.memo(n), [n]);
      return a.a.createElement(Fi, { visible: e, inverse: o, appear: !0, unmountOnExit: t, timeout: 400 }, (e, t) => {
        const n = "entered" !== e;
        return a.a.createElement(
          "div",
          {
            className: fn()(Zh.a.base, {
              [Zh.a.left]: !t,
              [Zh.a.right]: t,
              [Zh.a.entered]: "entered" === e,
              [Zh.a.entering]: "entering" === e,
              [Zh.a.exiting]: "exiting" === e,
              [Zh.a.exited]: "exited" === e,
            }),
          },
          a.a.createElement(fg, { paused: n }, i && i("entered" === e), a.a.createElement(l, null))
        );
      });
    }
    Object(o.render)(
      a.a.createElement(
        Xr,
        {
          scalingMode: "default",
          defaultRoute: "/achievements",
          scope: ["out-of-game", "in-game"],
          errorComponent: function () {
            const { t: e } = ra("ErrorModal");
            return a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(va, { text: `${e(".title")} . ${e(".goingBack")}` }),
              a.a.createElement(Modal, {
                animationOrigin: "center",
                title: "A runtime error has occured.",
                content: a.a.createElement(
                  button,
                  {
                    delayedClick: !0,
                    onClick: () => {
                      location.href = location.href.replace("index", "index-van");
                    },
                    gamepadIndex: 0,
                    autofocus: !0,
                    inputLegend: "inputlegendtext",
                    variant: "primary",
                    soundEffectPressed: "random.click",
                  },
                  "Reload Page"
                ),
                showCopyright: true,
                showVersion: true,
                version: "Version Texts"
              })
            );
          },
          enableFocusPersistency: !0,
        },
        a.a.createElement(makePageAtRoute, {
          route: "/achievements/:status?",
          component: () => {
            const { t: e } = ra("Achievements"),
              t = getRouter(),
              n = Pt(Da),
              r = ba(n, 1e4),
              o = ba(n, 1500);
            return a.a.createElement(
              obscureScreen,
              null,
              a.a.createElement(
                pg,
                { text: e(".narration.title") },
                o && !r && a.a.createElement(va, { text: e(".narration.loadingMessage") }),
                a.a.createElement(
                  PageLayout,
                  {
                    left: a.a.createElement(PageLayout.BackButton, { onClick: () => t.goBack() }),
                    center: a.a.createElement(text, { variant: "header5A", color: "black" }, "CoreUI | Testing"),
                    rightSidebar: a.a.createElement(
                     DarkGrayBox,
                     {
                      title:a.a.createElement(text, { variant: "header4A", color: "white" }, "Toolbox"),
                      text:a.a.createElement(
                        "div",{},
                        a.a.createElement(text, { variant: "paragraph", color: "white" }, "Manage"),
                        a.a.createElement(
                          button,
                          {
                            delayedClick: !0,
                            onClick: () => {
                              location.href = location.href.replace("index", "index-van");
                            },
                            gamepadIndex: 0,
                            autofocus: !0,
                            inputLegend: "inputlegendtext",
                            variant: "primary",
                            soundEffectPressed: "random.click",
                          },
                          "Reload Page"
                        ),
                        a.a.createElement(text, { variant: "paragraph", color: "yellow" }, "Danger Zone"),
                        a.a.createElement("textarea"),
                        a.a.createElement(
                          button,
                          {
                            delayedClick: !0,
                            onClick: () => {
                              eval(document.getElementsByTagName("textarea")[0].value);
                            },
                            gamepadIndex: 0,
                            autofocus: !0,
                            inputLegend: "inputlegendtext",
                            variant: "secondary",
                            soundEffectPressed: "random.click",
                          },
                          "Execute code"
                        ),
                       )
                     },
                     null
                    ),
                    
                  //  collapsedLeftSidebar:true,
                    collapsedRightSidebar:false,
                   onToggleCollapsedLeftSidebar: () => {this.collapsedLeftSidebar = !this.collapsedLeftSidebar;},
                   onToggleCollapsedRightSidebar: () => {this.collapsedRightSidebar = !this.collapsedRightSidebar; console.log("Toggle Sidebar!");}
                  },
                  a.a.createElement(
                    ag,
                    null,
                    a.a.createElement(
                      ag.Row,
                      { gamepadIndex: 0, fullHeight: !0 },
                      r && !n
                        ? a.a.createElement(
                            a.a.Fragment,
                            null,
                            a.a.createElement(ag.Column, { wideSize: 2, narrowSize: 1 }),
                            a.a.createElement(
                              ag.Column,
                              { gamepadIndex: 0, wideSize: 8, narrowSize: 6 },
                              a.a.createElement(ia, { size: 6 }),
                              a.a.createElement(DarkGrayBox, {
                                autofocus: !0,
                                imgSrc: Oa.a,
                                narrationText: `${e(".errorMessageTitle")} . ${e(".errorMessage")}`,
                                gamepadIndex: 0,
                                title: e(".errorMessageTitle"),
                                text: e(".errorMessage"),
                              }),
                              a.a.createElement(ya, { type: "meaningful", renderingCompleted: !0 })
                            )
                          )
                        : a.a.createElement(
                            a.a.Fragment,
                            null,
                            // a.a.createElement(ag.Column, { gamepadIndex: 0, wideSize: 3, narrowSize: 3 }, a.a.createElement(ia, { size: 4 }), a.a.createElement(Bg, null)),
                            a.a.createElement(
                              ag.Column,
                              { gamepadIndex: 1, wideSize: 9, narrowSize: 5 },
                              a.a.createElement(ia, { size: 4 }),
                              a.a.createElement(AchievementsNavBar, null),
                              a.a.createElement(AchievementsMenu, { status: "info", component: InfoTab }),
                              a.a.createElement(AchievementsMenu, { status: "components", component: ComponentsTab }),
                              a.a.createElement(AchievementsMenu, { status: "logs", component: LoggingTab }),
                              a.a.createElement(AchievementsMenu, { status: "tests", component: TestsTab }),
                              a.a.createElement(AchievementsMenu, { status: "teststwo", component: TestsTwoTab }),
                              a.a.createElement(AchievementsMenu, { status: "modal", component: ModalTab })
                            )
                          )
                    )
                  )
                )
              )
            );
          },
          transitionComponent: pageTransition,
        }),
        a.a.createElement(makePageAtRoute, {
          route: "/achievement-detail/:id",
          component: () => {
            const { t: e, f: t } = ra("AchievementDetailsRoute"),
              router = getRouter(),
              o = nn(),
              i = Ta("vanilla.achievementsReward"),
              l = Pt(ja(o.id)),
              c = !(!l || !l.isLoaded),
              s = l && l.achievement,
              u = ba(c, 1e4),
              d = ba(c, 1500),
              f = c && !s;
            Object(r.useEffect)(() => {
              f && router.goBack();
            }, [f, router]);
            const p = i && s && s.rewardName && s.rewardImage,
              m =
                void 0 !== s
                  ? [
                      s.isLocked ? e(".narration.locked") : e(".narration.completed"),
                      s.dateUnlocked > 0 ? t.formatDate(s.dateUnlocked) : "",
                      s.name,
                      s.description,
                      ...(0 !== s.gamerScore ? [e(".narration.gamerscore"), `${s.gamerScore}`] : []),
                      ...kh(s, e),
                    ].join(" . ")
                  : "";
            if (!l) return null;
            const g = i && s && s.hasReward && s.isRewardOwned && s.isLocked;
            return a.a.createElement(
              obscureScreen,
              null,
              a.a.createElement(
                pg,
                { text: e(".narration.title") },
                d && !u && a.a.createElement(va, { text: e(".narration.loadingMessage") }),
                a.a.createElement(ya, { type: "contentful", renderingCompleted: !0 }),
                a.a.createElement(ya, { type: "meaningful", renderingCompleted: c }),
                a.a.createElement(
                  PageLayout,
                  {
                    left: a.a.createElement(PageLayout.BackButton, { onClick: () => router.goBack() }),
                    center: a.a.createElement(text, { variant: "header5A", color: "black" }, e(".title")),
                  },
                  u
                    ? a.a.createElement(
                        ag,
                        null,
                        a.a.createElement(
                          ag.Row,
                          { gamepadIndex: 0 },
                          a.a.createElement(ag.Column, { wideSize: 2, narrowSize: 1 }),
                          a.a.createElement(
                            ag.Column,
                            { gamepadIndex: 0, wideSize: 8, narrowSize: 6 },
                            a.a.createElement(ia, { size: 2 }),
                            a.a.createElement(DarkGrayBox, { autofocus: !0, gamepadIndex: 0, text: e(".errorMessage"), narrationText: e(".errorMessage") })
                          )
                        )
                      )
                    : a.a.createElement(
                        pg,
                        { text: m },
                        a.a.createElement(
                          ag,
                          null,
                          a.a.createElement(
                            ag.Row,
                            { gamepadIndex: 0 },
                            (!p || !c) && a.a.createElement(ag.Column, { wideSize: 2, narrowSize: 1 }),
                            a.a.createElement(
                              ag.Column,
                              { gamepadIndex: 0, wideSize: 8, narrowSize: p && c ? 5 : 6 },
                              a.a.createElement(
                                $m,
                                { gamepadIndex: 0, focusableIfScrollable: !0, autofocusFocusable: !p },
                                a.a.createElement(ia, { size: 2 }),
                                s
                                  ? a.a.createElement(Nh, {
                                      loading: false,
                                      title: s.name,
                                      image: s.image,
                                      description: s.description,
                                      progress: s.progress,
                                      progressTarget: s.progressTarget,
                                      isLocked: s.isLocked,
                                      dateUnlocked: s.dateUnlocked,
                                      gamerscore: s.gamerScore,
                                      autofocus: !p,
                                      gamepadIndex: 0,
                                      completedOnAnotherPlatform: !!g,
                                    })
                                  : a.a.createElement(Nh, { gamepadIndex: 0, loading: !0 }),
                                a.a.createElement(ia, { size: 2 }),
                                a.a.createElement(inputHint.Space, null)
                              )
                            ),
                            p &&
                              s &&
                              s.rewardName &&
                              s.rewardImage &&
                              a.a.createElement(
                                ag.Column,
                                { gamepadIndex: 1, wideSize: 4, narrowSize: 3 },
                                a.a.createElement(
                                  $m,
                                  { gamepadIndex: 0, loading: !c },
                                  a.a.createElement(ia, { size: 2 }),
                                  a.a.createElement(ih, {
                                    title: s.rewardName,
                                    onClickView: () => {
                                      router.push(`/persona?itemId=${s.rewardId}`);
                                    },
                                    isOwned: Ga(s),
                                    image: s.rewardImage,
                                  }),
                                  a.a.createElement(ia, { size: 2 }),
                                  a.a.createElement(inputHint.Space, null)
                                )
                              )
                          )
                        )
                      )
                )
              )
            );
          },
          transitionComponent: pageTransition,
        }),
        a.a.createElement(makePageAtRoute, {
          route: "/test-route/",
          component: () => {
            const { t: e, f: t } = ra("AchievementDetailsRoute"),
              router = getRouter();
            
            const p = i && s && s.rewardName && s.rewardImage,
              m =
                void 0 !== s
                  ? [
                      s.isLocked ? e(".narration.locked") : e(".narration.completed"),
                      s.dateUnlocked > 0 ? t.formatDate(s.dateUnlocked) : "",
                      s.name,
                      s.description,
                      ...(0 !== s.gamerScore ? [e(".narration.gamerscore"), `${s.gamerScore}`] : []),
                      ...kh(s, e),
                    ].join(" . ")
                  : "";
            if (!l) return null;
            const g = i && s && s.hasReward && s.isRewardOwned && s.isLocked;
            return a.a.createElement(
              obscureScreen,
              null,
              a.a.createElement(
                pg,
                { text: e(".narration.title") },
                d && !u && a.a.createElement(va, { text: e(".narration.loadingMessage") }),
                a.a.createElement(ya, { type: "contentful", renderingCompleted: !0 }),
                a.a.createElement(ya, { type: "meaningful", renderingCompleted: c }),
                a.a.createElement(
                  PageLayout,
                  {
                    left: a.a.createElement(PageLayout.BackButton, { onClick: () => router.goBack() }),
                    center: a.a.createElement(text, { variant: "header5A", color: "black" }, "/test-route/"),
                  },
                  a.a.createElement(text, { variant: "header5A", color: "white" }, "*Cricket*"),
                  a.a.createElement(text, { variant: "header4B", color: "white" }, "rather empty route we've got here"),
                  
                    
                )
              )
            );
          },
          transitionComponent: pageTransition,
        }),
        null,
        a.a.createElement(routeAlias, { from: "/vanilla/achievements/:status?", to: "/achievements/:status?" }),
        a.a.createElement(routeAlias, { from: "/vanilla/achievement-detail/:id", to: "/achievement-detail/:id" }),
        a.a.createElement(inputHint, null)
      ),
      document.getElementById("root")
    );
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    (function (e) {
      n.d(t, "a", function () {
        return c;
      });
      var r = n(0),
        a = n(22),
        o = n(26),
        i = n(334),
        l = n(30);
      function c(t = { index: 0 }, n, c) {
        const [s] = Object(r.useState)(() => Object(l.a)()),
          u = Object(r.useContext)(a.a),
          d = Object(r.useContext)(o.b),
          f = d[d.length - 1],
          p = u.isFocusableFocused(f, s, t.alias, t.autofocus, t.disabled),
          m = Object(i.a)(p),
          g = {
            type: "focusable",
            id: s,
            path: d,
            alias: t.alias,
            ref: c,
            disabled: t.disabled,
            autofocus: t.autofocus,
            disableScrollIntoView: t.disableScrollIntoView,
            scrollSpeedFactor: t.scrollIntoViewSpeedFactor,
            scrollAlign: t.scrollIntoViewAlign,
            scrollOffset: t.scrollIntoViewOffset,
            onClick: n,
            onFocusedChange: (e) => {
              t && t.onFocusChanged && t.onFocusChanged(e), m(e);
            },
            index: t.index,
            inputLegend: t.inputLegend,
            onRight: t.onRight,
            onLeft: t.onLeft,
          };
        return (
          u.addOrUpdateNode(g),
          Object(r.useEffect)(() => (u.runAddNodeEffect(), () => u.removeNode(s)), [u, s]),
          Object(r.useLayoutEffect)(() => {
            if (!c.current) return;
            const t = c.current,
              n = () => u.requestFocus(s);
            return (
              e.env.REACT_GAMEPAD_DEBUG && t.prepend(document.createTextNode(`ID: ${s}`)),
              t.addEventListener("focusin", n),
              () => {
                t && t.removeEventListener("focusin", n);
              }
            );
          }, [c, s, u]),
          p
        );
      }
    }.call(this, n(398)));
  },
]);
