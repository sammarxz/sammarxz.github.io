import React from "react"
import PropTypes from "prop-types"

import Reset from "./styles/reset"
import Root from "./styles/root"
import Typography from "./styles/typography"

export const Layout = ({ children }) => (
  <>
    <Reset />
    <Root />
    <Typography />
    { children }
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout