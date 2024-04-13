import type { RegionalPortfolio } from '@/types/RegionalPortfolio';

export type SuccessApiResponse = {
  message: string | null;
  result: RegionalPortfolio;
};

export type ErrorApiResponse = {
  statusCode: string;
  message: string;
  description: string;
};

export type ApiResponse = SuccessApiResponse | ErrorApiResponse;
