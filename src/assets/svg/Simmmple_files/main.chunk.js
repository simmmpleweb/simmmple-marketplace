(this["webpackJsonpsimmmple-marketplace"] = this["webpackJsonpsimmmple-marketplace"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/App.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/assets/css/App.css ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/plus-jakarta-display.min.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n    font-family: 'Plus Jakarta Display', sans-serif;\n}", "",{"version":3,"sources":["webpack://src/assets/css/App.css"],"names":[],"mappings":"AAEA;IACI,+CAA+C;AACnD","sourcesContent":["@import url(\"https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/plus-jakarta-display.min.css\");\n\nbody {\n    font-family: 'Plus Jakarta Display', sans-serif;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var assets_css_App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/css/App.css */ "./src/assets/css/App.css");
/* harmony import */ var assets_css_App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_css_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/navbar/Navbar */ "./src/components/navbar/Navbar.js");
/* harmony import */ var layouts_Main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! layouts/Main.js */ "./src/layouts/Main.js");
/* harmony import */ var components_footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/footer/Footer */ "./src/components/footer/Footer.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/vladmihalache/Documents/GitHub/simmmple-marketplace/src/App.js";

 // Custom Components






function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    overflowX: "hidden",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(layouts_Main_js__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(components_footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/assets/css/App.css":
/*!********************************!*\
  !*** ./src/assets/css/App.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/App.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/App.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/App.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/assets/img/bundles/bundles-background.png":
/*!*******************************************************!*\
  !*** ./src/assets/img/bundles/bundles-background.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/bundles-background.b7eef0d0.png");

/***/ }),

/***/ "./src/assets/img/bundles/bundles-stars.png":
/*!**************************************************!*\
  !*** ./src/assets/img/bundles/bundles-stars.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAWCAYAAAA/45nkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUtSURBVHgB7VlNbBtFFH5OG1piSoxoQ0UrxblwSIuUQpUKipRY4lAEEiBV9AS0cEUiJwoSiBYORYiAEAKuAY5UahBKOYW6nCoKoofakB6ILUVJ6rS1Se028d/wvZ1dz+yP1+t10pM/6Xl3Z/d98+abNz+7jlATCCFiOLwNG4eNwGLURTsowK7AfoJNRyKRjNdDEWeBKfyHsAnqYiMxBTvt7AhbB0B8zvRzsDh1sRnIwBJ6JzQ6AOLHcfiLulPNZoOnJu4Enp6oh39M8S9QO+LX7hCVV6gjMEen/p3EsFFtaI+DNT5nTvWyA0jO+XFqB9dOYkB9Q6FRQdDpt4jmO+DgGOZOU2gsfkf0NziqHSTCtXfC6BAnqTn1mNl/nNpBKU20DgH/w3E1RaFQhG+1RHTzcjgB8hcRQ47oLuLIJaltcALcSiJ7EcPyDIUC67AGnkIoHSZ4FPAIeInaxfJZDD0hLfMjhcIS/Go4ViDAYggBjBhwrCOGbIgYbvyi/BfOUyhwDHWSFk6Hia34edH3EYHsrK7IjGGxOPNvp1XFeZzPTRFF40Tbd+F5lO3a5+YoZ2HI2DrW/dspycONZ44sOkD0EW2JenNU4Fs351r24frXcioG5kp/TdS/T3JsAVcvLDZk5+A28KirgCt/WflXim7/GNrTG22hQ8rkQEz5VGsd3BiLYBjkyW/xzf+AipAtFTBWyDzCyo5rowzXVdjwK0T7jymOG59juP7h5rCuG1x1df8w5ua9h6Rwy+/J0cb3qsLOUyU7l1XGzx2ZlJ1w90/EMCnLymSP13q+rNXN8Tw6SvTMu6oNBeiw6qFDI37hjmP4mF0HNwo91Grns+MI0dZB1dNsxtAllcFsVll/nGgoYeeIvYrVZqedw+anlbHQj70gxWf0ou7Ya/Ke0Opp+At3GWfwE2+qEXD/k8jM57S6TB6h1alz9Q0QHXjD3oYHPHRo+Draw9Y/5NbBjRiPAEFBkPsedt47+8tmFsUh3MgJb38eugvIwmKmOQdf7z8hO8DLP/sxsjmn6tOzzshiHLdh+D910j79WLiJOXvprH8WP4Rp4yB2Z9EBaq2DR/w8yvx0cIBHQCbQkwPIwuhBd/Zb17tH/SvthTBDnxDdN6h8ag6Ox5uI3/A/g5M+VX9N2EcCz9/PTnqLz3j4KNHOox7xm1m8HaKPfdRcfJcOwj7y+Hr3ocDiA1e4Ay4GfdpYwGxDTQtgrRSMg7dtuug6R6nFCw2/9PACWPeYdozFOEAMehucSbQesA0Wh6WBTYcitYEsd8B04MdX0+4KLTFuzUtx/MB7f0tAtp4+O8f1q/7+vOuw5lh9DtbjWfi9BUdazfVsVgx8vg7xcgH285YOghzrEQXTQWGaOyBJ8vuEP4ra1vNBzJOH8fY3BtuTkGX8QpPP+HPcyaiG73keu4xviUbxJrttwNzKtQje2P6aYj+SUDHsTahOyfl0Yg3cpYzZhmEstKeInv4MsYwrMTkGXx1SSocdw5oO47L+IDpIZPA9aMo4wzrMb2X+KM0LMfepEIWr7nv/zgox+4EQxev+HCtJyVGc9+D4VYjfzghRLjb3X5oR4h+OIeW+x3Vf+gr3f27uXwV3+pQQizPe/rPvC7FwSfhiI3SQOM7a619DuTdepy7uBb5E9hv/t+gdwO8DF0j++9XF5iEJexkdYEz71tdQ4gLYAZx28HmxixbgzE9Y4jMiXk8J+YX0Cwrzoa4LLyRJ/h2ZdN6I+HmZHTFi2iB10Q7wEct4yZ3WM96J/wF/8HIN9WDVcwAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./src/assets/img/bundles/developers.png":
/*!***********************************************!*\
  !*** ./src/assets/img/bundles/developers.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/developers.cf19f29d.png");

/***/ }),

/***/ "./src/assets/img/bundles/medal.png":
/*!******************************************!*\
  !*** ./src/assets/img/bundles/medal.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/medal.1bd33e57.png");

/***/ }),

/***/ "./src/assets/img/bundles/purity.png":
/*!*******************************************!*\
  !*** ./src/assets/img/bundles/purity.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/purity.4a5ae86f.png");

/***/ }),

/***/ "./src/assets/img/bundles/sensual-background.png":
/*!*******************************************************!*\
  !*** ./src/assets/img/bundles/sensual-background.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/sensual-background.9f3d7fb9.png");

/***/ }),

/***/ "./src/assets/img/bundles/sensual.png":
/*!********************************************!*\
  !*** ./src/assets/img/bundles/sensual.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/sensual.d2cf9bd1.png");

/***/ }),

/***/ "./src/assets/img/bundles/simmmple-folder.png":
/*!****************************************************!*\
  !*** ./src/assets/img/bundles/simmmple-folder.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/simmmple-folder.5488b900.png");

/***/ }),

/***/ "./src/assets/img/bundles/trophy.png":
/*!*******************************************!*\
  !*** ./src/assets/img/bundles/trophy.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/trophy.24e4d6af.png");

/***/ }),

/***/ "./src/assets/img/bundles/uranus.png":
/*!*******************************************!*\
  !*** ./src/assets/img/bundles/uranus.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/uranus.563ed9bf.png");

/***/ }),

/***/ "./src/assets/img/bundles/vdb.png":
/*!****************************************!*\
  !*** ./src/assets/img/bundles/vdb.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/vdb.fafc05fd.png");

/***/ }),

/***/ "./src/assets/img/bundles/venus.png":
/*!******************************************!*\
  !*** ./src/assets/img/bundles/venus.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/venus.10681836.png");

/***/ }),

/***/ "./src/assets/img/footer/footer-background.png":
/*!*****************************************************!*\
  !*** ./src/assets/img/footer/footer-background.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/footer-background.cf544e89.png");

/***/ }),

/***/ "./src/assets/img/homepage/bundle-background.png":
/*!*******************************************************!*\
  !*** ./src/assets/img/homepage/bundle-background.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/bundle-background.d74d9be6.png");

/***/ }),

/***/ "./src/assets/img/homepage/deloitte.png":
/*!**********************************************!*\
  !*** ./src/assets/img/homepage/deloitte.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/assets/img/homepage/figma2.png":
/*!********************************************!*\
  !*** ./src/assets/img/homepage/figma2.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/figma2.d477c472.png");

/***/ }),

/***/ "./src/assets/img/homepage/georgiatech.png":
/*!*************************************************!*\
  !*** ./src/assets/img/homepage/georgiatech.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/assets/img/homepage/google.png":
/*!********************************************!*\
  !*** ./src/assets/img/homepage/google.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAAoCAYAAADAFLWVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAlASURBVHgB7VtdchNJEs6qbhkidiNWnGDF48yYRT4BcgSwO09WnwBzAosTIE4w4gRoTtDyEzvYGxYnsFgY/Ij2BpoIiACr1bmZVVJTXf2jauGVd2L6i1BY6q7Oyq6szMr8qixgA4Rn5034DE314ybMgv29GdT4v4FwacRGlIsbjzCGDkhoA2IrLQVngHIiBIxi78sxGXkKNa4NpUZVxoxuHqFY9ABFE9ylDtG7fFYbN4vR6a8fAKG1+o3R5e3gx6sdJ1l04/j0/ZFYND4gxP1KBmUgHIpo58PxycVTqLF15Bp1dHrxAhEHpcYUMFWfEvCEoJn5AmpsFb59gQ0KGB9mm+IMAZ/Tl3Hw4M7YvBO+etemP20B4ikZupV6ahH/B2psFSmjjk7e/5RnUPK4Z/AxGgRBfpYbPNyd0B/+DMnAhyvjYhw/C/5+pw81torEqGwMMl8vdRdhSt4ZBA/vTMARZOBh+PJiDP6iSwYdQI2tQxmVstyWWJB3oXmLwu3C2w9+/G4KFbF8pjboNUElSjK++chMsxlCeL1NDFrj+qGMipl1FMcH97/7GWr8LuGHJ287GS/1/GsLnYqCnDe6oLPpv/A1Wtd/I8ZqDDtfxptQkvyOUnh3Mcb26pqQYhLj4o2dybvqqBk2U54cx97n10y4pGhUxoZUau5YIFUTMluBmBDhL2/7pJBJEsy6D364BVvG8gUGQsLBmvrYma1iYwrw6N2wUyJvKkD2XSJToqMQj4rFyX4M0Wv6e5ZcRBh2H/7wmL+6MEpOTB7pTQZ+nGdcKaR3L30JnTPdq0J49q7N7JUarHXsFbNVi52zZW1cCC7P9MCWGFTLa9HgDFU5t1bHnfMyg2pxcZ/6LZVV3g8nrTvna5k80pvfL4+1y5APiPAGXBV49W6wCguu4DBleoUeLDirREXyCwnBht1f1sgpFBMopUJ75EXN7n3tUSb0QLOO4KpjGzbA0qBn9nJYBjb+8enF1BxTSTssrXQrdI79tC4dUBg4rPIhr+ilX0KEWYPimJTd59CkPvwd0Q6PTeo/VCHRwPG/aOZmE78ZEyhK1sfLWyRrjz6PuQ5PN4PD8J/ve5n3VAO9Rsc8eVUxb/SzBl32Q3rTsij4O7UZpVpgPOCxXP32qUHaiKIieV8Vwpjt/BI2rZjPQk3pM6Y1kte/r+GGB+DSZyOo9vxiGMXpZ5lAydbbigFjkkR48Zmpg/DwKckZrhIbniSkk4uOQ9CM2nBdiM6DmuBR+rm8fpZr6JiWC3NpadLE43FRUUZmZ6towf8SxiSi/deD1K01tCK9UB9F/Ny8RuH8KPkxb3SszohAkYUECl/n+9zOuNyEL43DRILt9ZSolVKfjXlvI4/lCW6CZOT1w8kfL3sg4rbVvruKWpLcOUW4U/Z5DxyBsHjCYWfNxwqbegBVKQVWVIj94bo+wYv61pXmKmkSQqY9RIjROgJFGdbSUXjyINHRCoc4l89K5ZGHo8DnUBHk3XdTv6Xsm7/D03932Ts5OaK2RznLwYQmRou/+TTzOD4fGXeb/DIu9Vtw/2+jdW2oZGqxSyZdJ4mYsJIJHLswWDxoo5NfOXwaz6tZO9F/zb5iNwJF4piMZ4zBqv7cTEeIvBH4cdUMONVXPP/8OlvaoPUIRSKEnykvGpn28sGPJhA1ZqbX6NoOxnAFoBmXCrFSeudaa2xSQWXoJ6bgClR7uW3j2dayt/TsjaIpuGDemJARzCvNPB0xFr85SFPeTxMPXKHCZpS+JvwbLyDCDkVSfr/0Tc4TBE3Ygp0zqcIF2OECOzo8fhvCV+dqn9W8Fs/hNXwrrjqZ86MWXCPy2aa8+lpnwkRk3Ob8omgrVJ988KOBlSzw+vTCTJM3gZA7oa1UEr6E5ZkSOuAsOF2GyUZDe799EsPzOuCCbHI40fLSOrrmG8vJXBFFpeSyHFMlze6+y7KojKq9FdIJABf4zNxsYFgOJ5oAsMsV+TUiLLyx3Z9LdFD7vpbc+AuqdRoXmIoCQvhOpYVKPFIXlka1dVzmG7AWjR5UBYqxdWVG4T4gQ94q88o8JGeUgge7A7uoXRmWGAvnukvXW1ys55UC3yfytcemX4TpNZtMyMiWwqLFDO+XOLTudfLIBBN8wA6sJWKVYOXqqCNYuY4b1KkoFxlyBeSi1JBcQzOXbDte6uAZNi65eJ2ke1tyo/QwGzfPc/kll/XTkE8Rgk2T8cKeUwpQSWRfa/OEKOgjl0KjfCCRoUOTZQQPfyo61cgGVQfsLF3NEJfRUU/081wdeQOBddwAqpKw6lua5GGRQzFXTXV9X+ljndzMnPtlA4noRgilOxv68PZSQitzuNuEYnSKCYBCBgbFCGlrTHWhNh2y+pBBnhP327PktamCOstkwryrEeOxokEp0aL1MWfzgNavyNuzdQ1P3w4EyqNCHVmekHcLx8xxl0bvKsmcSSHG5FhvWHfq568UkboZ3XmcP13ucZguPMxNHfRTlNxGoGzt4zwoWw/0JFKzu1JywYQBGfQwVyYffhOi4tFUMmgsH5tLhAmLlqso2n3rLTx516NNkmo1ruU4hYe5FSUXyds5RLpLL1wmPVHZ2poFnpM0Iqr3bPqvVLr20MNCmQ93h6y7M13Hg4KwX2RQRvfB9/vqVOV6YTO3dvng3IbIhsCdaiTHsSKh2//SvLxogbfoUVijECM6BcJnnGghyuOywXHohyKEuGcT/Ql7svAGVc5Oaa+lUJurN46F8IZVju4kOire2gyBX/Xjurdok1xvV0KyXYmN+ZO8OnXZT4f6Ocphtrj9hPOJvBLHyaiZDplrFahfiFmbzzCrknI79fGSEhHfb636+Nb/NwlDylj/RNwo641iBp/m02/VORkHSz/maQV6SY2et/ZX1v3Pvjasw3hvZNQ/KtiIeZvy2XaUWImviRXVz0+Cf+wOYEvwoUYpkkNmtLWl6t5f3gfrlhfFd5vcu7fdI0ISapQj8nu6ltWZr5BYSp/qkxdGPmDVvdtA7anrwLx41DgykiIuwT5QiTNg5onDsd5l8du8u0WEQMd83N4X3QbqNdUBduLjDIQJZb17sGXU4dcBTOGpg2VVQAal+jGAa0BtVEckhAbVtuUtl1tlny73r+t/kerwuwGYGJANPKD1s625b/6XT+BTEROqf0dXXbPXqAH/BclisHYfFcv7AAAAAElFTkSuQmCC");

/***/ }),

/***/ "./src/assets/img/homepage/home-background.png":
/*!*****************************************************!*\
  !*** ./src/assets/img/homepage/home-background.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/home-background.84ac6799.png");

/***/ }),

/***/ "./src/assets/img/homepage/mail2.png":
/*!*******************************************!*\
  !*** ./src/assets/img/homepage/mail2.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mail2.7ad4e3cf.png");

/***/ }),

/***/ "./src/assets/img/homepage/microsoft.png":
/*!***********************************************!*\
  !*** ./src/assets/img/homepage/microsoft.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/assets/img/homepage/msn.png":
/*!*****************************************!*\
  !*** ./src/assets/img/homepage/msn.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/assets/img/homepage/on-home-background.png":
/*!********************************************************!*\
  !*** ./src/assets/img/homepage/on-home-background.png ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/on-home-background.c5045a2b.png");

/***/ }),

/***/ "./src/assets/img/homepage/purity-dashboard.png":
/*!******************************************************!*\
  !*** ./src/assets/img/homepage/purity-dashboard.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/purity-dashboard.bdf5049d.png");

/***/ }),

/***/ "./src/assets/img/homepage/purity-sensual-kit.png":
/*!********************************************************!*\
  !*** ./src/assets/img/homepage/purity-sensual-kit.png ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/purity-sensual-kit.143cb605.png");

/***/ }),

/***/ "./src/assets/img/homepage/simmmple-button.png":
/*!*****************************************************!*\
  !*** ./src/assets/img/homepage/simmmple-button.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/simmmple-button.13f6f633.png");

/***/ }),

/***/ "./src/assets/img/homepage/uranus-wireframe-kit.png":
/*!**********************************************************!*\
  !*** ./src/assets/img/homepage/uranus-wireframe-kit.png ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/uranus-wireframe-kit.fe6addcb.png");

/***/ }),

/***/ "./src/assets/img/homepage/venus-db-free.png":
/*!***************************************************!*\
  !*** ./src/assets/img/homepage/venus-db-free.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/venus-db-free.479da08e.png");

/***/ }),

/***/ "./src/assets/img/homepage/venus-db-pro.png":
/*!**************************************************!*\
  !*** ./src/assets/img/homepage/venus-db-pro.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/venus-db-pro.f20ef0bf.png");

/***/ }),

/***/ "./src/assets/img/homepage/venus-design-system.png":
/*!*********************************************************!*\
  !*** ./src/assets/img/homepage/venus-design-system.png ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/venus-design-system.22470ad4.png");

/***/ }),

/***/ "./src/assets/img/homepage/vscode2.png":
/*!*********************************************!*\
  !*** ./src/assets/img/homepage/vscode2.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/vscode2.03f92c21.png");

/***/ }),

/***/ "./src/assets/img/homepage/zoho.png":
/*!******************************************!*\
  !*** ./src/assets/img/homepage/zoho.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/assets/img/navbar/explore-background.png":
/*!******************************************************!*\
  !*** ./src/assets/img/navbar/explore-background.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/explore-background.4e6276a2.png");

/***/ }),

/***/ "./src/assets/img/navbar/figma.png":
/*!*****************************************!*\
  !*** ./src/assets/img/navbar/figma.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/assets/img/navbar/mail.png":
/*!****************************************!*\
  !*** ./src/assets/img/navbar/mail.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/assets/img/navbar/vscode.png":
/*!******************************************!*\
  !*** ./src/assets/img/navbar/vscode.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/components/card/Card.js":
/*!*************************************!*\
  !*** ./src/components/card/Card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/vladmihalache/Documents/GitHub/simmmple-marketplace/src/components/card/Card.js",
    _s = __webpack_require__.$Refresh$.signature();




function Card(props) {
  _s();

  const {
    variant,
    children,
    ...rest
  } = props;
  const styles = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["useStyleConfig"])("Card", {
    variant
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __css: styles,
    ...rest,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

_s(Card, "iefmmX9LVM7kdyggYlA/rYvyEAM=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["useStyleConfig"]];
});

_c = Card;
/* harmony default export */ __webpack_exports__["default"] = (Card);

