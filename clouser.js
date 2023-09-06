// // what is clouser in js?

// // closure gives you access to an outer function's scope from an inner function. 
// In JavaScript, closures are created every time a function is created, at function creation time.


function outerFunction() {
    const outerVar = 'I am from the outer function';
  
    function innerFunction() {
      console.log(outerVar); // The inner function can access outerVar
    }
  
    return innerFunction; // Return the inner function
  }
  
  const closure = outerFunction(); // Execute outerFunction and assign the result (inner function) to closure
  closure(); // Call the inner function, which still has access to outerVar
  



  function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();


  
  function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();