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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/AppContext.js":
/*!*******************************!*\
  !*** ./context/AppContext.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppProvider: () => (/* binding */ AppProvider),\n/* harmony export */   formatNumber: () => (/* binding */ formatNumber),\n/* harmony export */   useAppContext: () => (/* binding */ useAppContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction useAppContext() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);\n}\nfunction formatNumber(num) {\n    return new Intl.NumberFormat(\"it-IT\").format(num.toFixed(0));\n}\nfunction AppProvider({ children }) {\n    const [currentStep, setCurrentStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [totalCost, setTotalCost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [leadData, setLeadData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        fullName: \"\",\n        email: \"\",\n        phone: \"\",\n        companyName: \"\",\n        projectSummary: \"\",\n        accept: false\n    });\n    const [answers, setAnswers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleAnswer = (cost, percent, newAnswer)=>{\n        let newIncrement;\n        let newTotal;\n        const nextStep = currentStep + 1;\n        if (currentStep === 1 || currentStep === 2) {\n            newIncrement = cost;\n            newTotal = totalCost + cost;\n        } else {\n            if (percent !== 0) {\n                newIncrement = totalCost * percent;\n                newTotal = totalCost + newIncrement;\n            } else {\n                newIncrement = 0;\n                newTotal = totalCost;\n            }\n        }\n        setTotalCost(newTotal);\n        // Aggiorna la risposta esistente o aggiungine una nuova\n        const updatedAnswers = [\n            ...answers\n        ];\n        updatedAnswers[currentStep - 1] = {\n            answer: newAnswer,\n            increment: newIncrement\n        };\n        setAnswers(updatedAnswers);\n        setCurrentStep(nextStep);\n    };\n    const goBack = ()=>{\n        if (currentStep > 1) {\n            const previousStep = currentStep - 1;\n            setCurrentStep(previousStep);\n            // Rimuovi l'ultima risposta se si torna indietro\n            const updatedAnswers = answers.slice(0, previousStep - 1);\n            setAnswers(updatedAnswers);\n        }\n    };\n    const handleRicomincia = ()=>{\n        setAnswers([]);\n        setCurrentStep(0);\n        setTotalCost(0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: {\n            currentStep,\n            totalCost,\n            answers,\n            leadData,\n            setLeadData,\n            handleRicomincia,\n            handleAnswer,\n            goBack,\n            setCurrentStep\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\matti\\\\OneDrive\\\\Desktop\\\\SoftwareHouse\\\\costo-app-calcolatore\\\\context\\\\AppContext.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0FwcENvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUU7QUFFbkUsTUFBTUksMkJBQWFILG9EQUFhQTtBQUV6QixTQUFTSTtJQUNkLE9BQU9ILGlEQUFVQSxDQUFDRTtBQUNwQjtBQUNPLFNBQVNFLGFBQWFDLEdBQUc7SUFDNUIsT0FBTyxJQUFJQyxLQUFLQyxZQUFZLENBQUMsU0FBU0MsTUFBTSxDQUFDSCxJQUFJSSxPQUFPLENBQUM7QUFDN0Q7QUFDTyxTQUFTQyxZQUFZLEVBQUVDLFFBQVEsRUFBRTtJQUN0QyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1osK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDYSxXQUFXQyxhQUFhLEdBQUdkLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2UsVUFBVUMsWUFBWSxHQUFHaEIsK0NBQVFBLENBQUM7UUFDdkNpQixVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLGdCQUFnQjtRQUNoQkMsUUFBUTtJQUNWO0lBQ0EsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUd4QiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXpDLE1BQU15QixlQUFlLENBQUNDLE1BQU1DLFNBQVNDO1FBQ25DLElBQUlDO1FBQ0osSUFBSUM7UUFDSixNQUFNQyxXQUFXcEIsY0FBYztRQUUvQixJQUFJQSxnQkFBZ0IsS0FBS0EsZ0JBQWdCLEdBQUc7WUFDMUNrQixlQUFlSDtZQUNmSSxXQUFXakIsWUFBWWE7UUFDekIsT0FBTztZQUNMLElBQUlDLFlBQVksR0FBRztnQkFDakJFLGVBQWVoQixZQUFZYztnQkFDM0JHLFdBQVdqQixZQUFZZ0I7WUFDekIsT0FBTztnQkFDTEEsZUFBZTtnQkFDZkMsV0FBV2pCO1lBQ2I7UUFDRjtRQUVBQyxhQUFhZ0I7UUFFYix3REFBd0Q7UUFDeEQsTUFBTUUsaUJBQWlCO2VBQUlUO1NBQVE7UUFDbkNTLGNBQWMsQ0FBQ3JCLGNBQWMsRUFBRSxHQUFHO1lBQUVzQixRQUFRTDtZQUFXTSxXQUFXTDtRQUFhO1FBQy9FTCxXQUFXUTtRQUVYcEIsZUFBZW1CO0lBQ2pCO0lBRUEsTUFBTUksU0FBUztRQUNiLElBQUl4QixjQUFjLEdBQUc7WUFDbkIsTUFBTXlCLGVBQWV6QixjQUFjO1lBQ25DQyxlQUFld0I7WUFFZixpREFBaUQ7WUFDakQsTUFBTUosaUJBQWlCVCxRQUFRYyxLQUFLLENBQUMsR0FBR0QsZUFBZTtZQUN2RFosV0FBV1E7UUFDYjtJQUNGO0lBRUEsTUFBTU0sbUJBQW1CO1FBQ3ZCZCxXQUFXLEVBQUU7UUFDYlosZUFBZTtRQUNmRSxhQUFhO0lBQ2Y7SUFFQSxxQkFDRSw4REFBQ2IsV0FBV3NDLFFBQVE7UUFBQ0MsT0FBTztZQUFFN0I7WUFBYUU7WUFBV1U7WUFBU1I7WUFBVUM7WUFBYXNCO1lBQWtCYjtZQUFjVTtZQUFRdkI7UUFBZTtrQkFDMUlGOzs7Ozs7QUFHUCIsInNvdXJjZXMiOlsid2VicGFjazovL2Nvc3RvLWFwcC1jYWxjb2xhdG9yZS8uL2NvbnRleHQvQXBwQ29udGV4dC5qcz8zNDJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBwQ29udGV4dCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TnVtYmVyKG51bSkge1xyXG4gICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCgnaXQtSVQnKS5mb3JtYXQobnVtLnRvRml4ZWQoMCkpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBBcHBQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbY3VycmVudFN0ZXAsIHNldEN1cnJlbnRTdGVwXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt0b3RhbENvc3QsIHNldFRvdGFsQ29zdF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbbGVhZERhdGEsIHNldExlYWREYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIGZ1bGxOYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwaG9uZTogXCJcIixcclxuICAgIGNvbXBhbnlOYW1lOiBcIlwiLFxyXG4gICAgcHJvamVjdFN1bW1hcnk6IFwiXCIsXHJcbiAgICBhY2NlcHQ6IGZhbHNlLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFthbnN3ZXJzLCBzZXRBbnN3ZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQW5zd2VyID0gKGNvc3QsIHBlcmNlbnQsIG5ld0Fuc3dlcikgPT4ge1xyXG4gICAgbGV0IG5ld0luY3JlbWVudDtcclxuICAgIGxldCBuZXdUb3RhbDtcclxuICAgIGNvbnN0IG5leHRTdGVwID0gY3VycmVudFN0ZXAgKyAxO1xyXG5cclxuICAgIGlmIChjdXJyZW50U3RlcCA9PT0gMSB8fCBjdXJyZW50U3RlcCA9PT0gMikge1xyXG4gICAgICBuZXdJbmNyZW1lbnQgPSBjb3N0O1xyXG4gICAgICBuZXdUb3RhbCA9IHRvdGFsQ29zdCArIGNvc3Q7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAocGVyY2VudCAhPT0gMCkge1xyXG4gICAgICAgIG5ld0luY3JlbWVudCA9IHRvdGFsQ29zdCAqIHBlcmNlbnQ7XHJcbiAgICAgICAgbmV3VG90YWwgPSB0b3RhbENvc3QgKyBuZXdJbmNyZW1lbnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3SW5jcmVtZW50ID0gMDtcclxuICAgICAgICBuZXdUb3RhbCA9IHRvdGFsQ29zdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFRvdGFsQ29zdChuZXdUb3RhbCk7XHJcblxyXG4gICAgLy8gQWdnaW9ybmEgbGEgcmlzcG9zdGEgZXNpc3RlbnRlIG8gYWdnaXVuZ2luZSB1bmEgbnVvdmFcclxuICAgIGNvbnN0IHVwZGF0ZWRBbnN3ZXJzID0gWy4uLmFuc3dlcnNdO1xyXG4gICAgdXBkYXRlZEFuc3dlcnNbY3VycmVudFN0ZXAgLSAxXSA9IHsgYW5zd2VyOiBuZXdBbnN3ZXIsIGluY3JlbWVudDogbmV3SW5jcmVtZW50IH07XHJcbiAgICBzZXRBbnN3ZXJzKHVwZGF0ZWRBbnN3ZXJzKTtcclxuXHJcbiAgICBzZXRDdXJyZW50U3RlcChuZXh0U3RlcCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ29CYWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRTdGVwID4gMSkge1xyXG4gICAgICBjb25zdCBwcmV2aW91c1N0ZXAgPSBjdXJyZW50U3RlcCAtIDE7XHJcbiAgICAgIHNldEN1cnJlbnRTdGVwKHByZXZpb3VzU3RlcCk7XHJcblxyXG4gICAgICAvLyBSaW11b3ZpIGwndWx0aW1hIHJpc3Bvc3RhIHNlIHNpIHRvcm5hIGluZGlldHJvXHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRBbnN3ZXJzID0gYW5zd2Vycy5zbGljZSgwLCBwcmV2aW91c1N0ZXAgLSAxKTtcclxuICAgICAgc2V0QW5zd2Vycyh1cGRhdGVkQW5zd2Vycyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmljb21pbmNpYSA9ICgpID0+IHtcclxuICAgIHNldEFuc3dlcnMoW10pO1xyXG4gICAgc2V0Q3VycmVudFN0ZXAoMCk7XHJcbiAgICBzZXRUb3RhbENvc3QoMCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGN1cnJlbnRTdGVwLCB0b3RhbENvc3QsIGFuc3dlcnMsIGxlYWREYXRhLCBzZXRMZWFkRGF0YSwgaGFuZGxlUmljb21pbmNpYSwgaGFuZGxlQW5zd2VyLCBnb0JhY2ssIHNldEN1cnJlbnRTdGVwIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiQXBwQ29udGV4dCIsInVzZUFwcENvbnRleHQiLCJmb3JtYXROdW1iZXIiLCJudW0iLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiZm9ybWF0IiwidG9GaXhlZCIsIkFwcFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjdXJyZW50U3RlcCIsInNldEN1cnJlbnRTdGVwIiwidG90YWxDb3N0Iiwic2V0VG90YWxDb3N0IiwibGVhZERhdGEiLCJzZXRMZWFkRGF0YSIsImZ1bGxOYW1lIiwiZW1haWwiLCJwaG9uZSIsImNvbXBhbnlOYW1lIiwicHJvamVjdFN1bW1hcnkiLCJhY2NlcHQiLCJhbnN3ZXJzIiwic2V0QW5zd2VycyIsImhhbmRsZUFuc3dlciIsImNvc3QiLCJwZXJjZW50IiwibmV3QW5zd2VyIiwibmV3SW5jcmVtZW50IiwibmV3VG90YWwiLCJuZXh0U3RlcCIsInVwZGF0ZWRBbnN3ZXJzIiwiYW5zd2VyIiwiaW5jcmVtZW50IiwiZ29CYWNrIiwicHJldmlvdXNTdGVwIiwic2xpY2UiLCJoYW5kbGVSaWNvbWluY2lhIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/AppContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"./pages/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ \"./pages/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _calcolatore_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calcolatore.css */ \"./pages/calcolatore.css\");\n/* harmony import */ var _calcolatore_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_calcolatore_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/AppContext */ \"./context/AppContext.js\");\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AppContext__WEBPACK_IMPORTED_MODULE_5__.AppProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\matti\\\\OneDrive\\\\Desktop\\\\SoftwareHouse\\\\costo-app-calcolatore\\\\pages\\\\_app.js\",\n            lineNumber: 10,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\matti\\\\OneDrive\\\\Desktop\\\\SoftwareHouse\\\\costo-app-calcolatore\\\\pages\\\\_app.js\",\n        lineNumber: 9,\n        columnNumber: 7\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDTDtBQUNIO0FBQ1E7QUFDMEI7QUFFcEQsU0FBU0UsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNuQyxxQkFDRSw4REFBQ0gsNERBQVdBO2tCQUNWLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCO0FBRUYsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3N0by1hcHAtY2FsY29sYXRvcmUvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuL2luZGV4LmNzcyc7XHJcbmltcG9ydCAnLi9BcHAuY3NzJ1xyXG5pbXBvcnQgJy4vY2FsY29sYXRvcmUuY3NzJ1xyXG5pbXBvcnQgeyBBcHBQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvQXBwQ29udGV4dCc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxBcHBQcm92aWRlcj5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvQXBwUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXBwUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/App.css":
/*!***********************!*\
  !*** ./pages/App.css ***!
  \***********************/
/***/ (() => {



/***/ }),

/***/ "./pages/calcolatore.css":
/*!*******************************!*\
  !*** ./pages/calcolatore.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "./pages/index.css":
/*!*************************!*\
  !*** ./pages/index.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();