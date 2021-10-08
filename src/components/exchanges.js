import React from "react";
import bisq from "../images/bisq.jpg";
import kraken from "../images/kraken.jpg";
import newton from "../images/newton.png";
import tradeogre from "../images/tradeogre.jpg";
import shake from "../images/shake.jpg";

export default function Exchanges() {
  const [initial, setInitial] = React.useState(true);

  function handleOnClick() {
    setInitial(false);
  }

  if (initial === true) {
    return (
      <div className="cardintro" id="exchange">
        <button
          id="exchanges"
          type="button"
          name="exchanges"
          onClick={handleOnClick}
        >
          Exchanges
        </button>
      </div>
    );
  } else {
    return (
      <div className="cardclick" id="exchange">
        <h2>Bitcoin Exchanges</h2>
        <h3>Buy (and maybe sell) bitcoin</h3>
        <div className="box">
          <h4>
            <a href="https://bisq.network/" target="_blank" rel="noreferrer">
              Bisq
            </a>
          </h4>
          <img src={bisq} alt="Bisq logo" />
          <p>
            Bisq is a peer 2 peer, decentralized bitcoin exchange. There are no
            trusted third parties, your keys are always in your control. Trust
            is not needed in your trading partner either as all trades have
            security deposits locked in multi-sig until the trade is finalized.
            No permission and no KYC is required, this is one of the most
            cypherpunk ways to acquire bitcoin, next to getting paid in it.
          </p>
        </div>

        <div className="box">
          <h4>
            <a href="https://www.kraken.com/" target="_blank" rel="noreferrer">
              Kraken
            </a>
          </h4>
          <img src={kraken} alt="Kraken logo" />
          <p>
            Headed by OG bitcoiner Jesse Powell, after Mt. Gox went down Jesse
            saw a need for a better option for bitcoiners. Kraken has an
            immaculate security record, never having been hacked. They are a
            true bitcoiner company and in it for the right reasons. If you are
            OK with KYC, then I think they are the best international exchange
            option.
          </p>
        </div>

        <div className="box">
          <h4>
            <a
              href="https://www.shakepay.com/"
              target="_blank"
              rel="noreferrer"
            >
              Shakepay
            </a>
          </h4>
          <img src={shake} alt="Shakepay logo" />
          <p>
            A great Canadian exchange option is Shakepay. They feel like a
            bitcoin-only company even though they offer one other altcoin. You
            can buy bitcoin via e-transfer and withdraw to cold storage in
            minutes. You can even shake your phone to receive sats back. They
            also have recently launched a 1% bitcoin back credit card if you
            want to earn even more sats.
          </p>
        </div>

        <div className="box">
          <h4>
            <a href="https://www.newton.co/" target="_blank" rel="noreferrer">
              Newton
            </a>
          </h4>
          <img src={newton} alt="Newton logo" />
          <p>
            If you are located in Canada, then Newton is a great option. I would
            call them the Kraken of Canada, which is a big compliment. Also
            headed by a CEO who understands bitcoin's mission. Newton offers the
            best UI/UX in Canada and quite possibly in the entire exchange
            industry.
          </p>
        </div>

        <div className="box">
          <h4>
            <a href="https://tradeogre.com/" target="_blank" rel="noreferrer">
              TradeOgre
            </a>
          </h4>
          <img src={tradeogre} alt="TradeOgre logo" />
          <p>
            Have some altcoins or shitcoins you want to exchange for BTC?
            TradeOgre has you covered with an easy signup process and no KYC.
          </p>
        </div>
      </div>
    );
  }
}
