import React, { useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { StockChartCard } from "../components/StocksChartCard/StocksChartCard";
import { CompanyDto } from "../common/Company.dto";
import { Wrapper } from "../styles/Dashboard.styles";

export const Dashboard = () => {
  const req = useHttp();
  const [data, setData] = useState<CompanyDto[]>([]);
  const [tick, setTick] = useState(0);
  
  useEffect(() => {
    req<null, CompanyDto[]>({
      url: "sm/companies",
      method: "GET",
    }).then(e => setData(e));
  }, [tick]);

  useEffect(() => {
    setInterval(() => {
      if (window.location.pathname === "/dashboard") {
        req({
          url: "/sm/update",
          method: "POST",
        });
        setTick(prev => prev + 1);
      }
    }, 10000);
  }, []);

  return (
    <Wrapper>
      {data.map(e => <StockChartCard data={e} />)}
    </Wrapper>
  );
};
