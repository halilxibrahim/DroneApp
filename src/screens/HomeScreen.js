import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}> 
      <View style={styles.header}>
        <View style={styles.leftContent}>
          <Feather name="menu" size={24} color="black" style={styles.menu} />
          <Text style={styles.title}>
            Home
          </Text>
        </View>
        <Image
          source={{uri: 'https://media.licdn.com/dms/image/D4D03AQGFdfBzzSMjHg/profile-displayphoto-shrink_800_800/0/1707992133924?e=1715212800&v=beta&t=2w435tfl5J96FaZpKBJNeHfbD0sI-DgOjq5pbUvu2PQ'}}
          style={styles.profileImage}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menu: {
    marginRight: 10,
  },
  title: {
    textAlign: 'center',
    color: '#242828',
    fontWeight: '500',
    left:120,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default HomeScreen;
