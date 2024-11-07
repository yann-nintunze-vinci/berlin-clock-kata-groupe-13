//const date = new Date();
//const minutes = date.getMinutes();

export class Main {
    




    getLumieresMinutesSimples(minute) {
        if(this.estMultipleDe5(minute)|| minute===0) return 'OOOO';

        if(minute === 4) return 'JJJJ';
        if(this.leResteVaut3(minute)) return 'JJJO';
        if(this.leResteVaut2(minute)) return 'JJOO';
        if(this.leResteVaut1(minute)) return 'JOOO';
    }

    estMultipleDe5(number) {
        return number % 5 === 0;
    }

    leResteVaut1(number) {
        return number % 5 === 1;
    }
    leResteVaut2(number) {
        return number % 5 === 2;
    }
    leResteVaut3(number) {
        return number % 5 === 3;
    }





    
}