import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import SponsorModal           from './SponsorModal.vue';

const story = (storiesOf('SponsorModal', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { SponsorModal },
  template:   `<sponsorModal>SponsorModal</sponsorModal>`,
}));
