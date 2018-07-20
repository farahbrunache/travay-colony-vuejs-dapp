import { JobMutations } from './mutations';
import { JobDefaultState, IJobState } from './state';
import { cloneDeep } from 'lodash';

describe('JobMutations', () => {
  let testState: IJobState;

  beforeEach(() => {
    testState = cloneDeep(JobDefaultState);
  });
});
