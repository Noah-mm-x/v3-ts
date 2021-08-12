export interface Product {
  id: number, // id
  img: string, //图片地址
  title: string, // 名称
  price: number, // 价格
  count: number // 购买数量
}

export interface News {
  id: number,
  title: string,
  link?: string,
}

export interface Todo {
  txt: string,
  finish: boolean
}