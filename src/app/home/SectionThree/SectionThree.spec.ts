import { createLocalVue, mount } from '@vue/test-utils';
import SectionThree from './SectionThree.vue';

const localVue = createLocalVue();

describe('SectionThree.vue', () => {
  test('renders component', () => {
    const wrapper = mount(SectionThree, {
      localVue,
      stubs: ['router-link']
    });

    expect(wrapper.find('h2').text()).toBe('Travay Experience');
  });
});
