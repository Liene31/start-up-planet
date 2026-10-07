import express from "express";
import { startups } from "./data/data.js";
import { filterData } from "./utility/filterData.js";

const PORT = 8000;

const app = express();

app.get("/api", (req, res) => {
  let filteredData = startups;

  filteredData = filterData(req, filteredData);

  res.json(filteredData);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
