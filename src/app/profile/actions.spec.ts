import MockAdapter from 'axios-mock-adapter/types';
import { HttpService } from '../shared/services/HttpService';
import { ActionContext, Commit, Dispatch } from 'vuex';
import { ProfileActions } from './actions';
import { ProfileDefaultState, IProfileState } from './state';
import { ProfileGetters } from './getters';

describe('ProfileActions', () => {
  let testContext: ActionContext<IProfileState, IProfileState>;
  let mockAxios: MockAdapter;

  beforeEach(() => {
    testContext = {
      dispatch: jest.fn() as Dispatch,
      commit: jest.fn() as Commit,
      state: ProfileDefaultState,
      getters: {
        ...ProfileGetters
      }
    } as ActionContext<IProfileState, IProfileState>;

    mockAxios = new MockAdapter(HttpService);
  });
});
