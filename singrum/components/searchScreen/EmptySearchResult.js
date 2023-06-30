import {View, Text, StyleSheet} from 'react-native';

const messages = {
  NOT_FOUND: '검색 결과가 없습니다.',
};

function EmptySearchResult({type}) {
  return (
    <View style={styles.block}>
      <Text stlye={styles.text}>{messages[type]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
});

export default EmptySearchResult;
