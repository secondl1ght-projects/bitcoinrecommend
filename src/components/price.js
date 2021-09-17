import React from "react";
import moonitor from "../images/moonitor.jpg";
import cmc from "../images/cmc.jpg";

export default function Price() {
  const [initial, setInitial] = React.useState(true);

  function handleOnClick() {
    setInitial(false);
  }

  if (initial === true) {
    return (
      <div class="cardintro" id='chart'>
        <button id="price" type="button" name="price" onClick={handleOnClick}>
          Price Tracking
        </button>
      </div>
    );
  } else {
    return (
      <div class="cardclick" id='chart'>
        <h2>Price Tracking</h2>
        <h3>Check in on charts and price action</h3>
        <div class="box">
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
        <br />
        <div class="box">
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
      </div>
    );
  }
}
