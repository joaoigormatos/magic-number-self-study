import React from 'react'
import {StyleSheet,View,Text,Button, Image} from 'react-native'
import BodyText from '../../components/BodyText'
import TitleText from '../../components/TitleText'
import Colors from '../../constants/Colors'
import MainButton from '../../components/MainButton'
const GameOverScreen = (props) =>{
    return (
      <View style={styles.screen}>
          <TitleText>The game is over</TitleText>
            <View style={styles.imageContainer}>
             <Image
               // source={require('../../assets/success.png')}
                source={{uri: 'https://www.yourdictionary.com/images/definitions/lg/12337.summit.jpg '}}
                style={styles.image} 
                resizeMode='cover' /> 
            </View>

    <BodyText style={styles.textContainer}>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text>
         rounds to guess the numner 
    <Text style={styles.highlight}>{props.userNumber}</Text>
         </BodyText>
          <MainButton onClick = {props.onRestart}>RESTART THE GAME</MainButton>
      </View>
    )
}
const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    imageContainer:{
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30,
    },
    image:{
        width: '100%',
        height: '100%'
    },
    highlight:{
        color:Colors.primaryColor,
        fontFamily: 'opens-sans-bold',
               
    },
    textContainer:{
        textAlign: 'center',
        fontSize: 20
    }
})
export default GameOverScreen
