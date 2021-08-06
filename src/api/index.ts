// api/index.ts

import { Product } from "../interface";
import data from "./data"
export const apiGetProducts = () => {
  return new Promise<Product[]>((resolve, reject) => {
    // 模拟接口请求
    setTimeout(() => {
      resolve(data);
    }, 1000)
  })
}