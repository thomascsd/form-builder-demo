import { genSalt, hash } from 'bcrypt';
import { DataFunctionService } from '@thomascsd/stools';
import { Member } from '@shared/models/member';

export class MemberService {
  constructor(private db: DataFunctionService) {}

  async getMembers(): Promise<Member[]> {
    return await this.db.getDatas<Member>('member');
  }

  async saveMember(member: Member) {
    const salt = await genSalt();
    const bPwd = await hash(member.password, salt);

    member.password = bPwd;

    return this.db.saveData('member', member);
  }
}

export function getMemberService() {
  var db = new DataFunctionService(process.env.AIRTABLE_API, 'appYytqUfVu81cjXn');
  var memberSerivce = new MemberService(db);
  return memberSerivce;
}
