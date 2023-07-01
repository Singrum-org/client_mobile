import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const BorderedInput = ({isBottom, ...rest}, ref) => {
  return (
    <TextInput
      style={[styles.input, isBottom && styles.margin]}
      ref={ref}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#46a08f',
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 10,
    height: 48,
    backgroundColor: 'white',
  },
  margin: {
    marginBottom: 16,
  },
});

export default React.forwardRef(BorderedInput);
