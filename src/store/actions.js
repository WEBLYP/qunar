/**
 * Created by WEB on 2018/8/17.
 */
export default {
  changecity (ctx, city) {
    ctx.commit('changecity', city)
  },
  cc (ctx, blue) {
    ctx.commit('cc', 'blue')
  }
}
