import { useState } from "react";
import axios from '../../../Authorization/Axios'
import { updateAdminAPI } from "../../../Authorization/ServerPaths";





export const useUpdateAdmin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    const updateAdmin = async(adminData, callback) => {
        setIsLoading(true)

        try {
            const response = await axios.put(updateAdminAPI, adminData);
            setIsLoading(false);
            setData(response.data);

            if (callback && typeof callback === "function") {
                callback()
            }



        } catch (error) {
            setIsLoading(false);
            setError(error.response.data.message);
        }


    }

    return { isLoading, data, updateAdmin, error }
}