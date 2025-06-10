// handlers/message.ts
import { webhook, messagingApi } from '@line/bot-sdk';
import { buildReplyWithPostback } from '@/services/replyService';

export default async function handleMessage(
  event: webhook.MessageEvent,
  client: messagingApi.MessagingApiClient
) {
  if (event.message.type !== 'text') return;

  const reply = buildReplyWithPostback(event.message.text);
  await client.replyMessage({
    replyToken: event.replyToken,
    messages: [reply],
  });
}
