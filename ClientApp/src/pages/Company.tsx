import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { YAxis, Tooltip, Area, AreaChart } from "recharts";
import { CompanyDto } from "../common/Company.dto";
import { useAPIs } from "../hooks/apis.hook";
import { useHttp } from "../hooks/http.hook";
import toast, { Toaster } from "react-hot-toast";
import {
  CompanyTitle,
  CompanyTicker,
  Wrapper,
  Box,
  Chart,
  Buttons,
  BuyButton,
  SellButton,
  Counter,
  CounterWrapper,
} from "../styles/Company.styles";

interface Props {
  handleAction: () => void;
}

const notify = (
  companyTicker: string,
  stockCount: number,
  action: "bought" | "sold"
) => toast.success(`You ${action} ${stockCount} stocks of ${companyTicker}`);

export const Company: React.FC<Props> = ({ handleAction }) => {
  const [req, routes] = [useHttp(), useAPIs()];
  const [counter, setCounter] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [company, setCompany] = useState<CompanyDto>();
  const { ticker } = useParams<{ ticker: string }>();

  useEffect(() => {
    req<null, CompanyDto>({
      url: routes.companyByTicker(ticker),
    }).then((res) => {
      setCompany(res);
      setLoading(false);
    });
  }, []);

  const handleClick = async(
    ticker: string,
    count: number,
    type: "buy" | "sell"
  ) => {
    await req({
      url: routes.sellOrBuyStocks(type),
      method: "POST",
      body: {
        ticker,
        count,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    notify(ticker, count, type === "buy" ? "bought" : "sold");
    handleAction();
  };

  return loading ? (
    <>Loading</>
  ) : (
    <Wrapper>
      <Toaster />
      <CompanyTitle>{company?.title}</CompanyTitle>
      <CompanyTicker>{company?.ticker}</CompanyTicker>
      <Box>
        <Chart>
          <AreaChart
            width={950}
            height={340}
            data={company?.stockPriceHistory.map((el) => {
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
        </Chart>
        <Buttons>
          <BuyButton
            onClick={() =>
              handleClick(company?.ticker as string, counter, "buy")
            }
          >
            Buy
          </BuyButton>
          <SellButton
            onClick={() =>
              handleClick(company?.ticker as string, counter, "sell")
            }
          >
            Sell
          </SellButton>
          <CounterWrapper onClick={() => setCounter((prev) => ++prev)}>
            <Counter>{counter}</Counter>
          </CounterWrapper>
        </Buttons>
      </Box>
    </Wrapper>
  );
};
