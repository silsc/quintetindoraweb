import "./concertssection.scss"
import * as React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Concerts = () => (
    <section className="concerts" id="concerts">
        <p className="page-number">02</p>
        <div className="concerts1-container">
          <StaticImage 
          src="../../images/concerts1.jpg" 
          style={{
            height: '30vw',
            width: '27vw',
            objectFit: 'cover',
          }} 
          alt="Partitura" />
        </div>
        <div className="concerts2-container">
          <h1 className="concerts-title">Concerts</h1>
          <div className="concerts2-content-container">
            <div className="nextconcerts-list">
            <StaticQuery
              query={graphql`
              query {
                allStrapiConcert(sort: {order: ASC, fields: fechayhora}, limit: 2) {
                  edges {
                    node {
                      nombre
                      lugar
                      fechayhora(formatString: "DD/MM/YY, HH:MM")
                    }
                  }
                }
              }
              `}
              render={(data) => (
                <div className="nextconcert-container">
                  {data.allStrapiConcert.edges.map((concert, i) => ( 
                    <div className="nextconcert">
                    <p className="6">{concert.node.nombre}</p>
                    <p className="concert-info">{concert.node.lugar}
                    <br />{concert.node.fechayhora}h</p>
                    </div>
                  ))}
               </div>
              )}
            />
            </div>
            <div className="allconcertslink-container">
              <StaticImage 
                src="../../images/concerts2.jpg" 
                className="allconcertslink-img" 
                alt="Flor"/>
                <p>
                  <Link to="/concerts/" className="allconcerts-btn" style={{
                  textDecoration: `none`,
                  }}>
                    Veura tots els concerts
                  </Link>
                </p>
            </div>
          </div>
        </div>
    </section>
)

Concerts.propTypes = {
  siteTitle: PropTypes.string,
}

Concerts.defaultProps = {
  siteTitle: ``,
}

export default Concerts