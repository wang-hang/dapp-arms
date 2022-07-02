import blockies from 'blockies-identicon';

/**
 *
 * @param address 地址
 * @returns 图片的base64 url
 */
export default function makeAvatar(address: string) {
  const avatar = blockies.create({ seed: address }) as HTMLCanvasElement;
  return avatar.toDataURL();
}
