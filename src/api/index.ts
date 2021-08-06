// api/index.ts

import { Product, News } from "../interface";
import { productData, newsData } from "./data"
export const apiGetProducts = () => {
  return new Promise<Product[]>((resolve, reject) => {
    // 模拟接口请求
    setTimeout(() => {
      resolve(productData);
    }, 1000)
  })
}
export const apiGetNews = () => {
  return new Promise<News[]>((resolve, reject) => {
    // 模拟接口请求
    setTimeout(() => {
      resolve(newsData);
    }, 1000)
  })
}