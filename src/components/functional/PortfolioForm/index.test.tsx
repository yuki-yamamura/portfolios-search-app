import PortfolioForm from '.';
import { fakePrefectures } from '@/mocks/fakeData/fakePrefectures';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { PortfolioFormType } from '@/schemas/portfolioFormSchema';

const defaultValues: PortfolioFormType = {
  prefCode: '2',
  year: '2012',
  matter: '1',
  class: '1',
};

let mockFn: jest.Mock;

beforeEach(() => {
  mockFn = jest.fn();
});

describe('PortfolioForm', () => {
  describe('初期化', () => {
    // arrange
    test('Props に応じて、適切な初期値を表示する', () => {
      const prefectures = fakePrefectures.result;

      // act
      render(
        <PortfolioForm
          defaultValues={defaultValues}
          prefectures={prefectures}
          onSubmit={mockFn}
        />,
      );

      // assert
      expect(
        screen.getByRole('combobox', { name: '都道府県' }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('combobox', { name: '年度' }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('combobox', { name: '表示内容' }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('radio', { name: '職業大分類で見る' }),
      ).toBeChecked();
      expect(
        screen.getByRole('radio', { name: '職業中分類で見る' }),
      ).not.toBeChecked();
    });
  });

  describe('インタラクション', () => {
    test('フィールドの値を更新するとフォームが送信される。', async () => {
      // arrange
      const user = userEvent.setup();
      render(
        <PortfolioForm
          defaultValues={defaultValues}
          prefectures={fakePrefectures.result}
          onSubmit={mockFn}
        />,
      );

      // act
      await user.click(screen.getByRole('combobox', { name: '都道府県' }));
      await user.click(screen.getByRole('option', { name: '岩手県' }));

      // assert
      expect(mockFn).toHaveBeenCalledWith(
        {
          prefCode: '3', // 岩手県の都道府県コード
          year: '2012',
          matter: '1',
          class: '1',
        },
        // fix: なぜか undefined が含まれるが、ブラウザ環境では問題なさそう。
        undefined,
      );
    });

    test('すべてのフィールドの値を更新できる', async () => {
      // arrange
      const user = userEvent.setup();
      render(
        <PortfolioForm
          defaultValues={defaultValues}
          prefectures={fakePrefectures.result}
          onSubmit={mockFn}
        />,
      );

      // act
      await user.click(screen.getByRole('combobox', { name: '都道府県' }));
      await user.click(screen.getByRole('option', { name: '秋田県' }));
      await user.click(screen.getByRole('combobox', { name: '年度' }));
      await user.click(screen.getByRole('option', { name: '2019' }));
      await user.click(screen.getByRole('combobox', { name: '表示内容' }));
      await user.click(screen.getByRole('option', { name: '有効求人数' }));
      await user.click(screen.getByRole('radio', { name: '職業中分類で見る' }));

      // assert
      expect(mockFn).toHaveBeenCalledWith(
        {
          prefCode: '5', // 秋田県の都道府県コード
          year: '2019', // 2019年度
          matter: '4', // 有効求人数
          class: '2', // 職業中分類
        },
        // fix: なぜか undefined が含まれるが、ブラウザ環境では問題なさそう。
        undefined,
      );
    });
  });
});
