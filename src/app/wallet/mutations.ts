import { IWalletState } from './state';

export interface IWalletMutations {
  SET_INCREMENT_PENDING(state: IWalletState, pending: boolean): void;

  SET_DECREMENT_PENDING(state: IWalletState, pending: boolean): void;

  SET_COUNT(state: IWalletState, count: number): void;
}

export const WalletMutations: IWalletMutations = {
  SET_INCREMENT_PENDING: (state: IWalletState, pending: boolean) => {
    state.incrementPending = pending;
  },
  SET_DECREMENT_PENDING: (state: IWalletState, pending: boolean) => {
    state.decrementPending = pending;
  },
  SET_COUNT:             (state: IWalletState, count: number) => {
    state.count = count;
  },
};
