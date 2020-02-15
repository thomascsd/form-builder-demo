import { JsonController, Get, Post, QueryParam } from 'routing-controllers';
import { CountyService } from '../services/countyService';
import { Inject } from 'typedi';

@Inject()
@JsonController()
export class CountyController {
  constructor(private countyService: CountyService) {}

  @Get('/county')
  getCounty() {
    return this.countyService.getCounties();
  }

  @Get('/distinct')
  getDistinct(@QueryParam('countyCode') countyCode: string) {
    return this.countyService.getDistincts(countyCode);
  }
}
