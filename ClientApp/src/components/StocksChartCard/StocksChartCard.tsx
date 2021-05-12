import React from "react";
import { Area, AreaChart, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { CompanyDto } from "../../common/Company.dto";
import { Info, Wrapper } from "./StockChartCard.styles";

export interface Props {
  data: CompanyDto;
}

export const StockChartCard: React.FC<Props> = ({
  data,
}) => {
  return (
    <Wrapper>
      <Info>
        <div>{data.title}</div>
        <div>${data.stockPrice}</div>
      </Info>
      <AreaChart width={950} height={200} data={data.stockPriceHistory.map(el => {
        const k = { n: el };
        return k;
      })}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="n" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <XAxis />
        <YAxis />
        <Tooltip />
      </AreaChart>
    </Wrapper>
  );
};