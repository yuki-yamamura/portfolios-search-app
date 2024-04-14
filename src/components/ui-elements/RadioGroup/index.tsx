import type { Option } from '@/types/Option';

import styles from './index.module.scss';

type Props = {
  options: Option[];
  value: string;
  onValueChange: (value: string) => void;
};

const RadioGroup = ({ options, value, onValueChange }: Props) => (
  <div role="radiogroup" className={styles.module}>
    {options.map((option) => (
      <label key={option.value} className={styles.label}>
        <input
          type="radio"
          checked={option.value === value}
          value={value}
          aria-labelledby={option.label}
          onChange={() => onValueChange(option.value)}
          className={styles.radio}
        />
        <span id={option.label}>{option.label}</span>
      </label>
    ))}
  </div>
);

export default RadioGroup;
