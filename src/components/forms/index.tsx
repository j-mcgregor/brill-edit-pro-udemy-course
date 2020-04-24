import React from 'react'
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
    return (
        <form data-netlify="true" method="POST" name="contact">
            <input type="hidden" name="contact-form" value="contact" />
            {fields.map((f: FormFieldProps, i: number) => {
                if (f.field_type === 'text') {
                    return (
                        <TextInput
                            key={createKey(f.field_name, i)}
                            type={f.field_type}
                            placeholder={f.field_placeholder}
                            label={f.field_label}
                            name={f.field_name}
                            required={f.required}
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
                        />
                    )
                } else {
                    return null
                }
            })}
            <button className="btn btn-dark btn-lg" type="submit">
                Submit
            </button>
        </form>
    )
}

export default Form
