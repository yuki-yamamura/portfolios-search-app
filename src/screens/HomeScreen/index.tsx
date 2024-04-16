import PortfolioViewer from '@/components/functional/PortfolioViewer';

import styles from './index.module.scss';

const HomeScreen = () => (
  <div className={styles.module}>
    <h1 className={styles.heading}>求人・求職者</h1>
    <PortfolioViewer />
  </div>
);

export default HomeScreen;
