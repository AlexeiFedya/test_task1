import React, {useState} from 'react';

import { ValidateName } from '../validate/validate'
import './form.scss'

export const Form = () => {
    const [input, setInput] = useState({
        name: ""
    })

    const onChangeInput = (e) => {
        setInput({
            // ...input,
            [e.target.name]: e.target.value.trim()
        });
    }

    const validName = ValidateName(input.name);
    const {name} = input;

    return (
        <form className="form-contact">
            <div className="form-contact__group">
                <input 
                    type="text" 
                    className={`form-contact__group__input${validName ? "" : " error"}`}
                    name="name"
                    value={name}
                    id="name_input" 
                    placeholder="Name"
                    onChange={onChangeInput}
                    />
                <label
                    htmlFor="name_input"
                    className="form-contact__group__label">Name</label>
            </div>
                
                <button 
                    type="submit" 
                    className="form-contact__group__button"
                    disabled={name === "" || !validName}
                    onClick={(e) => e.preventDefault()}
                >Submit</button>
        </form>
    )
}