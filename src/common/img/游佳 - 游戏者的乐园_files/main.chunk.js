(window["webpackJsonpgamewow"] = window["webpackJsonpgamewow"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.js */ "./src/style.js");
/* harmony import */ var _common_iconfont_iconfont_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/iconfont/iconfont.js */ "./src/common/iconfont/iconfont.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@7.1.0@react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/_react-router-dom@5.0.1@react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _common_header_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/header/index.js */ "./src/common/header/index.js");
/* harmony import */ var _main_pages_home_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-pages/home/index.js */ "./src/main-pages/home/index.js");
/* harmony import */ var _store_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/index.js */ "./src/store/index.js");
var _jsxFileName = "/Users/RMBP/Desktop/\u4E2A\u4EBA\u9879\u76EE/gamewow/src/App.js";









function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: _store_index_js__WEBPACK_IMPORTED_MODULE_7__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_1__["GlobalStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_iconfont_iconfont_js__WEBPACK_IMPORTED_MODULE_2__["IconGlobalStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_header_index_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: "/",
    exact: true,
    component: _main_pages_home_index_js__WEBPACK_IMPORTED_MODULE_6__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: "/detail",
    exact: true,
    component: _main_pages_home_index_js__WEBPACK_IMPORTED_MODULE_6__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/common/header/index.js":
/*!************************************!*\
  !*** ./src/common/header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@7.1.0@react-redux/es/index.js");
/* harmony import */ var _store_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/index.js */ "./src/common/header/store/index.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.js */ "./src/common/header/style.js");
/* harmony import */ var _img_bannerImg_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/bannerImg.png */ "./src/common/img/bannerImg.png");
/* harmony import */ var _img_bannerImg_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_bannerImg_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_logo500_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/logo500.png */ "./src/common/img/logo500.png");
/* harmony import */ var _img_logo500_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_logo500_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_userImg_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/userImg.jpeg */ "./src/common/img/userImg.jpeg");
/* harmony import */ var _img_userImg_jpeg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_userImg_jpeg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_jia_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/jia.png */ "./src/common/img/jia.png");
/* harmony import */ var _img_jia_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_jia_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_wow_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/wow.png */ "./src/common/img/wow.png");
/* harmony import */ var _img_wow_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_wow_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_articleImg_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/articleImg.jpg */ "./src/common/img/articleImg.jpg");
/* harmony import */ var _img_articleImg_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_articleImg_jpg__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/RMBP/Desktop/\u4E2A\u4EBA\u9879\u76EE/gamewow/src/common/header/index.js";



 // 图片资源(需上传 url)








class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const _this$props = this.props,
          userImgHovered = _this$props.userImgHovered,
          userPopEnter = _this$props.userPopEnter,
          messageHovered = _this$props.messageHovered,
          dynamicHovered = _this$props.dynamicHovered,
          collectionHovered = _this$props.collectionHovered,
          historyHovered = _this$props.historyHovered;
    const _this$props2 = this.props,
          handleUserImgMouseEnter = _this$props2.handleUserImgMouseEnter,
          handleUserImgMouseLeave = _this$props2.handleUserImgMouseLeave,
          handleMessageMouseEnter = _this$props2.handleMessageMouseEnter,
          handleMessageMouseLeave = _this$props2.handleMessageMouseLeave,
          handleDynamicMouseEnter = _this$props2.handleDynamicMouseEnter,
          handleDynamicMouseLeave = _this$props2.handleDynamicMouseLeave,
          handleCollectionMouseEnter = _this$props2.handleCollectionMouseEnter,
          handleCollectionMouseLeave = _this$props2.handleCollectionMouseLeave,
          handleHistoryMouseEnter = _this$props2.handleHistoryMouseEnter,
          handleHistoryMouseLeave = _this$props2.handleHistoryMouseLeave;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_3__["HeaderWrapper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_3__["BannerAndSearch"], {
      className: "banner-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "banner-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _img_bannerImg_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "banner-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "search-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "search-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "hot-chart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "iconfont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "\uE6E1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "\u70ED\u699C")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "search-input",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "input",
      type: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "iconfont search-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "\uE6CC"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "blur",
      style: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '1280px',
        height: '42px',
        overflow: 'hidden'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_3__["NavBlurBg"], {
      style: {
        backgroundImage: "url(".concat(_img_bannerImg_png__WEBPACK_IMPORTED_MODULE_4___default.a, ")")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_3__["NavMask"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_3__["NavWrapper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_3__["LeftNavWrapper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_3__["LeftNavUlLi"], {
      className: "logoAndIndex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _img_logo500_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      alt: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    })), "\u4E3B\u9875"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_3__["LeftNavUlLi"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "\u7CBE\u9009\u6587\u7AE0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_3__["LeftNavUlLi"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "\u6E38\u620F\u5217\u8868"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_3__["LeftNavUlLi"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "\u8DA3\u6587"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_3__["LeftNavUlLi"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "\u6E38\u620F\u63A8\u8350"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_3__["WriteWrapper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "writeButton",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "\u5199\u6587\u7AE0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_3__["RightNavWrappper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_3__["RightNavUlLi"], {
      className: "user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: userImgHovered || userPopEnter ? 'userImg hovered' : 'userImg',
      onMouseEnter: handleUserImgMouseEnter,
      onMouseLeave: handleUserImgMouseLeave,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _img_userImg_jpeg__WEBPACK_IMPORTED_MODULE_6___default.a,
      alt: "\u7528\u6237\u5934\u50CF",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    })), this.controlUserPop(userImgHovered, userPopEnter)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_3__["RightNavUlLi"], {
      onMouseEnter: handleMessageMouseEnter,
      onMouseLeave: handleMessageMouseLeave,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "\u6D88\u606F", this.controlMessagePop(messageHovered)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_3__["RightNavUlLi"], {
      onMouseEnter: handleDynamicMouseEnter,
      onMouseLeave: handleDynamicMouseLeave,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, "\u52A8\u6001", this.controlDynamicPop(dynamicHovered)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_3__["RightNavUlLi"], {
      onMouseEnter: handleCollectionMouseEnter,
      onMouseLeave: handleCollectionMouseLeave,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, "\u6536\u85CF", this.controlCollectionPop(collectionHovered)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_3__["RightNavUlLi"], {
      onMouseEnter: handleHistoryMouseEnter,
      onMouseLeave: handleHistoryMouseLeave,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, "\u5386\u53F2", this.controlHistoryPop(historyHovered))))));
  } // 当鼠标移至头像位置，显示个人用户面板


  controlUserPop(hovered, enter) {
    if (hovered || enter) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_3__["UserPop"], {
        onMouseEnter: this.props.handleUserPopMouseEnter,
        onMouseLeave: this.props.handleUserPopMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_3__["BaseInfo"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "baseinfoStyle username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "6\u4E2A\u6C64\u5706"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "baseinfoStyle property",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "propertyJia",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _img_jia_png__WEBPACK_IMPORTED_MODULE_7___default.a,
        alt: "\u4F73\u6570",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), "198"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "propertyWow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _img_wow_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "W\u6570",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }), "20"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "personalProperty",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "\u4E2A\u4EBA\u8D44\u4EA7")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "baseinfoStyle level",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "levelTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "\u7B49\u7EA7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "levelProgress",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progressBg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "levelNum",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progressRate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_3__["UserMenu"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "userMenuItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "iconfont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "\uE70A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "\u4E2A\u4EBA\u4E2D\u5FC3")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "userMenuItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "iconfont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "\uE6C3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "\u7A3F\u4EF6\u7BA1\u7406")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "userMenuItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "iconfont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "\uE70B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "\u8D44\u4EA7\u7BA1\u7406"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_3__["ExitAccount"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "exitButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "\u9000\u51FA\u8D26\u6237")));
    }
  } // 当鼠标移至消息位置，显示消息框


  controlMessagePop(hovered) {
    if (hovered) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        className: "messageItem replyToMe",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, "\u56DE\u590D\u6211\u7684", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, "2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        className: "messageItem atToMe",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, "@\u6211\u7684"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        className: "messageItem receivedFavour",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, "\u6536\u5230\u7684\u8D5E"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        className: "messageItem myMessage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, "\u6211\u7684\u6D88\u606F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        className: "messageItem officialMessage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, "\u7CFB\u7EDF\u6D88\u606F"));
    }
  } // 当鼠标移至动态位置，显示动态框


  controlDynamicPop(hovered) {
    if (hovered) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dynamic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dynamicItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "articleImg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _img_articleImg_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "userAndTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "articleUser",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "\u6E38\u6C11\u661F\u7A7A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "\u53D1\u8868\u6587\u7AE0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "GC 2019\uFF1A\u300A\u6B7B\u4EA1\u6401\u6D45\u300B\u9884\u544A \u201C\u5988\u5988\u201D\u767B\u573A\u3001\u5A74\u513F\u7528\u6CD5\u4ECB\u7ECD"))))));
    }
  } // 当鼠标移至收藏位置，显示收藏框


  controlCollectionPop(hovered) {
    if (hovered) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "collection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "listItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, "\u4EBA\u751F\u597D\u7D2F\uFF0C\u6211\u8BE5\u600E\u4E48\u6D3B\u4E0B\u53BB,\u6C42\u6C42\u4E00\u4E2A\u4EBA\u6765\u652F\u652F\u62DB\u5427\uFF0C\u6C42\u4F60\u4EEC\u4E86\uFF01"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "listItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, "\u6211\u5728\u5BB6\u82B1\u4E86\u4E09\u5E74\u505A\u4E86\u4E00\u4E2A\u81EA\u5DF1\u7684\u6E38\u620F"))));
    }
  } // 当鼠标移至历史位置，显示历史框


  controlHistoryPop(hovered) {
    if (hovered) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "history",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "listItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "\u6B7B\u4EA1\u6401\u6D45\u5373\u5C06\u572812\u67085\u53F7\u53D1\u552E\uFF0C\u94B1\u5305\u90FD\u51C6\u5907\u597D\u4E86\u4E48\uFF1F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "listItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, "\u6F2B\u5A01\u590D\u4EC7\u8005\u8054\u76DF\u5B9E\u9645\u6F14\u793A\u544A\u8BC9\u6211\u4EEC\u4EC0\u4E48\u4FE1\u606F\uFF1F"))));
    }
  }

}

