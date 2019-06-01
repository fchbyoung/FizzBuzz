function fizzBuzz(number) {
    const isDiviableBy5 = number % 5 === 0;
    const isDiviableBy3 = number % 3 === 0;
    if (isDiviableBy3 && isDiviableBy5) {
        return "FIZZBUZZ";
    } else if (isDiviableBy5) {
            return "BUZZ";
    } else if (isDiviableBy3) {
            return "FIZZ";
    }
    return number;

}