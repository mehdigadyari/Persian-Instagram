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
        marginTop: 7,
        borderColor:"#00000022",
        justifyContent:"center",
        alignItems:"center"
    },
    thumbStyle: {
        width: "95%",
        height: "95%"
    },
    txtView: {
        fontSize: 7,
        marginTop: 0
    },
})

const HighlightStory = ({ name, imgUri }) => {
    return (
        <TouchableOpacity>
            <View style={styles.root} >
                <View style={styles.imgView} >
                    <Thumbnail style={styles.thumbStyle} source={imgUri} />
                </View>
                <Text style={styles.txtView}> {name} </Text>
            </View>

        </TouchableOpacity>
    )
}

export default HighlightStory
