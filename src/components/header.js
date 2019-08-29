import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#1CCCBD`,
      marginBottom: `1.45rem`,
      borderBottom: `2px solid #04080F`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontFamily: `Oswald`,
            fontWeight: `bold`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Link className="header-buttons"
        to="/about/"
        style={{
          textDecoration: `none`
        }}
      >ABOUT</Link>
      <Link className="header-buttons"
        to="/"
        style={{
          textDecoration: `none`
        }}
      >CLIENTS</Link>
      <Link className="header-buttons"
        to="/"
        style={{
          textDecoration: `none`
        }}
      >GEAR</Link>
      <Link className="header-buttons"
        to="/"
        style={{
          textDecoration: `none`
        }}
      >EVENTS</Link>
      <Link className="header-buttons"
        to="/contact/"
        style={{
          textDecoration: `none`
        }}
      >CONTACT</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
