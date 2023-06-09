import axios from "axios";

export const API_KEY = "jTAuqirruj85Vtd9DISWXopoSqNOHRUG";

const instance = axios.create({
  baseURL: "https://api.giphy.com/v1/",
});

export default instance;
