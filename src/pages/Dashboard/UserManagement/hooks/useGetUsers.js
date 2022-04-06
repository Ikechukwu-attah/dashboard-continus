import { useEffect, useState } from "react"
import axios from "../../../../Authorization/Axios"
import { getAllAdminAPI } from "../../../../Authorization/ServerPaths";





export const useGetAllUsers = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const getAllUsers = async() => {
        setIsLoading(true)
        try {
            const response = await axios.get(getAllAdminAPI)

            setData(response.data.data.admins);
            console.log("response==>data", response.data.data.admins);
            setIsLoading(false)

        } catch (error) {
            setIsLoading(false);
            setError(error.response.data.message)

        }
    }




    return { getAllUsers, useGetAllUsers, data, error, isLoading }
}