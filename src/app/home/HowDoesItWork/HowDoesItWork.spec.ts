import { mount, createLocalVue } from '@vue/test-utils';
import HowDoesItWork from './HowDoesItWork.vue';

const localVue = createLocalVue();

describe('HowDoesItWork.vue', () => {
  test('renders component', () => {
    const wrapper = mount(HowDoesItWork, { localVue });

    expect(wrapper.find('h2').text()).toBe('Quick start');
  });
});
