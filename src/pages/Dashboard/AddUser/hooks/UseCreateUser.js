import { useState } from 'react'

import axios from '../../../../Authorization/Axios'
import cookie from 'js-cookie'
import { createAdminAPI } from '../../../../Authorization/ServerPaths'




export const useCreateUser = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState();
    const [error, setError] = useState();

    const createUser = async(data) => {
        console.log("loading........")
        setIsLoading(true)
        try {
            const response = await axios.post(createAdminAPI, data)
            setIsLoading(false)
            setData(response);

            console.log("data----set", data);
        } catch (error) {
            setIsLoading(false);
            setError(error.response.data.message);


        }
    }

    return { createUser, data, isLoading, error }

}