import React, { useEffect, useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { StyledBox } from "../../../../components/common/Basics/DivBox";
import { StyledTextHeading } from "../../../../components/common/Basics/Heading";
import { Theme } from "../../../../Theme";
import { formatDate } from "../../../../utils/FormatDate";

const BatteryGraph = ({ data, isLoading }) => {
  const [graphData, setGraphData] = useState();
  console.log("graphData", graphData);

  useEffect(() => {
    if (data) {
      const newData = data.map((data) => {
        data.hour = formatDate(data.data.Time)["hh:mm"];
        return data;
      });

      console.log("date", newData);
      setGraphData(newData);
    }
  }, [data]);
  // const day = new Date();
  // const result = formatDate("2021-11-17T07:34:26.000Z")["hh:mm"];

  // // const result = day.getHours() + ":" + day.getMinutes();
  // console.log("result time", result);
  return (
    <StyledBox
      marginTop="3rem"
      padding="1rem 8rem"
      background={Theme.colors.neutralColor}
      height="60vh"
      style={{ maxWidth: "100vw", overflowX: " scroll " }}
    >
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      {data?.length && !isLoading ? (
        <LineChart
          width={2000}
          height={400}
          data={graphData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" />
          <YAxis dataKey="value" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="hour"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#E8743B"
            strokeWidth={1.5}
            dot={false}
            // strokeDasharray="3 3"
          />

          {/* <Line
            type="monotone"
            dataKey="low"
            stroke="#19A979"
            strokeWidth={1.5}
            dot={false}

            // strokeDasharray="3 3"
          /> */}
        </LineChart>
      ) : (
        !isLoading && (
          <StyledTextHeading
            color="grey"
            textAlign="center"
            fontSize="2rem"
            paddingTop="1rem"
          >
            No Result found
          </StyledTextHeading>
        )
      )}

      {/* </ResponsiveContainer> */}
    </StyledBox>
  );
};

export default BatteryGraph;
