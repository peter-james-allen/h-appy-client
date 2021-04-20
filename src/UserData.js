// eslint-disable-next-line prefer-const
import AsyncStorage from '@react-native-async-storage/async-storage';

let userData = {
  nibbles: [], appetisers: [], mains: [], desserts: [],
};

export const emptyUserData = userData;

const defaultData = {
  nibbles: [
    {
      _id: 'bd7dcbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Go to the Cinema',
      ingredients: [],
    },
    {
      _id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Do a Puzzle',
      ingredients: ['a phone or computer or puzzle book'],
    },
    {
      _id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Take a long awaited break',
      ingredients: [],
    },
  ],
  appetisers: [
    {
      _id: 'bd7acbea-c1b1-46c2-aed5-3ad53dbb28ba',
      name: 'Do a codewars kata',
      ingredients: ['computer'],
    },
    {
      _id: 'bd0acjea-c4b1-46c2-red5-3ad53abb28ba',
      name: 'Play a piece of music',
      ingredients: ['an instrument', 'somewhere private'],
    },
  ],
  mains: [
    {
      _id: 'ai589cm1-oi5n-alf3-bd96-145571e29d72',
      name: 'Learn a new song on the guitar',
      ingredients: ['a guitar'],
    },
  ],
  desserts: [
    {
      _id: '3ac68afc-dk30-3kf9-a4f8-fbd91aa9d07k',
      name: 'Browse Reddit for 3 hours',
      ingredients: ['a phone', 'Ennui'],
    },
  ],
};

const getData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data != null ? JSON.parse(data) : defaultData[key];
  } catch (e) {
    alert('Failed to retrieve data');
  }
};

export const storeData = async (key, value) => {
  try {
    userData[key].push(value);
    const jsonValue = JSON.stringify(userData[key]);
    await AsyncStorage.setItem(key, jsonValue);
    alert('Activity successfully saved');
  } catch (e) {
    alert('Failed to save the data to the storage');
  }
};

const getAllUserData = async () => {
  const nibbles = await getData('nibbles');
  const appetisers = await getData('appetisers');
  const mains = await getData('mains');
  const desserts = await getData('desserts');
  userData = {
    nibbles,
    appetisers,
    mains,
    desserts,
  };
  return userData;
};

export default getAllUserData;
