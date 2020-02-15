webpackHotUpdate("static/development/pages/index.js",{

/***/ "./data/index.js":
/*!***********************!*\
  !*** ./data/index.js ***!
  \***********************/
/*! exports provided: animationData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationData", function() { return animationData; });
var animationData = [{
  animationName: "Fade in on scroll",
  animationDescription: "Using intersection observer",
  animationKey: "fade-scroll-io",
  key: "1"
}, {
  animationName: "Fade in on scroll",
  animationDescription: "Using bounding client",
  animationKey: "fade-scroll-bc",
  key: "2"
}, {
  animationName: "Grow/Shrink in on scroll",
  animationDescription: "Using bounding client",
  animationKey: "size-scroll-bc",
  key: "3"
}, {
  animationName: "Grow/Shrink in on scroll",
  animationDescription: "Using intersection observer",
  animationKey: "size-scroll-io",
  key: "4"
}, {
  animationName: "Parallax image",
  animationDescription: "Parallax imagery, shifting behaviour on scroll",
  animationKey: "parallax-image",
  key: "5"
}, {
  animationName: "Slide gallery",
  animationDescription: "Overlapping slide behaviour using sticky",
  animationKey: "slide-gallery",
  key: "6"
}, {
  animationName: "Sticky carousel",
  animationDescription: "Carousel behaviour with vertical numbered pips",
  animationKey: "sticky-vertical-carousel",
  key: "7"
}];

/***/ }),

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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data */ "./data/index.js");
/* harmony import */ var _components_Homepage_homepageBlock_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Homepage/homepageBlock.js */ "./components/Homepage/homepageBlock.js");
/* harmony import */ var _components_Homepage_blockContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Homepage/blockContainer */ "./components/Homepage/blockContainer.js");
/* harmony import */ var _components_Homepage_headerContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Homepage/headerContent */ "./components/Homepage/headerContent.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
var _jsxFileName = "/Users/j.ruffle/GithubProjects/animations-with-hooks/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var renderer = Object(fela__WEBPACK_IMPORTED_MODULE_1__["createRenderer"])();

var Home = function Home() {
  return __jsx(react_fela__WEBPACK_IMPORTED_MODULE_2__["RendererProvider"], {
    renderer: renderer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Home | Animation Library")), __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_8__["default"], {
    animations: _data__WEBPACK_IMPORTED_MODULE_4__["animationData"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(_components_Homepage_headerContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    heading: "Animation Library",
    subHeading: "A library for animations built using React Hooks, Intersection Observer and more.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_components_Homepage_blockContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_4__["animationData"].map(function (item, index) {
    return __jsx(_components_Homepage_homepageBlock_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      index: index,
      animationName: item.animationName,
      animationDescription: item.animationDescription,
      animationKey: item.animationKey,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.933d3c42ff081184a877.hot-update.js.map