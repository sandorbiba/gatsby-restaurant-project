import React from "react"
import { NavbarHeader } from "./NavbarHeader"
import { NavbarIcons } from "./NavbarIcons"
import { NavbarLinks } from "./NavbarLinks"

export const Navbar = () => {
  return (
    <nav>
      <NavbarHeader />
      <NavbarLinks />
      <NavbarIcons />
    </nav>
  )
}
