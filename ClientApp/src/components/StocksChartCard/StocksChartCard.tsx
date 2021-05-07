import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { CompanyDto } from "../../common/Company.dto";

export interface Props {
  data: CompanyDto;
}

export const StockChartCard: React.FC<Props> = ({
  data,
}) => {
  return (
    <div>
      <p>{data.title}</p>
      <p>{data.stockPrice}</p>
      <LineChart width={1000} height={200} data={data.stockPriceHistory.map(el => {
        const k = { n: el };
        return k;
      })}>
        <Line type="monotone" dataKey="n" stroke="#8884d8" />
        <XAxis />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};