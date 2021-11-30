import "./members.scss"
import * as React from "react"
import PropTypes from "prop-types"
import MemberCard from "../Membercard/membercard.js"
import daniel from "../../images/daniel.jpg"
import neus from "../../images/neus.jpg"
import marc from "../../images/marc.jpg"
import natalia from "../../images/natalia.jpg"
import roger from "../../images/roger.jpg"

const Members = () => (
    <section className="members" id="members">
        <p className="page-number">03</p>
        <h2 className="members-title">Membres</h2>
        <div className="members-container">
          <MemberCard name="Daniel Folqué" role="Contratenor" imgid={daniel}></MemberCard>
          <MemberCard name="Neus Llorens" role="Soprano" imgid={neus} girl="true"></MemberCard>
          <MemberCard name="Marc Garcia" role="Tenor" imgid={marc}></MemberCard>
          <MemberCard name="Natàlia Sánchez" role="Soprano" imgid={natalia} girl="true"></MemberCard>
          <MemberCard name="Roger Casanova" role="Baix" imgid={roger}></MemberCard>
        </div>
    </section>
)
 

Members.propTypes = {
  siteTitle: PropTypes.string,
}

Members.defaultProps = {
  siteTitle: ``,
}

export default Members