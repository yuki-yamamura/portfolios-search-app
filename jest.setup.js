import '@testing-library/jest-dom/extend-expect';
import { server } from './src/mocks/server';

beforeAll(() => server.listen());
beforeEach(() => server.resetHandlers());
afterAll(() => server.close());
