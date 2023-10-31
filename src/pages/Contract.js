import { useParams } from "react-router-dom";
import Table from "../components/Table";
import useGetSoundLeaderboard from "../hooks/useGetZoraBaseContract1";

export default function Contract({ propsHere }) {
  const { contractAddress } = useParams();

  console.log(contractAddress, "contract");
  const { leaderboardContract1, loading } =
    useGetSoundLeaderboard(contractAddress);

  return (
    <div className="container">
      <div className="row my-3 my-sm-5">
        <div className="col-sm-9 article-content">
          <h1>Leaderboard </h1>
          <br></br>
          <a
            target="_blank"
            href={`https://optimistic.etherscan.io/address/${contractAddress}`}
          >
            See minting contract details
          </a>
          <br></br> <br></br>
          <div id="ember41" className="ember-view">
            <Table leaderboardData={leaderboardContract1}></Table>
          </div>
        </div>
      </div>
    </div>
  );
}
