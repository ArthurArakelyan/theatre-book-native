import storage from "./storage";

const user = {
  name: 'test',
  id: '1',
};

vi.mock('@react-native-async-storage/async-storage/src/AsyncStorage.native', () => {
  return {
    default: {
      getItem(key) {
        return new Promise((resolve, reject) => {
          if (key === 'user') {
            resolve(JSON.stringify(user));
          }

          reject('not found');
        });
      },
      setItem(key, value) {
        return new Promise((resolve, reject) => {
          if (!key) {
            reject('no key');
          }

          if (!value) {
            reject('no value');
          }

          resolve(undefined);
        });
      },
      removeItem(key) {
        return new Promise((resolve, reject) => {
          if (!key) {
            reject('no key');
          }

          const storage = {
            user: { id: 1 },
          };

          if (!storage[key]) {
            reject('not found');
          }

          resolve(undefined);
        });
      },
      clear() {
        return new Promise((resolve, reject) => {
          resolve();
        });
      },
    },
  };
});

describe('storage.get()', () => {
  it('should get from storage defined item', () => {
    const key = 'user';

    expect(storage.get(key)).resolves.toEqual(user);
  });

  it('should resolve undefined if provided key is not defined', () => {
    const key = 'not_defined';

    expect(storage.get(key)).resolves.toBeUndefined();
  });

  it('should resolve undefined if key is not provided', () => {
    expect(storage.get()).resolves.toBeUndefined();
  });
});

describe('storage.set()', () => {
  it('should set item in storage and resolve true', () => {
    const key = 'test';
    const value = { id: 1 };

    expect(storage.set(key, value)).resolves.toBeTruthy();
  });

  it('should not set any item in storage because key is not provided', () => {
    const key = undefined;
    const value = { id: 1 };

    expect(storage.set(key, value)).resolves.toBeUndefined();
  });

  it('should not set any item in storage because value is not provided', () => {
    const key = 'test';
    const value = undefined;

    expect(storage.set(key, value)).resolves.toBeUndefined();
  });
});

describe('storage.remove()', () => {
  it('should remove item which is defined in storage and resolve true', () => {
    const key = 'user';

    expect(storage.remove(key)).resolves.toBeTruthy();
  });

  it('should resolve undefined if item is not defined in storage', () => {
    const key = 'not_defined';

    expect(storage.remove(key)).resolves.toBeUndefined();
  });

  it('should resolve undefined if key is not provided', () => {
    expect(storage.remove()).resolves.toBeUndefined();
  });
});

describe('storage.clear()', () => {
  it('should clear storage and resolve true', () => {
    expect(storage.clear()).resolves.toBeTruthy();
  });
});
