import { buildPoseidon } from "circomlibjs";
import { poseidon, randomFieldElement } from "../src";

describe("poseidon library tests", () => {
  const getRandomInputs = (length: number) => {
    return Array.from({ length: 1 }, () => [
      Array.from({ length }, () => randomFieldElement()),
    ]);
  };

  const testPoseidon = async (inputs: bigint[]) => {
    const circomPoseidon = await buildPoseidon();
    const { F } = circomPoseidon;
    const hash = circomPoseidon(inputs);
    const hash2 = poseidon(inputs);

    expect(F.toObject(hash)).toBe(hash2);
  };

  for (let i = 1; i <= 15; i++) {
    test.each(getRandomInputs(i))(
      `should work with variable inputs ${i}`,
      testPoseidon,
    );
  }
});
