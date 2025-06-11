import { MessageEvent, TextMessage } from '@line/bot-sdk';
import { client } from '@/utils/client';

export async function textHandler(event: MessageEvent) {
  const message = event.message;

  const reply: TextMessage = {
    type: 'text',
    text: `你傳送了文字：${message.text}`,
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

  return client.replyMessage({
    replyToken: event.replyToken,
    messages: [reply],
  });
}
