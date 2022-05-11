import { useEffect } from "react";

export const useFilterGraph = (
        truckFilter,
        locationFilter,
        dateFilter,
        pageFilter,
        maintenanceFilter,
        getData
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
        ? `&${pageFilter}${maintenanceFilter ? `&${maintenanceFilter}` : ""}`
        : ""
    }`;

    console.log("truck filter concat", filter);
    console.log("pageFilter", pageFilter);
    getData(refineFilter(filter));
    console.log("getData", getData);
  }, [truckFilter, locationFilter, dateFilter, pageFilter, maintenanceFilter]);
};