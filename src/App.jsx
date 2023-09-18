import './App.css';
import Border from './Components/Border/Border';
import Paragraph from './Components/Paragraph/Paragraph';
import Image from './Components/Image/Image';
import Div from './Components/Div/Div';
import Button from './Components/Button/Button';
import Form from './Components/Form/Form';
import DivWithButton from './Components/DivWithButton/DivWithButton';
import InputTypeText from './Components/Inputs/InputTypeText/InputTypeText';
import { createContext, useEffect, useReducer, useState } from 'react';

export const ThemeContext = createContext(null);
export const ThemeToggleContext = createContext(null);

function App() {
  const inputsData = [
    {
      label: 'Name:',
      defaultText: 'Name',
      regexp: '\\w{3,10}',
      name: 'name',
    },
    {
      label: 'Surname:',
      defaultText: 'Surname',
      regexp: '\\w{3,10}',
      name: 'surname',
    },
    {
      label: 'Middle name:',
      defaultText: 'Middle name',
      regexp: '\\w{3,10}',
      name: 'middle-name',
    },
    {
      label: 'Middle name:',
      // defaultText: 'Middle name',
      regexp: '\\w{3,10}',
      name: 'middle-name',
    },
  ];

  return (
    <>
      <Form inputsData={inputsData}></Form>
    </>
  );
}

export default App;
