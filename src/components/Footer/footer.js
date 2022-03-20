import "./footer.scss"
import * as React from "react"
import PropTypes from "prop-types"
import InstaIcon from "../../images/insta.svg"
import FbIcon from "../../images/fb.svg"
import EmailIcon from "../../images/email.svg"
import YoutubeIcon from "../../images/Youtube.svg"
import { Link } from "gatsby"

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="footer-links-box">
      <h5>xarxes</h5>
      <ul className="footer-links">
        <li className="footer-link">
          <a
            href="https://www.instagram.com/indoraquintet/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: `none`,
            }}
          >
            <InstaIcon />
          </a>
        </li>
        <li className="footer-link">
          <a
            href="https://www.youtube.com/channel/UC4tKCOt21fXYnSsgdH7b3qg"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: `none`,
            }}
          >
            <YoutubeIcon />
          </a>
        </li>
        <li className="footer-link">
          <a
            href="https://www.facebook.com/indoraquintet"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: `none`,
            }}
          >
            <FbIcon />
          </a>
        </li>
        <li className="footer-link">
          <a
            href="mailto:quintetindora@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: `none`,
            }}
          >
            <EmailIcon />
          </a>
        </li>
      </ul>
      <p className="footer-credits">
        Designed and developed by
        <Link
          to="https://www.heyitssilvia.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="silsc"
          style={{
            textDecoration: `none`,
          }}
        >
          {" Silvia Salat"}
        </Link>
      </p>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
