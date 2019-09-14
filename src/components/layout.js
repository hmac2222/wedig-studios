/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="background-div"></div>
      <div
        className="main-div"
        style={{
          margin: `0 auto 30px auto`,
          maxWidth: 1024,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >

        {/* COMMENT OUT LINE BELOW TO ACTIVATE SITE */}
        <main>{children}</main>
        {/* <main><h2 className="make-music">Coming Soon</h2></main> */}
        <footer style={{ fontFamily: `Oswald`, color: `rgba(255,255,255,80%)` }}>
          © {new Date().getFullYear()} WEDIG STUDIOS
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
