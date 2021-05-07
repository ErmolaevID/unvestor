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
  return loading ? (
    <>Loading</>
  ) : (
    <div>
      <div>{company?.title}</div>
      <StockChartCard data={company as CompanyDto} />
    </div>
  );
};
