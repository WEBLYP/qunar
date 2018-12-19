/**
 * Created by WEB on 2018/8/17.
 */

let defaultcity = '海口'
let defaultcolor = 'red'
try {
  if (localStorage.city || localStorage.color) {
    defaultcity = localStorage.city
    defaultcolor = localStorage.color
  }
} catch (e) {}

export default {
  city: defaultcity,
  color: defaultcolor
}
