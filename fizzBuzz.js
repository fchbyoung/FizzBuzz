function fizzBuzz(number) {
    const isNumberEqualBy5 = number % 5 === 0;
    const isDiviableBy3 = number % 3 === 0;
    if (isNumberEqualBy5) {
        return "BUZZ";
    } else if (isDiviableBy3) {
        return "FIZZ";
    }
}