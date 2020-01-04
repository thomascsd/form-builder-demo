import {
  IsNotEmpty,
  IsEmail,
  IsMobilePhone,
  ValidationOptions,
  Matches,
  MinLength,
  MaxLength
} from 'class-validator';
import { plainToClassFromExist } from 'class-transformer';

const options: ValidationOptions = { message: '填寫正式資料' };

export class Member {
  @IsNotEmpty(options)
  name = '';

  @IsNotEmpty(options)
  @IsEmail()
  email = '';

  @IsNotEmpty(options)
  @IsMobilePhone('zh-TW', options)
  mobile = '';

  // @IsNotEmpty(options)
  // birthday = '';
  @IsNotEmpty({
    message: '填寫正式資料',
    groups: ['birthday']
  })
  birthdayYear = '';

  @IsNotEmpty({
    message: '填寫正式資料',
    groups: ['birthday']
  })
  birthdayMonth = '';

  @IsNotEmpty({
    message: '填寫正式資料',
    groups: ['birthday']
  })
  birthdayDay = '';

  @IsNotEmpty(options)
  @MinLength(6, options)
  @MaxLength(12, options)
  @Matches(/[a-zA-Z\d]/g, options)
  account = '';

  @IsNotEmpty(options)
  @MinLength(6, options)
  @MaxLength(12, options)
  @Matches(/[a-zA-Z\d]/g, options)
  password = '';

  constructor(data?: any) {
    plainToClassFromExist(this, data);
  }
}

export interface MemberObject {
  name: string;
  email: string;
  mobile: string;
  birthday: string;
  account: string;
  password: string;
}
