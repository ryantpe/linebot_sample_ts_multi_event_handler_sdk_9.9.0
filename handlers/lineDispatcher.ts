// handlers/lineDispatcher.ts
import { webhook, messagingApi } from '@line/bot-sdk';
import handleFollow from './follow';
import handleUnfollow from './unfollow';
import handleMessage from './message';
import handlePostback from './postback';

export default async function lineHandler(
  event: webhook.WebhookEvent,
  client: messagingApi.MessagingApiClient
) {
  switch (event.type) {
    case 'follow':
      return handleFollow(event, client);
    case 'unfollow':
      return handleUnfollow(event, client);
    case 'message':
      return handleMessage(event);
    case 'postback':
      return handlePostback(event, client);
    default:
      return;
  }
}
