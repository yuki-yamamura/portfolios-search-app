import PortfolioViewer from '.';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('PortfolioViewer', () => {
  describe('初期化', () => {
    test('フォームに適切な初期値が設定されており、それに応じた求人・求職者のデータを表示する', async () => {
      // arrange, act
      render(<PortfolioViewer />);

      // assert
      // フォームの初期値
      expect(await screen.findByText('北海道')).toBeInTheDocument();
      expect(screen.getByText('2012')).toBeInTheDocument();
      expect(screen.getByText('有効求職者数（総数）')).toBeInTheDocument();
      expect(
        screen.getByRole('radio', { name: '職業大分類で見る' }),
      ).toBeChecked();
      expect(
        screen.getByRole('radio', { name: '職業中分類で見る' }),
      ).not.toBeChecked();

      // データの初期値
      const rows = await screen.findAllByRole<HTMLTableRowElement>('row');
      const firstRow = rows.at(0);
      const secondRow = rows.at(1);

      expect(firstRow).toBeDefined();
      expect(secondRow).toBeDefined();

      expect(
        within(firstRow as HTMLTableRowElement).getByRole('columnheader', {
          name: '職業分類名',
        }),
      ).toBeInTheDocument();
      expect(
        within(firstRow as HTMLTableRowElement).getByRole('columnheader', {
          name: '求人・求職者数',
        }),
      ).toBeInTheDocument();
      expect(
        within(secondRow as HTMLTableRowElement).getByRole('cell', {
          name: '事務的職業',
        }),
      ).toBeInTheDocument();
      expect(
        within(secondRow as HTMLTableRowElement).getByRole('cell', {
          name: '352,130人',
        }),
      ).toBeInTheDocument();

      expect(rows).toHaveLength(13);
    });
  });

  describe('インタラクション', () => {
    test('フォーム内のフィールドが更新された場合、それに応じた求人・求職者のデータを表示する', async () => {
      // arrange
      const user = userEvent.setup();
      render(<PortfolioViewer />);

      // act
      await user.click(await screen.findByText('北海道'));
      await user.click(screen.getByRole('option', { name: '青森県' }));

      // assert
      const rows = await screen.findAllByRole<HTMLTableRowElement>('row');
      expect(
        within(rows[1]).getByRole('cell', { name: '82,587人' }),
      ).toBeInTheDocument();

      expect(rows).toHaveLength(13);
    });
  });
});
