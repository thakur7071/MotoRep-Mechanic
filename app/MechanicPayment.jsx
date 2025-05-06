import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

const mechanic = {
  name: 'Ravi Kumar',
  image: 'https://randomuser.me/api/portraits/men/75.jpg',
  id: 'MECH123456',
  totalEarnings: '₹45,000',
  earningsHistory: [
    { id: '1', date: '2025-04-01', amount: '₹1,200' },
    { id: '2', date: '2025-04-05', amount: '₹2,000' },
    { id: '3', date: '2025-04-10', amount: '₹1,500' },
    { id: '4', date: '2025-04-15', amount: '₹1,700' },
    { id: '5', date: '2025-04-20', amount: '₹1,800' },
    { id: '6', date: '2025-04-25', amount: '₹2,100' },
    { id: '7', date: '2025-04-30', amount: '₹1,900' },
    { id: '8', date: '2025-05-02', amount: '₹2,300' },
    { id: '9', date: '2025-05-05', amount: '₹1,600' },
    { id: '10', date: '2025-05-06', amount: '₹2,000' },
    { id: '11', date: '2025-05-07', amount: '₹2,500' },
    { id: '12', date: '2025-05-08', amount: '₹2,800' },
  ],
};

const MechanicPayment = () => {
  const [showAll, setShowAll] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setShowAll(false);
    }, [])
  );

  const visibleEarnings = showAll
    ? mechanic.earningsHistory
    : mechanic.earningsHistory.slice(0, 10);

  return (
    <View style={styles.container}>
      {/* Mechanic Card */}
      <View style={styles.card}>
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{mechanic.name}</Text>
          <View style={styles.idContainer}>
            <Text style={styles.idText}>{mechanic.id}</Text>
          </View>
        </View>
        <Image source={{ uri: mechanic.image }} style={styles.image} />
      </View>

      {/* Total Earnings */}
      <View style={styles.earningsContainer}>
        <Text style={styles.earningsLabel}>Total Lifetime Earnings</Text>
        <Text style={styles.earningsAmount}>{mechanic.totalEarnings}</Text>
      </View>

      {/* Earnings History */}
      <View style={styles.historyContainer}>
        <Text style={styles.historyTitle}>Earnings History</Text>
        <FlatList
          data={visibleEarnings}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.historyItem}>
              <Text style={styles.earningdate}>{item.date}</Text>
              <Text style={styles.amount}>{item.amount}</Text>
            </View>
          )}
          ListFooterComponent={
            !showAll && mechanic.earningsHistory.length > 10 ? (
              <TouchableOpacity onPress={() => setShowAll(true)} activeOpacity={0.7}>
                <Text style={styles.moreButton}>Show More</Text>
              </TouchableOpacity>
            ) : null
          }
        />
      </View>
    </View>
  );
};

export default MechanicPayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 16,
  },
  name: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  idContainer: {
    
    backgroundColor: '#333',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  idText: {
    fontFamily: 'JosefinSans-Regular',
    color: '#fff',
    fontSize: 12,
  },
  earningsContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  earningsLabel: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 16,
    color: '#888',
  },
  earningsAmount: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
  },
  historyContainer: {
    flex: 1,
  },
  historyTitle: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  earningdate:{
    fontFamily: 'JosefinSans-Regular',
  },
  amount:{
    fontFamily: 'JosefinSans-Regular',
  },
  moreButton: {
    fontFamily: 'JosefinSans-Regular',
    color: '#1e90ff',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '500',
    fontSize: 16,
  },
});
