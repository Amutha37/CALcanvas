class Calculator {
  constructor(preDisplay, curDisplay) {
    this.preDisplay = preDisplay
    this.curDisplay = curDisplay
    this.clear()
  }

  clear() {
    this.curNum = ''
    this.preNum = ''
    this.operation = undefined
  }
                          // BACKSPACE 
  delete() {
    this.curNum = this.curNum.toString().slice(0, -1)
  }
                                  // VALIDATING DOUBLE DECIMALS 
  appendNumber(number) {
  //   if (number === '0' && this.preNum ===  "/")
  //    {return(this.currentOperand("ERROR"))
  //  } else 

    if (number === '.' && this.curNum.includes('.'))   
    return
    this.curNum = this.curNum.toString() + number.toString()
  
  }                                                           // DECIDING  THE OPERATION 
  chooseOperation(operation) {
  
      // this.operation = operation
     

      //  if ((this.previousOperand !== '' && this.currentOperand) ===  ("0" && operation === '/')) {
        
      //       this.currentOperand = "Err"; return
          
      //       }
          
        
      // error 
    if (this.curNum === '') return
    if (this.preNum !== '') {
        // If NaN or Infinity returned
  
      this.calculate()
    }
    this.operation = operation
    this.preNum = this.curNum
    this.curNum = ''
  }
                              // CALCULATING THE INPUTS 
  calculate() {
    let computation
    const prev = parseFloat(this.preNum)
    const current = parseFloat(this.curNum)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }
    this.curNum = computation
    this.operation = undefined
    this.preNum = ''
  }
                                  //  DISPLAY PREVIOUS VALUES
  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }
                              // UPDATING THE PREVIOUS VALUES
  updateDisplay() {
    if(this.curNum === Infinity || this.curNum === -Infinity) {
      // console.log(this.currentOperand);
      return(this.curDisplay.innerText = "Error") ;
    } else {


    this.curDisplay.innerText =
      this.getDisplayNumber(this.curNum)
    if (this.operation != null) {
      this.preDisplay.innerText =
        `${this.getDisplayNumber(this.preNum)} ${this.operation}`
    } else {
      this.preDisplay.innerText = ''
    }
  }
  }
}

//   DECLARING THE ELEMENTS 

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const preDisplay = document.querySelector('[data-previous-operand]')
const curDisplay = document.querySelector('[data-current-operand]')

const calculator = new Calculator(preDisplay, curDisplay)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})
                                          //  SELECTING OPERATION
operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})
                              //EQUAL 
equalsButton.addEventListener('click', button => {
  calculator.calculate()
  calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})