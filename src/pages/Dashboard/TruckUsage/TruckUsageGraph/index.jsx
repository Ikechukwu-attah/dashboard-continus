import React from "react";
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
  return (
    <StyledBox
      marginTop="3rem"
      padding="1rem 8rem"
      background={Theme.colors.neutralColor}
      height="60vh"
    >
      <ResponsiveContainer width="100%">
        <BarChart
          // width={1000}
          // height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#000000">
            <Label value="Trucks" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis
            label={{
              value: "Percentage",
              angle: -90,
              position: "insideLeft",
            }}
            domain={[0, "dataMax + 0"]}
          />
          <Tooltip />
          <Legend />

          <Bar dataKey="bis" fill="#E8743B" />
          <Bar dataKey="nb" fill="#5899DA" />
          <Bar dataKey="yu" fill="#19A979" />
        </BarChart>
      </ResponsiveContainer>
    </StyledBox>
  );
};

export default TruckUsageGraph;
