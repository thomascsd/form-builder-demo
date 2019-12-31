import got from 'got';
import { ETIME } from 'constants';

export class RestDbService {
  async getData<T>(tableName: string): Promise<T[]> {
    const url = `${process.env.RESTDB_URL}${tableName}`;
    const client = this.getGot();
    const body = await client.get(url).json<T[]>();

    return body;
  }

  async saveData(tableName: string) {
    const url = `${process.env.RESTDB_URL}${tableName}`;
    const client = this.getGot();

    await client.post(url);
  }

  getGot() {
    const client = got.extend({
      headers: {
        'cache-control': 'no-cache',
        'x-apikey': `${process.env.RESTDB_API}`
      }
    });

    return client;
  }
}
