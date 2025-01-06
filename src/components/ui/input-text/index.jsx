

function InputText({type,placeholder,custom,handleEvents,name,value}) {
  return (
    <input type={type} value={value} className={`input-text ${custom}`} name={name} placeholder={placeholder} onChange={handleEvents} required/>
  );
}

export default InputText;