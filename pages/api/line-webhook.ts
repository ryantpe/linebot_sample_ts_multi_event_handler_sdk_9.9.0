// pages/api/line-webhook.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { webhook } from '@line/bot-sdk';
import { client } from '@/utils/client';
import lineHandler from '@/handlers/lineDispatcher';
import { isValidSignature } from '@/middlewares/signatureValidator';
import { logger } from '@/middlewares/logger';

export const config = {
  api: { bodyParser: false },
};

export default async function lineWebhook(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const chunks: Buffer[] = [];
  for await (const chunk of req) chunks.push(chunk);
  const body = Buffer.concat(chunks).toString('utf8');

  await logger(body); // optional logging

  const signature = req.headers['x-line-signature'];
  const secret = process.env.LINE_CHANNEL_SECRET!;
  if (!signature || !isValidSignature(body, signature as string, secret)) {
    return res.status(401).send('Invalid signature');
  }

  const events = (JSON.parse(body) as webhook.WebhookRequestBody).events;
  await Promise.all(events.map(event => lineHandler(event, client)));

  return res.status(200).end();
}
