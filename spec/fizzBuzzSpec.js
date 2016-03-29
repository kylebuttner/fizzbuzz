describe("fizzBuzz", function() {
  it("returns 'fizz' when passed 3", function() {
    expect(fizzBuzz(3)).toEqual("fizz");
  });

  it("returns 1 when passed 1", function() {
    expect(fizzBuzz(1)).toEqual(1);
  });
  it("returns buzz when passed 5", function() {
    expect(fizzBuzz(5)).toEqual("buzz");
  });
  it("returns 4 when passed 4", function() {
    expect(fizzBuzz(4)).toEqual(4);
  });
  it("returns fizz when number is divisible by 3", function() {
    expect(fizzBuzz(12)).toEqual("fizz");
  });
  it("returns buzz when number is divisible by 5", function() {
    expect(fizzBuzz(10)).toEqual("buzz");
  });
  it("returns fizzbuzz when number is divisible by 3 and 5", function() {
    expect(fizzBuzz(15)).toEqual("fizzbuzz");
  });
});
