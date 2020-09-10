import axios from 'axios';
// import { map } from 'rxjs/operators';
import { createHTTPServerStream } from '../../web-server';
// import { testData } from '../../testing/test-data';

describe('web server', () => {
  // const helloWorldMiddleware = testData.helloWorldMiddleware;

  test('server stream with basic middleware', async () => {
    const server$ = createHTTPServerStream(5000);

    server$.subscribe(value => console.log(value));

    await axios.get('http://localhost:5000');
    // console.log(res);
  });
});
