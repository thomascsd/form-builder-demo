import { IsNotEmpty } from 'class-validator';
import { plainToClassFromExist } from 'class-transformer';
import { BaseModel } from './BaseModel';

export class Order extends BaseModel {
  @IsNotEmpty()
  contactName = '';

  @IsNotEmpty()
  county = '';

  @IsNotEmpty()
  distinct = '';

  @IsNotEmpty()
  address = '';

  @IsNotEmpty()
  receiveName = '';

  @IsNotEmpty()
  receiveCounty = '';

  @IsNotEmpty()
  receiveDistinct = '';

  @IsNotEmpty()
  receiveAdress = '';

  constructor(data: any) {
    super();
    plainToClassFromExist(this, data);
  }
}
