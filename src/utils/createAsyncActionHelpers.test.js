import createAsyncActionHelpers from "./createAsyncActionHelpers";

const action = 'ACTION'
const helpers = createAsyncActionHelpers(action);

it('should be an array with 3 length', () => {
  expect(helpers).toHaveLength(3);
});

it('should be an array of functions', () => {
  helpers.forEach((helper) => {
    expect(typeof helper).toBe('function');
  });
});

it('should create a start action', () => {
  const result = helpers[0]();

  expect(result).toEqual({
    type: action,
    payload: {
      loading: true,
      error: false,
    },
  });
});

it('should create a success action', () => {
  const test = [];

  const result = helpers[1]('test', test);

  expect(result).toEqual({
    type: action,
    payload: {
      test,
      loading: false,
      error: false,
    },
  });
});

it('should create an error action', () => {
  const result = helpers[2]();

  expect(result).toEqual({
    type: action,
    payload: {
      loading: false,
      error: true,
    },
  });
});
