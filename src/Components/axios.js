import axios from "./Api/Unplash";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 6JrEougGRShfsw3B-caFBC0gVkUG3kBwArB8yjUcUHs",
  },
});