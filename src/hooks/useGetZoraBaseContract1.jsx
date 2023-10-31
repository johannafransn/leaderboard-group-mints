import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function useGetSoundLeaderboard(contractAddress) {
  const [soundLeaderboard, setSoundLeaderboard] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        if (!soundLeaderboard) {
          setLoading(true);
          const liveUrl = `https://group-mints-backend.onrender.com/v1/sound/leaderboard/${contractAddress}`;
          const res = await fetch(liveUrl);
          const data = await res.json();
          console.log(data, "DAATAAA");
          setSoundLeaderboard(data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error, "Error fetching my groups");
      }
    };
    fetchGroups();
  }, [soundLeaderboard]);
  return { leaderboardContract1: soundLeaderboard, loading };
}

export default useGetSoundLeaderboard;
