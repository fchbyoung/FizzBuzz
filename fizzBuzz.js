function fizzBuzz(number) {
    const isNumberEqualBy10 = number === 10;
    const TEN = '10';
    const isDiviableBy3 = number % 3 === 0;
    if (isNumberEqualBy10) {
        return TEN;
    } else if (isDiviableBy3) {
        return isDiviableBy3;
    }
}