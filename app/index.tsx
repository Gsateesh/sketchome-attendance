
import React from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { container } from "../assets/styles/container";
import { buttonStyles } from '../assets/styles/buttons';
import { linkStyles } from '../assets/styles/buttons';
import { useState } from 'react';
import { Link } from "expo-router";
import { inputTextStyles } from "../assets/styles/inputText";

export default function Login() {

  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const onPressLogin = () => {
    alert({ ...state });
  };

  return (
    <View style={container.styles}>
      <Text style={{ fontSize: 50, marginBottom: 30, fontWeight: 'bold' }}>Login</Text>
      <View style={inputTextStyles.inputView}>
        <TextInput
          style={inputTextStyles.input}
          placeholder="Username"
          placeholderTextColor='#000000'
          onChangeText={text => setState({ email: text, password: state.password })} />
      </View>
      <View style={inputTextStyles.inputView}>
        <TextInput
          style={inputTextStyles.input}
          placeholder="Password"
          placeholderTextColor='#000000'
          secureTextEntry
          onChangeText={text => setState({ password: text, email: state.email })}
        />
      </View>
      <TouchableOpacity>
        <Text style={linkStyles.primaryLink}>
          <Link href={"/forgot-password"}>
            Forgot Username/Password?
          </Link>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={buttonStyles.primaryButton}
        onPress={onPressLogin}
      >
        <Text style={{ color: '#ffffff', fontWeight: '500' }}>LOGIN </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Link href="/signup" style={linkStyles.primaryLink}>Do not have account? Click here to Signup.</Link>
      </TouchableOpacity>
    </View>
  );
}
