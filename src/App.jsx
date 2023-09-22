import './App.css';
import { createContext, useEffect, useReducer, useState, useRef } from 'react';
import Border from './Components/Border/Border';
import Paragraph from './Components/Paragraph/Paragraph';
import Image from './Components/Image/Image';
import Div from './Components/Div/Div';
import Button from './Components/Button/Button';
import Form from './Components/Form/Form';
import DivWithButton from './Components/DivWithButton/DivWithButton';
import InputTypeText from './Components/Inputs/InputTypeText/InputTypeText';
import NoPortalExample from './Components/NoPortalExample/NoPortalExample';
import PortalExample from './Components/PortalExample/PortalExample';

export const ThemeContext = createContext(null);
export const ThemeToggleContext = createContext(null);

function App() {
  const input = useRef(null);

  useEffect(() => {
    console.log('Something is changed');
  })

  return (
    <>
      {/* <input type="text" ref={input}/> */}
      <InputTypeText ref={input} />
      <button onClick={() => console.log(input.current.value)}>Log input value</button>
    </>
  );
}

export default App;
