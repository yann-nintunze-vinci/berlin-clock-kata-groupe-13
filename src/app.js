//const date = new Date();
//const minutes = date.getMinutes();

export class Main {
    




    getLumieresMinutesSimples(minute) {
        if(this.isMultipleOf5(minute)|| minute===0) return 'OOOO';

        if(minute === 4) return 'JJJJ';
        if(minute === 3) return 'JJJO';
        if(minute === 2) return 'JJOO';
        if(this.leResteVaut1(minute)) return 'JOOO';
    }

    isMultipleOf5(number) {
        return number % 5 === 0;
    }

    leResteVaut1(number) {
        return number % 5 === 1;
    }





    
}