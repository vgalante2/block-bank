import React, {useState} from "react";
import { Link } from "react-router-dom";



function Navbar() {
    const [mobile, setMobile] = useState(false);
    const [sticky, setSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 150) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      };
    
      window.addEventListener("scroll", handleScroll);
    
      const goTop = () => {
        window.scrollTo({
          top: (0, 0),
          behavior: "smooth",
        });
      };
   
   
    const openMobile = () => {
        setMobile(!mobile);
    }
    
    <img src="BBlogo.png" alt="logo" className="logo" />
    
    return (
        <>
       <nav className={sticky ? "sticky-nav" : ""}>
        <div className="navbar">
          <Link to="/">
          <img onClick={goTop} src="BBlogo.png" alt="logo" className="logo" />
          </Link>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#market">Market</a>
            </li>
            <li>
              <a href="#choose-us">Choose Us</a>
            </li>
            <li>
              <a href="#join">Join</a>
            </li>
          </ul>
          <span>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-twitter fa-2x"></i>
</a>
<a href="https://discord.com" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-discord fa-2x"></i>
</a>
            {/* mobile */}
            <i
              onClick={openMobile}
              className="fa-solid fa-bars-staggered hamburger-menu"
            ></i>
          </span>
        </div>
      </nav>
    
    
    {/* mobile nav */}
    <div className={`mobile-nav ${mobile ? "mobile-up" : ""}`}>
    <i onClick={openMobile} className="fa-solid fa-xmark close-mobile"></i>
    <ul>
      <li onClick={openMobile}>
        <a href="/">Home</a>
      </li>
      <li onClick={openMobile}>
        <a href="#market">Market</a>
      </li>
      <li onClick={openMobile}>
        <a href="#choose-us">Choose Us</a>
      </li>
      <li onClick={openMobile}>
        <a href="#join">Join</a>
      </li>
    </ul>
  </div>
    </>
    );
}

export default Navbar;