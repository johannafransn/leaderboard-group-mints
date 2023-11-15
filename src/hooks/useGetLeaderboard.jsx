import { useState, useEffect } from "react";

export function useGetLeaderboard(contractAddress, platform) {
  const [leaderboardData, setLeaderboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        if (!leaderboardData) {
          setLoading(true);
          const liveUrl = `https://group-mints-backend.onrender.com/v1/nft/leaderboard/${platform}/${contractAddress}`;
          const res = await fetch(liveUrl);
          const data = await res.json();

          setLeaderboardData(data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error, "Error fetching leaderboard");
      }
    };
    fetchGroups();
  }, [leaderboardData]);
  return { leaderboardData, loading };
}

export default useGetLeaderboard;
