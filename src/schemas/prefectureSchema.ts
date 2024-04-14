import z from 'zod';

export const prefectureSchema = z.object({
  prefCode: z.number(),
  prefName: z.string(),
});

export type PrefectureType = z.infer<typeof prefectureSchema>;
