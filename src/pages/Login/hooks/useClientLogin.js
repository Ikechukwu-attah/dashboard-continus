import axios from '../../../Authorization/Axios'
import { clientLoginAPI } from '../../../Authorization/ServerPaths'
import cookie from 'js-cookie'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const useLoginClient = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const navigate = useNavigate();

    const loginClient = async(data) => {
        setIsLoading(true)
        try {

            const response = await axios.post(clientLoginAPI, data)
            console.log("login=>response", response);
            setIsLoading(false)
            setData(response)

            cookie.set('userToken', response.data.data.token);
            // navigate('/home')
            window.location.reload()

        } catch (error) {
            setIsLoading(false);
            console.log("error message77S", error)
            setError(error.response.data.message)
            console.log("ErrorMessage", error.response.data.message);

        }




    }
    return { error, data, isLoading, loginClient }
}