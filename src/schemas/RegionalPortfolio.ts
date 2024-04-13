import { PortfolioData } from '@/schemas/PortfolioData';
import z from 'zod';

export const RegionalPortfolio = z.object({
  prefCode: z.string(),
  prefName: z.string(),
  year: z.string(),
  matter: z.string(),
  class: z.string(),
  data: z.array(PortfolioData),
  allcount: z.number(),
  otherscount: z.number(),
});
