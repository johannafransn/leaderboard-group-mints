import { EVERYNAME_API } from "./.config";

export const fetchEverynameName = async (address) => {
  if (address && EVERYNAME_API) {
    try {
      const response = await fetch(
        `https://api.everyname.xyz/reverse?address=${address}&provider=ens`,
        {
          headers: {
            Accept: "application/json",
            "api-key": EVERYNAME_API,
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
