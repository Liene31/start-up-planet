import { filterDataParam } from "../utility/filterDataParam.js";

export const getDataByPathParams = (req, res) => {
  const filterData = filterDataParam(req);
  if (!filterData) {
    return res.status(400).json({
      message:
        "Search field not allowed. Please use only 'country', 'continent', 'industry'",
    });
  }

  res.json(filterData);
};
