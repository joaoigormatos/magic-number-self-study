import React from 'react'
import {Text, StyleSheet} from 'react-native'

const TitleText = props =>  <Text style={{...props.style},{...styles.title}}>{props.children}</Text>

const styles = StyleSheet.create({
    title: {
        fontFamily: 'opens-sans-bold',
        fontSize: 22
    }
})
export default TitleText;