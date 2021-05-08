import React, { useEffect } from "react";
import { useHttp } from "../hooks/http.hook";

export const Portfolio = () => {
  const req = useHttp();
  useEffect(() => {
    req({
      url: "/sm/player",
    }).then(res => console.log(res));
  }, []);
  return (
    <></>
  );
};