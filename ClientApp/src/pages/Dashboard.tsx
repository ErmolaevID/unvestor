import React from "react";
import { useHttp } from "../hooks/http.hook";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

export const Dashboard = () => {
  const req = useHttp();
  // setInterval(() => {
  //   req({
  //     url: "/sm/update",
  //     method: "POST",
  //   });
  // }, 5000);
  const data = [
    { name: "PageA", price: 400, pv: 2400, amt: 2 },
    { name: "PageB", price: 500, pv: 2500, amt: 8 },
    { name: "PageB", price: 500, pv: 2500, amt: 2500 },
    { name: "PageB", price: 500, pv: 1000, amt: 100 },
    { name: "PageB", price: 500, pv: 2500, amt: 2500 },
    { name: "PageB", price: 500, pv: 2500, amt: 2500 },
    { name: "PageB", price: 900 },
  ];
  return (
    <LineChart width={1000} height={200} data={data}>
      <Line type="monotone" dataKey="price" stroke="#8884d8" />
      <XAxis />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};
