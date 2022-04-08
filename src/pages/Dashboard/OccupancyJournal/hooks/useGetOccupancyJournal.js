import { useState } from "react";
import axios from '../../../../Authorization/Axios'
import { occupancyJournalAPI } from "../../../../Authorization/ServerPaths";





export const useOccupancyJournal = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const getOccupancyJournal = async() => {

        setIsLoading(true)
        try {
            const response = await axios.get(occupancyJournalAPI)
            setIsLoading(false)
            console.log("occupancy journal ", response.data.data.records);
            setData(response.data.data.records);
            // console.log("data driver", data);

        } catch (error) {
            setError(error.response.data.message);
            console.log("occupancy error", error.response);
        }

    }


    return { data, getOccupancyJournal, isLoading, error }
}