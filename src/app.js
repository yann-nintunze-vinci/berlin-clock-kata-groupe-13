export class Main {
  startClock() {
    setInterval(() => {
      let date = new Date();
      let minutes = date.getMinutes();
      let heures = date.getHours();
      let secondes = date.getSeconds();
      // this.secondes =this.secondes + 1;


      console.log(this.getLumieresSecondes(secondes));
      console.log(this.getLumieresBlocDe5Heures(heures));
      console.log(this.getLumieresHeuresSimples(heures));
      console.log(this.getLumieresBlocDe5Minutes(minutes));
      console.log(this.getLumieresMinutesSimples(minutes));
      // console.log(heures, "  -  ", minutes, "  -  ", secondes);

      // setTimeout(this.startClock(),1000);
    }, 1000);
  };

  getLumieresMinutesSimples(minute) {
    const blocs = ["OOOO", "JOOO", "JJOO", "JJJO", "JJJJ"];
    return blocs[this.resteDivisionPar5(minute)];
  }

  getLumieresBlocDe5Minutes(minute) {
    const blocs = [
      "OOOOOOOOOOO",
      "JOOOOOOOOOO",
      "JJOOOOOOOOO",
      "JJROOOOOOOO",
      "JJRJOOOOOOO",
      "JJRJJOOOOOO",
      "JJRJJROOOOO",
      "JJRJJRJOOOO",
      "JJRJJRJJOOO",
      "JJRJJRJJROO",
      "JJRJJRJJRJO",
      "JJRJJRJJRJJ",
    ];
    return blocs[this.quotientDivisionPar5(minute)];
  }

  getLumieresHeuresSimples(heure) {
    const blocs = ["OOOO", "ROOO", "RROO", "RRRO", "RRRR"];
    return blocs[this.resteDivisionPar5(heure)];
  }

  getLumieresBlocDe5Heures(heure) {
    const blocs = ["OOOO", "ROOO", "RROO", "RRRO", "RRRR"];
    return blocs[this.quotientDivisionPar5(heure)];
  }

  getLumieresSecondes(secondes) {
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

function main() {
  const mainInstance = new Main();
  mainInstance.startClock();
}

main();
