import { startups } from "../data/data.js";

export const filterDataQuery = (req) => {
  const { continent, industry, country, is_seeking_funding, has_mvp } =
    req.query;

  let filterData = startups;

  if (continent) {
    filterData = filterData.filter((company) => {
      return company.continent.toLowerCase() === continent.toLowerCase();
    });
  }

  if (industry) {
    filterData = filterData.filter((company) => {
      return company.industry.toLowerCase() === industry.toLowerCase();
    });
  }

  if (country) {
    filterData = filterData.filter((company) => {
      return company.country.toLowerCase() === country.toLowerCase();
    });
  }

  if (is_seeking_funding) {
    filterData = filterData.filter((company) => {
      return (
        company.is_seeking_funding ===
        JSON.parse(is_seeking_funding.toLowerCase())
      );
    });
  }

  if (has_mvp) {
    filterData = filterData.filter((company) => {
      return company.has_mvp === JSON.parse(has_mvp.toLowerCase());
    });
  }

  return filterData;
};
