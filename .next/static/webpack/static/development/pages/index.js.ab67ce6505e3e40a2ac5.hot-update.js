webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fela__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fela */ "./node_modules/fela/es/index.js");
/* harmony import */ var react_fela__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-fela */ "./node_modules/react-fela/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Homepage_homepageBlock_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Homepage/homepageBlock.js */ "./components/Homepage/homepageBlock.js");
/* harmony import */ var _components_Homepage_blockContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Homepage/blockContainer */ "./components/Homepage/blockContainer.js");
/* harmony import */ var _components_Homepage_headerContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Homepage/headerContent */ "./components/Homepage/headerContent.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
var _jsxFileName = "/Users/j.ruffle/GithubProjects/animations-with-hooks/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var renderer = Object(fela__WEBPACK_IMPORTED_MODULE_1__["createRenderer"])();

var Home = function Home() {
  return __jsx(react_fela__WEBPACK_IMPORTED_MODULE_2__["RendererProvider"], {
    renderer: renderer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Home | Animation Library")), __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_7__["default"], {
    animations: animationData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(_components_Homepage_headerContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    heading: "Animation Library",
    subHeading: "A library for animations built using React Hooks, Intersection Observer and more.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(_components_Homepage_blockContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, animationData.map(function (item, index) {
    return __jsx(_components_Homepage_homepageBlock_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      index: index,
      animationName: item.animationName,
      animationDescription: item.animationDescription,
      animationKey: item.animationKey,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.ab67ce6505e3e40a2ac5.hot-update.js.map