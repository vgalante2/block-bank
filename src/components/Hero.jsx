import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function Hero(){

  const [data, setData] = useState([]);
const [coinsLoad, setCoinsLoad] = useState(true);

const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false
`;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error!");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };
  fetchData();
} , [url]);




return (
    <section id="home" className="heroSection"> 
    <div className="container">
   <div className="heroContent">
   <div className="heroContentText"> 
    <img className="ripple" src="ripple.png" alt="floating-el" />
    <h1>
                WHERE BLOCKCHAIN MEETS BANKING
                <br /> <span>REVOLUTIONIZING FINANCE</span>
              </h1>
              <img className="eth" src="eth.png" alt="floating-el" />
    </div>
    
    {/* mobile btn */}
    <a className="mobile-btn-hero" href="#market">
              See Prices <i className="fa-solid fa-angle-down"></i>
            </a>

            <div onLoad={() => setCoinsLoad(false)} className="coin-slider">
              {coinsLoad && <span className="loader"></span>}
              {data.map((item) => (
                <Link
                  to={`/coin/${item.id}`}
                  key={item.id}
                  className="slider-coin"
                >
                  <img src={item?.image} alt={item?.name} />
                  <p className="slider-coin__name">
                    {item?.name}{" "}
                    <span
                      className={
                        "slider-coin__price " +
                        (item.price_change_percentage_24h <= 0
                          ? "red-text"
                          : "green-text")
                      }
                    >
                      {item?.price_change_percentage_24h?.toFixed(2) + "%"}
                    </span>
                  </p>
                  <p className="slider-coin__price">
                    {"$ " + numberWithCommas(item.current_price?.toFixed(2))}
                  </p>
                </Link>
              ))}
            </div>
          </div>
         </div>
    </section>
)

}


export default Hero;