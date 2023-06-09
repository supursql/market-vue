// 把components中的所有组件进行全局化配置
import ImageView from "./ImageView/index.vue"
import Sku from "./Sku/index.vue"

export const componentPlugin = {
    install(app) {
        app.component('MarketImageView', ImageView),
        app.component('MarketSku', Sku)
    }
}