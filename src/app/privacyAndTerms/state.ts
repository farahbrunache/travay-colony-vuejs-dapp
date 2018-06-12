export interface IPrivacyAndTermsState {
  incrementPending: boolean;
  decrementPending: boolean;
  count: number;
}

export const PrivacyAndTermsDefaultState: IPrivacyAndTermsState = {
  incrementPending: false,
  decrementPending: false,
  count:            0,
};
