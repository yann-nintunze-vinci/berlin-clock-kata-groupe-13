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
    const blocs = ["OOOOOOOOOOO", "JOOOOOOOOOO", "JJOOOOOOOOO", "JJROOOOOOOO", "JJRJOOOOOOO", "JJRJJOOOOOO", "JJRJJROOOOO", "JJRJJRJOOOO", "JJRJJRJJOOO", "JJRJJRJJROO", "JJRJJRJJRJO", "JJRJJRJJRJJ"];
    return blocs[this.quotientDivisionPar5(minute)];
}

quotientDivisionPar5(minute) {
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
