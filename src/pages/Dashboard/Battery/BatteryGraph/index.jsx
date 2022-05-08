import React from "react";
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
import { Theme } from "../../../../Theme";

const BatteryGraph = ({ data }) => {
  return (
    <StyledBox
      marginTop="3rem"
      padding="1rem 8rem"
      background={Theme.colors.neutralColor}
      height="60vh"
    >
      <ResponsiveContainer width="100%" height="100%">
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
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="bat"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="critical"
            stroke="#E8743B"
            strokeWidth={1.5}
            dot={false}
            // strokeDasharray="3 3"
          />

          <Line
            type="monotone"
            dataKey="low"
            stroke="#19A979"
            strokeWidth={1.5}
            dot={false}

            // strokeDasharray="3 3"
          />
        </LineChart>
      </ResponsiveContainer>
    </StyledBox>
  );
};

export default BatteryGraph;
