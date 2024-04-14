import Popper from './Popper';
import { useCallback, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

import type { Option } from '@/types/Option';

import styles from './index.module.scss';

type Props = {
  label: string;
  options: Option[];
  value: string;
  onValueChange: (value: string) => void;
};

const Select = ({ label, options, value, onValueChange }: Props) => {
  const [open, setOpen] = useState(false);
  const displayValue = options.find((option) => option.value === value)?.label;

  const handleOpenChange = useCallback(
    () => setOpen((prevState) => !prevState),
    [],
  );
  const handleValueChange = useCallback(
    (value: string) => {
      onValueChange(value);
      setOpen(false);
    },
    [onValueChange],
  );

  return (
    <button
      type="button"
      role="combobox"
      aria-expanded={open}
      aria-controls={`popper-${label}`}
      aria-labelledby={label}
      onClick={handleOpenChange}
      className={styles.module}
    >
      <label id={label} className={styles.label}>
        {label}
      </label>
      <div className={styles.buttonContainer}>
        <span>{displayValue}</span>
        <FaCaretDown />
      </div>

      {open && (
        <div className={styles.popperWrapper}>
          <Popper
            options={options}
            selectedValue={value}
            open={open}
            onClose={handleOpenChange}
            onValueChange={handleValueChange}
          />
        </div>
      )}
    </button>
  );
};

export default Select;
