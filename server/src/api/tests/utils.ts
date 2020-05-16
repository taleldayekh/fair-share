import http from 'http';

class GraphQLRequest {
  private _request(postData: string) {
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
      const req = http.request(options, (res: any) => {
        let resBody = '';

        res.on('data', (chunk: any) => {
          resBody = chunk.toString();
        });
        res.on('end', () => {
          resolve(JSON.parse(resBody));
        });
      });

      req.on('error', (err: any) => {
        reject(err);
      });
      req.write(postData);
      req.end();
    });
  }

  public async query(postData: string) {
    return await this._request(postData);
  }

  public async mutation(postData: string) {
    return await this._request(postData);
  }
}

export { GraphQLRequest };
