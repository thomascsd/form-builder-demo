import { BaseModel } from './baseModel';

export interface Distinct extends BaseModel {
  countyCode: string;
  countyName: string;
  distinctName: string;
}