var _c;

__webpack_require__.$Refresh$.register(_c, "Card");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/card/CardBody.js":
/*!*****************************************!*\
  !*** ./src/components/card/CardBody.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/vladmihalache/Documents/GitHub/simmmple-marketplace/src/components/card/CardBody.js",
    _s = __webpack_require__.$Refresh$.signature();




function CardBody(props) {
  _s();

  const {
    variant,
    children,
    ...rest
  } = props;
  const styles = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["useStyleConfig"])("CardBody", {
    variant
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __css: styles,
    ...rest,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

_s(CardBody, "iefmmX9LVM7kdyggYlA/rYvyEAM=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["useStyleConfig"]];
});

_c = CardBody;
/* harmony default export */ __webpack_exports__["default"] = (CardBody);

var _c;

__webpack_require__.$Refresh$.register(_c, "CardBody");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/countdown/Countdown.js":
/*!***********************************************!*\
  !*** ./src/components/countdown/Countdown.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/vladmihalache/Documents/GitHub/simmmple-marketplace/src/components/countdown/Countdown.js",
    _s = __webpack_require__.$Refresh$.signature();





const Countdown = ({
  date
}) => {
  _s();

  const [timerDays, setTimerDays] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("00");
  const [timerHours, setTimerHours] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("00");
  const [timerMinutes, setTimerMinutes] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("00");
  const [timerSeconds, setTimerSeconds] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("00");
  let interval = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])("");

  const startTimer = () => {
    const countdownDate = new Date(`${date}`);
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      let seconds = Math.floor(distance % (1000 * 60) / 1000);

      if (days < 10) {
        days = `0${days}`;
      }

      if (hours < 10) {
        hours = `0${hours}`;
      }

      if (minutes < 10) {
        minutes = `0${minutes}`;
      }

      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    templateColumns: "repeat(4, 120px)",
    gap: "10px",
    w: "510px",
    h: "130px",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      direction: "column",
      p: "26px 24px",
      textAlign: "center",
      bg: "linear-gradient(115.49deg, rgba(255, 255, 255, 0.33) 0%, rgba(255, 255, 255, 0.04) 105.19%)",
      boxShadow: "inset 10px -12px 47px rgba(0, 9, 92, 0.68), inset -6px 11px 21px -1px rgba(255, 255, 255, 0.28)",
      backdropFilter: "blur(42px)",
      borderRadius: "20px",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        fontSize: "52px",
        color: "#fff",
        fontWeight: "bold",
        children: timerDays
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        fontWeight: "normal",
        color: "#fff",
        children: "Days"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      direction: "column",
      p: "26px 24px",
      textAlign: "center",
      bg: "linear-gradient(115.49deg, rgba(255, 255, 255, 0.33) 0%, rgba(255, 255, 255, 0.04) 105.19%)",
      boxShadow: "inset 10px -12px 47px rgba(0, 9, 92, 0.68), inset -6px 11px 21px -1px rgba(255, 255, 255, 0.28)",
      backdropFilter: "blur(42px)",
      borderRadius: "20px",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        fontSize: "52px",
        color: "#fff",
        fontWeight: "bold",
        children: timerHours
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        fontWeight: "normal",
        color: "#fff",
        children: "Hours"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      direction: "column",
      p: "26px 24px",
      textAlign: "center",
      bg: "linear-gradient(115.49deg, rgba(255, 255, 255, 0.33) 0%, rgba(255, 255, 255, 0.04) 105.19%)",
      boxShadow: "inset 10px -12px 47px rgba(0, 9, 92, 0.68), inset -6px 11px 21px -1px rgba(255, 255, 255, 0.28)",
      backdropFilter: "blur(42px)",
      borderRadius: "20px",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        fontSize: "52px",
        color: "#fff",
        fontWeight: "bold",
        children: timerMinutes
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        fontWeight: "normal",
        color: "#fff",
        children: "Minutes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      direction: "column",
      p: "26px 24px",
      textAlign: "center",
      bg: "linear-gradient(115.49deg, rgba(255, 255, 255, 0.33) 0%, rgba(255, 255, 255, 0.04) 105.19%)",
      boxShadow: "inset 10px -12px 47px rgba(0, 9, 92, 0.68), inset -6px 11px 21px -1px rgba(255, 255, 255, 0.28)",
      backdropFilter: "blur(42px)",
      borderRadius: "20px",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        fontSize: "52px",
        color: "#fff",
        fontWeight: "bold",
        children: timerSeconds
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        fontWeight: "normal",
        color: "#fff",
        children: "Seconds"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, undefined);
};

_s(Countdown, "L6w3BwUURqIftFOxWCmJmcOOO18=");

_c = Countdown;
/* harmony default export */ __webpack_exports__["default"] = (Countdown);

var _c;

__webpack_require__.$Refresh$.register(_c, "Countdown");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var components_icons_IconBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/icons/IconBox */ "./src/components/icons/IconBox.js");
/* harmony import */ var components_icons_Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/icons/Icons */ "./src/components/icons/Icons.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var assets_img_footer_footer_background_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/img/footer/footer-background.png */ "./src/assets/img/footer/footer-background.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/vladmihalache/Documents/GitHub/simmmple-marketplace/src/components/footer/Footer.js";


 // Custom Components

 // Icons




 // Images




