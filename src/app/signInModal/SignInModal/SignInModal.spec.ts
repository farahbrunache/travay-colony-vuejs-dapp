import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import { i18n } from '../../shared/plugins/i18n/i18n';
import SignInModal from './SignInModal.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('SignInModal.vue', () => {
  test('renders component', () => {
    const store = new Vuex.Store({
      modules: {
        signInModal: {
          namespaced: true,
          getters: {
            getCount: () => 0
          },
          actions: {}
        }
      }
    });
    const wrapper = mount(SignInModal, {
      store,
      localVue,
      i18n
    });

    expect(wrapper.find('h1').text()).toBe('SignInModal');
  });
});
