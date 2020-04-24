import React from 'react'

export interface TextInputProps {
    type: string
    placeholder: string
    label?: string
    name: string
    required: boolean
}

const TextInput = ({
    type,
    placeholder,
    label,
    name,
    required,
}: TextInputProps) => (
    <div className="form-group">
        {label && <label>{label}</label>}
        <input
            type={type}
            placeholder={placeholder}
            className="form-control"
            name={name}
            required={required}
        />
    </div>
)

export default TextInput
