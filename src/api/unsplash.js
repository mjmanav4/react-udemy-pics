import axios from "axios";

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers: {
        Authorization:
          "Client-ID 73c055c9869a58b1d09acf5c9f5d007f199e8785687b0ebb040e1ba2132b64c0"
      }
});
