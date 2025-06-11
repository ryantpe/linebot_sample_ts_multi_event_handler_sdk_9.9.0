import { MessageEvent, ImageMessage } from '@line/bot-sdk';
import { client } from '@/utils/client';

export async function imageHandler(event: MessageEvent) {
  const message = event.message as ImageMessage;

  const reply = {
    type: 'text',
    text: '收到圖片囉！你真會拍 👍',
  };

  return client.replyMessage({
    replyToken: event.replyToken,
    messages: [reply],
  });
}
