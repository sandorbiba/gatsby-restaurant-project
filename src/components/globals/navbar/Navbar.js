import React, { useState } from "react"
import { NavbarHeader } from "./NavbarHeader"
import { NavbarIcons } from "./NavbarIcons"
import { NavbarLinks } from "./NavbarLinks"
import styled from "styled-components"

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleNavbar = () => {
    setNavbarOpen(() => !navbarOpen)
  }

  return (
    <NavWraper>
      <NavbarHeader handleNavbar={handleNavbar} />
      <NavbarLinks navbarOpen={navbarOpen} />
      <NavbarIcons />
    </NavWraper>
  )
}

const NavWraper = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    align-item: center;
  }
`
