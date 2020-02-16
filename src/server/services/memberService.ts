import { genSalt, hash } from 'bcrypt';
import { RestDbService } from './restDbService';
import { MemberDomain, Member } from '../../shared/models/member';
import { classToPlain } from 'class-transformer';
import { Inject } from 'typedi';

@Inject()
export class MemberService {
  constructor(private db: RestDbService) {}

  async getMembers(): Promise<Member[]> {
    return await this.db.getData<Member>('member');
  }

  async saveMember(member: MemberDomain) {
    const data = classToPlain(member);
    const salt = await genSalt();
    const bPwd = await hash(data['password'], salt);

    data['birthday'] = `${member.birthdayYear}-${member.birthdayMonth}-${member.birthdayDay}`;
    data['password'] = bPwd;

    return this.db.saveData('member', data);
  }
}
