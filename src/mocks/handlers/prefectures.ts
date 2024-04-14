import { fakePrefectures } from '@/mocks/fakeData/fakePrefectures';
import { rest } from 'msw';

import type { PrefecturesApiResponseType } from '@/schemas/prefecturesApiResponseSchema';

export const prefectures = rest.get<PrefecturesApiResponseType>(
  '/api/prefectures',
  (_req, res, ctx) => {
    return res(ctx.json(fakePrefectures));
  },
);
