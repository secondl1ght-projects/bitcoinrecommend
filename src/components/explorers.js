import React from "react";
import mempool from "../images/mempool.jpg";
import samourai from "../images/samourai.png";

export default function Explorers() {
  const [initial, setInitial] = React.useState(true);

  function handleOnClick() {
    setInitial(false);
  }

  if (initial === true) {
    return (
      <div class="cardintro" id='blocks'>
        <button
          id="explorers"
          type="button"
          name="explorers"
          onClick={handleOnClick}
        >
          Block Explorers
        </button>
      </div>
    );
  } else {
    return (
      <div class="cardclick" id='blocks'>
        <h2>Block Explorers</h2>
        <h3>The blockchain, visualized.</h3>
        <div class="box">
          <h4>
            <a href="https://mempool.space/" target="_blank" rel="noreferrer">
              mempool.space
            </a>
          </h4>
          <img src={mempool} alt="Mempool logo" />
          <p>
            Probably the most popular blockchain explorer, and for good reason.
            mempool.space offers excellent statistics paired with sharp visuals
            to enable you to explore the entire blockchain.
          </p>
        </div>
        <br />
        <div class="box">
          <h4>
            <a href="https://oxt.me/" target="_blank" rel="noreferrer">
              OXT
            </a>
          </h4>
          <img src={samourai} alt="OXT logo" />
          <p>
            Brought to you by the Samourai crew, this blockchain explorer will
            be extra useful if you are looking to analyze privacy on-chain. You
            can view detailed data on CoinJoin transactions and more.
          </p>
        </div>
      </div>
    );
  }
}
