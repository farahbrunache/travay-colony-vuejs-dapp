import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import { i18n } from '../../shared/plugins/i18n/i18n';
import Wallet from './Wallet.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Wallet.vue', () => {
  test('renders component', () => {
    const store = new Vuex.Store({
      modules: {
        wallet: {
          namespaced: true,
          getters: {
            getCount: () => 0
          },
          actions: {}
        }
      }
    });
    const wrapper = mount(Wallet, {
      store,
      localVue,
      i18n
    });

    expect(wrapper.find('h1').text()).toBe('Wallet');
  });
});
