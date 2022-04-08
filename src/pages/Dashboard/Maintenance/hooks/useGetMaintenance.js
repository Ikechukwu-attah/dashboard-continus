import { useState } from "react";
import axios from '../../../../Authorization/Axios'
import { maintenanceAPI } from "../../../../Authorization/ServerPaths";





export const useGetMaintenance = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const getMaintenance = async() => {

        setIsLoading(true)
        try {
            const response = await axios.get(maintenanceAPI)
            setIsLoading(false)
            console.log("maintenance ", response.data.data.records);
            setData(response.data.data.records);
            // console.log("data driver", data);

        } catch (error) {
            setError(error.response.data.message);
            console.log("maintenance", error.response);
        }

    }


    return { data, getMaintenance, isLoading, error }
}