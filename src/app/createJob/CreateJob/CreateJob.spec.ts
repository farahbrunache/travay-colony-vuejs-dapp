import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import { i18n } from '../../shared/plugins/i18n/i18n';
import CreateJob from './CreateJob.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('CreateJob.vue', () => {});
