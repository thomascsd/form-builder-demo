import { BaseModel } from './BaseModel';

export interface Distinct extends BaseModel {
  countyCode: string;
  countyName: string;
  distinctName: string;
}
