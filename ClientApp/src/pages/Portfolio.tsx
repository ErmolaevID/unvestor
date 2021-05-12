import React, { useEffect, useState } from "react";
import { CompanyDto } from "../common/Company.dto";
import { PlayerDto } from "../common/Player.dto";
import { CompanyList } from "../components/CompanyList/CompanyList";
import { useHttp } from "../hooks/http.hook";
import { InfoBox, InfoBoxElement, InfoBoxTitle, InfoBoxValue, StocksBox, Wrapper } from "../styles/Portfolio.styles";

export const Portfolio = () => {
  const req = useHttp();
  const [player, setPlayer] = useState<PlayerDto>();
  const [d, setD] = useState<any[]>([]);
  const [acc, setAcc] = useState<any>();

  useEffect(() => {
    req<null, PlayerDto>({
      url: "/sm/player",
    }).then(res => { 
      setPlayer(res); 
    });
  }, []);

  useEffect(() => {
    fu();
  }, [player]);

  const fu = async() => {
    if (!player) {
      return;
    }
    const res = [];
    for (const l in player.portfolio.stocks) {
      const ticker = l;
      let x = 0;
      await req<{ticker: string}, CompanyDto>({
        url: `/sm/${ticker}`
      }).then(res => x = res.stockPrice);
      const count = player.portfolio.stocks[l].length;
      res.push([ticker, count, x * count]);
    }
    setD(res);
    setAcc(calc(res));
  };

  const calc = (res: any) => {
    let acc = 0;
    res.map((e: any) => acc +=e[2]);
    return acc;
  };

  return (
    <Wrapper>
      <InfoBox>
        <InfoBoxElement>
          <InfoBoxTitle>
            Cash
          </InfoBoxTitle>
          <InfoBoxValue>
            ${player?.cash}
          </InfoBoxValue>
        </InfoBoxElement> 
        <InfoBoxElement> 
          <InfoBoxTitle>
            Origin
          </InfoBoxTitle>
          <InfoBoxValue>
            ${player?.portfolio.originPrice}
          </InfoBoxValue>
        </InfoBoxElement>
        <InfoBoxElement> 
          <InfoBoxTitle>
            Current
          </InfoBoxTitle>
          <InfoBoxValue>
            ${acc}
          </InfoBoxValue>
        </InfoBoxElement>
      </InfoBox>
      <StocksBox>
        { d.map(e => <CompanyList left={e[0]} middle={e[1]} right={e[2]} />) }
      </StocksBox>
    </Wrapper>
  );
};