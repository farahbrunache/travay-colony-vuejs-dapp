import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import { i18n } from '../../shared/plugins/i18n/i18n';
import Home from './Home.vue';
import EmpoweringCommunities from '../EmpoweringCommunities/EmpoweringCommunities.vue';
import Fostering from '../Fostering/Fostering.vue';
import HowDoesItWork from '../HowDoesItWork/HowDoesItWork.vue';
import Stage from '../Stage/Stage.vue';
import TravayExperience from '../TravayExperience/TravayExperience.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Home.vue', () => {
  test('renders component', () => {
    const store = new Vuex.Store({
      state: {
        app: {
          config: {
            features: {
              disableParticles: false
            }
          }
        }
      }
    });
    const wrapper = shallowMount(Home, {
      store,
      localVue,
      i18n
    });

    expect(wrapper.findAll(Fostering)).toHaveLength(1);
    expect(wrapper.findAll(EmpoweringCommunities)).toHaveLength(1);
    expect(wrapper.findAll(HowDoesItWork)).toHaveLength(1);
    expect(wrapper.findAll(Stage)).toHaveLength(1);
    expect(wrapper.findAll(TravayExperience)).toHaveLength(1);
  });
});
