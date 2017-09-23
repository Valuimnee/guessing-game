class GuessingGame {
    constructor() {
		this.guesses=[];
		this.last;
	}

    setRange(min, max) {
		this.min=min;
		this.max=max;
		this.last=this.min-1;
    }

    guess() {
		if(this.guesses.length==0){
			this.last=(this.min+this.max)/2;
			this.guesses.push(this.last);
			return this.last;
		}
			
    }

    lower() {

    }

    greater() {

    }
}

module.exports = GuessingGame;
