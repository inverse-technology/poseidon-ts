import { P } from "./ff";

export const pow5 = (v: bigint) => {
  const o = v * v;
  return (v * o * o) % P;
};

export const mix = (state: bigint[], m: bigint[][]): bigint[] => {
  const mixed = [...Array(state.length)].map((_, j) => {
    const sum = state.reduce((a, b, i) => a + m[j][i] * b, 0n);
    return sum % P;
  });
  return mixed;
};
