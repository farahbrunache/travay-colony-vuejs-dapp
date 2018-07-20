import { AdminMutations } from './mutations';
import { AdminDefaultState, IAdminState } from './state';
import { cloneDeep } from 'lodash';

describe('AdminMutations', () => {
  let testState: IAdminState;

  beforeEach(() => {
    testState = cloneDeep(AdminDefaultState);
  });
});
