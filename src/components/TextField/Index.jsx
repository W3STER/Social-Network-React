import React from 'react'
import { withHandleChange } from './withHandleChange'
import '../../index.css'
import './textField.css'
import { withUserChange } from './withUserChange'
import { withDirty } from './withDirty'

export const TextFieldView = props => {
    const inputId = `${props.name}_id`
    const errorStyle = props.error ? "_error" : ""
    return (
        <div className={props.className}>

            {props.label &&
                <label
                    className="input-label"
                    htmlFor={inputId}
                >{props.label}</label>
            }

            <input
                className={`input-field _${props.name} ${errorStyle}`}
                value={props.value}
                placeholder={props.placeholder}
                id={inputId}
                name={props.name}
                type={props.type}
                onChange={props.onChange}
            />
            {props.error &&
                <div
                    className="error-message"
                >{props.error}</div>
            }
        </div>
    )
}

export const PostTextField = withDirty(withHandleChange(TextFieldView))
export const EditTextField = withDirty(withUserChange(TextFieldView))

