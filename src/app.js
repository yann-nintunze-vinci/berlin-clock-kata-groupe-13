//const date = new Date();
//const minutes = date.getMinutes();

export class Main {
  getLumieresMinutesSimples(minute) {
    const blocs = ["OOOO", "JOOO", "JJOO", "JJJO", "JJJJ"];
    return blocs[this.resteDivisionPar5(minute)];
  }

getLumieresBlocDe5(minute) {
    const blocs = ["OOOOOOOOOOO", "JOOOOOOOOOO", "JJOOOOOOOOO", "JJROOOOOOOO", "JJRJOOOOOOO", "JJRJJOOOOOO", "JJRJJROOOOO", "JJRJJRJOOOO", "JJRJJRJJOOO", "JJRJJRJJROO", "JJRJJRJJRJO", "JJRJJRJJRJJ"];
    return blocs[this.quotientDivisionPar5(minute)];
}

quotientDivisionPar5(minute) {
    return Math.floor(minute / 5);
  }

resteDivisionPar5(minute) {
    return minute % 5;
  }
}
