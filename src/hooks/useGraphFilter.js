import { useEffect } from "react";

export const useFilterGraph = (
        truckFilter,
        locationFilter,
        dateFilter,
        pageFilter,
        getData
    ) => {
        useEffect(() => {
                    const filter = `${dateFilter}${truckFilter ? `&${truckFilter}` : ""}${
      locationFilter
        ? `&${locationFilter} ${pageFilter ? `&${pageFilter}` : ""}`
        : ""
    }`;
    console.log("truck filter concat", filter);
    getData(filter);
    console.log("getData", getData);
  }, [truckFilter, locationFilter, dateFilter, pageFilter]);
};