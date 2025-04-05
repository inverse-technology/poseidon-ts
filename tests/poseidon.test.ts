import path from "path";
import { buildPoseidon } from "circomlibjs";
import { groth16 } from "snarkjs";
import { poseidon } from "../src";
const wasm = require("circom_tester").wasm;

describe("poseidon library tests", () => {
  const inputs = [1n, 2n];

  it("should work with circomlibjs", async () => {
    const circomPoseidon = await buildPoseidon();
    const { F } = circomPoseidon;
    const hash = circomPoseidon(inputs);
    const hash2 = poseidon(inputs);

    expect(F.toObject(hash)).toBe(hash2);
  });

  it("should work with circuit", async () => {
    const circuit = await wasm(path.join("circuit", "poseidon.circom"));
    const witness = await circuit.calculateWitness({ inputs });
    const hash = poseidon(inputs);

    await circuit.assertOut(witness, { out: hash });
  });

  it("should work with groth16", async () => {
    const { proof, publicSignals } = await groth16.fullProve(
      { inputs },
      path.join("poseidon_js", "poseidon.wasm"),
      path.join("setup_params", "poseidon_0001.zkey"),
    );

    expect(proof).toBeDefined();
    expect(publicSignals).toBeDefined();
  });
});
