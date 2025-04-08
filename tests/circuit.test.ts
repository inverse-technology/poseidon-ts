import { poseidon } from "../src";
import { groth16 } from "snarkjs";
import path from "path";
const wasm = require("circom_tester").wasm;

describe("poseidon circuit tests", () => {
  const inputs = [1n, 2n];

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
