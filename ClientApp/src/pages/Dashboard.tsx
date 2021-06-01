import React, { useEffect, useState } from "react";
import { StockChartCard } from "../components/StocksChartCard/StocksChartCard";
import { CompanyDto } from "../common/Company.dto";
import { Wrapper } from "../styles/Dashboard.styles";
import { useTools } from "../hooks/tools.hook";

export const Dashboard: React.FC = () => {
  const { req, api } = useTools();
  const [data, setData] = useState<CompanyDto[]>([]);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    req<null, CompanyDto[]>({
      url: api.allCompanies,
    }).then((e) => setData(e));
  }, [tick]);

  useEffect(() => {
    setInterval(() => {
      if (window.location.pathname === "/dashboard") {
        req({
          url: api.updateStockMarket,
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
