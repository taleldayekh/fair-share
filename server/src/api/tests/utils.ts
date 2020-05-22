import http, { ServerResponse, IncomingMessage } from 'http';

const options = {
  port: 666,
  host: 'localhost',
  path: '/api',
  method: 'POST',
};

class GraphQLRequest {
  private _request(reqData: string): Promise<ServerResponse> {
    return new Promise((resolve, reject) => {
      const req = http.request(options, (res: IncomingMessage) => {
        let resBody: string;
        res.on('data', (chunk) => {
          resBody = chunk.toString();
        });
        res.on('end', () => {
          resolve(JSON.parse(resBody));
        });
      });

      req.on('error', (err) => {
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
