
import React from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import {buttonStyles} from '../assets/styles/buttons';
import {linkStyles} from '../assets/styles/buttons';
import { useState } from 'react';
import { Link } from "expo-router";
import { container } from "../assets/styles/container";
import { text } from "../assets/styles/text";
import { inputTextStyles } from "../assets/styles/inputText";

export default function Login() {
    
    const [state, setState] = useState({
        email: '',
        });
        const onPressLogin = () => {
            alert({...state});
        };

  return (
    <View 
    style={ container.styles }>
      <Text style={{fontSize: 50, marginBottom: 30, fontWeight: 'bold'}}>Password Reset.</Text>
      <View style={inputTextStyles.inputView}>
        <TextInput
            style={inputTextStyles.input}
            placeholder="Username"
            placeholderTextColor='#000000'
            onChangeText={text => setState({ email: text})} />
      </View>
      
      <TouchableOpacity
        style={buttonStyles.primaryButton}
        onPress={onPressLogin}
        >
        <Text style={ text.primary}>Submit </Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Link href="/" style={linkStyles.primaryLink}>Do not have account? Click here to Login.</Link>
        </TouchableOpacity>
    </View>
  );
}
