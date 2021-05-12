import { County } from '../../shared/models/county';
import { Distinct } from '../../shared/models/distinct';
import { DataService } from '@thomascsd/stools';
import { Service } from 'typedi';

@Service()
export class CountyService {
  constructor(private db: DataService) {}

  async getCounties(): Promise<County[]> {
    const counties = this.db.getDatas<County>('appYytqUfVu81cjXn', 'county');
    return counties;
  }

  async getDistincts(countyCode: string): Promise<Distinct[]> {
    const distincts = await this.db.getDatas<Distinct>('appYytqUfVu81cjXn', 'distinct', {
      filterByFormula: `{countyCode}=${countyCode}`,
    });
    return distincts;
  }
}
