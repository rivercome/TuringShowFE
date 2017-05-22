/**
 * Created by out_xu on 17/5/4.
 */

export default {
  mobile: /(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7}/ig,
  password: /^\w{6,18}$/,
  mail: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,
  qq: /[1-9][0-9]{4,}/,
  number: /^[0-9]\d*$/,
  age: /^(?:[1-9][0-9]?|1[01][0-9]|120)$/,
  chinese: /[\u4E00-\u9FA5\uF900-\uFA2D]/,
  studentId: /^\d{7,8}$/
}
