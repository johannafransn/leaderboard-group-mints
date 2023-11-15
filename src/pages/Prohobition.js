import { useParams } from "react-router-dom";
import Table from "../components/Table";
import useGetLeaderboard from "../hooks/useGetLeaderboard";
import { useEffect } from "react";
import ProhobitionTable from "../components/ProhobitionTable";

export default function Prohobition({ propsHere }) {
  const { contractAddress, platform } = useParams();

  const { leaderboardData, loading } = useGetLeaderboard(
    contractAddress,
    platform
  );

  console.log(leaderboardData, "leaderboarddata");
  useEffect(() => {}, [leaderboardData]);

  return (
    <div className="container">
      <div className="row my-3 my-sm-5">
        <div className="col-sm-9 article-content">
          <h1> 'Buitrago's Honey Pot' on Arbitrum - Leaderboard </h1>
          <br></br>
          <br></br> <br></br>
          <ProhobitionTable
            leaderboardData={leaderboardData}
          ></ProhobitionTable>
        </div>
      </div>
    </div>
  );
}
