webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_fela__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-fela */ "./node_modules/react-fela/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StyledText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StyledText */ "./components/StyledText/index.js");
var _jsxFileName = "/Users/j.ruffle/GithubProjects/animations-with-hooks/components/nav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var navigationBar = function navigationBar() {
  return {
    display: "flex",
    height: "38px",
    backgroundColor: "white"
  };
};

var NavigationBar = Object(react_fela__WEBPACK_IMPORTED_MODULE_1__["createComponent"])(navigationBar, "nav");

var DropdownCaret = function DropdownCaret() {
  return __jsx("svg", {
    width: "30",
    height: "30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("path", {
    d: "M24 11.305l-7.997 11.39L8 11.305z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
};

var dropdownArea = function dropdownArea() {
  return {
    "float": "left",
    overflow: "hidden"
  };
};

var DropdownArea = Object(react_fela__WEBPACK_IMPORTED_MODULE_1__["createComponent"])(dropdownArea, "div");

var dropdownButton = function dropdownButton() {
  return {
    border: "none",
    outline: "none",
    height: "30px",
    padding: "0 0 0 4px",
    ":hover": {
      cursor: "pointer"
    }
  };
};

var DropdownButton = Object(react_fela__WEBPACK_IMPORTED_MODULE_1__["createComponent"])(dropdownButton, "button", ["onClick"]);

var dropdownList = function dropdownList(_ref) {
  var open = _ref.open;
  return {
    display: open ? "flex" : "none",
    flexDirection: "column",
    position: "absolute",
    backgroundColor: "white",
    minWidth: "250px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 8px 0px",
    zIndex: 20,
    padding: "6px"
  };
};

var DropdownList = Object(react_fela__WEBPACK_IMPORTED_MODULE_1__["createComponent"])(dropdownList, "div");

var pageLink = function pageLink() {
  return {
    textDecoration: "none",
    font: "12px/18px Verdana, serif",
    padding: "4px",
    color: "black",
    ":hover": {
      cursor: "pointer",
      color: "#008f9c",
      fontStyle: "bold"
    }
  };
};

var PageLink = Object(react_fela__WEBPACK_IMPORTED_MODULE_1__["createComponent"])(pageLink, "a", ["onClick"]);

var headingLink = function headingLink() {
  return {
    cursor: "pointer",
    textDecoration: "none"
  };
};

var HeadingLink = Object(react_fela__WEBPACK_IMPORTED_MODULE_1__["createComponent"])(headingLink, "a", ["onClick"]);

var Navigation = function Navigation(_ref2) {
  var animations = _ref2.animations;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      dropdownOpen = _useState[0],
      setDropdownOpen = _useState[1];

  return __jsx(NavigationBar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(HeadingLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_StyledText__WEBPACK_IMPORTED_MODULE_3__["HeadingMedium"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Animation Library"))), __jsx(DropdownArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(DropdownButton, {
    onClick: function onClick(e) {
      return setDropdownOpen(!dropdownOpen);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(DropdownCaret, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })), __jsx(DropdownList, {
    open: dropdownOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, animations.map(function (item) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/".concat(item.animationKey),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, __jsx(PageLink, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, item.animationName));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ })

})
//# sourceMappingURL=index.js.d5143dc600bb06087297.hot-update.js.map