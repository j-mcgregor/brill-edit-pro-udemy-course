import React from 'react'

export interface TextAreaInputProps {
    placeholder: string
    label?: string
    name: string
    required: boolean
}

const TextAreaInput = ({
    placeholder,
    label,
    name,
    required,
}: TextAreaInputProps) => (
    <div className="form-group">
        {label && <label>{label}</label>}
        <textarea
            placeholder={placeholder}
            className="form-control"
            name={name}
            required={required}
        ></textarea>
    </div>
)

export default TextAreaInput
