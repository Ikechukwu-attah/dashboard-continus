import { useState } from "react";
import { exportCSVAPI } from "../Authorization/ServerPaths";
import axios from "../Authorization/Axios";

export const useGetCSVExport = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [csvData, setCsvData] = useState();
    const getCSVExport = async(data) => {
        setIsLoading(true);
        try {
            const {
                export: { entity, as },
            } = data;
            const url = `${exportCSVAPI}/${entity}`;
            const response = await axios.post(url, data);
            if (as === "download") {
                console.log("download link", response.data.data.link);
                const downloadLink = response.data.data.link;
                const fileName = downloadLink
                    .split("/")
                    .pop()
                    .split("#")[0]
                    .split("?")[0];
                console.log("filename=>", fileName.slice(-21));
                const file = fileName.slice(-21);
                const link = document.createElement("a");
                link.href = downloadLink;

                link.setAttribute("download", "file.csv");
                document.body.appendChild(link);
                link.click();

                // await axios
                //     .get({ url: downloadLink, responseType: "blob" })
                //     .then((response) => {
                //         const url = window.URL.createObjectURL(new Blob([response.data]));
                //     });
            }
            setCsvData(response);
            setIsLoading(false);
            console.log("assssss", as);

            console.log("export data", response);
        } catch (error) {
            setIsLoading(false);
            setError(error.response);
        }
    };

    return { getCSVExport, isLoading, error, csvData };
};