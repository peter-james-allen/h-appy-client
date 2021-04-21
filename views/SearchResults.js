import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Picker,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import Header from '../components/Header';
import CourseHeader from '../components/CourseHeader';
import FetchActivities, { FetchCategories } from '../src/FetchActivities';
import IndividualActivityButton from '../components/IndividualActivityButton.js';
import MenuButton from '../components/MenuButton';

const windowWidth = Dimensions.get('window').width;

function buildItem(item) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.item.name}</Text>
        <IndividualActivityButton
          style={styles.individualButton}
          item={item.item}
        />
      </View>
    </View>
  );
}

function SearchActivities(query) {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch(
      `https://happy-haddocks.herokuapp.com/search?cost=${query.cost}&accessibility=${query.accessibility}&categories=${query.category}`,
    )
      .then((response) => response.json())
      .then((json) => setApiData(json))
      .catch((error) => console.error(error));
  }, []);
  return apiData;
}

function AccessibilitySlider(props) {
  const { accessibility, setAccessibility } = props;
  return (
    <View style={styles.sliderContainer}>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={10}
        value={accessibility}
        minimumTrackTintColor="#696773"
        maximumTrackTintColor="#363946"
        onValueChange={(value) => setAccessibility(Math.ceil(value))}
      />
      <Text style={styles.sliderText}>
        Accessibility Score:
        {' '}
        {'\t'}
        {' '}
        {accessibility}
      </Text>
    </View>
  );
}

function PriceSlider(props) {
  const { price, setPrice } = props;
  return (
    <View style={styles.sliderContainer}>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={4}
        value={price}
        minimumTrackTintColor="#696773"
        maximumTrackTintColor="#363946"
        onValueChange={(value) => setPrice(Math.ceil(value))}
      />
      <Text style={styles.sliderText}>
        Cost:
        {' '}
        {'\t'}
        {' '}
        {'£ '.repeat(price) || 'Free :)'}
      </Text>
    </View>
  );
}

function SubmitButton(props) {
  const navigation = useNavigation();
  const searchParams = props;

  return (
    <View style={styles.submitButtonContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Search');
          navigation.navigate('SearchResults', { searchParams });
        }}
      >
        <Text style={styles.submitButton}>Update Results</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function SeachResults({ route }) {
  const previousAccessibility = route.params.searchParams.accessibility;
  const previousPrice = route.params.searchParams.price;
  const previousCategory = route.params.searchParams.category;

  const [category, setCategory] = useState(previousCategory);
  const [accessibility, setAccessibility] = useState(previousAccessibility);
  const [price, setPrice] = useState(previousPrice);

  const categories = FetchCategories();

  const apiData = SearchActivities({
    cost: route.params.searchParams.price,
    accessibility: route.params.searchParams.accessibility,
    category: route.params.searchParams.category,
  });

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.formContainer}>
        <AccessibilitySlider
          accessibility={accessibility}
          setAccessibility={setAccessibility}
        />

        <PriceSlider price={price} setPrice={setPrice} />

        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={category}
            onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
          >
            <Picker.Item
              label="Select a Category..."
              value=""
              enabled={false}
            />
            {categories.map((item, index) => <Picker.Item label={item} value={item} key={index} />)}
          </Picker>
        </View>

        <SubmitButton
          accessibility={accessibility}
          price={price}
          category={category}
        />
      </View>

      <View style={styles.activitiesContainer}>
        <View style={styles.activityList}>
          <FlatList
            data={apiData}
            renderItem={buildItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      </View>
      <MenuButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#696773',
  },
  formContainer: {
    flex: 0.5,
    width: '92%',
    marginTop: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B1B6A6',
    borderRadius: 5,
  },
  slider: {
    width: 280,
    opacity: 1,
    height: 50,
  },
  sliderContainer: {
    flex: Platform.OS === 'ios' ? 0.2 : 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#819595',
    width: '90%',
    borderRadius: 5,
    marginBottom: 15,
    zIndex: 999,
  },
  sliderText: {
    color: '#23252E',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'Roboto',
    fontSize: 16,
  },
  pickerContainer: {
    marginTop: Platform.OS === 'ios' ? -100 : 0,
    width: '80%',
    // padding: 20,
    borderRadius: 10,
    flex: 0.5,
    overflow: 'hidden',
  },
  picker: {
    transform: Platform.OS === 'ios' ? [{ scaleX: 0.8 }, { scaleY: 0.8 }] : [],
  },
  submitButtonContainer: {
    width: '92%',
    marginLeft: 8,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#363946',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    position: 'absolute',
    bottom: 15,
  },
  submitButton: {
    color: '#B1B6A6',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'Roboto',
    fontSize: 20,
  },
  courseDetailsContainer: {
    flex: 0.4,
    alignContent: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingTop: 10,
    paddingBottom: 10,
  },
  courseDetails: {
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'Roboto',
    textAlign: 'center',
    fontSize: 17,
    color: '#353746',
  },
  headerContainer: {
    flex: 0.08,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#819595',
    width: windowWidth * 0.9,
    padding: 15,
    top: '10%',
    borderRadius: 5,
  },
  activityList: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.8,
    paddingBottom: 10,
  },
  item: {
    margin: 3,
    padding: 10,
    fontSize: 15,
    backgroundColor: '#363946',
    borderRadius: 5,
    flexDirection: 'column',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.34,
    shadowRadius: 5.32,
    elevation: 4,
  },
  itemText: {
    color: '#fff',
    fontFamily: Platform.OS === 'ios' ? 'Chalkduster' : 'Roboto',
    textAlign: 'center',
    fontSize: 17,
  },
  itemContainer: {
    borderRadius: 5,
    overflow: 'hidden',
    padding: 3,
  },
  activitiesContainer: {
    flex: 0.4,
    marginTop: '5%',
    marginBottom: '12%',
    width: windowWidth * 0.9,
    backgroundColor: '#B1B6A6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});
