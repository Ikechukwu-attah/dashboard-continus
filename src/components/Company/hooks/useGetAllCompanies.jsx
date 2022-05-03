import { useState } from "react";
import axios from "../../../Authorization/Axios";
import { allCompanyAPI } from "../../../Authorization/ServerPaths";

export const useGetAllCompanies = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [data, setData] = useState();

    const getAllCompany = async() => {
        setIsLoading(true);
        try {
            const response = await axios.get(allCompanyAPI);
            setData(response.data.data.records);
            console.log("company response", response.data.data.records);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error.response);
            setError(error.response.data.message);
        }
    };

    return { getAllCompany, error, isLoading, data };
};