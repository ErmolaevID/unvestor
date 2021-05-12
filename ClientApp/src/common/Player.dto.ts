export interface PlayerDto {
  id: number;
  cash: number;
  portfolio: PortfolioDto;
}

export interface PortfolioDto {
  stocks: StocksElement;
  originPrice: number;
}

export interface StocksElement {
  [ticker: string]: StockDto[];
}

export interface StockDto {
  companyTitle: string;
  companyTicker: string;
  originPrice: number;
  purchaseTime: number;
}