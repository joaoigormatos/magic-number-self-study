import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font'
import {AppLoading} from 'expo'
//Components
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

// We have create this project 
const fetchFonts = () => {
  return Font.loadAsync({
    'opens-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'opens-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
}
 
export default function App() {
    const [userNumber,setUserNumber] = useState()
    const [numOfRound,setNumberOfRounds] = useState(0)
    const [dataLoaded, setDataLoaded] = useState(false)

    if(!dataLoaded){

      return <AppLoading startAsync={fetchFonts} onError={(err)=> console.log(err)} onFinish={()=> setDataLoaded(true) } />
    } 

    const configureNewGameHandler = ()=>{
        setNumberOfRounds(0)
        setUserNumber(null)
    }

    const startGameHandler = (selectedNumber) =>{
      setUserNumber(selectedNumber);
      setNumberOfRounds(0)
    }
    
    const gameOverHandler = numOfRounds=>{
      setNumberOfRounds(numOfRounds)
    }

    let content = <StartGameScreen onStartGame={startGameHandler}/>
    if(userNumber && numOfRound <=0){
      content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
    }else if(numOfRound > 0){
      content = <GameOverScreen userNumber={userNumber} roundsNumber={numOfRound} onRestart={configureNewGameHandler} />
    }
  return (
    <View style={styles.screen}>  
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}


const styles = StyleSheet.create({
      screen:{
        flex: 1,
      }
});
