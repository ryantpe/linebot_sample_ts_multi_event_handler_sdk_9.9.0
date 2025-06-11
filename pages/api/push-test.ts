// pages/api/push-test.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { pushTextMessage } from '@/services/pushService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const userId = req.query.userId as string;
  const message = req.query.message as string;

  if (!userId || !message) {
    return res.status(400).json({ error: 'Missing userId or message' });
  }

  await pushTextMessage(userId, message);
  return res.status(200).json({ status: 'OK' });
}
