import { textHandler } from '@/services/textService';
import { client } from '@/utils/client';
import { MessageEvent } from '@line/bot-sdk';

jest.mock('@/utils/client', () => ({
  client: {
    replyMessage: jest.fn(),
  },
}));

describe('textService', () => {
  const replyToken = 'test-token';

  it('應該回傳文字訊息', async () => {
    const event = {
      type: 'message',
      replyToken,
      message: {
        type: 'text',
        id: 'abc',
        text: '你好',
      },
    } as MessageEvent;

    await textHandler(event);

    expect(client.replyMessage).toHaveBeenCalledWith({
      replyToken,
      messages: [
        { type: 'text',
          text: '你傳送了文字：你好',
          quickReply: {
            items: [
              {
                type: 'action',
                action: {
                  type: 'postback',
                  label: '更多資訊',
                  data: 'action=more_info',
                  displayText: '我想看更多資訊',
                },
              },
              {
                type: 'action',
                action: {
                  type: 'postback',
                  label: '聯絡客服',
                  data: 'action=call_cs',
                  displayText: '我想聯絡客服',
                },
              },
            ],
          }
        },
      ],
    });
  });
});
