import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const MainButton = props => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.6}
      onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
