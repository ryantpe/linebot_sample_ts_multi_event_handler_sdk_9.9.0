import { stickerHandler } from '@/services/stickerService';
import { client } from '@/utils/client';

jest.mock('@/utils/client', () => ({
  client: {
    replyMessage: jest.fn(),
  },
}));

describe('stickerService', () => {
  it('應該回傳同一張貼圖', async () => {
    const event = {
      replyToken: 'token321',
      message: {
        type: 'sticker',
        id: '1',
        packageId: '11537',
        stickerId: '52002744',
      },
    } as any;

    await stickerHandler(event);

    expect(client.replyMessage).toHaveBeenCalledWith({
      replyToken: 'token321',
      messages: [
        {
          type: 'sticker',
          packageId: '11537',
          stickerId: '52002744',
        },
      ],
    });
  });
});
