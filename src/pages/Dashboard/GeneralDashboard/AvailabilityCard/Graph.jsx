import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
} from "recharts";
import { AvailiablityGraph } from "../../../../DUMMYDATACHART";
import { StyledBox } from "../../../../components/common/Basics/DivBox";

const AvailabilityGraph = () => {
  const data = [
    {
      name: "Jan",
      uv: 80,
      availability: 80,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      availability: 90,
      amt: 2210,
    },
    {
      name: "Apr",
      uv: 2000,
      availability: 80,
      amt: 2290,
    },
    {
      name: "May",
      uv: 2780,
      availability: 75,
      amt: 2000,
    },
    {
      name: "Jun",
      uv: 1890,
      availability: 80,
      amt: 2181,
    },
    {
      name: "Jul",
      uv: 2390,
      availability: 75,
      amt: 2500,
    },
    {
      name: "Aug",
      uv: 3490,
      availability: 90,
      amt: 2100,
    },

    {
      name: "Sep",
      uv: 3490,
      availability: 84,
      amt: 2100,
    },

    {
      name: "Oct",
      uv: 3490,
      availability: 100,
      amt: 2100,
    },

    {
      name: "Nov",
      uv: 3490,
      availability: 80,
      amt: 2100,
    },

    {
      name: "Dec",
      uv: 3490,
      availability: 100,
      amt: 2100,
    },
  ];
  return (
    <StyledBox marginTop="3rem">
      <ResponsiveContainer width="100%" height="100%" aspect={6.0 / 3.0}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" dy={-5}>
            {" "}
            <Label value="Month" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis
            label={{
              value: "Availability (%) ",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip />
          {/* <Legend /> */}
          <Line
            type="monotone"
            dataKey="availability"
            stroke="#E8743B"
            activeDot={{ r: 8 }}
            dot={false}
          />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </StyledBox>
  );
};

export default AvailabilityGraph;
