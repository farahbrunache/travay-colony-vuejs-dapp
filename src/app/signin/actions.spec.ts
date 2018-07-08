import MockAdapter from 'axios-mock-adapter';
import { HttpService } from '../shared/services/HttpService';
import { ActionContext, Commit, Dispatch } from 'vuex';
import { SigninActions } from './actions';
import { SigninDefaultState, ISigninState } from './state';
import { SigninGetters } from './getters';

describe('SigninActions', () => {
  let testContext: ActionContext<ISigninState, ISigninState>;
  let mockAxios: MockAdapter;

  beforeEach(() => {
    testContext = {
      dispatch: jest.fn() as Dispatch,
      commit: jest.fn() as Commit,
      state: SigninDefaultState,
      getters: {
        ...SigninGetters
      }
    } as ActionContext<ISigninState, ISigninState>;

    mockAxios = new MockAdapter(HttpService);
  });
});
