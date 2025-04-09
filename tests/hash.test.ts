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

  it("should work with variable length inputs 1", async () => {
    const circomPoseidon = await buildPoseidon();
    const { F } = circomPoseidon;
    const inputs = generateVariableLengthInputs(1);
    const hash = circomPoseidon(inputs);
    const hash2 = poseidon(inputs);

    expect(F.toObject(hash)).toBe(hash2);
  });

  it("should work with variable length inputs 2", async () => {
    const circomPoseidon = await buildPoseidon();
    const { F } = circomPoseidon;
    const inputs = generateVariableLengthInputs(2);
    const hash = circomPoseidon(inputs);
    const hash2 = poseidon(inputs);

    expect(F.toObject(hash)).toBe(hash2);
  });

  it("should work with variable length inputs 3", async () => {
    const circomPoseidon = await buildPoseidon();
    const { F } = circomPoseidon;
    const inputs = generateVariableLengthInputs(3);
    const hash = circomPoseidon(inputs);
    const hash2 = poseidon(inputs);

    expect(F.toObject(hash)).toBe(hash2);
  });

  it("should work with variable length inputs 4", async () => {
    const circomPoseidon = await buildPoseidon();
    const { F } = circomPoseidon;
    const inputs = generateVariableLengthInputs(4);
    const hash = circomPoseidon(inputs);
    const hash2 = poseidon(inputs);

    expect(F.toObject(hash)).toBe(hash2);
  });

  it("should work with variable length inputs 5", async () => {
    const circomPoseidon = await buildPoseidon();
    const { F } = circomPoseidon;
    const inputs = generateVariableLengthInputs(5);
    const hash = circomPoseidon(inputs);
    const hash2 = poseidon(inputs);

    expect(F.toObject(hash)).toBe(hash2);
  });

  it("should work with variable length inputs 6", async () => {
    const circomPoseidon = await buildPoseidon();
    const { F } = circomPoseidon;
    const inputs = generateVariableLengthInputs(6);
    const hash = circomPoseidon(inputs);
    const hash2 = poseidon(inputs);

    expect(F.toObject(hash)).toBe(hash2);
  });

  it("should work with variable length inputs 7", async () => {
    const circomPoseidon = await buildPoseidon();
    const { F } = circomPoseidon;
    const inputs = generateVariableLengthInputs(7);
    const hash = circomPoseidon(inputs);
    const hash2 = poseidon(inputs);

    expect(F.toObject(hash)).toBe(hash2);
  });

  it("should work with variable length inputs 8", async () => {
    const circomPoseidon = await buildPoseidon();
    const { F } = circomPoseidon;
    const inputs = generateVariableLengthInputs(8);
    const hash = circomPoseidon(inputs);
    const hash2 = poseidon(inputs);

    expect(F.toObject(hash)).toBe(hash2);
  });

  it("should work with variable length inputs 9", async () => {
    const circomPoseidon = await buildPoseidon();
    const { F } = circomPoseidon;
    const inputs = generateVariableLengthInputs(9);
    const hash = circomPoseidon(inputs);
    const hash2 = poseidon(inputs);

    expect(F.toObject(hash)).toBe(hash2);
  });

  it("should work with variable length inputs 10", async () => {
    const circomPoseidon = await buildPoseidon();
    const { F } = circomPoseidon;
    const inputs = generateVariableLengthInputs(10);
    const hash = circomPoseidon(inputs);
    const hash2 = poseidon(inputs);

    expect(F.toObject(hash)).toBe(hash2);
  });

  it("should work with variable length inputs 11", async () => {
    const circomPoseidon = await buildPoseidon();
    const { F } = circomPoseidon;
    const inputs = generateVariableLengthInputs(11);
    const hash = circomPoseidon(inputs);
    const hash2 = poseidon(inputs);

    expect(F.toObject(hash)).toBe(hash2);
  });

  it("should work with variable length inputs 12", async () => {
    const circomPoseidon = await buildPoseidon();
    const { F } = circomPoseidon;
    const inputs = generateVariableLengthInputs(12);
    const hash = circomPoseidon(inputs);
    const hash2 = poseidon(inputs);

    expect(F.toObject(hash)).toBe(hash2);
  });

  it("should work with variable length inputs 13", async () => {
    const circomPoseidon = await buildPoseidon();
    const { F } = circomPoseidon;
    const inputs = generateVariableLengthInputs(13);
    const hash = circomPoseidon(inputs);
    const hash2 = poseidon(inputs);

    expect(F.toObject(hash)).toBe(hash2);
  });

  it("should work with variable length inputs 14", async () => {
    const circomPoseidon = await buildPoseidon();
    const { F } = circomPoseidon;
    const inputs = generateVariableLengthInputs(14);
    const hash = circomPoseidon(inputs);
    const hash2 = poseidon(inputs);

    expect(F.toObject(hash)).toBe(hash2);
  });

  it("should work with variable length inputs 15", async () => {
    const circomPoseidon = await buildPoseidon();
    const { F } = circomPoseidon;
    const inputs = generateVariableLengthInputs(15);
    const hash = circomPoseidon(inputs);
    const hash2 = poseidon(inputs);

    expect(F.toObject(hash)).toBe(hash2);
  });
});
