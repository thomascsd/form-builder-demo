import * as express from 'express';
import { validateOrReject } from 'class-validator';
import { Route } from '../interfaces/Route';
import { Router } from '../interfaces/Router';
import { MemberService } from 'services/memberService';
import { Member } from '../../shared/models/member';

const getMemberRoute: Route = {
  path: '/member',
  handler(req: express.Request, res: express.Response): any {
    return res.json({
      message: 'hello'
    });
  }
};

const saveMemberRoute: Route = {
  path: '/member',
  async handler(req: express.Request, res: express.Response): any {
    const memberService = new MemberService();
    const member = req.body as Member;

    try {
      await validateOrReject(member);

      const ret = await memberService.saveMember(member);

      return res.json(res);
    } catch (error) {
      return res.json({
        message: `errors:${error}`
      });
    }
  }
};

export default class ApiRouter implements Router {
  setRouter(router: express.Router) {
    router.get(getMemberRoute.path, getMemberRoute.handler);
    router.post(getMemberRoute.path, getMemberRoute.handler);
  }
}
