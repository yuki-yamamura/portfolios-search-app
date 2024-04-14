import z from 'zod';

export const portfolioDataSchema = z.object({
  broadCode: z.string(),
  broadName: z.string(),
  middleCode: z.string(),
  middleName: z.string(),
  value: z.number(),
});

export type PortfolioDataType = z.infer<typeof portfolioDataSchema>[];
