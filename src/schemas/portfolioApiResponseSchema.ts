import { portfolioSchema } from '@/schemas/portfolioSchema';
import z from 'zod';

export const portfolioApiResponseSchema = z.object({
  message: z.string().nullable(),
  result: portfolioSchema,
});

export type PortFolioApiResponseType = z.infer<
  typeof portfolioApiResponseSchema
>;
