
                                          // adding 
const add = (x, y) => {
    return x + y;
  };
  // function add (x,y)
  const submul = (x, y, n) => {
    return x + y - n;
  };
                                      // SUBTRACTING
  const subtract = (x, y) => {
    return x - y;
  };
  
                                    //  MULTIPLICATION
  
  const multiply = (x, y) => {
    return x * y;
  };
  const multiplymul = (x, y, n) => {
    return x * y * n;
  };
                                         // DIVISION 
  function divide (x, y) {
    if (y === 0) {
      throw "Cannot divide by 0!";
    }
     return x / y;
  
  };

  const dividemul = (x, y, n) => {
    return x / y / n;
  };  

  const clearAllfields = (x)=>{
    if(isNaN(x)){
      throw "Select to clear the fields";
    }
      return 0;
  };

  
  
  
  module.exports = {
    add,
    subtract,
    submul,
    multiply,
    multiplymul,
    divide,
    dividemul,
    clearAllfields
    
  };

