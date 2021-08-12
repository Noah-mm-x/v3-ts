import { Product, News, Todo } from "../interface";

import img1 from '/img/products/img1.jpg'
import img2 from '/img/products/img2.jpg'
import img3 from '/img/products/img3.jpg'
import img4 from '/img/products/img4.jpg'
import img5 from '/img/products/img5.jpg'
import img6 from '/img/products/img6.jpg'
import img7 from '/img/products/img7.jpg'
import img8 from '/img/products/img8.jpg'
import img9 from '/img/products/img9.jpg'
import img10 from '/img/products/img10.jpg'
import img11 from '/img/products/img11.jpg'


const productsData: Product[] = [
  {
    id: 1,
    img: img1,
    title: 'aaa',
    price: 20,
    count: 10
  },
  {
    id: 2,
    img: img2,
    title: 'bbb',
    price: 12,
    count: 40
  },
  {
    id: 3,
    img: img3,
    title: 'ccc',
    price: 2,
    count: 4
  },
  {
    id: 4,
    img: img4,
    title: 'ddd',
    price: 2,
    count: 30
  },
  {
    id: 5,
    img: img5,
    title: 'ddd',
    price: 43,
    count: 3
  },
  {
    id: 6,
    img: img6,
    title: 'ddd',
    price: 120,
    count: 300
  },
  {
    id: 7,
    img: img7,
    title: 'ddd',
    price: 89,
    count: 30
  },
  {
    id: 8,
    img: img8,
    title: 'ddd',
    price: 72,
    count: 3
  },
  {
    id: 9,
    img: img9,
    title: 'ddd',
    price: 53,
    count: 390
  },
  {
    id: 10,
    img: img10,
    title: 'ddd',
    price: 28,
    count: 320
  },
  {
    id: 11,
    img: img11,
    title: 'ddd',
    price: 21,
    count: 130
  },
]
const newsData: News[] = [
  {
    id: 1,
    title: '31省区市新增本土确诊80例'
  },
  {
    id: 2,
    title: '#中国看台上全是世界冠军#'
  },
  {
    id: 4,
    title: '#巴萨官方宣布梅西离队#'
  },
  {
    id: 5,
    title: '全国多地通知:这些场所一律关停'
  },
  {
    id: 6,
    title: '裸男闯女顾客房间 全季酒店回应'
  },
  {
    id: 7,
    title: '#如何看待安徽一地踹门查补课#'
  },
  {
    id: 8,
    title: '武汉104个小区实行封控管理'
  },
  {
    id: 9,
    title: '江苏新增本土确诊61例 扬州58例'
  },
  {
    id: 10,
    title: '李小鹏:我扔硬币水花都比她大'
  },
  {
    id: 11,
    title: '孙颖莎想成为真正的大魔王'
  }
]
const todosData: Todo[] = [
  {
    txt: '早起',
    finish: false
  },
  {
    txt: '吃早饭',
    finish: true
  },
  {
    txt: '记账',
    finish: true
  },
  {
    txt: '吃午饭',
    finish: false
  },
  {
    txt: '敲代码',
    finish: false
  },
  {
    txt: '修图',
    finish: false
  },
  // {
  //   txt: '拍照',
  //   finish: false
  // },
  // {
  //   txt: '聊天',
  //   finish: true
  // },
  {
    txt: '笑一下',
    finish: false
  },
  {
    txt: '喝口水',
    finish: false
  },
  {
    txt: '写需求',
    finish: true
  }
]
export {
  productsData,
  newsData, 
  todosData
}