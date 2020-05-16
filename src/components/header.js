import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `1 auto`,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
      }}
    >
      <h1 style={{margin: 0, float: 'left' }}>
        <Link
          to="/"
          style={{
            color: `rebecapurple`,
            textDecoration: `none`,
            
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h1>
        Hey
      </h1>
      <h1>
        hey
      </h1>
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
