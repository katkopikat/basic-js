const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  try {
    (date.getTime())
  } catch (error) {
    throw new Error('THROWN ' + error);
  }

  const month = date.getMonth();
  if (month >= 2 && month <= 4) {
    return "spring";
  }
  if (month >= 5 && month <= 7) {
    return "summer";
  }
  if (month >= 8 && month <= 10) {
    return "fall";
  }
  if (month === 11 || month >= 0 && month <= 1) {
    return "winter";
  }
}