import { mount, createLocalVue } from '@vue/test-utils';
import Fostering from './Fostering.vue';

const localVue = createLocalVue();

describe('Fostering.vue', () => {
  test('renders component', () => {
    const wrapper = mount(Fostering, { localVue });

    expect(wrapper.find('h2').text()).toBe(
      'Fostering Economic and Social Mobility',
    );
  });
});
