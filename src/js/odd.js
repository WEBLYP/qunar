/**
 * Created by WEB on 2018/8/24.
 */
import { even } from 'even'
function odd (n) {
  return n === 0 || even(n - 1)
}
export { odd }
even(10)