const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    w: "100vw",
    bg: "#F4F7FE",
    py: "125px",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      direction: "column",
      w: "1170px",
      mx: "auto",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        w: "100%",
        h: "250px",
        borderRadius: "30px",
        bgImage: assets_img_footer_footer_background_png__WEBPACK_IMPORTED_MODULE_8__["default"],
        bgPosition: "center center",
        px: "58px",
        align: "center",
        overflowX: "hidden",
        transform: "translateY(-50%)",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
          direction: "column",
          me: "100px",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            color: "#fff",
            mb: "8px",
            fontSize: "30px",
            fontWeight: "500",
            children: "Join over 10,000 digital creators today!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            color: "#fff",
            fontSize: "20px",
            children: "No Spam. Only sweet content and updates of our products."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
          borderRadius: "70px",
          bg: "#fff",
          w: "400px",
          h: "70px",
          p: "8px",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
              align: "center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
                type: "email",
                placeholder: "Enter your email address",
                boxShadow: "none",
                border: "none",
                _focus: {
                  border: "none"
                },
                _placeholder: {
                  color: "#878CBD"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
                bg: "brand.300",
                minW: "150px",
                h: "56px",
                _hover: {
                  bg: "#1A05B7"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                  fontSize: "sm",
                  color: "#fff",
                  fontWeight: "normal",
                  children: "Submit"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        align: "center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(components_icons_Icons__WEBPACK_IMPORTED_MODULE_4__["SimmmpleLogoColored"], {
          w: "170px",
          h: "40px",
          me: "40px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          color: "#878CBD",
          children: "Premium UI Kits, Templates & Themes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
        mt: "60px",
        mb: "42px",
        h: "1px",
        bg: "rgba(135, 140, 189, 0.2)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        templateColumns: "repeat(4, 1fr) 1.2fr",
        gap: "72px",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
          direction: "column",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            fontSize: "lg",
            color: "brand.700",
            fontWeight: "500",
            mb: "26px",
            children: "Explore"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
            direction: "column",
            spacing: "22px",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
              to: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                color: "#878CBD",
                fontSize: "md",
                children: "Figma Products"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
              to: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                color: "#878CBD",
                fontSize: "md",
                children: "Coded Products"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
              to: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                color: "#878CBD",
                fontSize: "md",
                children: "Apps & Plugins"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
          direction: "column",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            fontSize: "lg",
            color: "brand.700",
            fontWeight: "500",
            mb: "26px",
            children: "Company"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
            direction: "column",
            spacing: "22px",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
              to: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                color: "#878CBD",
                fontSize: "md",
                children: "Support & Contact"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
              to: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                color: "#878CBD",
                fontSize: "md",
                children: "Terms of Use"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
              to: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                color: "#878CBD",
                fontSize: "md",
                children: "Privacy Policy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
              to: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                color: "#878CBD",
                fontSize: "md",
                children: "License"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
              to: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                color: "#878CBD",
                fontSize: "md",
                children: "About us"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
          direction: "column",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            fontSize: "lg",
            color: "brand.700",
            fontWeight: "500",
            mb: "26px",
            children: "Technologies"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
            direction: "column",
            spacing: "22px",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
              to: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                color: "#878CBD",
                fontSize: "md",
                children: "Figma"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
              to: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                color: "#878CBD",
                fontSize: "md",
                children: "ReactJS"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
              to: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                color: "#878CBD",
                fontSize: "md",
                children: "Bootstrap"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
              to: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                color: "#878CBD",
                fontSize: "md",
                children: "Adobe XD"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
              to: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                color: "#878CBD",
                fontSize: "md",
                children: "HTML & CSS"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
          direction: "column",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            fontSize: "lg",
            color: "brand.700",
            fontWeight: "500",
            mb: "26px",
            children: "Resources"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
            direction: "column",
            spacing: "22px",
            w: "100%",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
              to: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                color: "#878CBD",
                fontSize: "md",
                children: "Inspiration"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
              to: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                color: "#878CBD",
                fontSize: "md",
                children: "Tutorials & Guides"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
              to: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                color: "#878CBD",
                fontSize: "md",
                children: "Dashboard Builder"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
              to: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                color: "#878CBD",
                fontSize: "md",
                children: "Third-Party Tools"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
              to: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                color: "#878CBD",
                fontSize: "md",
                children: "Made with Simmmple"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
          direction: "column",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            fontSize: "lg",
            color: "brand.700",
            fontWeight: "500",
            mb: "26px",
            alignSelf: "flex-end",
            children: "Follow our Socials"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
            direction: "row",
            spacing: "20px",
            mb: "20px",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
              href: "https://github.com/simmmpleweb",
              target: "_blank",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(components_icons_IconBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
                w: "48px",
                h: "48px",
                borderRadius: "30px",
                bg: "#fff",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
                  as: react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiFillGithub"],
                  w: "26px",
                  h: "26px",
                  color: "brand.300"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 215,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
              href: "https://www.instagram.com/simmmple.web/?hl=ro",
              target: "_blank",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(components_icons_IconBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
                w: "48px",
                h: "48px",
                borderRadius: "30px",
                bg: "#fff",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
                  as: react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiOutlineInstagram"],
                  w: "26px",
                  h: "26px",
                  color: "brand.300"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
              href: "https://twitter.com/simmmple_web",
              target: "_blank",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(components_icons_IconBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
                w: "48px",
                h: "48px",
                borderRadius: "30px",
                bg: "#fff",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
                  as: react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiOutlineTwitter"],
                  w: "26px",
                  h: "26px",
                  color: "brand.300"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 232,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 231,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
              href: "https://web.facebook.com/simmmple.web",
              target: "_blank",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(components_icons_IconBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
                w: "48px",
                h: "48px",
                borderRadius: "30px",
                bg: "#fff",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
                  as: react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaFacebook"],
                  w: "26px",
                  h: "26px",
                  color: "brand.300"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
            direction: "row",
            spacing: "20px",
            alignSelf: "flex-end",
            mb: "50px",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
              href: "https://www.linkedin.com/company/simmmple/",
              target: "_blank",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(components_icons_IconBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
                w: "48px",
                h: "48px",
                borderRadius: "30px",
                bg: "#fff",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
                  as: react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiFillLinkedin"],
                  w: "26px",
                  h: "26px",
                  color: "brand.300"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 257,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 256,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
              href: "https://pinterest.com/simmmple_web/",
              target: "_blank",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(components_icons_IconBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
                w: "48px",
                h: "48px",
                borderRadius: "30px",
                bg: "#fff",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
                  as: react_icons_bs__WEBPACK_IMPORTED_MODULE_7__["BsPinterest"],
                  w: "26px",
                  h: "26px",
                  color: "brand.300"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 267,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 266,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
              href: "https://www.tiktok.com/@simmmple.web",
              target: "_blank",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(components_icons_IconBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
                w: "48px",
                h: "48px",
                borderRadius: "30px",
                bg: "#fff",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
                  as: react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaTiktok"],
                  w: "26px",
                  h: "26px",
                  color: "brand.300"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 272,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 271,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
            direction: "column",
            alignSelf: "flex-end",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              fontSize: "sm",
              color: "#878CBD",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                as: "span",
                color: "brand.700",
                fontWeight: "normal",
                children: ["\xA9 ", 1900 + new Date().getYear(), " Simmmple"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 278,
                columnNumber: 17
              }, undefined), ", all rights reserved"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              fontSize: "sm",
              color: "#878CBD",
              alignSelf: "flex-end",
              children: "Made with \u2764\uFE0F for a better UI process."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 283,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, undefined);
};

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

__webpack_require__.$Refresh$.register(_c, "Footer");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/icons/IconBox.js":
/*!*****************************************!*\
  !*** ./src/components/icons/IconBox.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/vladmihalache/Documents/GitHub/simmmple-marketplace/src/components/icons/IconBox.js";



function IconBox(props) {
  const {
    children,
    ...rest
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "14px",
    ...rest,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
_c = IconBox;

var _c;

__webpack_require__.$Refresh$.register(_c, "IconBox");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/icons/Icons.js":
/*!***************************************!*\
  !*** ./src/components/icons/Icons.js ***!
  \***************************************/
/*! exports provided: SimmmpleLogoWhite, SimmmpleLogoColored, SimmmpleLogoBundle, LeftButtonEffect, RightButtonEffect, ArticleIcon1, ArticleIcon2, ArticleIcon3, Done, HelpOutline, Help, Lock, WarningM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimmmpleLogoWhite", function() { return SimmmpleLogoWhite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimmmpleLogoColored", function() { return SimmmpleLogoColored; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimmmpleLogoBundle", function() { return SimmmpleLogoBundle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftButtonEffect", function() { return LeftButtonEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightButtonEffect", function() { return RightButtonEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleIcon1", function() { return ArticleIcon1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleIcon2", function() { return ArticleIcon2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleIcon3", function() { return ArticleIcon3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Done", function() { return Done; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpOutline", function() { return HelpOutline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Help", function() { return Help; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lock", function() { return Lock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningM", function() { return WarningM; });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/vladmihalache/Documents/GitHub/simmmple-marketplace/src/components/icons/Icons.js";


const SimmmpleLogoWhite = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["createIcon"])({
  displayName: "SimmmpleLogoWhite",
  viewBox: "0 0 178 42",
  path: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("g", {
    width: "178",
    height: "42",
    viewBox: "0 0 178 42",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M29.0577 0.0438453L29.5619 0.0972222L30.0605 0.171569L30.5535 0.266885L31.039 0.381264L31.5169 0.514706L31.9892 0.667211L32.4521 0.83878L32.9055 1.02941L33.3515 1.23529L33.788 1.46024L34.2151 1.70234L34.6329 1.95969L35.0393 2.2342L35.4344 2.52397L35.8183 2.82898L36.1908 3.14733L36.5502 3.48094L36.8983 3.82789L37.2332 4.19009L37.555 4.56373L37.8617 4.95071L38.1552 5.34913L38.4356 5.75899L38.699 6.18219L38.9474 6.61492L39.1807 7.05719L39.3971 7.51089L39.5965 7.97413L39.779 8.44499L39.9446 8.92538L40.0914 9.41531L40.2193 9.91095L40.3304 10.4161L40.4226 10.927L40.4941 11.4455L40.5449 11.9698L40.5768 12.4997L40.5863 13.0335V29.0999L40.5768 29.6337L40.5449 30.1618L40.4941 30.686L40.4226 31.2026L40.3304 31.7135L40.2193 32.2168L40.0914 32.7143L39.9446 33.2023L39.779 33.6827L39.5965 34.1536L39.3971 34.6168L39.1807 35.0686L38.9474 35.5109L38.699 35.9436L38.4356 36.3649L38.1552 36.7748L37.8617 37.1751L37.555 37.5602L37.2332 37.9338L36.8983 38.296L36.5502 38.643L36.1908 38.9766L35.8183 39.2949L35.4344 39.5999L35.0393 39.8897L34.6329 40.1623L34.2151 40.4216L33.788 40.6618L33.3515 40.8867L32.9055 41.0945L32.4521 41.2832L31.9892 41.4548L31.5169 41.6092L31.039 41.7426L30.5535 41.857L30.0605 41.9504L29.5619 42.0248L29.0577 42.0801L28.5459 42.1125L28.0303 42.122H12.556L12.0404 42.1125L11.5305 42.0801L11.0243 42.0248L10.5257 41.9504L10.0327 41.857L9.54727 41.7426L9.06934 41.6073L8.59894 41.4548L8.13607 41.2832L7.68072 41.0945L7.23478 40.8867L6.79825 40.6618L6.37112 40.4216L5.95529 40.1623L5.54886 39.8897L5.15372 39.5999L4.76799 39.2949L4.39543 38.9747L4.03605 38.6411L3.68795 38.2941L3.35302 37.9319L3.03127 37.5583L2.72457 37.1713L2.43104 36.7729L2.15256 36.363L1.88725 35.9417L1.63888 35.509L1.40744 35.0648L1.19106 34.613L0.991607 34.1498L0.807209 33.677L0.64351 33.1966L0.494863 32.7086L0.366913 32.2111L0.255899 31.7059L0.165581 31.195L0.0940803 30.6765L0.0413953 30.1541L0.0112896 29.6242L0 29.0885V13.0335L0.0112896 12.4997L0.0413953 11.9698L0.0940803 11.4455L0.165581 10.927L0.255899 10.4161L0.366913 9.91095L0.494863 9.41531L0.64351 8.92538L0.807209 8.44499L0.991607 7.97413L1.19106 7.51089L1.40744 7.05719L1.63888 6.61492L1.88725 6.18219L2.15256 5.75899L2.43104 5.34913L2.72457 4.95071L3.03127 4.56373L3.35302 4.19009L3.68795 3.82789L4.03605 3.48094L4.39543 3.14733L4.76799 2.82898L5.15372 2.52397L5.54886 2.2342L5.95529 1.95969L6.37112 1.70234L6.79825 1.46024L7.23478 1.23529L7.68072 1.02941L8.13607 0.83878L8.59894 0.667211L9.06934 0.514706L9.54727 0.381264L10.0327 0.266885L10.5257 0.171569L11.0243 0.0972222L11.5305 0.0438453L12.0404 0.0114379L12.556 0H28.0303L28.5459 0.0114379L29.0577 0.0438453ZM18.4849 25.3731L18.2422 25.3903L18.0032 25.4169L17.7661 25.4551L17.5328 25.5027L17.3033 25.5599L17.0775 25.6285L16.8554 25.7048L16.6372 25.7906L16.4227 25.8859L16.2138 25.9907L16.0106 26.1032L15.8111 26.2233L15.6192 26.3529L15.4311 26.4902L15.2485 26.6351L15.0736 26.7876L14.9042 26.9458L14.7405 27.1136L14.5843 27.2851L14.4357 27.4643L14.2927 27.6511L14.1591 27.8437L14.0311 28.04L13.9126 28.244L13.8016 28.4518L13.7 28.6653L13.6059 28.8845L13.5212 29.1076L13.446 29.3363L13.3801 29.567L13.3237 29.8034L13.2766 30.0436L13.239 30.2857L13.2126 30.5335L13.1957 30.7813L13.1901 31.0349V31.0558H21.8567L22.1014 31.0501L22.3441 31.033L22.5849 31.0063L22.8201 30.9681L23.0534 30.9205L23.2849 30.8633L23.5107 30.7947L23.7327 30.7184L23.9491 30.6326L24.1636 30.5373L24.3725 30.4325L24.5757 30.32L24.7751 30.1999L24.9689 30.0703L25.1552 29.933L25.3377 29.7881L25.5127 29.6356L25.6839 29.4774L25.8458 29.3115L26.0019 29.1381L26.1506 28.9589L26.2936 28.7721L26.4272 28.5795L26.5551 28.3832L26.6737 28.1792L26.7847 27.9714L26.8863 27.7579L26.9804 27.5387L27.065 27.3156L27.1403 27.0869L27.2062 26.8562L27.2645 26.6198L27.3115 26.3796L27.3473 26.1375L27.3736 25.8916L27.3906 25.6419L27.3962 25.3883V25.3693H18.7295L18.4849 25.3731ZM13.1901 18.2397L13.1957 18.497L13.2126 18.7505L13.239 19.0022L13.2766 19.25L13.3237 19.494L13.3801 19.7361L13.4478 19.9725L13.5231 20.2051L13.6097 20.4319L13.7037 20.655L13.8053 20.8742L13.9164 21.0858L14.0368 21.2936L14.1647 21.4956L14.3002 21.692L14.4432 21.8807L14.5919 22.0637L14.7499 22.241L14.9136 22.4107L15.0848 22.5727L15.2617 22.729L15.4442 22.8758L15.6324 23.015L15.8262 23.1465L16.0275 23.2704L16.2326 23.3867L16.4415 23.4916L16.656 23.5888L16.8761 23.6765L17.0982 23.7565L17.3258 23.8252L17.5573 23.8843L17.7925 23.9319L18.0296 23.97L18.2704 23.9986L18.515 24.0139L18.7615 24.0196H27.4771V23.9986L27.4715 23.7413L27.4564 23.4877L27.4282 23.2361L27.3924 22.9883L27.3435 22.7443L27.2871 22.5022L27.2212 22.2658L27.1441 22.0332L27.0594 21.8064L26.9653 21.5833L26.8618 21.3641L26.7508 21.1525L26.6304 20.9447L26.5043 20.7426L26.3688 20.5482L26.2258 20.3576L26.0753 20.1746L25.9191 19.9973L25.7554 19.8276L25.5842 19.6656L25.4073 19.5112L25.2248 19.3625L25.0348 19.2233L24.841 19.0918L24.6415 18.9679L24.4364 18.8535L24.2257 18.7467L24.0112 18.6495L23.7929 18.5618L23.569 18.4837L23.3413 18.4131L23.1099 18.3559L22.8766 18.3064L22.6376 18.2682L22.3968 18.2397L22.154 18.2244L21.9075 18.2187H13.1901V18.2397ZM18.4849 11.1672L18.2422 11.1844L18.0032 11.2111L17.7661 11.2492L17.5328 11.2968L17.3033 11.354L17.0775 11.4227L16.8554 11.4989L16.6372 11.5847L16.4227 11.68L16.2138 11.7849L16.0106 11.8973L15.8111 12.0174L15.6192 12.1471L15.4311 12.2843L15.2485 12.4292L15.0736 12.5817L14.9042 12.7399L14.7405 12.9077L14.5843 13.0792L14.4357 13.2603L14.2927 13.4453L14.1591 13.6378L14.0311 13.8342L13.9126 14.0381L13.8016 14.2459L13.7 14.4594L13.6059 14.6786L13.5212 14.9017L13.446 15.1304L13.3801 15.3611L13.3237 15.5975L13.2766 15.8377L13.239 16.0798L13.2126 16.3276L13.1957 16.5754L13.1901 16.829V16.8499H21.8567L22.1014 16.8442L22.3441 16.8271L22.5849 16.8004L22.8201 16.7623L23.0534 16.7146L23.2849 16.6574L23.5107 16.5888L23.7327 16.5125L23.9491 16.4267L24.1636 16.3314L24.3725 16.2266L24.5757 16.1141L24.7751 15.994L24.9689 15.8644L25.1552 15.7271L25.3377 15.5822L25.5127 15.4297L25.6839 15.2715L25.8458 15.1057L26.0019 14.9322L26.1506 14.753L26.2936 14.5662L26.4272 14.3736L26.5551 14.1773L26.6737 13.9733L26.7847 13.7655L26.8863 13.552L26.9804 13.3328L27.065 13.1097L27.1403 12.881L27.2062 12.6503L27.2645 12.4139L27.3115 12.1737L27.3473 11.9316L27.3736 11.6857L27.3906 11.436L27.3962 11.1825V11.1634H18.7295L18.4849 11.1672Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M52.6079 29.7824C51.3923 28.8273 50.747 27.634 50.6717 26.2004C51.1252 26.2004 54.7473 26.2004 55.2007 26.2004C55.2384 26.7552 55.466 27.1841 55.8837 27.491C56.3015 27.777 56.8227 27.9199 57.4492 27.9199C58.5142 27.9199 59.0448 27.6149 59.0448 27.003C59.0448 26.698 58.9225 26.4692 58.6742 26.3148C58.4465 26.1432 58.0288 25.9717 57.421 25.8001C57.1331 25.7258 54.8319 25.1291 54.5459 25.0547C52.1525 24.4256 50.9558 22.9254 50.9558 20.5577C50.9558 19.2786 51.4883 18.2377 52.5514 17.4352C53.6145 16.6345 55.0671 16.2323 56.9092 16.2323C58.5425 16.2323 59.8991 16.6421 60.981 17.4638C62.0836 18.2663 62.6914 19.4025 62.8043 20.8723C62.3715 20.8723 58.9075 20.8723 58.4747 20.8723C58.3054 19.9954 57.7541 19.555 56.8227 19.555C55.8555 19.555 55.3719 19.86 55.3719 20.4719C55.3719 21.0076 55.8555 21.3793 56.8227 21.589C57.0823 21.6577 59.1559 22.2086 59.4155 22.2772C60.8399 22.6585 61.8654 23.2132 62.492 23.9376C63.1185 24.6639 63.4309 25.6095 63.4309 26.7742C63.4309 28.0915 62.8607 29.1609 61.7224 29.9826C60.5821 30.7851 59.1107 31.1854 57.3081 31.1854C55.4096 31.1854 53.8422 30.7184 52.6079 29.7824ZM64.62 13.8265C64.0894 13.2908 63.8222 12.6522 63.8222 11.9069C63.8222 11.1615 64.0894 10.5324 64.62 10.0158C65.1525 9.48202 65.7791 9.21513 66.4998 9.21513C67.2599 9.21513 67.8959 9.48202 68.4096 10.0158C68.9402 10.5324 69.2055 11.1615 69.2055 11.9069C69.2055 12.6522 68.9402 13.2908 68.4096 13.8265C67.8959 14.3412 67.2599 14.6005 66.4998 14.6005C65.7791 14.6005 65.1525 14.3412 64.62 13.8265ZM64.3642 16.5468H68.6655V30.8709H64.3642V16.5468ZM88.3283 23.4515C88.3283 21.2554 87.6453 20.1574 86.2773 20.1574C84.6441 20.1574 83.7899 21.3508 83.7146 23.7375C83.7146 24.214 83.7146 26.5912 83.7146 30.8709H79.4132C79.4132 26.4197 79.4132 23.9453 79.4132 23.4515C79.4132 21.2554 78.7302 20.1574 77.3623 20.1574C76.5664 20.1574 75.9398 20.4719 75.4826 21.1029C75.0272 21.713 74.7995 22.649 74.7995 23.909C74.7995 24.3742 74.7995 26.6942 74.7995 30.8709H70.4982V16.5468H74.7995C74.7995 17.4237 74.7995 17.9118 74.7995 18.009C75.7102 16.8252 76.9258 16.2323 78.4461 16.2323C80.4387 16.2323 81.9007 17.073 82.8321 18.7524C83.2498 17.9327 83.8764 17.3113 84.7118 16.8919C85.5473 16.4515 86.3827 16.2323 87.2182 16.2323C88.9455 16.2323 90.2739 16.8061 91.2053 17.9518C92.1536 19.0975 92.6297 20.6816 92.6297 22.7061C92.6297 23.2514 92.6297 25.9717 92.6297 30.8709H88.3283C88.3283 26.4197 88.3283 23.9453 88.3283 23.4515ZM112.097 23.4515C112.097 21.2554 111.414 20.1574 110.046 20.1574C108.413 20.1574 107.558 21.3508 107.483 23.7375C107.483 24.214 107.483 26.5912 107.483 30.8709H103.182C103.182 26.4197 103.182 23.9453 103.182 23.4515C103.182 21.2554 102.499 20.1574 101.131 20.1574C100.335 20.1574 99.7083 20.4719 99.251 21.1029C98.7957 21.713 98.568 22.649 98.568 23.909C98.568 24.3742 98.568 26.6942 98.568 30.8709H94.2667V16.5468H98.568C98.568 17.4237 98.568 17.9118 98.568 18.009C99.4787 16.8252 100.694 16.2323 102.215 16.2323C104.207 16.2323 105.669 17.073 106.601 18.7524C107.018 17.9327 107.645 17.3113 108.48 16.8919C109.316 16.4515 110.151 16.2323 110.987 16.2323C112.714 16.2323 114.042 16.8061 114.974 17.9518C115.922 19.0975 116.398 20.6816 116.398 22.7061C116.398 23.2514 116.398 25.9717 116.398 30.8709H112.097C112.097 26.4197 112.097 23.9453 112.097 23.4515ZM135.865 23.4515C135.865 21.2554 135.182 20.1574 133.814 20.1574C132.183 20.1574 131.327 21.3508 131.252 23.7375C131.252 24.214 131.252 26.5912 131.252 30.8709H126.95C126.95 26.4197 126.95 23.9453 126.95 23.4515C126.95 21.2554 126.267 20.1574 124.901 20.1574C124.101 20.1574 123.477 20.4719 123.019 21.1029C122.564 21.713 122.336 22.649 122.336 23.909C122.336 24.3742 122.336 26.6942 122.336 30.8709H118.035V16.5468H122.336C122.336 17.4237 122.336 17.9118 122.336 18.009C123.247 16.8252 124.463 16.2323 125.981 16.2323C127.976 16.2323 129.438 17.073 130.367 18.7524C130.787 17.9327 131.411 17.3113 132.247 16.8919C133.082 16.4515 133.918 16.2323 134.755 16.2323C136.482 16.2323 137.811 16.8061 138.742 17.9518C139.691 19.0975 140.167 20.6816 140.167 22.7061C140.167 23.2514 140.167 25.9717 140.167 30.8709H135.865C135.865 26.4197 135.865 23.9453 135.865 23.4515ZM141.805 36.8567V16.5468H146.105C146.105 17.4066 146.105 17.8851 146.105 17.9804C146.41 17.521 146.912 17.1206 147.614 16.7775C148.318 16.4134 149.106 16.2323 149.979 16.2323C151.821 16.2323 153.377 16.9681 154.649 18.4379C155.942 19.9077 156.587 21.6653 156.587 23.7089C156.587 25.7524 155.942 27.5101 154.649 28.9798C153.377 30.4496 151.821 31.1854 149.979 31.1854C149.106 31.1854 148.318 31.0139 147.614 30.6707C146.912 30.3066 146.41 29.8968 146.105 29.4374C146.105 29.933 146.105 32.4055 146.105 36.8567H141.805ZM149.01 27.2603C149.979 27.2603 150.756 26.9267 151.345 26.2576C151.953 25.5904 152.256 24.7402 152.256 23.7089C152.256 22.6776 151.953 21.8273 151.345 21.1601C150.756 20.491 149.979 20.1574 149.01 20.1574C148.041 20.1574 147.255 20.491 146.647 21.1601C146.058 21.8273 145.764 22.6776 145.764 23.7089C145.764 24.7402 146.058 25.5904 146.647 26.2576C147.255 26.9267 148.041 27.2603 149.01 27.2603ZM157.562 9.3867H161.863V30.8709H157.562V9.3867ZM164.951 29.0656C163.544 27.653 162.844 25.8573 162.844 23.6803C162.844 21.5414 163.555 19.7647 164.979 18.3521C166.423 16.9395 168.225 16.2323 170.391 16.2323C171.435 16.2323 172.412 16.4134 173.324 16.7775C174.254 17.1397 175.07 17.6639 175.772 18.3521C176.495 19.0403 177.054 19.9286 177.454 21.0171C177.853 22.1057 178.034 23.3371 177.994 24.7116C176.899 24.7116 168.127 24.7116 167.03 24.7116C167.106 25.4951 167.448 26.1528 168.056 26.6884C168.662 27.2032 169.518 27.4624 170.619 27.4624C171.243 27.4624 171.813 27.3366 172.327 27.0888C172.839 26.8219 173.183 26.4978 173.351 26.1146C173.802 26.1146 177.404 26.1146 177.853 26.1146C177.398 27.6244 176.485 28.8464 175.117 29.7824C173.751 30.7184 172.175 31.1854 170.391 31.1854C168.187 31.1854 166.374 30.4782 164.951 29.0656ZM168.225 20.3004C167.694 20.7198 167.335 21.2745 167.143 21.9608C167.753 21.9608 172.628 21.9608 173.238 21.9608C173.031 21.1792 172.639 20.6054 172.071 20.2432C171.52 19.86 170.923 19.6694 170.276 19.6694C169.459 19.6694 168.776 19.881 168.225 20.3004Z",
      fill: "white"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined)
});
const SimmmpleLogoColored = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["createIcon"])({
  displayName: "SimmmpleLogoColored",
  viewBox: "0 0 178 42",
  path: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("g", {
    width: "178",
    height: "42",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("g", {
      "clip-path": "url(#Simmmple_Logo__clip0_335:1245)",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
        d: "M52.608 29.782c-1.216-.955-1.861-2.148-1.936-3.582H55.2c.037.555.265.984.683 1.291.417.286.939.429 1.565.429 1.065 0 1.596-.305 1.596-.917 0-.305-.123-.534-.37-.688-.229-.172-.646-.343-1.254-.515-.288-.074-2.59-.67-2.875-.745-2.393-.63-3.59-2.13-3.59-4.497 0-1.28.532-2.32 1.595-3.123 1.063-.8 2.516-1.203 4.358-1.203 1.633 0 2.99.41 4.072 1.232 1.103.802 1.71 1.939 1.823 3.408h-4.33c-.169-.877-.72-1.317-1.651-1.317-.968 0-1.451.305-1.451.917 0 .536.483.907 1.45 1.117l2.593.688c1.425.381 2.45.936 3.077 1.66.627.727.939 1.672.939 2.837 0 1.317-.57 2.387-1.709 3.209-1.14.802-2.611 1.202-4.414 1.202-1.898 0-3.466-.467-4.7-1.403zM64.62 13.826a2.632 2.632 0 01-.798-1.92c0-.745.267-1.374.798-1.89.532-.534 1.16-.8 1.88-.8.76 0 1.396.266 1.91.8.53.516.796 1.146.796 1.89a2.63 2.63 0 01-.797 1.92c-.513.515-1.15.774-1.91.774-.72 0-1.346-.259-1.879-.774zm-.256 2.72h4.301v14.325h-4.3V16.547zm23.964 6.905c0-2.196-.683-3.294-2.05-3.294-1.634 0-2.488 1.194-2.564 3.58v7.134h-4.3v-7.42c0-2.196-.684-3.294-2.052-3.294-.796 0-1.422.315-1.88.946-.455.61-.683 1.546-.683 2.806v6.962h-4.3V16.547h4.3v1.462c.911-1.184 2.127-1.777 3.647-1.777 1.993 0 3.455.841 4.386 2.52a4.14 4.14 0 011.88-1.86c.835-.44 1.67-.66 2.506-.66 1.727 0 3.056.574 3.987 1.72.948 1.145 1.425 2.73 1.425 4.754v8.165h-4.302v-7.42zm23.769 0c0-2.196-.683-3.294-2.051-3.294-1.633 0-2.488 1.194-2.563 3.58v7.134h-4.301v-7.42c0-2.196-.683-3.294-2.051-3.294-.796 0-1.423.315-1.88.946-.455.61-.683 1.546-.683 2.806v6.962h-4.301V16.547h4.3v1.462c.912-1.184 2.127-1.777 3.647-1.777 1.993 0 3.455.841 4.387 2.52a4.137 4.137 0 011.879-1.86c.836-.44 1.671-.66 2.507-.66 1.727 0 3.055.574 3.987 1.72.948 1.145 1.424 2.73 1.424 4.754v8.165h-4.301v-7.42zm23.768 0c0-2.196-.683-3.294-2.051-3.294-1.631 0-2.487 1.194-2.563 3.58v7.134h-4.301v-7.42c0-2.196-.683-3.294-2.049-3.294-.8 0-1.424.315-1.882.946-.455.61-.683 1.546-.683 2.806v6.962h-4.301V16.547h4.301v1.462c.911-1.184 2.127-1.777 3.645-1.777 1.995 0 3.457.841 4.386 2.52a4.149 4.149 0 011.88-1.86c.835-.44 1.671-.66 2.508-.66 1.727 0 3.056.574 3.987 1.72.948 1.145 1.425 2.73 1.425 4.754v8.165h-4.302v-7.42zm5.94 13.406v-20.31h4.3v1.433c.305-.459.807-.86 1.509-1.203.704-.364 1.492-.545 2.365-.545 1.842 0 3.398.736 4.67 2.206 1.293 1.47 1.938 3.227 1.938 5.27 0 2.044-.645 3.802-1.938 5.272-1.272 1.47-2.828 2.205-4.67 2.205-.873 0-1.661-.171-2.365-.514-.702-.364-1.204-.774-1.509-1.234v7.42h-4.3zm7.205-9.597c.969 0 1.746-.333 2.335-1.002.608-.668.911-1.518.911-2.55 0-1.03-.303-1.88-.911-2.548-.589-.669-1.366-1.003-2.335-1.003-.969 0-1.755.334-2.363 1.003-.589.667-.883 1.518-.883 2.549s.294 1.881.883 2.549c.608.669 1.394 1.002 2.363 1.002zm8.552-17.873h4.301V30.87h-4.301V9.387zm7.389 19.679c-1.407-1.413-2.107-3.209-2.107-5.386 0-2.139.711-3.915 2.135-5.328 1.443-1.413 3.246-2.12 5.412-2.12 1.044 0 2.021.181 2.933.546.93.362 1.746.886 2.448 1.574.723.688 1.282 1.577 1.682 2.665.399 1.089.58 2.32.54 3.695H167.03c.075.783.418 1.44 1.026 1.976.606.515 1.462.774 2.562.774.625 0 1.195-.125 1.709-.373.512-.267.856-.591 1.024-.974h4.502c-.455 1.51-1.368 2.731-2.736 3.667-1.366.936-2.942 1.403-4.726 1.403-2.204 0-4.017-.707-5.44-2.12zm3.274-8.766c-.531.42-.89.974-1.082 1.66h6.095c-.207-.78-.599-1.355-1.167-1.717a3.076 3.076 0 00-1.795-.574c-.817 0-1.5.212-2.051.631z",
        fill: "#1F2142"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
        d: "M29.058.044l.504.053.498.075.494.095.485.114.478.134.472.152.463.172.454.19.446.206.436.225.427.242.418.258.406.274.395.29.384.305.373.318.36.334.347.347.335.362.322.374.307.387.293.398.28.41.264.423.248.433.234.442.216.454.2.463.182.471.166.48.146.49.128.496.111.505.093.511.071.518.05.525.033.53.01.534V29.1l-.01.534-.032.528-.05.524-.072.517-.093.51-.11.504-.129.497-.146.488-.166.48-.183.472-.199.463-.216.452-.234.442-.248.433-.263.42-.28.41-.294.401-.307.385-.322.374-.335.362-.348.347-.36.334-.372.318-.384.305-.395.29-.406.272-.418.26-.427.24-.436.225-.446.207-.454.19-.463.17-.472.155-.478.134-.486.114-.492.093-.5.075-.503.055-.512.032-.516.01H12.556l-.516-.01-.51-.032-.506-.055-.498-.075-.493-.093-.486-.114-.478-.136-.47-.152-.463-.172-.455-.189-.446-.207-.437-.225-.427-.24-.416-.26-.406-.272-.395-.29-.386-.305-.373-.32-.359-.334-.348-.347-.335-.362-.322-.374-.306-.387-.294-.398-.278-.41-.266-.421-.248-.433-.232-.444-.216-.452-.2-.463-.184-.473-.163-.48-.15-.488-.127-.498-.111-.505-.09-.511-.072-.518-.053-.523-.03-.53L0 29.09V13.034l.011-.534.03-.53.053-.525.072-.518.09-.51.11-.506.129-.496.149-.49.163-.48.185-.47.2-.464.215-.454.232-.442.248-.433.266-.423.278-.41.294-.398.306-.387.322-.374.335-.362.348-.347.36-.334.372-.318.386-.305.395-.29.406-.274.416-.258.427-.242.437-.225.446-.206.455-.19L8.6.667l.47-.152.478-.134.486-.114.493-.095.498-.075.507-.053.51-.033.515-.011H28.03l.516.011.512.033zm-10.573 25.33l-.243.016-.239.027-.237.038-.233.048-.23.057-.226.069-.222.076-.218.086-.214.095-.21.105-.202.112-.2.12-.192.13-.188.137-.182.145-.175.153-.17.158-.163.168-.157.171-.148.18-.143.186-.134.193-.128.196-.118.204-.111.208-.102.213-.094.22-.085.223-.075.228-.066.231-.056.236-.047.24-.038.243-.026.247-.017.248-.006.254v.02h8.667l.244-.005.243-.017.24-.027.236-.038.233-.047.232-.058.226-.068.222-.077.216-.085.215-.096.208-.104.204-.113.2-.12.193-.13.186-.137.183-.145.175-.152.17-.159.163-.166.156-.173.149-.18.143-.186.133-.192.128-.197.119-.204.11-.208.102-.213.094-.22.085-.222.075-.23.066-.23.059-.236.046-.24.036-.242.027-.246.017-.25.005-.254v-.019H18.73l-.245.004zM13.19 18.24l.006.257.017.253.026.252.038.248.047.244.056.242.068.236.075.233.087.227.094.223.101.22.111.21.12.209.129.202.135.196.143.189.149.183.158.177.164.17.17.162.178.156.182.147.188.139.194.131.201.124.206.117.209.105.214.097.22.088.222.08.228.068.231.06.236.047.237.038.24.029.245.015.247.006h8.715v-.021l-.006-.258-.015-.253-.028-.252-.036-.248-.049-.244-.056-.242-.066-.236-.077-.233-.085-.227-.094-.223-.103-.219-.111-.212-.12-.207-.127-.202-.135-.195-.143-.19-.15-.183-.157-.178-.164-.17-.17-.161-.178-.155-.182-.148-.19-.14-.194-.131-.2-.124-.205-.114-.21-.107-.215-.098-.218-.087-.224-.078-.228-.07-.231-.058-.233-.05-.24-.038-.24-.028-.243-.016-.247-.005H13.19v.02zm5.295-7.073l-.243.017-.239.027-.237.038-.233.048-.23.057-.226.069-.222.076-.218.086-.214.095-.21.105-.202.112-.2.12-.192.13-.188.137-.182.145-.175.153-.17.158-.163.168-.157.171-.148.181-.143.185-.134.193-.128.196-.118.204-.111.208-.102.213-.094.22-.085.223-.075.228-.066.231-.056.236-.047.24-.038.243-.026.248-.017.247-.006.254v.02h8.667l.244-.005.243-.017.24-.027.236-.038.233-.047.232-.058.226-.068.222-.076.216-.086.215-.096.208-.104.204-.113.2-.12.193-.13.186-.137.183-.145.175-.152.17-.159.163-.165.156-.174.149-.179.143-.187.133-.192.128-.197.119-.204.11-.208.102-.213.094-.22.085-.222.075-.229.066-.23.059-.237.046-.24.036-.242.027-.246.017-.25.005-.254v-.019H18.73l-.245.004z",
        fill: "#422AFB"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("defs", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("clipPath", {
        id: "Simmmple_Logo__clip0_335:1245",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
          fill: "#fff",
          d: "M0 0h178v42H0z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined)
});
const SimmmpleLogoBundle = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["createIcon"])({
  displayName: "SimmmpleLogoBundle",
  viewBox: "0 0 117 31",
  path: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("g", {
    width: "117",
    height: "31",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      opacity: ".8",
      d: "M39.612 28.272h2.187c2.106 0 3.465-1.377 3.465-3.357 0-1.98-1.359-3.348-3.465-3.348h-2.187v6.705zm1.134-1v-4.706h1.08c1.386 0 2.286.918 2.286 2.349 0 1.43-.891 2.358-2.286 2.358h-1.08zm5.52 1h1.133v-6.705h-1.134v6.705zm5.559.108c1.53 0 2.583-.82 2.907-1.908v-1.863h-2.898v.999h1.8v.774c-.234.549-.873.972-1.81.972-1.385 0-2.294-.99-2.294-2.44 0-1.43.9-2.43 2.205-2.43.855 0 1.512.478 1.79 1.207l1.009-.486c-.37-.99-1.44-1.746-2.8-1.746-1.916 0-3.338 1.476-3.338 3.456 0 1.989 1.449 3.465 3.429 3.465zm3.862-.108h1.134v-6.705h-1.134v6.705zm3.706 0h1.143v-5.706h1.746v-1h-4.644v1h1.755v5.706zm6.54-6.705h-1.44l-2.349 6.705h1.206l.495-1.476h2.736l.504 1.476h1.206l-2.358-6.705zm-1.755 4.23l1.035-3.042 1.035 3.042h-2.07zm4.833 2.475h4.14v-1h-3.006v-5.705h-1.134v6.705zm10.904-3.61c.396-.323.576-.755.576-1.241 0-1.143-.801-1.854-2.088-1.854h-2.817v6.705h2.817c1.458 0 2.358-.756 2.358-2.034 0-.63-.234-1.188-.846-1.575zM76.72 22.53h1.719c.54 0 .89.342.89.837 0 .504-.35.837-.89.837h-1.72V22.53zm1.782 4.743H76.72v-2.07h1.782c.666 0 1.107.414 1.107 1.035 0 .62-.441 1.035-1.107 1.035zm7.243-5.706v4.329c0 .855-.604 1.458-1.459 1.458-.864 0-1.466-.594-1.466-1.458v-4.33h-1.143v4.33c0 1.44 1.034 2.484 2.61 2.484 1.566 0 2.61-1.044 2.61-2.484v-4.33h-1.153zm6.541 0v4.509l-3.276-4.51h-.9v6.706h1.134v-4.554l3.276 4.554h.909v-6.705h-1.143zm2.354 6.705h2.187c2.106 0 3.465-1.377 3.465-3.357 0-1.98-1.359-3.348-3.465-3.348H94.64v6.705zm1.134-1v-4.706h1.08c1.386 0 2.286.918 2.286 2.349 0 1.43-.89 2.358-2.286 2.358h-1.08zm5.52 1h4.14v-1h-3.006v-5.705h-1.134v6.705zm4.992 0h4.428l.009-1h-3.303V25.41h3.123v-1h-3.123v-1.844h3.303v-1h-4.437v6.706zm7.905.108c1.422 0 2.385-.783 2.385-1.944 0-.9-.567-1.494-1.674-1.836l-1.269-.387c-.54-.162-.828-.468-.828-.882 0-.513.468-.873 1.17-.873.765 0 1.341.405 1.584 1.116l.981-.45c-.342-.945-1.305-1.665-2.574-1.665-1.368 0-2.304.783-2.304 1.926 0 .864.54 1.53 1.647 1.863l1.314.405c.531.162.81.405.81.864 0 .495-.486.864-1.242.864-.765 0-1.458-.46-1.773-1.296l-.972.44c.342 1.08 1.422 1.855 2.745 1.855z",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M21.868.032l.38.038.374.054.371.07.366.082.36.097.355.11.348.125.341.138.336.15.329.163.321.175.314.187.306.2.298.21.288.22.28.231.271.242.262.252.252.262.242.271.231.28.221.29.211.297.198.307.187.314.176.32.163.33.15.335.137.342.125.348.11.355.097.36.083.366.07.37.053.376.038.38.025.385.007.387V21.1l-.007.387-.024.383-.039.38-.053.375-.07.37-.083.365-.097.361-.11.354-.125.348-.137.342-.15.336-.163.327-.176.32-.187.315-.198.305-.21.297-.222.29-.23.28-.243.27-.252.263-.262.252-.27.242-.28.23-.29.222-.297.21-.306.198-.314.188-.321.174-.329.163-.335.15-.342.138-.348.124-.356.112-.36.097-.365.083-.37.067-.376.054-.38.04-.384.024-.389.007H9.45l-.388-.007-.384-.024-.38-.04-.376-.054-.37-.067-.366-.083-.36-.098-.354-.111-.348-.124-.343-.137-.335-.151-.329-.163-.321-.174-.313-.188-.306-.198-.298-.21-.29-.221-.28-.232-.27-.242-.263-.252-.252-.263-.242-.27-.23-.281-.221-.29-.21-.296-.2-.306-.187-.314-.174-.322-.163-.327-.15-.336-.139-.343-.123-.348-.112-.354-.096-.361-.083-.366-.068-.37-.054-.377-.04-.378-.023-.385L0 21.093V9.45l.008-.387.023-.384.04-.38.054-.377.068-.37.083-.366.096-.36.112-.355.123-.348.14-.342.15-.336.162-.329.174-.32.187-.314.2-.307.21-.297.22-.29.231-.28.242-.27.252-.263.262-.252.27-.242.281-.23.29-.222.298-.21.306-.199.313-.187.321-.175.329-.163.335-.15.343-.138.348-.124.354-.11.36-.098.365-.082.371-.07.375-.054.381-.038.384-.024L9.45 0h11.646l.388.008.385.024zM13.91 18.399l-.183.012-.18.02-.178.027-.175.035-.173.041-.17.05-.167.055-.165.062-.16.07-.158.075-.153.082-.15.087-.145.094-.141.1-.137.105-.132.11-.128.115-.123.122-.117.124-.112.13-.108.136-.1.14-.097.142-.089.147-.083.151-.077.155-.07.159-.064.162-.057.166-.05.167-.042.171-.036.174-.028.176-.02.18-.012.18-.005.183v.015h6.523l.184-.004.182-.012.182-.02.177-.027.175-.035.174-.041.17-.05.167-.055.163-.063.162-.069.157-.076.153-.081.15-.087.146-.094.14-.1.137-.105.132-.11.129-.115.122-.12.117-.126.112-.13.108-.136.1-.14.096-.142.09-.148.083-.15.077-.155.07-.159.064-.162.057-.166.05-.167.043-.171.036-.175.027-.175.02-.178.012-.181.004-.184v-.014h-6.522l-.184.003zm-3.985-5.173l.005.187.012.184.02.182.028.18.036.177.042.175.051.171.057.17.065.164.07.161.077.16.084.153.09.15.097.147.102.142.107.137.112.133.12.129.122.122.13.118.132.113.138.107.141.1.146.096.152.09.154.084.157.076.162.07.165.064.167.058.172.05.174.043.177.035.178.027.182.021.184.011.185.004h6.56v-.015l-.005-.187-.011-.183-.022-.183-.026-.18-.037-.177-.043-.175-.05-.172-.057-.168-.064-.165-.07-.161-.079-.16-.083-.153-.091-.15-.095-.147-.102-.141-.107-.138-.114-.133-.117-.128-.123-.123-.13-.118-.132-.112-.138-.108-.143-.1-.146-.096-.15-.09-.154-.083-.159-.077-.161-.07-.164-.064-.169-.057-.171-.051-.174-.042-.176-.036-.18-.027-.181-.021-.183-.011-.185-.004h-6.56v.015zm3.985-5.128l-.183.012-.18.02-.178.027-.175.035-.173.041-.17.05-.167.055-.165.062-.16.07-.158.075-.153.082-.15.087-.145.094-.141.1-.137.105-.132.11-.128.115-.123.122-.117.124-.112.131-.108.134-.1.14-.097.143-.089.147-.083.151-.077.155-.07.159-.064.162-.057.166-.05.167-.042.171-.036.174-.028.176-.02.18-.012.18-.005.183v.015h6.523l.184-.004.182-.012.182-.02.177-.027.175-.035.174-.041.17-.05.167-.055.163-.063.162-.069.157-.076.153-.081.15-.087.146-.094.14-.1.137-.105.132-.11.129-.115.122-.12.117-.126.112-.13.108-.136.1-.14.096-.142.09-.148.083-.15.077-.155.07-.16.064-.16.057-.167.05-.167.043-.171.036-.175.027-.175.02-.178.012-.181.004-.184v-.014h-6.522l-.184.003zm26.276 6.552c-.745-.588-1.14-1.322-1.186-2.204h2.774c.023.341.163.605.419.794.256.176.575.264.959.264.652 0 .977-.188.977-.564a.466.466 0 00-.227-.423c-.14-.106-.395-.211-.767-.317l-1.762-.458c-1.466-.387-2.199-1.31-2.199-2.766 0-.787.326-1.427.977-1.92.652-.493 1.542-.74 2.67-.74 1 0 1.832.252 2.494.757.676.494 1.048 1.192 1.117 2.096H43.78c-.104-.539-.441-.81-1.012-.81-.592 0-.889.188-.889.564 0 .33.297.558.889.687l1.588.423c.873.235 1.501.576 1.885 1.022.384.446.575 1.028.575 1.744 0 .81-.35 1.468-1.047 1.973-.698.494-1.6.74-2.704.74-1.163 0-2.123-.287-2.879-.863zm7.359-9.814a1.622 1.622 0 01-.49-1.18c0-.459.165-.846.49-1.164A1.57 1.57 0 0148.696 2c.466 0 .855.164 1.17.492.325.318.488.705.488 1.163 0 .459-.163.852-.488 1.181a1.584 1.584 0 01-1.17.476 1.6 1.6 0 01-1.151-.476zm-.157 1.673h2.635v8.81h-2.635v-8.81zm14.68 4.247c0-1.351-.418-2.026-1.256-2.026-1 0-1.524.734-1.57 2.201v4.388h-2.635v-4.563c0-1.351-.419-2.026-1.257-2.026-.487 0-.871.193-1.151.581-.279.375-.418.951-.418 1.726v4.282h-2.636v-8.81h2.636v.9c.557-.729 1.302-1.093 2.233-1.093 1.221 0 2.117.517 2.687 1.55a2.54 2.54 0 011.152-1.145c.511-.27 1.023-.405 1.535-.405 1.058 0 1.872.353 2.443 1.057.58.705.872 1.68.872 2.924v5.022h-2.635v-4.563zm14.56 0c0-1.351-.418-2.026-1.256-2.026-1 0-1.524.734-1.57 2.201v4.388h-2.635v-4.563c0-1.351-.418-2.026-1.256-2.026-.488 0-.872.193-1.152.581-.279.375-.418.951-.418 1.726v4.282h-2.635v-8.81h2.635v.9c.558-.729 1.302-1.093 2.234-1.093 1.22 0 2.116.517 2.686 1.55a2.54 2.54 0 011.152-1.145c.512-.27 1.024-.405 1.535-.405 1.059 0 1.872.353 2.443 1.057.58.705.872 1.68.872 2.924v5.022h-2.635v-4.563zm14.56 0c0-1.351-.418-2.026-1.256-2.026-.999 0-1.523.734-1.57 2.201v4.388h-2.634v-4.563c0-1.351-.419-2.026-1.256-2.026-.49 0-.872.193-1.152.581-.28.375-.419.951-.419 1.726v4.282h-2.635v-8.81h2.635v.9c.558-.729 1.303-1.093 2.233-1.093 1.222 0 2.117.517 2.687 1.55.257-.505.64-.887 1.151-1.145.512-.27 1.024-.405 1.537-.405 1.058 0 1.872.353 2.442 1.057.581.705.873 1.68.873 2.924v5.022h-2.635v-4.563zM94.829 19V6.51h2.633v.88c.187-.282.495-.528.925-.739a3.095 3.095 0 011.449-.335c1.128 0 2.082.452 2.861 1.356.792.904 1.187 1.985 1.187 3.242s-.395 2.338-1.187 3.242c-.779.903-1.733 1.356-2.861 1.356a3.252 3.252 0 01-1.449-.317c-.43-.223-.738-.476-.924-.758V19h-2.634zm4.413-5.902c.594 0 1.07-.205 1.431-.617.372-.41.558-.933.558-1.567 0-.634-.186-1.157-.558-1.568-.361-.411-.837-.616-1.43-.616-.594 0-1.076.205-1.449.616-.36.41-.54.934-.54 1.568s.18 1.157.54 1.567c.373.412.855.617 1.448.617zm5.239-10.992h2.635v13.213h-2.635V2.106zm4.527 12.102c-.863-.868-1.291-1.973-1.291-3.312 0-1.315.435-2.408 1.308-3.277.884-.868 1.988-1.303 3.315-1.303.64 0 1.238.111 1.797.335a4.39 4.39 0 011.499.968c.443.424.785.97 1.031 1.64.244.669.355 1.426.331 2.271h-6.717c.046.482.256.887.628 1.216.372.317.896.476 1.57.476.383 0 .732-.077 1.047-.23.313-.164.524-.363.627-.599h2.758c-.279.929-.838 1.68-1.676 2.256-.836.576-1.802.863-2.895.863-1.35 0-2.461-.435-3.332-1.304zm2.005-5.39a1.929 1.929 0 00-.663 1.02h3.734c-.127-.48-.367-.833-.715-1.056a1.88 1.88 0 00-1.099-.352c-.501 0-.919.13-1.257.388z",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, undefined)
});
const LeftButtonEffect = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["createIcon"])({
  displayName: "LeftButtonEffect",
  viewBox: "0 0 35 123",
  path: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("g", {
    width: "35",
    height: "123",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M16.545 120.515l16.614-24.329M2 92.903l17.709-8.644m-3.251 13.335l5.422-4.584M16.545 2l16.614 24.329M2 29.612l17.709 8.645M16.458 24.92l5.422 4.585",
      stroke: "#fff",
      "stroke-width": "3",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 5
  }, undefined)
});
const RightButtonEffect = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["createIcon"])({
  displayName: "RightButtonEffect",
  viewBox: "0 0 35 123",
  path: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("g", {
    width: "35",
    height: "123",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M18.614 120.515L2 96.186m31.159-3.283L15.45 84.259m3.25 13.335l-5.42-4.584M18.614 2L2 26.329m31.159 3.283L15.45 38.257M18.7 24.92l-5.421 4.585",
      stroke: "#fff",
      "stroke-width": "3",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 5
  }, undefined)
});
const ArticleIcon1 = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["createIcon"])({
  displayName: "ArticleIcon1",
  viewBox: "0 0 87 105",
  path: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("g", {
    width: "87",
    height: "105",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M70.04 6.702l4.72-4.72a4.896 4.896 0 016.933 0l3.491 3.491a4.896 4.896 0 010 6.933l-4.72 4.72L70.041 6.702zm-4.916 4.917l10.424 10.423-29.353 29.353a2.508 2.508 0 01-1.72.737h-6.933a2.434 2.434 0 01-2.459-2.458v-6.932c0-.64.246-1.279.738-1.721l29.303-29.402zm-9.735-.64L29.134 37.236c-.885.934-1.426 2.163-1.426 3.49V54.64a4.931 4.931 0 004.917 4.916h13.914c1.328 0 2.557-.54 3.491-1.425l26.206-26.206c1.966 4.818 3.097 10.276 3.097 16.274 0 15.635-12.046 34.023-36.088 55.214a5 5 0 01-6.54 0C12.714 82.223.668 63.834.668 48.199.667 23.714 19.35 7.882 40 7.882c5.36 0 10.62 1.082 15.39 3.098z",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 5
  }, undefined)
});
const ArticleIcon2 = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["createIcon"])({
  displayName: "ArticleIcon2",
  viewBox: "0 0 72 72",
  path: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("g", {
    width: "72",
    height: "72",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M64 8h-8V4c0-2.2-1.8-4-4-4H20c-2.2 0-4 1.8-4 4v4H8c-4.4 0-8 3.6-8 8v4c0 10.2 7.68 18.52 17.56 19.76 2.52 6 7.92 10.52 14.44 11.84V64H20c-2.2 0-4 1.8-4 4s1.8 4 4 4h32c2.2 0 4-1.8 4-4s-1.8-4-4-4H40V51.6c6.52-1.32 11.92-5.84 14.44-11.84C64.32 38.52 72 30.2 72 20v-4c0-4.4-3.6-8-8-8zM8 20v-4h8v15.28C11.36 29.6 8 25.2 8 20zm56 0c0 5.2-3.36 9.6-8 11.28V16h8v4z",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 5
  }, undefined)
});
const ArticleIcon3 = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["createIcon"])({
  displayName: "ArticleIcon3",
  viewBox: "0 0 80 95",
  path: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("g", {
    width: "80",
    height: "95",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M74.417 35.25H49.833l-3.54-7.129c-.835-1.672-2.556-2.704-4.425-2.704H15.417v-6.294a9.675 9.675 0 004.916-8.456c0-5.409-4.425-9.834-9.833-9.834S.667 5.258.667 10.667a9.675 9.675 0 004.916 8.457v70.21A4.931 4.931 0 0010.5 94.25a4.931 4.931 0 004.917-4.916v-14.75H40l3.54 7.129a4.912 4.912 0 004.376 2.704h26.5a4.931 4.931 0 004.917-4.917V40.167a4.931 4.931 0 00-4.916-4.917zM69.5 74.584H49.833l-4.916-9.834h-29.5v-29.5H40l4.917 9.834H69.5v29.5z",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 5
  }, undefined)
});
const Done = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["createIcon"])({
  displayName: "Done",
  viewBox: "0 0 14.66 11 ",
  path: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("g", {
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M0 0h24v24H0V0z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "m9 16.2-3.5-3.5a.984.984 0 0 0-1.4 0 .984.984 0 0 0 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7a.984.984 0 0 0 0-1.4.984.984 0 0 0-1.4 0L9 16.2z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 142,
    columnNumber: 5
  }, undefined)
});
const HelpOutline = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["createIcon"])({
  displayName: "HelpOutline",
  viewBox: "0 0 18 18",
  path: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("g", {
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M0 0h24v24H0V0z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 153,
    columnNumber: 5
  }, undefined)
});
const Help = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["createIcon"])({
  displayName: "Help",
  viewBox: "0 0 18 18",
  path: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("g", {
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M0 0h24v24H0z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 164,
    columnNumber: 5
  }, undefined)
});
const Lock = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["createIcon"])({
  displayName: "Lock",
  viewBox: "0 0 18 18",
  path: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("g", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 175,
    columnNumber: 5
  }, undefined)
});
const WarningM = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["createIcon"])({
  displayName: "WarningM",
  viewBox: "0 0 18 18",
  path: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("g", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("path", {
      d: "M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3zM12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 186,
    columnNumber: 5
  }, undefined)
});

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/navbar/Navbar.js":
/*!*****************************************!*\
  !*** ./src/components/navbar/Navbar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_icons_IconBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/icons/IconBox */ "./src/components/icons/IconBox.js");
/* harmony import */ var components_icons_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/icons/Icons */ "./src/components/icons/Icons.js");
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/go */ "./node_modules/react-icons/go/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var assets_img_navbar_explore_background_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/img/navbar/explore-background.png */ "./src/assets/img/navbar/explore-background.png");
/* harmony import */ var assets_img_navbar_figma_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/img/navbar/figma.png */ "./src/assets/img/navbar/figma.png");
/* harmony import */ var assets_img_navbar_mail_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/img/navbar/mail.png */ "./src/assets/img/navbar/mail.png");
/* harmony import */ var assets_img_navbar_vscode_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/img/navbar/vscode.png */ "./src/assets/img/navbar/vscode.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/vladmihalache/Documents/GitHub/simmmple-marketplace/src/components/navbar/Navbar.js",
    _s = __webpack_require__.$Refresh$.signature();


 // Custom Components

 // Icons





 // Images







function Navbar() {
  _s();

  const {
    isOpen: isOpenExplore,
    onOpen: onOpenExplore,
    onClose: onCloseExplore
  } = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["useDisclosure"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
    w: "100%",
    bg: "transparent",
    position: "absolute",
    zIndex: "1",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
      w: "1170px",
      mx: "auto",
      align: "center",
      py: "40px",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
        to: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Box"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(components_icons_Icons__WEBPACK_IMPORTED_MODULE_3__["SimmmpleLogoWhite"], {
            w: "100%",
            h: "40px",
            cursor: "pointer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Stack"], {
        direction: "row",
        spacing: "44px",
        align: "center",
        ms: "160px",
        me: "210px",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
          align: "center",
          onMouseEnter: onOpenExplore,
          onMouseLeave: onCloseExplore,
          position: "relative",
          cursor: "pointer",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Text"], {
            color: "#fff",
            fontWeight: "normal",
            fontSize: "sm",
            me: "4px",
            children: "Explore"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
            as: react_icons_go__WEBPACK_IMPORTED_MODULE_4__["GoChevronDown"],
            w: "12px",
            h: "12px",
            color: "#fff",
            mt: "4px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Menu"], {
            isOpen: isOpenExplore,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["MenuList"], {
              p: "0px",
              minW: "500px",
              cursor: "default",
              borderRadius: "30px",
              position: "absolute",
              top: "40px",
              left: "-10px",
              border: "none",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
                templateColumns: "repeat(2, 1fr)",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Stack"], {
                  direction: "column",
                  spacing: "12px",
                  p: "12px",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
                    align: "center",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(components_icons_IconBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
                      w: "68px",
                      h: "68px",
                      bg: "#F4F7FE",
                      me: "20px",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Image"], {
                        src: assets_img_navbar_figma_png__WEBPACK_IMPORTED_MODULE_8__["default"],
                        w: "26px",
                        h: "38px"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 77,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 76,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
                      direction: "column",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Text"], {
                        fontSize: "md",
                        color: "brand.700",
                        fontWeight: "bold",
                        mb: "2px",
                        children: "Figma Products"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 80,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
                        to: "/",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
                          align: "center",
                          color: "brand.300",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Text"], {
                            fontSize: "sm",
                            color: "brand.300",
                            children: "See all products"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 89,
                            columnNumber: 29
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
                            as: react_icons_md__WEBPACK_IMPORTED_MODULE_5__["MdKeyboardArrowRight"],
                            w: "14px",
                            h: "14px",
                            mt: "2px"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 92,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 88,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 87,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 79,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
                    align: "center",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(components_icons_IconBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
                      w: "68px",
                      h: "68px",
                      bg: "#F4F7FE",
                      me: "20px",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Image"], {
                        src: assets_img_navbar_vscode_png__WEBPACK_IMPORTED_MODULE_10__["default"],
                        w: "38px",
                        h: "38px"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 104,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
                      direction: "column",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Text"], {
                        fontSize: "md",
                        color: "brand.700",
                        fontWeight: "bold",
                        mb: "2px",
                        children: "Coded Products"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 107,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
                        to: "/",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
                          align: "center",
                          color: "brand.300",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Text"], {
                            fontSize: "sm",
                            color: "brand.300",
                            children: "See all products"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 116,
                            columnNumber: 29
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
                            as: react_icons_md__WEBPACK_IMPORTED_MODULE_5__["MdKeyboardArrowRight"],
                            w: "14px",
                            h: "14px",
                            mt: "2px"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 119,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 115,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 114,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
                    align: "center",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(components_icons_IconBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
                      w: "68px",
                      h: "68px",
                      bg: "#F4F7FE",
                      me: "20px",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Image"], {
                        src: assets_img_navbar_mail_png__WEBPACK_IMPORTED_MODULE_9__["default"],
                        w: "46px",
                        h: "43px"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 131,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 130,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
                      direction: "column",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Text"], {
                        fontSize: "md",
                        color: "brand.700",
                        fontWeight: "bold",
                        mb: "2px",
                        children: "Apps & Plugins"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 134,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
                        to: "/",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
                          align: "center",
                          color: "brand.300",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Text"], {
                            fontSize: "sm",
                            color: "brand.300",
                            children: "Learn more"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 143,
                            columnNumber: 29
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
                            as: react_icons_md__WEBPACK_IMPORTED_MODULE_5__["MdKeyboardArrowRight"],
                            w: "14px",
                            h: "14px",
                            mt: "2px"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 146,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 142,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 141,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 133,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 129,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
                  direction: "column",
                  textAlign: "center",
                  bgImage: assets_img_navbar_explore_background_png__WEBPACK_IMPORTED_MODULE_7__["default"],
                  bgSize: "cover",
                  bgPosition: "1px",
                  w: "100%",
                  h: "100%",
                  borderRadius: "0px 26px 26px 0px",
                  align: "center",
                  justify: "center",
                  px: "22px",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(components_icons_Icons__WEBPACK_IMPORTED_MODULE_3__["SimmmpleLogoBundle"], {
                    w: "100%",
                    h: "31px"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 169,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Text"], {
                    color: "#fff",
                    fontSize: "sm",
                    mt: "20px",
                    mb: "26px",
                    children: "Save money to all products with our digital categories bundles!"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 170,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Button"], {
                    variant: "solid",
                    w: "150px",
                    h: "42px",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Text"], {
                      color: "#4F61FF",
                      fontSize: "sm",
                      children: "Explore all"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 175,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
          align: "center",
          cursor: "pointer",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Text"], {
            color: "#fff",
            fontWeight: "normal",
            fontSize: "sm",
            me: "4px",
            children: "Products"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
            as: react_icons_go__WEBPACK_IMPORTED_MODULE_4__["GoChevronDown"],
            w: "12px",
            h: "12px",
            color: "#fff",
            mt: "4px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
          align: "center",
          cursor: "pointer",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Text"], {
            color: "#fff",
            fontWeight: "normal",
            fontSize: "sm",
            me: "4px",
            children: "Technologies"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
            as: react_icons_go__WEBPACK_IMPORTED_MODULE_4__["GoChevronDown"],
            w: "12px",
            h: "12px",
            color: "#fff",
            mt: "4px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
          align: "center",
          cursor: "pointer",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Text"], {
            color: "#fff",
            fontWeight: "normal",
            fontSize: "sm",
            me: "4px",
            children: "Resources"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
            as: react_icons_go__WEBPACK_IMPORTED_MODULE_4__["GoChevronDown"],
            w: "12px",
            h: "12px",
            color: "#fff",
            mt: "4px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        w: "160px",
        h: "56px",
        bg: "transparent",
        zIndex: "1",
        border: "1px solid #fff",
        _hover: {
          bg: "#4B63CD",
          color: "#fff"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Text"], {
          fontSize: "sm",
          fontWeight: "500",
          color: "#fff",
          children: "Get Started"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

_s(Navbar, "PD783aqW7BALTQ6439fAfWA68Z8=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["useDisclosure"]];
});

_c = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

__webpack_require__.$Refresh$.register(_c, "Navbar");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/products/ProductItem.js":
/*!************************************************!*\
  !*** ./src/components/products/ProductItem.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var components_card_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/card/Card */ "./src/components/card/Card.js");
/* harmony import */ var components_card_CardBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/card/CardBody */ "./src/components/card/CardBody.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/vladmihalache/Documents/GitHub/simmmple-marketplace/src/components/products/ProductItem.js";


 // Custom Components





const ProductItem = ({
  image,
  tag,
  price,
  title,
  category,
  path
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: path,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(components_card_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(components_card_CardBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
          direction: "column",
          w: "100%",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
            w: "100%",
            h: "230px",
            borderRadius: "24px",
            mb: "30px",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
              src: image,
              w: "100%",
              h: "100%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
            justify: "space-between",
            align: "center",
            w: "100%",
            mb: "10px",
            p: "0px 12px 0px 12px",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
              color: "brand.300",
              bg: "#ECE9FF",
              borderRadius: "30px",
              p: "7px 14px",
              children: tag
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
              bg: price === "FREE" ? "#5AC39B" : "brand.300",
              color: "#fff",
              borderRadius: "30px",
              p: "7px 14px",
              children: price
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
            direction: "column",
            p: "0px 12px 0px 12px",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              color: "brand.700",
              fontSize: "22px",
              fontWeight: "500",
              mb: "5px",
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              color: "#878CBD",
              fontWeight: "400",
              fontSize: "sm",
              children: ["Category: ", category]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

_c = ProductItem;
/* harmony default export */ __webpack_exports__["default"] = (ProductItem);

var _c;

__webpack_require__.$Refresh$.register(_c, "ProductItem");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/products/ProductList.js":
/*!************************************************!*\
  !*** ./src/components/products/ProductList.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var components_products_ProductItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/products/ProductItem */ "./src/components/products/ProductItem.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/vladmihalache/Documents/GitHub/simmmple-marketplace/src/components/products/ProductList.js";

 // Custom Components




const ProductList = ({
  products
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    templateColumns: "repeat(3, 1fr)",
    gap: "22px",
    children: products.map(({ ...otherProductProps
    }, index) => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(components_products_ProductItem__WEBPACK_IMPORTED_MODULE_2__["default"], { ...otherProductProps
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 16
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

_c = ProductList;
/* harmony default export */ __webpack_exports__["default"] = (ProductList);

var _c;

__webpack_require__.$Refresh$.register(_c, "ProductList");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/separator/Separator.jsx":
/*!************************************************!*\
  !*** ./src/components/separator/Separator.jsx ***!
  \************************************************/
/*! exports provided: HSeparator, VSeparator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HSeparator", function() { return HSeparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VSeparator", function() { return VSeparator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/vladmihalache/Documents/GitHub/simmmple-marketplace/src/components/separator/Separator.jsx";




const HSeparator = props => {
  const {
    variant,
    children,
    ...rest
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    h: "1px",
    w: "100%",
    bg: "rgba(135, 140, 189, 0.3)",
    ...rest
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 10
  }, undefined);
};

_c = HSeparator;

const VSeparator = props => {
  const {
    variant,
    children,
    ...rest
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    w: "1px",
    bg: "rgba(135, 140, 189, 0.3)",
    ...rest
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 10
  }, undefined);
};

_c2 = VSeparator;


var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "HSeparator");
__webpack_require__.$Refresh$.register(_c2, "VSeparator");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme/theme */ "./src/theme/theme.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/vladmihalache/Documents/GitHub/simmmple-marketplace/src/index.js";







react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["ChakraProvider"], {
  theme: _theme_theme__WEBPACK_IMPORTED_MODULE_4__["default"],
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 9,
  columnNumber: 3
}, undefined), document.getElementById('root'));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/layouts/Main.js":
/*!*****************************!*\
  !*** ./src/layouts/Main.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! routes */ "./src/routes.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/vladmihalache/Documents/GitHub/simmmple-marketplace/src/layouts/Main.js";




function MainLayout() {
  const getRoutes = routes => {
    return routes.map((prop, key) => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: prop.path,
        component: prop.component
      }, key, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 14
      }, this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    children: [getRoutes(routes__WEBPACK_IMPORTED_MODULE_2__["default"]), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      from: "/",
      to: "/homepage"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
_c = MainLayout;

var _c;

__webpack_require__.$Refresh$.register(_c, "MainLayout");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Apps.jsx":
/*!****************************!*\
  !*** ./src/pages/Apps.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var assets_img_homepage_home_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/img/homepage/home-background.png */ "./src/assets/img/homepage/home-background.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/vladmihalache/Documents/GitHub/simmmple-marketplace/src/pages/Apps.jsx";





const Apps = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    minH: "600px",
    bg: "#333",
    bgImage: assets_img_homepage_home_background_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    bgSize: "cover",
    bgPosition: "center",
    children: "Apps"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

_c = Apps;
/* harmony default export */ __webpack_exports__["default"] = (Apps);

var _c;

__webpack_require__.$Refresh$.register(_c, "Apps");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Blog.jsx":
/*!****************************!*\
  !*** ./src/pages/Blog.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var assets_img_homepage_home_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/img/homepage/home-background.png */ "./src/assets/img/homepage/home-background.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/vladmihalache/Documents/GitHub/simmmple-marketplace/src/pages/Blog.jsx";





const Blog = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    minH: "600px",
    bg: "#333",
    bgImage: assets_img_homepage_home_background_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    bgSize: "cover",
    bgPosition: "center",
    children: "test"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

_c = Blog;
/* harmony default export */ __webpack_exports__["default"] = (Blog);

var _c;

__webpack_require__.$Refresh$.register(_c, "Blog");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Bundles.jsx":
/*!*******************************!*\
  !*** ./src/pages/Bundles.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var components_card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/card/Card */ "./src/components/card/Card.js");
/* harmony import */ var components_card_CardBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/card/CardBody */ "./src/components/card/CardBody.js");
/* harmony import */ var components_countdown_Countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/countdown/Countdown */ "./src/components/countdown/Countdown.js");
/* harmony import */ var components_separator_Separator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/separator/Separator */ "./src/components/separator/Separator.jsx");
/* harmony import */ var components_icons_Icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/icons/Icons */ "./src/components/icons/Icons.js");
/* harmony import */ var components_icons_IconBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/icons/IconBox */ "./src/components/icons/IconBox.js");
/* harmony import */ var assets_img_bundles_bundles_background_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/img/bundles/bundles-background.png */ "./src/assets/img/bundles/bundles-background.png");
/* harmony import */ var assets_img_bundles_medal_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/img/bundles/medal.png */ "./src/assets/img/bundles/medal.png");
/* harmony import */ var assets_img_bundles_trophy_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/img/bundles/trophy.png */ "./src/assets/img/bundles/trophy.png");
/* harmony import */ var assets_img_bundles_bundles_stars_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/img/bundles/bundles-stars.png */ "./src/assets/img/bundles/bundles-stars.png");
/* harmony import */ var assets_img_bundles_simmmple_folder_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/img/bundles/simmmple-folder.png */ "./src/assets/img/bundles/simmmple-folder.png");
/* harmony import */ var assets_img_bundles_developers_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assets/img/bundles/developers.png */ "./src/assets/img/bundles/developers.png");
/* harmony import */ var assets_img_bundles_sensual_background_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! assets/img/bundles/sensual-background.png */ "./src/assets/img/bundles/sensual-background.png");
/* harmony import */ var assets_img_bundles_purity_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! assets/img/bundles/purity.png */ "./src/assets/img/bundles/purity.png");
/* harmony import */ var assets_img_bundles_vdb_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! assets/img/bundles/vdb.png */ "./src/assets/img/bundles/vdb.png");
/* harmony import */ var assets_img_bundles_sensual_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! assets/img/bundles/sensual.png */ "./src/assets/img/bundles/sensual.png");
/* harmony import */ var assets_img_bundles_venus_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! assets/img/bundles/venus.png */ "./src/assets/img/bundles/venus.png");
/* harmony import */ var assets_img_bundles_uranus_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! assets/img/bundles/uranus.png */ "./src/assets/img/bundles/uranus.png");
/* harmony import */ var assets_img_homepage_google_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! assets/img/homepage/google.png */ "./src/assets/img/homepage/google.png");
/* harmony import */ var assets_img_homepage_msn_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! assets/img/homepage/msn.png */ "./src/assets/img/homepage/msn.png");
/* harmony import */ var assets_img_homepage_microsoft_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! assets/img/homepage/microsoft.png */ "./src/assets/img/homepage/microsoft.png");
/* harmony import */ var assets_img_homepage_zoho_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! assets/img/homepage/zoho.png */ "./src/assets/img/homepage/zoho.png");
/* harmony import */ var assets_img_homepage_georgiatech_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! assets/img/homepage/georgiatech.png */ "./src/assets/img/homepage/georgiatech.png");
/* harmony import */ var assets_img_homepage_deloitte_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! assets/img/homepage/deloitte.png */ "./src/assets/img/homepage/deloitte.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/vladmihalache/Documents/GitHub/simmmple-marketplace/src/pages/Bundles.jsx",
    _s = __webpack_require__.$Refresh$.signature();


 // Custom Components




 // Icons


 // Images





















