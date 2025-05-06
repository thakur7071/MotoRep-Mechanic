import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import bookings from '../../dummy/booking'; // Assuming your data file is booking.js

const Bookings = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.leftColumn}>
        <Text style={styles.name}>{item.customerName}</Text>
        <Text style={styles.details}>{item.name}</Text>
      </View>
      <View style={styles.rightColumn}>
        <Image
          source={typeof item.logo === 'string' ? { uri: item.logo } : item.logo}
          style={styles.logo}
        />
        <Text style={styles.charge}>{item.charge}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.centerContainer}>
          <Text style={styles.heading}>Bookings</Text>
        </View>
      </View>

      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Bookings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6E6F2',
    paddingHorizontal: 16,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 25,
    color: '#1E1E1E',
  },
  list: {
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#A6C6D8',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 20,
    marginBottom: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftColumn: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  rightColumn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 12,
    marginBottom: 10,
  },
  name: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 18,
    color: '#333',
    marginBottom: 4,
  },
  details: {
    color: '#000A26',
    fontFamily: 'JosefinSans-Regular',
    fontSize: 14,
    marginBottom: 10,
  },
  charge: {
    color: '#000A26',
    fontFamily: 'JosefinSans-Regular',
    fontSize: 16,
  },
});
