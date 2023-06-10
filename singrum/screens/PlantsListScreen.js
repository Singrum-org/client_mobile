import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PlantsListScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>식물 리스트</Text>
      <Button
        title="디테일 버튼"
        onPress={() => navigation.push('PlantsDetailScreen', {detail: true})}
      />
    </SafeAreaView>
  );
};

export default PlantsListScreen;
