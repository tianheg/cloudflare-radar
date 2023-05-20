import axios from "axios";

import dotenv from "dotenv";
dotenv.config();

// use axios get cloudflare radar
const getRadar = async () => {
  const response = await axios.get(
    "https://api.cloudflare.com/client/v4/radar/search/global?query=tianheg.xyz",
    {
      headers: {
        Authorization: `Bearer ${process.env.CLOUDFLARE_API_RADAR}`,
      },
    }
  );

  return response.data.result.search;
};

console.log(await getRadar())
