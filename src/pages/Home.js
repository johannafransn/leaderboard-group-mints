import { useState } from "react";

export default function Home({ propsHere }) {
  const [interval, setInterval] = useState(10);

  return (
    <div className="container">
      <div className="row my-3 my-sm-5">
        <div className="col-sm-9 article-content">
          <div id="ember41" className="ember-view">
            <p>
              <h1>Honey Pot Leaderboards</h1>
              <br></br>
              <div className="frame"></div>
              <a href="/#/contract/0x9f3303e2c04e79387c3b5089b8a73e0b466e9076/sound">
                Song 'Honey' on Optimism
              </a>
              <br></br>
              <a href="/#/contract/0xfcf069b5876ab35107e44906933cf67110a60bcd/sound">
                Song 'Breathe' on Optimism
              </a>
              <br></br>
              <a href="/#/contract/0x6a7463c342027ee8452f2686ccfa9b73026b4095/sound">
                Song 'Break It - msft (VividFeverDreams Flip)' on Optimism
              </a>
              <br></br>
              <a href="/#/contract/0xbd87f4da73ff92a7bea31e2de20e14f9829f42fe/zora">
                Song 'The Keepers' - on Base
              </a>
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
