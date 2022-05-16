import React, { useEffect, useState } from "react";
import { StyledBox } from "../../../../components/common/Basics/DivBox";
import {
  BarChart,
  Bar,
  Label,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Theme } from "../../../../Theme";

const TruckUsageGraph = ({ data }) => {
  const [truckData, setTruckData] = useState([]);
  // console.log("tuck data modified", truckData);
  console.log("truck now now", data);

  // useEffect(() => {
  //   if (data) {
  //     // console.log("Is data for truck working ");
  //     // console.table("data truck", data);
  //     // const newData = data.map((data) => {
  //     //   data.Driving = data.data["Driving [h]"];
  //     //   data.Lifting = data.data["Lifting [h]"];
  //     //   data.Active = data.data["Active usage [h]"];
  //     //   data.Truck = data.data.Truck;

  //     //   return data;
  //     // });

  //     // console.log("newData graph", newData);

  //     setTruckData(data);
  //   }
  // }, [data]);
  return (
    <StyledBox
      marginTop="3rem"
      padding="1rem 8rem"
      // marginBottom="0 0 40rem 0"
      background={Theme.colors.neutralColor}
      height="60vh"
      style={{ maxWidth: "100vw", overflowX: " scroll " }}
    >
      {/* <ResponsiveContainer width="100%"> */}
      <BarChart
        width={2000}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="truck"
          stroke="#000000"
          angle={-45}
          height={70}
          textAnchor="end"
          dy={5}
          tick={{ fontSize: 10 }}
        >
          <Label value="Trucks" position="insideBottom" />
        </XAxis>
        <YAxis
          label={{
            value: "Percentage",
            angle: -90,
            position: "insideLeft",
          }}
          domain={[5, "dataMax + 0"]}
          tickCount={5}
        />
        <Tooltip /> #19A979
        {/* <Legend /> */}
        <Bar dataKey="driving_percentage" fill="#E8743B" />
        <Bar dataKey="lifting_percentage" fill="#19A979" />
        {/* <Bar dataKey="Lifting" fill="#5899DA" /> */}
      </BarChart>
      {/* </ResponsiveContainer> */}
    </StyledBox>
  );
};

export default TruckUsageGraph;
