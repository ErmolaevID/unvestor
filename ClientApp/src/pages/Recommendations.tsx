import React, { useEffect, useState } from "react";
import { CompanyDto } from "../common/Company.dto";
import { CompanyList } from "../components/CompanyList/CompanyList";
import { Loader } from "../components/Loader/Loader";
import { useTools } from "../hooks/tools.hook";
import { Content, Title, Wrapper } from "../styles/Recommendations.styles";

export const Recommendations: React.FC = () => {
  const { req, api } = useTools();
  const [data, setData] = useState<CompanyDto[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    req<null, CompanyDto[]>({
      url: api.recommendations,
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
        <>
          <Title>
            <div>
              Recommendations are based on your cash
            </div>
          </Title>
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
        </>
      )}
    </Wrapper>
  );
};
