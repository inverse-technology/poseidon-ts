import { Constant } from ".";

export interface RowConstant {
  p: number;
  m: string[][];
  c: string[];
}

export const loadConstant = (constant: RowConstant): Constant => {
  const { p, m, c } = constant;
  return {
    p,
    m: m.map((row) => row.map((x) => BigInt(x))),
    c: c.map((x) => BigInt(x)),
  };
};
