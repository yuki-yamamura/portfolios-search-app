import { classOptions, matterOptions, yearOptions } from './constants';
import RadioGroup from '@/components/ui-elements/RadioGroup';
import Select from '@/components/ui-elements/Select';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

import type { PortfolioFormType } from '@/schemas/portfolioFormSchema';
import type { PrefectureType } from '@/schemas/prefectureSchema';
import type { Option } from '@/types/Option';

import styles from './index.module.scss';

type Props = {
  defaultValues: PortfolioFormType;
  prefectures: PrefectureType[];
  onSubmit: (fieldValues: PortfolioFormType) => void;
};

const PortfolioForm = ({ defaultValues, prefectures, onSubmit }: Props) => {
  const { control, handleSubmit, watch } = useForm<PortfolioFormType>({
    defaultValues,
  });

  const prefectureOptions: Option[] = prefectures.map(
    ({ prefCode, prefName }) => ({
      label: prefName,
      value: prefCode.toString(),
    }),
  );

  // フォーム内の値が更新されたタイミングで送信する。
  // 参考: https://stackoverflow.com/a/70119332
  useEffect(() => {
    const subscription = watch(() => void handleSubmit(onSubmit)());

    return () => subscription.unsubscribe();
  }, [watch, onSubmit, handleSubmit]);

  return (
    <form className={styles.module}>
      <Controller
        control={control}
        name="prefCode"
        render={({ field }) => (
          <Select
            label="都道府県"
            value={field.value}
            options={prefectureOptions}
            onValueChange={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="year"
        render={({ field }) => (
          <Select
            label="年度"
            value={field.value}
            options={yearOptions}
            onValueChange={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="matter"
        render={({ field }) => (
          <Select
            label="表示内容"
            value={field.value}
            options={matterOptions}
            onValueChange={field.onChange}
          />
        )}
      />
      <div className={styles.field}>
        <label className={styles.label}>表示分類</label>
        <Controller
          control={control}
          name="class"
          render={({ field }) => (
            <RadioGroup
              value={field.value}
              options={classOptions}
              onValueChange={field.onChange}
            />
          )}
        />
      </div>
    </form>
  );
};

export default PortfolioForm;
