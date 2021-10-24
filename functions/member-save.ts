import { Member } from '@shared/models/member';
import { Handler } from '@netlify/functions';
import { MemberService, getMemberService } from './services/memberService';
import { loadEnv } from '@thomascsd/stools';

loadEnv();

const handler: Handler = async (event, context) => {
  const member = JSON.parse<Member>(event.body);
  const memberService: MemberService = getMemberService();
  const recored = await memberService.saveMember(member);

  return {
    statusCode: 200,
    body: JSON.stringify(recored),
  };
};

export { handler };
