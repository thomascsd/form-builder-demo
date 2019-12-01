import {
  IsNotEmpty,
  IsEmail,
  IsMobilePhone,
  ValidationOptions
} from "class-validator";
import { plainToClassFromExist } from "class-transformer";

const options: ValidationOptions = { message: "填寫正式資料" };

export class Member {
  @IsNotEmpty(options)
  name = "";

  @IsNotEmpty(options)
  @IsEmail()
  email = "";

  @IsNotEmpty(options)
  @IsMobilePhone("zh-TW", options)
  mobile = "";

  @IsNotEmpty(options)
  birthday: Date;

  constructor(data?: any) {
    plainToClassFromExist(this, data);
  }
}
