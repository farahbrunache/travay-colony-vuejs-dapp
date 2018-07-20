import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import { i18n } from '../../shared/plugins/i18n/i18n';
import UserGuide from './UserGuide.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('UserGuide.vue', () => {});
