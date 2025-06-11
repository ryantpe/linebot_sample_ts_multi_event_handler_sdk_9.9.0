import { imageHandler } from '@/services/imageService';
import { client } from '@/utils/client';

jest.mock('@/utils/client', () => ({
  client: {
    replyMessage: jest.fn(),
  },
}));

describe('imageService', () => {
  it('應該回傳收到圖片文字', async () => {
    const event = {
      replyToken: 'token123',
      message: {
        type: 'image',
        id: 'img-id',
      },
    } as any;

    await imageHandler(event);

    expect(client.replyMessage).toHaveBeenCalledWith({
      replyToken: 'token123',
      messages: [{ type: 'text', text: '收到圖片囉！你真會拍 👍' }],
    });
  });
});
