const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let teamName = [];
    members.forEach(function (item) {
      if (typeof (item) === 'string') {
        teamName.push(item.trim().charAt(0).toUpperCase());
      }
    });
    return teamName.sort().join('');
  } else {
    return false;
  }
}
