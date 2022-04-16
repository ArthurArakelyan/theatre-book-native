const createAsyncActionHelpers = (type: string) => {
  return [
    () => ({
      type,
      payload: {
        loading: true,
        error: false,
      }
    }),
    (resName: string, res: any) => ({
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
