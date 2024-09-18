import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const NotificationScreen = () => {
  return (
    <LinearGradient // Use LinearGradient as the background
    colors={['#FFE6E6', '#E1AFD1', '#AD88C6']}
    style={styles.container}
    >
      <Text style={styles.title}>Notifications</Text>
      <View style={styles.notification}>
        <Text style={styles.notificationText}>Order is placed</Text>
      </View>
      <View style={styles.notification}>
        <Text style={styles.notificationText}>Thank you</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  notification: {
    backgroundColor: '#EAEAEA',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  notificationText: {
    fontSize: 16,
  },
});

export default NotificationScreen;