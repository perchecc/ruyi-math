import { Decimal } from "decimal.js";
// args第一位为被操作数据

//加法
function add(...args) {
  let result = new Decimal(args[0]);
  for (let i = 1; i < args.length; i++) {
    result = result.add(new Decimal(args[i]));
  }
  return result.toNumber();
}
//减法
function sub(...args) {
  let result = new Decimal(args[0]);
  for (let i = 1; i < args.length; i++) {
    result = result.sub(new Decimal(args[i]));
  }
  return result.toNumber();
}
//乘法
function mul(...args) {
  let result = new Decimal(args[0]);
  for (let i = 1; i < args.length; i++) {
    result = result.mul(new Decimal(args[i]));
  }
  return result.toNumber();
}
//除法
function div(...args) {
  let result = new Decimal(args[0]);
  for (let i = 1; i < args.length; i++) {
    result = result.div(new Decimal(args[i]));
  }
  return result.toNumber();
}

export default {
  add,
  sub,
  mul,
  div,
};
