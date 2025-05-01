import { ScrollView, StyleSheet, View, Text } from 'react-native';
import {useFonts} from 'expo-font';

export default function HomeScreen() {

  const [loaded] = useFonts({
    'JosefinSans-Regular': require('../../assets/fonts/JosefinSans-Regular.ttf'),
  });
  
  if(!loaded){
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>MotoRep Mechanic Panel</Text>
        <Text style={styles.subtitle}>Manage Your Repairs Efficiently 🔧🏍️</Text>
      </View>

      {/* Horizontal Scroll for Steps */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.stepsRow}
      >
        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>Today's Tasks</Text>
          <Text style={styles.stepDescription}>
            View all assigned repair jobs scheduled for today.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>Update Repair Status</Text>
          <Text style={styles.stepDescription}>
            Mark bikes as repaired, pending, or waiting for parts.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>Service History</Text>
          <Text style={styles.stepDescription}>
            Check past repair records for any bike you worked on.
          </Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  titleContainer: {
    
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 28,
    fontWeight: '600',
    color: '#333333',
  },
  subtitle: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 18,
    fontWeight: '400',
    color: '#555555',
  },
  stepsRow: {
    paddingLeft: 16,
    paddingRight: 8,
    gap: 10,
  },
  stepContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    width: 280,
    marginRight: 5,
    shadowRadius: 6,
    gap: 8,
  },
  stepTitle: {
    fontFamily: 'JosefinSans-Regular',
    alignSelf:"center",
    fontSize: 20,
    fontWeight: '600',
    color: '#2D9CDB',
  },
  stepDescription: {
    fontFamily: 'JosefinSans-Regular',
    alignSelf:"center",
    fontSize: 16,
    fontWeight: '400',
    color: '#777777',
  },
});
