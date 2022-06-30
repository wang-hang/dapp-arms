import { Interface } from "@ethersproject/abi";


/**
 *  @description 解析abi
 * @param abi
 * @returns
 */
export default function parseABI(abi: string){
  const {functions} = new Interface(abi);
  const list = Object.keys(functions).map(it => {
    const reg = /^([a-z]+)\((.*)\)$/i
    const matchResult = it.match(reg)
    if(!matchResult) {
      throw Error('abi 不合法')
    }
    const [_, name, params] = matchResult;
    return {
      name,
      params: params.split(','),
    }
  })
  return list;
}
