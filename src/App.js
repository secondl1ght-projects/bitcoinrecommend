import React from "react";
import ReactDOM from "react-dom";
import Backups from "./components/backups";
import Exchanges from "./components/exchanges";
import Explorers from "./components/explorers";
import HardWallets from "./components/hardwallets";
import Lightning from "./components/lightning";
import Mixing from "./components/mixing";
import More from "./components/more";
import Nodes from "./components/nodes";
import Price from "./components/price";
import SoftWallets from "./components/softwallets";

function App() {
  return (
    <>
      <Exchanges />
      <HardWallets />
      <SoftWallets />
      <Backups />
      <Explorers />
      <Nodes />
      <Mixing />
      <Lightning />
      <Price />
      <More />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
