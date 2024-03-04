import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import TopBar from '../components/TopBar';
import MainContent from '../components/MainContent';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}> 
      <TopBar/>
      <MainContent/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6E6F2',
  },
});

export default HomeScreen;
