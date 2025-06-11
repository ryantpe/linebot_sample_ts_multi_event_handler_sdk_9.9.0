// services/pushService.ts
import { messagingApi } from '@line/bot-sdk';
import { client } from '@/utils/client';

export async function pushTextMessage(userId: string, text: string): Promise<void> {
  await client.pushMessage({
    to: userId,
    messages: [
      {
        type: 'text',
        text,
      },
    ],
  });
}

export async function pushQuickReplyMessage(userId: string, text: string): Promise<void> {
  await client.pushMessage({
    to: userId,
    messages: [
      {
        type: 'text',
        text,
        quickReply: {
          items: [
            {
              type: 'action',
              action: {
                type: 'postback',
                label: '查看更多',
                data: 'action=more_info',
                displayText: '我想查看更多資訊',
              },
            },
          ],
        },
      },
    ],
  });
}
