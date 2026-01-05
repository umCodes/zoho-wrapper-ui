import Input from '@/components/Input';
import { useAuth } from '@/context/authContext';
import { colors } from '@/styles/styles';
import { ActivityIndicator, Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AuthScreen(){
  const {userData, setUserData, authenticate, isLoading, error, setError} = useAuth();

  const phoneNumberOnChange = (text: string) =>{     
    const phoneNumberPattern =  /^9665[0-9]{8}$|^05[0-9]{8}$/;
    setUserData(prev => ({...prev, phone_number: text}));
    if(!phoneNumberPattern.test(text)) setError('invalid phone number format');
    else setError('')
    if(text.length === 0) setError('');
  }
  
  const passwordOnChange = (text: string) =>{ 
    setUserData(prev => ({...prev, password: text}));
    if(text.length < 6) setError('password must be at least 6 characters long')
    else setError('')
    if(text.length === 0) setError('');

  }

  return (
    <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={[colors.dark.background as ViewStyle, styles.mainView]}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView >
        <View style={styles.heroView}>
          <Text style={[styles.headerOne, {marginVertical: 24}]}>📱 Login to Your Account</Text>
          <Input 
            label="Phone Number" 
            value={userData.phone_number} 
            onChangeText={phoneNumberOnChange} 
            placeholder='966 55 555 5555' 
            maxLength={12}  
            keyboardType='number-pad' 
          />
          <Input 
            label="Password" 
            secureTextEntry={true} 
            value={userData.password} 
            onChangeText={passwordOnChange} 
            placeholder='Enter Your Password'
          />

          <Text style={{height: 18, marginHorizontal: 14, marginTop: 4, color: "red"}}>
            {error && "⚠️ " + error}
          </Text>

      </View>
    
      <Pressable 
        disabled={isLoading}
        style={({pressed}) => [styles.button, {width: '95%', opacity: pressed ? 0.8 : 1}]} 
        onPress={authenticate}  
      >
            <Text style={styles.buttonText}>
                {isLoading ? <ActivityIndicator size="small"/> :"Login"}
            </Text>
        </Pressable>
      </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}



const styles = StyleSheet.create({
  mainView :{
    flex: 1,
    padding: 8,
    justifyContent: 'center'
  },
  headerOne: {
      fontSize: 36,
      margin: 4,
      fontWeight: 'bold',
      color: '#FEFEFE'
  },
  headerFour: {
      fontSize: 18,
      margin: 4,
      fontWeight: 'bold',
      color: '#FEFEFE'
  },
  regularText: {
      margin: 4,
      fontSize: 16,
      color: '#c8c8c8ff',
  },
  heroView: {
    marginVertical: 'auto'
  },
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
    width: '100%'
  },
  button: {
      flexDirection: 'row',
      justifyContent: 'center',
      margin: 12,
      padding: 14,
      borderRadius: 32,
      backgroundColor: '#FEFEFE',
  },
  buttonText: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#0C1721',
  }  
})