import MockAdapter from 'axios-mock-adapter';
import { HttpService } from '../shared/services/HttpService';
import { ActionContext, Commit, Dispatch } from 'vuex';
import { JobActions } from './actions';
import { JobDefaultState, IJobState } from './state';
import { JobGetters } from './getters';

describe('JobActions', () => {
  let testContext: ActionContext<IJobState, IJobState>;
  let mockAxios: MockAdapter;

  beforeEach(() => {
    testContext = {
      dispatch: jest.fn() as Dispatch,
      commit: jest.fn() as Commit,
      state: JobDefaultState,
      getters: {
        ...JobGetters
      }
    } as ActionContext<IJobState, IJobState>;

    mockAxios = new MockAdapter(HttpService);
  });
});
