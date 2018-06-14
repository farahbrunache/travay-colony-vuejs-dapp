import { ActionContext } from 'vuex';
import { ISignupState } from './state';
import { HttpService }   from '../shared/services/HttpService';
import { AxiosResponse } from 'axios';

export interface ISignupResponse {
  count: number;
}

export interface ISignupActions {
  increment(context: ActionContext<ISignupState, ISignupState>): Promise<any>;

  decrement(context: ActionContext<ISignupState, ISignupState>): Promise<any>;
}

export const SignupActions: ISignupActions = {
  increment({ commit, state }: ActionContext<ISignupState, ISignupState>): Promise<any> {
    commit('SET_INCREMENT_PENDING', true);

    return HttpService
    .put('/counter/increment', { count: state.count })
    .then((res: AxiosResponse<ISignupResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_INCREMENT_PENDING', false);
    })
    .catch(() => {
      commit('SET_INCREMENT_PENDING', false);
    });
  },
  decrement({ commit, state }: ActionContext<ISignupState, ISignupState>): Promise<any> {
    commit('SET_DECREMENT_PENDING', true);

    return HttpService
    .put('/counter/decrement', { count: state.count })
    .then((res: AxiosResponse<ISignupResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_DECREMENT_PENDING', false);
    })
    .catch(() => commit('SET_DECREMENT_PENDING', false));
  },
};
