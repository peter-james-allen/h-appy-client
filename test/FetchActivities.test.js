import FetchActivities from '../src/FetchActivities'
import 'node-fetch'
import { interpolate } from 'react-native-reanimated';

let mockFetchResponse = { status: 'ok' };

jest.mock('node-fetch', () => () =>
  new Promise((response0) =>
    response0({
      json: () => new Promise((response1) => response1(mockFetchResponse)),
    })
  )
);

describe('FetchActivities', () => {
  it('makes a request via fetch', () => {
    expect(FetchActivities()).toBe(mockFetchResponse)
  })
})
