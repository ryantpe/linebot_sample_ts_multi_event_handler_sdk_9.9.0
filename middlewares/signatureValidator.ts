// middlewares/signatureValidator.ts
import { validateSignature } from '@line/bot-sdk';

export function isValidSignature(body: string, signature: string, channelSecret: string): boolean {
  return validateSignature(body, channelSecret, signature);
}
