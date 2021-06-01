import React, { useEffect, useState } from "react";
import { CompanyDto } from "../common/Company.dto";
import { PlayerDto } from "../common/Player.dto";
import { CompanyList } from "../components/CompanyList/CompanyList";
import { useTools } from "../hooks/tools.hook";
import {
  InfoBox,
  InfoBoxElement,
  InfoBoxTitle,
  InfoBoxValue,
  StocksBox,
  Wrapper,
} from "../styles/Portfolio.styles";

type Data = [string, number, number][];

const calcCurrentPrice = (res: Data) => {
  let acc = 0;
  res.map((e) => (acc += e[2]));
  return acc;
};

export const Portfolio: React.FC = () => {
  const { req, api } = useTools();
  const [player, setPlayer] = useState<PlayerDto>();
  const [data, setData] = useState<Data>([]);
  const [currentPrice, setCurrentPrice] = useState<number>();

  useEffect(() => {
    req<null, PlayerDto>({
      url: api.player,
    }).then((res) => setPlayer(res));
  }, []);

  useEffect(() => {
    fetchData();
  }, [player]);

  const fetchData = async() => {
    if (!player) {
      return;
    }
    const res: Data = [];
    for (const ticker in player.portfolio.stocks) {
      let stockPrice = 0;
      await req<{ ticker: string }, CompanyDto>({
        url: api.companyByTicker(ticker),
      }).then((res) => (stockPrice = res.stockPrice));
      const count = player.portfolio.stocks[ticker].length;
      res.push([ticker, count, stockPrice * count]);
    }
    setData(res);
    setCurrentPrice(calcCurrentPrice(res));
  };

  return (
    <Wrapper>
      <InfoBox>
        <InfoBoxElement>
          <InfoBoxTitle>Cash</InfoBoxTitle>
          <InfoBoxValue>${player?.cash}</InfoBoxValue>
        </InfoBoxElement>
        <InfoBoxElement>
          <InfoBoxTitle>Origin</InfoBoxTitle>
          <InfoBoxValue>${player?.portfolio.originPrice}</InfoBoxValue>
        </InfoBoxElement>
        <InfoBoxElement>
          <InfoBoxTitle>Current</InfoBoxTitle>
          <InfoBoxValue>${currentPrice}</InfoBoxValue>
        </InfoBoxElement>
      </InfoBox>
      <StocksBox>
        {data.map((e) => (
          <CompanyList left={e[0]} middle={e[1]} right={e[2]} />
        ))}
      </StocksBox>
    </Wrapper>
  );
};
