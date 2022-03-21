import { newSpecPage } from '@stencil/core/testing';
import { CbDropdown } from '../cb-dropdown';

describe('cb-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CbDropdown],
      html: `<cb-dropdown></cb-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <cb-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cb-dropdown>
    `);
  });
});
