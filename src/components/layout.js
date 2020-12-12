import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import { Navbar } from "./globals/navbar/navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <GlobalStyle />
      {children}
    </>
  )
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
