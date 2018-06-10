import { ActionContext } from 'vuex';
import { IJobsGridState } from './state';
import { HttpService }   from '../shared/services/HttpService';
import { AxiosResponse } from 'axios';

export interface IJobsGridResponse {
  count: number;
}

export interface IJobsGridActions {
  increment(context: ActionContext<IJobsGridState, IJobsGridState>): Promise<any>;

  decrement(context: ActionContext<IJobsGridState, IJobsGridState>): Promise<any>;
}

export const JobsGridActions: IJobsGridActions = {
  increment({ commit, state }: ActionContext<IJobsGridState, IJobsGridState>): Promise<any> {
    commit('SET_INCREMENT_PENDING', true);

    return HttpService
    .put('/counter/increment', { count: state.count })
    .then((res: AxiosResponse<IJobsGridResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_INCREMENT_PENDING', false);
    })
    .catch(() => {
      commit('SET_INCREMENT_PENDING', false);
    });
  },
  decrement({ commit, state }: ActionContext<IJobsGridState, IJobsGridState>): Promise<any> {
    commit('SET_DECREMENT_PENDING', true);

    return HttpService
    .put('/counter/decrement', { count: state.count })
    .then((res: AxiosResponse<IJobsGridResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_DECREMENT_PENDING', false);
    })
    .catch(() => commit('SET_DECREMENT_PENDING', false));
  },
};
