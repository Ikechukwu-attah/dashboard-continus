import { useState } from "react";
import axios from "../../../../Authorization/Axios";
import { occupancyJournalAPI } from "../../../../Authorization/ServerPaths";

export const useOccupancyJournal = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState();

  const getOccupancyJournal = async (searchFilter) => {
    const url = searchFilter
      ? `${occupancyJournalAPI}/${searchFilter}`
      : occupancyJournalAPI;

    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setIsLoading(false);
      // console.log("occupancy journal ", response.data.data.records);
      setData(response?.data?.data?.records);
      // console.log("data driver", data);
      const {
        data: {
          pagination: { total_pages },
        },
      } = response?.data;
      setTotalPages(total_pages);
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  return { data, getOccupancyJournal, isLoading, error, totalPages };
};
