import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function useGetSoundLeaderboard(contractAddress, platform) {
  const [leaderboardData, setLeaderboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        if (!leaderboardData) {
          console.log("Coming here");
          setLoading(true);
          const liveUrl = `https://group-mints-backend.onrender.com/v1/${platform}/leaderboard/${contractAddress}`;
          const res = await fetch(liveUrl);
          const data = await res.json();
          console.log(data, "DAATAAA");

          setLeaderboardData(data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error, "Error fetching my groups");
      }
    };
    fetchGroups();
  }, [leaderboardData]);
  return { leaderboardData, loading };
}

export default useGetSoundLeaderboard;
