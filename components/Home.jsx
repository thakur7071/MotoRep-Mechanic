import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';



const Home = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome, Mechanic!</Text>
        <Text style={styles.subtitle}>Let's get your services started</Text>
      </View>

    
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  welcomeText: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 32,
    fontWeight: '600',
    color: '#333',
  },
  subtitle: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 18,
    color: '#555',
  }
});
