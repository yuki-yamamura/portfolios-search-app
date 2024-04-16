import axios from 'axios';
import { useState } from 'react';
import useSWR from 'swr';

import type { PortFolioApiResponseType } from '@/schemas/portfolioApiResponseSchema';
import type { PortfolioDataType } from '@/schemas/portfolioDataSchema';
import type { PortfolioFormType } from '@/schemas/portfolioFormSchema';

export const usePortfoliosWithFilter = (
  defaultValues: PortfolioFormType,
): {
  portfolios: PortfolioDataType[];
  isLoading: boolean;
  updateFilterConditions: (filterConditions: PortfolioFormType) => void;
} => {
  const [filterConditions, setFilterConditions] =
    useState<PortfolioFormType>(defaultValues);

  const queryParams = new URLSearchParams(filterConditions).toString();
  const { data, isLoading } = useSWR(
    `/api/portfolio?${queryParams}`,
    async (url: string) => {
      const res = await axios.get<PortFolioApiResponseType>(url);

      return res.data;
    },
  );

  return {
    portfolios: data?.result.data ?? [],
    isLoading,
    updateFilterConditions: setFilterConditions,
  };
};
