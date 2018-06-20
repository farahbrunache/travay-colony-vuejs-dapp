import { createLocalVue, mount } from '@vue/test-utils';
import TravayExperience from './TravayExperience.vue';

const localVue = createLocalVue();

describe('TravayExperience.vue', () => {
  test('renders component', () => {
    const wrapper = mount(TravayExperience, {
      localVue,
      stubs: ['router-link'],
    });

    expect(wrapper.find('h2').text()).toBe('Travay Experience');
  });
});
