const generateRandomLetter = (): string => {
  return String.fromCharCode(65 + Math.floor(Math.random() * 26));
};

const generateId = (): string => {
  let id: string = "";

  for (let i = 0; i < 15; i++) {
    id += generateRandomLetter();
  }

  return id;
};

export default generateId;
