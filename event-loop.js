console.log("Start");

setTimeout(function() {
  console.log("Timer callback");
}, 0);

const promise = new Promise((resolve, reject) => {
    setTimeout (() => {
        return resolve(5);

    },0);
 
})

promise
.then((result) => {
    console.log("success" , result);
})
.catch((error) => {
    console.log("error" , error);
})
console.log("End");


//start
//timercall
// end 