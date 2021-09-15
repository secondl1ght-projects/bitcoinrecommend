import React from "react";

export default function Lightning() {
  const [initial, setInitial] = React.useState(true);

  function handleOnClick() {
    setInitial(false);
  }

  if (initial === true) {
    return (
      <div>
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
      <div>
        <h2>Lightning Network</h2>
        <h3>Bitcoins layer 2 network for daily transactions.</h3>
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
