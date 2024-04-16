import axios from 'axios';
import useSWR from 'swr';

import type { PrefecturesApiResponseType } from '@/schemas/prefecturesApiResponseSchema';
import type { PrefectureType } from '@/schemas/prefectureSchema';

export const usePrefectures = (): {
  prefectures: PrefectureType[];
  isLoading: boolean;
} => {
  const { data, isLoading } = useSWR(
    '/api/prefectures',
    async (url: string) => {
      const res = await axios.get<PrefecturesApiResponseType>(url);

      return res.data;
    },
  );

  return {
    prefectures: data?.result ?? [],
    isLoading,
  };
};
