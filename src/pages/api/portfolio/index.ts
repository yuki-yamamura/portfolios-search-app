import { withZod } from '@/lib/nextjs';
import { SuccessApiResponse } from '@/schemas/ApiResponse';
import axios from 'axios';
import { z } from 'zod';

import type { ApiResponse } from '@/schemas/ApiResponse';

const handler = withZod(
  z.object({
    query: z.object({
      prefCode: z.string(),
      year: z.string(),
      matter: z.string(),
      class: z.string(),
    }),
  }),
  async (req, res) => {
    const { data } = await axios.get<z.infer<typeof ApiResponse>>(
      'https://opendata.resas-portal.go.jp/api/v1/regionalEmploy/analysis/portfolio',
      {
        headers: {
          'X-API-KEY': process.env.API_KEY,
        },
        params: req.query,
      },
    );
    const { success } = SuccessApiResponse.safeParse(data);

    if (success) {
      res.json(data);
    } else {
      res.status(400).end();
    }
  },
);

export default handler;
