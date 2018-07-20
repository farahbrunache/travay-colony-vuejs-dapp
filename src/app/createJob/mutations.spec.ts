import { CreateJobMutations } from './mutations';
import { CreateJobDefaultState, ICreateJobState } from './state';
import { cloneDeep } from 'lodash';

describe('CreateJobMutations', () => {
  let testState: ICreateJobState;

  beforeEach(() => {
    testState = cloneDeep(CreateJobDefaultState);
  });
});
