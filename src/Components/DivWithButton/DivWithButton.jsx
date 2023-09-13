import { useContext } from 'react';
import Button from '../Button/Button';
import { ThemeContext, ThemeToggleContext } from '../../App';

function DivWithButton() {
    const theme = useContext(ThemeContext);
    const toggleTheme = useContext(ThemeToggleContext);

  return (
    <div>
        <Button
            clickHandler={
                () => toggleTheme(
                    theme === 'light' ? 'dark' : 'light'
                )
            }
        >
            Click me
        </Button>
    </div>
  );
}

export default DivWithButton;
