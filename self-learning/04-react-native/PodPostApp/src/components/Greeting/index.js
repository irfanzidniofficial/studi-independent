import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Greeting = props => {
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  );
};

export default Greeting;

const styles = StyleSheet.create({});
