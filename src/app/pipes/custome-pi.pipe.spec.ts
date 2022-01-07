import { CustomePiPipe } from './custome-pi.pipe';

describe('CustomePiPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomePiPipe();
    expect(pipe).toBeTruthy();
  });
});
