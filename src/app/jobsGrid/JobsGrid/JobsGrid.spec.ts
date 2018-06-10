import { createLocalVue, mount } from '@vue/test-utils';
import Vuex                      from 'vuex';
import { i18n }                  from '../../shared/plugins/i18n/i18n';
import JobsGrid                   from './JobsGrid.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('JobsGrid.vue', () => {

  test('renders component', () => {
    const store = new Vuex.Store({
                                   modules: {
                                     jobsGrid: {
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
    const wrapper = mount(JobsGrid, {
      store,
      localVue,
      i18n,
    });

    expect(wrapper.find('h1').text()).toBe('JobsGrid');
  });

  test('should increment and decrement', () => {
    const actions = {
      increment: jest.fn(),
      decrement: jest.fn(),
    };
    const store = new Vuex.Store({
                                   modules: {
                                     jobsGrid: {
                                       namespaced: true,
                                       getters:    {
                                         getCount: () => 0,
                                       },
                                       actions,
                                     },
                                   },
                                 });
    const wrapper: any = mount(JobsGrid, {
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

    JobsGrid.prefetch({ store });

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(`jobsGrid/increment`);
  });

});
