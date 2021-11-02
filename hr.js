function calcWeekPay(type, hours) {
  //1= front end dev & 2= back end dev
  if (type === 1) {
    wage = 55;
    if (hours > 40) {
      wage = 110;
    }
  } else if (type === 2) {
    wage = 60;
    if (hours > 40) {
      wage = 120;
    }
  } else {
    console.log("I'm sorry, please try again");
  }

  weeklyPay = wage * hours;

  return "Your pay this week is: " + weeklyPay;
}

module.exports = calcWeekPay;
