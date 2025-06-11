// __tests__/services/pushService.test.ts
import { pushTextMessage, pushQuickReplyMessage } from '@/services/pushService';
import { client } from '@/utils/client';

jest.mock('@/utils/client', () => ({
  client: {
    pushMessage: jest.fn(),
  },
}));

describe('pushService', () => {
  const userId = 'U123';
  const text = '測試推播訊息';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('應正確推送純文字訊息', async () => {
    await pushTextMessage(userId, text);
    expect(client.pushMessage).toHaveBeenCalledWith({
      to: userId,
      messages: [{ type: 'text', text }],
    });
  });

  it('應正確推送 quick reply 訊息', async () => {
    await pushQuickReplyMessage(userId, text);
    expect(client.pushMessage).toHaveBeenCalledWith({
      to: userId,
      messages: [
        {
          type: 'text',
          text,
          quickReply: {
            items: [
              {
                type: 'action',
                action: {
                  type: 'postback',
                  label: '查看更多',
                  data: 'action=more_info',
                  displayText: '我想查看更多資訊',
                },
              },
            ],
          },
        },
      ],
    });
  });
});
