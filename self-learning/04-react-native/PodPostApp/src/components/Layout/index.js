import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Layout = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container1}>
        <View style={[styles.box, styles.box1]}></View>
        <View style={[styles.box, styles.box2]}></View>
        <View style={[styles.box, styles.box3]}></View>
      </View>
      <View style={styles.container2}>
        <View style={[styles.box, styles.box1]}></View>
        <View style={[styles.box, styles.box2]}></View>
        <View style={[styles.box, styles.box3]}></View>
      </View>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    height: 100,
    width: 100,
  },
  box1: {
    backgroundColor: 'royalblue',
  },
  box2: {
    backgroundColor: 'yellow',
  },
  box3: {
    backgroundColor: 'red',
  },
});
