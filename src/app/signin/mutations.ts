import { ISigninState } from './state';

export interface ISigninMutations {
  SET_INCREMENT_PENDING(state: ISigninState, pending: boolean): void;

  SET_DECREMENT_PENDING(state: ISigninState, pending: boolean): void;

  SET_COUNT(state: ISigninState, count: number): void;

  SET_USER_DATA(state: ISigninState, userData: object): void;
}

export const SigninMutations: ISigninMutations = {
  SET_INCREMENT_PENDING: (state: ISigninState, pending: boolean) => {
    state.incrementPending = pending;
  },
  SET_DECREMENT_PENDING: (state: ISigninState, pending: boolean) => {
    state.decrementPending = pending;
  },
  SET_COUNT: (state: ISigninState, count: number) => {
    state.count = count;
  },
  SET_USER_DATA: (state: ISigninState, userData: object) => {
    console.log('Setting user data in vuex!');
    state.userData = userData;
    console.log('User data set!', state);
  },
};

/*
state - stores the data
getters - functions which return something from the state
actions - do all the logic you need like async calls, etc and then commit mutations
mutations - it should only update the state, no side effetcs, state is received as a first parameter
*/
