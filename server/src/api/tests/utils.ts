import http, { IncomingMessage } from 'http';

class GraphQLRequest {
  private _request(reqData: string) {
    const options = {
      // TODO: Replace hard coded values with environment variables
      hostname: 'localhost',
      port: 666,
      path: '/api',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return new Promise((resolve, reject) => {
      // TODO: Replace any types
      const req = http.request(options, (res: IncomingMessage) => {
        let resBody = '';

        res.on('data', (chunk: IncomingMessage) => {
          resBody = chunk.toString();
        });
        res.on('end', () => {
          resolve(JSON.parse(resBody));
        });
      });

      req.on('error', (err: any) => {
        reject(err);
      });
      req.write(reqData);
      req.end();
    });
  }

  public async query(reqData: string) {
    return await this._request(reqData);
  }

  public async mutation(reqData: string) {
    return await this._request(reqData);
  }
}

export { GraphQLRequest };
