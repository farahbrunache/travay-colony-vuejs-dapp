import { ActionContext } from 'vuex';
import { IPrivacyAndTermsState } from './state';
import { HttpService }   from '../shared/services/HttpService';
import { AxiosResponse } from 'axios';

export interface IPrivacyAndTermsResponse {
  count: number;
}

export interface IPrivacyAndTermsActions {
  increment(context: ActionContext<IPrivacyAndTermsState, IPrivacyAndTermsState>): Promise<any>;

  decrement(context: ActionContext<IPrivacyAndTermsState, IPrivacyAndTermsState>): Promise<any>;
}

export const PrivacyAndTermsActions: IPrivacyAndTermsActions = {
  increment({ commit, state }: ActionContext<IPrivacyAndTermsState, IPrivacyAndTermsState>): Promise<any> {
    commit('SET_INCREMENT_PENDING', true);

    return HttpService
    .put('/counter/increment', { count: state.count })
    .then((res: AxiosResponse<IPrivacyAndTermsResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_INCREMENT_PENDING', false);
    })
    .catch(() => {
      commit('SET_INCREMENT_PENDING', false);
    });
  },
  decrement({ commit, state }: ActionContext<IPrivacyAndTermsState, IPrivacyAndTermsState>): Promise<any> {
    commit('SET_DECREMENT_PENDING', true);

    return HttpService
    .put('/counter/decrement', { count: state.count })
    .then((res: AxiosResponse<IPrivacyAndTermsResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_DECREMENT_PENDING', false);
    })
    .catch(() => commit('SET_DECREMENT_PENDING', false));
  },
};
