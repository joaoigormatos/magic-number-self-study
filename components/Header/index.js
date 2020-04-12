
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import Colors from '../../constants/Colors'
const Header = (props)=>{
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View> 
    )
}
0
const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 90,
        paddingTop:36,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent:'center',
        },
    headerTitle:{
        color:'white',
        fontSize: 18,
        fontFamily: 'opens-sans-bold'
    },
})
export default Header;