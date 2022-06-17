import VueContentBlock from './VueContentBlock.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Foundation/Layout',
  component: VueContentBlock,
};

const Template = (args) => ({
  components: { VueContentBlock, ComponentDocs },
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="Content block"
      usage="By default, all layout components will render full width. 
However, most applications will want to limit the width of content on the screen. 
The ContentBlock component sets a maximum width and centres content horizontally."
  >
  <div style="border: 1px solid var(--brand-border-default-medium);">
    <vue-content-block style="border: 1px solid var(--brand-border-default-medium);">
      VueContentBlock
    </vue-content-block>
  </div>
  </component-docs>`,
});

export const ContentBlock = Template.bind({});

ContentBlock.args = {
  as: 'div',
};
