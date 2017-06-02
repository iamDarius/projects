//INSTRUCTIONS
// Write a calculator that calculates sleep debt

// The program will ask how many hours of sleep is ideal each night, then compare that to the actual hours slept each night

// Then, it will calculate the amount of hours over or under they are to their sleep goal

// Gather the hours of sleep from user input
function getSleepHours(day){
  var hours = prompt('How many hours of sleep did you get on ' + day + ' ?');
 	return (Number(hours)); 
}

// Get number of hours user slept
function getActualSleepHours(){
 	var monday = getSleepHours('monday');
  var tuesday = getSleepHours('tuesday');
  var wednesday = getSleepHours('wednesday');
  var thursday = getSleepHours('thursday');
  var friday = getSleepHours('friday');
  var saturday = getSleepHours('saturday');
  var sunday = getSleepHours('sunday');
  
  var totalHours = monday + tuesday + wednesday + thursday + friday + saturday + sunday;
  return totalHours;
}

// Get ideal hours of sleep
function getIdealSleepHours(){
  var idealSleepHours = prompt('How much sleep is ideal per night for you?');
 return Number(idealSleepHours * 7); // returns hours of sleep per week
}


//Calculation for Sleep Debt
function calculateSleepDebt(){
  var actualSleepHours = getActualSleepHours(); 
  var idealSleepHours =  getIdealSleepHours();
  
  if( actualSleepHours > idealSleepHours ){
    var sleptOver = actualSleepHours - idealSleepHours;
    console.log('You got more sleep than needed.');
    console.log( 'You slept ' + sleptOver + ' hours more than anticipated');
  }
  else if( actualSleepHours < idealSleepHours){
  var sleptUnder = idealSleepHours - actualSleepHours ;
    console.log('You should get some rest.');
    console.log( 'You slept ' + sleptUnder + ' hours under what you expected');
  }
  else {
    console.log('You got the perfect amount of sleep.');
  }
}
calculateSleepDebt();

