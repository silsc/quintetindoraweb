import "./membercard.scss"
import * as React from "react"
import PropTypes from "prop-types"

const MemberCard = (props) => (
    <div className={"member-card " + (props.girl ? 'girl' : 'boy')} style={{ 
      backgroundImage: `url('${props.imgid}')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
        <p className="member-info">{props.name}</p>
        <p className="member-info role">{props.role}</p>
    </div>
)

MemberCard.propTypes = {
  siteTitle: PropTypes.string,
}

MemberCard.defaultProps = {
  siteTitle: ``,
}

export default MemberCard