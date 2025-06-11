 import { locationHandler } from '@/services/locationService';
import { client } from '@/utils/client';

jest.mock('@/utils/client', () => ({
  client: {
    replyMessage: jest.fn(),
  },
}));

describe('locationService', () => {
  it('應該回傳相同位置訊息', async () => {
    const event = {
      replyToken: 'token456',
      message: {
        type: 'location',
        title: 'My Place',
        address: 'Taipei 101',
        latitude: 25.033,
        longitude: 121.565,
      },
    } as any;

    await locationHandler(event);

    expect(client.replyMessage).toHaveBeenCalledWith({
      replyToken: 'token456',
      messages: [
        {
          type: 'location',
          title: '你傳送的位置',
          address: 'Taipei 101',
          latitude: 25.033,
          longitude: 121.565,
        },
      ],
    });
  });
});
