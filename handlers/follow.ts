// handlers/follow.ts
import { webhook, messagingApi } from '@line/bot-sdk';

export default async function handleFollow(
  event: webhook.FollowEvent,
  client: messagingApi.MessagingApiClient
) {
  await client.replyMessage({
    replyToken: event.replyToken,
    messages: [{ type: 'text', text: '感謝您的追蹤！' }],
  });
}
