import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CompanyDto } from "../common/Company.dto";
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
import { PlayerDto } from "../common/Player.dto";
import { CompanyStockChart } from "../components/CompanyStockChart/CompanyStockChart";
import { Loader } from "../components/Loader/Loader";
import { useTools } from "../hooks/tools.hook";

interface Props {
  handleAction: () => void;
}

const notify = (
  companyTicker: string,
  stockCount: number,
  action: "bought" | "sold"
) => toast.success(`You ${action} ${stockCount} stocks of ${companyTicker}`);

export const Company: React.FC<Props> = ({ handleAction }) => {
  const { req, api } = useTools();
  const [counter, setCounter] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [company, setCompany] = useState<CompanyDto>();
  const [player, setPlayer] = useState<number>();
  const { ticker } = useParams<{ ticker: string }>();

  const fetchCompanies = () =>
    req<null, CompanyDto>({
      url: api.companyByTicker(ticker),
    });

  const fetchPlayer = () =>
    req<null, PlayerDto>({
      url: api.player,
    });

  useEffect(() => {
    Promise.all([fetchCompanies(), fetchPlayer()]).then((values) => {
      setCompany(values[0]);
      setPlayer(
        values[1].portfolio.stocks[values[0].ticker as string]?.length ?? 0
      );
      setLoading(false);
    });
  }, []);

  const handleClick = async(
    ticker: string,
    count: number,
    type: "buy" | "sell"
  ) => {
    await req({
      url: api.sellOrBuyStocks(type),
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
    <Loader />
  ) : (
    <Wrapper>
      <Toaster />
      <CompanyTitle>
        {company?.title} (you have {player} stock)
      </CompanyTitle>
      <CompanyTicker>{company?.ticker}</CompanyTicker>
      <Box>
        <Chart>
          <CompanyStockChart company={company as CompanyDto} />
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
