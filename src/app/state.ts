import { AppDefaultState, IAppState } from './app/state';
import { ProfileDefaultState, IProfileState } from './profile/state';
import { BalanceDefaultState, IBalanceState } from './balance/state';
import { JobsDefaultState, IJobsState } from './jobs/state';
import { JobDefaultState, IJobState } from './job/state';
import { PrivacyAndTermsDefaultState, IPrivacyAndTermsState }         from './privacyAndTerms/state';
import { CreateJobDefaultState, ICreateJobState }         from './createJob/state';

export interface IState {
  [key: string]: any;

  app?: IAppState;
  profile?: IProfileState;
  balance?: IBalanceState;
  jobs?: IJobsState;
  job?: IJobState;
  privacyAndTerms?: IPrivacyAndTermsState;
  createJob?: ICreateJobState;
}

export const DefaultState: IState = {
  app: {
    ...AppDefaultState,
  },
  profile: {
    ...ProfileDefaultState,
  },
  balance: {
    ...BalanceDefaultState,
  },
  jobs: {
    ...JobsDefaultState,
  },
  job: {
    ...JobDefaultState,
  },
  privacyAndTerms: {
    ...PrivacyAndTermsDefaultState,
  },
  createJob: {
    ...CreateJobDefaultState,
  },
};
