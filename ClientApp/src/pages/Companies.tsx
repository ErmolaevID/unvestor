import React, { useEffect, useState } from "react";
import { CompanyDto } from "../common/Company.dto";
import { CompanyList } from "../components/CompanyList/CompanyList";
import { Loader } from "../components/Loader/Loader";
import { useAPIs } from "../hooks/apis.hook";
import { useHttp } from "../hooks/http.hook";
import { Content, Wrapper } from "../styles/Companies.styles";

export const Companies: React.FC = () => {
  const [req, routes] = [useHttp(), useAPIs()];
  const [data, setData] = useState<CompanyDto[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    req<null, CompanyDto[]>({
      url: routes.allCompanies,
    }).then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return (
    <Wrapper>
      {loading ? (
        <Loader />
      ) : (
        <Content>
          {data?.map((e) => (
            <CompanyList
              left={e.title}
              middle={e.stockPrice}
              right={e.ticker}
              link={e.ticker}
            />
          ))}
        </Content>
      )}
    </Wrapper>
  );
};
