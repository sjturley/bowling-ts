class Bowling {
    rolls: number[] = [];

    roll(pins: number) {
        this.rolls.push(pins);
    }

    score(): number {
        let tempScore = 0;
        let rollIndex = 0;
        for(let frameIndex = 0; frameIndex < 10; frameIndex++) {
            const frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1];
            if (this.isStrike(rollIndex)) {
                tempScore += 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
                rollIndex += 1;
            } else if (this.isSpare(frameScore)) {
                tempScore += 10 + this.rolls[rollIndex + 2];
                rollIndex += 2;
            } else {
                tempScore += frameScore;
                rollIndex += 2;
            }
        }
        return tempScore;
    }

    private isStrike(rollIndex: number) {
        return this.rolls[rollIndex] === 10;
    }

    private isSpare(frameScore: number) {
        return frameScore === 10;
    }
}

export { Bowling };