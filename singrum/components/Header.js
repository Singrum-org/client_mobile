import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Button} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';

const Header = () => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.block}>
        <View style={styles.left}>
          {route?.params?.detail && (
            <Button title="<" onPress={() => navigation.pop()} />
          )}
          <Text style={styles.title}>Singrum</Text>
        </View>
        <Button
          title="프로필"
          onPress={() => navigation.push('ProfileScreen')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    padding: 13,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    color: 'black',
  },
});

export default Header;
