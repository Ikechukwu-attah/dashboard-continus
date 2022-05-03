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
  console.log("tuck data modified", truckData);

  useEffect(() => {
    if (data) {
      console.log("Is data for truck working ");
      console.table("data truck", data);
      const newData = data.map((data) => {
        data.Driving = data.data["Driving [h]"];
        data.Lifting = data.data["Lifting [h]"];
        data.Active = data.data["Active usage [h]"];
        data.Truck = data.data.Truck;

        return data;
      });

      console.log("newData graph", newData);

      setTruckData(newData);
    }
  }, [data]);
  return (
    <StyledBox
      marginTop="3rem"
      padding="1rem 8rem"
      // marginBottom="0 0 40rem 0"
      background={Theme.colors.neutralColor}
      height="60vh"
    >
      <ResponsiveContainer width="100%">
        <BarChart
          // width={1000}
          // height={500}
          data={truckData}
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
            // angle={-45}
            textAnchor="end"
            tick={{ fontSize: 10 }}
          >
            <Label value="Trucks" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis
            label={{
              value: "Percentage",
              angle: -90,
              position: "insideLeft",
            }}
            domain={[0, "dataMax + 0"]}
            tickCount={5}
          />
          <Tooltip />
          {/* <Legend /> */}

          <Bar dataKey="Active" fill="#E8743B" />
          <Bar dataKey="Driving" fill="#5899DA" />
          <Bar dataKey="Lifting" fill="#19A979" />
        </BarChart>
      </ResponsiveContainer>
    </StyledBox>
  );
};

export default TruckUsageGraph;
