import { genSalt, hash } from 'bcrypt';
import { DataService } from '@thomascsd/stools';
import { Service } from 'typedi';
import { Member } from '../../shared/models/member';

@Service()
export class MemberService {
  constructor(private db: DataService) {}

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
