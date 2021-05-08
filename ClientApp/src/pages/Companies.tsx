import React, { useEffect, useState } from "react";
import { CompanyDto } from "../common/Company.dto";
import { CompanyList } from "../components/CompanyList/CompanyList";
import { Loader } from "../components/Loader/Loader";
import { useHttp } from "../hooks/http.hook";
import { Wrapper } from "../styles/Companies.styles";

export const Companies = () => {
  const req = useHttp();
  const [data, setData] = useState<CompanyDto[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    req<null, CompanyDto[]>({
      url: "sm/companies",
    }).then(res => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return (
    <Wrapper>
      {loading ? (
        <Loader />
      ) : (
        <>
          {data?.map((e) => (
            <CompanyList
              title={e.title}
              price={e.stockPrice}
              ticker={e.ticker}
            />
          ))}
        </>
      )}
    </Wrapper>
  );
};
