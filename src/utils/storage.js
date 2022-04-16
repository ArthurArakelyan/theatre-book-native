import AsyncStorageNative from "@react-native-async-storage/async-storage/src/AsyncStorage.native";

const get = async (key: string) => {
  try {
    const value = await AsyncStorageNative.getItem(key);
    return JSON.parse(value);
  } catch (e) {
    console.error(e);
  }
};

const set = async (key: string, value: any) => {
  try {
    await AsyncStorageNative.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(e);
  }
};

const remove = async (key: string) => {
  try {
    await AsyncStorageNative.removeItem(key);
  } catch (e) {
    console.error(e);
  }
};

const storage = {
  get,
  set,
  remove,
};

export default storage;
