import { useState } from 'react';
import ButtonCmp from "./ButtonCmp";
import InputCmp from "./InputCmp";


export default function InputBox({handleTodoList}){
     const [listItemText, setListItemText] = useState("");

  return(
   <div>
      <InputCmp listItemText={listItemText} setListItemText={setListItemText}></InputCmp>
      <ButtonCmp functionName={handleTodoList} functionParameter={listItemText} buttonName="Add"></ButtonCmp>
      </div>
  );
}