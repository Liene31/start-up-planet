import { startups } from "../data/data.js";

export const filterDataParam = (req) => {
  const { field, term } = req.params;
  const allowedFields = ["country", "continent", "industry"];

  if (!allowedFields.includes(field)) {
    return undefined;
  }

  const filterData = startups.filter((startup) => {
    return startup[field].toLowerCase() === term.toLowerCase();
  });
  return filterData;
};
