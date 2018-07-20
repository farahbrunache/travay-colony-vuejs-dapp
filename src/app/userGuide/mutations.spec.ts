import { UserGuideMutations } from './mutations';
import { UserGuideDefaultState, IUserGuideState } from './state';
import { cloneDeep } from 'lodash';

describe('UserGuideMutations', () => {
  let testState: IUserGuideState;

  beforeEach(() => {
    testState = cloneDeep(UserGuideDefaultState);
  });
});
