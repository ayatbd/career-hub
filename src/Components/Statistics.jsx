import React from "react";
import "../Components/Custom.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
const Statistics = () => {
  const data = [
    {
      name: "1st",
      uv: 60,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "2nd",
      uv: 60,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "3rd",
      uv: 60,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "4th",
      uv: 58,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "5th",
      uv: 54,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "7th",
      uv: 50,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "8th",
      uv: 54,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="mt-12">
      <h4 className="font-bold mb-4">Assignment Marks Chart</h4>
      <div className="mt-12 flex justify-center items-center">
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </div>
    </div>
  );
};

export default Statistics;
