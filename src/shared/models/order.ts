import { IsNotEmpty } from 'class-validator';
import { plainToClassFromExist } from 'class-transformer';

export class Order {
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
    plainToClassFromExist(this, data);
  }
}
