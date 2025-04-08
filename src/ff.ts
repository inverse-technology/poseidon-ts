// bn256 prime field
export const P = BigInt(
  "0x30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001",
);

export const randomFieldElement = (): bigint => {
  const lastBit = 0x30644e72;
  const bit32Max = 0xffffffff;
  const lastUpperBits = BigInt(Math.floor(Math.random() * lastBit));
  return [...Array(7)].reduce(
    (acc, _) => (acc << 32n) | BigInt(Math.floor(Math.random() * bit32Max)),
    lastUpperBits,
  );
};

export const isOverflow = (element: bigint): void => {
  if (element >= P) {
    throw new Error("Field element is greater than the field modulus");
  }
};
