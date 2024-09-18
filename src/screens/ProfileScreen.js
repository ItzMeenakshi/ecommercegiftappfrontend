import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ProfileScreen = () => {
  return (
    <LinearGradient // Use LinearGradient as the background
    colors={['#FFE6E6', '#E1AFD1', '#AD88C6']}
    style={styles.container}
    >
      <View style={styles.header}>
        <Image source={require('../image1/profile.png')} style={styles.profileImage} />
        <Text style={styles.profileName}>User</Text>
        <TouchableOpacity style={styles.editProfileButton} onPress={() => console.log('Edit Profile')}>
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.option} onPress={() => console.log('Orders')}>
          <Text style={styles.optionText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => console.log('Addresses')}>
          <Text style={styles.optionText}>Addresses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => console.log('Payment Methods')}>
          <Text style={styles.optionText}>Payment Methods</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => console.log('Logout')}>
          <Text style={styles.optionText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  editProfileButton: {
    marginTop: 10,
    backgroundColor: '#FF9900',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  editProfileButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  option: {
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
    paddingVertical: 15,
  },
  optionText: {
    fontSize: 16,
  },
});

export default ProfileScreen;