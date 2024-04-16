import PortfolioViewer from '@/components/functional/PortfolioViewer';

import type { PrefectureType } from '@/schemas/prefectureSchema';

import styles from './index.module.scss';

type Props = {
  prefectures: PrefectureType[];
};

const HomeScreen = ({ prefectures }: Props) => (
  <div className={styles.module}>
    <h1 className={styles.heading}>求人・求職者</h1>
    <PortfolioViewer prefectures={prefectures} />
  </div>
);

export default HomeScreen;
