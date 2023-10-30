import { useParams } from "react-router-dom";
import Table from "../components/Table";
import useGetLeaderboardContract1 from "../hooks/useGetZoraBaseContract1";

export default function Contract({ propsHere }) {
  const { contractAddress } = useParams();

  console.log(contractAddress, "contract");
  const { leaderboardContract1, loading } =
    useGetLeaderboardContract1(contractAddress);

  return (
    <div className="container">
      <div className="row my-3 my-sm-5">
        <div className="col-sm-9 article-content">
          <h1>Leaderboard CONTRAACT</h1>

          <div id="ember41" className="ember-view">
            <Table leaderboardData={leaderboardContract1}></Table>
          </div>
        </div>
      </div>
    </div>
  );
}
