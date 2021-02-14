import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

const TitleText = props => (
  <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
);

export default TitleText;
