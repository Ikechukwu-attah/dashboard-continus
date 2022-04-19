import { useState } from "react";
import axios from '../../../Authorization/Axios'
import { updateClientAPI } from "../../../Authorization/ServerPaths";






export const useUpdateClient = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    const updateClient = async(clientData, callback) => {
        setIsLoading(true)

        try {
            const response = await axios.put(updateClientAPI, clientData);
            setIsLoading(false);
            setData(response.data);
            console.log("response data update", data);

            if (callback && typeof callback === "function") {
                callback()
            }



        } catch (error) {
            setIsLoading(false);
            setError(error.response.data.message);
        }


    }

    return { isLoading, data, updateClient, error }
}