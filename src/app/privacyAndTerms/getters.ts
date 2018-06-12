import { IPrivacyAndTermsState } from './state';

export interface IPrivacyAndTermsGetters {
  incrementPending(state: IPrivacyAndTermsState): boolean;
  decrementPending(state: IPrivacyAndTermsState): boolean;
  count(state: IPrivacyAndTermsState): number;
}

export const PrivacyAndTermsGetters: IPrivacyAndTermsGetters = {
  incrementPending(state: IPrivacyAndTermsState): boolean {
    return state.incrementPending;
  },
  decrementPending(state: IPrivacyAndTermsState): boolean {
    return state.decrementPending;
  },
  count(state: IPrivacyAndTermsState): number {
    return state.count;
  },
};
