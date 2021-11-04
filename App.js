import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';

export default function App() {




  return (
    <SafeAreaView style={styles.container}>
      
      <Text numberOfLines={4} >Open up App.js to start working on your app!!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsum officiis iure, aperiam vel quibusdam, rem error pariatur labore ea non harum optio eaque! Dolorem aut sed repellendus in, repellat laborum quod architecto, vitae minima harum earum placeat, quaerat accusantium et sequi magni molestias nisi reprehenderit cum! Ipsa accusantium quo iusto sed distinctio quia aspernatur et voluptatibus libero atque placeat adipisci laudantium error sapiente optio amet  </Text>
      <TouchableOpacity>
      <Image
      source={{
        width:480,
        height:270,
        uri: "https://picsum.photos/480/270"}}/>

      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001220',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
