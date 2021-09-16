import React from "react";

export default function Lightning() {
  const [initial, setInitial] = React.useState(true);

  function handleOnClick() {
    setInitial(false);
  }

  if (initial === true) {
    return (
      <div class='cardintro'>
        <button
          id="lightning"
          type="button"
          name="lightning"
          onClick={handleOnClick}
        >
          Lightning Network
        </button>
      </div>
    );
  } else {
    return (
      <div class='cardclick'>
        <h2>Lightning Network</h2>
        <h3>Bitcoin's layer 2 network for daily transactions.</h3>
        <h4>
          <a href="https://zaphq.io/" target="_blank" rel="noreferrer">
            Zap Wallet
          </a>
        </h4>
        <p>
          An easy to use lightning wallet with a sleek interface, connect to
          your own node over Tor no problem.
        </p>
        <br />
        <h4>
          <a href="https://zeusln.app/" target="_blank" rel="noreferrer">
            Zeus Wallet
          </a>
        </h4>
        <p>
          Another great lightning wallet option, currently getting a complete
          redesign for a better user experience. Send and receive payments on
          the lightning network through your own node easily with Zeus.
        </p>
        <br />
        <h4>
          <a href="https://www.thunderhub.io/" target="_blank" rel="noreferrer">
            Thunderhub
          </a>
        </h4>
        <p>
          Easily manage your lightning node with this super slick UI, opening
          and closing channels and more is as easy as a click of a button.
        </p>
        <br />
        <h4>
          <a
            href="https://lightning.engineering/"
            target="_blank"
            rel="noreferrer"
          >
            Lightning Labs
          </a>
        </h4>
        <p>
          The creators of LND, an integral part of the lightning network.
          Lightning Labs has a suite of products to help you manage your
          liquidity on the network. Check them out and I am sure you will find
          one of their offerings very useful, if you are a serious lightning
          user.
        </p>
        <br />
        <h4>
          <a href="https://explorer.acinq.co/" target="_blank" rel="noreferrer">
            Lightning Network Explorer
          </a>
        </h4>
        <p>
          An awesome website to visual the power of lightning, also you can use
          it to find well connected peers to connect your own node with.
        </p>
      </div>
    );
  }
}
