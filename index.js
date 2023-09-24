// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers= function(obj){
    const fistTwoDrivers = obj.slice(0,2);
    return fistTwoDrivers;
}

const returnLastTwoDrivers= function(obj){
    const lastTwoDrivers = obj.slice(-2);
    return lastTwoDrivers;

}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and returns a 
//function that will multiply a fare for a ride accordingly. For example, if createFareMultiplier() 
//receives an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare.

const createFareMultiplier = function(integer){
    return function (fare){
        return fare * integer;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers,funct){
    return funct(arrayOfDrivers);
    
}








