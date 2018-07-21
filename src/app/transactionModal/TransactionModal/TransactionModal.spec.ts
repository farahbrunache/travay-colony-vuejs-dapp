import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import { i18n } from '../../shared/plugins/i18n/i18n';
import TransactionModal from './TransactionModal.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('TransactionModal.vue', () => {});
