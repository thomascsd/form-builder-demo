import { BaseModel } from './baseModel';

export interface County extends BaseModel {
  countyCode: string;
  countyName: string;
}
