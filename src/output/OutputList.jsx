//import ButtonCmp from "../input/ButtonCmp";
import {ButtonCmp} from "../input";

export default function OutputList({todoList, onRemoveClicked}){

  return(
   
    <ul> 
    {todoList.map((listItem)=>{
      return <li>{listItem.text} 
      <ButtonCmp functionName={onRemoveClicked} functionParameter={listItem.itemId} buttonName="X"></ButtonCmp>

      </li> 
    })}
    </ul>
      
  );
}