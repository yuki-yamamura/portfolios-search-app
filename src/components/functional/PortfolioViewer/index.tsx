import PortfolioForm from '../PortfolioForm';
import Loading from '@/components/ui-elements/Loading';
import PortfolioTable from '@/components/ui-elements/PortfolioTable';
import { usePortfoliosWithFilter } from '@/hooks/usePortfoliosWithFilter';
import { usePrefectures } from '@/hooks/usePrefectures';

import type { PortfolioFormType } from '@/schemas/portfolioFormSchema';

import styles from './index.module.scss';

const PortfolioViewer = () => {
  const defaultValues: PortfolioFormType = {
    prefCode: '1',
    year: '2012',
    matter: '1',
    class: '1',
  };

  const { prefectures, isLoading: isEveryPrefecturesLoading } =
    usePrefectures();
  const {
    portfolios: portfolios,
    isLoading,
    updateFilterConditions,
  } = usePortfoliosWithFilter(defaultValues);

  // データ取得にそれほど時間がかからないので、fallback UI ではなく null を返す。
  if (isEveryPrefecturesLoading) {
    return null;
  }

  return (
    <div className={styles.module}>
      <div className={styles.form}>
        <PortfolioForm
          defaultValues={defaultValues}
          prefectures={prefectures}
          onSubmit={updateFilterConditions}
        />
      </div>
      {isLoading ? (
        <div className={styles.loading}>
          <Loading size="large" />
        </div>
      ) : (
        <div className={styles.table}>
          <PortfolioTable portfolios={portfolios} />
        </div>
      )}
    </div>
  );
};

export default PortfolioViewer;
