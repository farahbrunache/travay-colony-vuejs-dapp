import MockAdapter from 'axios-mock-adapter/types';
import { HttpService } from '../shared/services/HttpService';
import { ActionContext, Commit, Dispatch } from 'vuex';
import { CreateJobActions } from './actions';
import { CreateJobDefaultState, ICreateJobState } from './state';
import { CreateJobGetters } from './getters';

describe('CreateJobActions', () => {
  let testContext: ActionContext<ICreateJobState, ICreateJobState>;
  let mockAxios: MockAdapter;

  beforeEach(() => {
    testContext = {
      dispatch: jest.fn() as Dispatch,
      commit: jest.fn() as Commit,
      state: CreateJobDefaultState,
      getters: {
        ...CreateJobGetters
      }
    } as ActionContext<ICreateJobState, ICreateJobState>;

    mockAxios = new MockAdapter(HttpService);
  });
});
