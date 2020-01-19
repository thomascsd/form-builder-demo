import { genSalt, hash } from 'bcrypt';
import { RestDbService } from './restDbService';
import { MemberDomain, Member } from '../../shared/models/member';
import { classToPlain } from 'class-transformer';

export class MemberService {
  dbService: RestDbService = new RestDbService();

  async getMembers(): Promise<Member[]> {
    return await this.dbService.getData<Member>('member');
  }

  async saveMember(member: MemberDomain) {
    const data = classToPlain(member);
    const salt = await genSalt();
    const bPwd = await hash(data['password'], salt);

    data['birthday'] = `${member.birthdayYear}-${member.birthdayMonth}-${member.birthdayDay}`;
    data['password'] = bPwd;

    return this.dbService.saveData('member', data);
  }
}
