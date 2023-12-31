import { useParams } from "react-router-dom";
import Table from "../components/Table";
import useGetLeaderboard from "../hooks/useGetLeaderboard";
import { useEffect } from "react";

export default function Contract({ propsHere }) {
  const { contractAddress, platform, title } = useParams();

  const { leaderboardData, loading } = useGetLeaderboard(
    contractAddress,
    platform
  );

  useEffect(() => {}, [leaderboardData]);

  return (
    <div className="container">
      <div className="row my-3 my-sm-5">
        <div className="col-sm-9 article-content">
          <h1>{title} - Top Contributor Leaderboard </h1>
          <br></br>
          <a
            target="_blank"
            href={
              platform === "zora"
                ? `https://basescan.org/address/${contractAddress}`
                : `https://optimistic.etherscan.io/address/${contractAddress}`
            }
          >
            See minting contract details
          </a>
          <br></br> <br></br>
          <Table leaderboardData={leaderboardData}></Table>
        </div>
      </div>
    </div>
  );
}
