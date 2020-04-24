import React from 'react'

export interface TextInputProps {
    type: string
    placeholder: string
    label?: string
    name: string
    required: boolean
    value: string
    onChange(e: React.FormEvent<HTMLInputElement>): void
}

const TextInput = ({
    type,
    placeholder,
    label,
    name,
    required,
    value,
    onChange,
}: TextInputProps) => (
    <div className="form-group">
        {label && <label>{label}</label>}
        <input
            type={type}
            placeholder={placeholder}
            className="form-control"
            name={name}
            required={required}
            value={value}
            onChange={onChange}
        />
    </div>
)

export default TextInput
