import { newE2EPage } from '@stencil/core/testing';

describe('cb-jsonformatter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cb-jsonformatter></cb-jsonformatter>');

    const element = await page.find('cb-jsonformatter');
    expect(element).toHaveClass('hydrated');
  });
});
