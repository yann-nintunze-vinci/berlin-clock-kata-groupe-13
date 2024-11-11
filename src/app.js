//const date = new Date();
//const minutes = date.getMinutes();

export class Main {
  getLumieresMinutesSimples(minute) {
    if (this.estMultipleDe5(minute)) return "OOOO";
    if (this.leResteVaut4(minute)) return "JJJJ";
    if (this.leResteVaut3(minute)) return "JJJO";
    if (this.leResteVaut2(minute)) return "JJOO";
    if (this.leResteVaut1(minute)) return "JOOO";
  }

  getLumieresBlocDe5(minute) {
    if(this.leResteDuneDivisionPar5(minute) === 1) return "JOOOOOOOOOO";
    if(this.leResteDuneDivisionPar5(minute) === 2) return "JJOOOOOOOOO";
    if(this.leResteDuneDivisionPar5(minute) === 3) return "JJROOOOOOOO";
    if(this.leResteDuneDivisionPar5(minute) === 4) return "JJRJOOOOOOO";
    if(this.leResteDuneDivisionPar5(minute) === 5) return "JJRJJOOOOOO";
    if(this.leResteDuneDivisionPar5(minute) === 6) return "JJRJJROOOOO";
    if(this.leResteDuneDivisionPar5(minute) === 7) return "JJRJJRJOOOO";
    if(this.leResteDuneDivisionPar5(minute) === 8) return "JJRJJRJJOOO";
    if(this.leResteDuneDivisionPar5(minute) === 9) return "JJRJJRJJROO";
    if(this.leResteDuneDivisionPar5(minute) === 10) return "JJRJJRJJRJO";
    if(this.leResteDuneDivisionPar5(minute) === 11) return "JJRJJRJJRJJ";
    return "OOOOOOOOOOO";
  }

  leResteDuneDivisionPar5(minute) {
    return Math.floor(minute / 5);
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

  leResteVaut4(number) {
    return number % 5 === 4;
  }
}
