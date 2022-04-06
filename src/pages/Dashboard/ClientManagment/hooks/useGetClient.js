import { useState } from 'react'
import axios from '../../../../Authorization/Axios'
import { getAllClientAPI } from '../../../../Authorization/ServerPaths'



export const useGetAllClient = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const getAllClient = async() => {

        setIsLoading(true)
        try {
            const response = await axios.get(getAllClientAPI)
            setIsLoading(false)
            setData(response.data.data.clients)
            console.log("response=>clients", response.data.data.clients)

        } catch (error) {
            setIsLoading(false);
            setError(error.response.data.message)

        }
    }


    return { data, error, getAllClient, isLoading }
}