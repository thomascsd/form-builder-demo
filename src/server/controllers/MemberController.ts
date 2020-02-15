import { JsonController, Get, Post, Body } from 'routing-controllers';
import { MemberService } from '../services/memberService';
import { MemberDomain } from '../../shared/models/member';

@JsonController()
export class MemberController {
  constructor(private memberService: MemberService) {}

  @Get('/member/list')
  getMembers() {
    return this.memberService.getMembers();
  }

  @Post('/member/save')
  saveMember(@Body() member: MemberDomain) {
    this.memberService.saveMember(member);
    return 'ok';
  }
}
