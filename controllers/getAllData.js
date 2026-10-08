import { filterDataQuery } from "../utility/filterDataQuery.js";

export const getAllData = (req, res) => {
  const filteredData = filterDataQuery(req);
  res.json(filteredData);
};
