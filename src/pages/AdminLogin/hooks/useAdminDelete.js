import { useState } from 'react'
import axios from '../../../Authorization/Axios'
import { deleteAdminAPI } from '../../../Authorization/ServerPaths'


export const useDeleteAdmin = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();


    const deleteAdmin = async(data, callback) => {
        console.log("data=>2", data)
        setIsLoading(true);
        try {
            console.log("hello delete respone =======>")
            const response = await axios.delete(deleteAdminAPI, { data });
            console.log("hello delete response.............>")
            setIsLoading(false);
            setData(response.data)

            if (callback && typeof callback === "function") {
                console.log("data555", response.data);
                await callback()
            }


        } catch (error) {
            console.log("data=>delete", error)
            setIsLoading(false)
            setError(error.response.data.message)

        }

    }

    return { error, isLoading, data, deleteAdmin }
}