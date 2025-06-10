// handlers/unfollow.ts
import { webhook, messagingApi } from '@line/bot-sdk';

export default async function handleUnfollow(
  event: webhook.UnfollowEvent,
  client: messagingApi.MessagingApiClient
) {
  console.log(`使用者 ${event.source.userId} 取消追蹤`);
}
