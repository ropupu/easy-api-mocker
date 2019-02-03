import * as fs from 'fs';

import { RepositoryInterface } from 'adapters/repositories/RepositoryInterface';

export class EndpointRepository implements RepositoryInterface {
  public async save(data: object): Promise<boolean> {
    const fsPromises = fs.promises;
    const path = '/tmp/rp';
    try {
      const filehandle = await fsPromises.open(path, 'w');
      await filehandle.writeFile(JSON.stringify(data));
    } catch (e) {
      throw e;
    }
    return new Promise((resolve) => resolve(true));
  }
}