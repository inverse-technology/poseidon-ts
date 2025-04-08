import { P } from "./ff";

export const validateInputs = (
  inputs: string[] | number[] | bigint[],
): bigint[] => {
  return inputs.map((input) => {
    const newInput = BigInt(input);
    if (newInput >= P) {
      throw new Error("Input is greater than the field modulus");
    }
    return newInput;
  });
};
