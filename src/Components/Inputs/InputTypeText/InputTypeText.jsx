import './InputTypeText.css';

function InputTypeText({inputHandle}) {

  return (
    <input type="text" onInput={(event) => inputHandle(event.target.value)}/>
  );
}

export default InputTypeText;
