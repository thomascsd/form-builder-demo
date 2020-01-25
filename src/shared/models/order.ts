import { IsNotEmpty } from 'class-validator';

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
}
