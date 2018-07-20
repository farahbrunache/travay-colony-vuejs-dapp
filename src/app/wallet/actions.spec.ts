import MockAdapter from 'axios-mock-adapter/types';
import { HttpService } from '../shared/services/HttpService';
import { ActionContext, Commit, Dispatch } from 'vuex';
import { WalletActions } from './actions';
import { WalletDefaultState, IWalletState } from './state';
import { WalletGetters } from './getters';

describe('WalletActions', () => {
  let testContext: ActionContext<IWalletState, IWalletState>;
  let mockAxios: MockAdapter;

  beforeEach(() => {
    testContext = {
      dispatch: jest.fn() as Dispatch,
      commit: jest.fn() as Commit,
      state: WalletDefaultState,
      getters: {
        ...WalletGetters
      }
    } as ActionContext<IWalletState, IWalletState>;

    mockAxios = new MockAdapter(HttpService);
  });
});
