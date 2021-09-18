import React from "react";
import moonitor from "../images/moonitor.jpg";
import cmc from "../images/cmc.jpg";
import infinite from "../images/infinite.svg";
import fiat from "../images/fiat.png";

export default function Price() {
  const [initial, setInitial] = React.useState(true);

  function handleOnClick() {
    setInitial(false);
  }

  if (initial === true) {
    return (
      <div className="cardintro" id="chart">
        <button id="price" type="button" name="price" onClick={handleOnClick}>
          Price Tracking
        </button>
      </div>
    );
  } else {
    return (
      <div className="cardclick" id="chart">
        <h2>Price Tracking</h2>
        <h3>Check in on charts and price action</h3>
        <div className="box">
          <h4>
            <a href="https://moonitor.io/" target="_blank" rel="noreferrer">
              Moonitor
            </a>
          </h4>
          <img src={moonitor} alt="Moonitor logo" />
          <p>
            A desktop app for portfolio tracking with a nice interface. This is
            a paid option - but well worth it and you will support a dev.
          </p>
        </div>

        <div className="box">
          <h4>
            <a
              href="https://coinmarketcap.com/"
              target="_blank"
              rel="noreferrer"
            >
              CoinMarketCap
            </a>
          </h4>
          <img src={cmc} alt="CMC logo" />
          <p>
            Probably the most popular website for price data and charts. Until I
            am aware of a bitcoin-only site like this, i'll keep using it.
          </p>
        </div>

        <div className="box">
          <h4>
            <a href="https://8marketcap.com/" target="_blank" rel="noreferrer">
              Infinite Market Cap
            </a>
          </h4>
          <img src={infinite} alt="Infinite logo" id="notcircle" />
          <p>
            Watch as bitcoin overtakes the worlds largest market caps like gold
            and S&P 500 companies.
          </p>
        </div>

        <div className="box">
          <h4>
            <a
              href="https://www.fiatmarketcap.com/"
              target="_blank"
              rel="noreferrer"
            >
              Fiat Market Cap
            </a>
          </h4>
          <img src={fiat} alt="Fiat Market Cap logo" id="notcircle" />
          <p>
            Watch as bitcoin overtakes the worlds largest fiat market caps like
            USD and the Euro.
          </p>
        </div>
      </div>
    );
  }
}
