import React from "react";

export default function Mixing() {
  const [initial, setInitial] = React.useState(true);

  function handleOnClick() {
    setInitial(false);
  }

  if (initial === true) {
    return (
      <div>
        <button id="mixing" type="button" name="mixing" onClick={handleOnClick}>
          Mixing
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Mixing (CoinJoin)</h2>
        <h3>
          Smelt UTXOs with others to create freshly minted bitcoins again.
        </h3>
        <h4>
          <a
            href="https://github.com/openoms/joininbox"
            target="_blank"
            rel="noreferrer"
          >
            JoinMarket (JoininBox)
          </a>
        </h4>
        <p>
          If you are somewhat comfortable operating in the command-line this is
          a fairly easy way to get started mixing with good liquidity.
        </p>
        <br />
        <h4>
          <a
            href="https://www.samouraiwallet.com/whirlpool"
            target="_blank"
            rel="noreferrer"
          >
            Samourai Whirlpool
          </a>
        </h4>
        <p>
          Whirlpool can be used with either a desktop or mobile GUI, from the
          same team that brought you Samourai Wallet this mixer is integrated
          directed with their wallet software.
        </p>
      </div>
    );
  }
}
