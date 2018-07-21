import { AppDefaultState, IAppState } from './app/state';
import { ProfileDefaultState, IProfileState } from './profile/state';
import { JobsDefaultState, IJobsState } from './jobs/state';
import { JobDefaultState, IJobState } from './job/state';
import { CreateJobDefaultState, ICreateJobState } from './createJob/state';
import { WalletDefaultState, IWalletState } from './wallet/state';
import {
  SignInModalDefaultState,
  ISignInModalState
} from './signInModal/state';
import { AdminDefaultState, IAdminState } from './admin/state';
import { UserGuideDefaultState, IUserGuideState } from './userGuide/state';
import {
  TransactionModalDefaultState,
  ITransactionModalState
} from './transactionModal/state';

export interface IState {
  [key: string]: any;

  app?: IAppState;
  profile?: IProfileState;
  jobs?: IJobsState;
  job?: IJobState;
  createJob?: ICreateJobState;
  wallet?: IWalletState;
  signInModal?: ISignInModalState;
  admin?: IAdminState;
  userGuide?: IUserGuideState;
  transactionModal?: ITransactionModalState;
}

export const DefaultState: IState = {
  app: {
    ...AppDefaultState
  },
  profile: {
    ...ProfileDefaultState
  },
  jobs: {
    ...JobsDefaultState
  },
  job: {
    ...JobDefaultState
  },
  createJob: {
    ...CreateJobDefaultState
  },
  wallet: {
    ...WalletDefaultState
  },
  signInModal: {
    ...SignInModalDefaultState
  },
  admin: {
    ...AdminDefaultState
  },
  userGuide: {
    ...UserGuideDefaultState
  },
  transactionModal: {
    ...TransactionModalDefaultState
  }
};
