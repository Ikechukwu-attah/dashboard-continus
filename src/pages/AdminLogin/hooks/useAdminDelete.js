import { useState } from 'react'
import axios from '../../../Authorization/Axios'
import { deleteAdminAPI } from '../../../Authorization/ServerPaths'


export const useDeleteAdmin = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();


    const deleteAdmin = async(data, callback) => {
        setIsLoading(true);
        try {
            const response = await axios.delete(deleteAdminAPI, { data });
            setIsLoading(false);
            setData(response.data)

            if (callback && typeof callback === "function") {
                await callback()
            }


        } catch (error) {
            setIsLoading(false)
            setError(error.response.data.message)

        }

    }

    return { error, isLoading, data, deleteAdmin }
}