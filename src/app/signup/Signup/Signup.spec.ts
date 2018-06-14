import { createLocalVue, mount } from '@vue/test-utils';
import Vuex                      from 'vuex';
import { i18n }                  from '../../shared/plugins/i18n/i18n';
import Signup                   from './Signup.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Signup.vue', () => {

  test('renders component', () => {
    const store = new Vuex.Store({
                                   modules: {
                                     signup: {
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
    const wrapper = mount(Signup, {
      store,
      localVue,
      i18n,
    });

    expect(wrapper.find('h1').text()).toBe('Signup');
  });

  test('should increment and decrement', () => {
    const actions = {
      increment: jest.fn(),
      decrement: jest.fn(),
    };
    const store = new Vuex.Store({
                                   modules: {
                                     signup: {
                                       namespaced: true,
                                       getters:    {
                                         getCount: () => 0,
                                       },
                                       actions,
                                     },
                                   },
                                 });
    const wrapper: any = mount(Signup, {
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

    Signup.prefetch({ store });

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(`signup/increment`);
  });

});