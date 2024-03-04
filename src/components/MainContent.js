import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StartFlightButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Drone'); // 'Drone' page navigate
  };

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
      <Text style={styles.buttonText}>Start Flight</Text>
    </TouchableOpacity>
  );
};

const Card = ({ title, content }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardParagraph}>{content}</Text>
      </View>
    </View>
  );
};

const MainContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Farming Drone</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.paragraph}>
          Protect your crops and plants from pests and diseases with agricultural drones.
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://img-c.udemycdn.com/course/750x422/4736370_de64.jpg' }}
          style={styles.image}
        />
      </View>
      <View style={styles.cardContainer}>
        <Card
          title="Autonom Flights"
          content="40 Minutes"
          imageSource="https://example.com/image1.jpg"
        />
        <Card
          title="Maximum Flights"
          content="65 Minutes"
          imageSource="https://example.com/image2.jpg"
        />
      </View>
      
      <StartFlightButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'right',
  },
  content: {
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 360,
    height: 250,
    borderRadius: 10,
    marginTop: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    height: 100,
  },
  card: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  cardHeader: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardContent: {
    padding: 10,
  },
  cardParagraph: {
    fontSize: 16,
  },
  buttonContainer: {
    backgroundColor: '#4287f5',
    borderRadius: 20,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MainContent;
