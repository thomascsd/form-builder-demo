import { genSalt, hash } from 'bcrypt';
import { Inject } from 'typedi';
import { RestDbService } from './restDbService';
import { Member } from '../../shared/models/member';

@Inject()
export class MemberService {
  constructor(private db: RestDbService) {}

  async getMembers(): Promise<Member[]> {
    return await this.db.getDatas<Member>('appYytqUfVu81cjXn', 'member');
  }

  async saveMember(member: Member) {
    const salt = await genSalt();
    const bPwd = await hash(member.password, salt);

    member.password = bPwd;

    return this.db.saveData('appYytqUfVu81cjXn', 'member', member);
  }
}
