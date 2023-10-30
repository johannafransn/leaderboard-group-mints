import { useState, useEffect } from "react";

export function useGetLeaderboardContract1() {
  const [leaderboardContract1, setLeaderboardContract1] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        if (!leaderboardContract1) {
          setLoading(true);
          const liveUrl =
            "https://group-mints-backend.onrender.com/v1/zora/leaderboard/";
          const res = await fetch(liveUrl);
          const data = await res.json();
          console.log(data, "DAATAAA");
          setLeaderboardContract1(data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error, "Error fetching my groups");
      }
    };
    fetchGroups();
  }, [leaderboardContract1]);
  return { leaderboardContract1, loading };
}

export default useGetLeaderboardContract1;
