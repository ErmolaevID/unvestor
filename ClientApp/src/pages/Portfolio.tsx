import React, { useEffect, useState } from "react";
import { CompanyDto } from "../common/Company.dto";
import { PlayerDto } from "../common/Player.dto";
import { CompanyList } from "../components/CompanyList/CompanyList";
import { useAPIs } from "../hooks/apis.hook";
import { useHttp } from "../hooks/http.hook";
import {
  InfoBox,
  InfoBoxElement,
  InfoBoxTitle,
  InfoBoxValue,
  StocksBox,
  Wrapper,
} from "../styles/Portfolio.styles";

export const Portfolio: React.FC = () => {
  const [req, routes] = [useHttp(), useAPIs()];
  const [player, setPlayer] = useState<PlayerDto>();
  const [data, setData] = useState<any>([]);
  const [currentPrice, setCurrentPrice] = useState<number>();

  useEffect(() => {
    req<null, PlayerDto>({
      url: routes.player,
    }).then((res) => setPlayer(res));
  }, []);

  useEffect(() => {
    fu();
  }, [player]);

  const fu = async() => {
    if (!player) {
      return;
    }
    const res = [];
    for (const ticker in player.portfolio.stocks) {
      let stockPrice = 0;
      await req<{ ticker: string }, CompanyDto>({
        url: routes.companyByTicker(ticker),
      }).then((res) => (stockPrice = res.stockPrice));
      const count = player.portfolio.stocks[ticker].length;
      res.push([ticker, count, stockPrice * count]);
    }
    setData(res);
    setCurrentPrice(calcCurrentPrice(res));
  };

  const calcCurrentPrice = (res: any) => {
    let acc = 0;
    res.map((e: any) => (acc += e[2]));
    return acc;
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
        {data.map((e: any) => (
          <CompanyList left={e[0]} middle={e[1]} right={e[2]} />
        ))}
      </StocksBox>
    </Wrapper>
  );
};
