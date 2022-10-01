"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/user/user-no-ssr";
exports.ids = ["pages/user/user-no-ssr"];
exports.modules = {

/***/ "./pages/user/user-no-ssr.js":
/*!***********************************!*\
  !*** ./pages/user/user-no-ssr.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst User = ()=>{\n    const { 0: users , 1: setUsers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"https://jsonplaceholder.typicode.com/users\").then((res)=>res.json()).then((data)=>setUsers(data));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"ID\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Development\\\\Studi Independent\\\\sesi-12\\\\my-next-js-manual\\\\pages\\\\user\\\\user-no-ssr.js\",\n                                lineNumber: 17,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Development\\\\Studi Independent\\\\sesi-12\\\\my-next-js-manual\\\\pages\\\\user\\\\user-no-ssr.js\",\n                                lineNumber: 18,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Development\\\\Studi Independent\\\\sesi-12\\\\my-next-js-manual\\\\pages\\\\user\\\\user-no-ssr.js\",\n                                lineNumber: 19,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Development\\\\Studi Independent\\\\sesi-12\\\\my-next-js-manual\\\\pages\\\\user\\\\user-no-ssr.js\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Development\\\\Studi Independent\\\\sesi-12\\\\my-next-js-manual\\\\pages\\\\user\\\\user-no-ssr.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: user.id\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Development\\\\Studi Independent\\\\sesi-12\\\\my-next-js-manual\\\\pages\\\\user\\\\user-no-ssr.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: user.name\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Development\\\\Studi Independent\\\\sesi-12\\\\my-next-js-manual\\\\pages\\\\user\\\\user-no-ssr.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: user.email\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Development\\\\Studi Independent\\\\sesi-12\\\\my-next-js-manual\\\\pages\\\\user\\\\user-no-ssr.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, user.id, true, {\n                            fileName: \"D:\\\\Development\\\\Studi Independent\\\\sesi-12\\\\my-next-js-manual\\\\pages\\\\user\\\\user-no-ssr.js\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\Development\\\\Studi Independent\\\\sesi-12\\\\my-next-js-manual\\\\pages\\\\user\\\\user-no-ssr.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Development\\\\Studi Independent\\\\sesi-12\\\\my-next-js-manual\\\\pages\\\\user\\\\user-no-ssr.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Development\\\\Studi Independent\\\\sesi-12\\\\my-next-js-manual\\\\pages\\\\user\\\\user-no-ssr.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL3VzZXItbm8tc3NyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBbUQ7QUFFbkQsTUFBTUcsSUFBSSxHQUFHLElBQU07SUFDakIsTUFBTSxLQUFDQyxLQUFLLE1BQUVDLFFBQVEsTUFBSUgsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFFdENELGdEQUFTLENBQUMsSUFBTTtRQUNkSyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FDaERDLElBQUksQ0FBQyxDQUFDQyxHQUFHLEdBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFLENBQUMsQ0FDekJGLElBQUksQ0FBQyxDQUFDRyxJQUFJLEdBQUtMLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ0MsS0FBRztrQkFDRiw0RUFBQ0MsT0FBSzs7OEJBQ0osOERBQUNDLE9BQUs7OEJBQ0osNEVBQUNDLElBQUU7OzBDQUNELDhEQUFDQyxJQUFFOzBDQUFDLElBQUU7Ozs7O3lDQUFLOzBDQUNYLDhEQUFDQSxJQUFFOzBDQUFDLE1BQUk7Ozs7O3lDQUFLOzBDQUNiLDhEQUFDQSxJQUFFOzBDQUFDLE9BQUs7Ozs7O3lDQUFLOzs7Ozs7aUNBQ1g7Ozs7OzZCQUNDOzhCQUNSLDhEQUFDQyxPQUFLOzhCQUNIWixLQUFLLENBQUNhLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLGlCQUNkLDhEQUFDSixJQUFFOzs4Q0FDRCw4REFBQ0ssSUFBRTs4Q0FBRUQsSUFBSSxDQUFDRSxFQUFFOzs7Ozs2Q0FBTTs4Q0FDbEIsOERBQUNELElBQUU7OENBQUVELElBQUksQ0FBQ0csSUFBSTs7Ozs7NkNBQU07OENBQ3BCLDhEQUFDRixJQUFFOzhDQUFFRCxJQUFJLENBQUNJLEtBQUs7Ozs7OzZDQUFNOzsyQkFIZEosSUFBSSxDQUFDRSxFQUFFOzs7O3FDQUlYLENBQ0w7Ozs7OzZCQUNJOzs7Ozs7cUJBQ0Y7Ozs7O2lCQUNKLENBQ047QUFDSixDQUFDO0FBRUQsaUVBQWVqQixJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWpzLW1hbnVhbC8uL3BhZ2VzL3VzZXIvdXNlci1uby1zc3IuanM/N2QzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVXNlciA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzXCIpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRVc2VycyhkYXRhKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHRhYmxlPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPklEPC90aD5cclxuICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxyXG4gICAgICAgICAgICA8dGg+RW1haWw8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHt1c2Vycy5tYXAoKHVzZXIpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17dXNlci5pZH0+XHJcbiAgICAgICAgICAgICAgPHRkPnt1c2VyLmlkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPnt1c2VyLm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3VzZXIuZW1haWx9PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJVc2VyIiwidXNlcnMiLCJzZXRVc2VycyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZGl2IiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsIm1hcCIsInVzZXIiLCJ0ZCIsImlkIiwibmFtZSIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user/user-no-ssr.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/user/user-no-ssr.js"));
module.exports = __webpack_exports__;

})();