console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){
    if(count < 0){
        console.log("Count is negative")
    }
    else{
        for(let i = 0; i <= count; i++){
            if(i % 2 !=0){
                console.log(i)
            }
        }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    if(userName == null || age == null){
        console.log("Entered information incomplete please try again");
    }
    
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if(age > 16){
        console.log(aboveSixteen);
    }
    else{
        console.log(belowSixteen);
    }
}


const coordinates = {
  "0,0" : "center",
  "1,0" : "on y axis",
  "0,1" : "on x axis",
  "-1, 0": "on y axis",
  "0,-1": "on x axis",
  "1,1": "Quadrant 1",
  "1,-1": "Quadrant 2",
  "-1,-1": "Quadrant 3",
  "-1,1": "Quadrant 4"
}

function checkQuad(x,y){
  let key = `${Math.sign(x)},${Math.sign(y)}`;
  console.log(coordinates[key]);
}