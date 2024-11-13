import { Main } from "../src/app.js";

describe("Berlin Clock", function () {
  const main = new Main();

  it("Doit renvoyer la bonne string pour l'heure en continu", function() {
    main.startClock();
  });
 

  //ligne minutes simples
  it("Doit renvoyer 'OOOO' lorsque la minute est '00' ", function () {
    const result = main.getLumieresMinutesSimples(0);

    expect(result).toBe("OOOO");
  });

  it("Doit renvoyer 'OOOO' lorsque la minute est '10' ", function () {
    const result = main.getLumieresMinutesSimples(10);

    expect(result).toBe("OOOO");
  });

  it("Doit renvoyer 'JOOO' lorsque la minute est '11' ", function () {
    const result = main.getLumieresMinutesSimples(11);

    expect(result).toBe("JOOO");
  });

  it("Doit renvoyer 'JJOO' lorsque la minute est '22' ", function () {
    const result = main.getLumieresMinutesSimples(22);

    expect(result).toBe("JJOO");
  });

  it("Doit renvoyer 'JJJO' lorsque la minute est '33' ", function () {
    const result = main.getLumieresMinutesSimples(33);

    expect(result).toBe("JJJO");
  });

  it("Doit renvoyer 'JJJJ' lorsque la minute est '44' ", function () {
    const result = main.getLumieresMinutesSimples(44);

    expect(result).toBe("JJJJ");
  });

  //Lignes Bloc de 5 minutes
  it("Doit renvoyer 'OOOOOOOOOOO' lorsque la minute est 0", function () {
    const result = main.getLumieresBlocDe5Minutes(0);

    expect(result).toBe("OOOOOOOOOOO");
  });

  it("Doit renvoyer 'OOOOOOOOOOO' lorsque la minute est 4", function () {
    const result = main.getLumieresBlocDe5Minutes(4);

    expect(result).toBe("OOOOOOOOOOO");
  });

  it("Doit renvoyer 'JOOOOOOOOOO' lorsque la minute est 5", function () {
    const result = main.getLumieresBlocDe5Minutes(5);

    expect(result).toBe("JOOOOOOOOOO");
  });

  it("Doit renvoyer 'JOOOOOOOOOO' lorsque la minute est 6", function () {
    const result = main.getLumieresBlocDe5Minutes(6);

    expect(result).toBe("JOOOOOOOOOO");
  });

  it("Doit renvoyer 'JJRJJRJJRJJ' lorsque la minute est 55", function () {
    const result = main.getLumieresBlocDe5Minutes(55);

    expect(result).toBe("JJRJJRJJRJJ");
  });

  it("Doit renvoyer 'JJRJJRJJRJJ' lorsque la minute est 59", function () {
    const result = main.getLumieresBlocDe5Minutes(59);

    expect(result).toBe("JJRJJRJJRJJ");
  });

  //ligne heures simples

  it("Doit renvoyer 'OOOO' lorsque l'heure est '0' ", function () {
    const result = main.getLumieresHeuresSimples(0);

    expect(result).toBe("OOOO");
  });

  it("Doit renvoyer 'ROOO' lorsque l'heure est '1' ", function () {
    const result = main.getLumieresHeuresSimples(1);

    expect(result).toBe("ROOO");
  });

  it("Doit renvoyer 'RROO' lorsque l'heure est '2' ", function () {
    const result = main.getLumieresHeuresSimples(2);

    expect(result).toBe("RROO");
  });

  it("Doit renvoyer 'RRRO' lorsque l'heure est '3' ", function () {
    const result = main.getLumieresHeuresSimples(3);

    expect(result).toBe("RRRO");
  });

  it("Doit renvoyer 'RRRR' lorsque l'heure est '4' ", function () {
    const result = main.getLumieresHeuresSimples(4);

    expect(result).toBe("RRRR");
  });

  it("Doit renvoyer 'OOOO' lorsque l'heure est '5' ", function () {
    const result = main.getLumieresHeuresSimples(5);

    expect(result).toBe("OOOO");
  });

  it("Doit renvoyer 'RRRO' lorsque l'heure est '13' ", function () {
    const result = main.getLumieresHeuresSimples(13);

    expect(result).toBe("RRRO");
  });

  // Lignes de Blocs de 5 heures

  it("Doit renvoyer 'OOOO' lorsque l'heure est '0' ", function () {
    const result = main.getLumieresBlocDe5Heures(0);

    expect(result).toBe("OOOO");
  });

  it("Doit renvoyer 'ROOO' lorsque l'heure est '5' ", function () {
    const result = main.getLumieresBlocDe5Heures(5);

    expect(result).toBe("ROOO");
  });

  it("Doit renvoyer 'RROO' lorsque l'heure est 10", function () {
    const result = main.getLumieresBlocDe5Heures(10);

    expect(result).toBe("RROO");
  });

  it("Doit renvoyer 'RRRO' lorsque l'heure est 15", function () {
    const result = main.getLumieresBlocDe5Heures(15);

    expect(result).toBe("RRRO");
  });

  it("Doit renvoyer 'RRRR' lorsque l'heure est 20", function () {
    const result = main.getLumieresBlocDe5Heures(20);

    expect(result).toBe("RRRR");
  });

  it("Doit renvoyer 'RRRR' lorsque l'heure est 23 et 'RRRO' pour les heures simples", function () {
    const result = main.getLumieresBlocDe5Heures(23);
    const result2 = main.getLumieresHeuresSimples(23);
    expect(result).toBe("RRRR");
    expect(result2).toBe("RRRO");
  });

  // lumière des secondes
  it("Doit renvoyer 'R' lorsque les secondes sont à 0", function () {
    const result = main.getLumieresSecondes(0);

    expect(result).toBe("R");
  });

  it("Doit renvoyer 'O' lorsque les secondes sont à 1", function () {
    const result = main.getLumieresSecondes(1);

    expect(result).toBe("O");
  });

  it("Doit renvoyer 'R' lorsque les secondes sont à 2", function () {
    const result = main.getLumieresSecondes(2);

    expect(result).toBe("R");
  });

  it("Doit renvoyer 'O' lorsque les secondes sont à 43", function () {
    const result = main.getLumieresSecondes(43);

    expect(result).toBe("O");
  });
});