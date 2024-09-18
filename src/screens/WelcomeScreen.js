import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const goToLoginScreen = () => {
    navigation.navigate('LoginScreen'); // Navigate to the LoginScreen
  };

  const goToSignupScreen = () => {
    navigation.navigate('SignupScreen'); // Navigate to the SignupScreen
  };

  return (
    <LinearGradient // Use LinearGradient as the background
      colors={['#FFE6E6', '#E1AFD1', '#AD88C6']}
      style={styles.container}
    >
    <Image
        source={require('../image1/image22.png')} // Change path_to_your_image.jpg with the actual path of your image
        style={styles.image}
      />
      <Text style={styles.welcomeText}>SURPRISE YOUR LOVED ONE'S WITH <Text style={styles.welcomeText1}>OUR PRODUCT</Text></Text>
      
      <TouchableOpacity style={styles.signupButton} onPress={goToSignupScreen}>
        <Text style={styles.signupButtonText}>Let's Started</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.login} onPress={goToLoginScreen}>
      <Text style={{
                            fontSize: 16,
                            color:'black',
                        }}>Already have an account ?<Text style={styles.loginButtonText} > Login</Text></Text>       
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 100,
    marginBottom: 50,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    fontFamily:'Raleway-Italic',
  },
  welcomeText1: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    fontFamily:'Raleway-Italic',
  },
  loginButton: {
    backgroundColor:'#BEADFA',
    padding: 10,
    borderRadius: 50,
    marginBottom: 10,
    paddingRight:30,
    paddingLeft:30,
  },
  loginButtonText: {
    color: 'pink',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 4,
    borderColor:'black',
  },
  signupButton: {
    backgroundColor: '#BEADFA',
    padding: 10,
    borderRadius: 50,
    marginBottom: 10,
    paddingRight:22,
    paddingLeft:22,
  },
  signupButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;