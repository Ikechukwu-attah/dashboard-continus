import React, { useEffect, useState } from "react";
import {
  // BarChart,
  // Bar,
  LineChart,
  Line,
  Label,
  Cell,
  XAxis,
  LabelList,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  ResponsiveContainer,
} from "recharts";
import { StyledBox } from "../../../../components/common/Basics/DivBox";
import { StyledTextHeading } from "../../../../components/common/Basics/Heading";
import { formatDate } from "../../../../utils/FormatDate";

const AvaliablityGraph = ({ data, isLoading }) => {
  console.log("monthly data", data);
  const [extractDay, setExtractDay] = useState();
  console.log("extracted data", extractDay);

  useEffect(() => {
    if (data) {
      const newData = data.map((data) => {
        // const day = new Date(data.day);
        // data.getDay = `${day.getDate()}/${day.getMonth()}`;

        data.getDay = formatDate(data.day)["dd/month"];
        console.log("format date", data.getDay);
        return data;
      });
      setExtractDay(newData);
      // console.log("newdate ==>", newData);
    }
  }, [data]);

  return (
    <StyledBox
      marginTop="3rem"
      padding="1rem 8rem"
      height="55vh"
      // background="red"
      // width="50vw"
      style={{ maxWidth: "100vw", overflowX: " scroll " }}
    >
      {data?.length && !isLoading ? (
        // <ResponsiveContainer width="100%">
        // <LineChart
        //   width={2000}
        //   height={400}
        //   data={extractDay}
        //   margin={{
        //     top: 5,
        //     right: 30,
        //     left: 20,
        //     bottom: 5,
        //   }}
        // >
        //   <CartesianGrid strokeDasharray="3 3" />
        //   <XAxis
        //     dataKey="getDay"
        //     stroke="#000000"
        //     angle={-45}
        //     tick={{ fontSize: 10 }}
        //     height={60}
        //     allowDuplicatedCategory={false}
        //     dy={10}
        //   >
        //     <Label value="Days" position="insideBottom" />
        //   </XAxis>

        //   <YAxis
        //     label={{
        //       value: "Uptime (hours)",
        //       angle: -90,
        //       position: "insideLeft",
        //     }}
        //   />
        //   <Tooltip />
        //   {/* <Legend /> */}
        //   {/* <Brush dataKey="getDay" height={12} stroke="#8884d8" /> */}

        //   <Line dataKey="hours" fill="#E8743B" barSize={40} />
        // </LineChart>

        // <ResponsiveContainer width="100%">
        //   <LineChart
        //     width={2000}
        //     height={400}
        //     data={extractDay}
        //     margin={{
        //       top: 5,
        //       right: 30,
        //       left: 20,
        //       bottom: 5,
        //     }}
        //   >
        //     <CartesianGrid strokeDasharray="3 3" />
        //     <XAxis
        //       dataKey="getDay"
        //       stroke="#000000"
        //       angle={-45}
        //       tick={{ fontSize: 10 }}
        //       height={60}
        //       allowDuplicatedCategory={false}
        //       dy={10}
        //     >
        //       <Label value="Days" position="insideBottom" />
        //     </XAxis>

        //     <YAxis
        //       // dataKey="hours"
        //       label={{
        //         value: "Uptime (%)",
        //         angle: -90,
        //         position: "insideLeft",
        //       }}
        //     />
        //     <Tooltip />
        //     {/* <Legend /> */}
        //     <Line
        //       type="monotone"
        //       dataKey="hours"
        //       stroke="#8884d8"
        //       activeDot={{ r: 8 }}
        //     />
        //     {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        //   </LineChart>
        // </ResponsiveContainer>

        // <ResponsiveContainer width="100%">
          <LineChart
            width={2000}
            height={400}
            data={extractDay}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="getDay"
              stroke="#000000"
              angle={-45}
              tick={{ fontSize: 10 }}
              height={60}
              allowDuplicatedCategory={false}
              dy={10}
            >
              <Label value="Days" position="insideBottom" />
              //{" "}
            </XAxis>
            <YAxis
              label={{
                value: "Uptime (%)",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip />
            {/* <Legend /> */}
            {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
            <Line type="monotone" dataKey="hours" stroke="#E8743B" />
          </LineChart>
      
      ) : (
        // </ResponsiveContainer>
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
