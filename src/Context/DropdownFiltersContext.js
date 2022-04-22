import { createContext, useEffect } from "react";
import { useGetAllTruck } from "../hooks/useGetAllTrucks";

export const dropdownFilterContext = createContext();

const DropdownFilterProvider = ({ children }) => {
  const { dropdownFilterData, error, isLoading, getDropdownFiltersData } =
    useGetAllTruck();

  const getDropdownItems = (dropdownItems, accessor) => {
    if (dropdownItems && dropdownItems.length) {
      const items = [];
      dropdownItems.forEach((item) => items.push(accessor(item)));
      return items;
    }
    return [];
  };

  useEffect(() => {
    getDropdownFiltersData();
  }, []);
  return (
    <dropdownFilterContext.Provider
      value={{
        truckDropdownData: getDropdownItems(
          dropdownFilterData?.truckDropdownData,
          (data) => data.truck
        ),
        locationsDropdownData: getDropdownItems(
          dropdownFilterData?.locationsDropdownData,
          (data) => data.city
        ),
        isLoading,
        error,
      }}
    >
      {children}
    </dropdownFilterContext.Provider>
  );
};

export default DropdownFilterProvider;
