import { AppDefaultState, IAppState }         from './app/state';
import { ProfileDefaultState, IProfileState }         from './profile/state';
import { BalanceDefaultState, IBalanceState }         from './balance/state';
import { JobsDefaultState, IJobsState }         from './jobs/state';
import { JobDefaultState, IJobState }         from './job/state';
import { JobsFilterDefaultState, IJobsFilterState }         from './jobsFilter/state';
import { JobsGridDefaultState, IJobsGridState }         from './jobsGrid/state';
// Delete dummy data
// import { CounterDefaultState, ICounterState } from './counter/state';

export interface IState {
  [key: string]: any;

  app?: IAppState;
  // Delete dummy data
  // counter?: ICounterState;
  profile?: IProfileState;
  balance?: IBalanceState;
  jobs?: IJobsState;
  job?: IJobState;
  jobsFilter?: IJobsFilterState;
  jobsGrid?: IJobsGridState;
}

export const DefaultState: IState = {
  app:     {
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
  jobsFilter: {
    ...JobsFilterDefaultState,
  },
  jobsGrid: {
    ...JobsGridDefaultState,
  },
  // Delete dummy data
  // counter: {
  //   ...CounterDefaultState,
  // },
};
