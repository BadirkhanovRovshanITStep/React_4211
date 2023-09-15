import { createContext, useEffect, useState } from 'react';
import './Form.css'
import FormInputTypeText from './Inputs/FormInputTypeText/FormInputTypeText';

export const FormValidationContext = createContext(null);

function Form() {
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        console.log([...formData.entries()]);
    }

    const [invalidInputsCount, setInvalidInputsCount] = useState(0);

    useEffect(() => {
        console.log(invalidInputsCount === 0 ? 'Form is valid' : 'Form is invalid');
    }, [invalidInputsCount])

    return (
        <FormValidationContext.Provider value={{
            invalidInputsCount,
            setInvalidInputsCount
        }}>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Full Name</legend>

                    <FormInputTypeText
                        labelName={'Name:'}
                        placeholder={'Name'}
                        pattern={'\\w{3,10}'}
                        name={'name'}

                    />

                    <FormInputTypeText
                        labelName={'Surname:'}
                        placeholder={'Surname'}
                        pattern={'\\w{3,10}'}
                        name={'surname'}
                    />

                    <FormInputTypeText
                        labelName={'Middle name:'}
                        placeholder={'Middle name'}
                        pattern={'\\w{3,10}'}
                        name={'middle-name'}
                    />

                    <button>Submit</button>
                </fieldset>
            </form>
        </FormValidationContext.Provider>
    )
}

export default Form;