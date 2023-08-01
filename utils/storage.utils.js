import AsyncStorage from '@react-native-async-storage/async-storage';

async function setDataStorage(key, value) {
    AsyncStorage.setItem(key, value);
}

async function getDataStorage(key) {
    return AsyncStorage.getItem(key);
}

async function removeDataStorage(key) {
    AsyncStorage.removeItem(key);
}

export { setDataStorage, getDataStorage, removeDataStorage };
