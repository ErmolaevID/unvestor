import React, { useEffect, useState } from "react";
import { CompanyDto } from "../common/Company.dto";
import { CompanyList } from "../components/CompanyList/CompanyList";
import { useHttp } from "../hooks/http.hook";
import { Wrapper } from "../styles/Companies.styles";

export const Companies = () => {
  const req = useHttp();
  const [data, setData] = useState<CompanyDto[]>([]);

  useEffect(() => {
    req<null, CompanyDto[]>({
      url: "sm/companies",
      method: "GET",
    }).then((e) => setData(e));
  }, []);
  return (
    <Wrapper>
      {data.map((e) => (
        <CompanyList
          leftSide={e.title}
          middleSide={e.stockPrice}
          rightSide={e.ticker}
        />
      ))}
    </Wrapper>
  );
};
