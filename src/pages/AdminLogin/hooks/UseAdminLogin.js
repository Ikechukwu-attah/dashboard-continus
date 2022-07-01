import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { adminLoginAPI } from "../../../Authorization/ServerPaths";
import axios from '../../../Authorization/Axios'
import cookie from 'js-cookie'







export const useAdminLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);


    const loginAdmin = async(data) => {
        setIsLoading(true);
        try {
            const response = await axios.post(adminLoginAPI, data)
            setIsLoading(false);
            setData(response);
            cookie.set('userToken', response.data.data.token);
            // navigate('/client-management')
            window.location.reload()
        } catch (error) {
            setIsLoading(false);
            setError(error.response.data.message);
        }
    }

    return { loginAdmin, data, error, isLoading }
}