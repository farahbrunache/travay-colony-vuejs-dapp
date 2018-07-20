import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import { i18n } from '../../shared/plugins/i18n/i18n';
import Admin from './Admin.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Admin.vue', () => {
  test('renders component', () => {
    const store = new Vuex.Store({
      modules: {
        admin: {
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
    const wrapper = mount(Admin, {
      store,
      localVue,
      i18n
    });

    expect(wrapper.find('h1').text()).toBe('Admin');
  });

  test('dispatches action on the server', () => {
    const store = {
      dispatch: jest.fn()
    };

    Admin.prefetch({ store });

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(`admin/increment`);
  });
});
