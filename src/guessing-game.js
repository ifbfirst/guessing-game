class GuessingGame {
    constructor() {}

    setRange(min, max) {
this.min =min;
this.max = max;
    }

    guess() {
this.mid = (Math.round((this.min + this.max) / 2));
return this.mid;
    }

    lower() {
  this.max = this.mid;
  return this.max;
    }

    greater() {
this.min = this.mid;
return this.min;
    }
}

module.exports = GuessingGame;
