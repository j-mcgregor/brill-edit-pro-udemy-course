import React from 'react'

export interface TextAreaInputProps {
    placeholder: string
    label?: string
    name: string
    required: boolean
    value: string
    onChange(e: React.FormEvent<HTMLTextAreaElement>): void
}

const TextAreaInput = ({
    placeholder,
    label,
    name,
    required,
    value,
    onChange,
}: TextAreaInputProps) => (
    <div className="form-group">
        {label && <label>{label}</label>}
        <textarea
            placeholder={placeholder}
            className="form-control"
            name={name}
            required={required}
            value={value}
            onChange={onChange}
        ></textarea>
    </div>
)

export default TextAreaInput
