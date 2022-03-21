import { newSpecPage } from '@stencil/core/testing';
import { CbJsonformatter } from '../cb-jsonformatter';

describe('cb-jsonfomatter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CbJsonformatter],
      html: `<cb-jsonformatter></cb-jsonformatter>`,
    });
    expect(page.root).toEqualHtml(`
      <cb-jsonformatter>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cb-jsonformatter>
    `);
  });
});
