import type { PortfolioData } from '@/types/PortfolioData';

export type RegionalPortfolio = {
  prefCode: string;
  prefName: string;
  year: string;
  matter: string;
  class: string;
  data: PortfolioData[];
  allcount: number;
  otherscount: number;
};
