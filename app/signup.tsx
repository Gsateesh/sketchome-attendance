
import React from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { buttonStyles } from '../assets/styles/buttons';
import { linkStyles } from '../assets/styles/buttons';
import { useState } from 'react';
import { Link } from "expo-router";
import { inputTextStyles } from "../assets/styles/inputText";
import { container } from "../assets/styles/container";

export default function SignUp() {

  const [state, setState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const onPressLogin = () => {
    alert({ ...state });
  };

  return (
    <View
      style={container.styles}>
      <Text style={{ fontSize: 50, marginBottom: 30, fontWeight: 'bold' }}>Sign Up</Text>
      <View style={inputTextStyles.inputView}>
        <TextInput
          style={inputTextStyles.input}
          placeholder="Username"
          placeholderTextColor='#000000'
          onChangeText={text => setState({ email: text, password: state.password, confirmPassword: state.confirmPassword })} />
      </View>
      <View style={inputTextStyles.inputView}>
        <TextInput
          style={inputTextStyles.input}
          placeholder="Password"
          placeholderTextColor='#000000'
          secureTextEntry
          onChangeText={text => setState({ password: text, email: state.email, confirmPassword: state.confirmPassword })}
        />
      </View>
      <View style={inputTextStyles.inputView}>
        <TextInput
          style={inputTextStyles.input}
          placeholder="Confirm Password"
          placeholderTextColor='#000000'
          secureTextEntry
          onChangeText={text => setState({ confirmPassword: text, email: state.email, password: state.confirmPassword })}
        />
      </View>
      <TouchableOpacity
        style={buttonStyles.primaryButton}
        onPress={onPressLogin}
      >
        <Text style={{ color: '#ffffff', fontWeight: '500' }}>Sign Up </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Link href="/" style={linkStyles.primaryLink}>Already have an account? Click here to Login.</Link>
      </TouchableOpacity>
    </View>
  );
}
