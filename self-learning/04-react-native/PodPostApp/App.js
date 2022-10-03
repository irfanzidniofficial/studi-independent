import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import Layout from './src/components/Layout';
// import Greeting from './src/components/Greeting';

const App = () => {
  // const state = {
  //   greeting: 'Selamat Datang',
  // };
  // console.log('halo debug');
  // console.warn('Selamat datang');

  // => Latihan FlatList
  const podcast = [
    {
      id: 1,
      title: 'Ceritanya Developer Podcast',
      url: 'https://reactnative.dev/',
    },
    {
      id: 2,
      title: 'Wicara Podcast',
      url: 'https://anchor.fm/datapods',
    },
    {
      id: 3,
      title: 'dataPods',
      url: 'https://anchor.fm/wicara-digital-media',
    },
  ];
  // renderItem=podcast=> <Text key={podcast.id}>{podcast}</Text>
  return (
    // <View style={styles.container}>
    //   <Greeting text={'Hai..'} />
    //   <Text style={styles.text}>{state.greeting}</Text>
    //   <Layout />
    // </View>

    // => Latihan Layout
    // <View style={styles.container}>
    //   <Layout />
    // </View>

    // => Latihan List Manual
    // <View style={styles.container}>{podcastList}</View>

    // => Latihan FlatList

    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={podcast}
        renderItem={renderItem}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 16,
  },
});
