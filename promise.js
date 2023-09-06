// // // what is promise in js?

// // // Promise is an object that represents a potentially asynchronous operation. 
// // It is a way to work with asynchronous code in a more organized and manageable manner.
// //  Promises are commonly used for tasks such as making network requests, reading files, or any operation that might take some time to complete.


// A Promise has three states:

// Pending: This is the initial state when a Promise is created. It represents that the operation associated with the Promise hasn't completed yet.

// Fulfilled: This state represents that the operation has completed successfully, and the result is available.

// Rejected: This state represents that the operation has encountered an error, and an error reason is available.

// Promises have a simple and standardized API consisting of methods like .then() and .catch() to handle the result or error of the asynchronous operation. 



const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve(randomNumber); // Operation succeeded
      } else {
        reject("Error: Random number is greater than 0.5"); // Operation failed
      }
    }, 1000); // Simulating a delay of 1 second
  });
  
  myPromise
    .then((result) => {
      console.log("Success:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  