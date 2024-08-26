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

stringRandom.HEXADECIMAL_CHARS = '0123456789abcdef';

stringRandom.hexadecimal = (length = stringRandom.DEFAULT_LENGTH): string =>
  stringRandom(length, stringRandom.HEXADECIMAL_CHARS);
