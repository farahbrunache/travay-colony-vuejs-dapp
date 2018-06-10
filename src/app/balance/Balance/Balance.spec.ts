import { createLocalVue, mount } from '@vue/test-utils';
import Vuex                      from 'vuex';
import { i18n }                  from '../../shared/plugins/i18n/i18n';
import Balance                   from './Balance.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Balance.vue', () => {

  test('renders component', () => {
    const store = new Vuex.Store({
                                   modules: {
                                     balance: {
                                       namespaced: true,
                                       getters:    {
                                         getCount: () => 0,
                                       },
                                       actions:    {
                                         increment: jest.fn(),
                                         decrement: jest.fn(),
                                       },
                                     },
                                   },
                                 });
    const wrapper = mount(Balance, {
      store,
      localVue,
      i18n,
    });

    expect(wrapper.find('h1').text()).toBe('Balance');
  });

  test('should increment and decrement', () => {
    const actions = {
      increment: jest.fn(),
      decrement: jest.fn(),
    };
    const store = new Vuex.Store({
                                   modules: {
                                     balance: {
                                       namespaced: true,
                                       getters:    {
                                         getCount: () => 0,
                                       },
                                       actions,
                                     },
                                   },
                                 });
    const wrapper: any = mount(Balance, {
      store,
      localVue,
      i18n,
    });

    wrapper.vm.increment();
    expect(actions.increment).toHaveBeenCalled();

    wrapper.vm.decrement();
    expect(actions.decrement).toHaveBeenCalled();
  });

  test('dispatches action on the server', () => {
    const store = {
      dispatch: jest.fn(),
    };

    Balance.prefetch({ store });

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(`balance/increment`);
  });

});
