import { constants } from "./constants";

export const poseidon = (inputs: bigint[]) => {
  const { p, m, c } = constants[inputs.length];
  const state = [BigInt(0), ...inputs];
};
