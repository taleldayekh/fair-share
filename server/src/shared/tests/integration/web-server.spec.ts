import axios from 'axios';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { createHTTPServerStream, createRouter } from '../../web-server';
import { HTTP, Router } from '../../../interfaces/web-server.interface';

describe('web server', () => {
  const PORT = 5000;
  const URL = `http://localhost:${PORT}`;
  let server$: Observable<HTTP>;
  let serverSubscription: Subscription;
  let router: Router;

  const helloWorldMiddleware = (http: HTTP): void => {
    const { res } = http;
    res.end('Hello World');
  };

  beforeEach(() => {
    server$ = createHTTPServerStream(PORT);
    router = createRouter();
  });

  afterEach(() => {
    serverSubscription.unsubscribe();
  });

  test('server stream works with middleware', async () => {
    serverSubscription = server$.pipe(map(helloWorldMiddleware)).subscribe();
    const res = await axios.get(URL);

    expect(res.data).toEqual('Hello World');
    expect(res.status).toBe(200);
  });

  test('routing works with middleware', async () => {
    router.addRoute('GET', '/hello-world', helloWorldMiddleware);
    serverSubscription = server$.pipe(router.routes()).subscribe();
    const res = await axios.get(`${URL}/hello-world`);

    expect(res.data).toEqual('Hello World');
    expect(res.status).toBe(200);
  });

  test('returns 405 if post request is made to get request route', async () => {
    router.addRoute('GET', '/hello-world', helloWorldMiddleware);
    serverSubscription = server$.pipe(router.routes()).subscribe();

    try {
      await axios.post(`${URL}/hello-world`);
    } catch (err) {
      expect(err.response.data).toEqual('405 Method Not Allowed');
      expect(err.response.status).toBe(405);
    }
  });

  test('returns 405 if get request is made to post request route', async () => {
    router.addRoute('POST', '/hello-world', helloWorldMiddleware);
    serverSubscription = server$.pipe(router.routes()).subscribe();

    try {
      await axios.get(`${URL}/hello-world`);
    } catch (err) {
      expect(err.response.data).toEqual('405 Method Not Allowed');
      expect(err.response.status).toBe(405);
    }
  });

  test('returns 404 if request is made to non-added route', async () => {
    serverSubscription = server$.pipe(router.routes()).subscribe();

    try {
      await axios.get(URL);
    } catch (err) {
      expect(err.response.data).toBe('404 Not Found');
      expect(err.response.status).toBe(404);
    }
  });
});
