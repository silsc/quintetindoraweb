import "./header.scss"
import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Menu from "../Menu/menu"

const Header = ({ siteTitle }) => (
<header>
  <Menu></Menu>
  <div className="header-text-container">
    <h2 className="header-text">
      <Link
            to="/"
            className="header-text-link"
      >
            {siteTitle}
      </Link>
    </h2>
    <h3 className="subheader">Barcelona, des de 2018</h3>
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
