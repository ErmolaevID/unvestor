import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
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
      <LineChart width={950} height={200} data={data.stockPriceHistory.map(el => {
        const k = { n: el };
        return k;
      })}>
        <Line type="monotone" dataKey="n" stroke="#8884d8" />
        <XAxis />
        <YAxis />
        <Tooltip />
      </LineChart>
    </Wrapper>
  );
};