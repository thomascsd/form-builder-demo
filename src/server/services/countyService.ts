import { County } from '../../shared/models/county';
import { Distinct } from '../../shared/models/distinct';
import { RestDbService } from './restDbService';
import { Inject } from 'typedi';

@Inject()
export class CountyService {
  constructor(private db: RestDbService) {}

  async getCounties(): Promise<County[]> {
    const counties = this.db.getDatas<County>('appYytqUfVu81cjXn', 'county');
    return counties;
  }

  async getDistincts(countyCode: string): Promise<Distinct[]> {
    const distincts = await this.db.getDatas<Distinct>('appYytqUfVu81cjXn', 'distinct', {
      filterByFormula: `{countyCode}=${countyCode}`
    });
    return distincts;
  }
}
