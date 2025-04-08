import { isOverflow } from "./ff";

export const validateInputs = (
  inputs: string[] | number[] | bigint[],
): bigint[] => {
  return inputs.map((input) => {
    const newInput = BigInt(input);
    isOverflow(newInput);
    return newInput;
  });
};
