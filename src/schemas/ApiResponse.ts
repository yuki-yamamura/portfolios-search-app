import { RegionalPortfolio } from '@/schemas/RegionalPortfolio';
import z from 'zod';

export const SuccessApiResponse = z.object({
  message: z.string().nullable(),
  result: RegionalPortfolio,
});

export const ErrorApiResponse = z.object({
  statusCode: z.string(),
  message: z.string(),
  description: z.string(),
});

export const ApiResponse = SuccessApiResponse.or(ErrorApiResponse);
