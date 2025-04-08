import { buildPoseidon } from "circomlibjs";
import { poseidon, randomFieldElement } from "../src";

describe("poseidon library tests", () => {
  const inputs = [1n, 2n];
  const variableInputs = Array.from({ length: 10 }, () => [
    [randomFieldElement(), randomFieldElement()],
  ]);
  const generateVariableLengthInputs = (length: number) => {
    return Array.from({ length }, () => randomFieldElement());
  };

  it("should work with constant inputs", async () => {
    const circomPoseidon = await buildPoseidon();
    const { F } = circomPoseidon;
    const hash = circomPoseidon(inputs);
    const hash2 = poseidon(inputs);

    expect(F.toObject(hash)).toBe(hash2);
  });

  test.each(variableInputs)(
    "should work with variable inputs %s",
    async (inputs) => {
      const circomPoseidon = await buildPoseidon();
      const { F } = circomPoseidon;
      const hash = circomPoseidon(inputs);
      const hash2 = poseidon(inputs);

      expect(F.toObject(hash)).toBe(hash2);
    },
  );

  it("should work with variable length inputs", async () => {
    const circomPoseidon = await buildPoseidon();
    const { F } = circomPoseidon;
    const inputs = generateVariableLengthInputs(1);
    const hash = circomPoseidon(inputs);
    const hash2 = poseidon(inputs);

    expect(F.toObject(hash)).toBe(hash2);
  });

  it("should work with variable length inputs", async () => {
    const circomPoseidon = await buildPoseidon();
    const { F } = circomPoseidon;
    const inputs = generateVariableLengthInputs(2);
    const hash = circomPoseidon(inputs);
    const hash2 = poseidon(inputs);

    expect(F.toObject(hash)).toBe(hash2);
  });
});
