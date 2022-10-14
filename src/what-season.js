const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  const season = ['winter', 'spring', 'summer', 'autumn']
 if(arguments.length === 0){
  return 'Unable to determine the time of year!'
 }
//  if(Object.prototype.toString.call(date) !== '[object Date]'){
//  throw new Error ('Invalid date!')
//  }
try{
  date.getUTCFullYear()
} catch (error){
  throw new Error ('Invalid date!')
}

 if(date.getMonth()<2 || date.getMonth()===11){
  return 'winter'
 } else if (date.getMonth()>7 && date.getMonth()<11){
  return 'autumn'
 } else if (date.getMonth()>4 && date.getMonth()<=7){
  return 'summer'
 } else return 'spring'
}

module.exports = {
  getSeason
};
