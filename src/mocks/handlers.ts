import { fakeData } from './fakeData';
import { rest } from 'msw';

import type { ApiResponse } from '@/types/ApiResponse';

export const handlers = [
  rest.get<ApiResponse>('/api/portfolio', (req, res, ctx) => {
    // RESAS API で定義されている必須のクエリパラメータ
    // 参考: https://opendata.resas-portal.go.jp/docs/api/v1/regionalEmploy/analysis/portfolio.html
    const prefCode = req.url.searchParams.get('prefCode');
    const year = req.url.searchParams.get('year');
    const matter = req.url.searchParams.get('matter');
    const category = req.url.searchParams.get('class');

    const fakePortfolio = fakeData.find(({ result }) => {
      return (
        result.prefCode === prefCode &&
        result.year === year &&
        result.matter === matter &&
        result.class === category
      );
    });

    if (!fakePortfolio) {
      return res(
        ctx.status(400),
        ctx.json({
          statusCode: '400',
          message: 'Validation Failed.',
          description: '',
        }),
      );
    }

    return res(ctx.json(fakePortfolio));
  }),
];
