function fizzBuzz(number) {
    const isNumberEqualBy10 = number === 10;
    const TEN = 10;
    if (isNumberEqualBy10) {
        return TEN;
    } else if (number % 3 === 0) {
        return 'Fizz';
    }
}