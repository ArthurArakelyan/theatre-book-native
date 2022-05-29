import generateId, {generateRandomLetter} from "./generateId";

describe('generateId()', () => {
  it('should be a string', () => {
    const id = generateId();

    expect(typeof id).toBe('string');
  });

  it('should generate a random id with 15 length', () => {
    const id = generateId();

    expect(id).toHaveLength(15);
  });
});

describe('generateRandomLetter()', () => {
  it('should be a string', () => {
    const letter = generateRandomLetter();

    expect(typeof letter).toBe('string');
  });

  it('should has a 1 length', () => {
    const letter = generateRandomLetter();

    expect(letter).toHaveLength(1);
  });

  it('should generate a 65 symbol from CharCode', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);

    const letter = generateRandomLetter();

    expect(letter).toBe(String.fromCharCode(65)); // A
  });

  it('should generate a 91 symbol from CharCode', () => {
    vi.spyOn(Math, 'random').mockReturnValue(1);

    const letter = generateRandomLetter();

    expect(letter).toBe(String.fromCharCode(91)); // [
  });

  it('should generate a symbol in 65 - 91 range', () => {
    const startSymbol = 'A'; // 65
    const endSymbol = '['; // 91

    const letter = generateRandomLetter();

    const isGreaterThanOrEqualFromStart = letter >= startSymbol;
    const isLessThanOrEqualFromEnd = letter <= endSymbol;
    expect(isGreaterThanOrEqualFromStart).toBeTruthy();
    expect(isLessThanOrEqualFromEnd).toBeTruthy();
  });
});
