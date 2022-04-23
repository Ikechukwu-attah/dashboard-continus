import { useState } from "react";
import { shockSensingTableAPI } from "../../../../Authorization/ServerPaths";
import axios from '../../../../Authorization/Axios'






export const useGetShockingSensingTable = () => {
    const [data, setData] = useState();
    const [totalPages, setTotalPages] = useState(0)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const getShockingSensingTable = async(searchFilter) => {
        const url = searchFilter ? `${shockSensingTableAPI}/${searchFilter}` : shockSensingTableAPI;
        setIsLoading(true)
        try {

            const response = await axios.get(url)
            setData(response.data.data.records)
            console.log("shocking sense table", response.data.data.records)
            setIsLoading(false)
            const { data: { pagination: { total_pages } } } = response.data
            setTotalPages(total_pages)

        } catch (error) {
            setError(error.response)
            console.log("shocking sense error", error.response);
        }

    }

    return { getShockingSensingTable, data, error, isLoading, totalPages }

}