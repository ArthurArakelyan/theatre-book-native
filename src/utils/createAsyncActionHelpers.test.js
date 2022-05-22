import createAsyncActionHelpers from "./createAsyncActionHelpers";

describe("create async action helpers", () => {
  const helpers = createAsyncActionHelpers("ACTION");

  it("test helpers length", () => {
    expect(helpers).toHaveLength(3);
  });

  test("async action start helper", () => {
    expect(helpers[0]()).toEqual({
      type: "ACTION",
      payload: {
        loading: true,
        error: false,
      },
    });
  });

  test("async action success helper", () => {
    const test = [];

    expect(helpers[1]("test", test)).toEqual({
      type: "ACTION",
      payload: {
        test,
        loading: false,
        error: false,
      },
    });
  });

  test("async action error helper", () => {
    expect(helpers[2]()).toEqual({
      type: "ACTION",
      payload: {
        loading: false,
        error: true,
      },
    });
  });
});
