import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    iView: {
        margin:5,
        marginLeft: 5,
        marginRight: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 5,
        borderColor: "#a1a1a188",
        borderWidth: .5,
        borderRadius: 10,
        height: 30
    },
    txtView:{
        marginLeft:5,
        fontWeight:'bold',
        fontSize:12
    }
})


const tag = ({ txt, iconComponent }) => {
    return (
        <View style={styles.iView} >
        {iconComponent ? iconComponent : null}

            <Text  style={styles.txtView} >{txt}</Text>
        </View>
    )
}

export default tag
