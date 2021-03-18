const axios = require("axios");
const apiUrl = "http://localhost:3000";
export const searchBusiness = () =>
  axios.post(`${apiUrl}/yelp/business/search`, {term:"coffee"});