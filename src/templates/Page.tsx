import React from 'react'
import { graphql } from 'gatsby'
import RichText from '../utils/richText'
import Layout from '../components/layout'
import SliceZone from '../components/sliceZone'

// we're expecting a page ID param that we can include in here
// This page is handled in the gatsby-config file
export const pageQuery = graphql`
    query Page($id: String) {
        prismic {
            allPages(id: $id) {
                edges {
                    node {
                        page_title
                        content
                        _linkType
                        _meta {
                            uid
                            id
                        }
                        body {
                            ... on PRISMIC_PageBodyCall_to_action_grid {
                                type
                                label
                                fields {
                                    button_destination {
                                        ... on PRISMIC_Contact {
                                            _meta {
                                                uid
                                            }
                                        }
                                    }
                                    button_label
                                    call_to_action_content
                                    call_to_action_title
                                    featured_image
                                }
                                primary {
                                    section_title
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

const Page = ({
    data: {
        prismic: {
            allPages: { edges },
        },
    },
}: {
    data: GatsbyTypes.PageQuery
}) => {
    return (
        <Layout>
            <div className="container">
                {edges ? (
                    <>
                        <RichText render={edges[0]?.node.page_title} />
                        <hr />
                        <RichText render={edges[0]?.node.content} />
                        <hr />
                        {edges[0]?.node.body && (
                            <SliceZone body={edges[0]?.node.body} />
                        )}
                    </>
                ) : (
                    <h1>Nothing</h1>
                )}
            </div>
        </Layout>
    )
}

export default Page
