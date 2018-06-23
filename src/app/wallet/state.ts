export interface IWalletState {
  incrementPending: boolean;
  decrementPending: boolean;
  count: number;
}

export const WalletDefaultState: IWalletState = {
  incrementPending: false,
  decrementPending: false,
  count:            0,
};
