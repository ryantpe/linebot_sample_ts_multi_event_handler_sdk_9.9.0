import { MessageEvent, LocationMessage } from '@line/bot-sdk';
import { client } from '@/utils/client';

export async function locationHandler(event: MessageEvent) {
  const location = event.message;

  const reply = {
    type: 'location',
    title: '你傳送的位置',
    address: location.address,
    latitude: location.latitude,
    longitude: location.longitude,
  };

  return client.replyMessage({
    replyToken: event.replyToken,
    messages: [reply],
  });
}
