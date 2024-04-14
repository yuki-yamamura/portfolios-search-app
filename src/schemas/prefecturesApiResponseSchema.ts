import { prefectureSchema } from './prefectureSchema';
import z from 'zod';

export const prefecturesApiResponseSchema = z.object({
  message: z.string().nullable(),
  result: z.array(prefectureSchema),
});

export type PrefecturesApiResponseType = z.infer<
  typeof prefecturesApiResponseSchema
>;
