import "./home.scss"
import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"

const Home = () => (
    <section className="home" id="home">
      <p className="page-number">01</p>
      <div className="home-container">
        <div className="grid-child grid-title">
          <h1 className="title title-l1">Musica</h1>
          <h1 className="title title-l2">antiga</h1>
        </div>
        <div className="grid-child grid-img">
          <StaticImage 
            src="../../images/home.jpg" 
            className="home-img" 
            alt="La banda" />
        </div>
        <div className="grid-child grid-text">
          <div className="grid-textbox-1">
            <p>La formació neix al 2018 dins el marc del <strong>Conservatori del Liceu</strong>, sota el mestratge de Manel Valdivieso.</p>
          </div>
          <div className="grid-textbox-2">
            <p>Des de la seva fundació ha ofert concerts al Parlament de Catalunya, al Museu Nacional d’Art de Catalunya, a la Sala Parés de Barcelona, al Foment Vilanoví i a l’Auditori Eduard Toldrà. Han estat seleccionats per participar al cicle Ressonare i al cicle Clàssica Horta-Guinardó, organitzats per l’ajuntament de Barcelona; i a festivals com el Mateu Fletxa i Musiquem Lleida. Recentment ha participat com a finalista de la 98a edició del concurs Juventudes Musicales Spain, en la categoria de música antiga. </p>
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