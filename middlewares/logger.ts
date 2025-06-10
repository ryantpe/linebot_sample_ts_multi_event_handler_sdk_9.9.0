// middlewares/logger.ts
export async function logger(body: string) {
  console.log('LINE Webhook Payload:', body);
}
