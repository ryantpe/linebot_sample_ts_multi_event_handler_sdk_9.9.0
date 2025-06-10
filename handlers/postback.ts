// handlers/postback.ts
import { webhook, messagingApi } from '@line/bot-sdk';

export default async function handlePostback(
  event: webhook.PostbackEvent,
  client: messagingApi.MessagingApiClient
) {
  const data = event.postback.data;
  let replyText = '收到 postback 資料：' + data;

  if (data === 'action=more_info') {
    replyText = '這是更多的資訊！';
  }

  await client.replyMessage({
    replyToken: event.replyToken,
    messages: [{ type: 'text', text: replyText }],
  });
}
