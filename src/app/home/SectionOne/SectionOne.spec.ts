import { mount, createLocalVue } from '@vue/test-utils';
import SectionOne from './SectionOne.vue';

const localVue = createLocalVue();

describe('SectionOne.vue', () => {
  test('renders component', () => {
    const wrapper = mount(SectionOne, { localVue });

    expect(wrapper.find('h2').text()).toBe('Earn Stable Income');
  });
});
