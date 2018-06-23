import { IWalletState } from './state';

export interface IWalletGetters {
  incrementPending(state: IWalletState): boolean;
  decrementPending(state: IWalletState): boolean;
  count(state: IWalletState): number;
}

export const WalletGetters: IWalletGetters = {
  incrementPending(state: IWalletState): boolean {
    return state.incrementPending;
  },
  decrementPending(state: IWalletState): boolean {
    return state.decrementPending;
  },
  count(state: IWalletState): number {
    return state.count;
  },
};
