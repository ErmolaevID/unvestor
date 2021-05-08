import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CompanyDto } from "../common/Company.dto";
import { StockChartCard } from "../components/StocksChartCard/StocksChartCard";
import { useHttp } from "../hooks/http.hook";

export const Company = () => {
  const req = useHttp();
  const [loading, setLoading] = useState<boolean>(true);
  const [company, setCompany] = useState<CompanyDto>();
  const { ticker } = useParams<{ ticker: string }>();
  useEffect(() => {
    req<null, CompanyDto>({
      url: `/sm/${ticker}`,
    })
      .then((res) => setCompany(res))
      .then((res) => setLoading(false));
  }, []);
  const handleBuy = (ticker: string, count: number) => {
    req({
      url: "/sm/buy",
      method: "POST",
      body: {
        ticker,
        count,
      },
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res);
  };
  const handleSale = (ticker: string, count: number) => {
    req({
      url: "/sm/sale",
      method: "POST",
      body: {
        ticker,
        count,
      },
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res);
  };

  return loading ? (
    <>Loading</>
  ) : (
    <div>
      <StockChartCard data={company as CompanyDto} />
      <button onClick={() => handleBuy(company?.ticker as string, 1)}>Buy</button>
      <button onClick={() => handleSale(company?.ticker as string, 1)}>Sale</button>
    </div>
  );
};
