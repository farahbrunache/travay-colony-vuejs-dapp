import { ISigninState } from './state';

export interface ISigninMutations {
  SET_USER_DATA(state: ISigninState, userData: object): void;
}

export const SigninMutations: ISigninMutations = {
  SET_USER_DATA: (state: ISigninState, userData: object) => {
    console.log('Setting user data in vuex!');
    state.userData = userData;
    console.log('User data set!', state);
  }
};

/*
state - stores the data
getters - functions which return something from the state
actions - do all the logic you need like async calls, etc and then commit mutations
mutations - it should only update the state, no side effetcs, state is received as a first parameter
*/
