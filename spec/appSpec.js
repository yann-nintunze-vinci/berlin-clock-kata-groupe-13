import { Main } from "../src/app.js";

describe("Berlin Clock", function () {
  const main = new Main();

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

  it("Doit renvoyer 'OOOOOOOOOOO' lorsque la minute est 0", function () {
    const result = main.getLumieresBlocDe5(0);

    expect(result).toBe("OOOOOOOOOOO");
  });

  it("Doit renvoyer 'OOOOOOOOOOO' lorsque la minute est 4", function () {
    const result = main.getLumieresBlocDe5(4);

    expect(result).toBe("OOOOOOOOOOO");
  });

  it("Doit renvoyer 'JOOOOOOOOOO' lorsque la minute est 5", function () {
    const result = main.getLumieresBlocDe5(5);
    
    expect(result).toBe("JOOOOOOOOOO");
  });
});
