function receivesAFunction(func) {
    func();
}



  function returnsANamedFunction() {
    return function namedFunction() {
        console.log("this a named function")
    }
  }

 
  function returnsAnAnonymousFunction() {
    return function () {
        console.log("this a anonymous function")
    }
  }

  

