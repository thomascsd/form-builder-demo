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

export class MemberDomain {
  @IsNotEmpty({
    message: '姓名需填寫'
  })
  name = '';

  @IsNotEmpty({
    message: 'Email需填寫'
  })
  @IsEmail()
  email = '';

  @IsNotEmpty({
    message: '手機需填寫'
  })
  @IsMobilePhone('zh-TW', {
    message: '手機需填寫'
  })
  mobile = '';

  // @IsNotEmpty(options)
  // birthday = '';
  @IsNotEmpty({
    message: '填寫正式資料'
  })
  birthdayYear = '';

  @IsNotEmpty({
    message: '填寫正式資料'
  })
  birthdayMonth = '';

  @IsNotEmpty({
    message: '填寫正式資料'
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

export interface Member {
  _id: number | string;
  name: string;
  email: string;
  mobile: string;
  birthday: string;
  account: string;
  password: string;
}
