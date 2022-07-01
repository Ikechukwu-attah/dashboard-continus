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
  
    }
  };

  const getAllLocations = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(allCitiyAPI);
      return response;
    } catch (error) {
      return error;
   
    }
  };

  const getDropdownFiltersData = async () => {
   

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
     
    } catch (error) {
      setError(error?.response?.data?.message);
      setIsLoading(false);
    }
  };

  return { getDropdownFiltersData, dropdownFilterData, isLoading, error };
};
