import { useState } from "react";
import axios from '../../../../Authorization/Axios'
import { driversManagmentAPI } from "../../../../Authorization/ServerPaths";





export const useGetDriver = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const getDriver = async() => {

        setIsLoading(true)
        try {
            const response = await axios.get(driversManagmentAPI)
            setIsLoading(false)
                // console.log("drivers", response.data.data.records);
            setData(response.data.data.records);
            // console.log("data driver", data);

        } catch (error) {
            setError(error.response.data.message);
            // console.log("driver error", error.response);
        }

    }


    return { data, getDriver, isLoading, error }
}