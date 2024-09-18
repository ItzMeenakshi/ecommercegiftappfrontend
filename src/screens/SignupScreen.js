import React, {useState, useRef} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SignUpScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    if (isLoading || username == '' || password == '' || phone == '') {
      return;
    }
    setIsLoading(true);
    const response = await fetch('http://192.168.1.16:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: username,
        phone: phone,
        password: password,
      }),
    });
    setIsLoading(false);
    if (response.ok) {
      const data = await response.json();
      console.log('Signup successful:', data);
      navigation.navigate('TabBarScreen');
    } else {
      const errorData = await response.json();
      console.error('Signup failed:', errorData);
    }
  };

  return (
    <LinearGradient // Use LinearGradient as the background
    colors={['#FFE6E6', '#E1AFD1', '#AD88C6']}
    style={styles.container}
    >
      <Text style={styles.heading}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        onChangeText={setPhone}
        value={phone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} disabled={isLoading} color={"#BEADFA"} />
      {isLoading && (
        <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  loader: {
    marginTop: 20,
  },
});

export default SignUpScreen;