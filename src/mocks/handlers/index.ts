import { portfolio } from './portfolio';
import { prefectures } from './prefectures';

import type { RestHandler } from 'msw';

export const handlers: RestHandler[] = [portfolio, prefectures];
