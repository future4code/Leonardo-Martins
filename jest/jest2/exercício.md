<!-- Exercício 1 -->

a) export interface Character {
  name: string;
  life: number;
  strength: number;
  defense: number;
}

b) export const validateCharacter = (input: Character): boolean => {
  if (
    !input.name ||
		input.life === undefined ||
    input.strength === undefined ||
    input.defense === undefined
  ) {
    return false;
  }

  if (input.life <=0 || input.strength <=0 || input.defense <=0) {
    return false;
  }

  return true;
};

<!-- Exercício 2 -->

a) test("Crie um teste que verifique o comportamento da função com um personagem com o nome vazio", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

b) test("Crie um teste que verifique o comportamento da função com um personagem com a vida igual a zero", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

c) test("Crie um teste que verifique o comportamento da função com um personagem com a força igual a zero", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 0,
      defense: 500,
    });

    expect(result).toBe(false);
  });

d) test("Crie um teste que verifique o comportamento da função com um personagem com a defesa igual a zero", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 300,
      defense: 0,
    });

    expect(result).toBe(false);
  });

e) test("Crie um teste que verifique o comportamento da função com um personagem com a defesa com um valor negativo", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 300,
      defense: -50,
    });

    expect(result).toBe(false);
  });

f) test("Should return true for all valid inputs", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });

<!-- Exercício 3 -->

a) export const performAttack = (attacker: Character, defender: Character) => {
  if (!validateCharacter(attacker) || !validateCharacter(defender)) {
    throw new Error("Personagem inválido");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
};

b) export const performAttack = (
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean
) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Personagem inválido");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
};

c) Na  inversão de dependências ele determina o tipoe que vai retornar, no exemplo ele determina um boolean.

<!-- Exercício 4 -->

a)


b)


c)


<!-- Exercício 5 -->
