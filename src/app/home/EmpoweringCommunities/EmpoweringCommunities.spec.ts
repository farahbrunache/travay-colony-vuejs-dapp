import { mount, createLocalVue } from '@vue/test-utils';
import EmpoweringCommunities from './EmpoweringCommunities.vue';

const localVue = createLocalVue();

describe('EmpoweringCommunities.vue', () => {
  test('renders component', () => {
    const wrapper = mount(EmpoweringCommunities, { localVue });

    expect(wrapper.find('h2').text()).toBe('Empowering Communities');
  });
});
