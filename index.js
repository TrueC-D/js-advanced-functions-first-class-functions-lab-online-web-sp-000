// Code your solution in this file!
<<<<<<< HEAD
const returnFirstTwoDrivers = function(anArray){
    return anArray.slice(0, 2)
//   return [anArray[0], anArray[1]]
}

const returnLastTwoDrivers = function(anArray){
    return anArray.slice(-2)
//   return [anArray[anArray.length - 1], anArray[anArray.length - 2]]
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 

function createFareMultiplier(multiplyBy, fare){
    return function(fare){ return fare*multiplyBy}
//   return  multiplyBy * fare
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers( array, driverFunction){
  return driverFunction(array)
=======

const firstTwo = returnFirstTwoDrivers(anArray){
  return [anArray[0], anArray[1]]
}

const lastTwo = returnLastTwoDrivers(anArray){
  return [anArray[anArray.length - 1], anArray[anArray.length - 2]]
}
let selectingDrivers = [firstTwo(anArray), lastTwo(anarray)] 

function createFareMultiplier(argument, integer){
  return argument * integer
}

const double = fareDoubler(fare){createFareMultiplier(2, fare)}

const triple= fareTripler(fare){createFareMultiplier(3, fare)}

function selectDifferentDrivers( array, driverFunction){
  driverFunction 
>>>>>>> db72fcd181db20d1639349c0b949f8dfc51869bc
}


