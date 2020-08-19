const {add, subtract, submul, multiply, multiplymul, divide, dividemul, clearAllfields, } = require ("./calculator");
// const functions = require('./calculator'); 
                                    //  TESTING FOR THE ADDITION

describe("validating adding two digits and 3 digits",() => {

    test (" Adds 55 + 68 = 123", () => {
        expect(add(55,68)).toEqual(123);
    });

    // test('adding positive numbers is not zero', () => {
    //     for (let x = 1; x < 10; x++) {
    //       for (let y = 1; y < 10; y++) {
    //         expect(x + y).not.toBe(0);
    //       }
    //     }
    //   });

    test("10 + 210000 = 210010", () => {
        expect(add(10, 210000))
        .toEqual(210010);
    });

    test("10 + -20 = -10",() => {
        expect(add(10,38398920))
        .toEqual(38398930);
    })
})

                                // TESTING FOR THE SUBTRACTION 

describe("validating subtracting 3 digits and 2 digits  ",() => {
    test (" subtract 55 + 68 - 100 = 23", () => {
        expect(submul(55,68, -100)).toBe(223);
    });

    test("10 - 210 = -200", () => {
        expect(subtract(10, 210))
        .toBe(-200);
    });
                                                    // TESTING USING DECIMALS
    test("10 - 3.21 = 13.21", () => {
        expect(subtract(10, 3.21))
        .toBe(6.79);
    });
    
})

                                                    // TESTING FOR THE SUBTRACTION 

describe("validating multiplying  WITH digits  ",() => {
    test (" multiply 55 * 68 * 100 = 23", () => {
        expect(multiplymul(55,68, 100)).toBe(374000);
    });

    test("10 * 210 = 2100", () => {
        expect(multiply(10, 210))
        .toBe(2100);
    });
                                                    // TESTING USING DECIMALS
    test("10 * 3.21 = 32.1", () => {
        expect(multiply(10, 3.21))
        .toBe(32.1);
    });
});
                                                    // TESTING FOR THE DIVISION 

describe("validating DIVISION WITH   digits  ",() => {
    test ("dividemul 55 / 68 / 100 = 23", () => {
        expect(dividemul(55,68, 100)).toBeCloseTo(0.0081);
    });

    test("10 /  210 = 2100", () => {
        expect(divide(10, 210))
        .toBeCloseTo(0.0476);
    });
                                                    // TESTING USING DECIMALS
    test("10 / 3.21 = 32.1", () => {
        expect(divide(10, 3.21))
        .toBeCloseTo(3.1153);
    });

    test("23 / 0 throws", () => {
        expect(() => {
          expect(divide(23, 0));
        }).toThrow();
      });


    
    //   describe('display error when divide by zero', () => {
    //       it('You are dividing by zero', () {})
    //   })
    //   describe('display error when divide by zero', () => {
    //     it.todo('You are dividing by zero', () {})
    // })

    //   descrip
    // test.todo(" 23 / 0 "),() => {
    //     expect(divide(23, 0)) 
    //     it.todo("you are dividing by zero");
    // }
    // test.todo('compiling android goes as expected', () => {
    //     // expect(showerro).toThrow();
    //     // expect(showerro).toThrow(Error);
      
    //     // You can also use the exact error message or a regexp
    //     expect(showerro).toThrow('You are dividing by zero');
    //     // expect(compileAndroidCode).toThrow(/JDK/);
    //   });
    // test.todo('Divide 23/0', () => {
    //     // expect(showerro(23,0))
    //     it.todo("You are dividing by zero");
    // });
    // test("error when dividing by 0", () => {
    //     expect(showerro).toThrow("you are dividing by zero");
    // }) 

});

// describe("validating adding two digits and 3 digits",() => {

// });
describe("valid clearallfields", () => {
    test("0 = 0", () => {
      expect(clearAllfields(0)).toEqual(0);
    });
    test("Enter o to clear", () => {
        expect(() => {
          expect(clearAllfields("String"));
        }).toThrow();
      });
  });
