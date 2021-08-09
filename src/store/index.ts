import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { Product } from 'src/interface';

export interface State {
  shoppingCart: Product[]
}

export const key: InjectionKey<Store<State>> = Symbol();

// store/index.ts
export const store = createStore<State>({
  state: {
    shoppingCart: []
  },
  getters: {
    shoppingCartLen(state) {
      return state.shoppingCart.length
    },
    // 是否在购物车中已存在
    isInCart(state) {
      return (data: any) => {
        return state.shoppingCart.findIndex(item => item.id === data.id) > -1 ? true : false;
      }
    }
  },
  mutations: {
    // 添加购物车
    addToCart(state, data) {
      state.shoppingCart.push(data);
    }
  }
})
export function useStore() {
  // 通过key给store提供类型
  return baseUseStore(key)
}

