import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Alert, View } from 'react-native';
import { Text } from '../components/Themed';
import { useRouter } from 'expo-router';

export default function SignupScreen() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSignup = () => {
    if (!mobileNumber || !email) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    // Add your signup logic here, such as making an API call
    Alert.alert('Signup Success', 'Account created successfully!');
    router.back(); // Go back to login screen after successful signup
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Join MotoRep as a Mechanic</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          placeholderTextColor="#888"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="phone-pad"
        />
      </View>

      <TouchableOpacity activeOpacity={0.85} style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.85} style={styles.loginLink} onPress={() => router.back()}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
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
    marginBottom: 10,
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
  },
  loginLink: {
    marginTop: 15,
    alignItems: 'center',
  },
  loginText: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 14,
    color: "#000A26",
  },
});
