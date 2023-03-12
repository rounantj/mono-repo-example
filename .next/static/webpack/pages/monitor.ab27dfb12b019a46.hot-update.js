"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/monitor",{

/***/ "./src/components/secao.tsx":
/*!**********************************!*\
  !*** ./src/components/secao.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Secao; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var _papers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./papers */ \"./src/components/papers.tsx\");\n/* harmony import */ var _helpers_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/styles */ \"./src/helpers/styles.ts\");\n/* harmony import */ var _modalFull__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modalFull */ \"./src/components/modalFull.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Secao(param) {\n    let { setOrders , ordersA , loading , transmit , disableSync  } = param;\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [ordem, setOrdem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleDragEnd2 = (result)=>{\n        if (disableSync) return;\n        if (!result) return; // do nothing if dropped outside the list\n        if (!result.destination) return; // do nothing if dropped outside the list\n        const { source , destination  } = result;\n        if (source.droppableId === destination.droppableId) {\n            // reordering within the same droppable\n            const droppableId = source.droppableId;\n            const lineIndex = droppableId.split(\"-\")[1];\n            let orders = ordersA.sector_locals.find((o)=>o.name === lineIndex);\n            if (!orders) return; // do nothing if orders is undefined\n            const newOrders = Array.from(orders.orders);\n            const [reorderedItem] = newOrders.splice(source.index, 1);\n            newOrders.splice(destination.index, 0, reorderedItem);\n            let newOrdesB = ordersA;\n            newOrdesB.sector_locals.forEach((o)=>{\n                if (o.name === lineIndex) {\n                    o.orders = newOrders;\n                }\n            });\n            setOrders(newOrdesB);\n        } else {\n            // moving to a different droppable\n            const sourceDroppableId = source.droppableId;\n            const destinationDroppableId = destination.droppableId;\n            const [sourceSector, sourceLine] = sourceDroppableId.split(\"-\");\n            const [destinationSector, destinationLine] = destinationDroppableId.split(\"-\");\n            if (sourceSector !== destinationSector) return; // do nothing if dragging between sectors\n            const ordersSource = ordersA === null || ordersA === void 0 ? void 0 : ordersA.sector_locals.find((o)=>o.name === sourceLine);\n            const ordersDestination = ordersA === null || ordersA === void 0 ? void 0 : ordersA.sector_locals.find((o)=>o.name === destinationLine);\n            if (ordersSource && ordersDestination) {\n                const sourceOrders = Array.from(ordersSource.orders);\n                const destinationOrders = Array.from(ordersDestination.orders);\n                const [movedItem] = sourceOrders.splice(source.index, 1);\n                destinationOrders.splice(destination.index, 0, movedItem);\n                let newOrdesB = ordersA;\n                newOrdesB.sector_locals.forEach((o)=>{\n                    if (o.name === sourceLine) {\n                        o.orders = sourceOrders;\n                    }\n                    if (o.name === destinationLine) {\n                        o.orders = destinationOrders;\n                    }\n                });\n                setOrders(newOrdesB);\n            }\n            transmit();\n        }\n    };\n    async function mudaOrdem(ordem) {\n        setOpen(!open);\n        setOrdem(ordem);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            padding: \"50px\"\n        },\n        children: [\n            loading ? // verifica se loading é verdadeiro e exibe o skeleton\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            height: \"50px\",\n                            width: \"100%\",\n                            marginBottom: \"20px\",\n                            backgroundColor: \"#eee\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\www\\\\reboot\\\\wli-almox\\\\src\\\\components\\\\secao.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            height: \"100px\",\n                            width: \"100%\",\n                            marginBottom: \"20px\",\n                            backgroundColor: \"#eee\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\www\\\\reboot\\\\wli-almox\\\\src\\\\components\\\\secao.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            height: \"100px\",\n                            width: \"100%\",\n                            marginBottom: \"20px\",\n                            backgroundColor: \"#eee\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\www\\\\reboot\\\\wli-almox\\\\src\\\\components\\\\secao.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\www\\\\reboot\\\\wli-almox\\\\src\\\\components\\\\secao.tsx\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__.DragDropContext, {\n                onDragEnd: handleDragEnd2,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    container: true,\n                    spacing: 2,\n                    children: ordersA.sector_locals && ordersA.sector_locals.map((line, u)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__.Droppable, {\n                            droppableId: \"\".concat(ordersA.sector_name, \"-\").concat(line.name),\n                            children: (provided)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    ...provided.droppableProps,\n                                    ref: provided.innerRef,\n                                    sx: {\n                                        flexGrow: 1,\n                                        mb: 2\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_styles__WEBPACK_IMPORTED_MODULE_3__.Item, {\n                                            sx: {\n                                                mb: 1,\n                                                color: \"rgb(0,87,156)\",\n                                                fontSize: \"20px\",\n                                                fontWeight: \"bold\"\n                                            },\n                                            variant: \"outlined\",\n                                            children: \"\".concat(ordersA.sector_name, \" - \").concat(line.name)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\www\\\\reboot\\\\wli-almox\\\\src\\\\components\\\\secao.tsx\",\n                                            lineNumber: 137,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_styles__WEBPACK_IMPORTED_MODULE_3__.Item, {\n                                            sx: {\n                                                mb: 1,\n                                                color: \"red\",\n                                                fontSize: \"20px\",\n                                                fontWeight: \"bold\"\n                                            },\n                                            variant: \"outlined\",\n                                            children: \"00:\".concat(30)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\www\\\\reboot\\\\wli-almox\\\\src\\\\components\\\\secao.tsx\",\n                                            lineNumber: 148,\n                                            columnNumber: 23\n                                        }, this),\n                                        line.orders.map((order, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_5__.Draggable, {\n                                                draggableId: \"\".concat(ordersA.sector_name, \"-\").concat(line.name, \"-\").concat(i),\n                                                index: i,\n                                                children: (provided)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        ref: provided.innerRef,\n                                                        ...provided.draggableProps,\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            ...provided.dragHandleProps,\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_papers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                                onClick: ()=>mudaOrdem(order.order),\n                                                                count: order.count,\n                                                                priority: i,\n                                                                title: order.order,\n                                                                style: {\n                                                                    mb: 1\n                                                                }\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\www\\\\reboot\\\\wli-almox\\\\src\\\\components\\\\secao.tsx\",\n                                                                lineNumber: 171,\n                                                                columnNumber: 33\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\www\\\\reboot\\\\wli-almox\\\\src\\\\components\\\\secao.tsx\",\n                                                            lineNumber: 170,\n                                                            columnNumber: 31\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\www\\\\reboot\\\\wli-almox\\\\src\\\\components\\\\secao.tsx\",\n                                                        lineNumber: 166,\n                                                        columnNumber: 29\n                                                    }, this)\n                                            }, i, false, {\n                                                fileName: \"C:\\\\www\\\\reboot\\\\wli-almox\\\\src\\\\components\\\\secao.tsx\",\n                                                lineNumber: 160,\n                                                columnNumber: 25\n                                            }, this)),\n                                        provided.placeholder\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\www\\\\reboot\\\\wli-almox\\\\src\\\\components\\\\secao.tsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 21\n                                }, this)\n                        }, \"\".concat(ordersA.sector_name, \"-\").concat(line.name), false, {\n                            fileName: \"C:\\\\www\\\\reboot\\\\wli-almox\\\\src\\\\components\\\\secao.tsx\",\n                            lineNumber: 127,\n                            columnNumber: 17\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\www\\\\reboot\\\\wli-almox\\\\src\\\\components\\\\secao.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\www\\\\reboot\\\\wli-almox\\\\src\\\\components\\\\secao.tsx\",\n                lineNumber: 123,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modalFull__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                open: open,\n                ordem: ordem,\n                setOpen: setOpen\n            }, void 0, false, {\n                fileName: \"C:\\\\www\\\\reboot\\\\wli-almox\\\\src\\\\components\\\\secao.tsx\",\n                lineNumber: 192,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\www\\\\reboot\\\\wli-almox\\\\src\\\\components\\\\secao.tsx\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, this);\n}\n_s(Secao, \"N3spn8fVkpIfDZYrMV4xuKpDXyY=\");\n_c = Secao;\nvar _c;\n$RefreshReg$(_c, \"Secao\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWNhby50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUN5QjtBQUN4QztBQUNFO0FBQ0o7QUFFTztBQUNFO0FBVTVCLFNBQVNVLE1BQU0sS0FNdEIsRUFBRTtRQU5vQixFQUM1QkMsVUFBUyxFQUNUQyxRQUFPLEVBQ1BDLFFBQU8sRUFDUEMsU0FBUSxFQUNSQyxZQUFXLEVBQ0wsR0FOc0I7O0lBTzVCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHaEIsK0NBQVFBLENBQVUsS0FBSztJQUMvQyxNQUFNLENBQUNpQixPQUFPQyxTQUFTLEdBQUdsQiwrQ0FBUUEsQ0FBUztJQUMzQyxNQUFNbUIsaUJBQWlCLENBQUNDLFNBQWdCO1FBQ3RDLElBQUlOLGFBQWE7UUFDakIsSUFBSSxDQUFDTSxRQUFRLFFBQVEseUNBQXlDO1FBQzlELElBQUksQ0FBQ0EsT0FBT0MsV0FBVyxFQUFFLFFBQVEseUNBQXlDO1FBQzFFLE1BQU0sRUFBRUMsT0FBTSxFQUFFRCxZQUFXLEVBQUUsR0FBR0Q7UUFFaEMsSUFBSUUsT0FBT0MsV0FBVyxLQUFLRixZQUFZRSxXQUFXLEVBQUU7WUFDbEQsdUNBQXVDO1lBQ3ZDLE1BQU1BLGNBQWNELE9BQU9DLFdBQVc7WUFDdEMsTUFBTUMsWUFBWUQsWUFBWUUsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNDLElBQUlDLFNBQVNmLFFBQVFnQixhQUFhLENBQUNDLElBQUksQ0FBQyxDQUFDQyxJQUFXQSxFQUFFQyxJQUFJLEtBQUtOO1lBRS9ELElBQUksQ0FBQ0UsUUFBUSxRQUFRLG9DQUFvQztZQUN6RCxNQUFNSyxZQUFZQyxNQUFNQyxJQUFJLENBQUNQLE9BQU9BLE1BQU07WUFDMUMsTUFBTSxDQUFDUSxjQUFjLEdBQUdILFVBQVVJLE1BQU0sQ0FBQ2IsT0FBT2MsS0FBSyxFQUFFO1lBQ3ZETCxVQUFVSSxNQUFNLENBQUNkLFlBQVllLEtBQUssRUFBRSxHQUFHRjtZQUN2QyxJQUFJRyxZQUFZMUI7WUFFaEIwQixVQUFVVixhQUFhLENBQUNXLE9BQU8sQ0FBQyxDQUFDVCxJQUFXO2dCQUMxQyxJQUFJQSxFQUFFQyxJQUFJLEtBQUtOLFdBQVc7b0JBQ3hCSyxFQUFFSCxNQUFNLEdBQUdLO2dCQUNiLENBQUM7WUFDSDtZQUNBckIsVUFBVTJCO1FBQ1osT0FBTztZQUNMLGtDQUFrQztZQUNsQyxNQUFNRSxvQkFBb0JqQixPQUFPQyxXQUFXO1lBQzVDLE1BQU1pQix5QkFBeUJuQixZQUFZRSxXQUFXO1lBQ3RELE1BQU0sQ0FBQ2tCLGNBQWNDLFdBQVcsR0FBR0gsa0JBQWtCZCxLQUFLLENBQUM7WUFDM0QsTUFBTSxDQUFDa0IsbUJBQW1CQyxnQkFBZ0IsR0FDeENKLHVCQUF1QmYsS0FBSyxDQUFDO1lBQy9CLElBQUlnQixpQkFBaUJFLG1CQUFtQixRQUFRLHlDQUF5QztZQUN6RixNQUFNRSxlQUFlbEMsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTZ0IsYUFBYSxDQUFDQyxJQUFJLENBQzlDLENBQUNDLElBQVdBLEVBQUVDLElBQUksS0FBS1ksV0FDeEI7WUFDRCxNQUFNSSxvQkFBb0JuQyxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNnQixhQUFhLENBQUNDLElBQUksQ0FDbkQsQ0FBQ0MsSUFBV0EsRUFBRUMsSUFBSSxLQUFLYyxnQkFDeEI7WUFDRCxJQUFJQyxnQkFBZ0JDLG1CQUFtQjtnQkFDckMsTUFBTUMsZUFBZWYsTUFBTUMsSUFBSSxDQUFDWSxhQUFhbkIsTUFBTTtnQkFDbkQsTUFBTXNCLG9CQUFvQmhCLE1BQU1DLElBQUksQ0FBQ2Esa0JBQWtCcEIsTUFBTTtnQkFDN0QsTUFBTSxDQUFDdUIsVUFBVSxHQUFHRixhQUFhWixNQUFNLENBQUNiLE9BQU9jLEtBQUssRUFBRTtnQkFDdERZLGtCQUFrQmIsTUFBTSxDQUFDZCxZQUFZZSxLQUFLLEVBQUUsR0FBR2E7Z0JBQy9DLElBQUlaLFlBQVkxQjtnQkFDaEIwQixVQUFVVixhQUFhLENBQUNXLE9BQU8sQ0FBQyxDQUFDVCxJQUFXO29CQUMxQyxJQUFJQSxFQUFFQyxJQUFJLEtBQUtZLFlBQVk7d0JBQ3pCYixFQUFFSCxNQUFNLEdBQUdxQjtvQkFDYixDQUFDO29CQUVELElBQUlsQixFQUFFQyxJQUFJLEtBQUtjLGlCQUFpQjt3QkFDOUJmLEVBQUVILE1BQU0sR0FBR3NCO29CQUNiLENBQUM7Z0JBQ0g7Z0JBQ0F0QyxVQUFVMkI7WUFDWixDQUFDO1lBRUR4QjtRQUNGLENBQUM7SUFDSDtJQUVBLGVBQWVxQyxVQUFVakMsS0FBYSxFQUFFO1FBQ3RDRCxRQUFRLENBQUNEO1FBQ1RHLFNBQVNEO0lBQ1g7SUFFQSxxQkFDRSw4REFBQ2tDO1FBQUlDLE9BQU87WUFBRUMsU0FBUztRQUFPOztZQUMzQnpDLFVBQ0Msc0RBQXNEOzBCQUN0RCw4REFBQ3VDO2dCQUFJQyxPQUFPO29CQUFFRSxTQUFTO29CQUFRQyxlQUFlO2dCQUFTOztrQ0FDckQsOERBQUNKO3dCQUNDQyxPQUFPOzRCQUNMSSxRQUFROzRCQUNSQyxPQUFPOzRCQUNQQyxjQUFjOzRCQUNkQyxpQkFBaUI7d0JBQ25COzs7Ozs7a0NBRUYsOERBQUNSO3dCQUNDQyxPQUFPOzRCQUNMSSxRQUFROzRCQUNSQyxPQUFPOzRCQUNQQyxjQUFjOzRCQUNkQyxpQkFBaUI7d0JBQ25COzs7Ozs7a0NBRUYsOERBQUNSO3dCQUNDQyxPQUFPOzRCQUNMSSxRQUFROzRCQUNSQyxPQUFPOzRCQUNQQyxjQUFjOzRCQUNkQyxpQkFBaUI7d0JBQ25COzs7Ozs7Ozs7OztxQ0FJSiw4REFBQzFELGdFQUFlQTtnQkFBQzJELFdBQVd6QzswQkFDMUIsNEVBQUNkLDBEQUFJQTtvQkFBQ3dELFNBQVM7b0JBQUNDLFNBQVM7OEJBQ3RCbkQsUUFBUWdCLGFBQWEsSUFDcEJoQixRQUFRZ0IsYUFBYSxDQUFDb0MsR0FBRyxDQUFDLENBQUNDLE1BQVlDLGtCQUNyQyw4REFBQy9ELDBEQUFTQTs0QkFFUnFCLGFBQWEsR0FBMEJ5QyxPQUF2QnJELFFBQVF1RCxXQUFXLEVBQUMsS0FBYSxPQUFWRixLQUFLbEMsSUFBSTtzQ0FFL0MsQ0FBQ3FDLHlCQUNBLDhEQUFDL0QseURBQUdBO29DQUNELEdBQUcrRCxTQUFTQyxjQUFjO29DQUMzQkMsS0FBS0YsU0FBU0csUUFBUTtvQ0FDdEJDLElBQUk7d0NBQUVDLFVBQVU7d0NBQUdDLElBQUk7b0NBQUU7O3NEQUV6Qiw4REFBQ2xFLGlEQUFJQTs0Q0FDSGdFLElBQUk7Z0RBQ0ZFLElBQUk7Z0RBQ0pDLE9BQU87Z0RBQ1BDLFVBQVU7Z0RBQ1ZDLFlBQVk7NENBQ2Q7NENBQ0FDLFNBQVE7c0RBRVAsR0FBNEJiLE9BQXpCckQsUUFBUXVELFdBQVcsRUFBQyxPQUFlLE9BQVZGLEtBQUtsQyxJQUFJOzs7Ozs7c0RBRXhDLDhEQUFDdkIsaURBQUlBOzRDQUNIZ0UsSUFBSTtnREFDRkUsSUFBSTtnREFDSkMsT0FBTztnREFDUEMsVUFBVTtnREFDVkMsWUFBWTs0Q0FDZDs0Q0FDQUMsU0FBUTtzREFFUCxNQUFTLE9BQUg7Ozs7Ozt3Q0FFUmIsS0FBS3RDLE1BQU0sQ0FBQ3FDLEdBQUcsQ0FBQyxDQUFDZSxPQUFjQyxrQkFDOUIsOERBQUM1RSwwREFBU0E7Z0RBRVI2RSxhQUFhLEdBQTBCaEIsT0FBdkJyRCxRQUFRdUQsV0FBVyxFQUFDLEtBQWdCYSxPQUFiZixLQUFLbEMsSUFBSSxFQUFDLEtBQUssT0FBRmlEO2dEQUNwRDNDLE9BQU8yQzswREFFTixDQUFDWix5QkFDQSw4REFBQ2hCO3dEQUNDa0IsS0FBS0YsU0FBU0csUUFBUTt3REFDckIsR0FBR0gsU0FBU2MsY0FBYztrRUFFM0IsNEVBQUM5Qjs0REFBSyxHQUFHZ0IsU0FBU2UsZUFBZTtzRUFDL0IsNEVBQUM1RSwrQ0FBVUE7Z0VBQ1Q2RSxTQUFTLElBQU1qQyxVQUFVNEIsTUFBTUEsS0FBSztnRUFDcENNLE9BQU9OLE1BQU1NLEtBQUs7Z0VBQ2xCQyxVQUFVTjtnRUFDVk8sT0FBT1IsTUFBTUEsS0FBSztnRUFDbEIxQixPQUFPO29FQUFFcUIsSUFBSTtnRUFBRTs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FmbEJNOzs7Ozt3Q0FzQlJaLFNBQVNvQixXQUFXOzs7Ozs7OzJCQXZEcEIsR0FBMEJ2QixPQUF2QnJELFFBQVF1RCxXQUFXLEVBQUMsS0FBYSxPQUFWRixLQUFLbEMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7b0JBOERuRDswQkFFRCw4REFBQ3RCLGtEQUFnQkE7Z0JBQUNPLE1BQU1BO2dCQUFNRSxPQUFPQTtnQkFBT0QsU0FBU0E7Ozs7Ozs7Ozs7OztBQUczRCxDQUFDO0dBakx1QlA7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjYW8udHN4PzBjZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0LCBEcm9wcGFibGUsIERyYWdnYWJsZSB9IGZyb20gXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbXVpL21hdGVyaWFsL0dyaWRcIjtcclxuaW1wb3J0IE9yZGVyUGFwZXIgZnJvbSBcIi4vcGFwZXJzXCI7XHJcbmltcG9ydCB7IExJTkUsIExPQ0FMLCBPUkRFUiB9IGZyb20gXCIuLi9oZWxwZXJzL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuLi9oZWxwZXJzL3N0eWxlc1wiO1xyXG5pbXBvcnQgRnVsbFNjcmVlbkRpYWxvZyBmcm9tIFwiLi9tb2RhbEZ1bGxcIjtcclxuXHJcbmludGVyZmFjZSBwcm9wcyB7XHJcbiAgc2V0T3JkZXJzOiBhbnk7XHJcbiAgdHJhbnNtaXQ6IGFueTtcclxuICBkaXNhYmxlU3luYzogYm9vbGVhbjtcclxuICBvcmRlcnNBOiBMT0NBTDtcclxuICBsb2FkaW5nOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWNhbyh7XHJcbiAgc2V0T3JkZXJzLFxyXG4gIG9yZGVyc0EsXHJcbiAgbG9hZGluZyxcclxuICB0cmFuc21pdCxcclxuICBkaXNhYmxlU3luYyxcclxufTogcHJvcHMpIHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW29yZGVtLCBzZXRPcmRlbV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IGhhbmRsZURyYWdFbmQyID0gKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICBpZiAoZGlzYWJsZVN5bmMpIHJldHVybjtcclxuICAgIGlmICghcmVzdWx0KSByZXR1cm47IC8vIGRvIG5vdGhpbmcgaWYgZHJvcHBlZCBvdXRzaWRlIHRoZSBsaXN0XHJcbiAgICBpZiAoIXJlc3VsdC5kZXN0aW5hdGlvbikgcmV0dXJuOyAvLyBkbyBub3RoaW5nIGlmIGRyb3BwZWQgb3V0c2lkZSB0aGUgbGlzdFxyXG4gICAgY29uc3QgeyBzb3VyY2UsIGRlc3RpbmF0aW9uIH0gPSByZXN1bHQ7XHJcblxyXG4gICAgaWYgKHNvdXJjZS5kcm9wcGFibGVJZCA9PT0gZGVzdGluYXRpb24uZHJvcHBhYmxlSWQpIHtcclxuICAgICAgLy8gcmVvcmRlcmluZyB3aXRoaW4gdGhlIHNhbWUgZHJvcHBhYmxlXHJcbiAgICAgIGNvbnN0IGRyb3BwYWJsZUlkID0gc291cmNlLmRyb3BwYWJsZUlkO1xyXG4gICAgICBjb25zdCBsaW5lSW5kZXggPSBkcm9wcGFibGVJZC5zcGxpdChcIi1cIilbMV07XHJcbiAgICAgIGxldCBvcmRlcnMgPSBvcmRlcnNBLnNlY3Rvcl9sb2NhbHMuZmluZCgobzogYW55KSA9PiBvLm5hbWUgPT09IGxpbmVJbmRleCk7XHJcblxyXG4gICAgICBpZiAoIW9yZGVycykgcmV0dXJuOyAvLyBkbyBub3RoaW5nIGlmIG9yZGVycyBpcyB1bmRlZmluZWRcclxuICAgICAgY29uc3QgbmV3T3JkZXJzID0gQXJyYXkuZnJvbShvcmRlcnMub3JkZXJzKTtcclxuICAgICAgY29uc3QgW3Jlb3JkZXJlZEl0ZW1dID0gbmV3T3JkZXJzLnNwbGljZShzb3VyY2UuaW5kZXgsIDEpO1xyXG4gICAgICBuZXdPcmRlcnMuc3BsaWNlKGRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW9yZGVyZWRJdGVtKTtcclxuICAgICAgbGV0IG5ld09yZGVzQiA9IG9yZGVyc0E7XHJcblxyXG4gICAgICBuZXdPcmRlc0Iuc2VjdG9yX2xvY2Fscy5mb3JFYWNoKChvOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoby5uYW1lID09PSBsaW5lSW5kZXgpIHtcclxuICAgICAgICAgIG8ub3JkZXJzID0gbmV3T3JkZXJzO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHNldE9yZGVycyhuZXdPcmRlc0IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gbW92aW5nIHRvIGEgZGlmZmVyZW50IGRyb3BwYWJsZVxyXG4gICAgICBjb25zdCBzb3VyY2VEcm9wcGFibGVJZCA9IHNvdXJjZS5kcm9wcGFibGVJZDtcclxuICAgICAgY29uc3QgZGVzdGluYXRpb25Ecm9wcGFibGVJZCA9IGRlc3RpbmF0aW9uLmRyb3BwYWJsZUlkO1xyXG4gICAgICBjb25zdCBbc291cmNlU2VjdG9yLCBzb3VyY2VMaW5lXSA9IHNvdXJjZURyb3BwYWJsZUlkLnNwbGl0KFwiLVwiKTtcclxuICAgICAgY29uc3QgW2Rlc3RpbmF0aW9uU2VjdG9yLCBkZXN0aW5hdGlvbkxpbmVdID1cclxuICAgICAgICBkZXN0aW5hdGlvbkRyb3BwYWJsZUlkLnNwbGl0KFwiLVwiKTtcclxuICAgICAgaWYgKHNvdXJjZVNlY3RvciAhPT0gZGVzdGluYXRpb25TZWN0b3IpIHJldHVybjsgLy8gZG8gbm90aGluZyBpZiBkcmFnZ2luZyBiZXR3ZWVuIHNlY3RvcnNcclxuICAgICAgY29uc3Qgb3JkZXJzU291cmNlID0gb3JkZXJzQT8uc2VjdG9yX2xvY2Fscy5maW5kKFxyXG4gICAgICAgIChvOiBhbnkpID0+IG8ubmFtZSA9PT0gc291cmNlTGluZVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBvcmRlcnNEZXN0aW5hdGlvbiA9IG9yZGVyc0E/LnNlY3Rvcl9sb2NhbHMuZmluZChcclxuICAgICAgICAobzogYW55KSA9PiBvLm5hbWUgPT09IGRlc3RpbmF0aW9uTGluZVxyXG4gICAgICApO1xyXG4gICAgICBpZiAob3JkZXJzU291cmNlICYmIG9yZGVyc0Rlc3RpbmF0aW9uKSB7XHJcbiAgICAgICAgY29uc3Qgc291cmNlT3JkZXJzID0gQXJyYXkuZnJvbShvcmRlcnNTb3VyY2Uub3JkZXJzKTtcclxuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbk9yZGVycyA9IEFycmF5LmZyb20ob3JkZXJzRGVzdGluYXRpb24ub3JkZXJzKTtcclxuICAgICAgICBjb25zdCBbbW92ZWRJdGVtXSA9IHNvdXJjZU9yZGVycy5zcGxpY2Uoc291cmNlLmluZGV4LCAxKTtcclxuICAgICAgICBkZXN0aW5hdGlvbk9yZGVycy5zcGxpY2UoZGVzdGluYXRpb24uaW5kZXgsIDAsIG1vdmVkSXRlbSk7XHJcbiAgICAgICAgbGV0IG5ld09yZGVzQiA9IG9yZGVyc0E7XHJcbiAgICAgICAgbmV3T3JkZXNCLnNlY3Rvcl9sb2NhbHMuZm9yRWFjaCgobzogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAoby5uYW1lID09PSBzb3VyY2VMaW5lKSB7XHJcbiAgICAgICAgICAgIG8ub3JkZXJzID0gc291cmNlT3JkZXJzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChvLm5hbWUgPT09IGRlc3RpbmF0aW9uTGluZSkge1xyXG4gICAgICAgICAgICBvLm9yZGVycyA9IGRlc3RpbmF0aW9uT3JkZXJzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldE9yZGVycyhuZXdPcmRlc0IpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0cmFuc21pdCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG11ZGFPcmRlbShvcmRlbTogc3RyaW5nKSB7XHJcbiAgICBzZXRPcGVuKCFvcGVuKTtcclxuICAgIHNldE9yZGVtKG9yZGVtKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiNTBweFwiIH19PlxyXG4gICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAvLyB2ZXJpZmljYSBzZSBsb2FkaW5nIMOpIHZlcmRhZGVpcm8gZSBleGliZSBvIHNrZWxldG9uXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiNTBweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZWVlXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHB4XCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNlZWVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwcHhcIixcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2VlZVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kMn0+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgIHtvcmRlcnNBLnNlY3Rvcl9sb2NhbHMgJiZcclxuICAgICAgICAgICAgICBvcmRlcnNBLnNlY3Rvcl9sb2NhbHMubWFwKChsaW5lOiBMSU5FLCB1OiBudW1iZXIpID0+IChcclxuICAgICAgICAgICAgICAgIDxEcm9wcGFibGVcclxuICAgICAgICAgICAgICAgICAga2V5PXtgJHtvcmRlcnNBLnNlY3Rvcl9uYW1lfS0ke2xpbmUubmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICBkcm9wcGFibGVJZD17YCR7b3JkZXJzQS5zZWN0b3JfbmFtZX0tJHtsaW5lLm5hbWV9YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSwgbWI6IDIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1iOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYigwLDg3LDE1NilcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtvcmRlcnNBLnNlY3Rvcl9uYW1lfSAtICR7bGluZS5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1iOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2AwMDokezMwfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bGluZS5vcmRlcnMubWFwKChvcmRlcjogT1JERVIsIGk6IG51bWJlcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZUlkPXtgJHtvcmRlcnNBLnNlY3Rvcl9uYW1lfS0ke2xpbmUubmFtZX0tJHtpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3JkZXJQYXBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbXVkYU9yZGVtKG9yZGVyLm9yZGVyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50PXtvcmRlci5jb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e29yZGVyLm9yZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWI6IDEgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0RyYWdEcm9wQ29udGV4dD5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxGdWxsU2NyZWVuRGlhbG9nIG9wZW49e29wZW59IG9yZGVtPXtvcmRlbX0gc2V0T3Blbj17c2V0T3Blbn0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEcmFnRHJvcENvbnRleHQiLCJEcm9wcGFibGUiLCJEcmFnZ2FibGUiLCJCb3giLCJHcmlkIiwiT3JkZXJQYXBlciIsIkl0ZW0iLCJGdWxsU2NyZWVuRGlhbG9nIiwiU2VjYW8iLCJzZXRPcmRlcnMiLCJvcmRlcnNBIiwibG9hZGluZyIsInRyYW5zbWl0IiwiZGlzYWJsZVN5bmMiLCJvcGVuIiwic2V0T3BlbiIsIm9yZGVtIiwic2V0T3JkZW0iLCJoYW5kbGVEcmFnRW5kMiIsInJlc3VsdCIsImRlc3RpbmF0aW9uIiwic291cmNlIiwiZHJvcHBhYmxlSWQiLCJsaW5lSW5kZXgiLCJzcGxpdCIsIm9yZGVycyIsInNlY3Rvcl9sb2NhbHMiLCJmaW5kIiwibyIsIm5hbWUiLCJuZXdPcmRlcnMiLCJBcnJheSIsImZyb20iLCJyZW9yZGVyZWRJdGVtIiwic3BsaWNlIiwiaW5kZXgiLCJuZXdPcmRlc0IiLCJmb3JFYWNoIiwic291cmNlRHJvcHBhYmxlSWQiLCJkZXN0aW5hdGlvbkRyb3BwYWJsZUlkIiwic291cmNlU2VjdG9yIiwic291cmNlTGluZSIsImRlc3RpbmF0aW9uU2VjdG9yIiwiZGVzdGluYXRpb25MaW5lIiwib3JkZXJzU291cmNlIiwib3JkZXJzRGVzdGluYXRpb24iLCJzb3VyY2VPcmRlcnMiLCJkZXN0aW5hdGlvbk9yZGVycyIsIm1vdmVkSXRlbSIsIm11ZGFPcmRlbSIsImRpdiIsInN0eWxlIiwicGFkZGluZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW5Cb3R0b20iLCJiYWNrZ3JvdW5kQ29sb3IiLCJvbkRyYWdFbmQiLCJjb250YWluZXIiLCJzcGFjaW5nIiwibWFwIiwibGluZSIsInUiLCJzZWN0b3JfbmFtZSIsInByb3ZpZGVkIiwiZHJvcHBhYmxlUHJvcHMiLCJyZWYiLCJpbm5lclJlZiIsInN4IiwiZmxleEdyb3ciLCJtYiIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidmFyaWFudCIsIm9yZGVyIiwiaSIsImRyYWdnYWJsZUlkIiwiZHJhZ2dhYmxlUHJvcHMiLCJkcmFnSGFuZGxlUHJvcHMiLCJvbkNsaWNrIiwiY291bnQiLCJwcmlvcml0eSIsInRpdGxlIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/secao.tsx\n"));

/***/ })

});