import { useState } from "react";
import SidePanel from "../components/SidePanel";
import Table from "../components/Table";

export default function Home({ propsHere }) {
  const [interval, setInterval] = useState(10);
  const [radioBtnSelected, setRadioBtnSelected] = useState("10");
  const [searchText, setSearchText] = useState("");

  const _handleCheckboxChange = (event) => {
    setRadioBtnSelected(event.target.value);
    setInterval(Number(event.target.value));
  };

  const _handleSearchText = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <div className="container">
      <div className="row my-3 my-sm-5">
        <div className="col-sm-9 article-content">
          <h1>See all Leaderboards</h1>

          <div id="ember41" className="ember-view">
            <p>
              Which leaderboard do you want to see?
              <br></br>
              <a href="/#/contract/2">Sound TK Mint Leaderboard on Optimism</a>
              <br></br>
              <a href="/#/contract/1">Zora Rapper J on Base</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
