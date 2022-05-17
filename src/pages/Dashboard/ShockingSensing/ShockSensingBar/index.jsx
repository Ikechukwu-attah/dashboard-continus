import React, { useEffect, useState } from "react";
import { StyledBox } from "../../../../components/common/Basics/DivBox";
import { dummyShockingData } from "../../../../DUMMYDATACHART";
import {
  BarChart,
  Bar,
  Label,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  // Legend,
  ResponsiveContainer,
} from "recharts";

const ShockSensingBar = ({ data }) => {
  const [graphShockSensingData, setGraphShockSensingData] = useState([]);

  useEffect(() => {
    if (data) {
      const newData = data.map((data) => {
        data.Truck = data.data.Truck;
        data["Total number of shocks"] = data.data["Total number of shocks"];
        // data.Driver = data.data.Driver;
        // data["Intensity (%)"] = data.data["Intensity [%]"];
        // data["Shock threshold (%)"] = data.data["Shock threshold [%]"];

        return data;
      });

      setGraphShockSensingData(newData);
    }
  }, [data]);

  return (
    <StyledBox
      marginTop="3rem"
      padding="1rem 8rem"
      height="60vh"
      style={{ maxWidth: "100vw", overflowX: " scroll " }}
    >
      {/* <ResponsiveContainer width="100%"> */}
      <BarChart
        // width={10}
        // height={500}
        width={2000}
        height={500}
        data={graphShockSensingData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="Truck"
          stroke="#000000"
          tick={{ fontSize: 10 }}
          domain={["auto", "auto"]}
          angle={-45}
          textAnchor="end"
          height={60}
        >
          <Label value="Trucks" offset={0} position="insideBottom" />
        </XAxis>
        <YAxis
          label={{
            value: "Total Number of Shock",
            angle: -90,
            position: "insideLeft",
          }}
          stroke="#000000"
          domain={[0, "dataMax + 0"]}
          tickCount={8}
        />
        <Tooltip cursor={{ fill: "transparent" }} />
        {/* <Legend /> */}

        <Bar dataKey="Total number of shocks" fill="#E8743B" />
      </BarChart>
      {/* </ResponsiveContainer> */}
    </StyledBox>
  );
};

export default ShockSensingBar;
