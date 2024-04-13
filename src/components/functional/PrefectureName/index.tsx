import axios from 'axios';
import useSWR from 'swr';

import type { SuccessApiResponse } from '@/types/ApiResponse';

// todo: API Route の動作確認に使用してから削除
const PrefectureName = () => {
  const { data, isLoading } = useSWR(
    '/api/portfolio?prefCode=2&year=2012&matter=1&class=1',
    async (url: string) => {
      const response = await axios.get<SuccessApiResponse>(url);

      return response.data;
    },
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Something went wrong</div>;
  }

  return <div>{`Prefecture Name: ${data.result.prefName}`}</div>;
};

export default PrefectureName;
