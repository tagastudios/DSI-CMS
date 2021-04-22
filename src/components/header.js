import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// VISUAL
import * as style from "../styles/header.module.css"
import { FaBars } from "@react-icons/all-files/fa/FaBars"

const Header = () => (
  <header className={style.header}>
    <div className="container">
      <Link to="/">
        <StaticImage
          src="../images/DSI-LOGO.png"
          quality={100}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="DSI Logo"
          className={style.logo}
          placeholder="blurred"
        />
      </Link>
      <nav className={style.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/#services">Services</Link>
          </li>
          <li>
            <Link to="/#whyus">Why Us?</Link>
          </li>
          <li>
            <Link to="/#testimonials">Testimonials</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
          </li>
          <li>
            <Link to="/#social">Social</Link>
          </li>
          <li>
            <FaBars className={style.menuIcon} />
          </li>
        </ul>
      </nav>
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
