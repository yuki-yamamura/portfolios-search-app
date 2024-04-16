import type { PortfolioDataType } from '@/schemas/portfolioDataSchema';

import styles from './index.module.scss';

type Props = {
  portfolios: PortfolioDataType[];
};

const PortfolioTable = ({ portfolios }: Props) => (
  <table className={styles.module}>
    <thead className={styles.headers}>
      <tr className={styles.row}>
        <th className={styles.header}>職業分類名</th>
        <th className={styles.header}>求人・求職者数</th>
      </tr>
    </thead>
    <tbody className={styles.body}>
      {portfolios.map(({ broadName, value }) => (
        <tr key={broadName} className={styles.row}>
          <td className={styles.category}>{broadName}</td>
          {/* "分類不能の職業" が null を返すため、とりあえず 0 人とする。 */}
          <td className={styles.quantity}>{`${
            value?.toLocaleString() ?? '0'
          }人`}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default PortfolioTable;
