import React from 'react'
import footer_logo from "../Assets/Frontend_Assets/logo_big.png";
import insta_image from "../Assets/Frontend_Assets/instagram_icon.png"
import pintester_icon from "../Assets/Frontend_Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/Frontend_Assets/whatsapp_icon.png"
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footer_logo} alt=""/>
        <p>SHOPPER</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
            <img src={insta_image} alt=""/>
        </div>
        <div className="footer-icon-container">
            <img src={pintester_icon} alt=""/>
        </div>
        <div className="footer-icon-container">
            <img src={whatsapp_icon} alt=""/>
        </div>
      </div>
      <div className='footer-copyright'>
        <hr/>
        <p>Copyright @ 2024 - All right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer;
