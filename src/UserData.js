// eslint-disable-next-line prefer-const
import AsyncStorage from '@react-native-async-storage/async-storage';

let userData = {}
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

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
    alert('Activity successfully saved')
  } catch (e) {
    alert('Failed to save the data to the storage')
  }
}

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    console.log(JSON.parse(jsonValue))
    return jsonValue != null ? JSON.parse(jsonValue) : defaultData;
  } catch(e) {
    // error
  }
}

export function addToUserData(menuSection, item) {
  console.log(menuSection)
  console.log(item)
  console.log(userData)
  userData[menuSection].push(item);
  storeData(userData)
}

export default function getUserData() {
  getData().then((response) => userData = response)
  return userData;
}
