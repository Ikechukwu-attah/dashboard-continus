import { useState } from "react";
import { exportCSVAPI } from "../Authorization/ServerPaths";
import axios from "../Authorization/Axios";

export const useGetCSVExport = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [error, setError] = useState();
  const [csvData, setCsvData] = useState();
  const getCSVExport = async (data) => {
    const {
      export: { entity, as },
    } = data;

    const setIsLoading = as === "download" ? setIsDownloading : setIsExporting;
    try {
      const url = `${exportCSVAPI}/${entity}`;
      setIsLoading(true);
      const response = await axios.post(url, data);
      setIsLoading(false);
      if (as === "download") {
        const downloadLink = response?.data?.data?.link;
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
      console.log("assssss", as);

      console.log("export data", response);
    } catch (error) {
      setError(error?.response);
      setIsLoading(false);
    }
  };

  return { getCSVExport, isDownloading, isExporting, error, csvData };
};
