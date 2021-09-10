import { config } from 'dotenv';
import { Handler } from '@netlify/functions';
import { CountyService, getCountyService } from './services/countyService';

config({ path: './.env' });

const handler: Handler = async (event, context) => {
  const countyCode: string = event.queryStringParameters.countyCode;
  const countyService: CountyService = getCountyService();
  const distinct = await countyService.getDistincts(countyCode);

  return {
    statusCode: 200,
    body: JSON.stringify(distinct),
  };
};

export { handler };
