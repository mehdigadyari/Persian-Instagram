import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Thumbnail } from 'native-base'
import Iphone from '../assets/images/iphone.png'

const styles = StyleSheet.create({
    root: {
        width: 45,
        height: 45,
        margin: 10,
        // marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: "#f00"
    },
    imgView: {
        borderRadius: 35,
        borderWidth: 1.5,
        width: 50,
        height: 50,
        padding: 1,
        marginTop: 7
    },
    thumbStyle: {
        width: "100%",
        height: "100%"
    },
    txtView: {
        fontSize: 7,
        marginTop: 0
    },
})

const Story = ({ name, imgUri, seen }) => {
    return (
        <TouchableOpacity>
            <View style={styles.root} >
                <View style={[styles.imgView, { borderColor: seen ? "#00000022" : "#ec407a" }]} >
                    <Thumbnail style={styles.thumbStyle} source={imgUri} />
                </View>
                <Text style={styles.txtView}> {name} </Text>
            </View>

        </TouchableOpacity>
    )
}

export default Story
