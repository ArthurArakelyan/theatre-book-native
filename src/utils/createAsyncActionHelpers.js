const createAsyncActionHelpers = (type) => {
  return [
    () => ({
      type,
      payload: {
        loading: true,
        error: false,
      }
    }),
    (resName, res) => ({
      type,
      payload: {
        [resName]: res,
        loading: false,
        error: false,
      }
    }),
    () => ({
      type,
      payload: {
        loading: false,
        error: true,
      }
    }),
  ];
}

export default createAsyncActionHelpers;
