import { AppMutations } from './mutations';
import { AppDefaultState, IAppState } from './state';
import { cloneDeep } from 'lodash';

describe('AppMutations', () => {
  let testState: IAppState;

  beforeEach(() => {
    testState = cloneDeep(AppDefaultState);
  });
});
