const axios = require("axios");

const weatherApi = axios.create({
  baseURL: "http://api.weatherapi.com/v1/current.json",
  //   headers: {
  //     key: "70be2d0f0dc64bf2a6b121334221506",
  //   },
});

module.exports = weatherApi;
