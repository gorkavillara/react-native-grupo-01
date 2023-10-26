import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAsyncStorage = () => {

    const saveInStorage = async ({ key, value } : { key: string, value: string }) => {
        const data = await AsyncStorage.setItem(key, value)
        return data
    }

    const getFromStorage = async (key: string) => {
        const data = await AsyncStorage.getItem(key)
        return data
    }

    return { saveInStorage, getFromStorage }
}