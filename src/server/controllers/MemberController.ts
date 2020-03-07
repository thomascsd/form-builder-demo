import { JsonController, Get, Post, Body } from 'routing-controllers';
import { Inject } from 'typedi';
import { MemberService } from '../services/memberService';
import { Member } from '../../shared/models';

@Inject()
@JsonController()
export class MemberController {
  constructor(private memberService: MemberService) {}

  @Get('/member/list')
  getMembers() {
    return this.memberService.getMembers();
  }

  @Post('/member/save')
  saveMember(@Body() member: Member) {
    this.memberService.saveMember(member);
    return 'ok';
  }
}
