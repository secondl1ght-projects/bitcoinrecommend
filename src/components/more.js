import React from "react";
import clark from "../images/clark.jpeg";
import satoshi from "../images/satoshi.png";
import twentyone from "../images/twentyone.jpg";
import scarcecity from "../images/scarcecity.jpg";
import planb from "../images/planb.jpg";
import boom from "../images/boom.jpg";
import hal from "../images/hal.jpg";
import devs from "../images/devs.svg";
import jobs from "../images/jobs.jpg";
import recover from "../images/recover.jpg";
import tx from "../images/tx.jpg";

export default function More() {
  const [initial, setInitial] = React.useState(true);

  function handleOnClick() {
    setInitial(false);
  }

  if (initial === true) {
    return (
      <div className="cardintro" id="books">
        <button id="more" type="button" name="more" onClick={handleOnClick}>
          More Resources
        </button>
      </div>
    );
  } else {
    return (
      <div className="cardclick" id="books">
        <h2>More Resources</h2>
        <h3>The learning never stops, and it shouldn't!</h3>
        <div className="box">
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

        <div className="box">
          <h4>
            <a
              href="https://www.btcsatoshi.com/"
              target="_blank"
              rel="noreferrer"
            >
              BTC Satoshi
            </a>
          </h4>
          <img src={satoshi} alt="Satoshi logo" id="notcircle" />
          <p>
            Bitcoin to fiat converters are easy to find but this satoshi to fiat
            converter is a very useful tool.
          </p>
        </div>

        <div className="box">
          <h4>
            <a href="https://21ism.com/" target="_blank" rel="noreferrer">
              21ism
            </a>
          </h4>
          <img src={twentyone} alt="21ism logo" />
          <p>A bitcoin culture collective.</p>
        </div>

        <div className="box">
          <h4>
            <a href="https://scarce.city/" target="_blank" rel="noreferrer">
              Scarce.city
            </a>
          </h4>
          <img src={scarcecity} alt="Scarce.city logo" />
          <p>
            Bitcoin art auctions, support artists and the circular economy at
            the same time.
          </p>
        </div>

        <div className="box">
          <h4>
            <a
              href="https://www.planbpassport.com/"
              target="_blank"
              rel="noreferrer"
            >
              Plan B Passport
            </a>
          </h4>
          <img src={planb} alt="Plan B logo" />
          <p>
            If your country is not respecting the individual and you are looking
            for a change, then head on over to Plan B Passport. Katie the
            Russian will get you setup and answer any question you may have, and
            yes you can pay in bitcoin.
          </p>
        </div>

        <div className="box">
          <h4>
            <a
              href="https://bitblockboom.com/"
              target="_blank"
              rel="noreferrer"
            >
              Bit Block Boom!
            </a>
          </h4>
          <img src={boom} alt="Bit Block Boom! logo" />
          <p>
            A true bitcoiners conference. If you want to have a great time
            networking with other like-minded individuals, then this is where it
            can happen.
          </p>
        </div>

        <div className="box">
          <h4>
            <a
              href="http://web.alsa.org/site/TR/Endurance/GoldenWest?sid=10590&type=fr_informational&pg=informational&fr_id=14523"
              target="_blank"
              rel="noreferrer"
            >
              SO CAL Ride to Defeat ALS
            </a>
          </h4>
          <img src={hal} alt="ALS logo" />
          <p>
            Make a bitcoin donation to the ALS foundation in honor of Hal
            Finney.
          </p>
        </div>

        <div className="box">
          <h4>
            <a
              href="https://bitcoindevlist.com/"
              target="_blank"
              rel="noreferrer"
            >
              Bitcoin Donation Portal
            </a>
          </h4>
          <img src={devs} alt="Bitcoin logo" />
          <p>
            Make a donation to support bitcoin developers, any amount can go a
            long way. If you want bitcoin to succeed, this is one of the most
            direct and easy ways to contribute.
          </p>
        </div>

        <div className="box">
          <h4>
            <a
              href="https://bitcoinerjobs.co/"
              target="_blank"
              rel="noreferrer"
            >
              Bitcoiner Jobs
            </a>
          </h4>
          <img src={jobs} alt="Bitcoiner Jobs logo" />
          <p>
            Find a bitcoin only job to truly take the deep dive and get as
            involved as possible. Wake up every day and make bitcoin and the
            world a better place.
          </p>
        </div>

        <div className="box">
          <h4>
            <a
              href="https://walletsrecovery.org/"
              target="_blank"
              rel="noreferrer"
            >
              Wallets Recovery
            </a>
          </h4>
          <img src={recover} alt="NVK logo" />
          <p>
            A list of bitcoin wallets and their associated derivation paths and
            more information regarding wallet recovery, in case you need it.
          </p>
        </div>

        <div className="box">
          <h4>
            <a href="https://txtenna.com/" target="_blank" rel="noreferrer">
              TxTenna
            </a>
          </h4>
          <img src={tx} alt="TxTenna logo" />
          <p>
            If you don't have internet then you can't acces your bitcoin right?
            Wrong. If you want to go the extra mile and ensure you can access
            the network anywhere, it is now possible.
          </p>
        </div>

        <div className="box">
          <h4>
            <a
              href="https://blockdate.computer/"
              target="_blank"
              rel="noreferrer"
            >
              Blockdate Computer
            </a>
          </h4>
          <img src={devs} alt="Bitcoin logo" />
          <p>
            A bit of shameless self promotion here, I made a website that can
            give you past, present and future block dates. It also has a bit of
            bitcoin trivia embedded in it.
          </p>
        </div>
      </div>
    );
  }
}
