import { mount, createLocalVue } from '@vue/test-utils';
import SectionTwo from './SectionTwo.vue';

const localVue = createLocalVue();

describe('SectionTwo.vue', () => {
  test('renders component', () => {
    const wrapper = mount(SectionTwo, { localVue });

    expect(wrapper.find('h2').text()).toBe('Receive Instant Payments');
  });
});
