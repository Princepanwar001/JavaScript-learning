// conversion from string to number
score ="33"

console.log(typeof score);
console.log(typeof(score));
console.log(score);

let values=Number(score);
console.log(typeof(values));
console.log(values);

// "33"=> 33
//"33abc"=>Nan
//true=>1;false=>0
//"abc"=>Nan
//null=0
//undefined =Nan

// conversion from number to Boolean 
let loggedin=1

let Booleanloggedin= Boolean(loggedin)
console.log(Booleanloggedin);
