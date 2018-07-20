import MockAdapter from 'axios-mock-adapter/types';
import { HttpService } from '../shared/services/HttpService';
import { ActionContext, Commit, Dispatch } from 'vuex';
import { JobsActions } from './actions';
import { JobsDefaultState, IJobsState } from './state';
import { JobsGetters } from './getters';

describe('JobsActions', () => {
  let testContext: ActionContext<IJobsState, IJobsState>;
  let mockAxios: MockAdapter;

  beforeEach(() => {
    testContext = {
      dispatch: jest.fn() as Dispatch,
      commit: jest.fn() as Commit,
      state: JobsDefaultState,
      getters: {
        ...JobsGetters
      }
    } as ActionContext<IJobsState, IJobsState>;

    mockAxios = new MockAdapter(HttpService);
  });
});
