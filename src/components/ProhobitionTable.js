import React, { useEffect, useMemo, useState } from "react";
import { fetchEverynameName } from "../helper";

export default function ProhobitionTable({ leaderboardData }) {
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

  const _renderRows = () => {
    let rows = [];
    if (leaderboardData && leaderboardData?.length > 0) {
      rows = leaderboardData.map((item, index) => {
        return (
          <tr key={index}>
            <>
              <td>{renderMinterName(item.minter)}</td>
              <td style={{ textAlign: "right" }}>
                {item.homageMinter ? "Yes" : "No"}
              </td>
              <td style={{ textAlign: "right" }}>{item.numberOfMintsFrom15}</td>
            </>
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
    <table className="table table-dark">
      <thead>
        <tr>
          <th style={{ textAlign: "left" }}>Minter</th>
          <th style={{ textAlign: "right" }}>Homage To Life Minter?</th>
          <th style={{ textAlign: "right" }}># of mints (Nov 15 - Dec 2)</th>
        </tr>
      </thead>
      <tbody>{_renderRows()}</tbody>
    </table>
  );
}
