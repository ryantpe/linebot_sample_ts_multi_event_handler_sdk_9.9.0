import { MessageEvent, StickerMessage } from '@line/bot-sdk';
import { client } from '@/utils/client';

export async function stickerHandler(event: MessageEvent) {
  const message = event.message as StickerMessage;

  const reply = {
    type: 'sticker',
    packageId: message.packageId,
    stickerId: message.stickerId,
  };

  return client.replyMessage({
    replyToken: event.replyToken,
    messages: [reply],
  });
}
