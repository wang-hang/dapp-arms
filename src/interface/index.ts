export interface AddTokenParams {
  address: string;
  symbol: string;
  decimals: number;
  image?: string;
}
// declare global {
//   interface Window {
//     ethereum?: {
//       isMetaMask?: true;
//       networkVersion: string;
//       request: (...args: any[]) => Promise<void>;
//       on: (type: string, Callback: Function) => {};
//       removeListener: (type: string, Callback: Function) => {};
//     };
//   }
// }
