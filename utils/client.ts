// utils/client.ts
import { messagingApi } from '@line/bot-sdk';

export const client = new messagingApi.MessagingApiClient({
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN!,
});
