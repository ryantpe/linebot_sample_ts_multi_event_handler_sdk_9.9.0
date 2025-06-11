// services/replyService.ts
import { TextMessage } from '@line/bot-sdk';

export function buildReplyWithPostback(userText: string): TextMessage {
  return {
    type: 'text',
    text: `你說了：${userText}`,
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
}
