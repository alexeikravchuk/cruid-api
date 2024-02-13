import { IncomingMessage } from 'http';
import { Readable } from 'stream';
import getBodyData from './getBodyData';

describe('getBodyData', () => {
  it('should parse JSON data from the request', async () => {
    const mockReq = new Readable();
    mockReq.push('{"foo":"bar"}');
    mockReq.push(null);

    const result = await getBodyData(mockReq as unknown as IncomingMessage);
    expect(result).toEqual({ foo: 'bar' });
  });

  it('should throw an error for invalid JSON', async () => {
    const mockReq = new Readable();
    mockReq.push('invalid json');
    mockReq.push(null);

    await expect(getBodyData(mockReq as unknown as IncomingMessage)).rejects.toThrow(SyntaxError);
  });
});
