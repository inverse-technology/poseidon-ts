import { randomFieldElement, P } from "../src";

describe("utils library tests", () => {
  const variableInputs = Array.from({ length: 10 }, () => [
    [randomFieldElement(), randomFieldElement()],
  ]);

  test.each(variableInputs)(
    "should generate random field element %s",
    async (inputs) => {
      const random = inputs[0];

      expect(random).toBeDefined();
      expect(random).toBeGreaterThan(0n);
      expect(random).toBeLessThan(P);
    },
  );
});
