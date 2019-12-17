import { IsNotEmpty, IsEmail, IsMobilePhone, ValidationOptions, Matches } from 'class-validator';
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
  birthdayYear = 0;

  @IsNotEmpty({
    message: '填寫正式資料',
    groups: ['birthday']
  })
  birthdayMonth = 0;

  @IsNotEmpty({
    message: '填寫正式資料',
    groups: ['birthday']
  })
  birthdayDay = 0;

  @IsNotEmpty(options)
  @Matches(/[a-zA-Z\d]{6,12}/g, options)
  account = '';

  @IsNotEmpty(options)
  @Matches(/[a-zA-Z\d]{6,12}/g, options)
  password = '';

  constructor(data?: any) {
    plainToClassFromExist(this, data);
  }
}
