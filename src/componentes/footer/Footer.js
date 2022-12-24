import React from "react";
import "./Footer.css";
import {FaTelegram} from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h2>Jesús hijo de David te piedad de mi.</h2>
        <h6>Sagrado Corazón de Jesús</h6>
      </div>
      <div className="footer-contact">
        <h3>Ven Espíritu Santo</h3>
        <h6>Bendito Dios</h6>
      </div>
      <div className="footer-sns">
        <div className="design-by">Palaito</div>
        <div className="sns-links">
          <a href={"https://linkedin.com"} target="_blank" rel="noreferrer">
            <FaTelegram className='twitter' />
          </a>
          <a href={"https://twitter.com"} target="_blank" rel="noreferrer">
            <FaTelegram className='twitter' />
          </a>
          <a href={"https://facebook.com"} target="_blank" rel="noreferrer">
             <FaTelegram className='twitter' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;