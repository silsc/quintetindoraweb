import "./allconcerts.scss"
import * as React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"

const Allconcerts = ({ }) => (
    <section className="allconcerts-section-container">
      <h2 className="allconcerts-title">Concerts</h2>
        <StaticQuery
          query={graphql`
          query {
            allStrapiConcert(sort: {order: ASC, fields: fechayhora}) {
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
            <div className="allconcerts-content-container">
              {data.allStrapiConcert.edges.map((concert, i) => ( 
                <div className="concert-container">
                <p className="concert-name">{concert.node.nombre}</p>
                <p className="concert-info">{concert.node.lugar}
                <br />{concert.node.fechayhora}h</p>
                </div>
              ))}
             </div>
          )}
        />
      <p><Link to="/" className="goback-btn">Tornar</Link></p>
   </section>
)

Allconcerts.propTypes = {
  siteTitle: PropTypes.string,
}

Allconcerts.defaultProps = {
  siteTitle: ``,
}

export default Allconcerts