const mapStateToProps = state => {
  return {
    // userImgHovered: state.getIn(['header', 'userImgHovered'])  
    userImgHovered: state.get('header').get('userImgHovered'),
    userPopEnter: state.get('header').get('userPopEnter'),
    messageHovered: state.get('header').get('messageHovered'),
    dynamicHovered: state.get('header').get('dynamicHovered'),
    collectionHovered: state.get('header').get('collectionHovered'),
    historyHovered: state.get('header').get('historyHovered')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleUserImgMouseEnter() {
      const action = _store_index_js__WEBPACK_IMPORTED_MODULE_2__["actionCreators"].userImgHovered();
      dispatch(action);
    },

    handleUserImgMouseLeave() {
      const action = _store_index_js__WEBPACK_IMPORTED_MODULE_2__["actionCreators"].userImgUnhovered();
      dispatch(action);
    },

    handleUserPopMouseEnter() {
      const action = _store_index_js__WEBPACK_IMPORTED_MODULE_2__["actionCreators"].userPopEnter();
      dispatch(action);
    },

    handleUserPopMouseLeave() {
      const action = _store_index_js__WEBPACK_IMPORTED_MODULE_2__["actionCreators"].userPopLeave();
      dispatch(action);
    },

    handleMessageMouseEnter() {
      const action = _store_index_js__WEBPACK_IMPORTED_MODULE_2__["actionCreators"].messageHovered();
      dispatch(action);
    },

    handleMessageMouseLeave() {
      const action = _store_index_js__WEBPACK_IMPORTED_MODULE_2__["actionCreators"].messageUnhovered();
      dispatch(action);
    },

    handleDynamicMouseEnter() {
      const action = _store_index_js__WEBPACK_IMPORTED_MODULE_2__["actionCreators"].dynamicHovered();
      dispatch(action);
    },

    handleDynamicMouseLeave() {
      const action = _store_index_js__WEBPACK_IMPORTED_MODULE_2__["actionCreators"].dynamicUnhovered();
      dispatch(action);
    },

    handleCollectionMouseEnter() {
      const action = _store_index_js__WEBPACK_IMPORTED_MODULE_2__["actionCreators"].collectionHovered();
      dispatch(action);
    },

    handleCollectionMouseLeave() {
      const action = _store_index_js__WEBPACK_IMPORTED_MODULE_2__["actionCreators"].collectionUnhovered();
      dispatch(action);
    },

    handleHistoryMouseEnter() {
      const action = _store_index_js__WEBPACK_IMPORTED_MODULE_2__["actionCreators"].historyHovered();
      dispatch(action);
    },

    handleHistoryMouseLeave() {
      const action = _store_index_js__WEBPACK_IMPORTED_MODULE_2__["actionCreators"].historyUnhovered();
      dispatch(action);
    }

  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Header));

/***/ }),

/***/ "./src/common/header/store/actionCreators.js":
/*!***************************************************!*\
  !*** ./src/common/header/store/actionCreators.js ***!
  \***************************************************/
