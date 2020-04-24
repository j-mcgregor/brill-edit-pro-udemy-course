import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import SliceZone from '../components/sliceZone'

export const query = graphql`
    query Hero {
        prismic {
            allHomepages {
                edges {
                    node {
                        _linkType
                        body {
                            ... on PRISMIC_HomepageBodyHero {
                                type
                                label
                                primary {
                                    hero_title
                                    hero_content
                                    background_image
                                }
                            }
                            ... on PRISMIC_HomepageBodyCall_to_action_grid {
                                type
                                primary {
                                    section_title
                                }
                                fields {
                                    button_destination {
                                        ... on PRISMIC_Page {
                                            page_title
                                            content
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
                            }
                            ... on PRISMIC_HomepageBodyPrice_list {
                                type
                                label
                                fields {
                                    price_type
                                    price_per_month
                                    price_list_title
                                    price_list_description
                                }
                                primary {
                                    title
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

const IndexPage = ({
    data: {
        prismic: {
            allHomepages: { edges },
        },
    },
}: {
    data: GatsbyTypes.HeroQuery
}) => {
    let body: any | undefined
    if (edges && edges[0] && edges[0].node.body) {
        body = edges[0].node.body
    }
    return (
        <Layout>
            <SEO title="Home" />
            {body && <SliceZone body={body} />}
        </Layout>
    )
}

export default IndexPage
