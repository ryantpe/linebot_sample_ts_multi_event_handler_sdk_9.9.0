import { MessageEvent, AudioMessage } from '@line/bot-sdk';
import { client } from '@/utils/client';

export async function audioHandler(event: MessageEvent) {
  const reply = {
    type: 'text',
    text: '你傳了音訊，我收到了 🎧',
  };

  return client.replyMessage({
    replyToken: event.replyToken,
    messages: [reply],
  });
}
