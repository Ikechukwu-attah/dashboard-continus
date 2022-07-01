import { useState } from "react";
import axios from '../../../Authorization/Axios'
import { getAdminAPI } from "../../../Authorization/ServerPaths";


export const useGetAdmin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    const getAdmin = async(id, callback, onError) => {
        setIsLoading(true)
        try {
            const response = await axios.get(`${getAdminAPI}?id=${id}`);
            setIsLoading(false);
            const { email, data } = response.data.data.admins[0]

            const adminData = { email, ...data }

            delete adminData.guard

            setData(adminData);
            if (callback && typeof callback === "function") {
                callback(adminData)
            }



        } catch (error) {
            setIsLoading(false);
            setError(error.response.data.message);
            onError(error.response.data.message)
        }


    }

    return { isLoading, data, getAdmin, error }
}