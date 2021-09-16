import React from "react";

export default function More() {
  const [initial, setInitial] = React.useState(true);

  function handleOnClick() {
    setInitial(false);
  }

  if (initial === true) {
    return (
      <div>
        <button id="more" type="button" name="more" onClick={handleOnClick}>
          More Resources
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>More Resources</h2>
        <h3>The learning never stops, and it shouldn't!</h3>
        <h4>
          <a
            href="https://bitcoin.clarkmoody.com/dashboard/"
            target="_blank"
            rel="noreferrer"
          >
            Clark Moody's Dashboard
          </a>
        </h4>
        <p>
          Do you like statistics? Clark has you covered with tons of interesting
          data points to browse over.
        </p>
      </div>
    );
  }
}
