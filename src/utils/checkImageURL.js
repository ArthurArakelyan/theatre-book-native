const checkImageURL = async (url: string): Promise<boolean> => {
  try {
    const image = await fetch(url);
    return image.status !== 404;
  } catch (e) {
    return false;
  }
};

export default checkImageURL;
