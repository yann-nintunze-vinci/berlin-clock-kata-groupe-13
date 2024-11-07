import { Main } from '../src/app.js';

describe('Berlin Clock', function() {
    const main = new Main();

    //ligne minutes simples
    it("Doit renvoyer 'OOOO' lorsque la minute est '00' ", function() {
        const result = main.getLumieresMinutesSimples(0);

        expect(result).toBe('OOOO');
    });
    it("Doit renvoyer 'JOOO' lorsque la minute est '01' ", function() {
        const result = main.getLumieresMinutesSimples(1);

        expect(result).toBe('JOOO');
    });

});