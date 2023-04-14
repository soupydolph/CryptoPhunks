import axios from "axios";

const config = {
  reservoirApiKey: "d8095848-4ffc-51e5-b73b-c578903dbc19"
}

export const requestRecentSales = () => {
  return axios.get(
    "https://api.reservoir.tools/sales/v4?collection=0xf07468ead8cf26c752c676e43c814fee9c8cf402&limit=8",
    {
      headers: {
        accept: "*/*",
        "x-api-key": config.reservoirApiKey,
      },
    }
  );
}

export const requestFloorPhunks = () => {
  return axios.get(
    "https://api.reservoir.tools/tokens/v5?collection=0xf07468ead8cf26c752c676e43c814fee9c8cf402&sortBy=floorAskPrice&limit=8",
    {
      headers: {
        accept: "*/*",
        "x-api-key": config.reservoirApiKey,
      },
    }
  );
}
