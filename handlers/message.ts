import { MessageEvent, Message } from '@line/bot-sdk';
import { textHandler } from '@/services/textService';
import { imageHandler } from '@/services/imageService';
import { stickerHandler } from '@/services/stickerService';
import { audioHandler } from '@/services/audioService';
import { locationHandler } from '@/services/locationService';

export default async function handleMessage(event: MessageEvent) {
  const message = event.message;

  switch (message.type) {
    case 'text':
      return textHandler(event);
    case 'image':
      return imageHandler(event);
    case 'sticker':
      return stickerHandler(event);
    case 'audio':
      return audioHandler(event);
    case 'location':
      return locationHandler(event);
    default:
      return console.log('Unsupported message type:', message.type);
  }
}
