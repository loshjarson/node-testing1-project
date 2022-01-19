const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }

    const actual = utils.trimProperties(input)

    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { name: "    jane   "};

    const result = utils.trimProperties(input);

    expect(result).not.toBe(input)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }

    const actual = utils.trimProperties(input)

    expect(actual).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { name: "    jane   "};

    const result = utils.trimPropertiesMutation(input);

    expect(result).toBe(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{ integer: 1 }, { integer: 3 }, { integer: 2 }];
    const expected = 3;
    const result = utils.findLargestInteger(input);

    expect(result).toEqual(expected)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', async () => {
    const expected = 3;
    const result = await counter.countDown()
    expect(result).toEqual(expected)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', async () => {
    const expected = 2;
    let result = await counter.countDown()
    result = await counter.countDown()
    expect(result).toEqual(expected)
  })
  test('[8] the count eventually reaches zero but does not go below zero', async () => {
    const expected = 0;
    let result = await counter.countDown()
    while(result > 0) {
      return result = await counter.countDown()
    }
    expect(result).toEqual(expected)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', async () => {
    const expected = "summer";
    const result = await seasons.next()
    expect(result).toEqual(expected)
  })
  test('[10] the SECOND call of seasons.next returns "fall"', async () => {
    const expected = "fall";
    let result = await seasons.next()
    result = await seasons.next()
    expect(result).toEqual(expected)
  })
  test('[11] the THIRD call of seasons.next returns "winter"', async () => {
    const expected = "winter";
    let result = await seasons.next()
    result = await seasons.next()
    result = await seasons.next()
    expect(result).toEqual(expected)
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', async () => {
    const expected = "spring";
    let result = await seasons.next()
    result = await seasons.next()
    result = await seasons.next()
    result = await seasons.next()
    expect(result).toEqual(expected)
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', async () => {
    const expected = "summer";
    let result = await seasons.next()
    result = await seasons.next()
    result = await seasons.next()
    result = await seasons.next()
    result = await seasons.next()
    expect(result).toEqual(expected)
  })
  test('[14] the 40th call of seasons.next returns "spring"', async () => {
    const expected = "spring";
    let result = await seasons.next()
    for(let i = 0; i < 39; i++){
      result = await seasons.next()
    }
    expect(result).toEqual(expected)
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  // test('[15] driving the car returns the updated odometer', () => {})
  // test('[16] driving the car uses gas', () => {})
  // test('[17] refueling allows to keep driving', () => {})
  // test('[18] adding fuel to a full tank has no effect', () => {})
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  // test('[19] resolves true if passed an even number', () => {})
  // test('[20] resolves false if passed an odd number', () => {})
})
