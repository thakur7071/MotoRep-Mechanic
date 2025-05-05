import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';

const mechanic = {
  name: 'Ravi Kumar',
  image: 'https://randomuser.me/api/portraits/men/75.jpg',
  id: 'MECH123456',
  totalEarnings: '₹45,000',
  earningsHistory: [
    { id: '1', date: '2025-04-01', amount: '₹1,200' },
    { id: '2', date: '2025-04-05', amount: '₹2,000' },
    { id: '3', date: '2025-04-10', amount: '₹1,500' },
  ],
};

const MechanicPayment = () => {
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
          data={mechanic.earningsHistory}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.historyItem}>
              <Text>{item.date}</Text>
              <Text>{item.amount}</Text>
            </View>
          )}
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
    color: '#fff',
    fontSize: 12,
  },
  earningsContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  earningsLabel: {
    fontSize: 16,
    color: '#888',
  },
  earningsAmount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  historyContainer: {
    flex: 1,
  },
  historyTitle: {
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
});
