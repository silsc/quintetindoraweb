import "./home.scss"
import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"

const Home = () => (
  <section className="home" id="home">
    <p className="page-number">01</p>
    <div className="home-container">
      <div className="grid-child grid-title">
        <h1 className="title title-l1">Música</h1>
        <h1 className="title title-l2">antiga</h1>
      </div>
      <div className="grid-child grid-img">
        <StaticImage
          src="../../images/home.jpg"
          className="home-img"
          alt="La banda"
        />
      </div>
      <div className="grid-child grid-text">
        <div className="grid-textbox-1">
          <p>
            Formació a capella dedicada a l'estudi i interpretació de la música
            antiga de tombants dels segles XVI i XVII.
          </p>
        </div>
        <div className="grid-textbox-2">
          <p>
            Ens proposem acostar el nostre repertori al públic. Acompanyant la
            música de la recitació dels poemes i contextualització de les obres
            volem fer arribar el missatge o la imatge que evoquen les cançons i
            madrigals, on la paraula porta a la música.{" "}
          </p>
          <p className="signature">Quintet Indora</p>
        </div>
      </div>
    </div>
  </section>
)

Home.propTypes = {
  siteTitle: PropTypes.string,
}

Home.defaultProps = {
  siteTitle: ``,
}

export default Home
