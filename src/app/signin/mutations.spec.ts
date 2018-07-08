import { SigninMutations } from './mutations';
import { SigninDefaultState, ISigninState } from './state';
import { cloneDeep } from 'lodash';

describe('SigninMutations', () => {
  let testState: ISigninState;

  beforeEach(() => {
    testState = cloneDeep(SigninDefaultState);
  });
});
