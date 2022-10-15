const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
//  function repeater(str, options) {
//   let arrAddition = [];
//   let arrStr = [];
//   const repeatTimes = options.repeatTimes || 1,
//       separator = options.separator || '+',
//       addition = options.addition+'' || "",   
//       additionRepeatTimes = options.additionRepeatTimes || 1,
//       additionSeparator = options.additionSeparator || '|'

//       for(let i = 1; i<=additionRepeatTimes; i++){
//           arrAddition.push(addition)
//       }
//       str = str + arrAddition.join(additionSeparator);

//       for(let i = 1; i<=repeatTimes; i++){
//           arrStr.push(str)
//       }
//       str = arrStr.join(separator);

//       return str
// }
function repeater(str, options) {
  let arrAddition = [];
  let arrStr = [];
  const repeatTimes = options.repeatTimes || 1,
      separator = options.separator || '+',
      addition = options.addition === undefined? "" : options.addition+'',   
      additionRepeatTimes = options.additionRepeatTimes || 1,
      additionSeparator = options.additionSeparator || '|'

      for(let i = 1; i<=additionRepeatTimes; i++){
          arrAddition.push(addition)
      }
      str = str + arrAddition.join(additionSeparator);

      for(let i = 1; i<=repeatTimes; i++){
          arrStr.push(str)
      }
      str = arrStr.join(separator);

      return str
}

module.exports = {
  repeater
};
