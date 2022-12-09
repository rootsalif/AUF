
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const saveDate = async (value) => {
  console.log(value, 'log: le numero saisi');
  const jsonValue = JSON.stringify(value);
  try {
    await AsyncStorage.setItem('@storage_Key', jsonValue);
    alert('Bin enregistrer!');
  } catch (e) {
    console.log(e, 'log: Erreurs pendant la sauvegarde !');
  }
};
export default function App() {
  const [phone, setPhone] = useState('');
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Write Data</Text>
      <TextInput
        style={{ marginVertical: 10, fontSize: 17 }}
        value={phone}
        placeholder="+223 0000 0000"
        autoCompleteType="tel"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        onChangeText={setPhone}
      />
      <Button onPress={() => saveDate()} title="Save Data" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8CF1B4',
    alignItems: 'center',
    justifiyContent: 'center',
  },
});