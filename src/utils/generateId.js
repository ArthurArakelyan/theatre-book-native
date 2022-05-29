export const generateRandomLetter = () => {
  return String.fromCharCode(65 + Math.floor(Math.random() * 26));
};

const generateId = () => {
  let id = "";

  for (let i = 0; i < 15; i++) {
    id += generateRandomLetter();
  }

  return id;
};

export default generateId;
