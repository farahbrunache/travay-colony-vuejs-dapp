import { IPrivacyAndTermsState } from './state';

export interface IPrivacyAndTermsMutations {
  SET_INCREMENT_PENDING(state: IPrivacyAndTermsState, pending: boolean): void;

  SET_DECREMENT_PENDING(state: IPrivacyAndTermsState, pending: boolean): void;

  SET_COUNT(state: IPrivacyAndTermsState, count: number): void;
}

export const PrivacyAndTermsMutations: IPrivacyAndTermsMutations = {
  SET_INCREMENT_PENDING: (state: IPrivacyAndTermsState, pending: boolean) => {
    state.incrementPending = pending;
  },
  SET_DECREMENT_PENDING: (state: IPrivacyAndTermsState, pending: boolean) => {
    state.decrementPending = pending;
  },
  SET_COUNT:             (state: IPrivacyAndTermsState, count: number) => {
    state.count = count;
  },
};
