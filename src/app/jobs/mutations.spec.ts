import { JobsMutations } from './mutations';
import { JobsDefaultState, IJobsState } from './state';
import { cloneDeep } from 'lodash';

describe('JobsMutations', () => {
  let testState: IJobsState;

  beforeEach(() => {
    testState = cloneDeep(JobsDefaultState);
  });
});
