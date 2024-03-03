import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import TopBar from '../components/TopBar';


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}> 
      <TopBar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
});

export default HomeScreen;
