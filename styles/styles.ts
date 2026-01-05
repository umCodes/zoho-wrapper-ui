import { TextStyle } from "react-native";

export const colors = {
    light: {
        background: {backgroundColor: '#fefefe'} ,
        defaultText: {color: '#000000'},
        clickableText: {color: '#b041d1ff'},
    },
    dark: {
        background: {backgroundColor: '#151218'},
        defaultText: {color: '#fefefe'},
        clickableText: {color: '#b041d1ff'}

    }

} 

type TextKeys = 'title' | 'heading' | 'subheading' | 'default' | 'description';
export const text: { [key in TextKeys]: TextStyle } = {
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        margin: 4,

    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 4
    },
    subheading:{
        fontSize: 20,
        fontWeight: 'bold',
        margin: 4
    },
    default: {
        fontSize: 16,
        fontWeight: 'normal',
        margin: 4
    },
    description: {
        margin: 4,
        fontSize: 16,
        color: '#8f8f8fff',
    },
} 