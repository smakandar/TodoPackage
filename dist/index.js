var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.js
var index_exports = {};
__export(index_exports, {
  ButtonCmp: () => ButtonCmp,
  InputBox: () => InputBox,
  InputCmp: () => InputCmp,
  OutputList: () => OutputList
});
module.exports = __toCommonJS(index_exports);

// src/input/ButtonCmp.jsx
function ButtonCmp({ functionName, functionParameter, buttonName }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", { onClick: () => functionName(functionParameter) }, buttonName));
}

// src/input/InputCmp.jsx
var import_react = require("react");
function InputCmp({ listItemText, setListItemText }) {
  const inputBoxRef = (0, import_react.useRef)(null);
  const handletextChange = (e) => {
    setListItemText(e.target.value);
  };
  (0, import_react.useEffect)(() => {
    console.log("inputBoxRef:", inputBoxRef);
  });
  const focusOnInput = () => {
    inputBoxRef.current.focus();
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      onChange: handletextChange,
      value: listItemText,
      ref: inputBoxRef
    }
  ), /* @__PURE__ */ React.createElement("br", null), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("button", { onClick: focusOnInput }, "Focus"));
}

// src/input/InputBox.jsx
var import_react2 = require("react");
function InputBox({ handleTodoList }) {
  const [listItemText, setListItemText] = (0, import_react2.useState)("");
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(InputCmp, { listItemText, setListItemText }), /* @__PURE__ */ React.createElement(ButtonCmp, { functionName: handleTodoList, functionParameter: listItemText, buttonName: "Add" }));
}

// src/output/OutputList.jsx
function OutputList({ todoList, onRemoveClicked }) {
  return /* @__PURE__ */ React.createElement("ul", null, todoList.map((listItem) => {
    return /* @__PURE__ */ React.createElement("li", null, listItem.text, /* @__PURE__ */ React.createElement(ButtonCmp, { functionName: onRemoveClicked, functionParameter: listItem.itemId, buttonName: "X" }));
  }));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ButtonCmp,
  InputBox,
  InputCmp,
  OutputList
});
