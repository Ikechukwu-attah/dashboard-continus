import React from "react";
import {
  BarChart,
  Bar,
  Label,
  Cell,
  XAxis,
  LabelList,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { StyledBox } from "../../../../components/common/Basics/DivBox";
import { StyledTextHeading } from "../../../../components/common/Basics/Heading";

const AvaliablityGraph = ({ data, isLoading }) => {
  return (
    <StyledBox marginTop="3rem" padding="1rem 8rem 3rem 8rem" height="55vh">
      {data?.length && !isLoading ? (
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
            <XAxis dataKey="day" stroke="#000000" angle={-10}>
              <Label value="Days" offset={-5} position="insideBottom" />
            </XAxis>
            <YAxis
              label={{
                value: "Uptime (hours)",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip />
            {/* <Legend /> */}

            <Bar dataKey="hours" fill="#E8743B" />
          </BarChart>
        </ResponsiveContainer>
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
    </StyledBox>
  );
};

export default AvaliablityGraph;
