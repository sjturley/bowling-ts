import { Bowling } from "../src/bowling";

describe('bowling', () => {
    let bowling: Bowling;
    beforeEach(() => {
        bowling = new Bowling();        
    });

    it('gutter ball game score is zero', () => {
        rollMany(0, 20);
        expect(bowling.score()).toEqual(0);
    });

    it('all ones score is twenty', () => {
        rollMany(1, 20);
        expect(bowling.score()).toEqual(20);
    });

    it('spare score is ten plus the next roll', () => {
        bowling.roll(1);
        bowling.roll(9);
        bowling.roll(2);
        rollMany(0, 17);

        expect(bowling.score()).toEqual(14);
    });

    it('strike score is ten plus the next two roll', () => {
        bowling.roll(10);
        bowling.roll(9);
        bowling.roll(2);
        rollMany(0, 16);

        expect(bowling.score()).toEqual(32);
    });

    function rollMany(pins: number, rolls: number) {
        for (let i = 0; i < rolls; i++) {
            bowling.roll(pins);
        }
    }
    
});

