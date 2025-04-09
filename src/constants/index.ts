import { constant1 } from "./1";
import { constant2 } from "./2";
import { constant3 } from "./3";
import { constant4 } from "./4";
import { constant5 } from "./5";
import { constant6 } from "./6";
import { constant7 } from "./7";
import { constant8 } from "./8";
import { constant9 } from "./9";
import { constant10 } from "./10";
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
  3: loadConstant(constant3),
  4: loadConstant(constant4),
  5: loadConstant(constant5),
  6: loadConstant(constant6),
  7: loadConstant(constant7),
  8: loadConstant(constant8),
  9: loadConstant(constant9),
  10: loadConstant(constant10),
};
