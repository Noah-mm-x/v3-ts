// api/index.ts

import { Product, News, Todo } from "../interface";
import { productsData, newsData, todosData } from "./data"
export const apiGetProducts = () => {
  return new Promise<Product[]>((resolve, reject) => {
    // 模拟接口请求
    setTimeout(() => {
      resolve(productsData);
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

export const apiGetTodos = () => {
  return new Promise<Todo[]>((resolve, reject) => {
    // 模拟接口请求
    setTimeout(() => {
      resolve(todosData);
    }, 1000)
  })
}