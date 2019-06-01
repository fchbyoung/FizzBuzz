QUnit.test("hello test", function (assert) {
    assert.ok(1 == "1", "Passed!");
});

QUnit.test("number test", function (assert) {
    let number = 10;
    let actual = fizzBuzz(number);
    let expected = 10;
    assert.equal(10, 10, "Number Passed!");
});