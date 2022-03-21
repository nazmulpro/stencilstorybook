import { newE2EPage } from '@stencil/core/testing';

describe('cb-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cb-dropdown></cb-dropdown>');

    const element = await page.find('cb-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
