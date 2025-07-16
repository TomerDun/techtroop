const Exercises = require('./index.js');

test('Test exercises', function () {
        const ex = new Exercises();

        expect(ex.isEven(2)).toBeTruthy()
        expect(ex.isEven(3)).toBeFalsy()
        
        expect(ex.removeAtLeastOne([1,2,3,4,5]).length).toBeLessThan(5);
        expect(ex.removeAtLeastOne([1]).length).toBeLessThan(1);

        expect(ex.simplify('Hello, World!')).toBe('Hello World');
        expect(ex.simplify('ex#gmail.com!')).toBe('exgmailcom');

        expect(ex.validate([5,','])).toBe("Need at least one boolean");
        expect(ex.validate([true, true, false])).toBe(true);
        expect(ex.validate([true, false, false])).toBe(false);
        expect(ex.validate([true, false])).toBe(false);


})