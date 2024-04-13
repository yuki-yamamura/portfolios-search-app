import type { NextApiRequest, NextApiResponse } from 'next';
import type z from 'zod';
import type { ZodSchema } from 'zod';

/**
 * NextApiHandler のラッパー関数
 * デフォルトで any 型である req.query を型安全に扱うために使用する。
 */
export const withZod = <
  T extends ZodSchema<{
    query: Partial<{ [key: string]: string | string[] }>;
  }>,
>(
  schema: T,
  handler: (
    req: Omit<NextApiRequest, 'query'> & z.infer<T>,
    res: NextApiResponse,
  ) => unknown | Promise<unknown>,
) => {
  return (req: NextApiRequest, res: NextApiResponse) => {
    const { success } = schema.safeParse(req);

    if (success) {
      return handler(req, res);
    } else {
      res.status(400).end();
    }
  };
};
