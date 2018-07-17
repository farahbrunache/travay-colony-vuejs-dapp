import MockAdapter from 'axios-mock-adapter';
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

  test('it should call INCREMENT action on success', done => {
    const commitMock: jest.Mock = testContext.commit as jest.Mock;

    mockAxios.onPut('/counter/increment').reply(200, { count: 1337 });

    AdminActions.increment(testContext).then(() => {
      expect(commitMock.mock.calls[0]).toEqual(['SET_INCREMENT_PENDING', true]);
      expect(commitMock.mock.calls[1]).toEqual(['SET_COUNT', 1337]);
      expect(commitMock.mock.calls[2]).toEqual([
        'SET_INCREMENT_PENDING',
        false
      ]);
      done();
    });
  });
});
