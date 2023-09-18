import { FormValidationContext } from '../../Form';
import './FormInputTypeText.css'
import { useContext, useId, useState } from "react";

function FormInputTypeText({
    labelName,
    placeholder,
    name,
    pattern
}) {
    const inputId = useId();
    const [isValid, setIsValid] = useState(true);
    const regexp = new RegExp(`^${pattern}$`, 'i');

    const setInvalidInputsCount = useContext(FormValidationContext);

    const validateInput = (e) => {
        const value = e.target.value;

        const isValidNewState = regexp.test(value);

        setInvalidInputsCount( (prevState) => {
            if (isValid !== isValidNewState) return prevState + (isValidNewState === true ? -1 : 1);

            return prevState;
        })

        setIsValid(isValidNewState);
    }

    return (
        <div>
            <label htmlFor={inputId}>{labelName}</label>
            <input
                id={inputId}
                type="text"
                onInput={validateInput}
                placeholder={placeholder}
                name={name}
                pattern={pattern}
                data-is-valid={isValid}
            />
        </div>
    );
}

export default FormInputTypeText;