const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const k = 0.693/HALF_LIFE_PERIOD;


module.exports = function dateSample(sampleActivity) {
  const SAMPLE = parseFloat(sampleActivity);
  if (SAMPLE == false || typeof (sampleActivity) !== 'string' ) {
      return false;
  }
  let age = Math.ceil((Math.log(MODERN_ACTIVITY / SAMPLE)) / k);
  return age > 0 ? age: false;
};