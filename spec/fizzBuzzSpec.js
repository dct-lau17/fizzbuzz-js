describe("fizzBuzz", function() {
  it("returns fizz when passed 3", function() {
    expect(fizzBuzz(3)).toEqual("Fizz");
  })
  it("returns buzz when passed 5", function() {
    expect(fizzBuzz(5)).toEqual("Buzz");
  })
  it("returns fizzbuzz when passed 15", function() {
    expect(fizzBuzz(15)).toEqual("Fizzbuzz!");
  })
  it("returns 1 when passed 1", function() {
    expect(fizzBuzz(1)).toEqual(1);
  })
  it("returns fizz when passed 6", function() {
    expect(fizzBuzz(6)).toEqual("Fizz");
  })
  it("returns buzz when passed 6", function() {
    expect(fizzBuzz(20)).toEqual("Buzz");
  })
  it("returns fizzbuzz when passed 30", function() {
    expect(fizzBuzz(30)).toEqual("Fizzbuzz!");
  })
});
