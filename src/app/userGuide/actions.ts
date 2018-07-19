import { ActionContext } from 'vuex';
import { IUserGuideState } from './state';
import { HttpService }   from '../shared/services/HttpService';
import { AxiosResponse } from 'axios';

export interface IUserGuideResponse {
  count: number;
}

export interface IUserGuideActions {
  increment(context: ActionContext<IUserGuideState, IUserGuideState>): Promise<any>;

  decrement(context: ActionContext<IUserGuideState, IUserGuideState>): Promise<any>;
}

export const UserGuideActions: IUserGuideActions = {
  increment({ commit, state }: ActionContext<IUserGuideState, IUserGuideState>): Promise<any> {
    commit('SET_INCREMENT_PENDING', true);

    return HttpService
    .put('/counter/increment', { count: state.count })
    .then((res: AxiosResponse<IUserGuideResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_INCREMENT_PENDING', false);
    })
    .catch(() => {
      commit('SET_INCREMENT_PENDING', false);
    });
  },
  decrement({ commit, state }: ActionContext<IUserGuideState, IUserGuideState>): Promise<any> {
    commit('SET_DECREMENT_PENDING', true);

    return HttpService
    .put('/counter/decrement', { count: state.count })
    .then((res: AxiosResponse<IUserGuideResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_DECREMENT_PENDING', false);
    })
    .catch(() => commit('SET_DECREMENT_PENDING', false));
  },
};
