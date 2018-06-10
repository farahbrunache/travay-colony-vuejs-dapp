import { ActionContext } from 'vuex';
import { IJobsFilterState } from './state';
import { HttpService }   from '../shared/services/HttpService';
import { AxiosResponse } from 'axios';

export interface IJobsFilterResponse {
  count: number;
}

export interface IJobsFilterActions {
  increment(context: ActionContext<IJobsFilterState, IJobsFilterState>): Promise<any>;

  decrement(context: ActionContext<IJobsFilterState, IJobsFilterState>): Promise<any>;
}

export const JobsFilterActions: IJobsFilterActions = {
  increment({ commit, state }: ActionContext<IJobsFilterState, IJobsFilterState>): Promise<any> {
    commit('SET_INCREMENT_PENDING', true);

    return HttpService
    .put('/counter/increment', { count: state.count })
    .then((res: AxiosResponse<IJobsFilterResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_INCREMENT_PENDING', false);
    })
    .catch(() => {
      commit('SET_INCREMENT_PENDING', false);
    });
  },
  decrement({ commit, state }: ActionContext<IJobsFilterState, IJobsFilterState>): Promise<any> {
    commit('SET_DECREMENT_PENDING', true);

    return HttpService
    .put('/counter/decrement', { count: state.count })
    .then((res: AxiosResponse<IJobsFilterResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_DECREMENT_PENDING', false);
    })
    .catch(() => commit('SET_DECREMENT_PENDING', false));
  },
};
