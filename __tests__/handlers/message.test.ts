// __tests__/handlers/message.test.ts
import handleMessage from '@/handlers/message';
import { messagingApi, webhook } from '@line/bot-sdk';

describe('handleMessage', () => {
  //建立一個假的 replyMessage 函式（用來測試用）。
  const replyMessage = jest.fn();
  //建立一個假的 MessagingApiClient 物件，只包含 replyMessage 方法。
  //這樣可以在測試中驗證 replyMessage 是否被正確呼叫，而不需要真的呼叫外部 API
  // { replyMessage }: 建立一個物件,裡面有屬性 replyMessage
  // as unknow: 先將這個物件轉型為 unknown，這是為了繞過 TypeScript 的型別檢查
  // as messagingApi....: 轉型為API物件,用以模擬這個 API 客戶端的型別
  const client = { replyMessage } as unknown as messagingApi.MessagingApiClient;

  beforeEach(() => replyMessage.mockReset());

  it('handles text message and replies with quick reply', async () => {
    const event: webhook.MessageEvent = {
      type: 'message',
      replyToken: 'test-token',
      message: { type: 'text', text: 'hello' },
      source: { type: 'user', userId: 'U123' },
      mode: 'active',
      timestamp: Date.now(),
    };

    await handleMessage(event, client);

    expect(replyMessage).toHaveBeenCalledWith({
      replyToken: 'test-token',
      messages: [
        {
          type: 'text',
          text: '你說了：hello',
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
          },
        },
      ],
    });
  });
});
