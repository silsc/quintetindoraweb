import "./menu.scss"
import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const MenuIcon = styled.button`
  p {
    display: ${({nav}) => nav ? "none" : "flex"};
  }
  div{
    position: fixed;
    top: 5vh;
    right: 3vw;
    width: 20px;
    height: 2px;
    background: black;
    transform-origin: 10px;
    display: ${({nav}) => nav ? "flex" : "none"};
    :nth-child(2) {
      transform: rotate(45deg);
    }
    :nth-child(3) {
      
      transform: rotate(-45deg);
    }
  }
`
const MenuLinks = styled.nav`
  transition: transform 300ms;
  transform: ${({nav}) => nav ? "translateX(0)" : "translateX(100%)"};
`

const Menu = () => {
  const [ nav, showNav ] = useState(false)

  return (
  <div className="menu">
    <MenuIcon className="menu-btn" nav={nav} onClick={() => showNav(!nav)} >
      <p className="menu-text">menu</p>
      <div />
      <div />
    </MenuIcon>
    <MenuLinks className="menu-nav" nav={nav} onClick={() => showNav(!nav)}>
      <StaticImage 
        src="../../images/logo.png" 
        className="menu-logo" 
        alt="Logo" 
        imgStyle={{
          objectFit: "contain",
        }}
      />
      <ul>
        <div className="menu-link-container">
          <StaticImage src="../../images/menu-home.jpg" className="menu-link-image" alt="La banda" />
          <div className="menu-link-info">
            <Link
              to="../#home"
              name="home"
              className="menu-link"
            ><li>Sobre Nosaltres</li></Link>
            <p className="menu-link-text">Qui som? Coneix-nos una mica més</p>
          </div>
        </div>
        <div className="menu-link-container">
          <StaticImage src="../../images/menu-concerts.jpg" className="menu-link-image" alt="La banda" />
          <div className="menu-link-info">
          <Link
            to="../#concerts"
            className="menu-link"
            ><li>Concerts</li></Link>
            <p className="menu-link-text">Els nostres concerts, futurs i passats</p>
          </div>
        </div>
        <div className="menu-link-container">
          <StaticImage src="../../images/menu-members.jpg" className="menu-link-image" alt="Partitura" />
          <div className="menu-link-info">
          <Link
            to="../#members"
            className="menu-link"
            ><li>Membres</li></Link>
            <p className="menu-link-text">Els nostres concerts, futurs i passats</p>
          </div>
        </div>
        <div className="menu-link-container">
          <StaticImage src="../../images/menu-contact.jpg" className="menu-link-image" alt="Manos" />
          <div className="menu-link-info">
          <Link
            to="../#contact"
            className="menu-link"
            ><li>Contacte</li></Link>
            <p className="menu-link-text">Envia'ns un missatge</p>
          </div>
        </div>
      </ul>
    </MenuLinks>
  </div>
  )
}

export default Menu