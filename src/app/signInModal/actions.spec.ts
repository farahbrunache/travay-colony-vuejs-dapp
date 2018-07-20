import MockAdapter from 'axios-mock-adapter/types';
import { HttpService } from '../shared/services/HttpService';
import { ActionContext, Commit, Dispatch } from 'vuex';
import { SignInModalActions } from './actions';
import { SignInModalDefaultState, ISignInModalState } from './state';
import { SignInModalGetters } from './getters';

describe('SignInModalActions', () => {
  let testContext: ActionContext<ISignInModalState, ISignInModalState>;
  let mockAxios: MockAdapter;

  beforeEach(() => {
    testContext = {
      dispatch: jest.fn() as Dispatch,
      commit: jest.fn() as Commit,
      state: SignInModalDefaultState,
      getters: {
        ...SignInModalGetters
      }
    } as ActionContext<ISignInModalState, ISignInModalState>;

    mockAxios = new MockAdapter(HttpService);
  });
});
