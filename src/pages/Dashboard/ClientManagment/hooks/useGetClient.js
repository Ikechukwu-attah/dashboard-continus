import { useState } from 'react'
import axios from '../../../../Authorization/Axios'
import { getAllClientAPI } from '../../../../Authorization/ServerPaths'



export const useGetAllClient = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [totalPages, setTotalPages] = useState(0)

    const getAllClient = async(searchFilter) => {
        const url = searchFilter ? `${getAllClientAPI}/${searchFilter}` : getAllClientAPI

        setIsLoading(true)
        try {
            const response = await axios.get(url)
            setIsLoading(false)
            setData(response.data.data.clients)
            console.log("response=>clients", response.data.data.clients)
            const { data: { pagination: { total_pages } } } = response.data
            setTotalPages(total_pages)

        } catch (error) {
            setIsLoading(false);
            setError(error.response.data.message)

        }
    }


    return { data, error, getAllClient, isLoading, totalPages }
}