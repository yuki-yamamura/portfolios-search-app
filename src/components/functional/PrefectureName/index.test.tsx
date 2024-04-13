import PrefectureName from '.';
import { render, screen } from '@testing-library/react';

describe('PrefectureName', () => {
  describe('MSW が Jest 環境で動作していることを確認する', () => {
    test('モックされたレスポンスから `prefName` を受け取って表示する', async () => {
      render(<PrefectureName />);

      const prefCode = await screen.findByText(/青森県/);

      expect(prefCode).toBeInTheDocument();
    });
  });
});
