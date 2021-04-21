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
      description: 'Watch a star wars! but please, the originals',
    },
    {
      _id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Do a Puzzle',
      ingredients: ['a phone or computer or puzzle book'],
      description: 'You can start small but really you want the 5000 pieces one',
    },
    {
      _id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Take a long awaited break',
      ingredients: [],
      description: 'Sometimes it can be usefull to just stop doing anything and take a breather. Just do not repeat this activity too many times consecutively',
    },
  ],
  appetisers: [
    {
      _id: 'bd7acbea-c1b1-46c2-aed5-3ad53dbb28ba',
      name: 'Do a codewars kata',
      ingredients: ['computer'],
      description: "If you're learning a new coding language, practice makes perfect!",
    },
    {
      _id: 'bd0acjea-c4b1-46c2-red5-3ad53abb28ba',
      name: 'Play a piece of music',
      ingredients: ['an instrument', 'somewhere private'],
      description: 'It does help if you own an instrument, but otherwise just makes noise with your mouth until someone walks in',
    },
  ],
  mains: [
    {
      _id: 'ai589cm1-oi5n-alf3-bd96-145571e29d72',
      name: 'Learn a new song on the guitar',
      ingredients: ['a guitar'],
      description: 'You will not learn it in one go but a bit of a challenge is exatcly what you are here for!',
    },
  ],
  desserts: [
    {
      _id: '3ac68afc-dk30-3kf9-a4f8-fbd91aa9d07k',
      name: 'Browse Reddit for 3 hours',
      ingredients: ['a phone', 'Ennui'],
      description: 'Pretty self-explanatory!',
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

export const editData = async (oldID, key, value) => {
  try {
    console.log('editData', value);
    await deleteData(key, oldID);
    userData[key].push(value);
    const jsonValue = JSON.stringify(userData[key]);
    await AsyncStorage.setItem(key, jsonValue);
    alert('Activity successfully edited');
  } catch (e) {
    alert('Failed to change the data in storage');
  }
};

export const deleteDataByID = async (ID) => {
  let key;
  // eslint-disable-next-line no-restricted-syntax
  for (key of Object.keys(userData)) {
    const filterLength = userData[key].filter((item) => item._id === ID).length;
    if (filterLength > 0) {
      deleteData(key, ID);
      break;
    }
  }
};

export const deleteData = async (key, ID) => {
  try {
    userData[key] = userData[key].filter((item) => item._id !== ID);
    const jsonValue = JSON.stringify(userData[key]);
    await AsyncStorage.setItem(key, jsonValue);
    alert('Activity successfully deleted');
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

export function doesActivityNameExist(key, name) {
  const existingName = userData[key].filter((item) => item.name === name);
  return existingName.length !== 0;
}

export default getAllUserData;
