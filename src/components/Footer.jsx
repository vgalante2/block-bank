import React from 'react';

function Footer() {
    return (
      <>
        <footer>
          <div className="footer-content">
            <div className="footer-content__socials">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-discord"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
            <div className="footer-content__text">
              <p>Privacy</p>
              <p>Terms of Use</p>
            </div>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;