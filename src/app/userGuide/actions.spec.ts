import MockAdapter from 'axios-mock-adapter/types';
import { HttpService } from '../shared/services/HttpService';
import { ActionContext, Commit, Dispatch } from 'vuex';
import { UserGuideActions } from './actions';
import { UserGuideDefaultState, IUserGuideState } from './state';
import { UserGuideGetters } from './getters';

describe('UserGuideActions', () => {
  let testContext: ActionContext<IUserGuideState, IUserGuideState>;
  let mockAxios: MockAdapter;

  beforeEach(() => {
    testContext = {
      dispatch: jest.fn() as Dispatch,
      commit: jest.fn() as Commit,
      state: UserGuideDefaultState,
      getters: {
        ...UserGuideGetters
      }
    } as ActionContext<IUserGuideState, IUserGuideState>;

    mockAxios = new MockAdapter(HttpService);
  });
});
