import { AiOutlineLoading } from 'react-icons/ai';

import styles from './index.module.scss';

type Props = {
  size: 'small' | 'medium' | 'large';
};

const Loading = ({ size }: Props) => (
  <AiOutlineLoading className={styles.module} data-size={size} />
);

export default Loading;
