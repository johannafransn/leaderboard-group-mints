export const fetchEverynameName = async (address) => {
  if (address && process.env.REACT_APP_EVERYNAME_API) {
    try {
      const response = await fetch(
        `https://api.everyname.xyz/reverse?address=${address}&provider=ens`,
        {
          headers: {
            Accept: "application/json",
            "api-key": process.env.REACT_APP_EVERYNAME_API,
          },
        }
      );
      const data = await response.json();
      const { domain } = data;
      return domain;
    } catch (error) {
      return null;
    }
  } else {
    return null;
  }
};
