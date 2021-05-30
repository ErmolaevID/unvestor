import React from "react";
import { YAxis, Tooltip, Area, AreaChart } from "recharts";
import { CompanyDto } from "../../common/Company.dto";

interface Props {
  company: CompanyDto;
}

export const CompanyStockChart: React.FC<Props> = ({ company }) => {
  return (
    <AreaChart
      width={950}
      height={340}
      data={company.stockPriceHistory.map((el) => {
        return { n: el };
      })}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
      </defs>
      <Area
        type="monotone"
        dataKey="n"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
      <YAxis />
      <Tooltip />
    </AreaChart>
  );
};
