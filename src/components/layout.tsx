/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react'
import Header from './Header'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../stylesheets/main.scss'
import './Layout.scss'

const Layout: React.SFC<{}> = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}
export default Layout
