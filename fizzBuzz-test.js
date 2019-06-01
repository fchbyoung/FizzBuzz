QUnit.test("hello test", function (assert) {
    assert.ok(1 == "1", "Passed!");
});

QUnit.test("fizz test", function (assert) {
    let number = 3;
    let actual = fizzBuzz(number);
    let expected = 'FIZZ';
    assert.equal(actual, expected, "Divisible by 3");
});

QUnit.test("buzz test", function (assert) {
    let number = 5;
    let actual = fizzBuzz(number);
    let expected = 'BUZZ';
    assert.equal(actual, expected, "Divisible by 5");
});

QUnit.test("fizzbuzz test", function (assert) {
    let number = 15;
    let actual = fizzBuzz(number);
    let expected = 'FIZZBUZZ';
    assert.equal(actual, expected, "Divisible by 3 & 5");
});

QUnit.test("number test", function (assert) {
    let number = 1;
    let actual = fizzBuzz(number);
    let expected = number;
    assert.equal(actual, expected, "Not Divisible by 3 & 5");
});