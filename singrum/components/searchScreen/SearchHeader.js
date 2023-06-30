const {
  useWindowDimensions,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
} = require('react-native');
import {useNavigation} from '@react-navigation/native';
import {useContext} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import searchContext from '../../contexts/SearchContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SearchHeader() {
  const {width} = useWindowDimensions();
  const navigation = useNavigation();
  const {keyword, onChangeText} = useContext(searchContext);

  const navigateToPlantList = () => {
    navigation.navigate('PlantsListScreen');
  };

  const saveRecentSearches = async (search) => {
    try {
      const searches = await AsyncStorage.getItem('recentSearches');
      let recentSearches = [];
  
      if (searches !== null) {
        recentSearches = JSON.parse(searches);
      }
  
      const updatedSearches = [search, ...recentSearches.slice(0, 4)];
      await AsyncStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    } catch (error) {
      console.log('Failed to save recent searches', error);
    }
  };
  
  const handleTextSubmit = () => {
    if (keyword.trim() !== '') {
      saveRecentSearches(keyword);
    }
  };
  

  return (
    <View style={[styles.header, {width}]}>
      <Pressable
        style={({pressed}) => [styles.backButton, pressed && {opacity: 0.5}]}
        onPress={navigateToPlantList}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>
      <View style={styles.searchInput}>
        <TextInput
          placeholder="식물을 입력하세요"
          value={keyword}
          onChangeText={onChangeText}
          onSubmitEditing={handleTextSubmit}
          returnKeyType="search"
          autoFocus
        />
        {keyword.length > 0 && (
          <Pressable
            style={({pressed}) => [
              styles.cancelButton,
              pressed && {opacity: 0.5},
            ]}
            onPress={() => onChangeText('')}>
            <MaterialIcons name="cancel" size={24} color="#aaa" />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 60,
    backgroundColor: '#fff',
  },
  backButton: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: '#eee',
    alignItems: 'center',
  },
  cancelButton: {
    marginLeft: 8,
  },
});

export default SearchHeader;
