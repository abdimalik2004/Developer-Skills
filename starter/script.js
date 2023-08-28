// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2023 - birthYear;
// console.log(calcAge(1991));
const tempratures = [3, -2, -6, 'error', 9, 13, 17, 15, 14, 9, 5];
// I) Understanding the proplem
// - what is temp amplitude? difference btw highest and lowest temp
// - how to compute max and min tempretures?
// - what's a sensor error? And what to do?
// 2) Breaking up into sub-proplems
// - How to ignore errors?
// - Find max value in array
// - Find min value in array
// - Substract min from max (amplitude) and return it
const calcTempAmplitude = function (temp) {
  let max = temp[0];
  let min = temp[0];
  for (let i = 0; i < temp.length; i++) {
    const curtemp = temp[i];
    if (typeof curtemp !== 'number') continue;
    if (curtemp > max) max = curtemp;
    if (curtemp < min) min = curtemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(tempratures);
console.log(amplitude);
// proplem 2:
// function should receive 2 arrays of temps
// I) Understanding the proplem
// - with 2 arrays, should we implement functionality twice? NO! just merge two Arrays
// 2) Breaking up into sub-proplems
//
// - Merge 2 arrays
const calcTempAmplitudeNew = function (t1, t2) {
  const tempss = t1.concat(t2);
  console.log(tempss);
  let max = tempss[0];
  let min = tempss[0];
  for (let i = 0; i < tempss.length; i++) {
    const curtemp = tempss[i];
    if (typeof curtemp !== 'number') continue;
    if (curtemp > max) max = curtemp;
    if (curtemp < min) min = curtemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
