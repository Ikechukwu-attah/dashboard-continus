import { useState } from "react";
import axios from "../../../../Authorization/Axios";
import { truckUsageAPI } from "../../../../Authorization/ServerPaths";

export const useGetTruckUsage = () => {
    const [data, setData] = useState();
    // const [totalPages, setTotalPages] = useState(0)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const getTruckUsage = async(searchFilter) => {
        console.log("checking oooooooooooooooooo");
        const url = searchFilter ?
            `${truckUsageAPI}/${searchFilter}` :
            truckUsageAPI;
        console.log("URL TRUCK", url);

        setIsLoading(true);
        try {
            console.log("chai, this stuff is actually taking time");
            const response = await axios.get(url);
            console.log("still not working");

            setIsLoading(false);
            console.log("truck changed ", response.data.data.records);
            setData(response.data.data.records);
            console.log("data truck ooooooooooo o");
        } catch (error) {
            setError(error.response.data.message);
            console.log("truck", error.response);
        }
    };

    return { data, getTruckUsage, isLoading, error };
};