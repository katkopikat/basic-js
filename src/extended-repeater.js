const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str += '';
  let addit = options.addition === undefined ? '' : String(options.addition);

  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.additionSeparator === undefined) options.additionSeparator = '|';
  if (options.separator === undefined) options.separator = '+';


  let additionArr = new Array(options.additionRepeatTimes);
  let additionStr = additionArr.fill(addit).join(options.additionSeparator);
  let resaltArr = new Array(options.repeatTimes);
  return resaltArr.fill(str + additionStr).join(options.separator);
}
