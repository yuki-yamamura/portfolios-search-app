import {
  prefecturesApiResponseSchema,
  type PrefecturesApiResponseType,
} from '@/schemas/prefecturesApiResponseSchema';
import axios from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (
  _req: NextApiRequest,
  res: NextApiResponse<PrefecturesApiResponseType>,
) => {
  const { data } = await axios.get<PrefecturesApiResponseType>(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    {
      headers: {
        'X-API-KEY': process.env.API_KEY,
      },
    },
  );
  const { success } = prefecturesApiResponseSchema.safeParse(data);

  if (success) {
    res.json(data);
  } else {
    res.status(400).end();
  }
};

export default handler;
