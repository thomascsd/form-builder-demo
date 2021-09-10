import { Handler } from '@netlify/functions';
import { MemberService, getMemberService } from './services/memberService';

const handler: Handler = async (event, context) => {
  const memberService: MemberService = getMemberService();
  const members = await memberService.getMembers();

  return {
    statusCode: 200,
    body: JSON.stringify(members),
  };
};

export { handler };
