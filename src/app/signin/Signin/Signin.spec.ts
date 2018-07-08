import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import { i18n } from '../../shared/plugins/i18n/i18n';
import Signin from './Signin.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Signin.vue', () => {
  test('renders component', () => {
    const store = new Vuex.Store({
      modules: {
        signin: {
          namespaced: true,
          getters: {
            getCount: () => 0
          },
          actions: {}
        }
      }
    });
    const wrapper = mount(Signin, {
      store,
      localVue,
      i18n
    });

    expect(wrapper.find('h1').text()).toBe('Signin');
  });
});
