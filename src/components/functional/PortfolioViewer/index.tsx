import PortfolioForm from '../PortfolioForm';
import Loading from '@/components/ui-elements/Loading';
import PortfolioTable from '@/components/ui-elements/PortfolioTable';
import { usePortfoliosWithFilter } from '@/hooks/usePortfoliosWithFilter';

import type { PortfolioFormType } from '@/schemas/portfolioFormSchema';
import type { PrefectureType } from '@/schemas/prefectureSchema';

import styles from './index.module.scss';

type Props = {
  prefectures: PrefectureType[];
};

const PortfolioViewer = ({ prefectures }: Props) => {
  const defaultValues: PortfolioFormType = {
    prefCode: '1',
    year: '2012',
    matter: '1',
    class: '1',
  };

  const {
    portfolios: portfolios,
    isLoading,
    updateFilterConditions,
  } = usePortfoliosWithFilter(defaultValues);

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
