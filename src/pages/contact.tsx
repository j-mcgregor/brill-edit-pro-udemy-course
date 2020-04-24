import React from 'react'
import { graphql } from 'gatsby'
import RichText from '../utils/richText'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Form from '../components/forms'

export const query = graphql`
    query Contact {
        prismic {
            allContacts {
                edges {
                    node {
                        form_fields {
                            field_name
                            field_type
                            required
                            field_label
                            field_placeholder
                        }
                        form_description
                        form_title
                    }
                }
            }
        }
    }
`

const Contact = ({
    data: {
        prismic: {
            allContacts: { edges },
        },
    },
}: {
    data: GatsbyTypes.ContactQuery
}) => {
    let form_fields: any
    let form_title: any
    let form_description: any

    if (edges && edges[0]) {
        if (edges[0].node.form_fields) {
            form_fields = edges[0].node.form_fields
        }
        if (edges[0].node.form_title) {
            form_title = edges[0].node.form_title
        }
        if (edges[0].node.form_description) {
            form_description = edges[0].node.form_description
        }
    }

    return (
        <Layout>
            <SEO title="Home" />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 py3">
                        {form_title && <RichText render={form_title} />}
                        {form_description && (
                            <RichText render={form_description} />
                        )}
                        {form_fields && <Form fields={form_fields} />}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact
