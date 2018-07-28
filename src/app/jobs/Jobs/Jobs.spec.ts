import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import { i18n } from '../../shared/plugins/i18n/i18n';
import Jobs from './Jobs.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Jobs.vue', () => {
  test('renders component', () => {
    const store = new Vuex.Store({
      modules: {
        jobs: {
          namespaced: true,
          getters: {
            getCount: () => 0
          },
          actions: {
            increment: jest.fn(),
            decrement: jest.fn()
          }
        }
      }
    });
    const wrapper = mount(Jobs, {
      store,
      localVue,
      i18n
    });

    expect(wrapper.find('h1').text()).toBe('Jobs');
  });
});
