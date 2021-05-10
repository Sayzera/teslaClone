import React from 'react';

import { View, Text,Pressable } from 'react-native';
import styles from './style';


const StyledButton = (props) => {
  
    //const type = props.type;
    //const content = props.content;
    //const onPress = props.onPress;
    
    const { type, content, onPress } = props;

    const backGroundColor = type === 'primary' ? 'black' : 'white';
    const textColor = type === 'primary' ? 'white' : 'black';



    return (
        <View style={styles.container}>
          
            <Pressable
            style={[styles.button, 
                backGroundColor === 'black' ? styles.blackBacground : styles.whiteBacground]}
            onPress={() => onPress()}
            >

            <Text style={[styles.text,
             backGroundColor === 'black' ? styles.whiteText : styles.blackText]}
            >{content}</Text>

            </Pressable>
        </View>
    )
}


export default StyledButton;