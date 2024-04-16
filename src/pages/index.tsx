import {
  prefecturesApiResponseSchema,
  type PrefecturesApiResponseType,
} from '@/schemas/prefecturesApiResponseSchema';
import HomeScreen from '@/screens/HomeScreen';
import axios from 'axios';

import type { PrefectureType } from '@/schemas/prefectureSchema';
import type { GetStaticProps } from 'next';

type Props = {
  prefectures: PrefectureType[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { data } = await axios.get<PrefecturesApiResponseType>(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    {
      headers: {
        'X-API-KEY': process.env.API_KEY,
      },
    },
  );

  prefecturesApiResponseSchema.parse(data);

  return {
    props: {
      prefectures: data.result,
    },
  };
};

const Page = ({ prefectures }: Props) => (
  <HomeScreen prefectures={prefectures} />
);

export default Page;
