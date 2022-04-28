import { useEffect } from "react";

export const useFilter = (
        truckFilter,
        dateFilter,
        locationFilter,
        maintenanceFilter,
        pageFilter,
        getData
    ) => {
        useEffect(() => {
                    const refineFilter = (filter) => {
                        if (filter && filter[7] === "|") {
                            return `${filter.slice(0, 7)}${filter.slice(8)}`;
                        }
                        return filter;
                    };

                    const allFilter = `?where=${truckFilter ? `|${truckFilter}` : ""}${
      dateFilter ? `|${dateFilter}` : ""
    }${locationFilter ? `|${locationFilter}` : ""}${
      maintenanceFilter ? `|${maintenanceFilter}` : ""
    }${pageFilter ? `${pageFilter}` : ""}`;

    const filter = allFilter === "?where=" ? null : allFilter;

    console.log("all filter =>>>", refineFilter(filter));

    getData(refineFilter(filter));
  }, [truckFilter, dateFilter, locationFilter, maintenanceFilter, pageFilter]);

  return null;
};