import AsyncStorageNative from "@react-native-async-storage/async-storage/src/AsyncStorage.native";

const get = async (key) => {
  try {
    const value = await AsyncStorageNative.getItem(key);
    return JSON.parse(value);
  } catch (e) {
    console.error(e);
  }
};

const set = async (key, value) => {
  try {
    await AsyncStorageNative.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    console.error(e);
  }
};

const remove = async (key) => {
  try {
    await AsyncStorageNative.removeItem(key);
    return true;
  } catch (e) {
    console.error(e);
  }
};

const clear = async () => {
  try {
    await AsyncStorageNative.clear();
    return true;
  } catch (e) {
    console.error(e);
  }
};

const storage = {
  get,
  set,
  remove,
  clear,
};

export default storage;