const Bundles = () => {
  _s();

  const leftEffect = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const rightEffect = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    direction: "column",
    bg: "#fff",
    overflowX: "hidden",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      justify: "center",
      align: "center",
      bgImage: assets_img_bundles_bundles_background_png__WEBPACK_IMPORTED_MODULE_8__["default"],
      h: "1042px",
      bgSize: "cover",
      bgPosition: "center center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        direction: "column",
        justify: "center",
        align: "center",
        textAlign: "center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(components_icons_Icons__WEBPACK_IMPORTED_MODULE_6__["SimmmpleLogoBundle"], {
          w: "182px",
          h: "50px",
          mb: "48px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          fontSize: "64px",
          color: "#fff",
          fontWeight: "bold",
          mb: "25px",
          children: "Exclusive Digital Bundle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          color: "#fff",
          fontSize: "20px",
          lineHeight: "40px",
          maxW: "70%",
          mb: "50px",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            as: "span",
            fontWeight: "bold",
            children: ["Save up to 80% OFF", " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, undefined), "to all Premium Coded & Design Products & Tools with our Exclusive Digital Bundle!"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(components_countdown_Countdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
            date: "17 December 2021"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
          align: "center",
          mt: "54px",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(components_icons_Icons__WEBPACK_IMPORTED_MODULE_6__["LeftButtonEffect"], {
            ref: leftEffect,
            color: "#fff",
            w: "35px",
            h: "115px",
            transition: "all .5s ease"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            variant: "solid",
            w: "190px",
            h: "56px",
            onMouseEnter: () => {
              leftEffect.current.style.transform = "translateX(-5px)";
              rightEffect.current.style.transform = "translateX(5px)";
            },
            onMouseLeave: () => {
              leftEffect.current.style.transform = "translateX(5px)";
              rightEffect.current.style.transform = "translateX(-5px)";
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              color: "brand.700",
              fontSize: "sm",
              children: "Save up to 80% now"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(components_icons_Icons__WEBPACK_IMPORTED_MODULE_6__["RightButtonEffect"], {
            ref: rightEffect,
            color: "#fff",
            w: "35px",
            h: "115px",
            transition: "all .5s ease"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      mx: "auto",
      maxW: "1170px",
      templateColumns: "repeat(6, 1fr)",
      gap: "70px",
      align: "center",
      justify: "center",
      bg: "#fff",
      borderRadius: "30px",
      p: "45px 100px",
      boxShadow: "0px 18px 40px rgba(112, 144, 176, 0.12)",
      w: "100%",
      transform: "translateY(-50%)",
      mb: "50px",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        align: "center",
        justify: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: assets_img_homepage_google_png__WEBPACK_IMPORTED_MODULE_20__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        align: "center",
        justify: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: assets_img_homepage_msn_png__WEBPACK_IMPORTED_MODULE_21__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        align: "center",
        justify: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: assets_img_homepage_microsoft_png__WEBPACK_IMPORTED_MODULE_22__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        align: "center",
        justify: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: assets_img_homepage_zoho_png__WEBPACK_IMPORTED_MODULE_23__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        align: "center",
        justify: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: assets_img_homepage_georgiatech_png__WEBPACK_IMPORTED_MODULE_24__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        align: "center",
        justify: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          src: assets_img_homepage_deloitte_png__WEBPACK_IMPORTED_MODULE_25__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      py: "100px",
      direction: "column",
      w: "1170px",
      mx: "auto",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        direction: "column",
        align: "center",
        w: "100%",
        mb: "72px",
        mx: "auto",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          fontSize: "xs",
          color: "brand.300",
          fontWeight: "bold",
          mb: "16px",
          letterSpacing: "2px",
          textAlign: "center",
          children: "EXCLUSIVE DIGITAL BUNDLE BENEFITS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          fontSize: "34px",
          lineHeight: "44px",
          letterSpacing: "-1px",
          color: "brand.700",
          fontWeight: "500",
          mb: "20px",
          mx: "auto",
          textAlign: "center",
          children: "So... what\u2019s it all about?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          fontSize: "md",
          lineHeight: "28px",
          color: "#878CBD",
          fontWeight: "400",
          mx: "auto",
          textAlign: "center",
          children: "It's about building better products faster than ever before."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        flexWrap: {
          base: "wrap",
          md: "nowrap"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(components_card_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
          h: "320px",
          me: "20px",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(components_card_CardBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
            h: "100%",
            py: "12px",
            justify: "space-between",
            px: "20px",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
              flexDirection: "column",
              align: "center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
                src: assets_img_bundles_simmmple_folder_png__WEBPACK_IMPORTED_MODULE_12__["default"],
                w: "100px",
                h: "100px",
                mb: "auto"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                textAlign: "center",
                fontWeight: "700",
                mb: "10px",
                fontSize: "38px",
                children: "4,000+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                textAlign: "center",
                fontSize: "md",
                lineHeight: "28px",
                color: "#878CBD",
                fontWeight: "400",
                children: "Coded & Designed Components and Elements"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(components_card_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
          h: "320px",
          me: "20px",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(components_card_CardBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
            h: "100%",
            py: "12px",
            justify: "space-between",
            px: "20px",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
              flexDirection: "column",
              align: "center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                mb: "auto",
                flexDirection: "column",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
                  src: assets_img_bundles_trophy_png__WEBPACK_IMPORTED_MODULE_10__["default"],
                  w: "100px",
                  h: "100px"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 206,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
                  src: assets_img_bundles_bundles_stars_png__WEBPACK_IMPORTED_MODULE_11__["default"],
                  w: "96px",
                  h: "21.6px",
                  boxShadow: "0px 15px 41px -4px #7090B099",
                  borderRadius: "30px",
                  transform: "translate(0px, -10px)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 207,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                textAlign: "center",
                fontWeight: "700",
                mb: "10px",
                fontSize: "38px",
                children: "4.9/5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                textAlign: "center",
                fontSize: "md",
                lineHeight: "28px",
                color: "#878CBD",
                fontWeight: "400",
                children: "Reviews from developers & designers all over the world"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(components_card_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
          h: "320px",
          me: "20px",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(components_card_CardBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
            h: "100%",
            py: "12px",
            justify: "space-between",
            px: "20px",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
              flexDirection: "column",
              align: "center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
                src: assets_img_bundles_developers_png__WEBPACK_IMPORTED_MODULE_13__["default"],
                w: "100px",
                h: "100px",
                mb: "auto"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                textAlign: "center",
                fontWeight: "700",
                mb: "10px",
                fontSize: "38px",
                children: "10,000+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 238,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                textAlign: "center",
                fontSize: "md",
                lineHeight: "28px",
                color: "#878CBD",
                fontWeight: "400",
                children: "Developers & Designers that use our digital products"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(components_card_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
          h: "320px",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(components_card_CardBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
            h: "100%",
            py: "12px",
            px: "18px",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
              flexDirection: "column",
              align: "center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
                src: assets_img_bundles_medal_png__WEBPACK_IMPORTED_MODULE_9__["default"],
                w: "100px",
                h: "129px"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                mt: "auto",
                textAlign: "center",
                fontWeight: "700",
                mb: "10px",
                fontSize: "38px",
                children: "Lifetime"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 260,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                textAlign: "center",
                fontSize: "md",
                lineHeight: "28px",
                color: "#878CBD",
                fontWeight: "400",
                children: "We offer Lifetime License for all products of this bundle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 268,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      mb: "118px",
      direction: "column",
      w: "1170px",
      mx: "auto",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        direction: "column",
        align: "center",
        w: "100%",
        mb: "72px",
        mx: "auto",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          fontSize: "xs",
          color: "brand.300",
          fontWeight: "bold",
          mb: "16px",
          letterSpacing: "2px",
          textAlign: "center",
          children: "EXCLUSIVE DIGITAL BUNDLE BENEFITS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          fontSize: "34px",
          lineHeight: "44px",
          letterSpacing: "-1px",
          color: "brand.700",
          fontWeight: "500",
          mb: "20px",
          mx: "auto",
          textAlign: "center",
          children: "What Exclusive Digital Bundle contains?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          fontSize: "md",
          lineHeight: "28px",
          color: "#878CBD",
          fontWeight: "400",
          mx: "auto",
          textAlign: "center",
          children: "Well... a lot of cool things, like most of our premium digital products."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        flexWrap: {
          base: "wrap",
          md: "nowrap"
        },
        mb: "100px",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
          w: "100%",
          h: "550px",
          position: "relative",
          mb: "90px",
          borderRadius: "30px",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
            src: assets_img_bundles_venus_png__WEBPACK_IMPORTED_MODULE_18__["default"],
            w: "575px",
            h: "586px",
            borderRadius: "18px",
            position: "absolute",
            left: "0",
            top: "50%",
            transform: "translate(0px, -50%);",
            zIndex: "2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 321,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
            w: "100%",
            h: "100%",
            position: "relative",
            justifyContent: "flex-end",
            overflow: "hidden",
            pe: "70px",
            pt: "45px",
            borderRadius: "30px",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
              position: "absolute",
              transform: "translate(-50%, -50%);",
              w: "110%",
              h: "110%",
              left: "53%",
              top: "50%",
              src: assets_img_bundles_sensual_background_png__WEBPACK_IMPORTED_MODULE_14__["default"],
              filter: "blur(40px)",
              zIndex: "1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 341,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
              w: "456px",
              maxW: "100%",
              flexDirection: "column",
              zIndex: "2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                fontWeight: "bold",
                fontSize: "50px",
                mb: "20px",
                color: "white",
                children: "Venus Design System PRO"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 353,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                fontSize: "md",
                lineHeight: "28px",
                color: "white",
                w: "430px",
                maxW: "100%",
                mb: "40px",
                children: "An easy-to-use Design Tool with the most common 2000+ UI/UX components states that allows you to design quickly with world-class standards out-of-the-box."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 356,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                w: "100%",
                justifyContent: {
                  base: "center",
                  lg: "space-between"
                },
                align: "center",
                mb: "54px",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                  flexDirection: "column",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "26px",
                    lineHeight: "33px",
                    color: "white",
                    fontWeight: "700",
                    children: "250+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 373,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "sm",
                    lineHeight: "14px",
                    color: "white",
                    children: "Global Styles"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 381,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 372,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                  flexDirection: "column",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "26px",
                    lineHeight: "33px",
                    color: "white",
                    fontWeight: "700",
                    children: "2000+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 390,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "sm",
                    lineHeight: "14px",
                    color: "white",
                    children: "Components States"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 398,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 389,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                  flexDirection: "column",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "26px",
                    lineHeight: "33px",
                    color: "white",
                    fontWeight: "700",
                    children: "1400+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 407,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "sm",
                    lineHeight: "14px",
                    color: "white",
                    children: "Material Design Icons"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 415,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 406,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 367,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                w: "100%",
                justifyContent: "space-between",
                align: "center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
                  color: "#020425",
                  fontWeight: "400",
                  fontSize: "sm",
                  lineHeight: "14px",
                  h: "56px",
                  w: "190px",
                  children: "Live Preview"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 425,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
                  color: "white",
                  bg: "none",
                  border: "1px solid white",
                  _hover: {
                    bg: "none",
                    opacity: "0.8"
                  },
                  fontWeight: "400",
                  fontSize: "sm",
                  lineHeight: "14px",
                  h: "56px",
                  w: "190px",
                  children: "More Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 434,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 424,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 352,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 332,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        flexWrap: {
          base: "wrap",
          md: "nowrap"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
          w: "100%",
          h: "550px",
          position: "relative",
          mb: "90px",
          borderRadius: "30px",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
            src: assets_img_bundles_vdb_png__WEBPACK_IMPORTED_MODULE_16__["default"],
            w: "575px",
            h: "586px",
            borderRadius: "18px",
            position: "absolute",
            right: "0",
            top: "50%",
            transform: "translate(5%, -50%);",
            zIndex: "2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 461,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
            w: "100%",
            h: "100%",
            position: "relative",
            justifyContent: "flex-start",
            overflow: "hidden",
            ps: "70px",
            pt: "45px",
            borderRadius: "30px",
            bg: "linear-gradient(108.54deg, #FF416C 6.56%, #FF4B2B 95.2%)",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
              w: "456px",
              maxW: "100%",
              flexDirection: "column",
              zIndex: "2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                fontWeight: "bold",
                fontSize: "50px",
                mb: "20px",
                color: "white",
                children: "Venus Dashboard Builder PRO"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 483,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                fontSize: "md",
                lineHeight: "28px",
                color: "white",
                w: "450px",
                maxW: "100%",
                mb: "40px",
                children: "Create awesome dashboards with less effort directly in Figma! The first Dashboard Builder for Figma with more than 400+ widgets/cards that allows you to design dashboards quickly."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 486,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                w: "100%",
                justifyContent: {
                  base: "center",
                  lg: "space-between"
                },
                align: "center",
                mb: "54px",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                  flexDirection: "column",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "26px",
                    lineHeight: "33px",
                    color: "white",
                    fontWeight: "700",
                    children: "90+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 503,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "sm",
                    lineHeight: "14px",
                    color: "white",
                    children: "Global Styles"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 511,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 502,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                  flexDirection: "column",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "26px",
                    lineHeight: "33px",
                    color: "white",
                    fontWeight: "700",
                    children: "400+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 520,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "sm",
                    lineHeight: "14px",
                    color: "white",
                    children: "Widgets/Cards"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 528,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 519,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                  flexDirection: "column",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "26px",
                    lineHeight: "33px",
                    color: "white",
                    fontWeight: "700",
                    children: "30+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 537,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "sm",
                    lineHeight: "14px",
                    color: "white",
                    children: "Screen Examples"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 545,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 536,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 497,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                w: "100%",
                justifyContent: "space-between",
                align: "center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
                  color: "#FF4555",
                  fontWeight: "400",
                  fontSize: "sm",
                  lineHeight: "14px",
                  h: "56px",
                  w: "190px",
                  children: "Live Preview"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 555,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
                  color: "white",
                  bg: "none",
                  border: "1px solid white",
                  _hover: {
                    bg: "none",
                    opacity: "0.8"
                  },
                  fontWeight: "400",
                  fontSize: "sm",
                  lineHeight: "14px",
                  h: "56px",
                  w: "190px",
                  children: "More Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 564,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 554,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 482,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 472,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 455,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 454,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        flexWrap: {
          base: "wrap",
          md: "nowrap"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
          w: "100%",
          h: "550px",
          position: "relative",
          mb: "90px",
          borderRadius: "30px",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
            src: assets_img_bundles_purity_png__WEBPACK_IMPORTED_MODULE_15__["default"],
            w: "575px",
            h: "586px",
            borderRadius: "18px",
            position: "absolute",
            left: "0",
            top: "50%",
            transform: "translate(0px, -50%);",
            zIndex: "2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 591,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
            w: "100%",
            h: "100%",
            position: "relative",
            justifyContent: "flex-end",
            overflow: "hidden",
            pe: "70px",
            pt: "45px",
            borderRadius: "30px",
            background: "linear-gradient(180deg, #7BCBD4 0%, #29C6B7 100%)",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
              w: "456px",
              maxW: "100%",
              flexDirection: "column",
              zIndex: "2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                fontWeight: "bold",
                fontSize: "50px",
                mb: "20px",
                color: "white",
                letterSpacing: "-2.5px",
                children: "Purity UI - Chakra UI Admin Dashboard"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 613,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                fontSize: "md",
                lineHeight: "28px",
                color: "white",
                w: "430px",
                maxW: "100%",
                mb: "40px",
                children: "Most trendiest, complex and innovative Dashboard made by Creative Tim & Simmmple. Check our latest Premium ReactJS Dashboard based on Chakra UI."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 621,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                w: "100%",
                justifyContent: {
                  base: "center",
                  lg: "space-between"
                },
                align: "center",
                mb: "54px",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                  flexDirection: "column",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "26px",
                    lineHeight: "33px",
                    color: "white",
                    fontWeight: "700",
                    children: "React"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 638,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "sm",
                    lineHeight: "14px",
                    color: "white",
                    children: "Technology"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 646,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 637,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                  flexDirection: "column",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "26px",
                    lineHeight: "33px",
                    color: "white",
                    fontWeight: "700",
                    children: "300+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 655,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "sm",
                    lineHeight: "14px",
                    color: "white",
                    children: "Individual Elements"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 663,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 654,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                  flexDirection: "column",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "26px",
                    lineHeight: "33px",
                    color: "white",
                    fontWeight: "700",
                    children: "Full"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 672,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "sm",
                    lineHeight: "14px",
                    color: "white",
                    children: "Documentation"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 680,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 671,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 632,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                w: "100%",
                justifyContent: "space-between",
                align: "center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
                  color: "#30C7BA",
                  fontWeight: "400",
                  fontSize: "sm",
                  lineHeight: "14px",
                  h: "56px",
                  w: "190px",
                  children: "Live Preview"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 690,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
                  color: "white",
                  bg: "none",
                  border: "1px solid white",
                  _hover: {
                    bg: "none",
                    opacity: "0.8"
                  },
                  fontWeight: "400",
                  fontSize: "sm",
                  lineHeight: "14px",
                  h: "56px",
                  w: "190px",
                  children: "More Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 699,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 689,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 612,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 602,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 585,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 584,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        flexWrap: {
          base: "wrap",
          md: "nowrap"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
          w: "100%",
          h: "550px",
          position: "relative",
          mb: "90px",
          borderRadius: "30px",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
            src: assets_img_bundles_uranus_png__WEBPACK_IMPORTED_MODULE_19__["default"],
            w: "575px",
            h: "586px",
            borderRadius: "18px",
            position: "absolute",
            right: "0",
            top: "50%",
            transform: "translate(5%, -50%);",
            zIndex: "2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 726,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
            w: "100%",
            h: "100%",
            position: "relative",
            justifyContent: "flex-start",
            overflow: "hidden",
            ps: "70px",
            pt: "45px",
            borderRadius: "30px",
            background: "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
              w: "456px",
              maxW: "100%",
              flexDirection: "column",
              zIndex: "2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                fontWeight: "bold",
                fontSize: "50px",
                mb: "20px",
                color: "white",
                children: "Uranus Bootstrap Wireframe Kit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 748,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                fontSize: "md",
                lineHeight: "28px",
                color: "white",
                w: "460px",
                maxW: "100%",
                mb: "40px",
                letterSpacing: "-0.8px",
                children: "Uranus - Wireframe Kit is a wireframing pack with more than 180+ dark/light ready-to-use web elements/sections. The basement idea of this kit was started from the wireframing time problem."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 751,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                w: "100%",
                justifyContent: {
                  base: "center",
                  lg: "space-between"
                },
                align: "center",
                mb: "54px",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                  flexDirection: "column",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "26px",
                    lineHeight: "33px",
                    color: "white",
                    fontWeight: "700",
                    children: "Bootstrap"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 770,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "sm",
                    lineHeight: "14px",
                    color: "white",
                    children: "Wireframe Kit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 778,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 769,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                  flexDirection: "column",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "26px",
                    lineHeight: "33px",
                    color: "white",
                    fontWeight: "700",
                    children: "180+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 787,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "sm",
                    lineHeight: "14px",
                    color: "white",
                    children: "Widgets/Cards"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 795,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 786,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                  flexDirection: "column",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "26px",
                    lineHeight: "33px",
                    color: "white",
                    fontWeight: "700",
                    children: "Dark/Light"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 804,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "sm",
                    lineHeight: "14px",
                    color: "white",
                    children: "Themes"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 812,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 803,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 764,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                w: "100%",
                justifyContent: "space-between",
                align: "center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
                  color: "#634FFF",
                  fontWeight: "400",
                  fontSize: "sm",
                  lineHeight: "14px",
                  h: "56px",
                  w: "190px",
                  children: "Live Preview"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 822,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
                  color: "white",
                  bg: "none",
                  border: "1px solid white",
                  _hover: {
                    bg: "none",
                    opacity: "0.8"
                  },
                  fontWeight: "400",
                  fontSize: "sm",
                  lineHeight: "14px",
                  h: "56px",
                  w: "190px",
                  children: "More Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 831,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 821,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 747,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 737,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 720,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 719,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        flexWrap: {
          base: "wrap",
          md: "nowrap"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
          w: "100%",
          h: "550px",
          position: "relative",
          borderRadius: "30px",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
            src: assets_img_bundles_sensual_png__WEBPACK_IMPORTED_MODULE_17__["default"],
            w: "575px",
            h: "586px",
            borderRadius: "18px",
            position: "absolute",
            left: "0",
            top: "50%",
            transform: "translate(0px, -50%);",
            zIndex: "2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 853,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
            w: "100%",
            h: "100%",
            position: "relative",
            justifyContent: "flex-end",
            overflow: "hidden",
            pe: "70px",
            pt: "45px",
            borderRadius: "30px",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
              position: "absolute",
              transform: "translate(-50%, -50%);",
              w: "110%",
              h: "110%",
              left: "53%",
              top: "50%",
              src: assets_img_bundles_sensual_background_png__WEBPACK_IMPORTED_MODULE_14__["default"],
              filter: "blur(40px)",
              zIndex: "1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 873,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
              w: "456px",
              maxW: "100%",
              flexDirection: "column",
              zIndex: "2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                fontWeight: "bold",
                fontSize: "50px",
                mb: "20px",
                color: "white",
                children: "Purity UI React Sensual Kit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 885,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                fontSize: "md",
                lineHeight: "28px",
                color: "white",
                w: "430px",
                maxW: "100%",
                mb: "40px",
                children: "Most trendiest, complex and innovative Dashboard made by Simmmple. Check our latest Premium ReactJS Dashboard based on Chakra UI."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 888,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                w: "100%",
                justifyContent: {
                  base: "center",
                  lg: "space-between"
                },
                align: "center",
                mb: "54px",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                  flexDirection: "column",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "26px",
                    lineHeight: "33px",
                    color: "white",
                    fontWeight: "700",
                    children: "Trendy"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 905,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "sm",
                    lineHeight: "14px",
                    color: "white",
                    children: "Design Styles"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 913,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 904,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                  flexDirection: "column",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "26px",
                    lineHeight: "33px",
                    color: "white",
                    fontWeight: "700",
                    children: "300+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 922,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "sm",
                    lineHeight: "14px",
                    color: "white",
                    children: "Individual Components"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 930,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 921,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                  flexDirection: "column",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "26px",
                    lineHeight: "33px",
                    color: "white",
                    fontWeight: "700",
                    children: "Full"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 939,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    textAlign: "center",
                    fontSize: "sm",
                    lineHeight: "14px",
                    color: "white",
                    children: "Documentation"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 947,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 938,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 899,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                w: "100%",
                justifyContent: "space-between",
                align: "center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
                  color: "#020425",
                  fontWeight: "400",
                  fontSize: "sm",
                  lineHeight: "14px",
                  h: "56px",
                  w: "190px",
                  children: "Live Preview"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 957,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
                  color: "white",
                  bg: "none",
                  border: "1px solid white",
                  _hover: {
                    bg: "none",
                    opacity: "0.8"
                  },
                  fontWeight: "400",
                  fontSize: "sm",
                  lineHeight: "14px",
                  h: "56px",
                  w: "190px",
                  children: "More Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 966,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 956,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 884,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 864,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 852,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 851,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 7
    }, undefined), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(components_separator_Separator__WEBPACK_IMPORTED_MODULE_5__["HSeparator"], {
      w: "774px",
      mb: "100px",
      mx: "auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 987,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      pb: "100px",
      direction: "column",
      w: "1170px",
      mx: "auto",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        direction: "column",
        align: "center",
        w: "100%",
        mb: "72px",
        mx: "auto",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          fontSize: "xs",
          color: "brand.300",
          fontWeight: "bold",
          mb: "16px",
          letterSpacing: "2px",
          textAlign: "center",
          children: "PRICING DETAILS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 990,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          fontSize: "34px",
          lineHeight: "44px",
          letterSpacing: "-1px",
          color: "brand.700",
          fontWeight: "500",
          mb: "20px",
          mx: "auto",
          textAlign: "center",
          w: "450px",
          children: "Start building today and save hours from the process."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 999,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          fontSize: "md",
          lineHeight: "28px",
          color: "#878CBD",
          fontWeight: "400",
          mx: "auto",
          textAlign: "center",
          children: "Trusted by over 10,000+ developers, designers and software companies"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1011,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 989,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        flexWrap: {
          base: "wrap",
          md: "nowrap"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(components_card_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
          h: "735px",
          me: "20px",
          bg: "red",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(components_card_CardBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
            h: "100%",
            pb: "34px",
            pt: "50px",
            px: "34px",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
              flexDirection: "column",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                align: "center",
                mb: "5px",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                  color: "brand.700",
                  fontSize: "22px",
                  lineHeight: "28px",
                  fontWeight: "500",
                  children: "Freelancer"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1026,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1025,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                align: "center",
                mb: "22px",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                  color: "brand.700",
                  fontSize: "52px",
                  lineHeight: "67px",
                  fontWeight: "700",
                  me: "15px",
                  children: "$72"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1035,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                  flexDirection: "column",
                  mb: "22px",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    color: "brand.700",
                    fontSize: "16px",
                    lineHeight: "21px",
                    children: "reg. $354"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1044,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                    color: "green.600",
                    fontSize: "16px",
                    lineHeight: "21px",
                    children: "Save up to 80%"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1047,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1043,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1034,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                mb: "22px",
                color: "#878CBD",
                fontSize: "md",
                lineHeight: "28px",
                letterSpacing: "-1px",
                children: "Perfect for personal use and for your side projects. A single license for solo designers, developers and freelancers."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1053,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
                    w: "21px",
                    h: "21px",
                    bg: "red",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(components_icons_Icons__WEBPACK_IMPORTED_MODULE_6__["Done"], {
                      color: "brand.300",
                      w: "14.66px"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1065,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1064,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1063,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1062,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1024,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1023,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1022,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(components_card_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
          h: "735px",
          me: "20px",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(components_card_CardBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
            h: "100%",
            pb: "34px",
            pt: "50px",
            justify: "space-between",
            px: "34px",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
              flexDirection: "column",
              align: "center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                textAlign: "center",
                fontWeight: "700",
                mb: "10px",
                fontSize: "38px",
                children: "4,000+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1080,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                textAlign: "center",
                fontSize: "md",
                lineHeight: "28px",
                color: "#878CBD",
                fontWeight: "400",
                children: "Coded & Designed Components and Elements"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1087,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1079,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1073,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1072,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(components_card_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
          h: "735px",
          me: "20px",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(components_card_CardBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
            h: "100%",
            pb: "34px",
            pt: "50px",
            justify: "space-between",
            px: "34px",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
              flexDirection: "column",
              align: "center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                textAlign: "center",
                fontWeight: "700",
                mb: "10px",
                fontSize: "38px",
                children: "4,000+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1106,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
                textAlign: "center",
                fontSize: "md",
                lineHeight: "28px",
                color: "#878CBD",
                fontWeight: "400",
                children: "Coded & Designed Components and Elements"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1113,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 1105,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1099,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1098,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1021,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 988,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_26__["jsxDEV"])(components_separator_Separator__WEBPACK_IMPORTED_MODULE_5__["HSeparator"], {
      w: "774px",
      mb: "100px",
      mx: "auto"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1126,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, undefined);
};

_s(Bundles, "FP3+Ho/4ZaTw20t2hsOooaPGuxw=");

_c = Bundles;
/* harmony default export */ __webpack_exports__["default"] = (Bundles);

var _c;

__webpack_require__.$Refresh$.register(_c, "Bundles");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Home.jsx":
/*!****************************!*\
  !*** ./src/pages/Home.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var components_card_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/card/Card */ "./src/components/card/Card.js");
/* harmony import */ var components_card_CardBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/card/CardBody */ "./src/components/card/CardBody.js");
/* harmony import */ var components_products_ProductList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/products/ProductList */ "./src/components/products/ProductList.js");
/* harmony import */ var components_countdown_Countdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/countdown/Countdown */ "./src/components/countdown/Countdown.js");
/* harmony import */ var variables_products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! variables/products */ "./src/variables/products.js");
/* harmony import */ var components_icons_Icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/icons/Icons */ "./src/components/icons/Icons.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var assets_img_homepage_home_background_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/img/homepage/home-background.png */ "./src/assets/img/homepage/home-background.png");
/* harmony import */ var assets_img_homepage_on_home_background_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/img/homepage/on-home-background.png */ "./src/assets/img/homepage/on-home-background.png");
/* harmony import */ var assets_img_homepage_bundle_background_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assets/img/homepage/bundle-background.png */ "./src/assets/img/homepage/bundle-background.png");
/* harmony import */ var assets_img_homepage_google_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! assets/img/homepage/google.png */ "./src/assets/img/homepage/google.png");
/* harmony import */ var assets_img_homepage_msn_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! assets/img/homepage/msn.png */ "./src/assets/img/homepage/msn.png");
/* harmony import */ var assets_img_homepage_microsoft_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! assets/img/homepage/microsoft.png */ "./src/assets/img/homepage/microsoft.png");
/* harmony import */ var assets_img_homepage_zoho_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! assets/img/homepage/zoho.png */ "./src/assets/img/homepage/zoho.png");
/* harmony import */ var assets_img_homepage_georgiatech_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! assets/img/homepage/georgiatech.png */ "./src/assets/img/homepage/georgiatech.png");
/* harmony import */ var assets_img_homepage_deloitte_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! assets/img/homepage/deloitte.png */ "./src/assets/img/homepage/deloitte.png");
/* harmony import */ var assets_img_homepage_figma2_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! assets/img/homepage/figma2.png */ "./src/assets/img/homepage/figma2.png");
/* harmony import */ var assets_img_homepage_vscode2_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! assets/img/homepage/vscode2.png */ "./src/assets/img/homepage/vscode2.png");
/* harmony import */ var assets_img_homepage_mail2_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! assets/img/homepage/mail2.png */ "./src/assets/img/homepage/mail2.png");
/* harmony import */ var assets_img_homepage_simmmple_button_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! assets/img/homepage/simmmple-button.png */ "./src/assets/img/homepage/simmmple-button.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/vladmihalache/Documents/GitHub/simmmple-marketplace/src/pages/Home.jsx",
    _s = __webpack_require__.$Refresh$.signature();



 // Custom Components





 // Icons



 // Images
















const Home = () => {
  _s();

  const leftEffect = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const rightEffect = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    direction: "column",
    bg: "#fff",
    overflowX: "hidden",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      minH: "870px",
      bg: "#333",
      bgImage: assets_img_homepage_home_background_png__WEBPACK_IMPORTED_MODULE_11__["default"],
      bgSize: "cover",
      bgPosition: "center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        position: "absolute",
        right: "0",
        mt: "70px",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
          src: assets_img_homepage_on_home_background_png__WEBPACK_IMPORTED_MODULE_12__["default"],
          w: "100%",
          h: "100%"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
        direction: "column",
        w: "1170px",
        mx: "auto",
        mt: "210px",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
          direction: "column",
          maxW: "528px",
          mb: "54px",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            fontSize: "xs",
            color: "#fff",
            fontWeight: "bold",
            mb: "16px",
            letterSpacing: "2px",
            children: "BUILD BETTER, BUILD FASTER"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            fontSize: "44px",
            color: "#fff",
            fontWeight: "500",
            letterSpacing: "-1px",
            lineHeight: "56px",
            mb: "36px",
            children: "Premium Digital Solutions for developers, designers, agencies & startups"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            fontWeight: "normal",
            fontSize: "16px",
            lineHeight: "28px",
            color: "#fff",
            maxW: "438px",
            children: ["Join over", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
              as: "span",
              fontWeight: "bold",
              children: "10,000+ developers, designers & startups"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, undefined), " ", "that use our digital solutions to quickly design and build responsive mobile-first websites and apps."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
            justify: "space-between",
            bg: "#fff",
            borderRadius: "70px",
            w: "470px",
            h: "70px",
            p: "22px 32px",
            align: "center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
              placeholder: "eg. Venus Design System",
              boxShadow: "none",
              border: "none",
              _focus: {
                border: "none"
              },
              _placeholder: {
                color: "#878CBD"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
              as: react_icons_bs__WEBPACK_IMPORTED_MODULE_9__["BsSearch"],
              w: "20px",
              h: "20px",
              color: "#878CBD"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      direction: "column",
      maxW: "1170px",
      mx: "auto",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        templateColumns: "repeat(6, 1fr)",
        gap: "70px",
        align: "center",
        justify: "center",
        bg: "#fff",
        borderRadius: "30px",
        p: "45px 100px",
        boxShadow: "0px 18px 40px rgba(112, 144, 176, 0.12)",
        w: "100%",
        transform: "translateY(-50%)",
        mb: "50px",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
          align: "center",
          justify: "center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
            src: assets_img_homepage_google_png__WEBPACK_IMPORTED_MODULE_14__["default"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
          align: "center",
          justify: "center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
            src: assets_img_homepage_msn_png__WEBPACK_IMPORTED_MODULE_15__["default"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
          align: "center",
          justify: "center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
            src: assets_img_homepage_microsoft_png__WEBPACK_IMPORTED_MODULE_16__["default"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
          align: "center",
          justify: "center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
            src: assets_img_homepage_zoho_png__WEBPACK_IMPORTED_MODULE_17__["default"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
          align: "center",
          justify: "center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
            src: assets_img_homepage_georgiatech_png__WEBPACK_IMPORTED_MODULE_18__["default"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
          align: "center",
          justify: "center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
            src: assets_img_homepage_deloitte_png__WEBPACK_IMPORTED_MODULE_19__["default"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
        direction: "column",
        pb: "100px",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          fontSize: "xs",
          color: "brand.300",
          fontWeight: "bold",
          mb: "16px",
          letterSpacing: "2px",
          children: "BUILD BETTER, BUILD FASTER"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          fontSize: "34px",
          lineHeight: "44px",
          letterSpacing: "-1px",
          color: "brand.700",
          fontWeight: "500",
          mb: "58px",
          children: "Browse popular categories"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          templateColumns: "repeat(4, 1fr)",
          gap: "20px",
          h: "340px",
          w: "100%",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(components_card_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(components_card_CardBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
              h: "100%",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
                direction: "column",
                align: "center",
                w: "100%",
                h: "100%",
                justify: "center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
                  w: "75px",
                  h: "110px",
                  mb: "50px",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                    src: assets_img_homepage_figma2_png__WEBPACK_IMPORTED_MODULE_20__["default"],
                    w: "100%",
                    h: "100%"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 180,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
                  color: "brand.700",
                  fontWeight: "500",
                  fontSize: "22px",
                  mb: "12px",
                  children: "Figma Products"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
                  to: "/",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
                    align: "center",
                    color: "brand.300",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "brand.300",
                      me: "4px",
                      children: "See all products"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 191,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
                      as: react_icons_md__WEBPACK_IMPORTED_MODULE_10__["MdKeyboardArrowRight"],
                      w: "14px",
                      h: "14px",
                      mt: "4px"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 198,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 190,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(components_card_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(components_card_CardBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
              h: "100%",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
                direction: "column",
                align: "center",
                w: "100%",
                h: "100%",
                justify: "center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
                  w: "116px",
                  h: "110px",
                  mb: "50px",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                    src: assets_img_homepage_vscode2_png__WEBPACK_IMPORTED_MODULE_21__["default"],
                    w: "100%",
                    h: "100%"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 218,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
                  color: "brand.700",
                  fontWeight: "500",
                  fontSize: "22px",
                  mb: "12px",
                  children: "Coded Products"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
                  to: "/",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
                    align: "center",
                    color: "brand.300",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "brand.300",
                      me: "4px",
                      children: "See all products"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 229,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
                      as: react_icons_md__WEBPACK_IMPORTED_MODULE_10__["MdKeyboardArrowRight"],
                      w: "14px",
                      h: "14px",
                      mt: "4px"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 236,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 228,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 227,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(components_card_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(components_card_CardBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
              h: "100%",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
                direction: "column",
                align: "center",
                w: "100%",
                h: "100%",
                justify: "center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
                  w: "150px",
                  w: "140px",
                  mb: "32px",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                    src: assets_img_homepage_mail2_png__WEBPACK_IMPORTED_MODULE_22__["default"],
                    w: "100%",
                    h: "100%"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 256,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 255,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
                  color: "brand.700",
                  fontWeight: "500",
                  fontSize: "22px",
                  mb: "12px",
                  children: "Articles & Guides"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 258,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
                  to: "/",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
                    align: "center",
                    color: "brand.300",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "brand.300",
                      me: "4px",
                      children: "Learn more"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 267,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
                      as: react_icons_md__WEBPACK_IMPORTED_MODULE_10__["MdKeyboardArrowRight"],
                      w: "14px",
                      h: "14px",
                      mt: "4px"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 274,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 266,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 265,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 249,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(components_card_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(components_card_CardBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
              h: "100%",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
                direction: "column",
                align: "center",
                w: "100%",
                h: "100%",
                justify: "center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
                  w: "160px",
                  w: "165px",
                  transform: "rotate(-5deg)",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                    src: assets_img_homepage_simmmple_button_png__WEBPACK_IMPORTED_MODULE_23__["default"],
                    w: "100%",
                    h: "100%"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 294,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 293,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
                  color: "brand.700",
                  fontWeight: "500",
                  fontSize: "22px",
                  mb: "12px",
                  children: "Apps & Plugins"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 296,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
                  to: "/",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
                    align: "center",
                    color: "brand.300",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "brand.300",
                      me: "4px",
                      children: "Learn more"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 305,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
                      as: react_icons_md__WEBPACK_IMPORTED_MODULE_10__["MdKeyboardArrowRight"],
                      w: "14px",
                      h: "14px",
                      mt: "4px"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 312,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 304,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 303,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 287,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 285,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      bg: "#F4F7FE",
      py: "100px",
      overflowX: "hidden",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
        direction: "column",
        w: "1170px",
        mx: "auto",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
          justify: "space-between",
          align: "center",
          w: "100%",
          mb: "72px",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
            direction: "column",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
              fontSize: "xs",
              color: "brand.300",
              fontWeight: "bold",
              mb: "16px",
              letterSpacing: "2px",
              children: "OUR DIGITAL PRODUCTS"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 330,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
              fontSize: "34px",
              lineHeight: "44px",
              letterSpacing: "-1px",
              color: "brand.700",
              fontWeight: "500",
              children: "Featured products"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 338,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 329,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            bg: "#fff",
            w: "190px",
            h: "56px",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
              color: "brand.300",
              fontWeight: "500",
              fontSize: "sm",
              children: "Explore all Products"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 348,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 347,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(components_products_ProductList__WEBPACK_IMPORTED_MODULE_5__["default"], {
          products: variables_products__WEBPACK_IMPORTED_MODULE_7__["featuredProducts"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      justify: "center",
      align: "center",
      bgImage: assets_img_homepage_bundle_background_png__WEBPACK_IMPORTED_MODULE_13__["default"],
      h: "760px",
      bgSize: "cover",
      bgPosition: "center center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
        direction: "column",
        justify: "center",
        align: "center",
        textAlign: "center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(components_icons_Icons__WEBPACK_IMPORTED_MODULE_8__["SimmmpleLogoBundle"], {
          w: "182px",
          h: "50px",
          mb: "48px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          fontSize: "64px",
          color: "#fff",
          fontWeight: "bold",
          mb: "25px",
          children: "Exclusive Digital Bundle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          color: "#fff",
          fontSize: "20px",
          lineHeight: "40px",
          maxW: "70%",
          mb: "50px",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            as: "span",
            fontWeight: "bold",
            children: ["Save up to 80% OFF", " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 378,
            columnNumber: 13
          }, undefined), "to all Premium Coded & Design Products & Tools with our Exclusive Digital Bundle!"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 372,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(components_countdown_Countdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
            date: "17 December 2021"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 385,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 384,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
          align: "center",
          mt: "54px",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(components_icons_Icons__WEBPACK_IMPORTED_MODULE_8__["LeftButtonEffect"], {
            ref: leftEffect,
            color: "#fff",
            w: "35px",
            h: "115px",
            transition: "all .5s ease"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 388,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            variant: "solid",
            w: "190px",
            h: "56px",
            onMouseEnter: () => {
              leftEffect.current.style.transform = "translateX(-5px)";
              rightEffect.current.style.transform = "translateX(5px)";
            },
            onMouseLeave: () => {
              leftEffect.current.style.transform = "translateX(5px)";
              rightEffect.current.style.transform = "translateX(-5px)";
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
              color: "brand.700",
              fontSize: "sm",
              children: "Save up to 80% now"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 407,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 395,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(components_icons_Icons__WEBPACK_IMPORTED_MODULE_8__["RightButtonEffect"], {
            ref: rightEffect,
            color: "#fff",
            w: "35px",
            h: "115px",
            transition: "all .5s ease"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 411,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 387,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      bg: "#F4F7FE",
      py: "100px",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
        direction: "column",
        w: "1170px",
        mx: "auto",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
          justify: "space-between",
          align: "center",
          w: "100%",
          mb: "72px",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
            direction: "column",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
              fontSize: "xs",
              color: "brand.300",
              fontWeight: "bold",
              mb: "16px",
              letterSpacing: "2px",
              children: "OUR DIGITAL PRODUCTS"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 425,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
              fontSize: "34px",
              lineHeight: "44px",
              letterSpacing: "-1px",
              color: "brand.700",
              fontWeight: "500",
              children: "Latest products"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 433,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 424,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            bg: "#fff",
            w: "190px",
            h: "56px",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
              color: "brand.300",
              fontWeight: "500",
              fontSize: "sm",
              children: "Explore all Products"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 443,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 442,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 423,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(components_products_ProductList__WEBPACK_IMPORTED_MODULE_5__["default"], {
          products: variables_products__WEBPACK_IMPORTED_MODULE_7__["featuredProducts"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 448,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 422,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      direction: "column",
      bg: "#fff",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
        direction: "column",
        w: "1170px",
        mx: "auto",
        pt: "100px",
        pb: "225px",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
          direction: "column",
          align: "center",
          justify: "center",
          textAlign: "center",
          mb: "72px",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            fontSize: "xs",
            color: "brand.300",
            fontWeight: "bold",
            mb: "16px",
            children: "TUTORIALS, ARTICLES & RESOURCES"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 459,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            fontSize: "34px",
            color: "brand.700",
            fontWeight: "bold",
            mb: "20px",
            children: "Discover resources & guides"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 462,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            fontSize: "md",
            color: "#878CBD",
            fontWeight: "normal",
            maxW: "500px",
            children: "Discover resources, guides and articles that can help you build unique solutions. Visit our learning centre for heaps of content."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 465,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 453,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
          templateColumns: "repeat(3, 1fr)",
          gap: "22px",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
            to: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(components_card_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
              boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
              pb: "35px",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(components_card_CardBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
                  direction: "column",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
                    align: "center",
                    mb: "30px",
                    justify: "center",
                    bg: "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)",
                    borderRadius: "24px",
                    w: "100%",
                    h: "230px",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(components_icons_Icons__WEBPACK_IMPORTED_MODULE_8__["ArticleIcon1"], {
                      w: "87",
                      h: "105",
                      color: "#fff"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 489,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 481,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
                    color: "brand.300",
                    bg: "#ECE9FF",
                    borderRadius: "30px",
                    p: "7px 14px",
                    maxW: "80px",
                    mb: "10px",
                    children: "Articles"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 491,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
                    color: "brand.700",
                    fontSize: "lg",
                    fontWeight: "500",
                    mb: "14px",
                    children: "How to build a design system if you're the only designer in a startup"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 500,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
                    fontSize: "sm",
                    color: "#878CBD",
                    fontWeight: "normal",
                    children: "It's always hard to be the only person in a company who is responsible for product design. Your day..."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 508,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 480,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 479,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 476,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 475,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
            to: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(components_card_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
              boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
              pb: "35px",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(components_card_CardBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
                  direction: "column",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
                    align: "center",
                    direction: "column",
                    mb: "30px",
                    justify: "center",
                    bg: "linear-gradient(109.6deg, #FF9966 17.44%, #FF5E62 78.63%)",
                    borderRadius: "24px",
                    w: "100%",
                    h: "230px",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(components_icons_Icons__WEBPACK_IMPORTED_MODULE_8__["ArticleIcon2"], {
                      w: "72px",
                      h: "72px",
                      color: "#fff",
                      mb: "20px"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 531,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
                      color: "#fff",
                      fontSize: "xl",
                      fontWeight: "bold",
                      children: "SEO Strategy"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 532,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 522,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
                    color: "brand.300",
                    bg: "#ECE9FF",
                    borderRadius: "30px",
                    p: "7px 14px",
                    maxW: "80px",
                    mb: "10px",
                    children: "Articles"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 536,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
                    color: "brand.700",
                    fontSize: "lg",
                    fontWeight: "500",
                    mb: "14px",
                    children: "How to build a design system if you're the only designer in a startup"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 545,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
                    fontSize: "sm",
                    color: "#878CBD",
                    fontWeight: "normal",
                    children: "It's always hard to be the only person in a company who is responsible for product design. Your day..."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 553,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 521,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 520,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 517,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 516,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
            to: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(components_card_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
              boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
              pb: "35px",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(components_card_CardBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
                  direction: "column",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
                    align: "center",
                    mb: "30px",
                    justify: "center",
                    bg: "linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)",
                    borderRadius: "24px",
                    w: "100%",
                    h: "230px",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(components_icons_Icons__WEBPACK_IMPORTED_MODULE_8__["ArticleIcon3"], {
                      w: "87",
                      h: "105",
                      color: "#fff"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 575,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 567,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
                    color: "brand.300",
                    bg: "#ECE9FF",
                    borderRadius: "30px",
                    p: "7px 14px",
                    maxW: "80px",
                    mb: "10px",
                    children: "Articles"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 577,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
                    color: "brand.700",
                    fontSize: "lg",
                    fontWeight: "500",
                    mb: "14px",
                    children: "How to build a design system if you're the only designer in a startup"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 586,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
                    fontSize: "sm",
                    color: "#878CBD",
                    fontWeight: "normal",
                    children: "It's always hard to be the only person in a company who is responsible for product design. Your day..."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 594,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 566,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 565,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 562,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 561,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 474,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          bg: "#ECE9FF",
          w: "152px",
          h: "56px",
          alignSelf: "center",
          mt: "52px",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_24__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            color: "brand.300",
            fontSize: "sm",
            children: "Learn more"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 604,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 603,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 452,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, undefined);
};

_s(Home, "FP3+Ho/4ZaTw20t2hsOooaPGuxw=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

__webpack_require__.$Refresh$.register(_c, "Home");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/support/Contact.jsx":
/*!***************************************!*\
  !*** ./src/pages/support/Contact.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var assets_img_homepage_home_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/img/homepage/home-background.png */ "./src/assets/img/homepage/home-background.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/vladmihalache/Documents/GitHub/simmmple-marketplace/src/pages/support/Contact.jsx";





const Contact = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    minH: "600px",
    bg: "#333",
    bgImage: assets_img_homepage_home_background_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    bgSize: "cover",
    bgPosition: "center",
    children: "Contact"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

_c = Contact;
/* harmony default export */ __webpack_exports__["default"] = (Contact);

var _c;

__webpack_require__.$Refresh$.register(_c, "Contact");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/support/Others.jsx":
/*!**************************************!*\
  !*** ./src/pages/support/Others.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var assets_img_homepage_home_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/img/homepage/home-background.png */ "./src/assets/img/homepage/home-background.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/vladmihalache/Documents/GitHub/simmmple-marketplace/src/pages/support/Others.jsx";





const Others = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    minH: "600px",
    bg: "#333",
    bgImage: assets_img_homepage_home_background_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    bgSize: "cover",
    bgPosition: "center",
    children: "test"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

_c = Others;
/* harmony default export */ __webpack_exports__["default"] = (Others);

var _c;

__webpack_require__.$Refresh$.register(_c, "Others");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/support/Partnerships.jsx":
/*!********************************************!*\
  !*** ./src/pages/support/Partnerships.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var assets_img_homepage_home_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/img/homepage/home-background.png */ "./src/assets/img/homepage/home-background.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/vladmihalache/Documents/GitHub/simmmple-marketplace/src/pages/support/Partnerships.jsx";





const Partnerships = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    minH: "600px",
    bg: "#333",
    bgImage: assets_img_homepage_home_background_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    bgSize: "cover",
    bgPosition: "center",
    children: "test"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

_c = Partnerships;
/* harmony default export */ __webpack_exports__["default"] = (Partnerships);

var _c;

__webpack_require__.$Refresh$.register(_c, "Partnerships");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/support/SubmissionReceived.jsx":
/*!**************************************************!*\
  !*** ./src/pages/support/SubmissionReceived.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var assets_img_homepage_home_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/img/homepage/home-background.png */ "./src/assets/img/homepage/home-background.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/vladmihalache/Documents/GitHub/simmmple-marketplace/src/pages/support/SubmissionReceived.jsx";





const SubmissionReceived = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    minH: "600px",
    bg: "#333",
    bgImage: assets_img_homepage_home_background_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    bgSize: "cover",
    bgPosition: "center",
    children: "test"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

_c = SubmissionReceived;
/* harmony default export */ __webpack_exports__["default"] = (SubmissionReceived);

var _c;

__webpack_require__.$Refresh$.register(_c, "SubmissionReceived");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/support/SupportPage.jsx":
/*!*******************************************!*\
  !*** ./src/pages/support/SupportPage.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var assets_img_homepage_home_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/img/homepage/home-background.png */ "./src/assets/img/homepage/home-background.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/vladmihalache/Documents/GitHub/simmmple-marketplace/src/pages/support/SupportPage.jsx";





const SupportPage = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    minH: "600px",
    bg: "#333",
    bgImage: assets_img_homepage_home_background_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    bgSize: "cover",
    bgPosition: "center",
    children: "test"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

_c = SupportPage;
/* harmony default export */ __webpack_exports__["default"] = (SupportPage);

var _c;

__webpack_require__.$Refresh$.register(_c, "SupportPage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var pages_Apps_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pages/Apps.jsx */ "./src/pages/Apps.jsx");
/* harmony import */ var pages_Blog_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pages/Blog.jsx */ "./src/pages/Blog.jsx");
/* harmony import */ var pages_Bundles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pages/Bundles */ "./src/pages/Bundles.jsx");
/* harmony import */ var pages_Home_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pages/Home.jsx */ "./src/pages/Home.jsx");
/* harmony import */ var pages_support_Contact_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pages/support/Contact.jsx */ "./src/pages/support/Contact.jsx");
/* harmony import */ var pages_support_Others_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pages/support/Others.jsx */ "./src/pages/support/Others.jsx");
/* harmony import */ var pages_support_Partnerships_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pages/support/Partnerships.jsx */ "./src/pages/support/Partnerships.jsx");
/* harmony import */ var pages_support_SubmissionReceived_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pages/support/SubmissionReceived.jsx */ "./src/pages/support/SubmissionReceived.jsx");
/* harmony import */ var pages_support_SupportPage_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pages/support/SupportPage.jsx */ "./src/pages/support/SupportPage.jsx");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);










const routes = [{
  name: "Homepage",
  path: "/homepage",
  secondary: false,
  component: pages_Home_jsx__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  name: "Apps and Plugins",
  path: "/apps",
  secondary: false,
  component: pages_Apps_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  name: "Bundles Page",
  path: "/bundles",
  secondary: true,
  component: pages_Bundles__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  name: "Blog / Tutorials",
  path: "/blog",
  secondary: true,
  component: pages_Blog_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  name: "Contact & Support - General Contact",
  path: "/support/contact",
  secondary: true,
  component: pages_support_Contact_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  name: "Contact & Support - Others",
  path: "/support/others",
  secondary: true,
  component: pages_support_Others_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]
}, {
  name: "Contact & Support - Support",
  path: "/support/support-page",
  secondary: true,
  component: pages_support_SupportPage_jsx__WEBPACK_IMPORTED_MODULE_8__["default"]
}, {
  name: "Contact & Support - Partnerships",
  path: "/support/partnerships",
  secondary: true,
  component: pages_support_Partnerships_jsx__WEBPACK_IMPORTED_MODULE_6__["default"]
}, {
  name: "Contact & Support - Submission Received",
  path: "/support/received",
  secondary: true,
  component: pages_support_SubmissionReceived_jsx__WEBPACK_IMPORTED_MODULE_7__["default"]
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/theme/additions/card/card.js":
/*!******************************************!*\
  !*** ./src/theme/additions/card/card.js ***!
  \******************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const Card = {
  baseStyle: {
    p: "16px 16px 32px 16px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    position: "relative",
    borderRadius: "30px",
    minWidth: "0px",
    wordWrap: "break-word",
    backgroundClip: "border-box"
  },
  variants: {
    panel: props => ({
      bg: props.colorMode === "dark" ? "gray.700" : "white",
      width: "100%",
      boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
      borderRadius: "30px"
    })
  },
  defaultProps: {
    variant: "panel"
  }
};
const CardComponent = {
  components: {
    Card
  }
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/theme/additions/card/cardBody.js":
/*!**********************************************!*\
  !*** ./src/theme/additions/card/cardBody.js ***!
  \**********************************************/
/*! exports provided: CardBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBodyComponent", function() { return CardBodyComponent; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const CardBody = {
  baseStyle: {
    display: "flex",
    width: "100%"
  }
};
const CardBodyComponent = {
  components: {
    CardBody
  }
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/theme/additions/card/cardHeader.js":
/*!************************************************!*\
  !*** ./src/theme/additions/card/cardHeader.js ***!
  \************************************************/
/*! exports provided: CardHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardHeaderComponent", function() { return CardHeaderComponent; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const CardHeader = {
  baseStyle: {
    display: "flex",
    width: "100%"
  }
};
const CardHeaderComponent = {
  components: {
    CardHeader
  }
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/theme/components/button.js":
/*!****************************************!*\
  !*** ./src/theme/components/button.js ***!
  \****************************************/
/*! exports provided: buttonStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonStyles", function() { return buttonStyles; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const buttonStyles = {
  components: {
    Button: {
      baseStyle: {
        borderRadius: "30px",
        boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
        transition: ".25s all ease",
        _focus: {
          boxShadow: "none"
        },
        _active: {
          boxShadow: "none"
        }
      }
    }
  }
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/theme/components/link.js":
/*!**************************************!*\
  !*** ./src/theme/components/link.js ***!
  \**************************************/
/*! exports provided: linkStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkStyles", function() { return linkStyles; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const linkStyles = {
  components: {
    Link: {
      baseStyle: {
        boxShadow: "none",
        _focus: {
          boxShadow: "none"
        },
        _active: {
          boxShadow: "none"
        }
      }
    }
  }
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/theme/foundations/breakpoints.js":
/*!**********************************************!*\
  !*** ./src/theme/foundations/breakpoints.js ***!
  \**********************************************/
/*! exports provided: breakpoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return breakpoints; });
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ "./node_modules/@chakra-ui/theme-tools/dist/esm/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const breakpoints = Object(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__["createBreakpoints"])({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1600px"
});

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/theme/styles.js":
/*!*****************************!*\
  !*** ./src/theme/styles.js ***!
  \*****************************/
/*! exports provided: globalStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalStyles", function() { return globalStyles; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const globalStyles = {
  colors: {
    brand: {
      300: "#422AFB",
      700: "#02044A"
    }
  },
  styles: {
    global: () => ({
      body: {
        fontFamily: "Plus Jakarta Display"
      },
      html: {}
    })
  }
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/theme/theme.js":
/*!****************************!*\
  !*** ./src/theme/theme.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _additions_card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./additions/card/card */ "./src/theme/additions/card/card.js");
/* harmony import */ var _additions_card_cardBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./additions/card/cardBody */ "./src/theme/additions/card/cardBody.js");
/* harmony import */ var _additions_card_cardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./additions/card/cardHeader */ "./src/theme/additions/card/cardHeader.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/button */ "./src/theme/components/button.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/link */ "./src/theme/components/link.js");
/* harmony import */ var _foundations_breakpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundations/breakpoints */ "./src/theme/foundations/breakpoints.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./src/theme/styles.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);








 // import { mode } from "@chakra-ui/theme-tools";

/* harmony default export */ __webpack_exports__["default"] = (Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["extendTheme"])({
  breakpoints: _foundations_breakpoints__WEBPACK_IMPORTED_MODULE_6__["breakpoints"]
}, // Breakpoints
_styles__WEBPACK_IMPORTED_MODULE_7__["globalStyles"], _components_button__WEBPACK_IMPORTED_MODULE_4__["buttonStyles"], // Button styles
_components_link__WEBPACK_IMPORTED_MODULE_5__["linkStyles"], // Link styles
_additions_card_card__WEBPACK_IMPORTED_MODULE_1__["CardComponent"], // Card component
_additions_card_cardBody__WEBPACK_IMPORTED_MODULE_2__["CardBodyComponent"], // Card Body component
_additions_card_cardHeader__WEBPACK_IMPORTED_MODULE_3__["CardHeaderComponent"] // Card Header component
));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/variables/products.js":
/*!***********************************!*\
  !*** ./src/variables/products.js ***!
  \***********************************/
/*! exports provided: featuredProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featuredProducts", function() { return featuredProducts; });
/* harmony import */ var assets_img_homepage_venus_db_pro_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/img/homepage/venus-db-pro.png */ "./src/assets/img/homepage/venus-db-pro.png");
/* harmony import */ var assets_img_homepage_venus_design_system_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/img/homepage/venus-design-system.png */ "./src/assets/img/homepage/venus-design-system.png");
/* harmony import */ var assets_img_homepage_uranus_wireframe_kit_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/img/homepage/uranus-wireframe-kit.png */ "./src/assets/img/homepage/uranus-wireframe-kit.png");
/* harmony import */ var assets_img_homepage_purity_dashboard_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/img/homepage/purity-dashboard.png */ "./src/assets/img/homepage/purity-dashboard.png");
/* harmony import */ var assets_img_homepage_venus_db_free_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/img/homepage/venus-db-free.png */ "./src/assets/img/homepage/venus-db-free.png");
/* harmony import */ var assets_img_homepage_purity_sensual_kit_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/img/homepage/purity-sensual-kit.png */ "./src/assets/img/homepage/purity-sensual-kit.png");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);







const featuredProducts = [{
  image: assets_img_homepage_venus_design_system_png__WEBPACK_IMPORTED_MODULE_1__["default"],
  tag: "Design Tool",
  price: "from $99",
  title: "Venus Design System",
  category: "Figma Products",
  path: "/"
}, {
  image: assets_img_homepage_venus_db_pro_png__WEBPACK_IMPORTED_MODULE_0__["default"],
  tag: "Design Tool",
  price: "from $59",
  title: "Venus DB PRO",
  category: "Figma Products",
  path: "/"
}, {
  image: assets_img_homepage_uranus_wireframe_kit_png__WEBPACK_IMPORTED_MODULE_2__["default"],
  tag: "Web Tool",
  price: "from $48",
  title: "Uranus Wireframe Kit",
  category: "UI Kits, Figma Products",
  path: "/"
}, {
  image: assets_img_homepage_purity_dashboard_png__WEBPACK_IMPORTED_MODULE_3__["default"],
  tag: "Dashboard",
  price: "from $79",
  title: "Purity UI Dashboard",
  category: "Coded, Figma, Dashboards",
  path: "/"
}, {
  image: assets_img_homepage_venus_db_free_png__WEBPACK_IMPORTED_MODULE_4__["default"],
  tag: "Design Tool",
  price: "FREE",
  title: "Venus DB Free",
  category: "Freebies, Figma Products",
  path: "/"
}, {
  image: assets_img_homepage_purity_sensual_kit_png__WEBPACK_IMPORTED_MODULE_5__["default"],
  tag: "Design Tool",
  price: "from $79",
  title: "Purity UI - Sensual Kit",
  category: "UI Kits, Figma Products",
  path: "/"
}];

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/vladmihalache/Documents/GitHub/simmmple-marketplace/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/vladmihalache/Documents/GitHub/simmmple-marketplace/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/vladmihalache/Documents/GitHub/simmmple-marketplace/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/vladmihalache/Documents/GitHub/simmmple-marketplace/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map