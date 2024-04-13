import type { SuccessApiResponse } from '@/schemas/ApiResponse';
import type z from 'zod';

export const fakeData: z.infer<typeof SuccessApiResponse>[] = [
  {
    message: null,
    result: {
      prefCode: '2',
      prefName: '青森県',
      year: '2012',
      matter: '1',
      class: '1',
      data: [
        {
          broadCode: '03',
          broadName: '事務的職業',
          middleCode: '',
          middleName: '',
          value: 82587,
        },
        {
          broadCode: '11',
          broadName: '運搬・清掃等の職業',
          middleCode: '',
          middleName: '',
          value: 70401,
        },
        {
          broadCode: '05',
          broadName: 'サービスの職業',
          middleCode: '',
          middleName: '',
          value: 47854,
        },
        {
          broadCode: '04',
          broadName: '販売の職業',
          middleCode: '',
          middleName: '',
          value: 44988,
        },
        {
          broadCode: '08',
          broadName: '生産工程の職業',
          middleCode: '',
          middleName: '',
          value: 40836,
        },
        {
          broadCode: '02',
          broadName: '専門的・技術的職業',
          middleCode: '',
          middleName: '',
          value: 36027,
        },
        {
          broadCode: '09',
          broadName: '輸送・機械運転の職業',
          middleCode: '',
          middleName: '',
          value: 15853,
        },
        {
          broadCode: '10',
          broadName: '建設・採掘の職業',
          middleCode: '',
          middleName: '',
          value: 15511,
        },
        {
          broadCode: '99',
          broadName: '分類不能の職業',
          middleCode: '',
          middleName: '',
          value: 9600,
        },
        {
          broadCode: '07',
          broadName: '農林漁業の職業',
          middleCode: '',
          middleName: '',
          value: 3493,
        },
        {
          broadCode: '06',
          broadName: '保安の職業',
          middleCode: '',
          middleName: '',
          value: 2548,
        },
        {
          broadCode: '01',
          broadName: '管理的職業',
          middleCode: '',
          middleName: '',
          value: 502,
        },
      ],
      allcount: 370200,
      otherscount: 0,
    },
  },
];
