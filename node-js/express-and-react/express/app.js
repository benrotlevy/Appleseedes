// const API = require("./api.js");
const axios = require("axios");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/:city", async (req, res) => {
  try {
    const { data } = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=70be2d0f0dc64bf2a6b121334221506&q=${req.params.city}#`
    );
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log("server up!");
});

// const getData = async (city) => {
//     try {
//   console.log(7);
//   const data = await API.get("/", {
//     params: {
//       key: "70be2d0f0dc64bf2a6b121334221506",
//       city: city,
//     },
//   });
//     console.log(data);
//   weatherData = data;
//     } catch (error) {
//       console.log(error);
//     }
// };

// const test = async (city) => {
//   const { data } = await axios.get(
//     `http://api.weatherapi.com/v1/current.json?key=70be2d0f0dc64bf2a6b121334221506&q=${city}#`
//   );
//   console.log(data);
// };

// test("tel aviv");
