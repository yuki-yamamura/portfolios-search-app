import type { Option } from '@/types/Option';

/**
 * RESAS API から "求人・求職者" を取得する際のクエリパラメータとなる定数
 * 参考: https://opendata.resas-portal.go.jp/docs/api/v1/regionalEmploy/analysis/portfolio.html
 */

// 2012 - 2021年
export const yearOptions: Option[] = Array.from(
  Array(10),
  (_, index) => index + 2012,
).map((year) => ({
  label: year.toString(),
  value: year.toString(),
}));

export const matterOptions: Option[] = [
  {
    label: '有効求職者数（総数）',
    value: '1',
  },
  {
    label: '有効求職者数（男性）',
    value: '2',
  },
  {
    label: '有効求職者数（女性）',
    value: '3',
  },
  {
    label: '有効求人数',
    value: '4',
  },
  {
    label: '就職件数',
    value: '5',
  },
];

export const classOptions: Option[] = [
  {
    label: '職業大分類で見る',
    value: '1',
  },
  {
    label: '職業中分類で見る',
    value: '2',
  },
];
