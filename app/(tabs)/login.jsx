import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Alert, View } from 'react-native';
import { Text } from '../../components/Themed';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const [mobileNumber, setMobileNumber] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (!mobileNumber) {
      Alert.alert('Error', 'Please enter your mobile number.');
      return;
    }
    // Add your login logic here, such as making an API call
    Alert.alert('Login Success', `Welcome, ${mobileNumber}!`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Login to MotoRep</Text>
        <Text style={styles.subtitle}>Enter your mobile number</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          placeholderTextColor="#888"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="phone-pad"
        />
      </View>

      <TouchableOpacity activeOpacity={0.85} style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Get OTP</Text>
      </TouchableOpacity>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 28,
    fontWeight: '600',
    color: '#222',
  },
  subtitle: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 16,
    opacity: 0.8,
    color: '#555',
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    fontFamily: 'JosefinSans-Regular',
    height: 50,
    borderColor: '#000A26',
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 15,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: "#000A26",
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'JosefinSans-Regular',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  }
});
