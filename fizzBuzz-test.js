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