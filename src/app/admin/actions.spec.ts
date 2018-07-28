import MockAdapter from 'axios-mock-adapter/types';
import { HttpService } from '../shared/services/HttpService';
import { ActionContext, Commit, Dispatch } from 'vuex';
import { AdminActions } from './actions';
import { AdminDefaultState, IAdminState } from './state';
import { AdminGetters } from './getters';

describe('AdminActions', () => {
  let testContext: ActionContext<IAdminState, IAdminState>;
  let mockAxios: MockAdapter;

  beforeEach(() => {
    testContext = {
      dispatch: jest.fn() as Dispatch,
      commit: jest.fn() as Commit,
      state: AdminDefaultState,
      getters: {
        ...AdminGetters
      }
    } as ActionContext<IAdminState, IAdminState>;

    mockAxios = new MockAdapter(HttpService);
  });

});
