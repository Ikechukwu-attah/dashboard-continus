import { useState } from "react";
import axios from "../../../Authorization/Axios";
import { switchCompanyAPI } from "../../../Authorization/ServerPaths";

export const useSwitchCompany = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState();

  const switchCompany = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(switchCompanyAPI, data);
      // console.log(
      //     "switch company response",
      //     response.data.data.user.company_id
      // );
      setData(response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.response);
      setError(error.response);
    }
  };

  return { switchCompany, error, isLoading, data };
};
