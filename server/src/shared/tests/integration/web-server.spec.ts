import axios from 'axios';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { createHTTPServerStream } from '../../web-server';
import { HTTP } from '../../../interfaces/web-server.interface';

describe('web server', () => {
  let serverSubscription: Subscription;

  const helloWorldMiddleware = (http: HTTP): void => {
    const { res } = http;
    res.end('Hello World');
  };

  afterEach(() => {
    serverSubscription.unsubscribe();
  });

  test('server stream works with basic middleware', async () => {
    const server$ = createHTTPServerStream(5000);
    serverSubscription = server$.pipe(map(helloWorldMiddleware)).subscribe();

    const res = await axios.get('http://localhost:5000');
    expect(res.data).toEqual('Hello World');
  });
});
