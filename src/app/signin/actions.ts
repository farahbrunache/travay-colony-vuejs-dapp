import { ActionContext } from 'vuex';
import { ISigninState } from './state';
import { HttpService }   from '../shared/services/HttpService';
import { AxiosResponse } from 'axios';

export interface ISigninResponse {
  count: number;
}

export interface ISigninActions {
  increment(context: ActionContext<ISigninState, ISigninState>): Promise<any>;

  decrement(context: ActionContext<ISigninState, ISigninState>): Promise<any>;
}

export const SigninActions: ISigninActions = {
  increment({ commit, state }: ActionContext<ISigninState, ISigninState>): Promise<any> {
    commit('SET_INCREMENT_PENDING', true);

    return HttpService
    .put('/counter/increment', { count: state.count })
    .then((res: AxiosResponse<ISigninResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_INCREMENT_PENDING', false);
    })
    .catch(() => {
      commit('SET_INCREMENT_PENDING', false);
    });
  },
  decrement({ commit, state }: ActionContext<ISigninState, ISigninState>): Promise<any> {
    commit('SET_DECREMENT_PENDING', true);

    return HttpService
    .put('/counter/decrement', { count: state.count })
    .then((res: AxiosResponse<ISigninResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_DECREMENT_PENDING', false);
    })
    .catch(() => commit('SET_DECREMENT_PENDING', false));
  },
};
