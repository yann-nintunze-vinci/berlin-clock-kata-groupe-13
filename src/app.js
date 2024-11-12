

export class Main {
  date = Date.now();
  minutes = date.getMinutes();
  heures = date.getHours();
  secondes = date.getSeconds();

  
  getLumieresMinutesSimples(minute) {
    const blocs = ["OOOO", "JOOO", "JJOO", "JJJO", "JJJJ"];
    return blocs[this.resteDivisionPar5(minute)];
  }

  getLumieresBlocDe5Minutes(minute) {
      const blocs = ["OOOOOOOOOOO", "JOOOOOOOOOO", "JJOOOOOOOOO", "JJROOOOOOOO", "JJRJOOOOOOO", "JJRJJOOOOOO", "JJRJJROOOOO", "JJRJJRJOOOO", "JJRJJRJJOOO", "JJRJJRJJROO", "JJRJJRJJRJO", "JJRJJRJJRJJ"];
      return blocs[this.quotientDivisionPar5(minute)];
  }

  getLumieresHeuresSimples(heure) {
      const blocs = ["OOOO","ROOO","RROO", "RRRO", "RRRR"];
      return blocs[this.resteDivisionPar5(heure)];
  }

  getLumieresBlocDe5Heures(heure){
    const blocs = ["OOOO","ROOO","RROO","RRRO","RRRR"];
    return blocs[this.quotientDivisionPar5(heure)];
  }

  getLumieresSecondes(secondes){
    const blocs = ["R", "O"];
    return blocs[secondes % 2];
  }

  quotientDivisionPar5(minute) {
      return Math.floor(minute / 5);
    }

  resteDivisionPar5(minute) {
      return minute % 5;
    }
}
