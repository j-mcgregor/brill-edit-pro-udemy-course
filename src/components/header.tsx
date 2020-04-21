import { Link, StaticQuery, graphql } from 'gatsby'
import React from 'react'
import { get } from 'lodash'
import prismicPathCreator from '../utils/prismicPathCreator'

import './Header.scss'

export const navigationQuery = graphql`
    query NavigationQuery {
        prismic {
            allNavigations {
                edges {
                    node {
                        _linkType
                        branding
                        navigation_links {
                            link {
                                ... on PRISMIC_Page {
                                    _meta {
                                        uid
                                    }
                                }
                            }
                            label
                        }
                    }
                }
            }
        }
    }
`

const Header: React.SFC = () => (
    <nav className="navbar navbar-expand-sm">
        <StaticQuery
            query={navigationQuery}
            render={(data: GatsbyTypes.NavigationQueryQuery) => {
                if (
                    data.prismic.allNavigations.edges &&
                    data.prismic.allNavigations.edges[0]?.node
                        .navigation_links &&
                    data.prismic.allNavigations.edges[0]?.node.branding
                ) {
                    const {
                        branding,
                        navigation_links,
                    } = data.prismic.allNavigations.edges[0].node

                    const links = navigation_links.map((l: any) => (
                        <li className="nav-item" key={l.link._meta.uid}>
                            <Link
                                to={`/${l.link._meta.uid}`}
                                className="nav-link"
                            >
                                {l.label}
                            </Link>
                        </li>
                    ))

                    return (
                        <div className="collapse navbar-collapse">
                            <Link className="navbar-brand" to="/">
                                {branding}
                            </Link>
                            <ul className="navbar-nav ml-auto">
                                {links ? links : null}
                            </ul>
                        </div>
                    )
                } else {
                    return <div />
                }
            }}
        />
    </nav>
)

export default Header
