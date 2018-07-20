import { createLocalVue, mount, shallowMount } from '@vue/test-utils';
import Profile from './Profile.vue';
import { i18n } from '../../shared/plugins/i18n/i18n';

const localVue = createLocalVue();

describe('Profile.vue', () => {
  test('renders component', () => {
    const wrapper = mount(Profile, {
      i18n,
      localVue
    });

    expect(wrapper.vm).toBeDefined();
  });
});
