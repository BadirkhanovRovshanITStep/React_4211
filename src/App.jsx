import './App.css';
import { createContext, useEffect, useReducer, useState } from 'react';
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
  return (
    <>
      <div className="clipping-container">
        <NoPortalExample  />
      </div>
      <div className="clipping-container">
        <PortalExample />
      </div>
    </>
  );
}

export default App;
