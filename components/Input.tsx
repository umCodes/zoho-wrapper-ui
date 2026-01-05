import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

interface InputFieldProps extends TextInputProps {
  label?: string;
}

const Input: React.FC<InputFieldProps> = ({label, ...rest}) => {
  return (
    <View>
        <View>
            <Text style={styles.regularText}>{label}</Text>
            <View style={styles.inputView}>
            <TextInput style={styles.input} placeholderTextColor="#888" {...rest}/>
            </View>        
        </View>    
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    
  inputView: {
    margin: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#352F38',
    borderRadius: 4,
    fontSize: 16
  },
  input: {
    fontSize: 16,
    width: '100%',
    color: '#c8c8c8ff',

  },
  regularText: {
      margin: 4,
      fontSize: 16,
      color: '#c8c8c8ff',
  },
})