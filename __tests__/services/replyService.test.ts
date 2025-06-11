// __tests__/services/replyService.test.ts
import { buildReplyWithPostback } from '@/services/replyService';
import { TextMessage } from '@line/bot-sdk';

describe('buildReplyWithPostback', () => {
  it('應該建立包含正確文字與 postback quick reply 的訊息', () => {
    const userText = '你好';
    const result = buildReplyWithPostback(userText);

    const expected: TextMessage = {
      type: 'text',
      text: '你說了：你好',
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
    };

    expect(result).toEqual(expected);
  });

  it('應正確處理空字串輸入', () => {
    const result = buildReplyWithPostback('');
    expect(result.text).toBe('你說了：');
  });

  it('quickReply 應包含正確格式的 action', () => {
    const result = buildReplyWithPostback('測試');
    const quickItem = result.quickReply?.items[0];

    expect(quickItem).toMatchObject({
      type: 'action',
      action: {
        type: 'postback',
        label: '更多資訊',
        data: 'action=more_info',
        displayText: '我想看更多資訊',
      },
    });
  });
});
