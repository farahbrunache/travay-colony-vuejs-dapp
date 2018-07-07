import { AppDefaultState, IAppState } from './app/state';
import { ProfileDefaultState, IProfileState } from './profile/state';
import { JobsDefaultState, IJobsState } from './jobs/state';
import { JobDefaultState, IJobState } from './job/state';
import {
  PrivacyAndTermsDefaultState,
  IPrivacyAndTermsState
} from './privacyAndTerms/state';
import { CreateJobDefaultState, ICreateJobState } from './createJob/state';
import { SigninDefaultState, ISigninState } from './signin/state';
import { WalletDefaultState, IWalletState } from './wallet/state';
import {
  SignInModalDefaultState,
  ISignInModalState
} from './signInModal/state';

export interface IState {
  [key: string]: any;

  app?: IAppState;
  profile?: IProfileState;
  jobs?: IJobsState;
  job?: IJobState;
  privacyAndTerms?: IPrivacyAndTermsState;
  createJob?: ICreateJobState;
  signin?: ISigninState;
  wallet?: IWalletState;
  signInModal?: ISignInModalState;
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
  privacyAndTerms: {
    ...PrivacyAndTermsDefaultState
  },
  createJob: {
    ...CreateJobDefaultState
  },
  signin: {
    ...SigninDefaultState
  },
  wallet: {
    ...WalletDefaultState
  },
  signInModal: {
    ...SignInModalDefaultState
  }
};
