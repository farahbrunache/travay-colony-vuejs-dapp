import { SignInModalMutations } from './mutations';
import { SignInModalDefaultState, ISignInModalState } from './state';
import { cloneDeep } from 'lodash';

describe('SignInModalMutations', () => {
  let testState: ISignInModalState;

  beforeEach(() => {
    testState = cloneDeep(SignInModalDefaultState);
  });
});
