import { config } from 'dotenv';
import { Handler } from '@netlify/functions';
import { CountyService, getCountyService } from './services/countyService';

config({ path: './.env' });

const handler: Handler = async (event, context) => {
  const countyService: CountyService = getCountyService();
  const county = await countyService.getCounties();

  return {
    statusCode: 200,
    body: JSON.stringify(county),
  };
};

export { handler };
