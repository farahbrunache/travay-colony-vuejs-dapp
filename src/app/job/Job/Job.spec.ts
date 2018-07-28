import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import { i18n } from '../../shared/plugins/i18n/i18n';
import Job from './Job.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Job.vue', () => {
  test('renders component', () => {
    const store = new Vuex.Store({
      modules: {
        job: {
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
    const wrapper = mount(Job, {
      store,
      localVue,
      i18n
    });

    expect(wrapper.find('h1').text()).toBe('Job');
  });
});
