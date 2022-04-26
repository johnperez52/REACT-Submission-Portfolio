import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
        <Text>By John</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#389afc',
    position: 'fixed',
    height: 50,
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,  }
});