/*! exports provided: userImgHovered, userPopEnter, userPopLeave, userImgUnhovered, messageHovered, messageUnhovered, dynamicHovered, dynamicUnhovered, collectionHovered, collectionUnhovered, historyHovered, historyUnhovered */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userImgHovered", function() { return userImgHovered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userPopEnter", function() { return userPopEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userPopLeave", function() { return userPopLeave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userImgUnhovered", function() { return userImgUnhovered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageHovered", function() { return messageHovered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageUnhovered", function() { return messageUnhovered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamicHovered", function() { return dynamicHovered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamicUnhovered", function() { return dynamicUnhovered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectionHovered", function() { return collectionHovered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectionUnhovered", function() { return collectionUnhovered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "historyHovered", function() { return historyHovered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "historyUnhovered", function() { return historyUnhovered; });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/common/header/store/constants.js");

const userImgHovered = () => ({
  type: _constants_js__WEBPACK_IMPORTED_MODULE_0__["USER_IMG_HOVERED"]
});
const userPopEnter = () => ({
  type: _constants_js__WEBPACK_IMPORTED_MODULE_0__["USER_POP_ENTER"]
});
const userPopLeave = () => ({
  type: _constants_js__WEBPACK_IMPORTED_MODULE_0__["USER_POP_LEAVE"]
});
const userImgUnhovered = () => ({
  type: _constants_js__WEBPACK_IMPORTED_MODULE_0__["USER_IMG_UNHOVERED"]
});
const messageHovered = () => ({
  type: _constants_js__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_HOVERED"]
});
const messageUnhovered = () => ({
  type: _constants_js__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_UNHOVERED"]
});
const dynamicHovered = () => ({
  type: _constants_js__WEBPACK_IMPORTED_MODULE_0__["DYNAMIC_HOVERED"]
});
const dynamicUnhovered = () => ({
  type: _constants_js__WEBPACK_IMPORTED_MODULE_0__["DYNAMIC_UNHOVERED"]
});
const collectionHovered = () => ({
  type: _constants_js__WEBPACK_IMPORTED_MODULE_0__["COLLECTION_HOVERED"]
});
const collectionUnhovered = () => ({
  type: _constants_js__WEBPACK_IMPORTED_MODULE_0__["COLLECTION_UNHOVERED"]
});
const historyHovered = () => ({
  type: _constants_js__WEBPACK_IMPORTED_MODULE_0__["HISTORY_HOVERED"]
});
const historyUnhovered = () => ({
  type: _constants_js__WEBPACK_IMPORTED_MODULE_0__["HISTORY_UNHOVERED"]
});

/***/ }),

/***/ "./src/common/header/store/constants.js":
/*!**********************************************!*\
  !*** ./src/common/header/store/constants.js ***!
  \**********************************************/
/*! exports provided: USER_IMG_HOVERED, USER_IMG_UNHOVERED, USER_POP_ENTER, USER_POP_LEAVE, MESSAGE_HOVERED, MESSAGE_UNHOVERED, DYNAMIC_HOVERED, DYNAMIC_UNHOVERED, COLLECTION_HOVERED, COLLECTION_UNHOVERED, HISTORY_HOVERED, HISTORY_UNHOVERED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_IMG_HOVERED", function() { return USER_IMG_HOVERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_IMG_UNHOVERED", function() { return USER_IMG_UNHOVERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_POP_ENTER", function() { return USER_POP_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_POP_LEAVE", function() { return USER_POP_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_HOVERED", function() { return MESSAGE_HOVERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_UNHOVERED", function() { return MESSAGE_UNHOVERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DYNAMIC_HOVERED", function() { return DYNAMIC_HOVERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DYNAMIC_UNHOVERED", function() { return DYNAMIC_UNHOVERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_HOVERED", function() { return COLLECTION_HOVERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_UNHOVERED", function() { return COLLECTION_UNHOVERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HISTORY_HOVERED", function() { return HISTORY_HOVERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HISTORY_UNHOVERED", function() { return HISTORY_UNHOVERED; });
const USER_IMG_HOVERED = 'header/USER_IMG_HOVERED';
const USER_IMG_UNHOVERED = 'header/USER_IMG_UNHOVERED';
const USER_POP_ENTER = 'header/USER_POP_ENTER';
const USER_POP_LEAVE = 'header/USER_POP_LEAVE';
const MESSAGE_HOVERED = 'header/MESSAGE_HOVERED';
const MESSAGE_UNHOVERED = 'header/MESSAGE_UNHOVERED';
const DYNAMIC_HOVERED = 'header/DYNAMIC_HOVERED';
const DYNAMIC_UNHOVERED = 'header/DYNAMIC_UNHOVERED';
const COLLECTION_HOVERED = 'header/COLLECTION_HOVERED';
const COLLECTION_UNHOVERED = 'header/COLLECTION_UNHOVERED';
const HISTORY_HOVERED = 'header/HISTORY_HOVERED';
const HISTORY_UNHOVERED = 'header/HISTORY_UNHOVERED';

/***/ }),

/***/ "./src/common/header/store/index.js":
/*!******************************************!*\
  !*** ./src/common/header/store/index.js ***!
  \******************************************/
/*! exports provided: reducer, actionCreators, constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer.js */ "./src/common/header/store/reducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _actionCreators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionCreators.js */ "./src/common/header/store/actionCreators.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actionCreators", function() { return _actionCreators_js__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/common/header/store/constants.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__; });





/***/ }),

