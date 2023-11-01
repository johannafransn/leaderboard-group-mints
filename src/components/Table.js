import React, { useEffect, useMemo } from "react";

export default function Table({ leaderboardData }) {
  //Fetch on mounting component

  useEffect(() => {}, [leaderboardData]);

  console.log(leaderboardData, "leaderboardocntrct");
  const _renderRows = () => {
    let rows = [];
    if (leaderboardData && leaderboardData?.length > 0) {
      rows = leaderboardData.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.minter}</td>
            <td style={{ textAlign: "right" }}>{item.numberOfMints}</td>
            <td style={{ textAlign: "right" }}>?</td>

            <td style={{ textAlign: "right" }}>{item.numberOfMints}</td>
          </tr>
        );
      });
    } else {
      return (
        <tr>
          <td colSpan="3">Loading...</td>
        </tr>
      );
    }

    return rows;
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>Minter</th>
            <th style={{ textAlign: "right" }}>Number of Mints</th>
            <th style={{ textAlign: "right" }}>Referrals</th>

            <th style={{ textAlign: "right" }}>Score</th>
          </tr>
        </thead>
        <tbody>{_renderRows()}</tbody>
      </table>
    </div>
  );
}
