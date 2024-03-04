import React from 'react';
import { StyleSheet, SafeAreaView,View,Image,Text } from 'react-native';
import TopBar from '../components/TopBar';
import BatteryIndicator from '../components/BatteryIndicator';
import SpeedCard from '../components/SpeedCard';
import RangeCard from '../components/RangeCard';
import WindCard from '../components/WindCard';




const Card = ({ title, content }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardPercent}>{content}</Text>
        <View style={styles.battery}>
          <BatteryIndicator percentage={75} />
        </View>
      </View>
    </View>
    
  );
};


const DroneScreen = () => {
  return (
    <SafeAreaView style={styles.container}> 
        <TopBar/>
        <View style={styles.main}>
          <Image
            source={require('../../assets/drone.png')}
            style={styles.droneImage}
            />
        </View>
        <View style={styles.cardContainer}>
          <Card
            title="Battery"
            content="%75"
          />
        </View>
        
        
        <View style={styles.horizontal}>
        <View style={styles.horizontalContainer}>
          <SpeedCard
            title="Speed"
            content="59 KMH"
          />
        </View>
      <View style={styles.horizontalContainer}>
        <RangeCard
          title="Range"
          content="3001m"
        />
      </View>
      <View style={styles.horizontalContainer}>
        <WindCard
          title="Wind"
          content="5 KMH"
        />
      </View>
    </View>
        
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6E6F2',
  },
  droneImage: {
    alignItems:'center',
    justifyContent:'flex-start',
    left:100,
    top:50,
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
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 100,
    marginLeft:30,
    height: 76,
    width:700,
  },
  battery: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    top:9,
    right:20,
  },
  cardPercent:{
    justifyContent: 'center',
    alignItems: 'center',
    left:240,
    bottom:20,
  },
  horizontal: {
    flex: 1,
    flexDirection: 'row', // Kartları yatay olarak sıralamak için
    justifyContent: 'center', // Kartların ortalandığından emin olmak için
    alignItems: 'center', // Kartların dikeyde ortalandığından emin olmak için
    top:30,
    
  
  },
  horizontalContainer: {
    margin: 1,
  }
});

export default DroneScreen;
