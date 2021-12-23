webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");


var _jsxFileName = "C:\\Users\\Celeste.Rowe\\src\\react-practice\\NextJSPractice\\pages\\index.js",
    _s = $RefreshSig$();




var DUMMY_MEETUPS = [{
  id: 'm1',
  title: 'Coming Soon',
  image: 'https://unsplash.com/photos/nUkxLPE5Fto',
  address: 'NOLA',
  description: 'First vacay'
}, {
  id: 'm2',
  title: 'Beach Life',
  image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.climatechangenews.com%2Ffiles%2F2020%2F07%2F02123958%2Fjamaica.jpg&imgrefurl=https%3A%2F%2Fwww.climatechangenews.com%2F2020%2F07%2F02%2Fjamaica-becomes-first-caribbean-nation-submit-tougher-climate-plan-un%2F&tbnid=mlpLMEGMVI3FaM&vet=12ahUKEwjTmdiRxfj0AhVGUs0KHdLWCXYQMygOegUIARDnAQ..i&docid=OEVeP-8JWHTQBM&w=796&h=448&q=jamaica&ved=2ahUKEwjTmdiRxfj0AhVGUs0KHdLWCXYQMygOegUIARDnAQ',
  address: 'Jamaica',
  description: 'Second vacay'
}];

function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      loadedMeetups = _useState[0],
      setLoadedMeetups = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // send http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    meetups: loadedMeetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 3
  }, this);
}

_s(Home, "lt95aOlOC9RW+nrRzHOiZRPQygU=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWUiLCJ1c2VTdGF0ZSIsImxvYWRlZE1lZXR1cHMiLCJzZXRMb2FkZWRNZWV0dXBzIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHLENBQ3BCO0FBQ0VDLElBQUUsRUFBRSxJQUROO0FBRUVDLE9BQUssRUFBRSxhQUZUO0FBR0VDLE9BQUssRUFBRSx5Q0FIVDtBQUlFQyxTQUFPLEVBQUUsTUFKWDtBQUtFQyxhQUFXLEVBQUU7QUFMZixDQURvQixFQVFwQjtBQUNFSixJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsWUFGVDtBQUdFQyxPQUFLLEVBQUUscWJBSFQ7QUFJRUMsU0FBTyxFQUFFLFNBSlg7QUFLRUMsYUFBVyxFQUFFO0FBTGYsQ0FSb0IsQ0FBdEI7O0FBaUJBLFNBQVNDLElBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFDMkJDLHNEQUFRLENBQUMsRUFBRCxDQURuQztBQUFBLE1BQ1JDLGFBRFE7QUFBQSxNQUNPQyxnQkFEUDs7QUFHZkMseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQUQsb0JBQWdCLENBQUNULGFBQUQsQ0FBaEI7QUFDRCxHQUhRLEVBR04sRUFITSxDQUFUO0FBS0Esc0JBQ0EscUVBQUMsc0VBQUQ7QUFBWSxXQUFPLEVBQUVRO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQUVFOztHQVZLRixJOztLQUFBQSxJO0FBWU1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY3MjAzNjZiODcxMWRhY2Y5ZTg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCc7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0JztcclxuXHJcbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICdtMScsXHJcbiAgICB0aXRsZTogJ0NvbWluZyBTb29uJyxcclxuICAgIGltYWdlOiAnaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL25Va3hMUEU1RnRvJyxcclxuICAgIGFkZHJlc3M6ICdOT0xBJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnRmlyc3QgdmFjYXknXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ20yJyxcclxuICAgIHRpdGxlOiAnQmVhY2ggTGlmZScsXHJcbiAgICBpbWFnZTogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vaW1ncmVzP2ltZ3VybD1odHRwcyUzQSUyRiUyRmNkbi5jbGltYXRlY2hhbmdlbmV3cy5jb20lMkZmaWxlcyUyRjIwMjAlMkYwNyUyRjAyMTIzOTU4JTJGamFtYWljYS5qcGcmaW1ncmVmdXJsPWh0dHBzJTNBJTJGJTJGd3d3LmNsaW1hdGVjaGFuZ2VuZXdzLmNvbSUyRjIwMjAlMkYwNyUyRjAyJTJGamFtYWljYS1iZWNvbWVzLWZpcnN0LWNhcmliYmVhbi1uYXRpb24tc3VibWl0LXRvdWdoZXItY2xpbWF0ZS1wbGFuLXVuJTJGJnRibmlkPW1scExNRUdNVkkzRmFNJnZldD0xMmFoVUtFd2pUbWRpUnhmajBBaFZHVXMwS0hkTFdDWFlRTXlnT2VnVUlBUkRuQVEuLmkmZG9jaWQ9T0VWZVAtOEpXSFRRQk0mdz03OTYmaD00NDgmcT1qYW1haWNhJnZlZD0yYWhVS0V3alRtZGlSeGZqMEFoVkdVczBLSGRMV0NYWVFNeWdPZWdVSUFSRG5BUScsXHJcbiAgICBhZGRyZXNzOiAnSmFtYWljYScsXHJcbiAgICBkZXNjcmlwdGlvbjogJ1NlY29uZCB2YWNheSdcclxuICB9XHJcbl07XHJcblxyXG5mdW5jdGlvbiBIb21lICgpIHtcclxuICBjb25zdCBbbG9hZGVkTWVldHVwcywgc2V0TG9hZGVkTWVldHVwc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBzZW5kIGh0dHAgcmVxdWVzdCBhbmQgZmV0Y2ggZGF0YVxyXG4gICAgc2V0TG9hZGVkTWVldHVwcyhEVU1NWV9NRUVUVVBTKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgPE1lZXR1cExpc3QgbWVldHVwcz17bG9hZGVkTWVldHVwc30gLz5cclxuICApfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9