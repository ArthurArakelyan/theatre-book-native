import checkImageURL from "./checkImageURL";

describe('check image URL', () => {
  test("check valid URL", async () => {
    const isImageURL = await checkImageURL("https://github.com/favicon.ico");
    expect(isImageURL).toBe(true);
  });

  test("check invalid URL", async () => {
    const isImageURL = await checkImageURL("invalid");
    expect(isImageURL).toBe(false);
  });
});
