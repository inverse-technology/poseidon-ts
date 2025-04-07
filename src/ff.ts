// bn256 prime field
export const P = BigInt(
  "0x30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001",
);

export const randomFieldElement = (): bigint => {
  const lastBit = 0x30644e72;
  const bit32Max = 0xffffffff;
  let random = BigInt(Math.floor(Math.random() * lastBit));
  for (let i = 0; i < 7; i++) {
    random = random >> 8n;
    random += BigInt(Math.floor(Math.random() * bit32Max));
  }
  return BigInt(random);
};
