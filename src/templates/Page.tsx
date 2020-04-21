import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import Layout from '../components/Layout'

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
                    }
                }
            }
        }
    }
`

const Page = ({ data }: { data: GatsbyTypes.PageQuery }) => {
    return (
        <Layout>
            <div className="container">
                {data.prismic.allPages.edges ? (
                    <>
                        <RichText
                            render={
                                data.prismic.allPages.edges[0]?.node.page_title
                            }
                        />
                        <hr />
                        <RichText
                            render={
                                data.prismic.allPages.edges[0]?.node.content
                            }
                        />
                    </>
                ) : (
                    <h1>Nothing</h1>
                )}
            </div>
        </Layout>
    )
}

export default Page
