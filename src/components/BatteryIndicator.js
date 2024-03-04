import React from 'react';
import { View, StyleSheet } from 'react-native';

const BatteryIndicator = ({ percentage }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.bar, { width: `${percentage}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    backgroundColor: '#4287f5',
  },
});

export default BatteryIndicator;
