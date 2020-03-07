import { BaseModel } from './index';

export interface County extends BaseModel {
  countyCode: string;
  countyName: string;
}
