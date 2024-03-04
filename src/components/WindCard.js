import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const WindCard = ({ title, content }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.cardImage}
        source={require('../../assets/wind.png')}
      />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardContent}>{content}</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 118,
    height: 190,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    justifyContent: 'center',
    alignItems: 'center',
    bottom:80,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardContent: {
    fontSize: 16,
  },
  cardImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  
});

export default WindCard;
