import { poseidon } from "../src";

describe("poseidon", () => {
  it("should work", () => {
    expect(poseidon([1n, 2n])).toBeDefined();
  });
});
