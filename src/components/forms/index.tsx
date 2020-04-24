import React, { useState } from 'react'
import createKey from '../../utils/createKey'
import TextInput from './textInput'
import TextAreaInput from './textAreaInput'

export interface FormFieldProps {
    field_name: string
    field_type: string
    field_label?: string
    field_placeholder: string
    required: boolean
}

interface FormProps {
    fields: FormFieldProps[]
}

const Form = ({ fields }: FormProps) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <form
            data-netlify="true"
            method="POST"
            name="contact"
            action="contact-success"
        >
            {fields.map((f: FormFieldProps, i: number) => {
                if (f.field_type === 'text') {
                    const [val, handleChange] =
                        f.field_name === 'First Name'
                            ? [firstName, setFirstName]
                            : f.field_name === 'Last Name'
                            ? [lastName, setLastName]
                            : ['', new Function()]
                    return (
                        <TextInput
                            key={createKey(f.field_name, i)}
                            type={f.field_type}
                            placeholder={f.field_placeholder}
                            label={f.field_label}
                            name={f.field_name}
                            required={f.required}
                            value={val}
                            onChange={(e: React.FormEvent<HTMLInputElement>) =>
                                handleChange(e.currentTarget.value)
                            }
                        />
                    )
                } else if (f.field_type === 'email') {
                    return (
                        <TextInput
                            key={createKey(f.field_name, i)}
                            type={f.field_type}
                            label={f.field_label}
                            placeholder={f.field_placeholder}
                            name={f.field_name}
                            required={f.required}
                            value={email}
                            onChange={(e: React.FormEvent<HTMLInputElement>) =>
                                setEmail(e.currentTarget.value)
                            }
                        />
                    )
                } else if (f.field_type === 'textarea') {
                    return (
                        <TextAreaInput
                            key={createKey(f.field_name, i)}
                            placeholder={f.field_placeholder}
                            label={f.field_label}
                            name={f.field_name}
                            required={f.required}
                            value={message}
                            onChange={(
                                e: React.FormEvent<HTMLTextAreaElement>
                            ) => setMessage(e.currentTarget.value)}
                        />
                    )
                } else {
                    return null
                }
            })}
            <button className="btn btn-dark btn-lg" type="submit">
                Submit
            </button>
            <input type="hidden" name="contact-form" value="contact" />
        </form>
    )
}

export default Form
