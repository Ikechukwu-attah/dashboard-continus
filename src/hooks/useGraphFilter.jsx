import { useEffect } from "react";

export const useFilterGraph = (
 { truckFilter,
  locationFilter,
  dateFilter,
  pageFilter,
  maintenanceFilter,
  companyFilter,
  getData}
) => {
  useEffect(() => {
    const refineFilter = (filter) => {
      if (filter && filter[1] === "&") {
        return `${filter.slice(0, 1)}${filter.slice(2)}`;
      }
      return filter;
    };
    const filter = `?${dateFilter ? dateFilter : ""}${
      truckFilter ? `&${truckFilter}` : ""
    }${locationFilter ? `&${locationFilter}` : ""}${
      pageFilter
        ? `&${pageFilter} `:""}${maintenanceFilter ? `&${maintenanceFilter}` : ""}${companyFilter?`&${companyFilter}`:""}
      
    `;

    getData(refineFilter(filter));
  }, [truckFilter, locationFilter, dateFilter, pageFilter,companyFilter, maintenanceFilter]);
};
