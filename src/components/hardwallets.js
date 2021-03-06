import React from "react";
import coldcard from "../images/coldcard.jpg";
import ledger from "../images/ledger.jpg";
import trezor from "../images/trezor.jpg";

export default function HardWallets() {
  const [initial, setInitial] = React.useState(true);

  function handleOnClick() {
    setInitial(false);
  }

  if (initial === true) {
    return (
      <div className="cardintro" id="hwallet">
        <button
          id="hardwarewallets"
          type="button"
          name="hardwarewallets"
          onClick={handleOnClick}
        >
          Hardware Wallets
        </button>
      </div>
    );
  } else {
    return (
      <div className="cardclick" id="hwallet">
        <h2>Hardware Wallets</h2>
        <h3>Secure your bitcoin</h3>
        <div className="box">
          <h4>
            <a
              href="https://coldcardwallet.com/"
              target="_blank"
              rel="noreferrer"
            >
              Coldcard
            </a>
          </h4>
          <img src={coldcard} alt="Coldcard logo" />
          <p>
            The most trusted hardware wallet on the market because it is the
            most verifiable. This is the hardcore bitcoiners hardware wallet.
          </p>
        </div>

        <div className="box">
          <h4>
            <a href="https://www.ledger.com/" target="_blank" rel="noreferrer">
              Ledger
            </a>
          </h4>
          <img src={ledger} alt="Ledger logo" />
          <p>
            Likely the easiest to use hardware wallet on the market. An
            important note - Ledger's database was hacked and personal details
            of customers were leaked online. This may be enough to deter some
            people from choosing them.
          </p>
        </div>

        <div className="box">
          <h4>
            <a href="https://trezor.io/" target="_blank" rel="noreferrer">
              Trezor
            </a>
          </h4>
          <img src={trezor} alt="Trezor logo" />
          <p>
            The original bitcoin hardware wallet, another solid option for your
            cold storage device.
          </p>
        </div>
      </div>
    );
  }
}
