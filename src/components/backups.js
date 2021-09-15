import React from "react";

export default function Backups() {
  const [initial, setInitial] = React.useState(true);

  function handleOnClick() {
    setInitial(false);
  }

  if (initial === true) {
    return (
      <div>
        <button
          id="backups"
          type="button"
          name="backups"
          onClick={handleOnClick}
        >
          Backups
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Metal Backup</h2>
        <h3>The Ultimate Cold Storage.</h3>
        <h4>
          <a href="https://cryptotag.io/" target="_blank" rel="noreferrer">
            Cryptotag
          </a>
        </h4>
        <p>
          This titanium metal backup for your seed phrase will survive anything
          imagineable. It's literally bulletproof. A must have for any serious
          hodler.
        </p>
      </div>
    );
  }
}
