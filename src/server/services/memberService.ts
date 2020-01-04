import { RestDbService } from './restDbService';
import { Member } from '../../shared/models/member';
import { classToPlain } from 'class-transformer';

export class MemberService {
  dbService: RestDbService = new RestDbService();
  saveMember(member: Member) {
    const data = classToPlain(member);

    data['birthday'] = `${member.birthdayYear}-${member.birthdayMonth}-${member.birthdayDay}`;

    return this.dbService.saveData('member', data);
  }
}
