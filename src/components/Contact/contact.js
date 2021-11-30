import "./contact.scss"
import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Contact = () => (
    <section className="contact" id="contact">
      <p className="page-number">04</p>
      <div className="contact-container">
        <div className="contact-container-image">
          <StaticImage src="../../images/contact.jpg" className="contact-image" alt="La banda" />
          <p><Link to="#home" className="goup-btn">Torna amunt</Link></p>
        </div>
        <div className="contact-container-form">
          <h3 className="form-title">Formulari de contacte</h3>
          <form method="post" action="#">
            <div className="form-row">
              <label className="form-label">Nom</label>
              <input className="input-space" type="text" name="name" id="name" placeholder="Quintet Indora" />
            </div>
            <div className="form-row">
              <label className="form-label">Email</label>
              <input className="input-space" type="email" name="email" id="email" placeholder="quintetindora@gmail.com" />
            </div>
            <div className="form-row">
              <label className="form-label">Missatge</label>
              <textarea className="input-space" name="message" id="message" rows="3" placeholder="Escriu aquí el teu missatge..."/>
            </div>
            <button type="submit" className="btn-submit">Envia</button>
          </form>
        </div>
      </div>
    </section>
)

Contact.propTypes = {
  siteTitle: PropTypes.string,
}

Contact.defaultProps = {
  siteTitle: ``,
}

export default Contact