export interface Product {
  id: number, // id
  title: string, // 名称
  price: number, // 价格
  count: number // 购买数量
}

export interface News {
  id: number,
  title: string,
  link?: string,
}