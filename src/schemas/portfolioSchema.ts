import { portfolioDataSchema } from '@/schemas/portfolioDataSchema';
import z from 'zod';

export const portfolioSchema = z.object({
  prefCode: z.string(),
  prefName: z.string(),
  year: z.string(),
  matter: z.string(),
  class: z.string(),
  data: z.array(portfolioDataSchema),
  allcount: z.number(),
  otherscount: z.number(),
});

export type PortfolioType = z.infer<typeof portfolioSchema>;
