import z from 'zod';

export const PortfolioData = z.object({
  broadCode: z.string(),
  broadName: z.string(),
  middleCode: z.string(),
  middleName: z.string(),
  value: z.number(),
});
