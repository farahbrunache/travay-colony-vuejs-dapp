import { ActionContext } from 'vuex';
import { ITransactionModalState } from './state';
import { HttpService } from '../shared/services/HttpService';
import { AxiosResponse } from 'axios';

export interface ITransactionModalResponse {
  count: number;
}

export interface ITransactionModalActions {}

export const TransactionModalActions: ITransactionModalActions = {};
