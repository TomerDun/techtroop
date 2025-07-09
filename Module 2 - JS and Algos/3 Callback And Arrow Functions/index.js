// Ex1

const push = function () {
  console.log("pushing it!")
}

const pull = function () {
  console.log("pulling it!")
}

function pushPull(func) {
    func();
}

pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"

// Ex2

const returnTime = function (time) {
  console.log('The current time is: ' + time)
}

function getTime(f) {    
    f(new Date)
}


getTime(returnTime)


// Ex3
const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

displayData(console.error, console.log, "I like to party")


// Ex4
const arrow = (a,b,c) => a + b + c;


// Ex5

const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

console.log(capitalize('bob'));


// Ex6
const determineWeather = temp => {
  if(temp > 25){
    return "hot"
  }
  return "cold"
}

const commentOnWeather = temp => "It's " + determineWeather(temp);

console.log(commentOnWeather(25));

 
