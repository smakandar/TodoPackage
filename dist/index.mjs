// src/input/ButtonCmp.jsx
function ButtonCmp({ functionName, functionParameter, buttonName }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", { onClick: () => functionName(functionParameter) }, buttonName));
}

// src/input/InputCmp.jsx
import { useEffect, useRef } from "react";
function InputCmp({ listItemText, setListItemText }) {
  const inputBoxRef = useRef(null);
  const handletextChange = (e) => {
    setListItemText(e.target.value);
  };
  useEffect(() => {
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
import { useState } from "react";
function InputBox({ handleTodoList }) {
  const [listItemText, setListItemText] = useState("");
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(InputCmp, { listItemText, setListItemText }), /* @__PURE__ */ React.createElement(ButtonCmp, { functionName: handleTodoList, functionParameter: listItemText, buttonName: "Add" }));
}

// src/output/OutputList.jsx
function OutputList({ todoList, onRemoveClicked }) {
  return /* @__PURE__ */ React.createElement("ul", null, todoList.map((listItem) => {
    return /* @__PURE__ */ React.createElement("li", null, listItem.text, /* @__PURE__ */ React.createElement(ButtonCmp, { functionName: onRemoveClicked, functionParameter: listItem.itemId, buttonName: "X" }));
  }));
}
export {
  ButtonCmp,
  InputBox,
  InputCmp,
  OutputList
};
