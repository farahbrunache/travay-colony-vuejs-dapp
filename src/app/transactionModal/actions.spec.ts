import MockAdapter from 'axios-mock-adapter';
import { HttpService } from '../shared/services/HttpService';
import { ActionContext, Commit, Dispatch } from 'vuex';
import { TransactionModalActions } from './actions';
import { TransactionModalDefaultState, ITransactionModalState } from './state';
import { TransactionModalGetters } from './getters';

describe('TransactionModalActions', () => {
  let testContext: ActionContext<
    ITransactionModalState,
    ITransactionModalState
  >;
  let mockAxios: MockAdapter;

  beforeEach(() => {
    testContext = {
      dispatch: jest.fn() as Dispatch,
      commit: jest.fn() as Commit,
      state: TransactionModalDefaultState,
      getters: {
        ...TransactionModalGetters
      }
    } as ActionContext<ITransactionModalState, ITransactionModalState>;

    mockAxios = new MockAdapter(HttpService);
  });
});
