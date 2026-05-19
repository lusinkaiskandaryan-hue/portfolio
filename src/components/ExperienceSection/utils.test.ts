import { getExperienceKey } from './utils';

describe('getExperienceKey', () => {
  it('combines role and period', () => {
    expect(
      getExperienceKey({
        role: 'Engineer',
        period: '2020–2024',
        company: 'Acme',
        summary: 'Built things',
      }),
    ).toBe('Engineer-2020–2024');
  });
});
