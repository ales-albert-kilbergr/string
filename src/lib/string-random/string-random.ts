export function stringRandom(
  length = stringRandom.DEFAULT_LENGTH,
  chars = stringRandom.ALPHANUMERIC_CHARS,
): string {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

stringRandom.DEFAULT_LENGTH = 8;

stringRandom.ALPHABETICAL_CHARS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

stringRandom.ALPHANUMERIC_CHARS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
