/**
 * Created by WEB on 2018/8/17.
 */
export default {
  changecity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  },
  cc (state, blue) {
    state.color = state.color === 'red' ? 'blue' : 'red'
  }
}
