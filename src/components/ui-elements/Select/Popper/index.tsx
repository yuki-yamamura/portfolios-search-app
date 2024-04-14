import { useEffect, useRef } from 'react';

import styles from './index.module.scss';

type Props = {
  options: {
    label: string;
    value: string;
  }[];
  selectedValue: string;
  open: boolean;
  onClose: () => void;
  onValueChange: (value: string) => void;
};
const Popper = ({
  options,
  selectedValue,
  open,
  onClose,
  onValueChange,
}: Props) => {
  // Popper のクローズイベントを制御するため、初回のレンダリングであることを識別する。
  const isFirstRender = useRef(true);

  useEffect(() => {
    // マウスクリックで Popper を閉じるためのイベントハンドラー
    const handleClick = () => {
      if (isFirstRender.current) {
        isFirstRender.current = false;

        return;
      }
      if (open) {
        onClose();
      }
    };
    // Esc キーで Popper を閉じるためのイベントハンドラー
    const handleEscapeKeyDown = (e: KeyboardEvent) => {
      if (open && e.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleEscapeKeyDown);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleEscapeKeyDown);
    };
  }, [open, onClose]);

  return (
    <div role="listbox" className={styles.module}>
      {options.map(({ label, value }) => (
        <div
          key={value}
          role="option"
          aria-selected={value === selectedValue}
          onClick={() => onValueChange(value)}
          className={styles.option}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default Popper;
