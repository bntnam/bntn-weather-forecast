import { getWeatherIconUrl } from './extract';

describe('Extract test', () => {
  test('verifies that getWeatherIconUrl should return the expected url', () => {
    const iconType = 'lr';
    const expected = `https://www.metaweather.com/static/img/weather/${iconType}.svg`;
    const received = getWeatherIconUrl(iconType);

    expect(received).toBe(expected);
  });
});
