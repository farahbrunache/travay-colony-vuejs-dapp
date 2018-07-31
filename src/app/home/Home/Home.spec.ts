import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import { i18n } from '../../shared/plugins/i18n/i18n';
import Home from './Home.vue';
import SectionTwo from '../SectionTwo/SectionTwo.vue';
import SectionOne from '../SectionOne/SectionOne.vue';
import SectionFour from '../SectionFour/SectionFour.vue';
import Stage from '../Stage/Stage.vue';
import SectionThree from '../SectionThree/SectionThree.vue';

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

    expect(wrapper.findAll(SectionOne)).toHaveLength(1);
    expect(wrapper.findAll(SectionTwo)).toHaveLength(1);
    expect(wrapper.findAll(SectionFour)).toHaveLength(1);
    expect(wrapper.findAll(Stage)).toHaveLength(1);
    expect(wrapper.findAll(SectionThree)).toHaveLength(1);
  });
});
