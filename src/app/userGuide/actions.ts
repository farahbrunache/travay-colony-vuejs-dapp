import { ActionContext } from 'vuex';
import { IUserGuideState } from './state';
import { HttpService } from '../shared/services/HttpService';
import { AxiosResponse } from 'axios';

export interface IUserGuideResponse {
  count: number;
}

export interface IUserGuideActions {}

export const UserGuideActions: IUserGuideActions = {};
