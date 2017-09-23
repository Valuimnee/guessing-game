class GuessingGame {
    constructor() {}

    setRange(min, max) {
		this.min=min;
		this.max=max;
    }

    guess() {
        this.last=this.min+Math.ceil((this.max-this.min)/2);
		return this.last;
    }

    lower() {
		this.max=this.last;
    }

    greater() {
        this.min=this.last;
    }
}

module.exports = GuessingGame;
