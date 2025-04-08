import { constant1 } from "./1";
import { constant2 } from "./2";
import { loadConstant } from "./utils";

export const F = 8;
export const HALF_F = F / 2;

export interface Constant {
  p: number;
  m: bigint[][];
  c: bigint[];
}

export const constants: {
  [key: number]: Constant;
} = {
  1: loadConstant(constant1),
  2: loadConstant(constant2),
};
