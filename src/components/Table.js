import React, { useEffect, useMemo, useState } from "react";
import { fetchEverynameName } from "../helper";

export default function Table({ leaderboardData }) {
  //Fetch on mounting component

  useEffect(() => {}, [leaderboardData]);

  const [minterNames, setMinterNames] = useState({});

  useEffect(() => {
    if (leaderboardData && leaderboardData.length > 0) {
      leaderboardData.forEach(async (item) => {
        if (!minterNames[item.minter]) {
          try {
            const name = await fetchEverynameName(item.minter);
            setMinterNames((prevNames) => ({
              ...prevNames,
              [item.minter]: name,
            }));
          } catch (error) {
            console.error(
              `Error fetching name for ${item.minter}: ${error.message}`
            );
          }
        }
      });
    }
  }, [leaderboardData]);

  const renderMinterName = (minter) => {
    return minterNames[minter] || minter;
  };

  console.log(leaderboardData, "leaderboardocntrct");
  const _renderRows = () => {
    let rows = [];
    if (leaderboardData && leaderboardData?.length > 0) {
      rows = leaderboardData.map((item, index) => {
        return (
          <tr key={index}>
            <td>{renderMinterName(item.minter)}</td>
            <td style={{ textAlign: "right" }}>{item.numberOfMints}</td>
            <td style={{ textAlign: "right" }}>
              {item.referrals === 0 || item.referrals ? item.referrals : "?"}
            </td>

            <td style={{ textAlign: "right" }}>
              {item.score
                ? item.score.toString().slice(0, 3)
                : (item.numberOfMints * 0.3).toString().slice(0, 3)}
            </td>
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
