class Comparator {
  constructor(comparatorCallback) {
    this.compareFunction = comparatorCallback || Comparator.defaultCompareFunction;
  }

  static defaultCompareFunction(a, b) {
    if (a === b) return 0;

    return a < b ? -1 : 1;
  }

  equal(a, b) {
    return this.compareFunction(a, b) === 0;
  }

  lessThan(a, b) {
    return this.compareFunction(a, b) < 0;
  }

  greaterThan(a, b) {
    return this.compareFunction(a, b) > 0;
  }

  lessThanOrEqual(a, b) {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  greaterThanOrEqual(a, b) {
    return this.greaterThan(a, b) || this.equal(a, b);
  }

  reverse() {
    const originalComapreFunction = this.compareFunction;
    this.compareFunction = (a, b) => originalComapreFunction(b, a);
  }
}

export default Comparator;
