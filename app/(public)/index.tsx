import { colors, text } from '@/styles/styles';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const WelcomeScreen = () => {
    const router = useRouter();
    
    return (
        <SafeAreaView style={styles.view}>
            <Pressable onPress={() => router.push('/(tabs)/dashboard') }>
                <Text style={styles.regularText}>
                    Home
                </Text>
            </Pressable>

            <View style={styles.heroText}>    
                <Text style={[text.title, colors.dark.defaultText, text.title]}>🖐️ Welcome to Zoho Wrapper</Text>
                <Text style={text.description}>A simpler user interface for easier inventory management</Text>
            </View>

            <Pressable style={styles.button} onPress={() => router.push('/(auth)/auth') }>
                <Text style={styles.buttonText}>
                    Login
                </Text>
            </Pressable>
        </SafeAreaView>
  )
}


export default WelcomeScreen

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#151218',
        justifyContent: 'center',
        padding: 8
    },
    headerOne: {
        fontSize: 36,
        margin: 4,
        fontWeight: 'bold',
        color: '#FEFEFE'
    },
    regularText: {
        margin: 4,
        fontSize: 16,
        color: '#FEFEFE',
    },
    descriptionText: {
        margin: 4,
        fontSize: 16,
        color: '#8f8f8fff',
    },
    heroText: {
        margin: 16,
        marginVertical: 'auto'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: .5,
        borderColor: '#CAC6CE',
        margin: 8,
        padding: 16,
        borderRadius: 32,
        backgroundColor: '#302932',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#FEFEFE',
    }  


})