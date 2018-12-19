/**
 * Created by WEB on 2018/8/24.
 */
import { odd } from 'odd'
export var m = 0
function even (n) {
  m++
  return n === 0 || odd(n - 1)
}
export { even }
