import { ActionContext } from 'vuex';
import { IProfileState } from './state';
import { HttpService }   from '../shared/services/HttpService';
import { AxiosResponse } from 'axios';

export interface IProfileResponse {
  count: number;
}

export interface IProfileActions {
  increment(context: ActionContext<IProfileState, IProfileState>): Promise<any>;

  decrement(context: ActionContext<IProfileState, IProfileState>): Promise<any>;
}

export const ProfileActions: IProfileActions = {
  increment({ commit, state }: ActionContext<IProfileState, IProfileState>): Promise<any> {
    commit('SET_INCREMENT_PENDING', true);

    return HttpService
    .put('/counter/increment', { count: state.count })
    .then((res: AxiosResponse<IProfileResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_INCREMENT_PENDING', false);
    })
    .catch(() => {
      commit('SET_INCREMENT_PENDING', false);
    });
  },
  decrement({ commit, state }: ActionContext<IProfileState, IProfileState>): Promise<any> {
    commit('SET_DECREMENT_PENDING', true);

    return HttpService
    .put('/counter/decrement', { count: state.count })
    .then((res: AxiosResponse<IProfileResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_DECREMENT_PENDING', false);
    })
    .catch(() => commit('SET_DECREMENT_PENDING', false));
  },
};
