import React, { useEffect, useMemo, useState } from "react";
import { fetchEverynameName } from "../helper";
import { useParams } from "react-router-dom";

export default function Table({ leaderboardData }) {
  //Fetch on mounting component

  useEffect(() => {}, [leaderboardData]);

  const [minterNames, setMinterNames] = useState({});
  const { contractAddress, platform, title } = useParams();

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
        let dontShowPetesMint =
          // title === "Honey" &&
          renderMinterName(item.minter) === "p3t3rango.eth";

        return (
          <tr key={index}>
            {renderMinterName(item.minter) === "bonfire.eth" ||
            dontShowPetesMint ? null : (
              <>
                <td>{renderMinterName(item.minter)}</td>
                <td style={{ textAlign: "right" }}>{item.numberOfMints}</td>
                {platform === "sound" ? (
                  <td style={{ textAlign: "right" }}>{item.volume}</td>
                ) : null}

                <td style={{ textAlign: "right" }}>{item.referrals}</td>
                <td style={{ textAlign: "right" }}>{item.score}</td>
              </>
            )}
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
          <th style={{ textAlign: "right" }}>Number of Mints</th>
          {platform === "sound" ? (
            <th style={{ textAlign: "right" }}>Volume</th>
          ) : null}

          <th style={{ textAlign: "right" }}>Referrals</th>

          <th style={{ textAlign: "right" }}>Score</th>
        </tr>
      </thead>
      <tbody>{_renderRows()}</tbody>
    </table>
  );
}
