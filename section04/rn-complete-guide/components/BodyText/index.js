import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

const BodyText = props => <Text style={styles.body}>{props.children}</Text>;

export default BodyText;
