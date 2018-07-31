import { mount, createLocalVue } from '@vue/test-utils';
import SectionFour from './SectionFour.vue';

const localVue = createLocalVue();

describe('SectionFour.vue', () => {
  test('renders component', () => {
    const wrapper = mount(SectionFour, { localVue });

    expect(wrapper.find('h2').text()).toBe('Quick start');
  });
});
