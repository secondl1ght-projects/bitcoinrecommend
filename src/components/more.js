import React from "react";
import clark from "../images/clark.jpeg";

export default function More() {
  const [initial, setInitial] = React.useState(true);

  function handleOnClick() {
    setInitial(false);
  }

  if (initial === true) {
    return (
      <div class="cardintro" id='books'>
        <button id="more" type="button" name="more" onClick={handleOnClick}>
          More Resources
        </button>
      </div>
    );
  } else {
    return (
      <div class="cardclick">
        <h2>More Resources</h2>
        <h3>The learning never stops, and it shouldn't!</h3>
        <div class="box">
          <h4>
            <a
              href="https://bitcoin.clarkmoody.com/dashboard/"
              target="_blank"
              rel="noreferrer"
            >
              Clark Moody's Dashboard
            </a>
          </h4>
          <img src={clark} alt="Clark logo" />
          <p>
            Do you like statistics? Clark has you covered with tons of
            interesting data points to browse over.
          </p>
        </div>
      </div>
    );
  }
}
