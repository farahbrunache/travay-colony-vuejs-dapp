import MockAdapter                            from 'axios-mock-adapter';
import { HttpService }                        from '../shared/services/HttpService';
import { ActionContext, Commit, Dispatch }    from 'vuex';
import { JobsFilterActions }                     from './actions';
import { JobsFilterDefaultState, IJobsFilterState } from './state';
import { JobsFilterGetters }                     from './getters';

describe('JobsFilterActions', () => {
  let testContext: ActionContext<IJobsFilterState, IJobsFilterState>;
  let mockAxios: MockAdapter;

  beforeEach(() => {
    testContext = {
      dispatch: jest.fn() as Dispatch,
      commit:   jest.fn() as Commit,
      state:    JobsFilterDefaultState,
      getters:  {
        ...JobsFilterGetters,
      },
    } as ActionContext<IJobsFilterState, IJobsFilterState>;

    mockAxios = new MockAdapter(HttpService);
  });

  test('it should call INCREMENT action on success', (done) => {
    const commitMock: jest.Mock = testContext.commit as jest.Mock;

    mockAxios
    .onPut('/counter/increment')
    .reply(200, { count: 1337 });

    JobsFilterActions
    .increment(testContext)
    .then(() => {
      expect(commitMock.mock.calls[0]).toEqual(['SET_INCREMENT_PENDING', true]);
      expect(commitMock.mock.calls[1]).toEqual(['SET_COUNT', 1337]);
      expect(commitMock.mock.calls[2]).toEqual(['SET_INCREMENT_PENDING', false]);
      done();
    });
  });

  test('it should set INCREMENT pending to false on fail', (done) => {
    const commitMock: jest.Mock = testContext.commit as jest.Mock;

    mockAxios
    .onPut('/counter/increment')
    .reply(500);

    JobsFilterActions
    .increment(testContext)
    .then(() => {
      expect(commitMock.mock.calls[0]).toEqual(['SET_INCREMENT_PENDING', true]);
      expect(commitMock.mock.calls[1]).toEqual(['SET_INCREMENT_PENDING', false]);
      done();
    });
  });

  test('it should call DECREMENT action on success', (done) => {
    const commitMock: jest.Mock = testContext.commit as jest.Mock;

    mockAxios
    .onPut('/counter/decrement')
    .reply(200, { count: 1337 });

    JobsFilterActions
    .decrement(testContext)
    .then(() => {
      expect(commitMock.mock.calls[0]).toEqual(['SET_DECREMENT_PENDING', true]);
      expect(commitMock.mock.calls[1]).toEqual(['SET_COUNT', 1337]);
      expect(commitMock.mock.calls[2]).toEqual(['SET_DECREMENT_PENDING', false]);
      done();
    });
  });

  test('it should set DECREMENT pending to false on fail', (done) => {
    const commitMock: jest.Mock = testContext.commit as jest.Mock;

    mockAxios
    .onPut('/counter/decrement')
    .reply(500);

    JobsFilterActions
    .decrement(testContext)
    .then(() => {
      expect(commitMock.mock.calls[0]).toEqual(['SET_DECREMENT_PENDING', true]);
      expect(commitMock.mock.calls[1]).toEqual(['SET_DECREMENT_PENDING', false]);
      done();
    });
  });

});
