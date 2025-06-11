import { audioHandler } from '@/services/audioService';
import { client } from '@/utils/client';

jest.mock('@/utils/client', () => ({
  client: {
    replyMessage: jest.fn(),
  },
}));

describe('audioService', () => {
  it('應該回傳收到音訊文字', async () => {
    const event = {
      replyToken: 'token789',
      message: {
        type: 'audio',
        id: 'audio-id',
        duration: 5000,
      },
    } as any;

    await audioHandler(event);

    expect(client.replyMessage).toHaveBeenCalledWith({
      replyToken: 'token789',
      messages: [
        {
          type: 'text',
          text: '你傳了音訊，我收到了 🎧',
        },
      ],
    });
  });
});
