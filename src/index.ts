import { F, HALF_F, constants } from "./constants";
import { pow5, mix } from "./utils";

export const poseidon = (inputs: bigint[]): bigint => {
  const { length } = inputs;
  const t = length + 1;
  const { p, m, c } = constants[length];
  let state = [BigInt(0), ...inputs];

  for (let i = 0; i < F + p; i++) {
    for (let j = 0; j < t; j++) {
      state[j] += c[i * t + j];
      if (j === 0 || i < HALF_F || i >= HALF_F + p) state[j] = pow5(state[j]);
    }
    state = mix(state, m);
  }
  return state[0];
};
