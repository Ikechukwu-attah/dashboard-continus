import { useState } from "react";
import { allTruckAPI, allCitiyAPI } from "../Authorization/ServerPaths";
import axios from "../Authorization/Axios";

export const useGetAllTruck = () => {
  const [dropdownFilterData, setDropdownFilterData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const getAllTruck = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(allTruckAPI);
      return response;
    } catch (error) {
      setIsLoading(false);
      return error;
      // console.log("driver error", error.response);
    }
  };

  const getAllLocations = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(allCitiyAPI);
      return response;
    } catch (error) {
      return error;
      // console.log("driver error", error.response);
    }
  };

  const getDropdownFiltersData = async () => {
    console.log("calledddd");

    try {
      setIsLoading(true);
      const response = await Promise.all([getAllTruck(), getAllLocations()]);
      const [truckDropdownDataResponse, locationsDropdownDataResponse] =
        response;

      const truckDropdownData = truckDropdownDataResponse?.data?.data?.records;
      const locationsDropdownData =
        locationsDropdownDataResponse?.data?.data?.records;

      setDropdownFilterData({ truckDropdownData, locationsDropdownData });
      setIsLoading(false);
      console.log("data444", truckDropdownData, locationsDropdownData);
    } catch (error) {
      setError(error?.response?.data?.message);
      setIsLoading(false);
    }
  };

  return { getDropdownFiltersData, dropdownFilterData, isLoading, error };
};
