'use strict';

/**
 * 整数が17で割り切れるかどうか判定する
 * @param {int} x
 * @return {boolean} 
 */
function isMultipleOfSeventeen(x){
  return x%17 === 0;
}
module.exports = {
  isMultipleOfSeventeen
}
