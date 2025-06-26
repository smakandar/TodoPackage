import { useEffect, useRef } from 'react';

export default function InputCmp({listItemText, setListItemText}){
    const inputBoxRef = useRef(null);

    const handletextChange = (e) => {
        setListItemText(e.target.value);
      };

      useEffect(() => {
        console.log("inputBoxRef:",inputBoxRef);
      });

      const focusOnInput = () => {
        inputBoxRef.current.focus();
      }
  return(
   <div>
      <input type="text" 
      onChange={handletextChange} 
      value={listItemText}
      ref={inputBoxRef}>
      </input>
      <br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/>
      <button onClick={focusOnInput}>Focus</button>
      </div>
  );
}