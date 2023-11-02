import { useState } from "react";

export default function Home({ propsHere }) {
  const [interval, setInterval] = useState(10);

  const renderButtons = () => {
    return (
      <div className="flexDirectionRow  mb-3">
        <button className="defaultArtistBtn">
          <div
            style={{
              alignItems: "flex-start",
            }}
            className="flexDirectionCol"
          >
            {}
            <span className="webfont -mb-1"></span>
          </div>
        </button>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row my-3 my-sm-5">
        <div className="col-sm-9 article-content">
          <div id="ember41" className="ember-view">
            <p>
              <h1>Honey Pot Leaderboards</h1>
              <br></br>
              <div className="frame"></div>

              <br></br>

              <div className="justify-center">
                <div className="flexDirectionRow justify-center mb-3">
                  <a
                    className="btn btn-primary  homeBtnGroup"
                    href="/#/contract/0x9f3303e2c04e79387c3b5089b8a73e0b466e9076/sound"
                  >
                    'Honey' on Optimism
                  </a>

                  <a
                    className="btn btn-primary  homeBtnGroup"
                    href="/#/contract/0xfcf069b5876ab35107e44906933cf67110a60bcd/sound"
                  >
                    'Breathe' on Optimism
                  </a>

                  <a
                    className="btn btn-primary  homeBtnGroup"
                    href="/#/contract/0x6a7463c342027ee8452f2686ccfa9b73026b4095/sound"
                  >
                    'Break It - msft (VividFeverDreams Flip)' on Optimism
                  </a>
                </div>{" "}
                <div className="flexDirectionRow justify-center mb-3">
                  <a
                    className="btn btn-primary  "
                    href="/#/contract/0xbd87f4da73ff92a7bea31e2de20e14f9829f42fe/zora"
                  >
                    'The Keepers' - on Base
                  </a>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/*   The Keepers - Base : // interested in mintReferal
  https://basescan.org/address/0xbd87f4da73ff92a7bea31e2de20e14f9829f42fe
  
Honey - Optimism: 
Song contract - https://optimistic.etherscan.io/address/0x9f3303e2c04e79387c3b5089b8a73e0b466e9076
  
  
Breathe  - Optimism: 
Song contract: https://optimistic.etherscan.io/address/0xfcf069b5876ab35107e44906933cf67110a60bcd

Break It - msft (VividFeverDreams Flip) https://optimistic.etherscan.io/address/0x6a7463c342027ee8452f2686ccfa9b73026b4095
  */
