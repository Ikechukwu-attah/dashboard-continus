import { useState } from "react";
import axios from '../../../../Authorization/Axios'
import { monthlyAvaliablityAPI } from "../../../../Authorization/ServerPaths";





export const useMonthlyAvaliablity = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const getMonthlyAvaliablity = async() => {

        setIsLoading(true)
        try {
            const response = await axios.get(monthlyAvaliablityAPI)
            setIsLoading(false)
            console.log("monthlyAvaliablity ", response.data.data.records);
            setData(response.data.data.records);
            // console.log("data driver", data);

        } catch (error) {
            setError(error.response.data.message);
            console.log("maintenance", error.response);
        }

    }


    return { data, getMonthlyAvaliablity, isLoading, error }
}