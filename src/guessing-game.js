class GuessingGame {
    constructor() {
		this.last;
	}

    setRange(min, max) {
		this.min=min;
		this.max=max;
    }

    guess() {
		this.last=this.min+Math.trunc((this.max-this.min)/2);
		return this.last;
    }

    lower() {
		this.max=this.last-1;
    }

    greater() {
        this.min=this.last+1;
    }
}

module.exports = GuessingGame;
