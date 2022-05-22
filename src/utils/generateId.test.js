import generateId from "./generateId";

test("generate random id", () => {
  const id = generateId();

  expect(id).toBeTruthy();
  expect(id).toHaveLength(15);
});
