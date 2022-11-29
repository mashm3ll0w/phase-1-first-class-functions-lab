// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare){
  return function(){
    return fare * fare
  }
}

const fareToDouble = createFareMultiplier;

function fareDoubler(fareToDouble){
  return fareToDouble * 2;
}

const fareToTriple = createFareMultiplier;

function fareTripler(fareToTriple){
  return fareToTriple * 3;
}

function selectDifferentDrivers(drivers, fn){
  return fn(drivers);
}
