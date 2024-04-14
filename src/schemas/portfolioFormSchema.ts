import { portfolioSchema } from '@/schemas/portfolioSchema';

import type { z } from 'zod';

export const portfolioFormSchema = portfolioSchema.pick({
  prefCode: true,
  year: true,
  matter: true,
  class: true,
});

export type PortfolioFormType = z.infer<typeof portfolioFormSchema>;
