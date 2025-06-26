export default function ButtonCmp({functionName, functionParameter, buttonName}){

  return(
   <div>
      <button onClick = {() => functionName(functionParameter)}>{buttonName}</button>

      </div>
  );
}