/***/ "./src/common/header/store/reducer.js":
/*!********************************************!*\
  !*** ./src/common/header/store/reducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/common/header/store/constants.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/_immutable@4.0.0-rc.12@immutable/dist/immutable.es.js");


const defaultState = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])({
  userImgHovered: false,
  userPopEnter: false,
  messageHovered: false,
  dynamicHovered: false,
  collectionHovered: false,
  historyHovered: false
});
/* harmony default export */ __webpack_exports__["default"] = ((state = defaultState, action) => {
  switch (action.type) {
    case _constants_js__WEBPACK_IMPORTED_MODULE_0__["USER_IMG_HOVERED"]:
      return state.set('userImgHovered', true);

    case _constants_js__WEBPACK_IMPORTED_MODULE_0__["USER_IMG_UNHOVERED"]:
      return state.set('userImgHovered', false);

    case _constants_js__WEBPACK_IMPORTED_MODULE_0__["USER_POP_ENTER"]:
      return state.set('userPopEnter', true);

    case _constants_js__WEBPACK_IMPORTED_MODULE_0__["USER_POP_LEAVE"]:
      return state.set('userPopEnter', false);

    case _constants_js__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_HOVERED"]:
      return state.set('messageHovered', true);

    case _constants_js__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_UNHOVERED"]:
      return state.set('messageHovered', false);

    case _constants_js__WEBPACK_IMPORTED_MODULE_0__["DYNAMIC_HOVERED"]:
      return state.set('dynamicHovered', true);

    case _constants_js__WEBPACK_IMPORTED_MODULE_0__["DYNAMIC_UNHOVERED"]:
      return state.set('dynamicHovered', false);

    case _constants_js__WEBPACK_IMPORTED_MODULE_0__["COLLECTION_HOVERED"]:
      return state.set('collectionHovered', true);

    case _constants_js__WEBPACK_IMPORTED_MODULE_0__["COLLECTION_UNHOVERED"]:
      return state.set('collectionHovered', false);

    case _constants_js__WEBPACK_IMPORTED_MODULE_0__["HISTORY_HOVERED"]:
      return state.set('historyHovered', true);

    case _constants_js__WEBPACK_IMPORTED_MODULE_0__["HISTORY_UNHOVERED"]:
      return state.set('historyHovered', false);

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/common/header/style.js":
/*!************************************!*\
  !*** ./src/common/header/style.js ***!
  \************************************/
/*! exports provided: HeaderWrapper, BannerAndSearch, NavBlurBg, NavMask, NavWrapper, LeftNavWrapper, LeftNavUlLi, RightNavWrappper, RightNavUlLi, WriteWrapper, UserPop, BaseInfo, UserMenu, ExitAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderWrapper", function() { return HeaderWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerAndSearch", function() { return BannerAndSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBlurBg", function() { return NavBlurBg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMask", function() { return NavMask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavWrapper", function() { return NavWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftNavWrapper", function() { return LeftNavWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftNavUlLi", function() { return LeftNavUlLi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightNavWrappper", function() { return RightNavWrappper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightNavUlLi", function() { return RightNavUlLi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteWrapper", function() { return WriteWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPop", function() { return UserPop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseInfo", function() { return BaseInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenu", function() { return UserMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExitAccount", function() { return ExitAccount; });
/* harmony import */ var _Users_RMBP_Desktop_gamewow_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/_styled-components@4.3.2@styled-components/dist/styled-components.browser.esm.js");


function _templateObject16() {
  const data = Object(_Users_RMBP_Desktop_gamewow_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\twidth: 100%;\n\theight: 30px;\n\tbackground-color: #F4F5F7;\n\tposition: relative;\n\t.exitButton {\n\t\tposition: absolute;\n\t\tright: 20px;\n\t\ttext-align: center;\n\t\tline-height: 30px;\n\t\t&:hover {\n\t\t\tcolor: #ff4d4f;\n\t\t\tcursor: pointer;\n\t\t}\n\t}\n"]);

  _templateObject16 = function () {
    return data;
  };

  return data;
}

function _templateObject15() {
  const data = Object(_Users_RMBP_Desktop_gamewow_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\twidth: 100%;\n\tpadding: 10px 20px;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\t.userMenuItem {\n\t\twidth: 110px;\n\t\theight: 30px;\n\t\tline-height: 30px;\n\t\ti {\n\t\t\tmargin-right: 10px;\n\t\t\tfont-size: 16px;\n\t\t\tvertical-align: bottom;\n\t\t}\n\t\tspan {\n\t\t\tfont-size: 12px;\n\t\t\tvertical-align: bottom;\n\t\t}\n\t\t&:hover {\n\t\t\tcursor: pointer;\n\t\t\tcolor: #ff4d4f;\n\t\t}\n\t}\n"]);

  _templateObject15 = function () {
    return data;
  };

  return data;
}

function _templateObject14() {
  const data = Object(_Users_RMBP_Desktop_gamewow_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\twidth: 100%;\n\tcolor: #222;\n\tbox-sizing: border-box;\n\tpadding-bottom: 10px;\n\tborder-bottom: 1px solid #e5e9ef;\n\t.baseinfoStyle {\n\t\twidth: 100%;\n\t\theight: 30px;\n\t\tpadding: 4px 0;\n\t\t&.username {\n\t\t\ttext-align: center;\n\t\t\tline-height: 30px;\n\t\t\tpadding-top: 0;\n\t\t}\n\t\t&.property {\n\t\t\tdisplay: flex;\n\t\t\tposition: relative;\n\t\t\t.propertyJia {\n\t\t\t\tpadding-left: 0px;\n\t\t\t\twidth: 60px;\n\t\t\t\theight: 100%;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\timg {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\twidth: 18px;\n\t\t\t\t\theight: 18px;\n\t\t\t\t\tpadding-right: 4px;\n\t\t\t\t\tpadding-left: 20px;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.propertyWow {\n\t\t\t\tpadding-left: 10px;\n\t\t\t\twidth: 20px;\n\t\t\t\theight: 100%;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\timg {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\twidth: 18px;\n\t\t\t\t\theight: 18px;\n\t\t\t\t\tpadding-left: 20px;\n\t\t\t\t\tpadding-right: 4px;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.personalProperty {\n\t\t\t\tdisplay: block;\n\t\t\t\theight: 100%;\n\t\t\t\ttext-align: center;\n\t\t\t\tposition: absolute;\n\t\t\t\tright: 20px;\n\t\t\t\ttop: 50%;\n\t\t\t\tmargin-top: -15px;\n\t\t\t\tline-height: 30px;\n\t\t\t}\n\t\t}\n\t\t&.level {\n\t\t\tdisplay: flex;\n\t\t\t.levelTitle {\n\t\t\t\theight: 100%;\n\t\t\t\tpadding-left: 20px;\n\t\t\t\tline-height: 30px;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t\t.levelProgress {\n\t\t\t\twidth: 216px;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tpadding-left: 10px;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\t.progressBg {\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tz-index: 1;\n\t\t\t\t\twidth: 186px;\n\t\t\t\t\theight: 10px;\n\t\t\t\t\tbackground: #eee;\n\t\t\t\t}\n\t\t\t\t.levelNum {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tz-index: 3;\n\t\t\t\t\ttop: -50%;\n\t\t\t\t\tleft: -2px;\n\t\t\t\t\twidth: 20px;\n\t\t\t\t\theight: 20px;\n\t\t\t\t\tbackground-color: #1890ff;\n\t\t\t\t\tline-height: 20px;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tborder-radius: 50%;\n\t\t\t\t}\n\t\t\t\t.progressRate {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\tz-index: 2;\n\t\t\t\t\t/* \u6B64\u5904\u7684\u767E\u5206\u6BD4\u9700\u8981\u540E\u53F0\u8BA1\u7B97 */\n\t\t\t\t\twidth: 30%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tbackground-color: #1890ff;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject14 = function () {
    return data;
  };

  return data;
}

function _templateObject13() {
  const data = Object(_Users_RMBP_Desktop_gamewow_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\twidth: 260px;\n\tposition: absolute;\n\tz-index: 101;\n\tleft: 50%;\n\tmargin-left: -130px;\n\tpadding: 50px 0 0 0;\n\ttop: 42px;\n\tbackground-color: #fff;\n\tbox-shadow: 0 2px 4px rgba(0,0,0,.16);\n\tborder-radius: 0 0 4px 4px;\n\t&:hover {\n\t\tcursor: default;\n\t}\n"]);

  _templateObject13 = function () {
    return data;
  };

  return data;
}

function _templateObject12() {
  const data = Object(_Users_RMBP_Desktop_gamewow_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\twidth: 70px;\n\theight: 50px;\n\tfloat: right;\n\tposition: relative;\n\tz-index: 100;\n\tcolor: #fff;\n\t.writeButton {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tline-height: 42px;\n\t\ttext-align: center;\n\t\tbackground-color: #1890ff;\n\t\tfont-size: 14px;\n\t\tborder-bottom-left-radius: 4px;\n\t\tborder-bottom-right-radius: 4px;\n\t\t&:hover {\n\t\t\tbackground-color: #2ba3fc;\n\t\t\tcursor: pointer;\n\t\t}\n\t}\n"]);

  _templateObject12 = function () {
    return data;
  };

  return data;
}

function _templateObject11() {
  const data = Object(_Users_RMBP_Desktop_gamewow_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t&.user {\n\t\twidth: 32px;\n\t\theight: 100%;\n\t\tmargin-right: 8px;\n\t\t.userImg {\n\t\t\tposition: relative;\n\t\t\tz-index: 102;\n\t\t\twidth: 32px;\n\t\t\theight: 32px;\n\t\t\tborder-radius: 50%;\n\t\t\tbox-sizing: border-box;\n\t\t\tborder: 1px solid #fff;\n\t\t\tmargin-top: 6px;\n\t\t\ttransition: all .2s ease-out;\n\t\t\timg {\n\t\t\t\twidth: 100%;\n\t\t\t\tborder-radius: 50%;\n\t\t\t}\n\t\t\t&.hovered {\n\t\t\t\ttransform: scale(2);\n\t\t\t\tmargin-top: 30px;\n\t\t\t}\n\t\t}\n\t\t&:hover {\n\t\t\tbackground-color: hsla(0,0%,100%,0);\n\t\t}\n\t}\n\n\t.message {\n\t\tposition: absolute;\n\t\tleft: 50%;\n\t\tmargin-left: -55px;\n\t\ttop: 42px;\n\t\twidth: 110px;\n\t\theight: auto;\n\t\tbox-shadow: rgba(0,0,0,0.16) 0px 2px 4px;\n\t\tborder-radius: 0 0 4px 4px;\n\t\tbackground-color: #fff;\n\t\t.messageItem {\n\t\t\tdisplay: block;\n\t\t\twidth: 100%;\n\t\t\theight: 42px;\n\t\t\tcolor: #222;\n\t\t\tline-height: 42px;\n\t\t\ttext-align: center;\n\t\t\ttext-decoration: none;\n\t\t\tposition: relative;\n\t\t\t&:hover {\n\t\t\t\tbackground-color: #E5E9Ef;\n\t\t\t}\n\t\t\ti {\n\t\t\t\tdisplay: block;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\twidth: 12px;\n\t\t\t\theight: 12px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground-color: #ff4d4f;\n\t\t\t\tposition: absolute;\n\t\t\t\tright: 10px;\n\t\t\t\ttop: 50%;\n\t\t\t\tmargin-top: -6px;\n\t\t\t\ttext-align: center;\n\t\t\t\tline-height: 12px;\n\t\t\t\tfont-size: 10px;\n\t\t\t\tcolor: #fff;\n\t\t\t}\n\t\t}\n\t}\n\n\t.dynamic {\n\t\twidth: 360px;\n\t\theight: auto;\n\t\tposition: absolute;\n\t\ttop: 42px;\n\t\tleft: 50%;\n\t\tmargin-left: -180px;\n\t\tbackground-color: #fff;\n\t\tbox-shadow: rgba(0, 0, 0, 0.16) 0px 2px 4px;\n\t\tborder: 1px solid #E5E9EF;\n\t\tpadding: 10px 0 0 0;\n\t\t&:hover {\n\t\t\tcursor: default;\n\t\t}\n\t\t.content {\n\t\t\twidth: 100%;\n\t\t\theight: auto;\n\t\t\t.dynamicItem {\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 56px;\n\t\t\t\tpadding: 6px 12px 10px;\n\t\t\t\tdisplay: flex;\n\t\t\t\t&:hover {\n\t\t\t\t\tbackground-color: #E5E9EF;\n\t\t\t\t}\n\t\t\t\t.articleImg {\n\t\t\t\t\twidth: 40px;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\ta {\n\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\theight: 30px;\n\t\t\t\t\t\tmargin-top: 4px;\n\t\t\t\t\t\tborder-radius: 4px;\n\t\t\t\t\t\toverflow: hidden;\n\t\t\t\t\t\t&:hover { cursor: pointer; }\n\t\t\t\t\t}\n\t\t\t\t\timg {\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\theight: 100%;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.userAndTitle {\n\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\tpadding-left: 10px;\n\t\t\t\t\twidth: 296px;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tpadding-top: 4px;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\tjustify-content: space-between;\n\t\t\t\t\tline-height: 12px;\n\t\t\t\t\t.articleUser {\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\theight: 17px;\n\t\t\t\t\t\ta {\n\t\t\t\t\t\t\ttext-decoration: none;\n\t\t\t\t\t\t\tcolor: #222;\n\t\t\t\t\t\t\t&:hover {\n\t\t\t\t\t\t\t\tcolor: #ff4d4f;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tspan {\n\t\t\t\t\t\t\tmargin-left: 16px;\n\t\t\t\t\t\t\tcolor: #99A2AA;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t.title {\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\theight: 15px;\n\t\t\t\t\t\toverflow: hidden;\n\t\t\t\t\t\ttext-overflow: ellipsis; \n\t\t\t\t\t\twhite-space: nowrap;\n\t\t\t\t\t\tcolor: #ff4d4f;\n\t\t\t\t\t\ta {\n\t\t\t\t\t\t\ttext-decoration: none;\n\t\t\t\t\t\t\t&:link { \n\t\t\t\t\t\t\t\tcolor: #ff4d4f;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t&:visited {\n\t\t\t\t\t\t\t\tcolor: #ff4d4f;\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t&:hover {\n\t\t\t\t\t\t\t\tcolor: #ff4d4f;\t\n\t\t\t\t\t\t\t\ttext-decoration: underline;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t&:active {\n\t\t\t\t\t\t\t\tcolor: #ff4d4f;\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t.collection {\n\t\twidth: 320px;\n\t\theight: auto;\n\t\tposition: absolute;\n\t\ttop: 42px;\n\t\tleft: 50%;\n\t\tmargin-left: -160px;\n\t\tpadding: 10px 0 0 0;\n\t\tbackground-color: #fff;\n\t\tbox-shadow: rgba(0, 0, 0, 0.16) 0px 2px 4px;\n\t\tborder: 1px solid #E5E9EF;\n\t\tbox-sizing: border-box;\n\t\t&:hover {\n\t\t\tcursor: default;\n\t\t}\n\t\t.content {\n\t\t\twidth: 100%;\n\t\t\t.list {\n\t\t\t\twidth: 100%;\n\t\t\t\t.listItem {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 28px;\n\t\t\t\t\tpadding: 0 12px 0 38px;\n\t\t\t\t\tline-height: 28px;\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\ttext-overflow: ellipsis; \n\t\t\t\t\twhite-space: nowrap;\n\t\t\t\t\t&::before{\n\t\t\t\t\t\tcontent: \"\u2219\";\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\tleft: 18px;\n\t\t\t\t\t\tcolor: #6D757A;\n\t\t\t\t\t\tfont-size: 20px;\n\t\t\t\t\t}\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t\tbackground-color: #E5E9EF;\n\t\t\t\t\t\tcolor: #ff4d4f;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t.history {\n\t\twidth: 320px;\n\t\theight: auto;\n\t\tposition: absolute;\n\t\ttop: 42px;\n\t\tleft: 50%;\n\t\tmargin-left: -160px;\n\t\tpadding: 10px 0 0 0;\n\t\tbackground-color: #fff;\n\t\tbox-shadow: rgba(0, 0, 0, 0.16) 0px 2px 4px;\n\t\tborder: 1px solid #E5E9EF;\n\t\tbox-sizing: border-box;\n\t\t&:hover {\n\t\t\tcursor: default;\n\t\t}\n\t\t.content {\n\t\t\twidth: 100%;\n\t\t\t.list {\n\t\t\t\twidth: 100%;\n\t\t\t\t.listItem {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 28px;\n\t\t\t\t\tpadding: 0 12px 0 38px;\n\t\t\t\t\tline-height: 28px;\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\ttext-overflow: ellipsis; \n\t\t\t\t\twhite-space: nowrap;\n\t\t\t\t\t&::before{\n\t\t\t\t\t\tcontent: \"\u2219\";\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\tleft: 18px;\n\t\t\t\t\t\tcolor: #6D757A;\n\t\t\t\t\t\tfont-size: 20px;\n\t\t\t\t\t}\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t\tbackground-color: #E5E9EF;\n\t\t\t\t\t\tcolor: #ff4d4f;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n"]);

  _templateObject11 = function () {
    return data;
  };

  return data;
}

function _templateObject10() {
  const data = Object(_Users_RMBP_Desktop_gamewow_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tfloat: right;\n\tposition: relative;\n\tz-index: 120;\n\tmargin-right: 8px;\n"]);

  _templateObject10 = function () {
    return data;
  };

  return data;
}

function _templateObject9() {
  const data = Object(_Users_RMBP_Desktop_gamewow_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\t&.logoAndIndex {\n\t\tdisplay: flex;\n\t\tpadding-left: 7px;\n\t\tmargin-left: -7px;\n\t\t.logo {\n\t\t\twidth: 18px;\n\t\t\theight: 100%;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tmargin-right: 5px;\n\t\t\tmargin-left: 0px;\n\t\t\timg {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject9 = function () {
    return data;
  };

  return data;
}

function _templateObject8() {
  const data = Object(_Users_RMBP_Desktop_gamewow_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tfloat: left;\n"]);

  _templateObject8 = function () {
    return data;
  };

  return data;
}

function _templateObject7() {
  const data = Object(_Users_RMBP_Desktop_gamewow_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\theight: 100%;\n\tcolor: #222;\n\tline-height: 42px;\n\tpadding: 0 7px;\n\tfont-size: 12px;\n\tdisplay: block;\n\tposition: relative;\n\t&:hover {\n\t\tbackground-color: hsla(0,0%,100%,.3);\n\t\tcursor: pointer;\n\t}\n"]);

  _templateObject7 = function () {
    return data;
  };

  return data;
}

function _templateObject6() {
  const data = Object(_Users_RMBP_Desktop_gamewow_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\theight: 100%;\n\tul {\n\t\theight: 100%;\n\t\tposition: relative;\n\t\tdisplay: flex;\n\t}\n"]);

  _templateObject6 = function () {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = Object(_Users_RMBP_Desktop_gamewow_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\twidth: 980px;\n\tmin-width: 980px;\n\theight: 100%;\n\tmargin: 0 auto;\n\tposition: relative;\n\tz-index: 4;\n"]);

  _templateObject5 = function () {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = Object(_Users_RMBP_Desktop_gamewow_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\twidth: 100%;\n\theight: 100%;\n\tposition: absolute;\n\tz-index: 3;\n\tleft: 0;\n\ttop: 0;\n\tbackground-color: hsla(0,0%,100%,.4);\n\tbox-shadow: 0 1px 2px rgba(0,0,0,.1);\n"]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_Users_RMBP_Desktop_gamewow_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\twidth: 100%;\n\theight: 100%;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\tz-index: 2;\n\tbackground-repeat: no-repeat;\n\tfilter: blur(4px);\n\toverflow: hidden;\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_Users_RMBP_Desktop_gamewow_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\twidth: 100%;\n\theight: 170px;\n\tposition: absolute;\n\tz-index: 1;\n\ttop: 0;\n\tleft: 0;\n\t.banner-img {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\ttop: 0;\n\t\timg {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n\t.search-wrapper {\n\t\twidth: 980px;\n\t\theight: 100%;\n\t\tmin-width: 980px;\n\t\tmargin: 0 auto;\n\t\tposition: relative;\n\t\t.search-box {\n\t\t\tposition: absolute;\n\t\t\tright: 0;\n\t\t\tbottom: 20px;\n\t\t\tbox-sizing: border-box;\n\t\t\twidth: 340px;\n\t\t\theight: 34px;\n\t\t\tbackground-color: rgba(0, 0, 0, 0.17);\n\t\t\tborder-radius: 6px;\n\t\t\tpadding: 2px;\n\t\t\tdisplay: flex;\n\t\t\t.hot-chart {\n\t\t\t\twidth: 68px;\n\t\t\t\theight: 30px;\n\t\t\t\tbackground-color: rgba(255, 255, 255, 0.88);\n\t\t\t\tborder-radius: 4px;\n\t\t\t\tline-height: 30px;\n\t\t\t\t&:hover {\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\tbackground-color: #fff;\n\t\t\t\t}\n\t\t\t\t.iconfont {\n\t\t\t\t\tfont-size: 14px;\n\t\t\t\t\tcolor: #ff4d4f;\n\t\t\t\t\tpadding: 0 6px;\n\t\t\t\t}\n\t\t\t\t.title {\n\t\t\t\t\tfont-size: 14px;\n\t\t\t\t\tcolor: #ff4d4f;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.search-input {\n\t\t\t\twidth: 268px;\n\t\t\t\theight: 30px;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tpadding-left: 2px;\n\t\t\t\t.input {\n\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 30px;\n\t\t\t\t\tborder: 0px;\n\t\t\t\t\toutline: none;\n\t\t\t\t\tpadding-left: 6px;\n\t\t\t\t\tpadding-right: 30px;\n\t\t\t\t\tborder-radius: 4px;\n\t\t\t\t\tbackground-color: rgba(255, 255, 255, 0.88);\n\t\t\t\t\t&:hover,\n\t\t\t\t\t&:focus {\n\t\t\t\t\t\tbackground-color: #fff;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.search-icon {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\twidth: 30px;\n\t\t\t\t\theight: 30px;\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\ttop: 2px;\n\t\t\t\t\tright: 2px;\n\t\t\t\t\tline-height: 30px;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tfont-size: 24px;\n\t\t\t\t\tcolor: #1890ff;\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\tcolor: #ff4d4f;\n\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_RMBP_Desktop_gamewow_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\twidth: 1280px;\n\theight: 42px;\n\tposition: relative;\n\tz-index: 100;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}


const HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
const BannerAndSearch = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
const NavBlurBg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
const NavMask = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());
const NavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav(_templateObject5());
const NavWrapperCommonStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject6());
const NavUlLiStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li(_templateObject7());
const LeftNavWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(NavWrapperCommonStyle)(_templateObject8());
const LeftNavUlLi = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(NavUlLiStyle)(_templateObject9());
const RightNavWrappper = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(NavWrapperCommonStyle)(_templateObject10());
const RightNavUlLi = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(NavUlLiStyle)(_templateObject11());
const WriteWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject12()); // 个人中心弹框

const UserPop = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject13());
const BaseInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject14());
const UserMenu = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject15());
const ExitAccount = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject16());

/***/ }),

/***/ "./src/common/iconfont/iconfont.js":
/*!*****************************************!*\
  !*** ./src/common/iconfont/iconfont.js ***!
  \*****************************************/
/*! exports provided: IconGlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconGlobalStyle", function() { return IconGlobalStyle; });
/* harmony import */ var _Users_RMBP_Desktop_gamewow_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/_styled-components@4.3.2@styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  const data = Object(_Users_RMBP_Desktop_gamewow_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  @font-face {\n    font-family: 'iconfont';  /* project id 1357573 */\n    src: url('//at.alicdn.com/t/font_1357573_qg17kdeo6f.eot');\n    src: url('//at.alicdn.com/t/font_1357573_qg17kdeo6f.eot?#iefix') format('embedded-opentype'),\n    url('//at.alicdn.com/t/font_1357573_qg17kdeo6f.woff2') format('woff2'),\n    url('//at.alicdn.com/t/font_1357573_qg17kdeo6f.woff') format('woff'),\n    url('//at.alicdn.com/t/font_1357573_qg17kdeo6f.ttf') format('truetype'),\n    url('//at.alicdn.com/t/font_1357573_qg17kdeo6f.svg#iconfont') format('svg');\n  }\n\n  .iconfont {\n    font-family: \"iconfont\" !important;\n    font-size: 16px;\n    font-style: normal;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}


const IconGlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());

/***/ }),

/***/ "./src/common/img/articleImg.jpg":
/*!***************************************!*\
  !*** ./src/common/img/articleImg.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/articleImg.591cce12.jpg";

/***/ }),

/***/ "./src/common/img/bannerImg.png":
/*!**************************************!*\
  !*** ./src/common/img/bannerImg.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bannerImg.7a28a3c0.png";

/***/ }),

/***/ "./src/common/img/jia.png":
/*!********************************!*\
  !*** ./src/common/img/jia.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAACXBIWXMAAAsSAAALEgHS3X78AAADM0lEQVRo3uWasU/bQBTGf1jeGqljsgWU7HbndMgEW2TBDmUBqR2afwAR1H+ApepsdtDJG50yNF1J9lokWxiRzEyHc+Qk+Oxz7JjQfguOcj5//vK99+7dsfX8/EwudBwbcIA2sA3UFSMnwBjoAwJPDPM8dmsl4h1nG+iGhOsrPnsCCOAST4zXS1wS7gFHFAsX6GV5ASMD6R5wvwbShHPeh88oSHGpsgAsysEIcNLUTyYuA68PvKdcPALtpAA2Ekh/Au5egTThM+9CDhkUl0rfpU7/5TNMpzB9gNEIgiB+nGVBsyGvgwBuf2Z5iQ9xypsKT/dTp2s2YG83+nxyqibebMDRYejgUVbifTqOvez5OKsILXu0WtH1YCBVX59tRLLHZTpKzx6VyqLav36v2/PWcqqMPC4tcq81zd6u9DdIpU9O5bUn8tE7O5dWUmNnZpl5xbWTPwcH0fXtbZnZprcYnFLtI221a9X4DKFSq1pbvMf348c9BekVtuP08MR4llW6K6nt+4uZ5Oxccc9+lFV8Xz1OD12gO7OKk1nt14MjPS6LTV0rk8yr/Xqo03FsszC1D/bV39nWot+TxurVBMcMO5f0KjnzqDJsDvX0qlWTx/7xdYi3jbDdSgnIOYWCYBPssm1q+XumQBCAexUVn+XiUQRUqXLJ56bWZNOp/Ht9o/4Zkyre3i58bEVWcK9yv58e8dFIBs31jVyiZkWlstp9uXvO6QN8/8EmwdQeqROUOossy1KPc6/kr1pol79hMMONmXohs+VdZOmn2omJ3BYrhng5iyyAsaHVX24e+kZcP/cGIEw8MaTj5PN5rSp9rPx+7rt3KTn9KZBFKsHfeGJoznX2X1cm3mrpL7KaDfh2kRzgyTEg5tPh5RuyyWVUgDwxpuO4rLoTOxik/bz6SO473VmXn317olKBRkPXj0Vj5yXxaEPofEMtcoEnei83hCLyQ8rbC9euyXjCTlurOMj96U3BY1xfbMSs8MZafWh5aMedThiK5ekQON4A0seqU4l/8CglUt5GHiiVF4hgpx3g6p9zlpMqF1JeMR2QnHAHeZhaNNywuPR0b/hPjsTVAVz6PyH8BeGpSI4ZyDtuAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/common/img/logo500.png":
/*!************************************!*\
  !*** ./src/common/img/logo500.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/common/img/userImg.jpeg":
/*!*************************************!*\
  !*** ./src/common/img/userImg.jpeg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/userImg.c9f10b03.jpeg";

/***/ }),

/***/ "./src/common/img/wow.png":
/*!********************************!*\
  !*** ./src/common/img/wow.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAuCAYAAAC4e0AJAAAACXBIWXMAAAsSAAALEgHS3X78AAAFSElEQVRo3t2az2tcVRTHP+e+mTeTSRozbdqJuxJRwVWgouIqOLG4VETXdWNdCCq4KP4BVsFFhYKtG7sTLC7cSZnRrFwowYIoKFgCbpy2aWOS+fVm5h4Xk5e8eXm/pmlN44XAm7n3vvs953zP99zcO6Kq7Lc16u4isGgML6vyhCoTUeNEWBPhF2v5BliuVL3r+1lX7hV8o+6eFOFD4BVVirm84hYUx1Fy+eh3el2DHYDXFTsYiBFhTZWLwJVK1Vt94OAbdXdBhEuqPOs4SmnKUpgYgh6n9XtCu2VoN42qIiJ8qcoH4xiRGXyj7s6IcF6Vt3J55cgjA9zC/ikH0G4ZmhvGWis9Vc5Vqt6F+wZ+29vXgNmp6YGUpiz3u6mF5pZDc9MghhW1LFWq3vq+wDfq7hkRLjk5LcwcG4xNj3FbvyesrznWWumq8nxSUieCb9TdM8AXEyXLdHnAf9XUwp3bOQZ9aScZYB424ABi4OhsHyenEyL80Ki7C5k9vz3454MAHhOBW6o8Ec4BE6Mq19yCHijwYASM0WNiqKXSRoTzwOzM0T4PQxMD0+WBUcupRt19N5Y222X++5ljAwpFy8PUNv9xaDdNR5VHffrkQlZ+ks/rKPD8PMxd3v3cqsHax8krhecA/PViOsK5y8O5AL0b8PfZna6pIwPaTVMQwzng3Ijnfa+XZ/t7K+fjd8ApD5+btXQgM2/uBb/6NHRW4uc45eE6flv/fAQ8wNaGQ2vLdFWZq1S99R3OG8PbbkGjS34rkCuTS+keLJ7a+13avPCcCEMnpwYAeeDMTsI26u6MtbxaLMXwvFkbD0hUf5RBSf2bVyOTtzhhjTG8E1SbRYBiMSP4JCD5+V3edlZgcHf4XEoxONgfnBe2sWSxlpONunvSbMvj625Bkbh627sx/MsCfjIEwg+/U06eF+xr1mKHuQVFBAss+nCfybspG67gC5O8GAafJV+Kp3YFIYbvI8F11Yhw2gCo8lgq+OALnfIuNZLCv3l11Og4z4e/b9XSwCPCU6ZRd2eG1BnD80lJ6XvQ521nZZdypaVslInh+47vcooqTxpgwedSYgvzPsrzQYOCxvrPTjldiVK8DuA4iipFM1aNbtayy2EQRJByYYqEEzmF75n286ngo/hbivF8ULPD1Am/p1l7QOBbCbyfXNrle7jA+NyPilgQfERhSgN/fXimIumjgyDCC6eFPo5y4eKUoQ0Ggggd428vVWV/1AmC2LiaHLXg2IzFaQR8XxDhd7/C/tnzMoIPescHEVSRsColeT4/v0u1cFSThM8TVPnN5/yPmcEHPegXq7hEjTPArwdB+rSyJ2rPE6vKNb/CfuV1Bc3yz1MU7yczgg8CPPLaaK3ISBmvK6higGXf88sAnU5G8QmqQhh8q5YtX/Lz98T3TstgDKuVqrdqACpVb90Yvm5tmfF5Px3wYFppD251g0bH5UnEUUinbay1fDqi89Zysd+TbJIZ9uA4vPWjlpVqwWW3HIAecGUEfKXqLYthpbnpjC+Z44CIUpQMKqMWWltGES748m5CA973ukI3C/fDXs4qdVEGZqisW0OndtXyUexx383v3M+As8fneiJJNoQ3VGPo9J4tQkrEvK5w93YO4L3g2f0e8NvHfX/kXT1enj34UzO1sHYzZ62Vn0684D2XuDGrVL11VU57XWHjrnPgwO/czmGtrKnyUqZd5fZ5+BvtljkwA0Jn9KejbkliWV2pelcOyoCslwv/32udgAELInwLnDhUF2ohFTp8V5kRUThcl8gRRhy+6/sYQxbJ9sOJWyL8er9+OPEvRoweNU6JuFUAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/Users/RMBP/Desktop/\u4E2A\u4EBA\u9879\u76EE/gamewow/src/index.js";



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}), document.getElementById('root'));

/***/ }),

/***/ "./src/main-pages/home/index.js":
/*!**************************************!*\
  !*** ./src/main-pages/home/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.js */ "./src/main-pages/home/style.js");
var _jsxFileName = "/Users/RMBP/Desktop/\u4E2A\u4EBA\u9879\u76EE/gamewow/src/main-pages/home/index.js";



class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_1__["HomeWrapper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_1__["HomeNav"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "home-nav-ul",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_js__WEBPACK_IMPORTED_MODULE_1__["HomeNavItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "new-num",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "22"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "title console-game",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "\u5355\u673A\u6E38\u620F")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/main-pages/home/style.js":
/*!**************************************!*\
  !*** ./src/main-pages/home/style.js ***!
  \**************************************/
/*! exports provided: HomeWrapper, HomeNav, HomeNavItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeWrapper", function() { return HomeWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeNav", function() { return HomeNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeNavItem", function() { return HomeNavItem; });
/* harmony import */ var _Users_RMBP_Desktop_gamewow_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/_styled-components@4.3.2@styled-components/dist/styled-components.browser.esm.js");


function _templateObject3() {
  const data = Object(_Users_RMBP_Desktop_gamewow_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 2px 0 0 0;\n    display: flex;\n    flex-direction: column;\n    .new-num {\n        display: block;\n        text-align: center;\n        border-radius: 2px;\n        background-color: #1890ff;\n        line-height: 16px;\n        margin: 2px 12px;\n    }\n    .title {\n        display: inline-block;\n        \n    }\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_Users_RMBP_Desktop_gamewow_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 100%;\n    height: 58px;\n    box-sizing: border-box;\n    padding: 8px 0 0 0;\n    background-color: lightcoral;\n    .home-nav-ul {\n        width: 100%;\n        height: 100%;\n        display: flex;\n    }\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_Users_RMBP_Desktop_gamewow_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 980px;\n    height: 1000px;\n    margin: 0 auto;\n    padding-top: 128px;\n    background-color: lightblue;\n    font-size: 12px;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}


const HomeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
const HomeNav = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav(_templateObject2());
const HomeNavItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li(_templateObject3());

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/_redux@4.0.4@redux/es/redux.js");
/* harmony import */ var _reducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer.js */ "./src/store/reducer.js");


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducer_js__WEBPACK_IMPORTED_MODULE_1__["default"], composeEnhancers());
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/store/reducer.js":
/*!******************************!*\
  !*** ./src/store/reducer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "./node_modules/_redux-immutable@4.0.0@redux-immutable/dist/index.js");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_header_store_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/header/store/index.js */ "./src/common/header/store/index.js");


const reducer = Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  header: _common_header_store_index_js__WEBPACK_IMPORTED_MODULE_1__["reducer"]
});
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony import */ var _Users_RMBP_Desktop_gamewow_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/_styled-components@4.3.2@styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  const data = Object(_Users_RMBP_Desktop_gamewow_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}


const GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/RMBP/Desktop/个人项目/gamewow/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/RMBP/Desktop/个人项目/gamewow/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map