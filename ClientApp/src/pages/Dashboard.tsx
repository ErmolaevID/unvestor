import React, { useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { StockChartCard } from "../components/StocksChartCard/StocksChartCard";
import { CompanyDto } from "../common/Company.dto";
import { Wrapper } from "../styles/Dashboard.styles";
import { useAPIs } from "../hooks/apis.hook";

export const Dashboard: React.FC = () => {
  const [req, routes] = [useHttp(), useAPIs()];
  const [data, setData] = useState<CompanyDto[]>([]);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    req<null, CompanyDto[]>({
      url: routes.allCompanies,
      method: "GET",
    }).then((e) => setData(e));
  }, [tick]);

  useEffect(() => {
    setInterval(() => {
      if (window.location.pathname === "/dashboard") {
        req({
          url: routes.updateStockMarket,
          method: "POST",
        });
        setTick((prev) => ++prev);
      }
    }, 7000);
  }, []);

  return (
    <Wrapper>
      {data.map((e) => (
        <StockChartCard data={e} />
      ))}
    </Wrapper>
  );
};
