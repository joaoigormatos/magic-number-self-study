import React, {useState} from 'react'

import {View, Text, StyleSheet, Button, TouchableWithoutFeedback,Keyboard, Alert} from 'react-native'

// Components
import Card from '../../components/Card'
import Input from '../../components/Input'
import Colors from '../../constants/Colors'
import NumberInput from '../../components/NumberContainer'
import NumberContainer from '../../components/NumberContainer'
import BodyText from '../../components/BodyText'
import TitleText from '../../components/TitleText'

import MainButton from '../../components/MainButton'
const StartGameScreen = (props)=>{
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed,setConfirmed] = useState(false)
    const [selectedNumber,setSelectNumber] = useState() 
    const numberInputHandler = inputText =>{
        
        // Using regurlar expressio  to make validations

        setEnteredValue(inputText.replace(/[^0-9]/g,''))
    }

    const resetInputHandler = ()=>{
        setEnteredValue('');
        setConfirmed(false)
    }
    const confirmInputHanlder = ()=>{
        const chosenNumber = parseInt(enteredValue)
        if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99){
            Alert.alert('Invalid number!','Number has to be a number between 1 and 99.',
            [{text:'okay',style:'destructive',onPress:resetInputHandler}]
            );
            return;
        }
            
        setConfirmed(true)
        setSelectNumber(chosenNumber)
        setEnteredValue('')
        Keyboard.dismiss();

    }
    let confirmedOutput;
    if(confirmed){
        confirmedOutput = 
        <Card style={styles.summaryContainer}>
            <Text>You selected: </Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <MainButton onClick={()=> props.onStartGame(selectedNumber)}>START GAME</MainButton> 
        </Card>
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
            }}>
        <View style={styles.screen}>
            <TitleText>Start a New Game</TitleText>
            <Card style={{width: 300, maxWidth: '80%',alignItems:'center'}}>
                <BodyText>Select a Number</BodyText>
                <Input style={styles.input} 
                
                 blurOnSubmit 
                 autoCapitalize='none'
                 autoCorrect={false} 
                 keyboardType="number-pad" 
                 maxLength={2}
                 onChangeText={numberInputHandler}
                 value={enteredValue}
                 />
                <View style={styles.btnContainer}>
                   <View style={styles.btnCard}><Button title="Reset" onPress={resetInputHandler} color={Colors.accent}/></View>
                   <View style={styles.btnCard}><Button title="Confirm" onPress={confirmInputHanlder} color={Colors.primaryColor}/></View>
                </View> 
            </Card>
            {confirmedOutput}
        </View>
    </TouchableWithoutFeedback>
 
    )
}

const styles = StyleSheet.create({
    screen:{ 
        flex:1,
        padding: 10,
        alignItems: 'center', 
    },
    title:{
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'opens-sans-bold'
    },
    
    btnContainer:{
        flexDirection: "row",
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    btnCard:{
        width: '40%',
    },

    input:{
        width: 50,
        textAlign:'center'
    },
    summaryContainer:{
        marginTop: 20,
        alignItems: "center"
    },
    
})

export default StartGameScreen;