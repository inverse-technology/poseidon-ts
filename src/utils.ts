import { P } from "./ff";

export const pow5 = (v: bigint) => {
  let o = v * v;
  return (v * o * o) % P;
};

export const mix = (state: bigint[], m: bigint[][]) => {
  const res = Array(state.length).fill(0n);
  for (let x = 0; x < state.length; x++) {
    let sum = state.reduce((a, b, i) => a + m[x][i] * b, 0n);
    res[x] = sum % P;
  }
  return res;
};
