/*import React from 'react';
import Register from './src/Register';


export default function App (){
  return (
    <Register />
  );
}
*/
import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StuleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {auth, db} from '../../firebase-config'
import {createUserWithEmailAnpPassword} from "firebase/auth";
import { collection, addDoc} from "firebase/firestore";

export default function Register(){
  const [email, setEmail]=useState('')
  const [pwd, setPwd] = useState('')
  const [name, setName]= useState('')
  
  const handleRegister=async()=>{
    createUserWithEmailAnpPassword(auth, email,pwd)
    .then(async userCredentials =>{
      const currentUser=userCredentials.user;

      const docUser=await addDoc(collection(db, "users"),{
        userId: currentUser.uid,
        name: name,
        email: currentUser.email,
      });
      console.log('Registered With: ', currentUser);
      alert('Registered')
    })
    .catch(error=> alert(error.message))
  }
}
return(
  <View style={StyleSheet.container}>
  <StatusBar style="light"/>
  <View style={{
    flexDirection:'column',
  }}>
  <Text style={{
    fontSize:90,
    color: 'white',
  }}>Register</Text>
  </View>
  
  </View>
)

