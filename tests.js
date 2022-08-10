// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
        expect(helloWorld()).not.toBe(undefined);
    });
});

// sayHello() Unit Tests
describe('sayHello', function () {
    it('should be a described function', function () {
        expect(typeof sayHello).toBe('function')
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string')
    });
    it('should takes in the name "Jane" and returns a string that says "Hello, Jane". ', function () {
        expect(sayHello('Jane')).toBe(`Hello, Jane`)
    });
    it('should takes in the name "Alex" and returns a string that says "Hello, Alex". ', function () {
        expect(sayHello('Alex')).toBe(`Hello, Alex`)
    });
    it('should takes in the name "Pat" and returns a string that says "Hello, Pat". ', function () {
        expect(sayHello('Pat')).toBe(`Hello, Pat`)
    });
    it('should return "Hello, World!" when argument is undefined', function () {
        expect(sayHello()).toBe(`Hello, World!`)
    });
    it('should return "Hello, World!" when argument is an empty string', function () {
        expect(sayHello("")).toBe(`Hello, World!`)
    });
    it('should return "Hello, World!" when true is passed as an argument', function () {
        expect(sayHello(true)).toBe(`Hello, World!`)
    });
    it('should return "Hello, World!" when false is passed as an argument', function () {
        expect(sayHello(false)).toBe(`Hello, World!`)
    });
    it('should return "Invalid input" when the argument is null', function () {
        expect(sayHello(null)).toBe(`Invalid input`)
    });
    it('should return "Invalid input" when the argument is a number or numeric string', function () {
        expect(sayHello(5)).toBe(`Invalid input`)
    });
})

// isFive() Unit Tests
describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function')
    });
    it('should return a boolean when called', function () {
        expect(typeof isFive()).toBe('boolean')
    });
    it('should return true when 5 is passed as an argument', function () {
        expect(isFive(5)).toBe(true)
    });
    it('should return true when the string "5" is passed as an argument', function () {
        expect(isFive("5")).toBe(true)
    });
})

// isEven() Unit Tests
describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function')
    });
    it('should return a boolean no matter the input', function () {
        expect(typeof isEven()).toBe('boolean')
    });
    it('should return a true for any even number', function () {
        expect(isEven(4)).toBe(true)
    });
    it('should return a false for any odd number', function () {
        expect(isEven(5)).toBe(false)
    });
    it('should return a false if the input is not a number', function () {
        expect(isEven("dog")).toBe(false)
    });
    it('should return a false if the input is Infinity', function () {
        expect(isEven(Infinity)).toBe(false)
    });
    it('should return a false if the input is a boolean', function () {
        expect(isEven(true)).toBe(false)
    });
    it('should return a false when called without an argument', function () {
        expect(isEven()).toBe(false)
    });
})

describe('isVowel', function () {
    it('should be a defined function', function () {
      expect(typeof isVowel).toBe('function')
    });
    it('should return a boolean for any input', function () {
      expect(typeof isVowel()).toBe('boolean')
    });
    it('should return true for any vowel regardless of case', function () {
      expect(isVowel('A')).toBe(true)
    });
    it('should return false for any input that is not a vowel', function () {
      expect(isVowel(4)).toBe(false)
    });
})