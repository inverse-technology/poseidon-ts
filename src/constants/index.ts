import { constant1 } from "./1";
import { constant2 } from "./2";

export const F = 8;
export const HALF_F = F / 2;
export const constants: {
  [key: number]: { p: number; m: bigint[][]; c: bigint[] };
} = {
  1: constant1,
  2: constant2,
};
