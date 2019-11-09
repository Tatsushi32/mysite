import PropTypes from "prop-types"
import React from "react"
import "../styles/header.scss"

const Header = ({ siteTitle, profileImage, profileDescription }) => (
  <header>
    <div className="header-div">
      {profileImage}
      <div>
        <h1 classNmae="maintitle" style={{ margin: 0, color: `white` }}>
          {siteTitle}
        </h1>
        <p className="pfofile-description" style={{
              color: `white`,
              textDecoration: `none`,
            }}>{profileDescription}</p>
      </div>
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
